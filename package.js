Package.describe({
  name: 'kaizvn:meteor-mailin',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: 'A meteor package for mailin library. Run on meteor below 1.4',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/kaizvn/meteor-mailin',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.4.1');
  api.use('ecmascript');
  api.mainModule('meteor-mailin.js','server');

  api.export('MeteorMailin', 'server');
});

Npm.depends({
  'mailin': '1.0.1'
});


Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('meteor-mailin');
  api.mainModule('meteor-mailin.js');
});
