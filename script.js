function createSenStadtLayer(url) {
    return L.tileLayer.wms(url, {
        layers: '0',
        styles: 'fill',
        format: 'image/jpeg',
        transparent: true,
        attribution: '<a href="http://www.stadtentwicklung.berlin.de/geoinformation/fis-broker/">Geoportal Berlin bei der Senstadt</a>',
        crs: L.CRS.EPSG4326
    });
}

var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
});

var baseMaps = {
    'Luftbilder 2014': createSenStadtLayer('http://fbinter.stadt-berlin.de/fb/wms/senstadt/k_luftbild2014'),
    'Luftbilder 2011': createSenStadtLayer('http://fbinter.stadt-berlin.de/fb/wms/senstadt/k_luftbild2011_20'),
    'Luftbilder 2010': createSenStadtLayer('http://fbinter.stadt-berlin.de/fb/wms/senstadt/k_luftbild2010_rgb'),
    'Luftbilder 2009': createSenStadtLayer('http://fbinter.stadt-berlin.de/fb/wms/senstadt/k_luftbild2009'),
    'Luftbilder 2007': createSenStadtLayer('http://fbinter.stadt-berlin.de/fb/wms/senstadt/k_luftbild2007'),
    'Luftbilder 2004': createSenStadtLayer('http://fbinter.stadt-berlin.de/fb/wms/senstadt/luftbild2004'),
    'Luftbilder 1928': createSenStadtLayer('http://fbinter.stadt-berlin.de/fb/wms/senstadt/k_luftbild1928'),
    'Digitale Color-Infrarot-Orthophotos 2010': createSenStadtLayer('http://fbinter.stadt-berlin.de/fb/wms/senstadt/k_luftbild2010_cir'),
    'Berlin-Zoom': createSenStadtLayer('http://fbinter.stadt-berlin.de/fb/wms/senstadt/berlinzoom'),
    'Karte von Berlin 1:5000': createSenStadtLayer('http://fbinter.stadt-berlin.de/fb/wms/senstadt/k5_farbe'),
    'Hausumringe': createSenStadtLayer('http://fbinter.stadt-berlin.de/fb/wms/senstadt/wmsk_hausumringe'),
    'Postleitzahlen': createSenStadtLayer('http://fbinter.stadt-berlin.de/fb/wms/senstadt/plz'),
    'Gebäudeschäden 1945': createSenStadtLayer('http://fbinter.stadt-berlin.de/fb/wms/senstadt/gebschaden'),
    'Hobrechtplan 1862': createSenStadtLayer('http://fbinter.stadt-berlin.de/fb/wms/senstadt/hobrecht'),
    'Baugrundkarte': createSenStadtLayer('http://fbinter.stadt-berlin.de/fb/wms/senstadt/k_baugrund'),
    'Baunutzungsplan': createSenStadtLayer('http://fbinter.stadt-berlin.de/fb/wms/senstadt/bnp'),
    'Flächennutzungsplan': createSenStadtLayer('http://fbinter.stadt-berlin.de/fb/wms/senstadt/fnp_ak'),
    'Gewässer': createSenStadtLayer('http://fbinter.stadt-berlin.de/fb/wms/senstadt/gewkarte'),
    '20 grüne Hauptwege': createSenStadtLayer('http://fbinter.stadt-berlin.de/fb/wms/senstadt/gruene_wege_wander'),
    'Spielplatzbestand': createSenStadtLayer('http://fbinter.stadt-berlin.de/fb/wms/senstadt/gris_spielplatz'),
    'Arbeitslosenanteil 2010 (LOR)': createSenStadtLayer('http://fbinter.stadt-berlin.de/fb/wms/senstadt/MsozS_S1_arblos2010LOR'),
    'Ausländeranteil 2010 (LOR)': createSenStadtLayer('http://fbinter.stadt-berlin.de/fb/wms/senstadt/MsozS_E7_2010LOR'),
    'Kinder und Jugendliche 2010 (LOR)': createSenStadtLayer('http://fbinter.stadt-berlin.de/fb/wms/senstadt/MsozS_E5_2010LOR')
};

var map = L.map('map', {
    center: [52.5145, 13.3444],
    zoom: 14,
    maxBounds: [[52.669, 13.075], [52.364, 13.736]],
    layers: [baseMaps['Luftbilder 2014']]
});

L.control.layers(baseMaps, null, {collapsed: false, position: 'topleft'}).addTo(map);

var hash = new L.Hash(map);
