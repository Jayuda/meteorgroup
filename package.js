Package.describe({
  name: 'jayuda:meteorgroup',
  version: '0.0.5',
  summary: 'Reactive group to sum / min / max / avg data in MiniMongo - client side.',
  git: 'https://github.com/Jayuda/meteorgroup',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1', 'client');
  api.use('mongo', 'client')
  api.use('reactive-var', 'client')
  api.addFiles('meteorgroup.js', 'client');
});
