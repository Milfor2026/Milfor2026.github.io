// ===== MENÚS =====
// Cada opción: imagen (fotos/menuN-480/800/1600), lema y platos [nombre, descripción, nombre EN, descripción EN].
// Infantil y entradas: el lema es el nombre del plato y platos lleva una sola línea ["", descripción, "", descripción EN] (sin etiqueta en negrita).
// Texto fuente: /workspace/milfor-web/menus_corregidos.md (aprobado por Ricardo).
// video (opcional): nombre del video en videos/ (crearlo con /workspace/milfor-web/procesar_video.py <video> <categoria> <numero>).
// video_v (opcional): súbalo (2, 3…) al reemplazar un video ya publicado, para que los teléfonos no muestren el anterior.
// Para agregar una opción: procese el afiche con procesar_fotos.py (nombre menuN) y copie un bloque.
window.MILFOR_MENUS = [
 {num:1, img:"menu1", w:1079, h:1576, video:"cena1", lema:"Sabores que enamoran", lema_en:"Flavors to fall in love with", platos:[
  ["Suprema de pollo en emulsión de maracuyá", "bañada en una salsa sedosa de notas cítricas y tropicales.", "Chicken suprême in passion fruit emulsion", "coated in a silky sauce with citrus and tropical notes."],
  ["Medallón de lomo de cerdo en reducción de vino y uvas", "suavemente glaseado, con aromas profundos y un final ligeramente dulce.", "Pork loin medallion in wine and grape reduction", "lightly glazed, with deep aromas and a slightly sweet finish."],
  ["Ensalada tropical", "hojas verdes baby, con lechuga y espinaca, frutas frescas de estación (mango, kiwi, fresa y melón), uvas pasas, finas láminas de queso y un sutil toque de crema.", "Tropical salad", "baby greens with lettuce and spinach, fresh seasonal fruit (mango, kiwi, strawberry and melon), raisins, thin slices of cheese and a subtle touch of cream."],
  ["Puré de papa artesanal", "de textura aterciopelada.", "Artisanal mashed potatoes", "with a velvety texture."],
  ["Arroz perfumado al ajonjolí", "de grano suelto y acabado delicado.", "Fragrant sesame rice", "fluffy grains with a refined finish."]]},
 {num:2, img:"menu2", w:1080, h:1577, video:"cena2", lema:"Sabores que inspiran", lema_en:"Flavors that inspire", platos:[
  ["Lomito de res en reducción de vino", "sellado a la perfección y bañado en una salsa intensa de aromas profundos.", "Beef tenderloin in wine reduction", "perfectly seared and coated in an intense, deeply aromatic sauce."],
  ["Pollo thai relleno de verduras crocantes", "delicadamente especiado y de textura contrastante.", "Thai-style chicken stuffed with crisp vegetables", "delicately spiced, with contrasting textures."],
  ["Papa suprema", "cremosa y suave, de acabado aterciopelado.", "Papa suprema", "creamy and smooth, with a velvety finish."],
  ["Arroz con almendras laminadas tostadas", "arroz blanco esponjoso, mezclado con almendras laminadas y tostadas, fragante y ligeramente crujiente.", "Rice with toasted sliced almonds", "fluffy white rice mixed with toasted sliced almonds, fragrant and lightly crunchy."],
  ["Vegetales calientes salteados al ajillo", "seleccionados y preparados para resaltar su color y frescura.", "Warm vegetables sautéed with garlic", "selected and prepared to bring out their color and freshness."]]},
 {num:3, img:"menu3", w:1077, h:1577, video:"cena3", lema:"Sabores que conectan", lema_en:"Flavors that connect", platos:[
  ["Lomo de cerdo en reducción de uchuva y piña", "glaseado con una salsa agridulce de notas tropicales bien balanceadas.", "Pork loin in goldenberry and pineapple reduction", "glazed with a sweet-and-sour sauce with well-balanced tropical notes."],
  ["Rollito de pollo relleno de espinaca", "bañado en una cremosa salsa de champiñones de aroma suave y envolvente.", "Spinach-stuffed chicken roulade", "topped with a creamy mushroom sauce with a soft, enveloping aroma."],
  ["Puré de papa criolla", "de textura sedosa, cuidadosamente decorado con acabados artesanales.", "Papa criolla purée", "silky in texture, carefully finished with artisanal touches."],
  ["Ensalada Waldorf reinterpretada", "con manzana fresca, apio crujiente, maní tostado, fresas y un delicado toque de crema.", "Reimagined Waldorf salad", "with fresh apple, crisp celery, toasted peanuts, strawberries and a delicate touch of cream."],
  ["Arroz florentino", "aromatizado y de presentación refinada.", "Florentine rice", "aromatic, with a refined presentation."]]},
 {num:4, img:"menu4", w:1080, h:1562, video:"cena4", lema:"Sabores que impresionan", lema_en:"Flavors that impress", platos:[
  ["Lomito de res estilo stroganoff", "en una salsa cremosa y aromática, de sabor profundo y envolvente.", "Beef tenderloin stroganoff", "in a creamy, aromatic sauce with a deep, rich flavor."],
  ["Pechuga catalana rellena de pimentón asado y queso", "jugosa y gratinada, con notas dulces y ahumadas.", "Catalan-style chicken breast stuffed with roasted red pepper and cheese", "juicy and gratinéed, with sweet and smoky notes."],
  ["Croquetas de papa con parmesano", "doradas y crujientes por fuera, suaves en su interior.", "Potato croquettes with parmesan", "golden and crisp outside, soft inside."],
  ["Vegetales glaseados al balsámico", "frescos, con un brillo agridulce de reducción balsámica que realza su sabor natural.", "Balsamic-glazed vegetables", "fresh, with a sweet-and-sour sheen of balsamic reduction that brings out their natural flavor."],
  ["Arroz perfumado al ajonjolí", "de grano suelto y acabado delicado.", "Fragrant sesame rice", "fluffy grains with a refined finish."]]},
 {num:5, img:"menu5", w:1080, h:1574, video:"cena5", video_v:2, lema:"Sabores que sorprenden", lema_en:"Flavors that surprise", platos:[
  ["Lomito de cerdo relleno en salsa de champiñones", "tierno y jugoso, de aroma profundo y textura cremosa.", "Stuffed pork tenderloin in mushroom sauce", "tender and juicy, with a deep aroma and a creamy texture."],
  ["Cordon bleu con reducción de arándanos", "crujiente y dorado, con un sutil contraste dulce y salado.", "Cordon bleu with cranberry reduction", "crisp and golden, with a subtle sweet-and-savory contrast."],
  ["Espárragos salteados", "frescos, salteados al punto para conservar su color y su textura.", "Sautéed asparagus", "fresh, sautéed just right to keep their color and texture."],
  ["Arroz florentino", "aromático y de grano suelto, con un acabado fino.", "Florentine rice", "aromatic and fluffy, with a fine finish."],
  ["Papa pera decorada", "suave y cremosa, presentada con un toque artesanal.", "Decorated baby potatoes", "soft and creamy, served with an artisanal touch."]]},
 {num:6, img:"menu6", w:1080, h:1564, video:"cena6", lema:"Sabores que se recuerdan", lema_en:"Flavors to remember", platos:[
  ["Suprema de pollo rellena de espinaca y pasas", "tierna y jugosa, con un agradable contraste de sabores dulces y frescos.", "Chicken suprême stuffed with spinach and raisins", "tender and juicy, with a pleasant contrast of sweet and fresh flavors."],
  ["Lomo de cerdo en salsa de vino tinto, albahaca y tomates secos", "brillantemente glaseado, aromático y sofisticado.", "Pork loin in red wine, basil and sun-dried tomato sauce", "beautifully glazed, aromatic and sophisticated."],
  ["Arroz perlado", "suelto y fragante, de textura suave.", "Pearl rice", "fluffy and fragrant, with a soft texture."],
  ["Ensalada siciliana", "mezcla de lechuga romana, tomates cherry, pimentones en juliana y perlas de mozzarella fresca, con un toque mediterráneo.", "Sicilian salad", "a mix of romaine lettuce, cherry tomatoes, julienned peppers and fresh mozzarella pearls, with a Mediterranean touch."],
  ["Duquesas de papa gratinadas", "crujientes por fuera y suaves por dentro, de presentación refinada.", "Gratinéed duchess potatoes", "crisp outside and soft inside, with a refined presentation."]]},
 {num:7, img:"menu7", w:1075, h:1567, video:"cena7", lema:"Sabores con alma tropical", lema_en:"Flavors with a tropical soul", platos:[
  ["Lomo de cerdo hawaiano", "jugoso y glaseado con una armoniosa combinación de piña y especias tropicales.", "Hawaiian pork loin", "juicy and glazed with a harmonious blend of pineapple and tropical spices."],
  ["Pollo a la naranja", "tierno y aromático, acompañado de una salsa cítrica equilibrada.", "Orange chicken", "tender and aromatic, served with a balanced citrus sauce."],
  ["Ensalada griega", "con queso feta, aceitunas negras, cebolla morada y verde, tomates cherry frescos y un aderezo ligero que realza los sabores mediterráneos.", "Greek salad", "with feta cheese, black olives, red and green onion, fresh cherry tomatoes and a light dressing that enhances the Mediterranean flavors."],
  ["Arroz a elección", "arroz al perejil o arroz perfumado al ajonjolí, para complementar el plato principal.", "Rice of your choice", "parsley rice or fragrant sesame rice, to complement the main course."],
  ["Puré de plátano", "suave y cremoso, con un delicado toque dulce.", "Plantain purée", "smooth and creamy, with a delicate sweet touch."]]},
 {num:8, img:"menu8", w:1080, h:1557, video:"cena8", lema:"Equilibrio y distinción", lema_en:"Balance and distinction", platos:[
  ["Pollo glaseado con miel y mostaza", "pechuga de pollo jugosa, bañada en un glaseado dulce y ligeramente picante, acompañada de finas hierbas.", "Honey-mustard glazed chicken", "juicy chicken breast in a sweet, slightly spicy glaze, finished with fine herbs."],
  ["Posta cartagenera", "tierna posta de res cocida lentamente, con la auténtica sazón de la costa caribeña y un toque aromático de especias tradicionales.", "Cartagena-style beef (posta cartagenera)", "tender, slow-cooked beef with the authentic seasoning of the Caribbean coast and an aromatic touch of traditional spices."],
  ["Ensalada fresca de aguacate y maíz", "mezcla de lechugas, tomates cherry, maíz tierno y aguacate cremoso, aliñada con vinagreta ligera de hierbas frescas.", "Fresh avocado and corn salad", "mixed lettuces, cherry tomatoes, sweet corn and creamy avocado, dressed with a light fresh-herb vinaigrette."],
  ["Arroz a elección", "arroz al perejil o arroz perfumado al ajonjolí, ideal para complementar cualquier plato principal.", "Rice of your choice", "parsley rice or fragrant sesame rice, ideal to complement any main course."],
  ["Puré de papa blanca", "suave y cremoso, preparado con mantequilla y un toque de leche fresca para un acompañamiento delicado y reconfortante.", "Mashed potatoes", "smooth and creamy, made with butter and a touch of fresh milk for a delicate, comforting side."]]},
 {num:9, img:"menu9", w:1078, h:1578, video:"cena9", lema:"Tradición con elegancia", lema_en:"Tradition with elegance", platos:[
  ["Medallón de res al oporto", "tierno, cocido al punto y bañado en una reducción de vino oporto con toques de hierbas aromáticas que realzan su sabor intenso y elegante.", "Beef medallion in port wine", "tender, cooked just right and coated in a port wine reduction with hints of aromatic herbs that enhance its rich, elegant flavor."],
  ["Salmón a la parrilla", "filete fresco, dorado a la parrilla para un exterior crujiente y un interior jugoso, acompañado de un toque de limón y aceite de oliva virgen.", "Grilled salmon", "fresh fillet, grilled until golden for a crisp outside and a juicy inside, finished with a touch of lemon and virgin olive oil."],
  ["Vegetales de temporada salteados en aceite de oliva", "mezcla de vegetales frescos, salteados ligeramente con especias suaves, manteniendo su color, textura y sabor natural.", "Seasonal vegetables sautéed in olive oil", "a mix of fresh vegetables, lightly sautéed with mild spices, keeping their color, texture and natural flavor."],
  ["Puré de papa blanca", "suave y cremoso, preparado con mantequilla y un toque de leche fresca, perfecto para acompañar carnes y pescados.", "Mashed potatoes", "smooth and creamy, made with butter and a touch of fresh milk, perfect with meat and fish."]]},
 {num:10, img:"menu10", w:1072, h:1546, video:"cena10", lema:"Sabores que dejan huella", lema_en:"Flavors that leave a mark", platos:[
  ["Pernil de cerdo en salsa de ciruela", "jugoso y dorado, acompañado de una tersa salsa de ciruelas que combina dulzura y acidez, resaltando los sabores naturales de la carne.", "Pork leg in plum sauce", "juicy and golden, with a smooth plum sauce that balances sweetness and acidity and brings out the meat's natural flavors."],
  ["Pollo teriyaki", "pechuga de pollo marinada en salsa teriyaki, cocida a la perfección y glaseada, con un balance armonioso de dulzura y notas umami.", "Teriyaki chicken", "chicken breast marinated in teriyaki sauce, perfectly cooked and glazed, with a harmonious balance of sweetness and umami notes."],
  ["Lasaña de papa", "capas suaves de papa y quesos selectos, horneadas hasta obtener una textura cremosa y dorada; un clásico reconfortante con un toque gourmet.", "Potato lasagna", "soft layers of potato and select cheeses, baked until creamy and golden; a comforting classic with a gourmet touch."],
  ["Arroz con almendras laminadas tostadas", "arroz blanco esponjoso, mezclado con almendras laminadas y tostadas, fragante y ligeramente crujiente.", "Rice with toasted sliced almonds", "fluffy white rice mixed with toasted sliced almonds, fragrant and lightly crunchy."],
  ["Ensalada de repollo con frutas y mezcla de yogures", "crujiente repollo finamente cortado, combinado con manzana fresca, uvas pasas y fresas jugosas, aderezado con una suave mezcla de yogures que aporta cremosidad, frescura y un equilibrio perfecto entre dulce y ácido; ideal como entrada ligera.", "Cabbage salad with fruit and mixed yogurts", "crisp, finely shredded cabbage with fresh apple, raisins and juicy strawberries, dressed in a smooth blend of yogurts that adds creaminess, freshness and a perfect balance of sweet and tart; ideal as a light starter."]]}
];
// ===== MENÚ INFANTIL =====
window.MILFOR_MENUS_INFANTIL = [
 {num:1, img:"infantil1", w:1080, h:1572, video:"infantil1", lema:"Crepes de pollo con papas a la francesa y ensalada tropical", lema_en:"Chicken crepes with french fries and tropical salad", platos:[
  ["", "delicados crepes rellenos de pollo tierno, acompañados de papas a la francesa doradas y crujientes, y una fresca ensalada tropical en porción infantil.", "", "delicate crepes filled with tender chicken, served with golden, crispy french fries and a fresh tropical salad in a kid-size portion."]]},
 {num:2, img:"infantil2", w:1080, h:1576, video:"infantil2", lema:"Croquetas de pollo con papas a la francesa y ensalada tropical", lema_en:"Chicken croquettes with french fries and tropical salad", platos:[
  ["", "croquetas doradas y cremosas de pollo, servidas con papas a la francesa crocantes y ensalada tropical en porción infantil, que aporta color y sabor.", "", "golden, creamy chicken croquettes, served with crispy french fries and a kid-size tropical salad that adds color and flavor."]]},
 {num:3, img:"infantil3", w:1080, h:1574, video:"infantil3", lema:"Pierna y pernil de pollo apanados con papas chips y fruta", lema_en:"Breaded chicken drumstick and thigh with potato chips and fruit", platos:[
  ["", "pierna y pernil de pollo apanados y crujientes, acompañados de finas papas chips y fruta fresca de temporada para un contraste dulce y ligero.", "", "crispy breaded chicken drumstick and thigh, served with thin potato chips and fresh seasonal fruit for a light, sweet contrast."]]},
 {num:4, img:"infantil4", w:1080, h:1557, video:"infantil4", lema:"Hamburguesa con papas a la francesa", lema_en:"Burger with french fries", platos:[
  ["", "hamburguesa jugosa con pan suave y toppings selectos, acompañada de papas a la francesa doradas y crujientes.", "", "a juicy burger on a soft bun with select toppings, served with golden, crispy french fries."]]}
];
// ===== ENTRADAS =====
window.MILFOR_MENUS_ENTRADAS = [
 {num:1, img:"entrada1", w:1080, h:1574, video:"entradas1", lema:"Ceviche de pulpo en leche de tigre", lema_en:"Octopus ceviche in leche de tigre", platos:[
  ["", "tiernos trozos de pulpo marinados en leche de tigre cítrica y especiada, acompañados de cebolla morada y hierbas frescas, con un balance perfecto entre la acidez y el sabor del mar.", "", "tender pieces of octopus marinated in a citrusy, spiced leche de tigre, with red onion and fresh herbs, perfectly balancing acidity and the flavor of the sea."]]},
 {num:2, img:"entrada2", w:1080, h:1571, video:"entradas2", lema:"Ceviche de camarón", lema_en:"Shrimp ceviche", platos:[
  ["", "camarones frescos marinados en jugo de limón, con cebolla, cilantro y un toque de ají suave, resaltando la frescura y textura de los mariscos.", "", "fresh shrimp marinated in lime juice with onion, cilantro and a touch of mild chili, highlighting the freshness and texture of the seafood."]]},
 {num:3, img:"entrada3", w:1080, h:1566, video:"entradas3", lema:"Ceviche peruano", lema_en:"Peruvian ceviche", platos:[
  ["", "clásico ceviche con pescado fresco marinado en limón, acompañado de cebolla morada, ají limo, cilantro y maíz tostado, para una experiencia auténtica y vibrante.", "", "a classic ceviche of fresh fish marinated in lime, with red onion, ají limo chili, cilantro and toasted corn, for an authentic, vibrant experience."]]},
 {num:4, img:"entrada4", w:1080, h:1561, video:"entradas4", lema:"Ceviche de mango y camarón", lema_en:"Mango and shrimp ceviche", platos:[
  ["", "camarones frescos combinados con mango dulce, marinados en jugo de limón con un toque de ají, creando un contraste refrescante entre dulce, ácido y picante.", "", "fresh shrimp combined with sweet mango, marinated in lime juice with a touch of chili, creating a refreshing contrast of sweet, tart and spicy."]]},
 {num:5, img:"entrada5", w:1080, h:1563, video:"entradas5", lema:"Ceviche tropical (base a elección)", lema_en:"Tropical ceviche (base of your choice)", platos:[
  ["", "ceviche fresco con base a elección (pescado, camarón o mixto), marinado en jugo de limón y acompañado de frutas tropicales, ideal para quienes buscan una opción refrescante y personalizada.", "", "fresh ceviche with your choice of base (fish, shrimp or mixed), marinated in lime juice and served with tropical fruit, ideal for those looking for a refreshing, personalized option."]]}
];
