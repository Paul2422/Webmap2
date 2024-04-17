var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_Googlehybrid_1 = new ol.layer.Tile({
            'title': 'Google hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_Brgy_Boundary_Poly_2 = new ol.format.GeoJSON();
var features_Brgy_Boundary_Poly_2 = format_Brgy_Boundary_Poly_2.readFeatures(json_Brgy_Boundary_Poly_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brgy_Boundary_Poly_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brgy_Boundary_Poly_2.addFeatures(features_Brgy_Boundary_Poly_2);
var lyr_Brgy_Boundary_Poly_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Brgy_Boundary_Poly_2, 
                style: style_Brgy_Boundary_Poly_2,
                interactive: true,
                title: '<img src="styles/legend/Brgy_Boundary_Poly_2.png" /> Brgy_Boundary_Poly'
            });
var format_HouseholdListingforNova_3 = new ol.format.GeoJSON();
var features_HouseholdListingforNova_3 = format_HouseholdListingforNova_3.readFeatures(json_HouseholdListingforNova_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HouseholdListingforNova_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HouseholdListingforNova_3.addFeatures(features_HouseholdListingforNova_3);
var lyr_HouseholdListingforNova_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HouseholdListingforNova_3, 
                style: style_HouseholdListingforNova_3,
                interactive: true,
                title: '<img src="styles/legend/HouseholdListingforNova_3.png" /> Household-Listing-for-Nova'
            });
var format_Brgy_Hall_4 = new ol.format.GeoJSON();
var features_Brgy_Hall_4 = format_Brgy_Hall_4.readFeatures(json_Brgy_Hall_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brgy_Hall_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brgy_Hall_4.addFeatures(features_Brgy_Hall_4);
var lyr_Brgy_Hall_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Brgy_Hall_4, 
                style: style_Brgy_Hall_4,
                interactive: true,
                title: '<img src="styles/legend/Brgy_Hall_4.png" /> Brgy_Hall'
            });
var format_BarangayBoundary_Lines_5 = new ol.format.GeoJSON();
var features_BarangayBoundary_Lines_5 = format_BarangayBoundary_Lines_5.readFeatures(json_BarangayBoundary_Lines_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BarangayBoundary_Lines_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BarangayBoundary_Lines_5.addFeatures(features_BarangayBoundary_Lines_5);
var lyr_BarangayBoundary_Lines_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BarangayBoundary_Lines_5, 
                style: style_BarangayBoundary_Lines_5,
                interactive: true,
                title: '<img src="styles/legend/BarangayBoundary_Lines_5.png" /> Barangay-Boundary_Lines'
            });
var format_Bayawan_Boundary_6 = new ol.format.GeoJSON();
var features_Bayawan_Boundary_6 = format_Bayawan_Boundary_6.readFeatures(json_Bayawan_Boundary_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bayawan_Boundary_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bayawan_Boundary_6.addFeatures(features_Bayawan_Boundary_6);
var lyr_Bayawan_Boundary_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bayawan_Boundary_6, 
                style: style_Bayawan_Boundary_6,
                interactive: true,
                title: '<img src="styles/legend/Bayawan_Boundary_6.png" /> Bayawan_Boundary'
            });
var format_CityVet_7 = new ol.format.GeoJSON();
var features_CityVet_7 = format_CityVet_7.readFeatures(json_CityVet_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CityVet_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CityVet_7.addFeatures(features_CityVet_7);
var lyr_CityVet_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CityVet_7, 
                style: style_CityVet_7,
                interactive: true,
                title: '<img src="styles/legend/CityVet_7.png" /> City Vet'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Googlehybrid_1.setVisible(true);lyr_Brgy_Boundary_Poly_2.setVisible(true);lyr_HouseholdListingforNova_3.setVisible(true);lyr_Brgy_Hall_4.setVisible(true);lyr_BarangayBoundary_Lines_5.setVisible(true);lyr_Bayawan_Boundary_6.setVisible(true);lyr_CityVet_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Googlehybrid_1,lyr_Brgy_Boundary_Poly_2,lyr_HouseholdListingforNova_3,lyr_Brgy_Hall_4,lyr_BarangayBoundary_Lines_5,lyr_Bayawan_Boundary_6,lyr_CityVet_7];
lyr_Brgy_Boundary_Poly_2.set('fieldAliases', {'ID': 'ID', 'BARANGAY': 'BARANGAY', 'DESC': 'DESC', 'MUN__NAME': 'MUN__NAME', 'LandUse': 'LandUse', 'Name': 'Name', 'Sitio': 'Sitio', 'BARANGAY1': 'BARANGAY1', 'LandUse1': 'LandUse1', 'GROUP': 'GROUP', });
lyr_HouseholdListingforNova_3.set('fieldAliases', {'Region': 'Region', 'Province': 'Province', 'City/municipality': 'City/municipality', 'Barangay': 'Barangay', 'EA': 'EA', 'BSN': 'BSN', 'HUSN': 'HUSN', 'HSN': 'HSN', 'Floor Number': 'Floor Number', 'House / Building Number': 'House / Building Number', 'Name block / Lot Number': 'Name block / Lot Number', 'Street Name': 'Street Name', 'Subdivision / Village': 'Subdivision / Village', 'Sitio/Purok': 'Sitio/Purok', 'Longitude (X Coordinate)': 'Longitude (X Coordinate)', 'Latitude (Y Coordinate)': 'Latitude (Y Coordinate)', });
lyr_Brgy_Hall_4.set('fieldAliases', {'Name': 'Name', 'Population': 'Population', });
lyr_BarangayBoundary_Lines_5.set('fieldAliases', {'ID': 'ID', 'BARANGAY': 'BARANGAY', 'DESC': 'DESC', 'MUN__NAME': 'MUN__NAME', 'LandUse': 'LandUse', 'Name': 'Name', 'Sitio': 'Sitio', 'BARANGAY1': 'BARANGAY1', 'LandUse1': 'LandUse1', 'GROUP': 'GROUP', });
lyr_Bayawan_Boundary_6.set('fieldAliases', {'ID': 'ID', 'BARANGAY': 'BARANGAY', 'DESC': 'DESC', 'MUN__NAME': 'MUN__NAME', 'LandUse': 'LandUse', 'Name': 'Name', 'Sitio': 'Sitio', 'BARANGAY1': 'BARANGAY1', 'LandUse1': 'LandUse1', 'GROUP': 'GROUP', });
lyr_CityVet_7.set('fieldAliases', {'field_1': 'field_1', 'Name': 'Name', 'Lat': 'Lat', 'Long': 'Long', 'field_5': 'field_5', });
lyr_Brgy_Boundary_Poly_2.set('fieldImages', {'ID': 'TextEdit', 'BARANGAY': 'TextEdit', 'DESC': 'TextEdit', 'MUN__NAME': 'TextEdit', 'LandUse': 'TextEdit', 'Name': 'TextEdit', 'Sitio': 'TextEdit', 'BARANGAY1': 'TextEdit', 'LandUse1': 'TextEdit', 'GROUP': 'TextEdit', });
lyr_HouseholdListingforNova_3.set('fieldImages', {'Region': '', 'Province': '', 'City/municipality': '', 'Barangay': '', 'EA': '', 'BSN': '', 'HUSN': '', 'HSN': '', 'Floor Number': '', 'House / Building Number': '', 'Name block / Lot Number': '', 'Street Name': '', 'Subdivision / Village': '', 'Sitio/Purok': '', 'Longitude (X Coordinate)': '', 'Latitude (Y Coordinate)': '', });
lyr_Brgy_Hall_4.set('fieldImages', {'Name': 'TextEdit', 'Population': 'TextEdit', });
lyr_BarangayBoundary_Lines_5.set('fieldImages', {'ID': 'TextEdit', 'BARANGAY': 'TextEdit', 'DESC': 'TextEdit', 'MUN__NAME': 'TextEdit', 'LandUse': 'TextEdit', 'Name': 'TextEdit', 'Sitio': 'TextEdit', 'BARANGAY1': 'TextEdit', 'LandUse1': 'TextEdit', 'GROUP': 'TextEdit', });
lyr_Bayawan_Boundary_6.set('fieldImages', {'ID': 'TextEdit', 'BARANGAY': 'TextEdit', 'DESC': 'TextEdit', 'MUN__NAME': 'TextEdit', 'LandUse': 'TextEdit', 'Name': 'TextEdit', 'Sitio': 'TextEdit', 'BARANGAY1': 'TextEdit', 'LandUse1': 'TextEdit', 'GROUP': 'TextEdit', });
lyr_CityVet_7.set('fieldImages', {'field_1': '', 'Name': '', 'Lat': '', 'Long': '', 'field_5': '', });
lyr_Brgy_Boundary_Poly_2.set('fieldLabels', {'ID': 'no label', 'BARANGAY': 'inline label', 'DESC': 'no label', 'MUN__NAME': 'no label', 'LandUse': 'no label', 'Name': 'inline label', 'Sitio': 'inline label', 'BARANGAY1': 'no label', 'LandUse1': 'no label', 'GROUP': 'no label', });
lyr_HouseholdListingforNova_3.set('fieldLabels', {'Region': 'no label', 'Province': 'no label', 'City/municipality': 'no label', 'Barangay': 'no label', 'EA': 'no label', 'BSN': 'no label', 'HUSN': 'no label', 'HSN': 'no label', 'Floor Number': 'no label', 'House / Building Number': 'no label', 'Name block / Lot Number': 'no label', 'Street Name': 'no label', 'Subdivision / Village': 'no label', 'Sitio/Purok': 'no label', 'Longitude (X Coordinate)': 'no label', 'Latitude (Y Coordinate)': 'no label', });
lyr_Brgy_Hall_4.set('fieldLabels', {'Name': 'inline label', 'Population': 'inline label', });
lyr_BarangayBoundary_Lines_5.set('fieldLabels', {'ID': 'no label', 'BARANGAY': 'no label', 'DESC': 'no label', 'MUN__NAME': 'no label', 'LandUse': 'no label', 'Name': 'no label', 'Sitio': 'no label', 'BARANGAY1': 'no label', 'LandUse1': 'no label', 'GROUP': 'no label', });
lyr_Bayawan_Boundary_6.set('fieldLabels', {'ID': 'no label', 'BARANGAY': 'inline label', 'DESC': 'no label', 'MUN__NAME': 'no label', 'LandUse': 'no label', 'Name': 'no label', 'Sitio': 'no label', 'BARANGAY1': 'no label', 'LandUse1': 'no label', 'GROUP': 'no label', });
lyr_CityVet_7.set('fieldLabels', {'field_1': 'no label', 'Name': 'no label', 'Lat': 'no label', 'Long': 'no label', 'field_5': 'no label', });
lyr_CityVet_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});