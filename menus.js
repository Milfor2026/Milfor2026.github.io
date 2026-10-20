// ===== MENÚS =====
// Cada opción: imagen (fotos/menuN-480/800/1600), lema y platos [nombre, descripción, nombre EN, descripción EN].
// Infantil y entradas: el lema es el nombre del plato y platos lleva una sola línea ["", descripción, "", descripción EN] (sin etiqueta en negrita).
// Texto fuente: /workspace/milfor-web/menus_comparacion.md, columna «Texto final» (aprobado por Ricardo; se conservan los lemas).
// video (opcional): nombre del video en videos/ (crearlo con /workspace/milfor-web/procesar_video.py <video> <categoria> <numero>).
// video_v (opcional): súbalo (2, 3…) al reemplazar un video ya publicado, para que los teléfonos no muestren el anterior.
// Para agregar una opción: procese el afiche con procesar_fotos.py (nombre menuN) y copie un bloque.
window.MILFOR_MENUS = [
 {num:1, img:"menu1b", w:1402, h:1767, video:"cena1", lema:"Sabores que enamoran", lema_en:"Flavors to fall in love with", platos:[
  ["Suprema de pollo en emulsión de maracuyá", "pechuga bañada en una salsa sedosa de maracuyá, de notas cítricas y tropicales.", "Chicken suprême in passion fruit emulsion", "breast coated in a silky passion fruit sauce with citrus and tropical notes."],
  ["Medallón de lomo de cerdo en reducción de vino y uvas", "suavemente glaseado, de sabor equilibrado entre lo dulce y lo intenso.", "Pork loin medallion in wine and grape reduction", "lightly glazed, with a balanced sweet and intense flavor."],
  ["Ensalada tropical", "hojas baby de lechuga y espinaca con mango, kiwi, fresa y melón, uvas pasas, finas láminas de queso y un sutil toque de crema.", "Tropical salad", "baby lettuce and spinach leaves with mango, kiwi, strawberry and melon, raisins, thin slices of cheese and a subtle touch of cream."],
  ["Puré de papa artesanal", "de textura aterciopelada y presentación de la casa.", "Artisanal mashed potatoes", "with a velvety texture and house-style presentation."],
  ["Arroz perfumado al ajonjolí", "de acabado delicado y aroma tostado.", "Fragrant sesame rice", "with a delicate finish and a toasted aroma."]]},
 {num:2, img:"menu2b", w:1413, h:1772, video:"cena2", lema:"Sabores que inspiran", lema_en:"Flavors that inspire", platos:[
  ["Lomito de res en reducción de vino", "sellado a la perfección y bañado en una salsa intensa de aromas profundos.", "Beef tenderloin in wine reduction", "perfectly seared and coated in an intense, deeply aromatic sauce."],
  ["Pollo thai relleno de verduras crocantes", "pechuga delicadamente especiada, de inspiración asiática y textura contrastante.", "Thai-style chicken stuffed with crisp vegetables", "delicately spiced chicken breast, Asian-inspired, with contrasting textures."],
  ["Vegetales calientes salteados al ajillo", "salteados brevemente para conservar su color y frescura.", "Warm vegetables sautéed with garlic", "briefly sautéed to keep their color and freshness."],
  ["Papa suprema", "cremosa y suave, de acabado aterciopelado.", "Papa suprema", "creamy and smooth, with a velvety finish."],
  ["Arroz con almendras laminadas tostadas", "arroz blanco esponjoso con almendras laminadas y tostadas, fragante y ligeramente crujiente.", "Rice with toasted sliced almonds", "fluffy white rice with toasted sliced almonds, fragrant and lightly crunchy."]]},
 {num:3, img:"menu3c", w:1411, h:1712, video:"cena3", lema:"Sabores que conectan", lema_en:"Flavors that connect", platos:[
  ["Lomo de cerdo en reducción de uchuva y piña", "glaseado con una salsa agridulce de notas tropicales bien balanceadas.", "Pork loin in goldenberry and pineapple reduction", "glazed with a sweet-and-sour sauce with well-balanced tropical notes."],
  ["Rollito de pollo relleno de espinaca", "bañado en una cremosa salsa de champiñones de aroma suave y envolvente.", "Spinach-stuffed chicken roulade", "topped with a creamy mushroom sauce with a soft, enveloping aroma."],
  ["Puré de papa criolla", "de textura sedosa y presentación cuidada.", "Papa criolla purée", "silky in texture, with a careful presentation."],
  ["Ensalada Waldorf de la casa", "manzana fresca, apio crujiente, maní tostado y fresas, unidos por un aderezo cremoso.", "House Waldorf salad", "fresh apple, crisp celery, toasted peanuts and strawberries, brought together by a creamy dressing."],
  ["Arroz florentino", "aromatizado y de presentación refinada.", "Florentine rice", "aromatic, with a refined presentation."]]},
 {num:4, img:"menu4b", w:1409, h:1486, video:"cena4", lema:"Sabores que impresionan", lema_en:"Flavors that impress", platos:[
  ["Lomito de res estilo stroganoff", "en una salsa cremosa y aromática, de sabor profundo y envolvente.", "Beef tenderloin stroganoff", "in a creamy, aromatic sauce with a deep, rich flavor."],
  ["Pechuga catalana rellena de pimentón asado y queso", "jugosa y terminada al gratín, con notas dulces y ahumadas.", "Catalan-style chicken breast stuffed with roasted red pepper and cheese", "juicy and finished au gratin, with sweet and smoky notes."],
  ["Croquetas de papa con parmesano", "doradas y crujientes por fuera, suaves en su interior.", "Potato croquettes with parmesan", "golden and crisp outside, soft inside."],
  ["Vegetales glaseados al balsámico", "de temporada, con un brillo agridulce de reducción balsámica y una textura firme.", "Balsamic-glazed vegetables", "seasonal vegetables with a sweet-and-sour sheen of balsamic reduction and a firm texture."],
  ["Arroz perfumado al ajonjolí", "de acabado delicado y aroma tostado.", "Fragrant sesame rice", "with a delicate finish and a toasted aroma."]]},
 {num:5, img:"menu5b", w:1413, h:1752, video:"cena5", video_v:2, lema:"Sabores que sorprenden", lema_en:"Flavors that surprise", platos:[
  ["Lomito de cerdo relleno en salsa de champiñones", "tierno y jugoso, de aroma profundo y textura cremosa.", "Stuffed pork tenderloin in mushroom sauce", "tender and juicy, with a deep aroma and a creamy texture."],
  ["Cordon bleu con reducción de arándanos", "de cubierta dorada y crujiente, con un contraste frutal entre lo dulce y lo salado.", "Cordon bleu with cranberry reduction", "with a golden, crispy coating and a fruity sweet-and-savory contrast."],
  ["Espárragos salteados", "frescos, salteados al punto para conservar su color y firmeza.", "Sautéed asparagus", "fresh, sautéed just right to keep their color and firmness."],
  ["Arroz florentino", "aromatizado y de presentación refinada.", "Florentine rice", "aromatic, with a refined presentation."],
  ["Papa pera decorada", "suave y cremosa, presentada con un toque artesanal.", "Decorated baby potatoes", "soft and creamy, served with an artisanal touch."]]},
 {num:6, img:"menu6b", w:1411, h:1756, video:"cena6", lema:"Sabores que se recuerdan", lema_en:"Flavors to remember", platos:[
  ["Suprema de pollo rellena de espinaca y pasas", "tierna y jugosa, con un agradable contraste de sabores dulces y frescos.", "Chicken suprême stuffed with spinach and raisins", "tender and juicy, with a pleasant contrast of sweet and fresh flavors."],
  ["Lomo de cerdo en salsa de vino tinto, albahaca y tomates secos", "brillantemente glaseado, aromático y sofisticado.", "Pork loin in red wine, basil and sun-dried tomato sauce", "beautifully glazed, aromatic and sophisticated."],
  ["Arroz perlado", "de grano definido, fragante y de textura suave.", "Pearl rice", "with well-defined grains, fragrant and soft in texture."],
  ["Ensalada siciliana", "mezcla de lechuga romana, tomates cherry, pimentón en julianas y perlas de mozzarella fresca, con un toque mediterráneo.", "Sicilian salad", "a mix of romaine lettuce, cherry tomatoes, julienned peppers and fresh mozzarella pearls, with a Mediterranean touch."],
  ["Duquesas de papa gratinadas", "de superficie dorada e interior suave, de presentación refinada.", "Gratinéed duchess potatoes", "golden on the surface and soft inside, with a refined presentation."]]},
 {num:7, img:"menu7b", w:1413, h:1555, video:"cena7", lema:"Sabores con alma tropical", lema_en:"Flavors with a tropical soul", platos:[
  ["Lomo de cerdo hawaiano", "jugoso, con piña y especias tropicales y un glaseado suave.", "Hawaiian pork loin", "juicy, with pineapple and tropical spices and a gentle glaze."],
  ["Pollo a la naranja", "tierno y aromático, en una salsa de naranja de sabor cítrico y equilibrado.", "Orange chicken", "tender and aromatic, in an orange sauce with a balanced citrus flavor."],
  ["Ensalada griega", "queso feta, aceitunas negras, cebolla morada y verde y tomates cherry, con un aderezo ligero de sabores mediterráneos.", "Greek salad", "feta cheese, black olives, red and green onion and cherry tomatoes, with a light dressing of Mediterranean flavors."],
  ["Arroz a elección", "arroz al perejil o arroz perfumado al ajonjolí, para complementar el plato principal.", "Rice of your choice", "parsley rice or fragrant sesame rice, to complement the main course."],
  ["Puré de plátano", "suave y cremoso, con un delicado toque dulce.", "Plantain purée", "smooth and creamy, with a delicate sweet touch."]]},
 {num:8, img:"menu8c", w:1413, h:1747, video:"cena8", lema:"Equilibrio y distinción", lema_en:"Balance and distinction", platos:[
  ["Pollo glaseado con miel y mostaza", "pechuga jugosa en un glaseado dulce y ligeramente picante, terminada con finas hierbas.", "Honey-mustard glazed chicken", "juicy breast in a sweet, slightly spicy glaze, finished with fine herbs."],
  ["Posta cartagenera", "tierna posta de res cocida lentamente, con la auténtica sazón de la costa caribeña y especias tradicionales.", "Cartagena-style beef (posta cartagenera)", "tender, slow-cooked beef with the authentic seasoning of the Caribbean coast and traditional spices."],
  ["Ensalada fresca de aguacate y maíz", "mezcla de lechugas, tomates cherry, maíz tierno y aguacate cremoso, con vinagreta de hierbas frescas.", "Fresh avocado and corn salad", "mixed lettuces, cherry tomatoes, sweet corn and creamy avocado, with a fresh-herb vinaigrette."],
  ["Arroz a elección", "arroz al perejil o arroz perfumado al ajonjolí, ideal para cualquier plato principal.", "Rice of your choice", "parsley rice or fragrant sesame rice, ideal for any main course."],
  ["Puré de papa blanca", "suave y cremoso, con mantequilla y un toque de leche fresca.", "Mashed potatoes", "smooth and creamy, with butter and a touch of fresh milk."]]},
 {num:9, img:"menu9b", w:1413, h:1737, video:"cena9", lema:"Tradición con elegancia", lema_en:"Tradition with elegance", platos:[
  ["Salmón a la parrilla", "filete fresco marcado a la parrilla, de interior jugoso, terminado con limón y aceite de oliva virgen.", "Grilled salmon", "fresh fillet seared on the grill, juicy inside, finished with lemon and virgin olive oil."],
  ["Vegetales de temporada salteados en aceite de oliva", "con una sazón suave que conserva su color y textura.", "Seasonal vegetables sautéed in olive oil", "with mild seasoning that keeps their color and texture."],
  ["Puré de papa blanca", "suave y cremoso, con mantequilla y leche, perfecto para acompañar carnes y pescados.", "Mashed potatoes", "smooth and creamy, with butter and milk, perfect with meat and fish."]]},
 {num:10, img:"menu10b", w:1411, h:1429, video:"cena10", lema:"Sabores que dejan huella", lema_en:"Flavors that leave a mark", platos:[
  ["Pernil de cerdo en salsa de ciruela", "jugoso y dorado, con una tersa salsa de ciruelas en balance entre dulzor y acidez.", "Pork leg in plum sauce", "juicy and golden, with a smooth plum sauce balancing sweetness and acidity."],
  ["Pollo teriyaki", "pechuga marinada y glaseada en salsa teriyaki, de perfil dulce y salado con notas umami.", "Teriyaki chicken", "breast marinated and glazed in teriyaki sauce, sweet and savory with umami notes."],
  ["Lasaña de papa", "capas de papa y quesos selectos, horneadas hasta lograr una textura cremosa y una superficie dorada.", "Potato lasagna", "layers of potato and select cheeses, baked until creamy with a golden top."],
  ["Arroz con almendras laminadas tostadas", "arroz blanco esponjoso con almendras laminadas y tostadas, fragante y ligeramente crujiente.", "Rice with toasted sliced almonds", "fluffy white rice with toasted sliced almonds, fragrant and lightly crunchy."],
  ["Ensalada de repollo, frutas y yogur", "repollo finamente cortado con manzana, uvas pasas y fresas, en una suave mezcla de yogures.", "Cabbage, fruit and yogurt salad", "finely shredded cabbage with apple, raisins and strawberries, in a smooth blend of yogurts."]]}
];
// ===== MENÚ INFANTIL =====
window.MILFOR_MENUS_INFANTIL = [
 {num:1, img:"infantil1b", w:1412, h:1734, video:"infantil1", lema:"Crepes de pollo con papas a la francesa y ensalada tropical", lema_en:"Chicken crepes with french fries and tropical salad", platos:[
  ["", "crepes rellenos de pollo tierno, con papas a la francesa doradas y crujientes y ensalada tropical en porción infantil.", "", "crepes filled with tender chicken, with golden, crispy french fries and a kid-size tropical salad."]]},
 {num:2, img:"infantil2b", w:1413, h:1728, video:"infantil2", lema:"Croquetas de pollo con papas a la francesa y ensalada tropical", lema_en:"Chicken croquettes with french fries and tropical salad", platos:[
  ["", "croquetas de pollo doradas y suaves en su interior, con papas a la francesa y ensalada tropical en porción infantil.", "", "golden chicken croquettes, soft inside, with french fries and a kid-size tropical salad."]]},
 {num:3, img:"infantil3", w:1080, h:1574, video:"infantil3", lema:"Pierna y pernil de pollo apanados con papas chips y fruta", lema_en:"Breaded chicken drumstick and thigh with potato chips and fruit", platos:[
  ["", "de cubierta dorada y crujiente, acompañados de finas papas chips y fruta fresca de temporada.", "", "with a golden, crispy coating, served with thin potato chips and fresh seasonal fruit."]]},
 {num:4, img:"infantil4b", w:1413, h:1583, video:"infantil4", lema:"Hamburguesa con papas a la francesa", lema_en:"Burger with french fries", platos:[
  ["", "hamburguesa jugosa en pan suave con toppings selectos, acompañada de papas a la francesa doradas.", "", "a juicy burger on a soft bun with select toppings, served with golden french fries."]]}
];
// ===== ENTRADAS =====
window.MILFOR_MENUS_ENTRADAS = [
 {num:1, img:"entrada1b", w:1417, h:1870, video:"entradas1", lema:"Ceviche de pulpo en leche de tigre", lema_en:"Octopus ceviche in leche de tigre", platos:[
  ["", "tiernos trozos de pulpo en leche de tigre cítrica y especiada, con cebolla morada y hierbas frescas.", "", "tender pieces of octopus in a citrusy, spiced leche de tigre, with red onion and fresh herbs."]]},
 {num:2, img:"entrada2b", w:1416, h:1767, video:"entradas2", lema:"Ceviche de camarón", lema_en:"Shrimp ceviche", platos:[
  ["", "camarones frescos curados en jugo de limón, con cebolla, cilantro y un toque suave de ají.", "", "fresh shrimp cured in lime juice, with onion, cilantro and a mild touch of chili."]]},
 {num:3, img:"entrada3b", w:1418, h:1764, video:"entradas3", lema:"Ceviche peruano", lema_en:"Peruvian ceviche", platos:[
  ["", "pescado fresco marinado en limón, con cebolla morada, ají limo, cilantro y maíz tostado.", "", "fresh fish marinated in lime, with red onion, ají limo chili, cilantro and toasted corn."]]},
 {num:4, img:"entrada4b", w:1414, h:1570, video:"entradas4", lema:"Ceviche de mango y camarón", lema_en:"Mango and shrimp ceviche", platos:[
  ["", "camarones frescos y mango dulce curados en jugo de limón, con un toque de ají.", "", "fresh shrimp and sweet mango cured in lime juice, with a touch of chili."]]},
 {num:5, img:"entrada5", w:1080, h:1563, video:"entradas5", lema:"Ceviche tropical (base a elección)", lema_en:"Tropical ceviche (base of your choice)", platos:[
  ["", "pescado, camarón o mixto, curado en jugo de limón y acompañado de frutas tropicales.", "", "fish, shrimp or mixed, cured in lime juice and served with tropical fruit."]]}
];
