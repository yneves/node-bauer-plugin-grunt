# bauer-plugin-grunt

Plugin for `bauer` to run grunt tasks.

## Installation

```
npm install bauer-plugin-grunt
```

## Usage

Using `bauer` to run grunt tasks doesn't require `grunt-cli` since it loads the `Grunt` enviroment itself and keeps it loaded for further calls. The idea is running tasks in parallel, leveraging multiple cores.

```js
module.exports = function(Promise) {
  return Promise.grunt({
    tasks: ["js","css"],
    env: "dev"
  }).then(function() {
    // build finished
  });
};
```

## Configuration

```js
{
  workers: 1,
  slots: 1,
  delay: 0,
  gruntfile: "path/to/Gruntfile.js"
}
```


## API Summary

  * `Promise`
    * `.grunt() :Promise`
    * `.grunt(task String) :Promise`
    * `.grunt(tasks Array) :Promise`
    * `.grunt(options Object) :Promise`

## License

[MIT](./LICENSE)
