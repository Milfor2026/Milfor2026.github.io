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
 ph:"Photo coming soon"};
const WA={es:"Hola Milfor, quiero información para un evento",en:"Hello Milfor, I'd like information about an event"};
const ES={};document.querySelectorAll("[data-i18n]").forEach(e=>ES[e.dataset.i18n]=e.innerHTML);ES.ph="Foto próximamente";
let L="es";try{L=new URLSearchParams(location.search).get("lang")||localStorage.getItem("milfor-web-lang")||""}catch(e){}
if(!L){const n=navigator.languages||[navigator.language];const f=(n.find(x=>/^(en|es)/i.test(x||""))||"es");L=/^en/i.test(f)?"en":"es"}
function gal(){const g=window.MILFOR_GALERIA||[];document.getElementById("gal").innerHTML=g.map(x=>{const t=(L=="en"&&x.titulo_en)||x.titulo;
 return x.foto?`<figure class="foto"><img src="fotos/${x.foto}" alt="${t}" loading="lazy"><figcaption>${t}</figcaption></figure>`
 :`<figure class="ph"><img src="img/icon-512.png" alt="" aria-hidden="true"><figcaption>${t}<small>${(L=="en"?EN:ES).ph}</small></figcaption></figure>`}).join("")}
function aplicar(){document.documentElement.lang=L;const D=L=="en"?EN:ES;
 document.querySelectorAll("[data-i18n]").forEach(e=>{const v=D[e.dataset.i18n];if(v!=null)e.innerHTML=v});
 document.querySelectorAll("[data-wa]").forEach(a=>a.href="https://wa.me/573212721996?text="+encodeURIComponent(WA[L]));
 const b=document.getElementById("lang");b.textContent=L=="en"?"ES":"EN";b.setAttribute("aria-label",L=="en"?"Cambiar a español":"Switch to English");gal()}
document.getElementById("lang").onclick=()=>{L=L=="en"?"es":"en";try{localStorage.setItem("milfor-web-lang",L)}catch(e){}aplicar()};
document.getElementById("anio").textContent=new Date().getFullYear();aplicar();
})();
