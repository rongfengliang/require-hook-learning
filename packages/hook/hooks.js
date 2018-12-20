const addHook = function (ext, compile) {
    require.extensions[ext] = function hook(module, file) {
      const content = compile(file);
      return module._compile('module.exports = ' + JSON.stringify(content), file);
    }
  }
  
  module.exports = addHook;