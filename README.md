Radium Documentation
======================

[![Build Status](https://travis-ci.org/FormidableLabs/radium-docs.svg?branch=master)](https://travis-ci.org/FormidableLabs/radium-docs)

[Documentation site](https://formidable.com/open-source/radium/) for Radium.

[Check out the wiki](https://github.com/FormidableLabs/formidable-landers/wiki) to learn more about this lander.

## Publishing

To release this lander, please follow the [archetype release instructions](https://github.com/FormidableLabs/builder-docs-archetype#lander-release) for our `npm version` workflow.

When publishing, please make sure to install and use `npm@5.6.0` to preserve
file timestamp metadata as it is required for our overall website build and
versions subsequent to `5.6.0` intentionally destroy this metadata:

```sh
$ npm install -g npm@5.6.0
$ npm --version
5.6.0
```

## Build

### Prismjs Notes

Prismjs has a very touchy configuration such that if two different versions are
installed in `node_modules` and used, the world breaks with very unhelpful
messages like:

```
TypeError: Cannot read property 'tag' of undefined
    at main:72:6800
    at Object.t.variable.pattern (main:72:8736)
    at t (main:1:352)
    at Object.e.exports (main:68:13737)
    at t (main:1:352)
    at Object.defineProperty.value (main:68:6118)
    at t (main:1:352)
    at Object.defineProperty.value (main:34:21132)
    at t (main:1:352)
    at Object.<anonymous> (main:1:993)
````

during a webpack build.

Unfortunately, this project imports Prismjs in both root and via `react-live`.
To solve this issue `react-live` (and `spectacle` too for the same reasons)
pins prism to:

```js
"prismjs": "1.6.0",
```

... and we do the same in this package as well. For a further discussion, see:

- https://github.com/FormidableLabs/spectacle/issues/512
- https://github.com/FormidableLabs/spectacle/pull/546
- https://github.com/FormidableLabs/spectacle/issues/558
