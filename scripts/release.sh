#!/bin/sh

set -e

TMP_PACKAGE_JSON="package.json.tmp"
PACKAGE_JSON="package.json"

DEFAULT_RELEASE_TAG="latest"
CANARY_RELEASE_TAG="canary"

DEFAULT_RELEASE_TYPE="minor"

RELEASE_TAG="${1:-$DEFAULT_RELEASE_TAG}"
RELEASE_TYPE="${2:-$DEFAULT_RELEASE_TYPE}"

if [[ $(git diff --shortstat 2> /dev/null | tail -n1) != "" ]]
then
  echo "You have uncommited changes, please commit everyting before proceeding with release"
  echo

  exit 1
fi

# Copy current package.json just in case
cp $PACKAGE_JSON $TMP_PACKAGE_JSON

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

echo "Preparing to publish $RELEASE_TYPE release $RELEASE_VERSION"
read -p "Is this OK? [y/N] " PROCEED
echo

if [ "$PROCEED" == "y" ] || [ "$PROCEED" == "Y" ]; then
  # Reinstall dependencies just in case
  echo "Installing dependencies"
  npm install

  # Run tests
  npm run test

  # Build lib
  echo "Building distribution assets"
  npm run build

  # Publish the library
  echo
  echo "Publishing release to npm"
  echo

  npm publish --access public --tag $RELEASE_TAG

  # Commit, tag and push to github
  echo "Commiting release to Git"
  echo

  if [ "$RELEASE_TAG" == "$CANARY_RELEASE_TAG" ]; then
    echo "Canary release: skipping commit step, reverting package.json change"
    echo

    # If canary, skip commit and revert package.json (we will create tag though)
    cp $TMP_PACKAGE_JSON $PACKAGE_JSON
  else 
    git commit -am "Release: $RELEASE_TYPE $RELEASE_VERSION"
  fi

  git tag $RELEASE_VERSION
  git push --tags

  echo
  echo "============================="
  echo

  # After the release is done, let's release the docs
  echo "Releasing new documentation"
  echo

  # Build the docs
  echo "Building the docs assets"
  npm run docs:build

  # Deploy to now
  echo "Deploying docs to now"
  npm run docs:deploy
  echo

  if [ "$RELEASE_TAG" == "$CANARY_RELEASE_TAG" ]; then
    echo "Canary release: skipping now aliasing"
    echo
  else
    npm run docs:alias
    echo
  fi
  
  echo
  echo "Done"
  echo
else
  echo "Publishing aborted"
  echo

  # If the publishing was aborted, restore package.json
  cp $TMP_PACKAGE_JSON $PACKAGE_JSON
fi

# Remove temp package.json file
rm -rf $TMP_PACKAGE_JSON