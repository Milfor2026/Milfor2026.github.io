// ===== SEDES / LUGARES =====
// Cada sede aparece en "Ubicación". Campos:
//   nombre / nombre_en      título del bloque
//   texto / texto_en        línea bajo el título (dirección o descripción)
//   lat, lng                coordenadas del pin (si existen: botones Google Maps y Waze)
//   embed                   true = mostrar el mapa de Google incrustado (solo en una sede para que la página cargue rápido)
//   mapaImg                 mapa ilustrado opcional (fotos/<mapaImg>-480/800/1600), se amplía al tocarlo
//   mapaImg_w, mapaImg_h    tamaño de esa imagen
// Para agregar una sede nueva, copie un bloque y cambie los datos.
window.MILFOR_SEDES = [
  {id:"central", nombre:"Sede Central · Milfor Paraíso", nombre_en:"Main office · Milfor Paraíso",
   texto:"Carrera 14 (Av. del Ferrocarril) # 17-55, Girardot, Colombia", texto_en:"Carrera 14 (Av. del Ferrocarril) # 17-55, Girardot, Colombia",
   lat:4.2982753, lng:-74.808349, embed:true},
  {id:"gaitan", nombre:"Milfor Gaitán", nombre_en:"Milfor Gaitán",
   texto:"Cra. 17 # 21-20, Girardot, Colombia", texto_en:"Cra. 17 # 21-20, Girardot, Colombia",
   lat:4.3018893, lng:-74.8077492},
  {id:"campestre", nombre:"Milfor Casa Campestre", nombre_en:"Milfor Casa Campestre",
   texto:"Cómo llegar a Casa Campestre", texto_en:"How to get to Casa Campestre",
   lat:null, lng:null, mapaImg:"mapa-llegar", mapaImg_w:1259, mapaImg_h:1600}
];
