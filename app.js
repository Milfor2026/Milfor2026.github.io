(function(){
const EN={n_serv:"Services",n_lugar:"Our venues",n_cot:"Quote",m_tipo_aria:"Menu type",q_img_alt:"Example of the table finder on a phone",wa_sede:"Ask on WhatsApp",wa_menu:"Ask about this menu on WhatsApp",cta_cot:"Get a quote",ct_tit:"Get a quote for your event",ct_sub:"Answer these questions and WhatsApp will open with your message ready to send us.",ct_nombre:"Name",ct_tipo:"Type of event",ct_elige:"Choose an option",ct_t_boda:"Wedding",ct_t_quince:"Quinceañera (sweet fifteen)",ct_t_corp:"Corporate",ct_t_cel:"Birthday / Celebration",ct_t_otro:"Other",ct_fecha:"Approximate date",ct_inv:"Number of guests",ct_sede:"Venue of interest",ct_s_central:"Main venue / Milfor Paraíso",ct_s_gaitan:"Milfor Gaitán",ct_s_campestre:"Milfor Casa Campestre",ct_s_nose:"Not sure yet",ct_com:"Comment",ct_opc:"(optional)",ct_enviar:"Send via WhatsApp",ct_nota:"We don't store your data: the message opens in your WhatsApp and you decide whether to send it. We only count, anonymously, that a quote was started.",pv_tit:"Privacy",pv_aria:"Privacy notice",pv_aviso:"We use Google Analytics to count visits anonymously. By continuing to browse you accept its use.",pv_ok:"Got it",pv_mas:"More info",pv_txt:"<p>We use <b>Google Analytics</b> to count visits and see which sections are used (for example, how many people tap WhatsApp or ask for a quote). These are anonymous usage statistics: we don't collect your name or what you type in the form, and we don't sell or share data with third parties for advertising.</p><p>We handle information in accordance with Colombia's <b>Law 1581 of 2012</b> on personal data protection. For questions, or to update or delete your data, write to <a href=\"mailto:informacion@eventosmilfor.com\">informacion@eventosmilfor.com</a>.</p>",n_gal:"Gallery",n_ubic:"Location",n_cont:"Contact",
 h_script:"We turn your special day into a memory to treasure",
 h_lead:"Weddings, quinceañeras, corporate events and celebrations in Girardot, Colombia — with our own venue, full event setup and floral design.",
 cta_wa:"Message us on WhatsApp",cta_serv:"See services",s_tit:"Services",s_sub:"We plan your event from start to finish.",
 s1:"Weddings",s1d:"Ceremony, reception and party, with every detail taken care of for your big day.",
 s2:"Quinceañeras",s2d:"An unforgettable night to celebrate fifteen, styled just the way she dreams.",
 s3:"Corporate events",s3d:"Meetings, launches, company parties and year-end events.",
 s4:"Celebrations",s4d:"Baptisms, first communions, graduations, anniversaries, birthdays and more.",
 l_tit:"Our venues",l_p:"We have our own event space, with <b>pools</b> and <b>guest rooms</b>, so you and your guests can enjoy every moment worry-free.",
 e_tit:"Full event setup",e1:"Furniture",e2:"Table linens",e3:"Tableware & glassware",e4:"Sound",e5:"Screens",e6:"Stages",e7:"Dance floors",
 f_tit:"Floral design",f_p:"We are also <b>Floristería Milfor</b>: we design the floral arrangements for your event, from the bouquet to the centerpieces.",
 q_tag:"Only at Milfor",q_tit:"Your guests find their table on their phone",
 q_p:"When they arrive, guests scan a QR code, type their name and see their table and seat on the floor plan, in Spanish or English. No crowding around the seating board, no confusion. They can also see the evening's schedule and menu, and upload their photos.",
 q_btn:"See the demo",g_tit:"Gallery",g_sub:"A few of the moments we've had the honor to organize.",g_ig:"See our events on Instagram",
 u_tit:"Location",u_btn:"Open in Google Maps",c_tit:"Let's talk about your event",c_sub:"Tell us the date and type of event and we'll reply on WhatsApp.",c_mail:"Email",c_flor:"Flower shop",ev_tit:"Celebrate with Milfor",ev_sub:"A look at the weddings and sweet fifteen parties we organize.",ev_pausa:"Pause video",ev_play:"Play video",c_bodas:"Weddings & events",
 ph:"Photo coming soon",l_foto:"A table by the illuminated pool",q_letrero:"Welcome sign with a QR code to find your table",lb_cerrar:"Close",lb_ant:"Previous photo",lb_sig:"Next photo",lb_ampliar:"Enlarge",u_mapa:"How to get to Casa Campestre",u_mapa_alt:"Illustrated map: how to get to Milfor Casa Campestre",u_ampliar:"Enlarge",u_gmaps:"Directions (Google Maps)",u_waze:"Go with Waze",u_tocar:"Tap the map to enlarge it",u_sede:"Main office",u_campestre:"How to get to Casa Campestre",u_campestre_p:"Milfor Casa Campestre, one of our event venues.",u_tocar:"Tap the map to enlarge it",n_menu:"Menu",m_tit:"Menu",m_sub:"Starters, dinner and kids menu options for your event. Tap a poster to see it full size.",m_t_ent:"Starters",m_video:"Watch video",m_ent_tag:"Starters",m_t_cena:"Dinner",m_t_inf:"Kids",m_cena_tag:"Dinner menu",m_inf_tag:"Kids menu",m_cena:"Dinner menu",m1_tit:"Option 1",m1_lema:"Flavors to fall in love with",m1_1:"<b>Chicken in passion fruit sauce</b>, juicy and coated in a silky sauce with citrus and tropical notes.",m1_2:"<b>Pork loin in wine and grape sauce</b>, delicately glazed, with deep aromas and a slightly sweet finish.",m1_3:"<b>Tropical salad</b>, with baby greens, fresh seasonal fruit (mango, kiwi, strawberry and melon), raisins, thin slices of cheese and a subtle touch of cream.",m1_4:"<b>Creole yellow potato purée</b> (papa criolla), with a velvety texture.",m1_5:"<b>Sesame rice</b>, fluffy grains with a delicate finish.",m_nota:"Message us on WhatsApp to put together the menu for your event.",m_op:"Option",m_aria:"Menu options",m1_alt:"Dinner menu, Option 1",m1_ampliar:"Enlarge menu Option 1"};
function waUrl(t){return "https://wa.me/573212721996?text="+encodeURIComponent(t)}
const WA_ICO=`<span class="ico-wa" aria-hidden="true"></span>`;
const WA={es:"Hola Milfor, quiero información para un evento",en:"Hello Milfor, I'd like information about an event"};
const ES={};document.querySelectorAll("[data-i18n]").forEach(e=>ES[e.dataset.i18n]=e.innerHTML);ES.ph="Foto próximamente";ES.pv_aria="Aviso de privacidad";ES.m_tipo_aria="Tipo de menú";ES.q_img_alt="Ejemplo del buscador de mesas en el celular";ES.wa_sede="Consultar por WhatsApp";ES.wa_menu="Consultar este menú por WhatsApp";ES.lb_cerrar="Cerrar";ES.lb_ant="Foto anterior";ES.lb_sig="Foto siguiente";ES.lb_ampliar="Ampliar";ES.u_mapa_alt="Mapa ilustrado: cómo llegar a Milfor Casa Campestre";ES.u_ampliar="Ampliar";ES.u_gmaps="Cómo llegar (Google Maps)";ES.u_waze="Ir con Waze";ES.u_tocar="Toca el mapa para ampliarlo";ES.m1_alt="Menú de cena, Opción 1";ES.m_op="Opción";ES.m_t_ent="Entradas";ES.m_video="Ver video";ES.ev_pausa="Pausar video";ES.ev_play="Reproducir video";ES.m_ent_tag="Entradas";ES.m_t_cena="Cena";ES.m_t_inf="Infantil";ES.m_cena_tag="Menú cena";ES.m_inf_tag="Menú infantil";ES.m_aria="Opciones de menú";ES.m1_ampliar="Ampliar menú Opción 1";ES.q_letrero="Letrero de bienvenida con código QR para encontrar la mesa";
let L="es";try{L=new URLSearchParams(location.search).get("lang")||localStorage.getItem("milfor-web-lang")||""}catch(e){}
if(!L){const n=navigator.languages||[navigator.language];const f=(n.find(x=>/^(en|es)/i.test(x||""))||"es");L=/^en/i.test(f)?"en":"es"}
function srcs(n,ext){return (ext=="webp"?`fotos/${n}-480.webp 480w, `:"")+`fotos/${n}-800.${ext} 800w, fotos/${n}-1600.${ext} 1600w`}
function gal(){const g=window.MILFOR_GALERIA||[];const D=L=="en"?EN:ES;document.getElementById("gal").innerHTML=g.map((x,i)=>{const t=(L=="en"&&x.titulo_en)||x.titulo;
 if(!x.foto)return `<figure class="ph"><img src="img/icon-512.png" alt="" aria-hidden="true"><figcaption>${t}<small>${D.ph}</small></figcaption></figure>`;
 const img=/\.\w+$/.test(x.foto)?`<img src="fotos/${x.foto}" alt="${t}" loading="lazy" decoding="async">`
  :`<picture><source type="image/webp" srcset="${srcs(x.foto,"webp")}" sizes="(max-width:760px) 50vw, 270px"><img src="fotos/${x.foto}-800.jpg" srcset="${srcs(x.foto,"jpg")}" sizes="(max-width:760px) 50vw, 270px" alt="${t}" width="${x.w||800}" height="${x.h||600}" loading="lazy" decoding="async"${x.pos?` style="object-position:${x.pos}"`:""}></picture>`;
 return `<figure class="foto"><button type="button" data-i="${i}" aria-label="${D.lb_ampliar}: ${t}">${img}</button><figcaption>${t}</figcaption></figure>`}).join("")}
// ===== Visor de fotos (lightbox) =====
let lb,lbI=0,lbL=[],lbOrigen=null;
function lbSrc(x){return /\.\w+$/.test(x.foto)?{j:`fotos/${x.foto}`}:{w:`fotos/${x.foto}-1600.webp`,j:`fotos/${x.foto}-1600.jpg`}}
function lbVideoStop(){const v=lb&&lb.querySelector(".lb-video");if(!v||v.hidden)return;v.pause();v.removeAttribute("src");v.load();v.hidden=true}
function lbMostrar(i){const g=lbL;if(!g.length)return;lbI=(i+g.length)%g.length;const x=g[lbI],s=x.video?{}:lbSrc(x),t=(L=="en"&&x.titulo_en)||x.titulo;
 const pic=lb.querySelector("picture"),vid=lb.querySelector(".lb-video");
 if(x.video){pic.hidden=true;vid.hidden=false;vid.muted=true;vid.setAttribute("muted","");const vq=x.vv?`?v=${x.vv}`:"";vid.poster=`videos/${x.video}-poster.webp${vq}`;vid.src=`videos/${x.video}.mp4${vq}`;vid.setAttribute("aria-label",t);const pr=vid.play();if(pr&&pr.catch)pr.catch(()=>{})}
 else{lbVideoStop();pic.hidden=false;lb.querySelector("source").srcset=s.w||"";const im=lb.querySelector("img");im.src=s.j;im.alt=t}
 lb.querySelector(".lb-tit").textContent=t;lb.querySelector(".lb-num").textContent=g.length>1?`${lbI+1} / ${g.length}`:"";lb.classList.toggle("uno",g.length<2);
 if(g.length>1)[lbI+1,lbI-1].forEach(k=>{const y=g[(k+g.length)%g.length];if(y.video)return;const q=lbSrc(y);const p=new Image();p.src=q.w||q.j})}
function lbAbrir(lista,i,origen){lbL=lista;lbOrigen=origen;if(!lb){lb=document.createElement("div");lb.className="lb";lb.setAttribute("role","dialog");lb.setAttribute("aria-modal","true");
 lb.innerHTML=`<button class="lb-x" type="button">×</button><button class="lb-a lb-prev" type="button">‹</button><figure><picture><source type="image/webp"><img alt=""></picture><video class="lb-video" playsinline webkit-playsinline muted loop controls preload="none" hidden></video><figcaption><span class="lb-tit"></span><span class="lb-num"></span></figcaption></figure><button class="lb-a lb-next" type="button">›</button>`;
 document.body.appendChild(lb);
 lb.querySelector(".lb-x").onclick=lbCerrar;lb.querySelector(".lb-prev").onclick=()=>lbMostrar(lbI-1);lb.querySelector(".lb-next").onclick=()=>lbMostrar(lbI+1);
 lb.addEventListener("click",e=>{if(e.target===lb||e.target.tagName=="FIGURE")lbCerrar()});
 let x0=null,y0=0;lb.addEventListener("touchstart",e=>{x0=e.touches[0].clientX;y0=e.touches[0].clientY},{passive:true});
 lb.addEventListener("touchend",e=>{if(x0==null)return;const dx=e.changedTouches[0].clientX-x0,dy=e.changedTouches[0].clientY-y0;x0=null;
  if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)&&lbL.length>1)lbMostrar(lbI+(dx<0?1:-1));else if(dy>90&&Math.abs(dy)>Math.abs(dx))lbCerrar()});}
 const D=L=="en"?EN:ES;lb.querySelector(".lb-x").setAttribute("aria-label",D.lb_cerrar);lb.querySelector(".lb-prev").setAttribute("aria-label",D.lb_ant);lb.querySelector(".lb-next").setAttribute("aria-label",D.lb_sig);
 lbMostrar(i);lb.classList.add("on");document.body.style.overflow="hidden";lb.querySelector(".lb-x").focus()}
function lbCerrar(){if(!lb)return;lbVideoStop();lb.classList.remove("on");document.body.style.overflow="";if(lbOrigen)lbOrigen.focus()}
document.addEventListener("keydown",e=>{if(!lb||!lb.classList.contains("on"))return;if(e.key=="Escape")lbCerrar();else if(lbL.length>1&&e.key=="ArrowRight")lbMostrar(lbI+1);else if(lbL.length>1&&e.key=="ArrowLeft")lbMostrar(lbI-1)});
document.getElementById("gal").addEventListener("click",e=>{const b=e.target.closest("button[data-i]");if(!b)return;
 const g=window.MILFOR_GALERIA||[],i=+b.dataset.i;lbAbrir(g.filter(x=>x.foto),g.slice(0,i).filter(x=>x.foto).length,b)});
document.querySelectorAll("[data-lb]").forEach(b=>b.onclick=()=>{const k=b.dataset.lbTit;lbAbrir([{foto:b.dataset.lb,titulo:ES[k],titulo_en:EN[k]}],0,b)});
(()=>{const T=document.getElementById("menu-tabs"),P=document.getElementById("menu-panel");if(!T)return;
 T.addEventListener("click",e=>{const b=e.target.closest("[data-m]");if(b)menuIr(+b.dataset.m)});
 T.addEventListener("keydown",e=>{if(e.key=="ArrowRight"||e.key=="ArrowLeft"){menuIr(MI+(e.key=="ArrowRight"?1:-1));const b=T.querySelector('[aria-selected="true"]');if(b)b.focus()}});
 P.addEventListener("click",e=>{const bv=e.target.closest("[data-video]");if(bv){const m=menuLista()[MI];lbAbrir([{video:bv.dataset.video,vv:m.video_v,titulo:`${ES[mcat().tag]} · Opción ${m.num} · ${m.lema}`,titulo_en:`${EN[mcat().tag]} · Option ${m.num} · ${m.lema_en}`}],0,bv);return}
  const b=e.target.closest("[data-poster]");if(!b)return;const M=menuLista(),es=ES[mcat().tag],ing=EN[mcat().tag];
  lbAbrir(M.map(m=>({foto:m.img,titulo:`${es} · Opción ${m.num} · ${m.lema}`,titulo_en:`${ing} · Option ${m.num} · ${m.lema_en}`})),MI,b)});
 const G=document.getElementById("menu-tipo");if(G)G.addEventListener("click",e=>{const b=e.target.closest("[data-tipo]");if(!b||b.dataset.tipo==MT)return;MT=b.dataset.tipo;MI=0;menus()});
 let x0=null,y0=0;P.addEventListener("touchstart",e=>{x0=e.touches[0].clientX;y0=e.touches[0].clientY},{passive:true});
 P.addEventListener("touchend",e=>{if(x0==null)return;const dx=e.changedTouches[0].clientX-x0,dy=e.changedTouches[0].clientY-y0;x0=null;if(Math.abs(dx)>60&&Math.abs(dx)>1.5*Math.abs(dy))menuIr(MI+(dx<0?1:-1))});})();
document.getElementById("sedes").addEventListener("click",e=>{const bv=e.target.closest("[data-sede-video]");if(bv){const v=(window.MILFOR_SEDES||[])[+bv.dataset.sedeVideo];lbAbrir([{video:v.video,vv:v.video_v,titulo:`${v.nombre} · Video`,titulo_en:`${v.nombre_en||v.nombre} · Video`}],0,bv);return}const b=e.target.closest("[data-sede-mapa]");if(!b)return;const v=(window.MILFOR_SEDES||[])[+b.dataset.sedeMapa];lbAbrir([{foto:v.mapaImg,titulo:v.lbTit||`${v.nombre} · ${v.texto}`,titulo_en:v.lbTit_en||`${v.nombre_en} · ${v.texto_en}`}],0,b)});
// ===== Videos por tipo de evento (eventos.js): autoplay silencioso solo cuando se ven =====
const EV_RM=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;let EV_IO=null;
function evBtn(b,v){const D=L=="en"?EN:ES,p=v.paused;b.classList.toggle("en-pausa",p);b.setAttribute("aria-label",p?D.ev_play:D.ev_pausa)}
function eventos(){const E=window.MILFOR_EVENTOS||[],C=document.getElementById("ev-videos");if(!C||!E.length)return;const en=L=="en";
 if(C.dataset.listo){C.querySelectorAll(".ev-card").forEach((f,i)=>{const e=E[i];f.querySelector("b").textContent=en&&e.titulo_en||e.titulo;f.querySelector("video").setAttribute("aria-label",en&&e.titulo_en||e.titulo);evBtn(f.querySelector(".ev-pausa"),f.querySelector("video"))});return}
 C.dataset.listo=1;
 C.innerHTML=E.map(e=>{const q=e.video_v?`?v=${e.video_v}`:"",t=en&&e.titulo_en||e.titulo;return `<figure class="ev-card" id="ev-${e.id}"><div class="ev-media"><video muted loop playsinline webkit-playsinline preload="none" disablepictureinpicture data-src="videos/${e.video}.mp4${q}" data-poster="videos/${e.video}-poster.webp${q}" aria-label="${t}"></video><button type="button" class="ev-pausa en-pausa"></button></div><figcaption><b>${t}</b></figcaption></figure>`}).join("");
 const vids=[...C.querySelectorAll("video")];
 vids.forEach(v=>{v.muted=true;const b=v.parentNode.querySelector(".ev-pausa");evBtn(b,v);
  v.addEventListener("play",()=>evBtn(b,v));v.addEventListener("pause",()=>evBtn(b,v));
  b.addEventListener("click",()=>{if(!v.getAttribute("src"))v.src=v.dataset.src;if(v.paused){v.dataset.usuario="";const p=v.play();if(p&&p.catch)p.catch(()=>{})}else{v.dataset.usuario="pausa";v.pause()}})});
 const cargarPoster=v=>{if(!v.poster)v.poster=v.dataset.poster};
 if(!("IntersectionObserver" in window)){vids.forEach(cargarPoster);return}
 const pre=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){cargarPoster(x.target);pre.unobserve(x.target)}}),{rootMargin:"400px 0px"});
 EV_IO=new IntersectionObserver(es=>es.forEach(x=>{const v=x.target;if(x.isIntersecting&&x.intersectionRatio>=.6){if(EV_RM||v.dataset.usuario==="pausa")return;if(!v.getAttribute("src"))v.src=v.dataset.src;const p=v.play();if(p&&p.catch)p.catch(()=>{})}else if(!v.paused)v.pause()}),{threshold:[0,.6,.8]});
 vids.forEach(v=>{pre.observe(v);EV_IO.observe(v)})}
// ===== Sedes (Ubicación) =====
function sedes(){const S=window.MILFOR_SEDES||[],C=document.getElementById("sedes");if(!C||!S.length)return;const D=L=="en"?EN:ES,en=L=="en";
 C.innerHTML=S.map((v,i)=>{const nom=en&&v.nombre_en||v.nombre,tx=en&&v.texto_en||v.texto,pin=v.lat!=null&&v.lng!=null;const zo=en&&v.zona_en||v.zona;let h=`<div class="sede" id="sede-${v.id}"><h3>${nom}</h3>${zo?`<p class="zona">${zo}</p>`:""}<p class="dir">${tx}</p>${(en&&v.nota_en||v.nota)?`<p class="nota-sede">${en&&v.nota_en||v.nota}</p>`:""}`+(v.pisos?`<ul class="pisos">${v.pisos.map((f,k)=>`<li><span class="piso-badge" aria-hidden="true">${k+1}</span><div><b>${en&&f.piso_en||f.piso} · ${en&&f.nombre_en||f.nombre}</b><span>${en&&f.desc_en||f.desc}</span></div></li>`).join("")}</ul>`:"");
  if(v.video)h+=`<button type="button" class="sede-video" data-sede-video="${i}" aria-label="${D.m_video}: ${nom}"><img src="videos/${v.video}-poster.webp${v.video_v?`?v=${v.video_v}`:""}" alt="" width="720" height="1280" loading="lazy" decoding="async"><span class="play" aria-hidden="true"></span><span class="ver-video"><span aria-hidden="true">▶</span> ${D.m_video}</span></button>`;
  if(v.mapaImg){const n=v.mapaImg;h+=`<figure class="llegar"><button type="button" data-sede-mapa="${i}" aria-label="${D.u_ampliar}: ${nom}"><picture><source type="image/webp" srcset="fotos/${n}-480.webp 480w, fotos/${n}-800.webp 800w, fotos/${n}-1600.webp 1600w" sizes="(max-width:760px) 92vw, 420px"><img src="fotos/${n}-800.jpg" srcset="fotos/${n}-800.jpg 800w, fotos/${n}-1600.jpg 1600w" sizes="(max-width:760px) 92vw, 420px" width="${v.mapaImg_w||800}" height="${v.mapaImg_h||1000}" loading="lazy" decoding="async" alt="${nom}"></picture><span class="lupa" aria-hidden="true">⤢</span></button><figcaption>${D.u_tocar}</figcaption></figure>`}
  if(pin)h+=`<p class="centro botones"><a class="btn" href="https://www.google.com/maps/dir/?api=1&destination=${v.lat},${v.lng}" target="_blank" rel="noopener">${D.u_gmaps}</a><a class="btn waze" href="https://waze.com/ul?ll=${v.lat},${v.lng}&navigate=yes" target="_blank" rel="noopener">${D.u_waze}</a></p>`;
  {const wn=en&&v.wa_en||v.wa||nom;h+=`<p class="wa-ctx"><a href="${waUrl(en?`Hello Milfor, I'd like information about the ${wn} venue`:`Hola Milfor, quiero información sobre la sede ${wn}`)}" target="_blank" rel="noopener">${WA_ICO}${D.wa_sede}</a></p>`}
  return h+`</div>`}).join("")}
// ===== Menús (Cena / Infantil, pestañas por número de opción) =====
let MI=0,MT="cena";
// Categorías de menú, en el orden en que aparecen en el selector
const MCATS=[{k:"entradas",d:()=>window.MILFOR_MENUS_ENTRADAS,t:"m_t_ent",tag:"m_ent_tag"},{k:"cena",d:()=>window.MILFOR_MENUS,t:"m_t_cena",tag:"m_cena_tag"},{k:"infantil",d:()=>window.MILFOR_MENUS_INFANTIL,t:"m_t_inf",tag:"m_inf_tag"}];
function mcat(){return MCATS.find(c=>c.k==MT)||MCATS[1]}
function menuLista(){return (mcat().d()||[]).slice().sort((a,b)=>a.num-b.num)}
function menuTit(m){const D=L=="en"?EN:ES;return `${D[mcat().tag]} · ${D.m_op} ${m.num} · ${(L=="en"&&m.lema_en)||m.lema}`}
function menus(){const M=menuLista(),T=document.getElementById("menu-tabs"),P=document.getElementById("menu-panel"),G=document.getElementById("menu-tipo");if(!T||!M.length)return;const D=L=="en"?EN:ES;
 if(MI>=M.length)MI=0;
 if(G)G.innerHTML=MCATS.filter(c=>(c.d()||[]).length).map(c=>`<button type="button" data-tipo="${c.k}" aria-pressed="${MT==c.k}">${D[c.t]}</button>`).join("");
 T.setAttribute("aria-label",D.m_aria);
 T.innerHTML=M.map((m,i)=>`<button type="button" role="tab" aria-selected="${i==MI}" data-m="${i}">${D.m_op} ${m.num}</button>`).join("");
 const m=M[MI],en=L=="en",n=m.img;
 P.innerHTML=`<article class="opcion"><div class="poster-wrap"><button type="button" class="poster" data-poster="${MI}" aria-label="${D.lb_ampliar}: ${menuTit(m)}"><picture><source type="image/webp" srcset="fotos/${n}-480.webp 480w, fotos/${n}-800.webp 800w" sizes="(max-width:760px) 80vw, 340px"><img src="fotos/${n}-800.jpg" width="${m.w}" height="${m.h}" loading="lazy" decoding="async" alt="${menuTit(m)}"></picture><span class="lupa" aria-hidden="true">⤢</span></button>${m.video?`<button type="button" class="ver-video" data-video="${m.video}"><span aria-hidden="true">▶</span> ${D.m_video}</button>`:""}</div>
 <div class="opcion-txt"><p class="tag">${D[mcat().tag]}</p><h3>${D.m_op} ${m.num}</h3><p class="lema">${en&&m.lema_en||m.lema}</p><ul class="platos">${m.platos.map(p=>`<li><b>${en?p[2]:p[0]}</b>, ${en?p[3]:p[1]}</li>`).join("")}</ul><p class="wa-ctx izq"><a href="${waUrl(en?`Hello Milfor, I'm interested in the ${D[mcat().t]} menu, Option ${m.num}${m.lema_en?` (${m.lema_en})`:""}`:`Hola Milfor, me interesa el menú ${D[mcat().t]} Opción ${m.num}${m.lema?` (${m.lema})`:""}`)}" target="_blank" rel="noopener">${WA_ICO}${D.wa_menu}</a></p></div></article>`;
 const act=T.querySelector('[aria-selected="true"]');if(act&&T.scrollWidth>T.clientWidth)T.scrollTo({left:act.offsetLeft-T.clientWidth/2+act.offsetWidth/2,behavior:"smooth"})}
function menuIr(i){const M=menuLista();MI=(i+M.length)%M.length;menus()}
// ===== Cotizar mi evento: arma el mensaje y abre WhatsApp (no se guarda ni se envía nada a un servidor) =====
const COT={es:{hola:"Hola Milfor, quiero cotizar mi evento:",nombre:"Nombre",tipo:"Tipo de evento",fecha:"Fecha aproximada",inv:"Número de invitados",sede:"Sede de interés",com:"Comentario",falta:"Por favor completa: ",campos:{"ct-nombre":"Nombre","ct-tipo":"Tipo de evento","ct-fecha":"Fecha aproximada","ct-inv":"Número de invitados","ct-sede":"Sede de interés"},inv_mal:"Escribe un número de invitados válido (1 a 3000)."},
 en:{hola:"Hello Milfor, I'd like a quote for my event:",nombre:"Name",tipo:"Type of event",fecha:"Approximate date",inv:"Number of guests",sede:"Venue of interest",com:"Comment",falta:"Please fill in: ",campos:{"ct-nombre":"Name","ct-tipo":"Type of event","ct-fecha":"Approximate date","ct-inv":"Number of guests","ct-sede":"Venue of interest"},inv_mal:"Please enter a valid number of guests (1 to 3000)."}};
function cotizar(){const f=document.getElementById("cot-form");if(!f)return;const err=document.getElementById("ct-error");
 f.addEventListener("input",e=>{e.target.removeAttribute("aria-invalid");err.textContent=""});
 f.addEventListener("submit",e=>{e.preventDefault();const T=COT[L=="en"?"en":"es"],lab=id=>document.querySelector(`label[for="${id}"]`).firstChild.textContent.trim();
  const req=["ct-nombre","ct-tipo","ct-fecha","ct-inv","ct-sede"].map(id=>document.getElementById(id));req.forEach(x=>x.removeAttribute("aria-invalid"));
  const mal=req.filter(x=>!x.value.trim());const inv=document.getElementById("ct-inv");
  if(mal.length){mal.forEach(x=>x.setAttribute("aria-invalid","true"));err.textContent=T.falta+mal.map(x=>T.campos[x.id]||lab(x.id)).join(", ")+".";mal[0].focus();return}
  const n=+inv.value;if(!Number.isInteger(n)||n<1||n>3000){inv.setAttribute("aria-invalid","true");err.textContent=T.inv_mal;inv.focus();return}
  const txt=id=>{const x=document.getElementById(id);return x.tagName=="SELECT"?x.options[x.selectedIndex].text:x.value.trim()};
  const fv=document.getElementById("ct-fecha").value,[y,m,d]=fv.split("-").map(Number);
  let fecha=fv;try{fecha=new Date(Date.UTC(y,m-1,d)).toLocaleDateString(L=="en"?"en-US":"es-CO",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"})}catch(_){}
  const com=txt("ct-com");
  const msg=[T.hola,"",`• ${T.nombre}: ${txt("ct-nombre")}`,`• ${T.tipo}: ${txt("ct-tipo")}`,`• ${T.fecha}: ${fecha}`,`• ${T.inv}: ${n}`,`• ${T.sede}: ${txt("ct-sede")}`].concat(com?[`• ${T.com}: ${com}`]:[]).join("\n");
  const u="https://wa.me/573212721996?text="+encodeURIComponent(msg);err.textContent="";ga("cotizacion_enviada",{tipo_evento:document.getElementById("ct-tipo").value,sede:document.getElementById("ct-sede").value,invitados:n});
  const w=window.open(u,"_blank");if(w){try{w.opener=null}catch(_){}}else location.href=u});
}
// ===== Google Analytics 4 (eventos personalizados; sin datos personales) =====
function ga(n,p){try{if(typeof gtag=="function")gtag("event",n,p||{})}catch(_){}}
function waOrigen(a){if(a.closest(".hero"))return"hero";if(a.closest(".wa-flot"))return"flotante";if(a.closest("#contacto"))return"contacto";if(a.closest(".pie"))return"pie";
 const sd=a.closest(".sede");if(sd)return sd.id;if(a.closest("#menu-panel")){const m=menuLista()[MI];return`menu-${MT}-${m?m.num:MI+1}`}if(a.closest("#menu"))return"menu";return"otro"}
document.addEventListener("click",e=>{const a=e.target.closest&&e.target.closest("a[href]");if(!a)return;const u=a.getAttribute("href");
 if(/wa\.me\//.test(u))ga("whatsapp_click",{origen:waOrigen(a)});
 else if(a.closest(".sede")&&/google\.com\/maps|waze\.com/.test(u))ga("como_llegar",{destino:/waze/.test(u)?"waze":"maps",sede:a.closest(".sede").id.replace(/^sede-/,"")})},true);
const GA_VIDEOS=new Set();
document.addEventListener("play",e=>{const v=e.target;if(!v||v.tagName!="VIDEO")return;const m=/videos\/([^/?#]+)\.mp4/.exec(v.currentSrc||v.src||"");if(!m||GA_VIDEOS.has(m[1]))return;GA_VIDEOS.add(m[1]);ga("video_play",{video:m[1],modo:v.closest(".lb")?"toque":"automatico"})},true);
// Aviso de Google Analytics: discreto, no bloquea, se recuerda en localStorage
function avisoGA(){const A=document.getElementById("aviso-ga");if(!A)return;let visto=false;try{visto=localStorage.getItem("milfor-aviso-ga")=="1"}catch(_){}if(visto)return;A.hidden=false;
 const cerrar=()=>{A.hidden=true;try{localStorage.setItem("milfor-aviso-ga","1")}catch(_){}};document.getElementById("aviso-ok").addEventListener("click",cerrar);A.querySelector('a[href="#privacidad"]').addEventListener("click",cerrar)}
function aplicar(){document.documentElement.lang=L;{const ce=document.getElementById("ct-error");if(ce)ce.textContent=""}const D=L=="en"?EN:ES;
 document.querySelectorAll("[data-i18n]").forEach(e=>{const v=D[e.dataset.i18n];if(v!=null)e.innerHTML=v});
 document.querySelectorAll("[data-i18n-alt]").forEach(e=>{const v=D[e.dataset.i18nAlt];if(v!=null)e.alt=v});
 document.querySelectorAll("[data-i18n-aria]").forEach(e=>{const v=D[e.dataset.i18nAria];if(v!=null)e.setAttribute("aria-label",v)});
 document.querySelectorAll("[data-wa]").forEach(a=>a.href="https://wa.me/573212721996?text="+encodeURIComponent(WA[L]));
 const b=document.getElementById("lang");b.textContent=L=="en"?"ES":"EN";b.setAttribute("aria-label",L=="en"?"Cambiar a español":"Switch to English");gal();menus();sedes();eventos()}
document.getElementById("lang").onclick=()=>{L=L=="en"?"es":"en";try{localStorage.setItem("milfor-web-lang",L)}catch(e){}aplicar();ga("cambio_idioma",{idioma:L})};avisoGA();
document.getElementById("anio").textContent=new Date().getFullYear();aplicar();cotizar();
})();
