// ===== GALERÍA =====
// Las fotos están en la carpeta fotos/ en tres tamaños (nombre-480 .webp, nombre-800 y nombre-1600 en .webp y .jpg).
// Para agregar una foto nueva: procésela con /workspace/milfor-web/procesar_fotos.py
// cat:"boda" o cat:"quince" hace que la foto se abra desde la tarjeta de Servicios correspondiente.
// y agregue una línea aquí con su nombre (sin extensión), su ancho y alto en px, y los títulos.
window.MILFOR_GALERIA = [
  {foto:"arbol", cat:"boda",     w:1064, h:711,  titulo:"Boda bajo el árbol · Milfor Casa Campestre", titulo_en:"Wedding under the tree · Milfor Casa Campestre"},
  {foto:"ceremonia", cat:"boda", hd:1, w:1287, h:1600, titulo:"Ceremonia",               titulo_en:"Ceremony",           pos:"50% 35%"},
  {foto:"capilla", cat:"boda",   w:1074, h:711,  titulo:"Boda en la capilla",      titulo_en:"Chapel wedding"},
  {foto:"quince", cat:"quince",    w:1399, h:1419, titulo:"Quince años",             titulo_en:"Quinceañera",        pos:"50% 30%"},
  {foto:"piscina",   w:1409, h:1055, titulo:"Cena al aire libre", titulo_en:"Outdoor dinner"},
  {foto:"arco", cat:"boda",      w:1078, h:1067, titulo:"Arco floral",             titulo_en:"Floral arch",        pos:"50% 30%"},
  {foto:"jardin", hd:1,    w:1184, h:1600, titulo:"Jardín y tarima",         titulo_en:"Garden & stage",     pos:"50% 40%"},
  {foto:"novios", cat:"boda",    w:712,  h:958,  titulo:"Mesa de novios",          titulo_en:"Sweetheart table",   pos:"50% 55%"},
  {foto:"novia", cat:"boda",     w:1070, h:710,  titulo:"La novia",                titulo_en:"The bride"},
  {foto:"mesa",      w:1408, h:1295, titulo:"Montaje de mesa",         titulo_en:"Table setting"},
  {foto:"burdeos", cat:"boda",   w:1075, h:1065, titulo:"Recepción en el jardín",  titulo_en:"Garden reception",   pos:"50% 40%"},
  {foto:"quince15", cat:"quince",  w:1080, h:1067, titulo:"Fiesta de quince",        titulo_en:"Quinceañera party",      pos:"50% 40%"},
  {foto:"pasillo", cat:"boda", hd:1,   w:1173, h:1600, titulo:"Pasillo de ceremonia",    titulo_en:"Ceremony aisle",     pos:"50% 45%"},
  {foto:"mesaimperial", w:1395, h:780, titulo:"Mesa imperial",          titulo_en:"Banquet table"},
  {foto:"centro", hd:1,    w:1197, h:1600, titulo:"Centro de mesa",          titulo_en:"Centerpiece",        pos:"50% 40%"},
  {foto:"lounge",    w:1407, h:1102, titulo:"Zona lounge",             titulo_en:"Lounge area"},
  {foto:"pf-arbol",  w:1066, h:1600, titulo:"Noche bajo el árbol · Milfor Casa Campestre", titulo_en:"Night under the tree · Milfor Casa Campestre", pos:"50% 35%"},
  {foto:"pf-gaitan", w:1200, h:1600, titulo:"Salón Milfor Gaitán",     titulo_en:"Milfor Gaitán hall",  pos:"50% 50%"},
  {foto:"pf-iglesia", cat:"boda", w:1024, h:682, titulo:"Ceremonia en la iglesia", titulo_en:"Church ceremony"},
  {foto:"pf-mesainglesa", w:1024, h:682, titulo:"Mesa inglesa",        titulo_en:"English-style table"},
  {foto:"pf-novios", cat:"boda", w:1280, h:852,  titulo:"Los novios",              titulo_en:"The couple"},
  {foto:"pf-mesablanca", w:1280, h:854, titulo:"Mesa con flores blancas", titulo_en:"Table with white flowers"},
  {foto:"pf-pista15", cat:"quince", w:1600, h:1066, titulo:"Pista iluminada de quince años", titulo_en:"Lit-up quinceañera dance floor"},
  {foto:"pf-quince", cat:"quince", w:1600, h:1066, titulo:"Fiesta de quince años",   titulo_en:"Quinceañera celebration"}
];
