var guest = null;
var hotel = null;
var booking = null;
var payMethod = 'card';

var hotels = [
  {id:1,name:"فور سيزونز القاهرة نايل بلازا",city:"القاهرة",stars:5,price:18500,amenities:["واي فاي","سبا","مطعم","إطلالة نيل"]},
  {id:2,name:"ماريوت مينا هاوس القاهرة",city:"القاهرة",stars:5,price:12000,amenities:["إطلالة أهرامات","مطعم","واي فاي","حدائق"]},
  {id:3,name:"النيل ريتز كارلتون القاهرة",city:"القاهرة",stars:5,price:16000,amenities:["إطلالة نيل","سبا","مطعم","نادي رياضي"]},
  {id:4,name:"إنتركونتيننتال سميراميس",city:"القاهرة",stars:5,price:9500,amenities:["إطلالة نيل","مطعم","واي فاي","حمام سباحة"]},
  {id:5,name:"فيرمونت نايل سيتي",city:"القاهرة",stars:5,price:11000,amenities:["إطلالة نيل","سبا","مطعم","نادي رياضي"]},
  {id:6,name:"هيلتون القاهرة جراند نايل",city:"القاهرة",stars:5,price:8500,amenities:["مطعم","واي فاي","حمام سباحة","نادي رياضي"]},
  {id:7,name:"رمسيس هيلتون",city:"القاهرة",stars:4,price:5200,amenities:["مطعم","واي فاي","نادي رياضي","موقف سيارات"]},
  {id:8,name:"كونراد القاهرة",city:"القاهرة",stars:5,price:10500,amenities:["إطلالة نيل","سبا","مطعم","نادي رياضي"]},
  {id:9,name:"سانت ريجيس القاهرة",city:"القاهرة",stars:5,price:17500,amenities:["إطلالة نيل","سبا فاخر","مطعم","خدمة غرف"]},
  {id:10,name:"ماريوت القاهرة",city:"القاهرة",stars:5,price:9000,amenities:["مطعم","واي فاي","حمام سباحة","نادي رياضي"]},
  {id:11,name:"توليب النيل مول",city:"القاهرة",stars:4,price:3200,amenities:["مطعم","واي فاي","موقف سيارات"]},
  {id:12,name:"بارسيلو كايرو",city:"القاهرة",stars:4,price:4500,amenities:["مطعم","واي فاي","حمام سباحة"]},
  {id:13,name:"كمبينسكي النيل",city:"القاهرة",stars:5,price:14000,amenities:["إطلالة نيل","سبا","مطعم","خدمة غرف"]},
  {id:14,name:"ويندام القاهرة",city:"القاهرة",stars:4,price:3800,amenities:["مطعم","واي فاي","نادي رياضي"]},
  {id:15,name:"سوفيتل الجزيرة",city:"القاهرة",stars:5,price:11500,amenities:["إطلالة نيل","سبا","حدائق","مطعم"]},
  {id:16,name:"صنرايز أليكس أفينيو",city:"الإسكندرية",stars:5,price:7200,amenities:["شاطئ خاص","مطعم","واي فاي","حمام سباحة"]},
  {id:17,name:"شيراتون المنتزه",city:"الإسكندرية",stars:5,price:6500,amenities:["شاطئ","مطعم","سبا","نادي رياضي"]},
  {id:18,name:"هيلتون كورنيش الإسكندرية",city:"الإسكندرية",stars:5,price:5800,amenities:["إطلالة بحر","مطعم","نادي رياضي","واي فاي"]},
  {id:19,name:"هيلتون جرين بلازا",city:"الإسكندرية",stars:5,price:6200,amenities:["مول تجاري","مطعم","سبا","نادي رياضي"]},
  {id:20,name:"توليب أليكساندريا",city:"الإسكندرية",stars:4,price:3500,amenities:["مطعم","واي فاي","موقف سيارات"]},
  {id:21,name:"كراون بلازا ميراج",city:"الإسكندرية",stars:5,price:4800,amenities:["مطعم","واي فاي","حمام سباحة","نادي رياضي"]},
  {id:22,name:"بارادايس إن بيتش المعمورة",city:"الإسكندرية",stars:4,price:4200,amenities:["شاطئ","مطعم","واي فاي","حمام سباحة"]},
  {id:23,name:"المغربي الإسكندرية",city:"الإسكندرية",stars:3,price:1300,amenities:["واي فاي","استقبال 24 ساعة","موقف سيارات"]},
  {id:24,name:"جويل سان ستيفانو",city:"الإسكندرية",stars:4,price:1600,amenities:["مطعم","واي فاي","فطار مجاني"]},
  {id:25,name:"La mer Hotel",city:"الإسكندرية",stars:4,price:1400,amenities:["حمام سباحة","مطعم","واي فاي","موقف سيارات"]},
  {id:26,name:"هيلتون الأقصر ريزورت",city:"الأقصر",stars:5,price:5500,amenities:["إطلالة نيل","مطعم","حمام سباحة","نادي رياضي"]},
  {id:27,name:"شيراتون الأقصر",city:"الأقصر",stars:5,price:4800,amenities:["إطلالة نيل","مطعم","سبا","نادي رياضي"]},
  {id:28,name:"سوفيتل وينتر بالاس",city:"الأقصر",stars:5,price:7200,amenities:["تاريخي","إطلالة نيل","حدائق","سبا"]},
  {id:29,name:"بافيلون وينتر الأقصر",city:"الأقصر",stars:5,price:6000,amenities:["إطلالة نيل","مطعم","حمام سباحة","نادي رياضي"]},
  {id:30,name:"أركان إيبلا",city:"الأقصر",stars:4,price:2800,amenities:["مطعم","واي فاي","موقف سيارات"]},
  {id:31,name:"إيبروتيل لوكسور",city:"الأقصر",stars:4,price:2200,amenities:["مطعم","واي فاي","حمام سباحة"]},
  {id:32,name:"أولد كاتاراكت أسوان",city:"أسوان",stars:5,price:8500,amenities:["تاريخي","إطلالة نيل","سبا","نادي رياضي"]},
  {id:33,name:"موفنبيك أسوان",city:"أسوان",stars:5,price:6500,amenities:["إطلالة نيل","مطعم","حمام سباحة","سبا"]},
  {id:34,name:"باسما أسوان",city:"أسوان",stars:4,price:3200,amenities:["إطلالة نيل","مطعم","واي فاي","موقف سيارات"]},
  {id:35,name:"إيكوتيل أسوان",city:"أسوان",stars:3,price:1800,amenities:["واي فاي","مطعم","موقف سيارات"]},
  {id:36,name:"ريكسوس بريميوم سي جايت",city:"شرم الشيخ",stars:5,price:12000,amenities:["شاطئ خاص","أكوا بارك","سبا","نادي رياضي"]},
  {id:37,name:"فور سيزونز شرم الشيخ",city:"شرم الشيخ",stars:5,price:15000,amenities:["شاطئ خاص","سبا فاخر","غوص","نادي رياضي"]},
  {id:38,name:"وايت هيلز شرم الشيخ",city:"شرم الشيخ",stars:5,price:9500,amenities:["شاطئ","أكوا بارك","مطعم","نادي رياضي"]},
  {id:39,name:"بارسيلو تيران",city:"شرم الشيخ",stars:5,price:8800,amenities:["شاطئ خاص","ألعاب مائية","مطعم","سبا"]},
  {id:40,name:"جاز ميرابل شامل",city:"شرم الشيخ",stars:5,price:7200,amenities:["شاطئ","أكوا بارك","مطعم","نادي رياضي"]},
  {id:41,name:"مونتي كارلو شرم الشيخ",city:"شرم الشيخ",stars:5,price:7800,amenities:["شاطئ","سبا","مطعم","نادي رياضي"]},
  {id:42,name:"ميراكي للبالغين فقط",city:"شرم الشيخ",stars:5,price:11000,amenities:["شاطئ خاص","سبا","للبالغين فقط","نادي رياضي"]},
  {id:43,name:"رويال سافوي شرم الشيخ",city:"شرم الشيخ",stars:5,price:8500,amenities:["شاطئ","نادي رياضي","مطعم","سبا"]},
  {id:44,name:"بيكالباتروس رويال موديرنا",city:"شرم الشيخ",stars:5,price:9200,amenities:["شاطئ","أكوا بارك","سبا","نادي رياضي"]},
  {id:45,name:"صن رايز رويال مكادي",city:"الغردقة",stars:5,price:9500,amenities:["شاطئ خاص","أكوا بارك","سبا","نادي رياضي"]},
  {id:46,name:"جاز أكوافيفا",city:"الغردقة",stars:5,price:8800,amenities:["شاطئ","أكوا بارك","مطعم","نادي رياضي"]},
  {id:47,name:"صن رايز مملوك بالاس",city:"الغردقة",stars:5,price:10500,amenities:["شاطئ خاص","سبا فاخر","مطعم","نادي رياضي"]},
  {id:48,name:"جاز رويال بالماريڤا",city:"الغردقة",stars:5,price:8200,amenities:["شاطئ","ألعاب مائية","مطعم","سبا"]},
  {id:49,name:"بيكالباتروس سيتادل",city:"الغردقة",stars:5,price:7800,amenities:["شاطئ خاص","أكوا بارك","مطعم","نادي رياضي"]},
  {id:50,name:"جاز مكادي أويسيس",city:"الغردقة",stars:5,price:9000,amenities:["شاطئ","أكوا بارك","غولف","سبا"]},
  {id:51,name:"بريما لايف مكادي",city:"الغردقة",stars:5,price:7500,amenities:["شاطئ","ألعاب مائية","مطعم","نادي رياضي"]},
  {id:52,name:"ليمون آند سول مكادي",city:"الغردقة",stars:5,price:6800,amenities:["شاطئ","حدائق","مطعم","نادي رياضي"]},
  {id:53,name:"صن رايز سيرانو أكوا بارك",city:"الغردقة",stars:4,price:4950,amenities:["أكوا بارك","شاطئ","مطعم","نادي رياضي"]},
  {id:54,name:"موفنبيك الجونة",city:"الجونة",stars:5,price:8500,amenities:["شاطئ خاص","سبا","غولف","نادي رياضي"]},
  {id:55,name:"الشيخة الجونة",city:"الجونة",stars:5,price:11000,amenities:["شاطئ خاص","سبا فاخر","مطعم","نادي رياضي"]},
  {id:56,name:"أوراسكوم الجونة",city:"الجونة",stars:4,price:5500,amenities:["شاطئ","نادي رياضي","مطعم","سبا"]},
  {id:57,name:"كوكو بيتش الجونة",city:"الجونة",stars:4,price:4200,amenities:["شاطئ","مطعم","واي فاي","نادي رياضي"]},
  {id:58,name:"شتايجنبرجر الداو",city:"مرسى علم",stars:5,price:9500,amenities:["شاطئ خاص","غوص","سبا","نادي رياضي"]},
  {id:59,name:"جاز لامايا",city:"مرسى علم",stars:5,price:7200,amenities:["شاطئ","أكوا بارك","مطعم","نادي رياضي"]},
  {id:60,name:"بورتو مارسا علم",city:"مرسى علم",stars:4,price:4800,amenities:["شاطئ","حمام سباحة","مطعم","نادي رياضي"]},
  {id:61,name:"أوراسكوم مرسى علم",city:"مرسى علم",stars:5,price:6800,amenities:["شاطئ خاص","غوص","مطعم","سبا"]},
  {id:62,name:"هيلتون دهب",city:"دهب",stars:5,price:5500,amenities:["شاطئ","غوص","سبا","نادي رياضي"]},
  {id:63,name:"تيرانا دهب",city:"دهب",stars:4,price:3200,amenities:["شاطئ","مطعم","واي فاي","نادي رياضي"]},
  {id:64,name:"سيفن هافن دهب",city:"دهب",stars:3,price:1800,amenities:["شاطئ","مطعم","واي فاي","موقف سيارات"]},
  {id:65,name:"حياة الفيوم",city:"الفيوم",stars:4,price:2500,amenities:["بحيرة","رحلات سفاري","مطعم","نادي رياضي"]},
  {id:66,name:"لازيبي الفيوم",city:"الفيوم",stars:3,price:1500,amenities:["بحيرة","مطعم","واي فاي","موقف سيارات"]},
  {id:67,name:"بالاس فيو الفيوم",city:"الفيوم",stars:4,price:2000,amenities:["إطلالة بحيرة","مطعم","واي فاي","نادي رياضي"]},
  {id:68,name:"أدريير أميلال سيوة",city:"سيوة",stars:4,price:4500,amenities:["إيكولوجي","ينابيع ساخنة","مطعم","نادي رياضي"]},
  {id:69,name:"تالست سيوة",city:"سيوة",stars:3,price:2200,amenities:["إطلالة بحيرة","مطعم","واي فاي","موقف سيارات"]},
  {id:70,name:"سيوة شاليه",city:"سيوة",stars:3,price:1500,amenities:["شاليهات","مطعم","واي فاي","موقف سيارات"]}
];

function goTo(n) {
  var pages = document.querySelectorAll(".page");
  for (var i = 0; i < pages.length; i++) pages[i].classList.remove("active");
  document.getElementById("page-" + n).classList.add("active");
  window.scrollTo(0, 0);
}

function signIn() {
  var name = document.getElementById("name").value.trim();
  var age = parseInt(document.getElementById("age").value);
  var idnum = document.getElementById("idnum").value.trim();
  var err = document.getElementById("err1");
  if (!name || name.length < 3) { err.style.display = "block"; err.textContent = "❌ أدخل الاسم الكامل (3 أحرف على الأقل)"; return; }
  if (!age || age < 18 || age > 99) { err.style.display = "block"; err.textContent = "❌ العمر يجب أن يكون بين 18 و 99 سنة"; return; }
  if (!idnum || idnum.length != 14) { err.style.display = "block"; err.textContent = "❌ رقم الهوية يجب أن يكون 14 رقمًا بالضبط"; return; }
  guest = { name: name, age: age, id: idnum };
  document.getElementById("guest-name").textContent = name;
  err.style.display = "none";
  goTo(2);
}

function search() {
  var city = document.getElementById("city").value;
  var room = document.getElementById("room").value;
  var price = document.getElementById("price").value;
  if (!city) { alert("❌ الرجاء اختيار المدينة أولاً"); return; }
  document.getElementById("loading").classList.add("show");
  document.getElementById("results").classList.remove("show");
  setTimeout(function() {
    document.getElementById("loading").classList.remove("show");
    var results = [];
    for (var i = 0; i < hotels.length; i++) { if (hotels[i].city == city) results.push(hotels[i]); }
    if (price == "budget") results = results.filter(function(h){return h.price < 1500});
    if (price == "mid") results = results.filter(function(h){return h.price >= 1500 && h.price <= 3500});
    if (price == "luxury") results = results.filter(function(h){return h.price > 3500});
    results.sort(function(a,b){return b.price - a.price});
    document.getElementById("count").textContent = results.length;
    var html = "";
    if (results.length == 0) html = "<p style='text-align:center;color:var(--muted);padding:40px;font-size:15px'>لا توجد فنادق مطابقة لمعايير البحث</p>";
    for (var i = 0; i < results.length; i++) {
      var h = results[i];
      var stars = ""; for (var s = 0; s < h.stars; s++) stars += "★";
      var am = ""; for (var a = 0; a < h.amenities.length; a++) am += "<span class='amenity'>" + h.amenities[a] + "</span>";
      html += "<div class='hotel-card' onclick='pickHotel(" + h.id + ")'><div class='hotel-img'>🏨</div><div class='hotel-body'><div class='hotel-name'>" + h.name + "</div><div class='hotel-city'>📍 " + h.city + "</div><div class='hotel-stars'>" + stars + "</div><div class='hotel-amenities'>" + am + "</div></div><div class='hotel-price'><small>لكل ليلة</small><b>" + h.price.toLocaleString("ar-EG") + " ج.م</b><button class='btn-book'>احجز الآن</button></div></div>";
    }
    document.getElementById("hotels").innerHTML = html;
    document.getElementById("results").classList.add("show");
  }, 1200);
}

function pickHotel(id) {
  for (var i = 0; i < hotels.length; i++) { if (hotels[i].id == id) { hotel = hotels[i]; break; } }
  document.getElementById("h-name").textContent = hotel.name;
  var stars = ""; for (var s = 0; s < hotel.stars; s++) stars += "★";
  document.getElementById("h-stars").textContent = stars;
  var am = ""; for (var a = 0; a < hotel.amenities.length; a++) am += "<span class='amenity'>" + hotel.amenities[a] + "</span>";
  document.getElementById("h-amenities").innerHTML = am;
  document.getElementById("h-price").textContent = hotel.price.toLocaleString("ar-EG") + " ج.م";
  document.getElementById("b-name").textContent = guest.name;
  document.getElementById("b-age").textContent = guest.age + " سنة";
  document.getElementById("b-id").textContent = guest.id;
  document.getElementById("b-room").textContent = document.getElementById("room").value == "single" ? "سنجل - فردية" : "دبل - مزدوجة";
  document.getElementById("in-date").value = "";
  document.getElementById("out-date").value = "";
  document.getElementById("t-night").textContent = "—";
  document.getElementById("t-nights").textContent = "—";
  document.getElementById("t-tax").textContent = "—";
  document.getElementById("t-total").textContent = "—";
  goTo(3);
}

function calc() {
  var d1 = new Date(document.getElementById("in-date").value);
  var d2 = new Date(document.getElementById("out-date").value);
  if (!d1 || !d2 || d2 <= d1) {
    document.getElementById("err3").style.display = "block";
    document.getElementById("err3").textContent = "❌ يجب أن يكون يوم المغادرة بعد يوم الوصول";
    return;
  }
  document.getElementById("err3").style.display = "none";
  var nights = Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
  var price = hotel.price;
  if (document.getElementById("room").value == "double") price = Math.round(price * 1.3);
  var sub = price * nights;
  var tax = Math.round(sub * 0.14);
  var total = sub + tax;
  document.getElementById("t-night").textContent = price.toLocaleString("ar-EG") + " ج.م";
  document.getElementById("t-nights").textContent = nights + " ليلة";
  document.getElementById("t-tax").textContent = tax.toLocaleString("ar-EG") + " ج.م";
  document.getElementById("t-total").textContent = total.toLocaleString("ar-EG") + " ج.م";
  booking = { hotel: hotel, nights: nights, price: price, tax: tax, total: total, room: document.getElementById("room").value, in: document.getElementById("in-date").value, out: document.getElementById("out-date").value };
}

function goPay() {
  if (!booking || !document.getElementById("in-date").value || !document.getElementById("out-date").value) {
    document.getElementById("err3").style.display = "block";
    document.getElementById("err3").textContent = "❌ الرجاء تحديد تواريخ الإقامة أولاً";
    return;
  }
  document.getElementById("err3").style.display = "none";
  document.getElementById("p-hotel").textContent = booking.hotel.name;
  document.getElementById("p-dates").textContent = "الوصول: " + formatDate(booking.in) + "  |  المغادرة: " + formatDate(booking.out);
  document.getElementById("p-total").textContent = booking.total.toLocaleString("ar-EG") + " ج.م";
  goTo(4);
}

function formatDate(dateStr) {
  var d = new Date(dateStr);
  return d.toLocaleDateString("ar-EG", { year: 'numeric', month: 'long', day: 'numeric' });
}

function setPay(method, el) {
  payMethod = method;
  var tabs = document.querySelectorAll(".pay-tab");
  for (var i = 0; i < tabs.length; i++) tabs[i].classList.remove("active");
  el.classList.add("active");
  if (method == "card") {
    document.getElementById("card-form").style.display = "block";
    document.getElementById("alt-form").style.display = "none";
    document.getElementById("pay-btn").style.display = "block";
  } else {
    document.getElementById("card-form").style.display = "none";
    document.getElementById("alt-form").style.display = "block";
    document.getElementById("pay-btn").style.display = "none";
    var names = {vodafone:"فودافون كاش",instapay:"إنستا باي"};
    var icons = {vodafone:"📱",instapay:"🏦"};
    document.getElementById("alt-title").textContent = names[method];
    document.getElementById("alt-icon").textContent = icons[method];
    document.getElementById("alt-name").textContent = names[method];
  }
}

function confirmPay() {
  var err = document.getElementById("err4");
  if (payMethod == "card") {
    if (!document.getElementById("c-name").value.trim()) { err.style.display = "block"; err.textContent = "❌ الرجاء إدخال اسم حامل البطاقة"; return; }
    if (document.getElementById("c-num").value.replace(/\s/g, "").length < 16) { err.style.display = "block"; err.textContent = "❌ رقم البطاقة يجب أن يكون 16 رقمًا"; return; }
    if (document.getElementById("c-exp").value.length < 5) { err.style.display = "block"; err.textContent = "❌ الرجاء إدخال تاريخ الانتهاء بالتنسيق MM/YY"; return; }
    if (document.getElementById("c-cvv").value.length < 3) { err.style.display = "block"; err.textContent = "❌ CVV يجب أن يكون 3 أرقام"; return; }
  }
  err.style.display = "none";
  var ref = "DUCK-" + Math.random().toString(36).substr(2, 6).toUpperCase();
  var saved = JSON.parse(localStorage.getItem("duck") || "[]");
  saved.push({ref:ref,hotel:booking.hotel.name,city:booking.hotel.city,in:booking.in,out:booking.out,nights:booking.nights,total:booking.total,room:booking.room,date:new Date().toISOString(),method:payMethod});
  localStorage.setItem("duck", JSON.stringify(saved));
  document.getElementById("s-hotel").textContent = booking.hotel.name;
  document.getElementById("s-dates").textContent = formatDate(booking.in) + "  →  " + formatDate(booking.out);
  document.getElementById("s-ref").textContent = ref;
  document.getElementById("success").classList.add("show");
}

function viewBookings() {
  document.getElementById("success").classList.remove("show");
  showBookings();
  goTo(5);
}

function goMyBookings() {
  showBookings();
  goTo(5);
}

function showBookings() {
  var saved = JSON.parse(localStorage.getItem("duck") || "[]");
  var total = 0, active = 0, now = new Date();
  for (var i = 0; i < saved.length; i++) {
    total += saved[i].total;
    if (new Date(saved[i].out) >= now) active++;
  }
  document.getElementById("s-total").textContent = saved.length;
  document.getElementById("s-active").textContent = active;
  document.getElementById("s-spent").textContent = total.toLocaleString("ar-EG") + " ج.م";
  var html = "";
  if (saved.length == 0) html = "<p style='text-align:center;color:var(--muted);padding:40px;font-size:15px'>لا توجد حجوزات محفوظة بعد<br>ابدأ بحجز فندقك الأول!</p>";
  for (var i = saved.length - 1; i >= 0; i--) {
    var b = saved[i];
    var isActive = new Date(b.out) >= now;
    var status = isActive ? "<span class='status status-active'>نشط ✅</span>" : "<span class='status status-past'>منتهي 📅</span>";
    var roomText = b.room == "single" ? "غرفة فردية" : "غرفة مزدوجة";
    html += "<div class='booking-item'><div class='booking-icon'>🏨</div><div class='booking-info'><b>" + b.hotel + "</b><small>" + formatDate(b.in) + " → " + formatDate(b.out) + "  |  " + b.nights + " ليلة  |  " + roomText + "</small><div>رقم الحجز: " + b.ref + "</div>" + status + "</div><div class='booking-price'>" + b.total.toLocaleString("ar-EG") + " ج.م</div></div>";
  }
  document.getElementById("bookings").innerHTML = html;
}

function restart() {
  document.getElementById("success").classList.remove("show");
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("idnum").value = "";
  document.getElementById("city").value = "";
  document.getElementById("room").value = "single";
  document.getElementById("price").value = "all";
  document.getElementById("results").classList.remove("show");
  document.getElementById("in-date").value = "";
  document.getElementById("out-date").value = "";
  document.getElementById("c-name").value = "";
  document.getElementById("c-num").value = "";
  document.getElementById("c-exp").value = "";
  document.getElementById("c-cvv").value = "";
  guest = null; hotel = null; booking = null;
  goTo(1);
}

document.addEventListener("DOMContentLoaded", function() {
  var today = new Date().toISOString().split("T")[0];
  document.getElementById("in-date").min = today;
  document.getElementById("out-date").min = today;
});
   
