(function () {
  var fallback = document.getElementById('map-fallback');
  if (typeof jsVectorMap === 'undefined') { if (fallback) fallback.style.display = 'block'; return; }
  try {
    // region colour groups
    var europe = ['GB', 'DE', 'FR', 'ES', 'IT', 'AT', 'CH', 'NL', 'SE', 'PL', 'SK', 'SI', 'RO'];
    var americas = ['US', 'MX', 'BR'];
    var apac = ['SG', 'ID', 'PH', 'JP', 'KR', 'AU'];
    var values = {};
    europe.forEach(function (c) { values[c] = 'eu'; });
    americas.forEach(function (c) { values[c] = 'am'; });
    apac.forEach(function (c) { values[c] = 'ap'; });

    new jsVectorMap({
      selector: '#world-map',
      map: 'world',
      backgroundColor: 'transparent',
      zoomButtons: false,
      zoomOnScroll: false,
      draggable: false,
      regionStyle: {
        initial: { fill: 'rgba(163,184,194,0.16)', stroke: 'rgba(16,34,46,0.9)', strokeWidth: 0.4 },
        hover: { fill: 'rgba(163,184,194,0.3)', cursor: 'default' }
      },
      series: {
        regions: [{
          attribute: 'fill',
          scale: { eu: '#3fe0c5', am: '#ff8e7a', ap: '#ffd08a' },
          values: values
        }]
      },
      // Hong Kong isn't a separate region on the world map, so it gets a marker
      markers: [{ name: 'Hong Kong', coords: [22.32, 114.17] }],
      markerStyle: {
        initial: { fill: '#ffd08a', stroke: '#10222e', strokeWidth: 1.5, r: 5 },
        hover: { fill: '#ffdca8', r: 6 }
      },
      onRegionTooltipShow: function (event, tooltip, code) {
        // only show tooltips for highlighted countries to keep it calm
        if (!values[code]) { event.preventDefault(); }
      }
    });
  } catch (e) {
    if (fallback) fallback.style.display = 'block';
    var el = document.getElementById('world-map');
    if (el) el.style.display = 'none';
  }
})();
