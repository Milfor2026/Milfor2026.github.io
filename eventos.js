// ===== VIDEOS POR TIPO DE EVENTO (bloque "Celebra con Milfor", debajo del inicio) =====
// Cada elemento es una tarjeta con un video corto que se reproduce solo (sin sonido, en bucle) cuando se ve en pantalla.
//   id                 identificador corto
//   titulo / titulo_en nombre del tipo de evento
//   video              nombre del archivo en videos/ (videos/<video>.mp4 + videos/<video>-poster.webp)
//   video_v            opcional: súbalo (2, 3…) al reemplazar el video, para que los teléfonos no muestren el anterior
// Crear el video:  python3 /workspace/milfor-web/procesar_video.py <video> sede <nombre>  y renombrar a evento-<id>.mp4
// Para agregar otro tipo (p. ej. corporativos), copie una línea y cambie los datos.
window.MILFOR_EVENTOS = [
  {id:"bodas",  titulo:"Bodas",       titulo_en:"Weddings",      video:"evento-bodas"},
  {id:"quince", titulo:"Quince años", titulo_en:"Sweet fifteen", video:"evento-quince"}
];
