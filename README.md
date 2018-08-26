# react-yandex-maps v3.0.1-canary

> For latest stable version see [`v2.2.0`][latest]

[Yandex.Maps JS API][ymaps-api] bindings for React

[ymaps-api]:
  https://tech.yandex.com/maps/doc/jsapi/2.1/quick-start/index-docpage/
[latest]: https://github.com/gribnoysup/react-yandex-maps/tree/v2.2.0

## Documentation

https://react-yandex-maps.now.sh

## Contributing

Feel free to submit issues and/or PRs if you found bugs 🐞 or have some features
in mind! The documentation improvements will be super appreciated, if you feel
that docs are lacking in some places 📝👩‍🔬

### Developing locally

If you want to work on the library locally:

1. Fork this repository and clone your version of the repo
2. Install npm dependencies

```sh
npm install
```

3. Start library build in the watch mode

```sh
npm run dev
```

4. Install documentation dependencies

```sh
cd docs && npm install
```

5. Start docs server locally

```sh
npm run dev
```

If everything went well, you now have documentation running on
`http://localhost:3000`

You can find special sandbox page on
[`http://localhost:3000/sandbox`](http://localhost:3000/sandbox)

Now you can make changes to the library and see them applied to the sandbox in
real time.

When you commit changes, eslint will make sure that there are no linting errors
and prettier will format your code based on the repo settings.

When you push changes, jest will run a set of unit tests to make sure that all
of them are passing.

## License

[MIT](LICENSE)

## Kudos

Thanks to [@effrenus](https://github.com/effrenus/) and his
[yandex-map-react](https://github.com/effrenus/yandex-map-react) for inspiring
this library
