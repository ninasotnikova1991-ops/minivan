/* Данные проверены по источникам на 5–6 октября 2026. null = нет проверенных данных. */
const BUDGET = 13;

const CARS = [
  {
    id: "zeekr", name: "Zeekr 009", support: 2, supportLabel: "Параллельный импорт",
    ext: "img/zeekr-ext.webp", int: "img/zeekr-int.webp",
    thesis: "Самый большой запас хода: Москва и область без мыслей о зарядке.",
    year: "2025", kwh: 140, range: 822, rangeLabel: "822 км", hp: 544, acc: 4.5,
    seats: "6 или 7", six: true, length: 5209, wb: 3205, mass: "2830–2970 кг",
    volt: 400, charge: "400 В", chargeScore: 0.4, susp: "Пневмо, 2 камеры",
    priceMin: 10.9, priceMax: 11.3, priceNote: "2025, 140 кВт·ч, полный привод. Новый 2026 AWD — 14,5–15,4 млн",
    peakKw: 400,
    forYou: ["Салон на 6 мест: два отдельных кресла во втором ряду", "Двухкамерная пневмоподвеска", "С пробегом 2026 года — от 11,5 млн"],
    mind: ["Нет официального дилера", "Новый 2026 года дороже лимита", "Утильсбор по полной шкале"],
    note: "Версии 2025: 108 кВт·ч (800 В, 580 кВт, 702 км) и 140 кВт·ч (400 В, 400 кВт, 822 км). Для поездок за город интереснее 140 кВт·ч.",
    sources: [["EN Cars", "https://e-n-cars.ru/product/zeekr-009/"], ["Electrocars", "https://electrocars.ru/catalog/zeekr-009/"], ["Wikipedia", "https://en.wikipedia.org/wiki/Zeekr_009"], ["Rucars", "https://rucars.ru/zeekr-009"]]
  },
  {
    id: "mega", name: "Li Mega", support: 2, supportLabel: "Параллельный импорт",
    ext: "img/mega-ext.webp", int: "img/mega-int.webp",
    thesis: "Самый обтекаемый серийный минивэн и самая быстрая зарядка.",
    year: "2026", kwh: 108, range: 710, rangeLabel: "710 км", hp: 562, acc: 4.9,
    seats: "7 (2+2+3)", six: false, length: 5355, wb: 3300, mass: "≈ 2785 кг",
    volt: 800, charge: "800 В · до 520 кВт", chargeScore: 1, susp: "Активная",
    priceMin: 12.06, priceMax: 13.68, priceNote: "Ultra Home. 12,06 — финальная цена с доставкой у одного импортёра",
    peakKw: 413,
    forYou: ["Массаж кресел второго ряда, 16 точек", "Зарядка 10–80% примерно за 11 минут", "Подруливающая задняя ось (обновление 2026)"],
    mind: ["Цена на границе бюджета", "Нет салона на 6 мест", "Уточнять год и версию в предложении"],
    note: "Масса и время зарядки — данные версии 102,7 кВт·ч; для обновлённой 108 кВт·ч пока не опубликованы. Cx 0,215.",
    sources: [["Revocars", "https://revocars.ru/lixiang/mega/"], ["Rucars", "https://rucars.ru/li-mega"], ["Carscoops", "https://www.carscoops.com/2026/08/li-auto-mega-update-china/"], ["Wikipedia", "https://en.wikipedia.org/wiki/Li_Mega"]]
  },
  {
    id: "denza", name: "Denza D9 EV", support: 2, supportLabel: "Параллельный импорт",
    ext: "img/denza-ext.webp", int: "img/denza-int.webp",
    thesis: "Классический представительский силуэт по разумной цене.",
    year: "2025", kwh: 103, range: 600, rangeLabel: "600 км", hp: 374, acc: 6.9,
    seats: "7", six: false, length: 5250, wb: 3110, mass: null,
    volt: null, charge: "DC до 166 кВт", chargeScore: 0.3, susp: null,
    priceMin: 9.84, priceMax: 11.04, priceNote: "Версия 2025, 103 кВт·ч, полный привод",
    peakKw: 275,
    forYou: ["Дешевле Zeekr — от 9,84 млн", "Несколько продавцов в Москве", "Версия 2026: 115 кВт·ч и 750 км — если найдём в бюджете"],
    mind: ["Меньше запас хода: 600 км", "Зарядка медленнее — до 166 кВт", "Под тем же именем продают гибрид DM-i"],
    note: "Цены 4,3–5,5 млн на некоторых сайтах — это цена в Китае без растаможки и утильсбора.",
    sources: [["Rucars", "https://rucars.ru/denza-d9"], ["CarNewsChina", "https://data.carnewschina.com/database/denza/denza-d9-ev/2026/params"], ["Wikipedia", "https://en.wikipedia.org/wiki/Denza_D9"]]
  },
  {
    id: "voyah", name: "Voyah Dream EV", support: 3, supportLabel: "Официальный дилер",
    ext: "img/voyah-ext.webp", int: "img/voyah-int.webp",
    thesis: "Официальная гарантия: обслуживание как у обычной машины.",
    year: "2026 (РФ)", kwh: 108.7, range: 482, rangeLabel: "482 км*", hp: 435, acc: 5.9,
    seats: "7 (2+2+3)", six: false, length: 5315, wb: 3200, mass: null,
    volt: null, charge: null, chargeScore: 0.5, susp: "Пневмо, адаптивная",
    priceMin: 7.99, priceMax: 7.99, priceFrom: true, priceNote: "Официальный дилер, российская версия",
    peakKw: 320,
    forYou: ["Массаж и вентиляция кресел второго ряда", "Гарантия 5 лет / 100 тыс. км", "Самый низкий порог входа"],
    mind: ["Российская версия слабее китайской 2026 (551 л.с., 700 км)", "Нет салона на 6 мест"],
    note: "* 482 км — цифра дилера для российской версии, не CLTC. Китайская версия 2026 той же батареей заявлена на 700 км CLTC.",
    sources: [["БорисХоф", "https://voyah-borishof.ru/voyah-dream/dream-ev"], ["CarNewsChina", "https://data.carnewschina.com/database/voyah/voyah-dream-ev/2026"], ["CnEVPost", "https://cnevpost.com/2025/09/15/voyah-launches-updated-dream-mpv/"]]
  },
  {
    id: "xpeng", name: "XPeng X9", support: 2, supportLabel: "Параллельный импорт",
    ext: "img/xpeng-ext.webp", int: "img/xpeng-int.webp",
    thesis: "Самый доступный и самый манёвренный в городе.",
    year: "2024–2026", kwh: 110, range: 710, rangeLabel: "до 710 км", hp: 503, acc: null,
    seats: "7 (2+2+3)", six: false, length: 5316, wb: 3160, mass: "2555–2750 кг",
    volt: 800, charge: "800 В · 10–80% от 12 мин", chargeScore: 0.85, susp: "Пневмо, 2 камеры",
    priceMin: 6.2, priceMax: 7.4, priceNote: "Машины 2024–2025 из Китая с пробегом; привод проверять",
    peakKw: 370,
    forYou: ["Разворот 5,4 м — проще в узких дворах", "Третий ряд откидывается до 176°", "Большой запас бюджета"],
    mind: ["Полный привод — только в версии 710 AWD Ultra", "Машины в бюджете — с пробегом", "Есть гибриды под тем же именем"],
    note: "Характеристики — версия 2026 «710 AWD Ultra»: 110 кВт·ч, 370 кВт. У машин 2024–2025 другие батареи — смотрим по каждой.",
    sources: [["CarNewsChina", "https://data.carnewschina.com/database/xpeng/xpeng-x9/2026/params"], ["Revocars", "https://revocars.ru/china-used/xpeng/x9/"], ["Wikipedia", "https://en.wikipedia.org/wiki/XPeng_X9"], ["Peleton", "https://peleton.ru/electro/xpeng/x9-72439418"]]
  },
  {
    id: "levc", name: "LEVC L380", support: 1, supportLabel: "Только под заказ",
    ext: "img/levc-ext.webp", int: "img/levc-int.webp",
    thesis: "Шесть отдельных кресел и самая большая батарея.",
    year: "2026", kwh: 140, range: 805, rangeLabel: "805–819 км", hp: 544, acc: 5.5,
    seats: "6 (2+2+2)", six: true, length: 5318, wb: 3185, mass: "2805 кг",
    volt: null, charge: "10–80% за 30 мин", chargeScore: 0.4, susp: "Пневмо (Ultra)",
    priceMin: null, priceMax: null, priceNote: "Версия Ultra 140 кВт·ч AWD — по запросу. От 8,7 млн — базовая 100 кВт·ч с передним приводом",
    peakKw: 400,
    forYou: ["Кресла переставляются, можно против хода", "805 км по CLTC", "Шесть отдельных кресел"],
    mind: ["В России почти не встречается", "Сервис и запчасти неясны", "Цену нужной версии запрашивать"],
    note: "Geely Galaxy V900 — гибридная версия этой же машины, не путать.",
    sources: [["CarNewsChina", "https://carnewschina.com/2024/06/25/levc-l380-with-over-800-km-all-electric-range-launches-in-china/"], ["Wikipedia", "https://en.wikipedia.org/wiki/LEVC_L380"], ["Kitaj-rulit", "https://kitaj-rulit.ru/geely-levc-l380"]]
  }
];

const CHECKLIST = [
  "Посадка через сдвижную дверь: удобно ли садиться и выходить, есть ли подножка",
  "Кресло второго ряда: регулировки, подставка для ног, наклон спинки",
  "Место для ног, когда водитель сидит в своей позиции",
  "Шум на 80–110 км/ч: шины, ветер, гул",
  "Плавность: лежачие полицейские и стыки — нет ли раскачки",
  "Плавность разгона и торможения в комфортном режиме — не укачивает ли",
  "Свой климат сзади: обдув, подогрев и вентиляция кресел",
  "Меню и экраны на русском, понятно ли управлять креслом",
  "Шторки, тонировка, люк — насколько можно закрыться от солнца",
  "Розетки и беспроводная зарядка телефона у второго ряда",
  "Третий ряд: как раскладывается, удобно ли гостям",
  "Багажник при поднятом третьем ряду — помещаются ли чемоданы",
  "Документы: СБКТС, ЭПТС, 30-минутная мощность, привод по VIN",
  "Гарантия продавца: срок, что покрывает, где обслуживаться"
];

const UTIL_STEPS = [
  { max: 80, label: "до 80 л.с. — льгота для физлица", sum: "≈ 3 400 ₽" },
  { min: 100, max: 130, label: "100–130 л.с.", sum: "≈ 1,098 млн ₽" },
  { min: 190, max: 220, label: "190–220 л.с.", sum: "≈ 1,828 млн ₽" },
  { min: 280.0001, max: Infinity, label: "свыше 280 л.с.", sum: "≈ 3,04 млн ₽" }
];

/* ---------- helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const fmt = (n, d = 2) => n.toLocaleString("ru-RU", { minimumFractionDigits: 0, maximumFractionDigits: d });
const nd = v => (v === null || v === undefined || v === "") ? "н/д" : v;
const priceText = c => c.priceMin == null ? "по запросу" : c.priceFrom ? `от ${fmt(c.priceMin)} млн ₽` : `${fmt(c.priceMin)}–${fmt(c.priceMax)} млн ₽`;
const status = c => {
  if (c.priceMin == null) return ["Нет цены", "warn"];
  if (c.priceMin <= BUDGET && (c.priceMax ?? c.priceMin) <= BUDGET) return ["В бюджете", "ok"];
  if (c.priceMin <= BUDGET) return ["На границе", "warn"];
  return ["Выше лимита", "bad"];
};
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
};
const esc = s => String(s).replace(/[&<>"]/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));

/* ---------- scoring ---------- */
const KNOBS = ["price", "range", "charge", "support", "space"];
let filters = { budget: false, six: false };
let compareSet = new Set(store.get("cmp", CARS.map(c => c.id)));

function norm(v, a, b) { return b === a ? 1 : (v - a) / (b - a); }
function scoreAll(w) {
  const ranges = CARS.map(c => c.range), wbs = CARS.map(c => c.wb);
  const inB = CARS.filter(c => c.priceMin != null && c.priceMin <= BUDGET).map(c => c.priceMin);
  const pMin = Math.min(...inB);
  return CARS.map(c => {
    const s = {
      price: c.priceMin == null ? 0.4 : c.priceMin > BUDGET ? 0 : 1 - 0.7 * norm(c.priceMin, pMin, BUDGET),
      range: 0.3 + 0.7 * norm(c.range, Math.min(...ranges), Math.max(...ranges)),
      charge: c.chargeScore,
      support: [0, 0.2, 0.6, 1][c.support],
      space: 0.3 + 0.7 * norm(c.wb, Math.min(...wbs), Math.max(...wbs))
    };
    const tw = KNOBS.reduce((a, k) => a + w[k], 0) || 1;
    return { ...c, score: Math.round(KNOBS.reduce((a, k) => a + s[k] * w[k], 0) / tw * 100) };
  }).sort((a, b) => b.score - a.score);
}

/* ---------- cards ---------- */
function renderCards() {
  const w = {};
  KNOBS.forEach(k => { w[k] = +$("#w-" + k).value; $("#o-" + k).textContent = w[k]; });
  store.set("weights", w);
  let list = scoreAll(w);
  if (filters.budget) list = list.filter(c => status(c)[1] === "ok");
  if (filters.six) list = list.filter(c => c.six);
  const box = $("#cards");
  if (!list.length) { box.innerHTML = `<div class="empty">Под такие фильтры ни одна машина не подходит. Снимите один из фильтров.</div>`; return; }
  box.innerHTML = list.map((c, i) => {
    const [st, cls] = status(c);
    return `<article class="card">
      <div class="ph"><img src="${c.ext}" alt="${esc(c.name)}" loading="lazy"><span class="rank">№ ${i + 1}</span>
        <span class="score"><b class="num">${c.score}</b><span>из 100</span></span></div>
      <div class="body">
        <h3>${esc(c.name)}</h3>
        <p class="thesis">${esc(c.thesis)}</p>
        <div class="pills"><span class="pill ${cls}">${st}</span><span class="pill">${esc(c.supportLabel)}</span><span class="pill">${esc(c.seats)} мест</span></div>
        <dl class="mini">
          <div><dt>Батарея</dt><dd>${fmt(c.kwh, 1)} кВт·ч</dd></div>
          <div><dt>Запас</dt><dd>${esc(c.rangeLabel)}</dd></div>
          <div><dt>Мощность</dt><dd>${c.hp} л.с.</dd></div>
        </dl>
        <div class="price"><div><b class="num">${priceText(c)}</b><small>Москва, ориентир под ключ</small></div></div>
        <div class="actions">
          <button class="btn btn-primary" data-open="${c.id}">Подробнее</button>
          <label class="cmp-check"><input type="checkbox" data-cmp="${c.id}" ${compareSet.has(c.id) ? "checked" : ""}> В сравнение</label>
        </div>
      </div></article>`;
  }).join("");
}

/* ---------- dialog ---------- */
function openCar(id) {
  const c = CARS.find(x => x.id === id); if (!c) return;
  const [st, cls] = status(c);
  $("#dlg-title").textContent = c.name;
  const spec = [
    ["Год", c.year], ["Батарея", fmt(c.kwh, 1) + " кВт·ч"], ["Запас хода", c.rangeLabel], ["Мощность", c.hp + " л.с."],
    ["0–100 км/ч", c.acc ? fmt(c.acc, 1) + " с" : null], ["Места", c.seats], ["Длина / база", `${c.length} / ${c.wb} мм`],
    ["Масса", c.mass], ["Сеть / зарядка", c.charge], ["Подвеска", c.susp], ["Поддержка в РФ", c.supportLabel]
  ];
  $("#dlg-body").innerHTML = `
    <div class="gallery"><img src="${c.ext}" alt="${esc(c.name)}, общий вид"><img src="${c.int}" alt="${esc(c.name)}, салон"></div>
    <p class="muted" style="margin:0;font-size:18px">${esc(c.thesis)}</p>
    <div class="panel red" style="display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap">
      <div><div class="muted" style="font-size:13px">Москва, ориентир под ключ</div><div class="big num">${priceText(c)}</div><div class="src">${esc(c.priceNote)}</div></div>
      <span class="pill ${cls}" style="font-size:14px">${st}</span>
    </div>
    <dl class="spec">${spec.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(nd(v))}</dd></div>`).join("")}</dl>
    <div class="two">
      <div class="for-you"><h4>Для вас</h4><ul>${c.forYou.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>
      <div class="mind"><h4>Учесть</h4><ul>${c.mind.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>
    </div>
    <p class="note">${esc(c.note)}</p>
    <p class="src">Источники: ${c.sources.map(([t, u]) => `<a href="${u}" target="_blank" rel="noopener">${esc(t)}</a>`).join(" · ")}</p>`;
  $("#dlg").showModal();
}

/* ---------- compare ---------- */
function renderCompare() {
  $("#cmp-bar").innerHTML = CARS.map(c => `<button class="chip" data-cmpchip="${c.id}" aria-pressed="${compareSet.has(c.id)}">${esc(c.name)}</button>`).join("");
  const cs = CARS.filter(c => compareSet.has(c.id));
  if (!cs.length) { $("#cmp").innerHTML = `<tbody><tr><td class="muted">Выберите хотя бы одну машину.</td></tr></tbody>`; return; }
  const rows = [
    ["Год", c => c.year],
    ["Батарея, кВт·ч", c => fmt(c.kwh, 1), c => c.kwh, "max"],
    ["Запас хода, км", c => c.rangeLabel, c => c.range, "max"],
    ["Мощность, л.с.", c => c.hp, c => c.hp, "max"],
    ["0–100 км/ч, с", c => c.acc ? fmt(c.acc, 1) : null, c => c.acc, "min"],
    ["Места", c => c.seats],
    ["Длина, мм", c => c.length, c => c.length, "max"],
    ["Колёсная база, мм", c => c.wb, c => c.wb, "max"],
    ["Масса", c => c.mass],
    ["Сеть / зарядка", c => c.charge],
    ["Подвеска", c => c.susp],
    ["Цена, млн ₽", c => priceText(c).replace(" млн ₽", ""), c => c.priceMin, "min"],
    ["Поддержка", c => c.supportLabel, c => c.support, "max"]
  ];
  let h = `<thead><tr><th scope="col">Параметр</th>${cs.map(c => `<th scope="col">${esc(c.name)}</th>`).join("")}</tr></thead><tbody>`;
  rows.forEach(([label, get, val, dir]) => {
    let best = null;
    if (val && cs.length > 1) {
      const vs = cs.map(val).filter(v => v != null);
      if (vs.length) best = dir === "max" ? Math.max(...vs) : Math.min(...vs);
    }
    h += `<tr><th scope="row">${label}</th>${cs.map(c => {
      const isBest = best != null && val(c) === best;
      return `<td class="${isBest ? "best" : ""}">${esc(nd(get(c)))}</td>`;
    }).join("")}</tr>`;
  });
  $("#cmp").innerHTML = h + "</tbody>";
}
function toggleCompare(id, on) {
  on ? compareSet.add(id) : compareSet.delete(id);
  store.set("cmp", [...compareSet]);
  renderCompare(); renderCards();
}

/* ---------- utilsbor ---------- */
function renderUtil() {
  const kw = parseFloat($("#u-kw").value), k30 = parseFloat($("#u-30").value);
  if (!kw && !k30) { ["#u-base", "#u-hp", "#u-step", "#u-sum"].forEach(s => $(s).textContent = "—"); return; }
  const base = k30 > 0 ? k30 : kw * 0.45;
  const hp = base * 1.3596;
  $("#u-base").textContent = `${fmt(base, 0)} кВт ${k30 > 0 ? "(по документам)" : "(пиковая × 0,45)"}`;
  $("#u-hp").textContent = `≈ ${fmt(hp, 0)} л.с.`;
  const step = UTIL_STEPS.find(s => hp > (s.min ?? 0) && hp <= s.max) || (hp <= 80 ? UTIL_STEPS[0] : null);
  if (hp <= 80) { $("#u-step").textContent = UTIL_STEPS[0].label; $("#u-sum").textContent = UTIL_STEPS[0].sum; return; }
  $("#u-step").textContent = step ? step.label : "между известными ступенями";
  $("#u-sum").textContent = step ? step.sum : "уточнить у брокера";
}

/* ---------- checklist ---------- */
function renderCheck() {
  const car = $("#c-car").value;
  const done = store.get("check-" + car, []);
  $("#c-list").innerHTML = CHECKLIST.map((t, i) => `<label><input type="checkbox" data-ci="${i}" ${done.includes(i) ? "checked" : ""}><span>${esc(t)}</span></label>`).join("");
  const n = done.length;
  $("#c-bar").style.width = Math.round(n / CHECKLIST.length * 100) + "%";
  $("#c-count").textContent = `Отмечено ${n} из ${CHECKLIST.length}`;
}

/* ---------- init ---------- */
function init() {
  const w = store.get("weights", null);
  if (w) KNOBS.forEach(k => { if (w[k] != null) $("#w-" + k).value = w[k]; });
  KNOBS.forEach(k => $("#w-" + k).addEventListener("input", renderCards));

  const fb = $("#f-budget"), fs = $("#f-six");
  fb.onclick = () => { filters.budget = !filters.budget; fb.setAttribute("aria-pressed", filters.budget); renderCards(); };
  fs.onclick = () => { filters.six = !filters.six; fs.setAttribute("aria-pressed", filters.six); renderCards(); };
  $("#f-reset").onclick = () => {
    filters = { budget: false, six: false }; fb.setAttribute("aria-pressed", false); fs.setAttribute("aria-pressed", false);
    const d = { price: 3, range: 4, charge: 2, support: 4, space: 3 };
    KNOBS.forEach(k => $("#w-" + k).value = d[k]); renderCards();
  };

  document.addEventListener("click", e => {
    const o = e.target.closest("[data-open]"); if (o) openCar(o.dataset.open);
    const ch = e.target.closest("[data-cmpchip]"); if (ch) toggleCompare(ch.dataset.cmpchip, !compareSet.has(ch.dataset.cmpchip));
  });
  document.addEventListener("change", e => {
    if (e.target.matches("[data-cmp]")) toggleCompare(e.target.dataset.cmp, e.target.checked);
    if (e.target.matches("[data-ci]")) {
      const car = $("#c-car").value, i = +e.target.dataset.ci;
      let done = store.get("check-" + car, []);
      done = e.target.checked ? [...new Set([...done, i])] : done.filter(x => x !== i);
      store.set("check-" + car, done); renderCheck();
    }
  });
  $("#dlg-close").onclick = () => $("#dlg").close();
  $("#dlg").addEventListener("click", e => { if (e.target === $("#dlg")) $("#dlg").close(); });

  const opts = CARS.map(c => `<option value="${c.id}">${esc(c.name)}</option>`).join("");
  $("#u-car").innerHTML = `<option value="">— своя мощность —</option>` + opts;
  $("#u-car").onchange = () => { const c = CARS.find(x => x.id === $("#u-car").value); $("#u-kw").value = c ? c.peakKw : ""; $("#u-30").value = ""; renderUtil(); };
  $("#u-kw").oninput = renderUtil; $("#u-30").oninput = renderUtil;
  $("#u-car").value = "zeekr"; $("#u-car").onchange();

  $("#c-car").innerHTML = opts; $("#c-car").onchange = renderCheck;

  const seen = new Map();
  CARS.forEach(c => c.sources.forEach(([t, u]) => seen.set(u, `${t} — ${c.name}`)));
  [["Честный Импорт — утильсбор", "https://chest-import.com/stati/utilsbor-na-gibrid-i-elektromobil"], ["epts.online — утильсбор", "https://epts.online/poleznaya-informaciya/tpost/37sazuboj1-osobennosti-rascheta-utilsbora-dlya-elek"], ["АвтоВзгляд — утильсбор 2026", "https://www.avtovzglyad.ru/avto/price/72942-2026-06-25-utilsbor-2026-stavki-tablitsa-raschyot-lgotyi-ikto-mozhet-neplatit/"]].forEach(([t, u]) => seen.set(u, t));
  $("#sources").innerHTML = [...seen].map(([u, t]) => `<li><a href="${u}" target="_blank" rel="noopener">${esc(t)}</a></li>`).join("");

  renderCards(); renderCompare(); renderCheck();
}
init();
