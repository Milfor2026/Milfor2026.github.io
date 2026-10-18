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
 ph:"Photo coming soon",l_foto:"A table by the illuminated pool",q_letrero:"Welcome sign with a QR code to find your table",lb_cerrar:"Close",lb_ant:"Previous photo",lb_sig:"Next photo",lb_ampliar:"Enlarge",u_mapa:"How to get to Casa Campestre",u_mapa_alt:"Illustrated map: how to get to Milfor Casa Campestre",u_ampliar:"Enlarge: How to get to Casa Campestre",u_sede:"Main office",u_campestre:"How to get to Casa Campestre",u_campestre_p:"Milfor Casa Campestre, one of our event venues.",u_tocar:"Tap the map to enlarge it",n_menu:"Menu",m_tit:"Menu",m_sub:"Dinner options for your event.",m_cena:"Dinner menu",m1_tit:"Option 1",m1_lema:"Flavors to fall in love with",m1_1:"<b>Chicken in passion fruit sauce</b>, juicy and coated in a silky sauce with citrus and tropical notes.",m1_2:"<b>Pork loin in wine and grape sauce</b>, delicately glazed, with deep aromas and a slightly sweet finish.",m1_3:"<b>Tropical salad</b>, with baby greens, fresh seasonal fruit (mango, kiwi, strawberry and melon), raisins, thin slices of cheese and a subtle touch of cream.",m1_4:"<b>Creole yellow potato purée</b> (papa criolla), with a velvety texture.",m1_5:"<b>Sesame rice</b>, fluffy grains with a delicate finish.",m_nota:"More menu options coming soon. Message us on WhatsApp to learn about them.",m1_alt:"Dinner menu, Option 1",m1_ampliar:"Enlarge menu Option 1"};
const WA={es:"Hola Milfor, quiero información para un evento",en:"Hello Milfor, I'd like information about an event"};
const ES={};document.querySelectorAll("[data-i18n]").forEach(e=>ES[e.dataset.i18n]=e.innerHTML);ES.ph="Foto próximamente";ES.lb_cerrar="Cerrar";ES.lb_ant="Foto anterior";ES.lb_sig="Foto siguiente";ES.lb_ampliar="Ampliar";ES.u_mapa_alt="Mapa ilustrado: cómo llegar a Milfor Casa Campestre";ES.u_ampliar="Ampliar: Cómo llegar a Casa Campestre";ES.u_mapa="Cómo llegar a Casa Campestre";ES.m1_alt="Menú de cena, Opción 1";ES.m1_ampliar="Ampliar menú Opción 1";ES.q_letrero="Letrero de bienvenida con código QR para encontrar la mesa";
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
function lbMostrar(i){const g=lbL;if(!g.length)return;lbI=(i+g.length)%g.length;const x=g[lbI],s=lbSrc(x),t=(L=="en"&&x.titulo_en)||x.titulo;
 lb.querySelector("source").srcset=s.w||"";const im=lb.querySelector("img");im.src=s.j;im.alt=t;
 lb.querySelector(".lb-tit").textContent=t;lb.querySelector(".lb-num").textContent=g.length>1?`${lbI+1} / ${g.length}`:"";lb.classList.toggle("uno",g.length<2);
 if(g.length>1)[lbI+1,lbI-1].forEach(k=>{const y=g[(k+g.length)%g.length],q=lbSrc(y);const p=new Image();p.src=q.w||q.j})}
function lbAbrir(lista,i,origen){lbL=lista;lbOrigen=origen;if(!lb){lb=document.createElement("div");lb.className="lb";lb.setAttribute("role","dialog");lb.setAttribute("aria-modal","true");
 lb.innerHTML=`<button class="lb-x" type="button">×</button><button class="lb-a lb-prev" type="button">‹</button><figure><picture><source type="image/webp"><img alt=""></picture><figcaption><span class="lb-tit"></span><span class="lb-num"></span></figcaption></figure><button class="lb-a lb-next" type="button">›</button>`;
 document.body.appendChild(lb);
 lb.querySelector(".lb-x").onclick=lbCerrar;lb.querySelector(".lb-prev").onclick=()=>lbMostrar(lbI-1);lb.querySelector(".lb-next").onclick=()=>lbMostrar(lbI+1);
 lb.addEventListener("click",e=>{if(e.target===lb||e.target.tagName=="FIGURE")lbCerrar()});
 let x0=null,y0=0;lb.addEventListener("touchstart",e=>{x0=e.touches[0].clientX;y0=e.touches[0].clientY},{passive:true});
 lb.addEventListener("touchend",e=>{if(x0==null)return;const dx=e.changedTouches[0].clientX-x0,dy=e.changedTouches[0].clientY-y0;x0=null;
  if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)&&lbL.length>1)lbMostrar(lbI+(dx<0?1:-1));else if(dy>90&&Math.abs(dy)>Math.abs(dx))lbCerrar()});}
 const D=L=="en"?EN:ES;lb.querySelector(".lb-x").setAttribute("aria-label",D.lb_cerrar);lb.querySelector(".lb-prev").setAttribute("aria-label",D.lb_ant);lb.querySelector(".lb-next").setAttribute("aria-label",D.lb_sig);
 lbMostrar(i);lb.classList.add("on");document.body.style.overflow="hidden";lb.querySelector(".lb-x").focus()}
function lbCerrar(){if(!lb)return;lb.classList.remove("on");document.body.style.overflow="";if(lbOrigen)lbOrigen.focus()}
document.addEventListener("keydown",e=>{if(!lb||!lb.classList.contains("on"))return;if(e.key=="Escape")lbCerrar();else if(lbL.length>1&&e.key=="ArrowRight")lbMostrar(lbI+1);else if(lbL.length>1&&e.key=="ArrowLeft")lbMostrar(lbI-1)});
document.getElementById("gal").addEventListener("click",e=>{const b=e.target.closest("button[data-i]");if(!b)return;
 const g=window.MILFOR_GALERIA||[],i=+b.dataset.i;lbAbrir(g.filter(x=>x.foto),g.slice(0,i).filter(x=>x.foto).length,b)});
document.querySelectorAll("[data-lb]").forEach(b=>b.onclick=()=>{const k=b.dataset.lbTit;lbAbrir([{foto:b.dataset.lb,titulo:ES[k],titulo_en:EN[k]}],0,b)});
const bl=document.getElementById("llegar");if(bl)bl.onclick=()=>lbAbrir([{foto:"mapa-llegar",titulo:ES.u_mapa,titulo_en:EN.u_mapa}],0,bl);
function aplicar(){document.documentElement.lang=L;const D=L=="en"?EN:ES;
 document.querySelectorAll("[data-i18n]").forEach(e=>{const v=D[e.dataset.i18n];if(v!=null)e.innerHTML=v});
 document.querySelectorAll("[data-i18n-alt]").forEach(e=>{const v=D[e.dataset.i18nAlt];if(v!=null)e.alt=v});
 document.querySelectorAll("[data-i18n-aria]").forEach(e=>{const v=D[e.dataset.i18nAria];if(v!=null)e.setAttribute("aria-label",v)});
 document.querySelectorAll("[data-wa]").forEach(a=>a.href="https://wa.me/573212721996?text="+encodeURIComponent(WA[L]));
 const b=document.getElementById("lang");b.textContent=L=="en"?"ES":"EN";b.setAttribute("aria-label",L=="en"?"Cambiar a español":"Switch to English");gal()}
document.getElementById("lang").onclick=()=>{L=L=="en"?"es":"en";try{localStorage.setItem("milfor-web-lang",L)}catch(e){}aplicar()};
document.getElementById("anio").textContent=new Date().getFullYear();aplicar();
})();
