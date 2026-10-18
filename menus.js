// ===== MENÚS =====
// Cada opción: imagen (fotos/menuN-480/800/1600), lema y platos [nombre, descripción, nombre EN, descripción EN].
// video (opcional): nombre del video en videos/ (crearlo con /workspace/milfor-web/procesar_video.py <video> <categoria> <numero>).
// video_v (opcional): súbalo (2, 3…) al reemplazar un video ya publicado, para que los teléfonos no muestren el anterior.
// Para agregar una opción: procese el afiche con procesar_fotos.py (nombre menuN) y copie un bloque.
window.MILFOR_MENUS = [
 {num:1, img:"menu1", w:1079, h:1576, video:"cena1", lema:"Sabores que enamoran", lema_en:"Flavors to fall in love with", platos:[
  ["Pollo en salsa de maracuyá","jugoso y bañado en una salsa sedosa de notas cítricas y tropicales.","Chicken in passion fruit sauce","juicy and coated in a silky sauce with citrus and tropical notes."],
  ["Lomo de cerdo en salsa de vino y uva","delicadamente glaseado, con aromas profundos y un final ligeramente dulce.","Pork loin in wine and grape sauce","delicately glazed, with deep aromas and a slightly sweet finish."],
  ["Ensalada tropical","hojas verdes baby, frutas frescas de estación (mango, kiwi, fresa y melón), uvas pasas, finas láminas de queso y un sutil toque de crema.","Tropical salad","baby greens, fresh seasonal fruit (mango, kiwi, strawberry and melon), raisins, thin slices of cheese and a subtle touch of cream."],
  ["Puré de papa criolla","de textura aterciopelada.","Creole yellow potato purée","(papa criolla) with a velvety texture."],
  ["Arroz con ajonjolí","de grano suelto y acabado delicado.","Sesame rice","fluffy grains with a delicate finish."]]},
 {num:2, img:"menu2", w:1080, h:1577, video:"cena2", lema:"Sabores que inspiran", lema_en:"Flavors that inspire", platos:[
  ["Lomito de res en salsa de vino","sellado a la perfección y bañado en una salsa intensa de aromas profundos.","Beef tenderloin in wine sauce","perfectly seared and coated in an intense, deeply aromatic sauce."],
  ["Pollo thai relleno de verduras crocantes","delicadamente especiado y de textura contrastante.","Thai-style chicken stuffed with crisp vegetables","delicately spiced, with contrasting textures."],
  ["Verduras calientes salteadas","seleccionadas y preparadas para resaltar su color y frescura.","Warm sautéed vegetables","selected and prepared to bring out their color and freshness."],
  ["Papa suprema","cremosa y suave, de acabado aterciopelado.","Potato suprême","creamy and smooth, with a velvety finish."],
  ["Arroz con almendras","laminadas tostadas, fragante y delicadamente crujiente.","Rice with almonds","toasted sliced almonds, fragrant and delicately crunchy."]]},
 {num:3, img:"menu3", w:1077, h:1577, video:"cena3", lema:"Sabores que conectan", lema_en:"Flavors that connect", platos:[
  ["Lomo de cerdo en salsa de uchuva y piña","glaseado con una salsa agridulce de notas tropicales y delicadamente balanceadas.","Pork loin in goldenberry and pineapple sauce","glazed with a sweet-and-sour sauce with delicately balanced tropical notes."],
  ["Pollo rollito con espinaca","bañado en una cremosa salsa de champiñones de aroma suave y envolvente.","Spinach-stuffed chicken roulade","topped with a creamy mushroom sauce with a soft, rich aroma."],
  ["Puré de papa criolla","de textura sedosa, cuidadosamente decorado con acabados artesanales.","Creole yellow potato purée","silky, carefully finished with an artisanal touch."],
  ["Ensalada Waldorf","con manzana fresca, apio crujiente, maní tostado, fresas y un delicado toque de crema.","Waldorf salad","fresh apple, crisp celery, toasted peanuts, strawberries and a delicate touch of cream."],
  ["Arroz florentino","aromatizado y de presentación refinada.","Florentine rice","aromatic, with a refined presentation."]]},
 {num:4, img:"menu4", w:1080, h:1562, video:"cena4", lema:"Sabores que impresionan", lema_en:"Flavors that impress", platos:[
  ["Lomito de res stroganoff","en una salsa cremosa y aromática, de sabor profundo y envolvente.","Beef stroganoff","in a creamy, aromatic sauce with a deep, rich flavor."],
  ["Pechuga catalana","rellena de pimentón asado y queso, jugosa y gratinada, con notas dulces y ahumadas.","Catalan-style chicken breast","stuffed with roasted red pepper and cheese, juicy and gratinéed, with sweet and smoky notes."],
  ["Croquetas de papa con parmesano","doradas y crujientes por fuera, suaves en su interior.","Potato croquettes with parmesan","golden and crisp outside, soft inside."],
  ["Vegetales salteados","frescos y ligeramente caramelizados para resaltar su sabor natural.","Sautéed vegetables","fresh and lightly caramelized to bring out their natural flavor."],
  ["Arroz al ajonjolí","perfumado, de grano suelto y acabado delicado.","Sesame rice","fragrant, fluffy grains with a delicate finish."]]},
 {num:5, img:"menu5", w:1080, h:1574, video:"cena5", video_v:2, lema:"Sabores que sorprenden", lema_en:"Flavors that surprise", platos:[
  ["Lomito de cerdo relleno en salsa de champiñón","tierno y jugoso, acompañado de una cremosa salsa de aroma profundo.","Stuffed pork tenderloin in mushroom sauce","tender and juicy, with a creamy, deeply aromatic sauce."],
  ["Cordon Bleu con reducción de arándanos","crujiente y dorado, con un delicado contraste dulce y salado.","Cordon bleu with cranberry reduction","crisp and golden, with a delicate sweet-and-savory contrast."],
  ["Espárragos salteados","frescos y ligeramente caramelizados para resaltar su sabor natural.","Sautéed asparagus","fresh and lightly caramelized to bring out their natural flavor."],
  ["Arroz florentino","aromático y de grano suelto, con un acabado delicado.","Florentine rice","aromatic and fluffy, with a delicate finish."],
  ["Papa pera","suave y cremosa, presentada con un toque artesanal.","Baby potatoes","soft and creamy, served with an artisanal touch."]]},
 {num:6, img:"menu6", w:1080, h:1564, video:"cena6", lema:"Sabores que enamoran", lema_en:"Flavors to fall in love with", platos:[
  ["Suprema de pollo rellena de espinaca y pasas","tierna y jugosa, con un delicado contraste de sabores dulces y frescos.","Chicken suprême stuffed with spinach and raisins","tender and juicy, with a delicate contrast of sweet and fresh flavors."],
  ["Lomo de cerdo en salsa de vino tinto, albahaca y tomates secos","glaseado a la perfección, aromático y sofisticado.","Pork loin in red wine, basil and sun-dried tomato sauce","perfectly glazed, aromatic and sophisticated."],
  ["Arroz perlado","suelto y fragante, con textura delicada.","Pearl rice","fluffy and fragrant, with a delicate texture."],
  ["Ensalada siciliana","lechuga romana, tomates cherry, pimentones en juliana y perlas de mozzarella fresca, con un toque de frescura mediterránea.","Sicilian salad","romaine lettuce, cherry tomatoes, julienned peppers and fresh mozzarella pearls, with a fresh Mediterranean touch."],
  ["Duquesas de papa gratinada","crujientes por fuera y suaves por dentro, de presentación refinada.","Gratinéed duchess potatoes","crisp outside and soft inside, with a refined presentation."]]},
 {num:7, img:"menu7", w:1075, h:1567, lema:"Sabores con alma tropical", lema_en:"Flavors with a tropical soul", platos:[
  ["Lomo de cerdo hawaiano","jugoso y glaseado con una delicada combinación de piña y especias tropicales.","Hawaiian pork loin","juicy and glazed with a delicate blend of pineapple and tropical spices."],
  ["Ensalada griega","con queso feta, aceitunas negras, cebolla morada y verde, tomate cherry y un aderezo ligero.","Greek salad","with feta cheese, black olives, red and green onion, cherry tomatoes and a light dressing."],
  ["Arroz a elección","con variedad de sabores para complementar el plato principal.","Rice of your choice","a variety of flavors to complement the main course."],
  ["Puré de plátano","suave y cremoso, con un delicado toque dulce.","Plantain purée","smooth and creamy, with a delicate sweet touch."]]},
 {num:8, img:"menu8", w:1080, h:1557, video:"cena8", lema:"Equilibrio y distinción", lema_en:"Balance and distinction", platos:[
  ["Pollo glaseado con miel y mostaza","pechuga jugosa en un glaseado dulce y ligeramente picante, con finas hierbas.","Honey-mustard glazed chicken","juicy breast in a sweet, slightly spicy glaze with fine herbs."],
  ["Posta cartagenera","tierna posta de res cocida lentamente, con la auténtica sazón de la costa Caribe.","Cartagena-style beef (posta cartagenera)","tender slow-cooked beef with authentic Caribbean-coast seasoning."],
  ["Ensalada siciliana","lechugas, tomates cherry, maíz tierno y aguacate, con vinagreta ligera de hierbas.","Sicilian salad","mixed lettuces, cherry tomatoes, sweet corn and avocado with a light herb vinaigrette."],
  ["Arroz a elección","variedad de sabores para complementar el plato principal.","Rice of your choice","a variety of flavors to complement the main course."],
  ["Puré de papa blanco","suave y cremoso, con mantequilla y un toque de leche fresca.","Mashed potatoes","smooth and creamy, with butter and a touch of fresh milk."]]},
 {num:9, img:"menu9", w:1078, h:1578, lema:"Tradición con elegancia", lema_en:"Tradition with elegance", platos:[
  ["Salmón a la parrilla","filete fresco, crujiente por fuera y jugoso por dentro, con limón y aceite de oliva.","Grilled salmon","fresh fillet, crisp outside and juicy inside, with lemon and olive oil."],
  ["Puré de papa blanco","suave y cremoso, con mantequilla y un toque de leche fresca.","Mashed potatoes","smooth and creamy, with butter and a touch of fresh milk."],
  ["Vegetales salteados","vegetales de temporada salteados con aceite de oliva y especias suaves.","Sautéed vegetables","seasonal vegetables lightly sautéed with olive oil and mild spices."],
  ["Ensalada siciliana","lechugas, tomates cherry, maíz tierno y aguacate, con vinagreta ligera de hierbas.","Sicilian salad","mixed lettuces, cherry tomatoes, sweet corn and avocado with a light herb vinaigrette."],
  ["Arroz a elección","variedad de sabores para complementar el plato principal.","Rice of your choice","a variety of flavors to complement the main course."]]},
 {num:10, img:"menu10", w:1072, h:1546, video:"cena10", lema:"Sabores que dejan huella", lema_en:"Flavors that leave a mark", platos:[
  ["Pernil de cerdo en salsa de ciruela","jugoso y dorado, con una delicada salsa de ciruelas entre dulce y ácida.","Pork leg in plum sauce","juicy and golden, with a delicate sweet-and-tangy plum sauce."],
  ["Pollo teriyaki","pechuga marinada en salsa teriyaki, glaseada, con notas dulces y umami.","Teriyaki chicken","breast marinated in teriyaki sauce and glazed, with sweet and umami notes."],
  ["Lasaña de papa","capas suaves de papa y quesos selectos, horneadas hasta quedar cremosas y doradas.","Potato lasagna","soft layers of potato and select cheeses, baked until creamy and golden."],
  ["Arroz con almendras","esponjoso, con almendras tostadas que aportan textura y un sabor delicado.","Rice with almonds","fluffy, with toasted almonds for texture and a delicate flavor."],
  ["Ensalada de repollo con frutas y mezcla de yogures","repollo finamente cortado con manzana, uvas pasas y fresas, en un aderezo cremoso de yogures.","Cabbage salad with fruit and yogurt dressing","finely shredded cabbage with apple, raisins and strawberries in a creamy yogurt dressing."]]}
];
// ===== MENÚ INFANTIL =====
window.MILFOR_MENUS_INFANTIL = [
 {num:1, img:"infantil1", w:1080, h:1572, video:"infantil1", lema:"Crepes de pollo con papa a la francesa y ensalada", lema_en:"Chicken crepes with french fries and salad", platos:[
  ["Crepes de pollo","suaves crepes rellenos de pollo en una cremosa salsa.","Chicken crepes","soft crepes filled with chicken in a creamy sauce."],
  ["Papa a la francesa","crujientes por fuera, suaves por dentro.","French fries","crispy outside, soft inside."],
  ["Ensalada tropical","frutas de temporada en una cama de lechuga, con aderezo ligero.","Tropical salad","seasonal fruit on a bed of lettuce with a light dressing."]]},
 {num:2, img:"infantil2", w:1080, h:1576, lema:"Croquetas de pollo con papa a la francesa y ensalada", lema_en:"Chicken croquettes with french fries and salad", platos:[
  ["Croquetas de pollo","doradas y cremosas, de sabor suave.","Chicken croquettes","golden and creamy, with a mild flavor kids love."],
  ["Papa a la francesa","crujientes por fuera, suaves por dentro.","French fries","crispy outside, soft inside."],
  ["Ensalada tropical","frutas de temporada en una cama de lechuga, con aderezo ligero.","Tropical salad","seasonal fruit on a bed of lettuce with a light dressing."]]},
 {num:3, img:"infantil3", w:1080, h:1574, lema:"Piernas y perniles apanados con papa chip y fruta", lema_en:"Breaded chicken drumsticks and thighs with potato chips and fruit", platos:[
  ["Piernas y perniles apanados","jugosos, dorados y crujientes por fuera.","Breaded chicken drumsticks and thighs","juicy, golden and crispy outside."],
  ["Papa chip","delgadas y crocantes, con un toque de sal.","Potato chips","thin and crunchy, with a touch of salt."],
  ["Fruta fresca","colorida selección de frutas de temporada.","Fresh fruit","a colorful selection of seasonal fruit."]]},
 {num:4, img:"infantil4", w:1080, h:1557, lema:"Hamburguesa con papa a la francesa", lema_en:"Burger with french fries", platos:[
  ["Hamburguesa","de res, con queso derretido, lechuga y tomate en un suave pan artesanal.","Burger","beef patty with melted cheese, lettuce and tomato on a soft artisan bun."],
  ["Papa a la francesa","crujientes por fuera, suaves por dentro.","French fries","crispy outside, soft inside."],
  ["Salsa de tomate","el acompañamiento perfecto.","Ketchup","the perfect side."]]}
];
// ===== ENTRADAS =====
window.MILFOR_MENUS_ENTRADAS = [
 {num:1, img:"entrada1", w:1080, h:1574, lema:"Ceviche de pulpo en leche de tigre", lema_en:"Octopus ceviche in leche de tigre", platos:[
  ["Pulpo fresco","seleccionado y cocido a la perfección, de textura suave.","Fresh octopus","carefully selected and perfectly cooked, with a tender texture."],
  ["Leche de tigre","mezcla cítrica y aromática con limón, ají y cilantro.","Leche de tigre","a citrusy, aromatic marinade with lime, chili and cilantro."],
  ["Acompañamientos","cebolla roja, ají, cilantro y chips crujientes.","Garnishes","red onion, chili, cilantro and crispy chips."]]},
 {num:2, img:"entrada2", w:1080, h:1571, lema:"Ceviche de camarón en leche de tigre", lema_en:"Shrimp ceviche in leche de tigre", platos:[
  ["Camarón fresco","jugoso y de sabor delicado.","Fresh shrimp","juicy, with a delicate flavor."],
  ["Leche de tigre","mezcla cítrica y aromática con limón, ají y cilantro.","Leche de tigre","a citrusy, aromatic marinade with lime, chili and cilantro."],
  ["Acompañamientos","cebolla roja, ají, cilantro y chips crujientes.","Garnishes","red onion, chili, cilantro and crispy chips."]]},
 {num:3, img:"entrada3", w:1080, h:1566, lema:"Ceviche peruano", lema_en:"Peruvian ceviche", platos:[
  ["Pescado fresco","cortes de pescado blanco, de textura firme y sabor delicado.","Fresh fish","white fish, firm in texture and delicate in flavor."],
  ["Leche de tigre","mezcla cítrica peruana con limón, ají y cilantro.","Leche de tigre","a Peruvian-style citrus marinade with lime, chili and cilantro."],
  ["Acompañamientos","chips crocantes de plátano, camote y maíz.","Garnishes","crunchy plantain, sweet potato and corn chips."]]},
 {num:4, img:"entrada4", w:1080, h:1561, lema:"Ceviche de mango y camarón", lema_en:"Mango and shrimp ceviche", platos:[
  ["Camarón fresco","seleccionado y cocido al punto, de textura firme y jugosa.","Fresh shrimp","carefully selected and cooked just right, firm and juicy."],
  ["Mango natural","trozos de mango maduro y jugoso, con un toque dulce y tropical.","Fresh mango","chunks of ripe, juicy mango with a sweet, tropical touch."],
  ["Acompañamientos","cebolla roja, ají, cilantro y chip de plátano.","Garnishes","red onion, chili, cilantro and plantain chips."]]},
 {num:5, img:"entrada5", w:1080, h:1563, lema:"Ceviche tropical de pescado, camarón o mixto", lema_en:"Tropical ceviche: fish, shrimp or mixed", platos:[
  ["Pescado, camarón o mixto","seleccionados y cocidos al punto, de textura firme y fresca.","Fish, shrimp or mixed","carefully selected and cooked just right, firm and fresh."],
  ["Frutas tropicales","mango, piña y un toque de maracuyá.","Tropical fruit","mango, pineapple and a touch of passion fruit."],
  ["Acompañamientos","chips de plátano y limón.","Garnishes","plantain chips and lime."]]}
];
