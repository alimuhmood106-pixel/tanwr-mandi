export type Lang = "ckb" | "ar" | "en";

export const PHONE_TEL = "tel:07705102000";
export const PHONE_DISPLAY = "0770 510 2000";
export const FACEBOOK_URL = "https://facebook.com/Tanur.Mandi";
export const INSTAGRAM_URL = "https://instagram.com/tanur_mandi";
export const MAP_LAT = 35.563772;
export const MAP_LNG = 45.403283;
export const DIRECTIONS_URL =
  "https://www.google.com/maps/place/Tanwr+Mandi+-+%D8%AA%D9%86%D9%88%D8%B1+%D9%85%D9%86%D8%AF%D9%8A+-+%D8%AA%DB%95%D9%86%D9%88%D8%B1+%D9%85%DB%95%D9%86%D8%AF%DB%8C%E2%80%AD/@35.563761,45.4027093,90m/data=!3m1!1e3!4m17!1m10!4m9!1m4!2m2!1d45.400064!2d35.5631104!4e1!1m3!2m2!1d45.403283!2d35.563772!3m5!1s0x40002f9f5ac054bb:0x648bcc77373dbe4b!8m2!3d35.5635429!4d45.4032158!16s%2Fg%2F11np7s4m2j?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D";

export const langMeta: Record<Lang, { label: string; dir: "rtl" | "ltr"; htmlLang: string }> = {
  ckb: { label: "کوردی", dir: "rtl", htmlLang: "ckb" },
  ar: { label: "عربي", dir: "rtl", htmlLang: "ar" },
  en: { label: "EN", dir: "ltr", htmlLang: "en" },
};

const ckb = {
  brand: "تەنور مەندی",
  nav: { story: "چیرۆکمان", menu: "خواردن", gallery: "وێنەکان", visit: "سەردانمان بکە" },
  callNow: "پەیوەندی بکە",
  tagline: "تەنور مەندی لە هەموو شوێنێک لەگەڵتە",
  heroCall: "داواکاری بە تەلەفۆن",
  heroFind: "شوێنمان بدۆزەرەوە",
  open24: "٢٤ کاتژمێر کراوەین",
  storyKicker: "لە کۆنەوە",
  storyTitle: "تامی ڕاستەقینەی مەندی",
  storyBody1: "مەندی بە شێوازی یەمەنی، برنج و گۆشت لەناو تەنوری گڵینی ژێر زەویدا هێواش هێواش دەکوڵێن؛ بۆیە بۆنێکی دووکەڵاوی خۆش و گۆشتێکی زۆر نەرم و پڕ ئاوی هەیە.",
  storyBody2: "مریشک یان گۆشتی بەرخ بە بەهاراتی بۆنخۆش دەخەینە ناو تامکەرەوە و لە سەرووی برنجەوە هەڵیدەواسین تا هەموو تامەکەی بچێتە ناو برنجەکەوە.",
  dishesTitle: "خواردنە ناسراوەکانمان",
  dishes: [
    { name: "مەندی مریشک", desc: "مریشکی برژاو لەسەر برنجی پرتەقاڵی بەهاراتدار، لەگەڵ تەماتە و پیاز و بیبەری سەوز." },
    { name: "مەندی بەرخ", desc: "ڕانی بەرخی هێواش کوڵاو لەسەر برنجی کەلەم، لەگەڵ سۆسی تایبەت." },
    { name: "مەقلوبە", desc: "برنج لەگەڵ باینجانی برژاو، گۆشتی نەرم و پەتاتە، گەرم و بە هەڵمەوە." },
  ],
  menuNote: "بۆ لیستی خواردنی ئەمڕۆ پەیوەندیمان پێوە بکە",
  whyTitle: "بۆچی خەڵک خۆشیان دەوێین",
  why: [
    { t: "تامی ڕەسەن", d: "میراتی چێشتلێنانی یەمەنی، وەک خۆی." },
    { t: "کەشێکی گەرم", d: "بۆ کۆبوونەوەی خێزان و نانی ئێوارەی هاوڕێیان." },
    { t: "کەرەستەی باش", d: "برنجی بەسمەتی تازە و بۆنخۆش." },
  ],
  galleryTitle: "وێنەکان",
  servicesTitle: "خزمەتگوزارییەکان",
  dineIn: "خواردن لە چێشتخانە",
  pickup: "وەرگرتن لە بەردەم دەرگا",
  visitTitle: "سەردانمان بکە",
  address: "شەقامی سالم نزيك پردی خەسرەو خاڵ، تەنیشت دار التواضع، سلێمانی",
  hoursLabel: "کاتی کارکردن",
  hours: "٢٤ کاتژمێر، هەموو ڕۆژێک",
  directions: "ڕێنمایی ڕێگا",
  follow: "فۆڵۆمان بکە",
  rights: "© تەنور مەندی",
  close: "داخستن",
  alt: {
    hero: "قاپێکی گەورەی مەندی مریشک لەسەر سەری پیاوێک بە جەمەدانی سوور لە کاتی خۆرئاوابوون",
    storefront: "وێنەی ڕەش و سپی دەرەوەی چێشتخانەی تەنور مەندی",
    interior: "دوو کەس لەناو چێشتخانە قاپێک مەندی پێکەوە دەخۆن",
    mercedes: "قاپی مەندی لەسەر ئۆتۆمبێلێکی مەرسیدسی کۆن",
    maqluba: "مەقلوبە لەسەر قاپێکی ڕەش لەگەڵ ڕۆژنامەیەکی کۆن",
    lamb: "مەندی بەرخ لەسەر برنجی کەلەم",
    logo: "لۆگۆی تەنور مەندی",
  },
};

type Dict = typeof ckb;

const ar: Dict = {
  brand: "تنور مندي",
  nav: { story: "قصتنا", menu: "الأطباق", gallery: "الصور", visit: "زورونا" },
  callNow: "اتصل الآن",
  tagline: "تنور مندي معك أينما كنت",
  heroCall: "اطلب بالهاتف",
  heroFind: "موقعنا",
  open24: "مفتوح ٢٤ ساعة",
  storyKicker: "من زمان",
  storyTitle: "طعم المندي الأصيل",
  storyBody1: "مندي على الطريقة اليمنية، يُطهى فيه الأرز واللحم على مهل داخل تنور طيني تحت الأرض، فيأخذ رائحة الدخان الطيبة ويبقى اللحم طرياً وغنياً بالعصارة.",
  storyBody2: "نتبّل الدجاج أو لحم الغنم ببهارات عطرة، ثم نعلّقه فوق الأرز وهو يُطهى ليتشرّب الأرز كل النكهة.",
  dishesTitle: "أطباقنا المميزة",
  dishes: [
    { name: "مندي دجاج", desc: "دجاج مشوي على أرز برتقالي متبّل، مع الطماطم وحلقات البصل والفلفل الأخضر." },
    { name: "مندي لحم", desc: "موزة غنم مطهوة على مهل فوق أرز بالملفوف مع صلصات التغميس." },
    { name: "مقلوبة", desc: "أرز مع باذنجان مشوي ولحم طري وشرائح بطاطا، تُقدَّم ساخنة يتصاعد منها البخار." },
  ],
  menuNote: "اسألنا عن قائمة اليوم",
  whyTitle: "لماذا يحبنا الناس",
  why: [
    { t: "طعم أصيل", d: "تراث المطبخ اليمني كما هو." },
    { t: "أجواء دافئة", d: "للمّة العائلة وعشاء الأصدقاء." },
    { t: "مكونات طيبة", d: "أرز بسمتي طازج وعطري." },
  ],
  galleryTitle: "معرض الصور",
  servicesTitle: "خدماتنا",
  dineIn: "تناول الطعام في المطعم",
  pickup: "استلام من السيارة",
  visitTitle: "زورونا",
  address: "شارع سالم قرب جسر خسرو خال، بجانب دار التواضع، السليمانية",
  hoursLabel: "ساعات العمل",
  hours: "٢٤ ساعة، طوال أيام الأسبوع",
  directions: "الاتجاهات",
  follow: "تابعونا",
  rights: "© تنور مندي",
  close: "إغلاق",
  alt: {
    hero: "صحن مندي دجاج كبير فوق رأس رجل يرتدي شماغاً أحمر وقت الغروب",
    storefront: "صورة بالأبيض والأسود لواجهة مطعم تنور مندي",
    interior: "رجلان يتشاركان صحن مندي داخل المطعم",
    mercedes: "صحن مندي على غطاء سيارة مرسيدس قديمة",
    maqluba: "مقلوبة على صحن أسود بجانب جريدة قديمة",
    lamb: "مندي لحم على أرز بالملفوف",
    logo: "شعار تنور مندي",
  },
};

const en: Dict = {
  brand: "Tanwr Mandi",
  nav: { story: "Story", menu: "Menu", gallery: "Gallery", visit: "Visit" },
  callNow: "Call Now",
  tagline: "Tanwr Mandi is with you, wherever you go",
  heroCall: "Call to Order",
  heroFind: "Find Us",
  open24: "Open 24 hours",
  storyKicker: "Since forever",
  storyTitle: "The real taste of Mandi",
  storyBody1: "Authentic Yemeni-style Mandi: rice and meat slow-cooked in a traditional underground clay tannour, giving it a smoky aroma and incredibly juicy meat.",
  storyBody2: "Chicken or lamb is marinated in aromatic spices and suspended above the rice as it slow-cooks, so every grain soaks up the flavour.",
  dishesTitle: "Signature dishes",
  dishes: [
    { name: "Chicken Mandi", desc: "Roasted chicken on spiced orange rice with tomato, onion rings and green chili." },
    { name: "Lamb Mandi", desc: "Slow-cooked lamb shank over cabbage rice with dipping sauces." },
    { name: "Maqluba Platter", desc: "Rice with roasted aubergine, tender meat and potato slices, served steaming." },
  ],
  menuNote: "Ask us for today's menu",
  whyTitle: "Why people love us",
  why: [
    { t: "Authentic Taste", d: "Yemeni culinary heritage, done right." },
    { t: "Cozy Ambiance", d: "For family gatherings and casual dinners." },
    { t: "Quality Ingredients", d: "Fresh, fragrant basmati rice." },
  ],
  galleryTitle: "Gallery",
  servicesTitle: "Services",
  dineIn: "Dine-in",
  pickup: "Curbside Pickup",
  visitTitle: "Visit us",
  address: "Salim Street, near Khosrow Khal Bridge, next to Dar Al-Tawadu', Sulaymaniyah, Iraq 46001",
  hoursLabel: "Opening hours",
  hours: "Open 24 hours, every day",
  directions: "Get Directions",
  follow: "Follow us",
  rights: "© Tanwr Mandi",
  close: "Close",
  alt: {
    hero: "A large chicken mandi platter balanced on a man's head wearing a red keffiyeh at sunset",
    storefront: "Black-and-white photo of the Tanwr Mandi storefront",
    interior: "Two men sharing a mandi platter inside the restaurant",
    mercedes: "Mandi platter on the hood of a vintage mustard Mercedes",
    maqluba: "Maqluba on a black plate beside an old newspaper",
    lamb: "Lamb mandi over cabbage rice",
    logo: "Tanwr Mandi logo",
  },
};

export const translations: Record<Lang, Dict> = { ckb, ar, en };
