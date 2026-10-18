// ===== SEDES / LUGARES =====
// Cada sede aparece en "Ubicación". Campos:
//   nombre / nombre_en      título del bloque
//   zona / zona_en          línea corta de ubicación (opcional, ej. municipio)
//   texto / texto_en        línea bajo el título (dirección o descripción)
//   nota / nota_en          nota opcional (ej. piso o indicaciones)
//   lat, lng                coordenadas del pin (si existen: botones Google Maps y Waze)
//   embed                   true = mostrar el mapa de Google incrustado (solo en una sede para que la página cargue rápido)
//   mapaImg                 mapa ilustrado opcional (fotos/<mapaImg>-480/800/1600), se amplía al tocarlo
//   mapaImg_w, mapaImg_h    tamaño de esa imagen
// Para agregar una sede nueva, copie un bloque y cambie los datos.
window.MILFOR_SEDES = [
  {id:"central", nombre:"Sede Central · Milfor Paraíso", nombre_en:"Main office · Milfor Paraíso",
   texto:"Carrera 14 (Av. del Ferrocarril) # 17-55, Girardot, Colombia", texto_en:"Carrera 14 (Av. del Ferrocarril) # 17-55, Girardot, Colombia",
   nota:"Milfor Paraíso queda en el segundo piso del mismo edificio.", nota_en:"Milfor Paraíso is on the second floor of the same building.",
   lat:4.2982753, lng:-74.808349, embed:true, mapaImg:"mapa-central", mapaImg_w:1266, mapaImg_h:1600,
   lbTit:"Sede Central · Milfor Paraíso · Centro de Girardot", lbTit_en:"Main office · Milfor Paraíso · Downtown Girardot"},
  {id:"gaitan", nombre:"Milfor Gaitán", nombre_en:"Milfor Gaitán",
   texto:"Cra. 17 # 21-20, Girardot, Colombia", texto_en:"Cra. 17 # 21-20, Girardot, Colombia",
   lat:4.3018893, lng:-74.8077492, mapaImg:"mapa-gaitan", mapaImg_w:1406, mapaImg_h:1549,
   lbTit:"Milfor Gaitán · Cómo llegar", lbTit_en:"Milfor Gaitán · How to get there"},
  {id:"campestre", nombre:"Milfor Casa Campestre", nombre_en:"Milfor Casa Campestre", zona:"Ricaurte, Cundinamarca",
   texto:"Cómo llegar a Casa Campestre", texto_en:"How to get to Casa Campestre",
   lat:4.2944097, lng:-74.7907257, mapaImg:"mapa-llegar", mapaImg_w:1259, mapaImg_h:1600}
];
