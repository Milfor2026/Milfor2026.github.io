(function(){
const EN={n_serv:"Services",n_lugar:"Our venue",n_gal:"Gallery",n_ubic:"Location",n_cont:"Contact",
 h_script:"We turn your special day into a memory to treasure",
 h_lead:"Weddings, quinceañeras, corporate events and celebrations in Girardot, Colombia — with our own venue, full event setup and floral design.",
 cta_wa:"Message us on WhatsApp",cta_serv:"See services",s_tit:"Services",s_sub:"We plan your event from start to finish.",
 s1:"Weddings",s1d:"Ceremony, reception and party, with every detail taken care of for your big day.",
 s2:"Quinceañeras",s2d:"An unforgettable night to celebrate fifteen, styled just the way she dreams.",
 s3:"Corporate events",s3d:"Meetings, launches, company parties and year-end events.",
 s4:"Celebrations",s4d:"Baptisms, first communions, graduations, anniversaries, birthdays and more.",
 l_tit:"Our venue",l_p:"We have our own event space, with <b>pools</b> and <b>guest rooms</b>, so you and your guests can enjoy every moment worry-free.",
 e_tit:"Full event setup",e1:"Furniture",e2:"Table linens",e3:"Tableware & glassware",e4:"Sound",e5:"Screens",e6:"Stages",e7:"Dance floors",
 f_tit:"Floral design",f_p:"We are also <b>Floristería Milfor</b>: we design the floral arrangements for your event, from the bouquet to the centerpieces.",
 q_tag:"Only at Milfor",q_tit:"Your guests find their table on their phone",
 q_p:"When they arrive, guests scan a QR code, type their name and see their table and seat on the floor plan, in Spanish or English. No crowding around the seating board, no confusion. They can also see the evening's schedule and menu, and upload their photos.",
 q_btn:"See the demo",g_tit:"Gallery",g_sub:"A few of the moments we've had the honor to organize.",g_ig:"See our events on Instagram",
 u_tit:"Location",u_btn:"Open in Google Maps",c_tit:"Let's talk about your event",c_sub:"Tell us the date and type of event and we'll reply on WhatsApp.",
 ph:"Photo coming soon",l_foto:"A table by the illuminated pool",q_letrero:"Welcome sign with a QR code to find your table",lb_cerrar:"Close",lb_ant:"Previous photo",lb_sig:"Next photo",lb_ampliar:"Enlarge",u_mapa:"How to get to Casa Campestre",u_mapa_alt:"Illustrated map: how to get to Milfor Casa Campestre",u_ampliar:"Enlarge",u_gmaps:"Directions (Google Maps)",u_waze:"Go with Waze",u_tocar:"Tap the map to enlarge it",u_mapa_tit:"Map",u_sede:"Main office",u_campestre:"How to get to Casa Campestre",u_campestre_p:"Milfor Casa Campestre, one of our event venues.",u_tocar:"Tap the map to enlarge it",n_menu:"Menu",m_tit:"Menu",m_sub:"Starters, dinner and kids menu options for your event. Tap a poster to see it full size.",m_t_ent:"Starters",m_video:"Watch video",m_ent_tag:"Starters",m_t_cena:"Dinner",m_t_inf:"Kids",m_cena_tag:"Dinner menu",m_inf_tag:"Kids menu",m_cena:"Dinner menu",m1_tit:"Option 1",m1_lema:"Flavors to fall in love with",m1_1:"<b>Chicken in passion fruit sauce</b>, juicy and coated in a silky sauce with citrus and tropical notes.",m1_2:"<b>Pork loin in wine and grape sauce</b>, delicately glazed, with deep aromas and a slightly sweet finish.",m1_3:"<b>Tropical salad</b>, with baby greens, fresh seasonal fruit (mango, kiwi, strawberry and melon), raisins, thin slices of cheese and a subtle touch of cream.",m1_4:"<b>Creole yellow potato purée</b> (papa criolla), with a velvety texture.",m1_5:"<b>Sesame rice</b>, fluffy grains with a delicate finish.",m_nota:"Message us on WhatsApp to put together the menu for your event.",m_op:"Option",m_aria:"Menu options",m1_alt:"Dinner menu, Option 1",m1_ampliar:"Enlarge menu Option 1"};
const WA={es:"Hola Milfor, quiero información para un evento",en:"Hello Milfor, I'd like information about an event"};
const ES={};document.querySelectorAll("[data-i18n]").forEach(e=>ES[e.dataset.i18n]=e.innerHTML);ES.ph="Foto próximamente";ES.lb_cerrar="Cerrar";ES.lb_ant="Foto anterior";ES.lb_sig="Foto siguiente";ES.lb_ampliar="Ampliar";ES.u_mapa_alt="Mapa ilustrado: cómo llegar a Milfor Casa Campestre";ES.u_ampliar="Ampliar";ES.u_gmaps="Cómo llegar (Google Maps)";ES.u_waze="Ir con Waze";ES.u_tocar="Toca el mapa para ampliarlo";ES.u_mapa_tit="Mapa";ES.m1_alt="Menú de cena, Opción 1";ES.m_op="Opción";ES.m_t_ent="Entradas";ES.m_video="Ver video";ES.m_ent_tag="Entradas";ES.m_t_cena="Cena";ES.m_t_inf="Infantil";ES.m_cena_tag="Menú cena";ES.m_inf_tag="Menú infantil";ES.m_aria="Opciones de menú";ES.m1_ampliar="Ampliar menú Opción 1";ES.q_letrero="Letrero de bienvenida con código QR para encontrar la mesa";
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
document.getElementById("sedes").addEventListener("click",e=>{const b=e.target.closest("[data-sede-mapa]");if(!b)return;const v=(window.MILFOR_SEDES||[])[+b.dataset.sedeMapa];lbAbrir([{foto:v.mapaImg,titulo:v.lbTit||`${v.nombre} · ${v.texto}`,titulo_en:v.lbTit_en||`${v.nombre_en} · ${v.texto_en}`}],0,b)});
// ===== Sedes (Ubicación) =====
function sedes(){const S=window.MILFOR_SEDES||[],C=document.getElementById("sedes");if(!C||!S.length)return;const D=L=="en"?EN:ES,en=L=="en";
 C.innerHTML=S.map((v,i)=>{const nom=en&&v.nombre_en||v.nombre,tx=en&&v.texto_en||v.texto,pin=v.lat!=null&&v.lng!=null;const zo=en&&v.zona_en||v.zona;let h=`<div class="sede${v.embed?" con-mapa":""}" id="sede-${v.id}"><h3>${nom}</h3>${zo?`<p class="zona">${zo}</p>`:""}<p class="dir">${tx}</p>${(en&&v.nota_en||v.nota)?`<p class="nota-sede">${en&&v.nota_en||v.nota}</p>`:""}`+(v.pisos?`<ul class="pisos">${v.pisos.map((f,k)=>`<li><span class="piso-badge" aria-hidden="true">${k+1}</span><div><b>${en&&f.piso_en||f.piso} · ${en&&f.nombre_en||f.nombre}</b><span>${en&&f.desc_en||f.desc}</span></div></li>`).join("")}</ul>`:"");
  if(pin&&v.embed)h+=`<div class="mapa"><iframe title="${D.u_mapa_tit}: ${nom}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=${v.lat},${v.lng}&z=17&hl=${L}&output=embed"></iframe></div>`;
  if(v.mapaImg){const n=v.mapaImg;h+=`<figure class="llegar"><button type="button" data-sede-mapa="${i}" aria-label="${D.u_ampliar}: ${nom}"><picture><source type="image/webp" srcset="fotos/${n}-480.webp 480w, fotos/${n}-800.webp 800w, fotos/${n}-1600.webp 1600w" sizes="(max-width:760px) 92vw, 420px"><img src="fotos/${n}-800.jpg" srcset="fotos/${n}-800.jpg 800w, fotos/${n}-1600.jpg 1600w" sizes="(max-width:760px) 92vw, 420px" width="${v.mapaImg_w||800}" height="${v.mapaImg_h||1000}" loading="lazy" decoding="async" alt="${nom}"></picture><span class="lupa" aria-hidden="true">⤢</span></button><figcaption>${D.u_tocar}</figcaption></figure>`}
  if(pin)h+=`<p class="centro botones"><a class="btn" href="https://www.google.com/maps/dir/?api=1&destination=${v.lat},${v.lng}" target="_blank" rel="noopener">${D.u_gmaps}</a><a class="btn waze" href="https://waze.com/ul?ll=${v.lat},${v.lng}&navigate=yes" target="_blank" rel="noopener">${D.u_waze}</a></p>`;
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
 <div class="opcion-txt"><p class="tag">${D[mcat().tag]}</p><h3>${D.m_op} ${m.num}</h3><p class="lema">${en&&m.lema_en||m.lema}</p><ul class="platos">${m.platos.map(p=>`<li><b>${en?p[2]:p[0]}</b>, ${en?p[3]:p[1]}</li>`).join("")}</ul></div></article>`;
 const act=T.querySelector('[aria-selected="true"]');if(act&&T.scrollWidth>T.clientWidth)T.scrollTo({left:act.offsetLeft-T.clientWidth/2+act.offsetWidth/2,behavior:"smooth"})}
function menuIr(i){const M=menuLista();MI=(i+M.length)%M.length;menus()}
function aplicar(){document.documentElement.lang=L;const D=L=="en"?EN:ES;
 document.querySelectorAll("[data-i18n]").forEach(e=>{const v=D[e.dataset.i18n];if(v!=null)e.innerHTML=v});
 document.querySelectorAll("[data-i18n-alt]").forEach(e=>{const v=D[e.dataset.i18nAlt];if(v!=null)e.alt=v});
 document.querySelectorAll("[data-i18n-aria]").forEach(e=>{const v=D[e.dataset.i18nAria];if(v!=null)e.setAttribute("aria-label",v)});
 document.querySelectorAll("[data-wa]").forEach(a=>a.href="https://wa.me/573212721996?text="+encodeURIComponent(WA[L]));
 const b=document.getElementById("lang");b.textContent=L=="en"?"ES":"EN";b.setAttribute("aria-label",L=="en"?"Cambiar a español":"Switch to English");gal();menus();sedes()}
document.getElementById("lang").onclick=()=>{L=L=="en"?"es":"en";try{localStorage.setItem("milfor-web-lang",L)}catch(e){}aplicar()};
document.getElementById("anio").textContent=new Date().getFullYear();aplicar();
})();
