// ===== SEDES / LUGARES =====
// Cada sede aparece en "Ubicación". Campos:
//   nombre / nombre_en      título del bloque
//   zona / zona_en          línea corta de ubicación (opcional, ej. municipio)
//   texto / texto_en        línea bajo el título (dirección o descripción)
//   nota / nota_en          nota opcional (indicaciones)
//   pisos                   opcional: lista de pisos del edificio {piso, nombre, desc} (+ _en)
//   lat, lng                coordenadas del pin (si existen: botones Google Maps y Waze)
//   mapaImg                 mapa ilustrado opcional (fotos/<mapaImg>-480/800/1600), se amplía al tocarlo
//   mapaImg_w, mapaImg_h    tamaño de esa imagen
//   video                   opcional: video de la sede (videos/<video>.mp4 + -poster.webp), se reproduce al tocarlo.
//                           Crearlo con: python3 /workspace/milfor-web/procesar_video.py <video> sede <id>  ->  video:"sede-<id>"
//   video_v                 opcional: súbalo (2, 3…) al reemplazar el video, para que los teléfonos no muestren el anterior
//   wa / wa_en              opcional: nombre de la sede en el mensaje de "Consultar por WhatsApp" (si falta, se usa nombre)
// Para agregar una sede nueva, copie un bloque y cambie los datos.
window.MILFOR_SEDES = [
  {id:"central", nombre:"Milfor Sede Central y Milfor Paraíso", nombre_en:"Milfor Sede Central and Milfor Paraíso", zona:"Centro de Girardot", zona_en:"Downtown Girardot",
   texto:"Carrera 14 (Av. del Ferrocarril) # 17-57, Girardot, Colombia", texto_en:"Carrera 14 (Av. del Ferrocarril) # 17-57, Girardot, Colombia",
   pisos:[
     {piso:"Primer piso", piso_en:"First floor", nombre:"Milfor Sede Central", nombre_en:"Milfor Sede Central (main office)", desc:"Oficinas de administración, taller y floristería", desc_en:"Administration offices, workshop and flower shop"},
     {piso:"Segundo piso", piso_en:"Second floor", nombre:"Milfor Paraíso", nombre_en:"Milfor Paraíso", desc:"Salón cubierto y climatizado, con capacidad para 100 invitados", desc_en:"Covered, air-conditioned hall for up to 100 guests"}],
   lat:4.2982753, lng:-74.808349, video:"sede-central", video_v:2, mapaImg:"mapa-central", mapaImg_w:1266, mapaImg_h:1600,
   wa:"Milfor Sede Central y Milfor Paraíso (Carrera 14)", wa_en:"Milfor Sede Central and Milfor Paraíso (Carrera 14)",
   lbTit:"Milfor Sede Central y Milfor Paraíso", lbTit_en:"Milfor Sede Central and Milfor Paraíso"},
  {id:"gaitan", nombre:"Milfor Gaitán", nombre_en:"Milfor Gaitán", nota:"Salón semicampestre para eventos sociales y corporativos, con capacidad para hasta 150 invitados", nota_en:"Semi-outdoor hall for social and corporate events, for up to 150 guests",
   texto:"Cra. 17 # 21-20, Girardot, Colombia", texto_en:"Cra. 17 # 21-20, Girardot, Colombia",
   lat:4.3018893, lng:-74.8077492, video:"sede-gaitan", video_v:2, mapaImg:"mapa-gaitan", mapaImg_w:1406, mapaImg_h:1549,
   lbTit:"Milfor Gaitán · Cómo llegar", lbTit_en:"Milfor Gaitán · How to get there"},
  {id:"campestre", nombre:"Milfor Casa Campestre", nombre_en:"Milfor Casa Campestre", zona:"Ricaurte, Cundinamarca",
   texto:"Cómo llegar a Milfor Casa Campestre", texto_en:"How to get to Milfor Casa Campestre", nota:"Su majestuoso samán central, iluminado con más de cien luces en lluvia, crea un ambiente mágico y romántico", nota_en:"Its majestic central saman tree, lit with more than a hundred cascading lights, creates a magical, romantic setting",
   lat:4.2944097, lng:-74.7907257, video:"sede-campestre", video_v:2, mapaImg:"mapa-llegar", mapaImg_w:1259, mapaImg_h:1600}
];
