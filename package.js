Package.describe({
  "name": "appworkshop:json-editor",
  "description": "A JSON Form editor and generator repackaged for meteor.",
  "homepage": "https://github.com/cunneen/meteor-json-editor",
  "author": "Mike Cunneen <mike@cunneen.net>",
  "git": "https://github.com/cunneen/meteor-json-editor",
  version: '1.6.10',
  // Brief, one-line summary of the package.
  summary: "A JSON Editor and Form Generator",
  // URL to the Git repository containing the source code for this package.
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'signature_pad':'2.3.2'
});

Package.on_use(function (api, where) {
  //api.add_files('json-editor/dist/jsoneditor.min.js', 'client');
  api.use('ecmascript@0.7.3');
  api.add_files('signature_pad_import.js', 'client');
  api.add_files('mule.js', 'client');
  api.add_files('json-editor/dist/jsoneditor.js', 'client');
});
