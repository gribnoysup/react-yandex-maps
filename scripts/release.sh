#!/bin/sh

set -e

TMP_PACKAGE_JSON="package.json.tmp"
PACKAGE_JSON="package.json"

DEFAULT_RELEASE_TAG="latest"
CANARY_RELEASE_TAG="canary"

DEFAULT_RELEASE_TYPE="minor"

RELEASE_TAG="${1:-$DEFAULT_RELEASE_TAG}"
RELEASE_TYPE="${2:-$DEFAULT_RELEASE_TYPE}"

function checkForChanges() {
  if [[ $(git diff --shortstat 2>/dev/null | tail -n1) != "" ]]; then
    echo "You have uncommited changes, please commit everyting before proceeding with release"
    echo

    exit 1
  fi
}

function setEnv() {
  # For canary releases...
  if [ "$RELEASE_TAG" == "$CANARY_RELEASE_TAG" ]; then
    # ... we need to create patch version first
    PATCH_VERSION=$(npm --no-git-tag-version version patch)

    # ... and then based on the patch and latest commit hash
    LATEST_COMMIT_HASH=$(git rev-parse --short HEAD)
    # ... create the release version to be published
    RELEASE_VERSION=$(npm --no-git-tag-version version "$PATCH_VERSION-$RELEASE_TAG.$LATEST_COMMIT_HASH")

    # Reset release type to canary
    RELEASE_TYPE=$RELEASE_TAG
  else
    RELEASE_VERSION=$(npm --no-git-tag-version version $RELEASE_TYPE)
  fi
}

function abortRelease() {
  echo
  echo "⚠️ Publishing aborted"
  echo

  # If the publishing was aborted, restore package.json
  cp $TMP_PACKAGE_JSON $PACKAGE_JSON
  # Remove temp package.json file
  rm -rf $TMP_PACKAGE_JSON

  exit 1
}

function confirmRelease() {
  echo "Preparing to publish $RELEASE_TYPE release $RELEASE_VERSION"
  read -p "Is this OK? [y/N] " PROCEED
  echo

  if [ "$PROCEED" == "y" ] || [ "$PROCEED" == "Y" ] || [ "$PROCEED" == "yes" ]; then
    echo "Proceeding with the release"
  else
    abortRelease
  fi
}

function prepare() {
  echo "  > Installing dependencies from scratch"
  echo

  rm -rf node_modules
  npm install --production=false
}

function test() {
  echo "  > Running tests"
  echo

  npm run test
}

function build() {
  echo "  > Building distribution assets"
  echo

  npm run build
}

function publish() {
  echo "  > Publishing release to npm"
  echo

  npm publish --access public --tag $RELEASE_TAG
}

function pushVersion() {
  echo "  > Commiting release to Git"
  echo

  if [ "$RELEASE_TAG" == "$CANARY_RELEASE_TAG" ]; then
    echo "️⚠️ Canary release: skipping commit step, reverting package.json change"
    echo

    # If canary, skip commit and revert package.json (we will create tag though)
    cp $TMP_PACKAGE_JSON $PACKAGE_JSON
  else
    git commit -am "release($RELEASE_TYPE): $RELEASE_VERSION"
  fi

  git tag $RELEASE_VERSION
  git push --tags
}

function buildDocs() {
  echo "  > Building the docs assets"
  echo

  npm run docs:build
}

function publishDocs() {
  echo "  > Deploying docs to now"
  echo

  if [ "$RELEASE_TAG" == "$CANARY_RELEASE_TAG" ]; then
    echo "⚠️ Canary release: skipping now aliasing"
    npm run docs:deploy -- --target staging
    echo
  else
    npm run docs:deploy -- --target production
    echo
  fi
}

function main() {
  # First check if there are any uncommited git changes
  checkForChanges

  # Copy current package.json just in case
  cp $PACKAGE_JSON $TMP_PACKAGE_JSON

  # Set environmental variables
  setEnv

  # Confirm if should proceed with release
  confirmRelease

  # Reinstall dependencies just in case
  prepare

  # Run tests
  test

  # Build lib
  build

  # Publish the library
  publish

  # Commit, tag and push to github
  pushVersion

  echo
  echo "============================="
  echo

  # After the release is done, let's release the docs
  echo "Releasing new documentation"
  echo

  # Build the docs
  buildDocs

  # Deploy to now
  publishDocs

  echo
  echo "Done"
  echo

  # Remove temp package.json file
  rm -rf $TMP_PACKAGE_JSON
}

trap 'abortRelease' QUIT

trap 'abortRelease' INT

main
