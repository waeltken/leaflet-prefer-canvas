Package.describe({
  name: 'waeltken:leaflet-prefer-canvas',
  version: '0.0.1',
  summary: 'Set the L_PREFER_CANVAS option for your leaflet map.',
  git: 'https://github.com/waeltken/leaflet-prefer-canvas',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('coffeescript');
  api.use('meteorhacks:inject-initial');
  api.addFiles('enable_canvas.coffee', 'server');
  api.export('PreferCanvasInject', 'server');
});
