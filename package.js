Package.describe({
  summary: "A JSON Editor and Form Generator"
});
Package.on_use(function (api, where) {
  //api.add_files('json-editor/dist/jsoneditor.min.js', 'client');
  api.add_files('json-editor/dist/jsoneditor.js', 'client');
});