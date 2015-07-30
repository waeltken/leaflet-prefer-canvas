# leaflet-prefer-canvas
Uses the **meteorhacks:inject-initial** package to inject the `L_PREFER_CANVAS = true;` option before your prefered leaflet package is loaded.

This is added to your documents head:

```
<head>
  <script>L_PREFER_CANVAS = true;</script>
  ...
  stylesheets and meteor code
</head>
```
