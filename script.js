const screens = Array.from(document.querySelectorAll(".screen"));
const openingStage = document.querySelector("#openingStage");
const assembly = document.querySelector("#assembly");
const referenceGrid = document.querySelector("#referenceGrid");
const liveMenuGrid = document.querySelector("#liveMenuGrid");
const ingredientOrbit = document.querySelector("#ingredientOrbit");
const processLayers = document.querySelector("#processLayers");
const productionStage = document.querySelector("#productionStage");
const plateZone = document.querySelector("#plateZone");
const plateHint = document.querySelector("#plateHint");
const assemblyHint = document.querySelector("#assemblyHint");
const closeButton = document.querySelector("[data-close-sandwich]");
const cutKnife = document.querySelector("#cutKnife");
const resultBg = document.querySelector("#resultBg");
const resultVisual = document.querySelector("#resultVisual");
const resultName = document.querySelector("#resultName");
const matchLine = document.querySelector("#matchLine");
const resultKicker = document.querySelector(".result-kicker");
const offlineNote = document.querySelector("#offlineNote");
const soundToggle = document.querySelector("[data-sound-toggle]");
const toast = document.querySelector("#toast");
const menuSheet = document.querySelector("#menuSheet");
const ticketSheet = document.querySelector("#ticketSheet");
const ticketPreview = document.querySelector("#ticketPreview");
const miniSheet = document.querySelector("#miniSheet");
const miniProgramName = "Fulleee福里农舍";

const orderMiniProgramUrl = "";
const MAX_CHOICES = 5;

const ingredientPool = [
  { id: "braised-beef", name: "低温水煮牛腩", image: "assets/ingredients-red/thumbs/braised-beef.png", fallback: "assets/ingredients-clean/meat/slow-cooked-beef.png", tags: ["beef", "meat", "protein"], note: "牛腩一放，内容就认真了。" },
  { id: "mortadella", name: "莫特苔拉香肠", image: "assets/ingredients-red/thumbs/mortadella.png", fallback: "assets/ingredients-red/thumbs/braised-beef.png", tags: ["meat", "savory"], note: "香肠把这一口变得热闹。" },
  { id: "south-african-pepper", name: "南非甜辣椒", image: "assets/ingredients-red/thumbs/south-african-pepper.png", fallback: "assets/ingredients-clean/vegetables/sweet-pepper.png", tags: ["pepper", "vegetable", "sweet"], note: "甜辣椒让颜色亮起来。" },
  { id: "strawberry-tomato", name: "草莓番茄", image: "assets/ingredients-red/thumbs/strawberry-tomato.png", fallback: "assets/ingredients-red/thumbs/south-african-pepper.png", tags: ["tomato", "vegetable", "fresh"], note: "番茄把清爽感带进来了。" },
  { id: "arugula-real", name: "芝麻菜", image: "assets/ingredients-red/thumbs/arugula-real.png", fallback: "assets/ingredients-clean/vegetables/arugula.png", tags: ["arugula", "vegetable", "fresh"], note: "芝麻菜把香气提起来。" },
  { id: "kale", name: "羽衣甘蓝", image: "assets/ingredients-red/thumbs/kale.png", fallback: "assets/ingredients-red/thumbs/arugula-real.png", tags: ["greens", "vegetable", "fresh"], note: "羽衣甘蓝让这一层更绿。" },
  { id: "pickled-onion", name: "腌制洋葱", image: "assets/ingredients-red/thumbs/pickled-onion.png", fallback: "assets/ingredients-red/thumbs/pickle.png", tags: ["pickle", "acid", "vegetable"], note: "洋葱给味道加了一点转弯。" },
  { id: "pickle", name: "酸黄瓜", image: "assets/ingredients-red/thumbs/pickle.png", fallback: "assets/ingredients-red/thumbs/pickled-onion.png", tags: ["pickle", "acid", "fresh"], note: "酸黄瓜让这一口更醒。" },
  { id: "mushroom", name: "茶树菇", image: "assets/ingredients-red/thumbs/mushroom.png", fallback: "assets/ingredients-red/thumbs/braised-beef.png", tags: ["mushroom", "umami"], note: "茶树菇把鲜味铺开。" },
  { id: "stracciatella-real", name: "斯塔塞特拉奶酪", image: "assets/ingredients-red/thumbs/stracciatella-real.png", fallback: "assets/ingredients-clean/cheese/stracciatella.png", tags: ["cheese", "soft", "creamy"], note: "奶酪先把香气托住。" },
  { id: "cheese-sauce", name: "奶酪酱", image: "assets/ingredients-red/thumbs/cheese-sauce.png", fallback: "assets/ingredients-red/thumbs/stracciatella-real.png", tags: ["cheese", "sauce", "creamy"], note: "奶酪酱让这一口更柔软。" },
  { id: "creamy-cheese-sauce", name: "奶香芝士酱", image: "assets/ingredients-red/thumbs/creamy-cheese-sauce.png", fallback: "assets/ingredients-red/thumbs/cheese-sauce.png", tags: ["cheese", "sauce", "creamy"], note: "奶香又厚了一点。" },
  { id: "cheese-slice", name: "芝士片", image: "assets/ingredients-red/thumbs/cheese-slice.png", fallback: "assets/ingredients-red/thumbs/mozzarella-slice.png", tags: ["cheese", "slice"], note: "芝士片稳稳盖上去。" },
  { id: "mozzarella-slice", name: "马苏里拉芝士片", image: "assets/ingredients-red/thumbs/mozzarella-slice.png", fallback: "assets/ingredients-red/thumbs/cheese-slice.png", tags: ["cheese", "mozzarella"], note: "马苏里拉让口感更圆。" },
  { id: "pesto-real", name: "青酱", image: "assets/ingredients-red/thumbs/pesto-real.png", fallback: "assets/ingredients-clean/sauce/pesto.png", tags: ["pesto", "sauce", "green"], note: "青酱这一层很加分。" },
  { id: "cilantro-sauce", name: "香菜酱", image: "assets/ingredients-red/thumbs/cilantro-sauce.png", fallback: "assets/ingredients-red/thumbs/pesto-real.png", tags: ["sauce", "green", "herb"], note: "香菜酱把绿色香气打开。" },
  { id: "vodka-sauce", name: "无酒精伏特加酱", image: "assets/ingredients-red/thumbs/vodka-sauce.png", fallback: "assets/ingredients-red/thumbs/cheese-sauce.png", tags: ["sauce", "creamy", "tomato"], note: "伏特加酱让味道更饱满。" },
  { id: "balsamic-real", name: "黑醋汁", image: "assets/ingredients-red/thumbs/balsamic-real.png", fallback: "assets/ingredients-clean/sauce/balsamic.png", tags: ["balsamic", "sauce", "acid"], note: "黑醋把这一口收完整。" },
  { id: "focaccia-toasted", name: "佛卡夏面包片", image: "assets/ingredients-red/thumbs/focaccia-toasted.png", fallback: "assets/ingredients/thumbs/focaccia.webp", tags: ["bread", "focaccia"], note: "又垫一层佛卡夏，香气更稳。" },
  { id: "focaccia-open", name: "切开佛卡夏", image: "assets/ingredients-red/thumbs/focaccia-open.png", fallback: "assets/ingredients/thumbs/focaccia.webp", tags: ["bread", "focaccia"], note: "面包香气先站出来。" },
  { id: "red-extra", name: "小红帽加料", image: "assets/ingredients-red/thumbs/red-extra.png", fallback: "assets/ingredients-red/thumbs/south-african-pepper.png", tags: ["special", "red"], note: "这一层有点小红帽。" },
];

const liveMenuData = {
  sandwiches: [
    { id: "little-red", name: "小红帽", desc: "青酱、牛肉、芝麻菜和黑醋，招牌香气完整。", core: "青酱 / 牛肉 / 芝麻菜 / 黑醋", label: "招牌香气", price: "¥68 / 份", available: true },
    { id: "wolf-grandma", name: "狼外婆", desc: "牛肉、奶酪和芝麻菜，风味更复合。", core: "牛肉 / 奶酪 / 芝麻菜", label: "复合风味", price: "¥68 / 份", available: true },
    { id: "hunter", name: "猎人", desc: "肉感更浓，适合想要扎实一口。", core: "牛肉 / 黑醋 / 帕马森", label: "浓郁肉感", price: "¥68 / 份", available: true },
    { id: "ferdinand", name: "公牛费迪", desc: "牛肉、青酱和芝士，方向更厚实。", core: "牛肉 / 青酱 / 芝士", label: "厚实一口", price: "¥68 / 份", available: true },
    { id: "chief", name: "村长", desc: "清爽有分寸，口味更明亮。", core: "甜椒 / 奶酪 / 牛肉", label: "明亮清爽", price: "¥68 / 份", available: true },
    { id: "pasture", name: "牧场", desc: "果蔬和青酱风味，轻一点也有内容。", core: "青酱 / 芝麻菜 / 甜椒", label: "轻盈有内容", price: "¥68 / 份", available: true },
    { id: "pistachio", name: "开心果", desc: "奶酪和坚果感，温和但不单薄。", core: "奶酪 / 帕马森 / 温和香气", label: "温和坚果感", price: "¥68 / 份", available: true },
  ]
};
const officialProfiles = [
  {
    id: "little-red",
    name: "小红帽",
    image: "assets/sandwiches/little-red.jpg",
    thumb: "assets/sandwiches/thumbs/little-red.webp",
    core: ["斯塔塞特拉", "青酱", "牛肉", "芝麻菜", "黑醋"],
    label: "招牌 / 香气完整",
    availableNote: "今日在售",
    weights: { stracciatella: 1, pesto: 1.2, pepper: 0.9, beef: 1.25, arugula: 1, parmesan: 0.9, balsamic: 1.2 },
    copy: "你这一份很像小红帽。青酱、芝麻菜、牛肉和黑醋在一起，香气很完整。"
  },
  {
    id: "wolf-grandma",
    name: "狼外婆",
    image: "assets/sandwiches/wolf-grandma.jpg",
    thumb: "assets/sandwiches/thumbs/wolf-grandma.webp",
    core: ["牛肉", "奶酪", "芝麻菜"],
    label: "复合风味 / 拉丝感",
    availableNote: "今日在售",
    weights: { stracciatella: 1.1, pesto: 0.35, beef: 1.25, arugula: 1.05, parmesan: 0.75, balsamic: 0.55 },
    copy: "你这一份有点温柔，也有点认真。奶酪和牛肉把它推向了狼外婆路线。"
  },
  {
    id: "hunter",
    name: "猎人",
    image: "assets/sandwiches/hunter.jpg",
    thumb: "assets/sandwiches/thumbs/hunter.webp",
    core: ["牛肉", "黑醋", "芝士", "芝麻菜"],
    label: "浓郁 / 山林香气",
    availableNote: "今日在售",
    weights: { stracciatella: 0.75, pepper: 0.35, beef: 1.7, arugula: 0.85, parmesan: 1.05, balsamic: 1.1 },
    copy: "你这一份有点认真，有点野。牛肉、黑醋和浓郁芝士把它推向了猎人路线。"
  },
  {
    id: "ferdinand",
    name: "公牛费迪",
    image: "assets/sandwiches/ferdinand.jpg",
    thumb: "assets/sandwiches/thumbs/ferdinand.webp",
    core: ["牛肉", "青酱", "帕马森"],
    label: "牛肉 / 双重奶酪",
    availableNote: "今日在售",
    weights: { stracciatella: 0.8, pesto: 1.15, pepper: 0.6, beef: 1.55, parmesan: 1.25, balsamic: 0.35 },
    copy: "你这一份很扎实。牛肉、青酱和芝士碎凑在一起，像公牛费迪会喜欢的方向。"
  },
  {
    id: "chief",
    name: "村长",
    image: "assets/sandwiches/chief.jpg",
    thumb: "assets/sandwiches/thumbs/chief.webp",
    core: ["牛肉", "奶酪", "甜椒"],
    label: "清爽 / 有分寸",
    availableNote: "今日在售",
    weights: { stracciatella: 1.05, pepper: 1.15, beef: 1.15, arugula: 0.7, parmesan: 0.35, balsamic: 0.8 },
    copy: "你这一份很有分寸。甜椒和奶酪让味道变得明亮，最像村长路线。"
  },
  {
    id: "pasture",
    name: "牧场",
    image: "assets/sandwiches/pasture.jpg",
    thumb: "assets/sandwiches/thumbs/pasture.webp",
    core: ["青酱", "芝麻菜", "甜椒", "黑醋"],
    label: "果蔬 / 清爽",
    availableNote: "今日在售",
    weights: { stracciatella: 0.85, pesto: 1.25, pepper: 1.15, arugula: 1.45, parmesan: 0.35, balsamic: 1.05 },
    copy: "你这一份很清亮。青酱、芝麻菜、甜椒和黑醋让它靠近牧场。"
  },
  {
    id: "pistachio",
    name: "开心果",
    image: "assets/sandwiches/pistachio.jpg",
    thumb: "assets/sandwiches/thumbs/pistachio.webp",
    core: ["奶酪", "芝士碎", "温和香气"],
    label: "坚果感 / 温和",
    availableNote: "今日在售",
    weights: { stracciatella: 1.45, pesto: 0.55, pepper: 0.55, beef: 0.3, arugula: 0.25, parmesan: 1.25, balsamic: 0.45 },
    copy: "你这一份有点圆润。奶酪和芝士碎让它靠近开心果的温和香气。"
  }
];

const supplementalProfileWeights = {
  "little-red": { "braised-beef": 1.25, "stracciatella-real": 1, "pesto-real": 1.2, "arugula-real": 1, "balsamic-real": 1.2, "south-african-pepper": 0.9, "red-extra": 0.9 },
  "wolf-grandma": { "braised-beef": 1.2, "mortadella": 1.05, "stracciatella-real": 1.1, "cheese-sauce": 1, "arugula-real": 1.05, "mozzarella-slice": 0.9, "vodka-sauce": 0.85 },
  "hunter": { "braised-beef": 1.7, "mushroom": 1.25, "balsamic-real": 1.1, "cheese-slice": 0.8, "mozzarella-slice": 0.75, "mortadella": 1.2 },
  "ferdinand": { "braised-beef": 1.55, "pesto-real": 1.15, "cheese-sauce": 0.95, "mozzarella-slice": 1.15, "mushroom": 0.75 },
  "chief": { "south-african-pepper": 1.15, "strawberry-tomato": 1, "stracciatella-real": 1.05, "braised-beef": 1.15, "pickled-onion": 0.9 },
  "pasture": { "pesto-real": 1.25, "arugula-real": 1.45, "kale": 1.25, "south-african-pepper": 1.15, "strawberry-tomato": 1.1, "pickle": 0.85, "balsamic-real": 1.05 },
  "pistachio": { "stracciatella-real": 1.45, "cheese-sauce": 1.2, "creamy-cheese-sauce": 1.35, "cheese-slice": 1, "mozzarella-slice": 1.15, "pesto-real": 0.55 }
};

function getIngredientWeight(profile, ingredient) {
  const base = profile.weights[ingredient.id] || 0;
  const extra = supplementalProfileWeights[profile.id] || {};
  return base + (extra[ingredient.id] || 0);
}
let selectedIngredients = [];
let ingredientCounts = {};
let lastResultScores = [];
let lastHiddenResult = false;
let hasRenderedAssembly = false;
let hasRenderedMenu = false;
let cutStarted = false;
let closingStarted = false;
let toastTimer;
let audioContext;
let soundEnabled = false;
let ambienceOscillators = [];
const repeatHints = {
  generic: ["又加了一层，福气开始加厚。", "这一口开始有点认真。", "你真的很偏爱这个味道。", "这份三明治开始有主见了。"],
  beef: ["又一层牛肉，肉感开始站起来了。", "牛肉含量有点嚣张。", "这已经不是三明治，是牛肉发表意见。"],
  pesto: ["青酱信号加强。", "绿色香气正在扩散。", "这一口开始靠近小红帽。"],
  arugula: ["芝麻菜又铺了一层。", "草地正在靠近。", "清爽感开始冒头。"],
  pepper: ["甜椒又亮了一点。", "红色福气正在冒头。", "这一层很有精神。"],
  stracciatella: ["奶香又厚了一点。", "这一口变得更柔软。", "奶酪开始认真铺开。"],
  parmesan: ["芝士碎又撒了一场。", "像给三明治下了一点雪。", "香气开始落下来。"],
  balsamic: ["黑醋又收了一笔。", "这一口开始有结尾感。", "酸香正在把味道拉住。"]
};

function getRepeatMessage(step, count) {
  if (count <= 1) return step.note;
  const list = repeatHints[step.id] || repeatHints.generic;
  return list[Math.min(count - 2, list.length - 1)] || repeatHints.generic[(count - 2) % repeatHints.generic.length];
}

function showFlavorFloat(message) {
  const rect = plateZone.getBoundingClientRect();
  const float = document.createElement("p");
  float.className = "flavor-float";
  float.textContent = message;
  float.style.left = `${rect.left + rect.width / 2}px`;
  float.style.top = `${rect.top + rect.height * 0.72}px`;
  document.body.appendChild(float);
  window.setTimeout(() => float.remove(), 980);
}

function updateIngredientCountBadge(button, count) {
  button.dataset.countLabel = count > 1 ? `×${count}` : "已加";
}
const layerLayouts = {
  stracciatella: { left: 11, top: 43, width: 38, height: 27, z: 5, rotate: -4, scale: 1.02 },
  "stracciatella-real": { left: 11, top: 43, width: 38, height: 27, z: 5, rotate: -4, scale: 1.02 },
  "cheese-sauce": { left: 15, top: 43, width: 42, height: 28, z: 5, rotate: -3, scale: 1.02 },
  "creamy-cheese-sauce": { left: 38, top: 43, width: 42, height: 28, z: 5, rotate: 4, scale: 1.02 },
  pesto: { left: 48, top: 42, width: 38, height: 27, z: 5, rotate: 5, scale: 1.02 },
  "pesto-real": { left: 48, top: 42, width: 38, height: 27, z: 5, rotate: 5, scale: 1.02 },
  "cilantro-sauce": { left: 45, top: 39, width: 40, height: 28, z: 6, rotate: 6, scale: 1 },
  "vodka-sauce": { left: 29, top: 42, width: 45, height: 29, z: 6, rotate: 2, scale: 1.02 },
  pepper: { left: 23, top: 34, width: 38, height: 28, z: 8, rotate: -8, scale: 0.96 },
  "south-african-pepper": { left: 22, top: 34, width: 40, height: 30, z: 8, rotate: -8, scale: 0.98 },
  "strawberry-tomato": { left: 42, top: 33, width: 36, height: 28, z: 8, rotate: 7, scale: 0.94 },
  beef: { left: 18, top: 27, width: 54, height: 39, z: 10, rotate: 2, scale: 1.06 },
  "braised-beef": { left: 17, top: 27, width: 56, height: 40, z: 10, rotate: 2, scale: 1.08 },
  "mortadella": { left: 23, top: 29, width: 50, height: 36, z: 10, rotate: -3, scale: 1.02 },
  arugula: { left: 33, top: 25, width: 48, height: 38, z: 11, rotate: 8, scale: 0.98 },
  "arugula-real": { left: 33, top: 25, width: 48, height: 38, z: 11, rotate: 8, scale: 0.98 },
  kale: { left: 26, top: 23, width: 52, height: 40, z: 11, rotate: -6, scale: 0.98 },
  "pickled-onion": { left: 30, top: 31, width: 40, height: 30, z: 12, rotate: -10, scale: 0.9 },
  pickle: { left: 38, top: 31, width: 42, height: 30, z: 12, rotate: 9, scale: 0.92 },
  mushroom: { left: 24, top: 28, width: 50, height: 36, z: 10, rotate: -2, scale: 1 },
  parmesan: { left: 25, top: 17, width: 54, height: 42, z: 13, rotate: -3, scale: 0.92 },
  "cheese-slice": { left: 24, top: 30, width: 50, height: 34, z: 12, rotate: -4, scale: 0.96 },
  "mozzarella-slice": { left: 27, top: 28, width: 48, height: 34, z: 12, rotate: 5, scale: 0.96 },
  balsamic: { left: 22, top: 37, width: 58, height: 29, z: 14, rotate: -6, scale: 1 },
  "balsamic-real": { left: 22, top: 37, width: 58, height: 29, z: 14, rotate: -6, scale: 1 },
  "focaccia-toasted": { left: 20, top: 30, width: 58, height: 38, z: 7, rotate: 1, scale: 1.02 },
  "focaccia-open": { left: 20, top: 31, width: 58, height: 38, z: 7, rotate: -2, scale: 1 },
  "red-extra": { left: 28, top: 30, width: 45, height: 34, z: 13, rotate: 7, scale: 0.96 }
};
function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function getLayerMotion(step, layerIndex) {
  const layout = layerLayouts[step.id] || { left: 24, top: 32, width: 52, height: 34, z: 7, rotate: 0, scale: 1 };
  const spread = step.tags.includes("pepper") || step.id === "parmesan" || step.id === "south-african-pepper" ? 9 : 5;
  const layerLift = Math.min(layerIndex * 2.2, 12);
  return {
    layout,
    x: randomBetween(-spread, spread),
    y: randomBetween(-4, 5) - layerLift,
    rotate: layout.rotate + randomBetween(-4, 4),
    startRotate: layout.rotate + randomBetween(-10, 10),
    scale: layout.scale + randomBetween(-0.035, 0.035),
  };
}

function showScreen(name) {
  screens.forEach((screen) => screen.classList.toggle("is-active", screen.dataset.screen === name));
  window.scrollTo({ top: 0, behavior: "auto" });
}

function getAudioContext() {
  if (!window.AudioContext && !window.webkitAudioContext) return null;
  if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
  if (audioContext.state === "suspended") audioContext.resume().catch(() => {});
  return audioContext;
}

function tone(frequency, duration, gainValue, type = "sine", delay = 0) {
  if (!soundEnabled) return;
  const context = getAudioContext();
  if (!context) return;
  const now = context.currentTime + delay;
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, now);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(gainValue, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(now);
  oscillator.stop(now + duration + 0.02);
}

function noise(duration, gainValue, filterFrequency, delay = 0) {
  if (!soundEnabled) return;
  const context = getAudioContext();
  if (!context) return;
  const length = Math.max(1, Math.floor(context.sampleRate * duration));
  const buffer = context.createBuffer(1, length, context.sampleRate);
  const data = buffer.getChannelData(0);
  for (let index = 0; index < length; index += 1) data[index] = (Math.random() * 2 - 1) * (1 - index / length);
  const source = context.createBufferSource();
  const filter = context.createBiquadFilter();
  const gain = context.createGain();
  const now = context.currentTime + delay;
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(filterFrequency, now);
  gain.gain.setValueAtTime(gainValue, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  source.buffer = buffer;
  source.connect(filter);
  filter.connect(gain);
  gain.connect(context.destination);
  source.start(now);
}

function playSound(name) {
  if (!soundEnabled) return;
  if (name === "tap") return tone(440, 0.06, 0.03, "triangle");
  if (name === "cut") { noise(0.12, 0.026, 1600); return tone(150, 0.09, 0.018, "sine", 0.06); }
  if (name === "drop") { tone(128, 0.1, 0.03, "sine"); return noise(0.08, 0.018, 460); }
  if (name === "ding") { tone(880, 0.15, 0.026); return tone(1320, 0.1, 0.014, "sine", 0.025); }
  if (name === "paper") { noise(0.24, 0.028, 1300); return noise(0.12, 0.016, 760, 0.14); }
}

function startAmbience() {
  if (!soundEnabled || ambienceOscillators.length) return;
  const context = getAudioContext();
  if (!context) return;
  [174, 220].forEach((frequency, index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = frequency;
    gain.gain.value = index === 0 ? 0.004 : 0.003;
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    ambienceOscillators.push(oscillator);
  });
}

function stopAmbience() {
  ambienceOscillators.forEach((oscillator) => { try { oscillator.stop(); } catch (error) {} });
  ambienceOscillators = [];
}

function setSoundEnabled(enabled) {
  soundEnabled = enabled;
  soundToggle.classList.toggle("is-on", enabled);
  soundToggle.setAttribute("aria-pressed", String(enabled));
  soundToggle.textContent = enabled ? "吧台小动静 开" : "吧台小动静 关";
  if (enabled) { getAudioContext(); startAmbience(); playSound("tap"); } else { stopAmbience(); }
}

function showToast(message) {
  toast.textContent = message;
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => { toast.textContent = ""; }, 2300);
}

function startCut() {
  if (cutStarted) return;
  cutStarted = true;
  getAudioContext();
  playSound("cut");
  if (navigator.vibrate) navigator.vibrate(16);
  openingStage.classList.add("is-cutting");
  window.setTimeout(() => {
    openingStage.classList.add("is-opened");
    revealAssembly();
  }, 1450);
}

function revealAssembly() {
  if (!hasRenderedAssembly) {
    renderReferenceCards();
    renderIngredientOrbit();
    hasRenderedAssembly = true;
  }
  assembly.hidden = false;
  assembly.classList.add("is-visible");
  window.setTimeout(() => {
    openingStage.hidden = true;
    assembly.scrollIntoView({ block: "start", behavior: "smooth" });
  }, 260);
  resetMaking(false);
}

function renderReferenceCards() {
  referenceGrid.innerHTML = "";
  officialProfiles.forEach((sandwich) => {
    const card = document.createElement("article");
    card.className = "reference-card";
    card.innerHTML = `
      <img src="${sandwich.thumb}" alt="${sandwich.name}" loading="lazy" onerror="this.onerror=null; this.src='${sandwich.image}';" />
      <strong>${sandwich.name}</strong>
      <span>${sandwich.core.slice(0, 3).join(" / ")}</span>
      <em>${sandwich.label}</em>
    `;
    referenceGrid.appendChild(card);
  });
}

function getMenuRecommendations() {
  if (lastHiddenResult) {
    return ["little-red", "hunter", "wolf-grandma"].map((id) => officialProfiles.find((item) => item.id === id)).filter(Boolean);
  }
  if (lastResultScores.length) return lastResultScores.slice(0, 3).map((item) => officialProfiles.find((profile) => profile.id === item.id) || item);
  return officialProfiles.slice(0, 3);
}

function menuItemTemplate(item, isRecommended = false) {
  const profile = officialProfiles.find((candidate) => candidate.id === item.id);
  const image = profile ? (profile.thumb || profile.image) : "assets/sandwiches/little-red.jpg";
  const recommendBadge = isRecommended ? "<b>根据你的结果推荐</b>" : "";
  return `
    <article class="live-menu-item ${isRecommended ? "is-recommended" : ""}">
      <img src="${image}" alt="${item.name}" loading="lazy" onerror="this.onerror=null; this.src='assets/sandwiches/little-red.jpg';" />
      <strong>${item.name}</strong>
      <span>${item.core}</span>
      <small>${item.desc}</small>
      ${recommendBadge}
      <em class="live-menu-price">${item.price}</em>
      <i>真实供应请以福里当日菜单为准。</i>
    </article>
  `;
}
function renderMenuCards() {
  const recommendedIds = new Set(getMenuRecommendations().map((item) => item.id));
  const menuItems = liveMenuData.sandwiches.map((item) => menuItemTemplate(item, recommendedIds.has(item.id))).join("");
  const recommendedNames = liveMenuData.sandwiches.filter((item) => recommendedIds.has(item.id)).map((item) => item.name).join(" / ");
  liveMenuGrid.innerHTML = `
    <section class="menu-match-note">
      <p>根据你的搭配，福里真实菜单里可以先看看：</p>
      <strong>${recommendedNames || "小红帽 / 猎人 / 狼外婆"}</strong>
    </section>
    <section class="live-menu-column is-sandwich-only">
      <h3>小红帽系列</h3>
      ${menuItems}
    </section>
  `;
  hasRenderedMenu = true;
}

function renderIngredientOrbit() {
  ingredientOrbit.innerHTML = "";
  ingredientPool.forEach((step, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `process-ingredient pos-${index}`;
    button.style.setProperty("--tilt", `${randomBetween(-4, 4).toFixed(2)}deg`);
    button.dataset.id = step.id;
    button.innerHTML = `<img src="${step.image}" alt="${step.name}" loading="eager" onerror="this.onerror=null; this.src='${step.fallback}';" /><span>${step.name}</span>`;
    button.addEventListener("click", () => addIngredient(button, step));
    ingredientOrbit.appendChild(button);
  });
}

function addIngredient(button, step) {
  if (closingStarted) return;
  if (selectedIngredients.length >= MAX_CHOICES) {
    showToast("已经够香了，盖上面包看看结果。");
    return;
  }
  const nextRepeatCount = (ingredientCounts[step.id] || 0) + 1;
  const repeatMessage = getRepeatMessage(step, nextRepeatCount);
  getAudioContext();
  playSound("tap");
  pulse(button);
  button.classList.add("is-taking");
  if (nextRepeatCount > 1) {
    showFlavorFloat(repeatMessage);
    if (navigator.vibrate) navigator.vibrate(10);
  }
  const nextIndex = selectedIngredients.length + 1;
  const motion = getLayerMotion(step, nextIndex);
  if (nextRepeatCount > 1) {
    const boost = Math.min(0.18, (nextRepeatCount - 1) * 0.055);
    motion.scale = motion.scale + boost;
    motion.x += randomBetween(-6, 6);
    motion.y += randomBetween(-5, 5);
    motion.rotate += randomBetween(-5, 5);
    motion.startRotate += randomBetween(-6, 6);
  }
  flyToPlate(button, step, motion, () => {
    selectedIngredients.push(step);
    ingredientCounts[step.id] = nextRepeatCount;
    button.classList.remove("is-taking");
    button.classList.add("is-added");
    updateIngredientCountBadge(button, nextRepeatCount);
    productionStage.classList.add(`has-${step.id}`);
    productionStage.style.setProperty("--stack-lift", `${Math.min(selectedIngredients.length, MAX_CHOICES) * -1}px`);
    addProcessLayer(step, selectedIngredients.length, motion);
    updateMakingCopy(step, repeatMessage);
    bouncePlate();
    playSound(step.id === "parmesan" ? "ding" : "drop");
  });
}

function updateMakingCopy(step, customHint) {
  const count = selectedIngredients.length;
  const lead = `已加入 ${count} / ${MAX_CHOICES} 个食材。`;
  if (count < MAX_CHOICES) {
    assemblyHint.textContent = `${lead} 再加一点，看看你像哪款小红帽。`;
    plateHint.textContent = customHint || (step ? step.note : "点周围食材，随手搭一份。");
    closeButton.hidden = true;
    return;
  }
  assemblyHint.textContent = `${lead} 盖上面包，看看结果。`;
  plateHint.textContent = customHint || "这一份内容够了，盖上面包吧。";
  closeButton.hidden = false;
}

function pulse(button) {
  button.classList.remove("is-tapped");
  void button.offsetWidth;
  button.classList.add("is-tapped");
}

function flyToPlate(button, step, motion, done) {
  const from = button.getBoundingClientRect();
  const to = plateZone.getBoundingClientRect();
  const targetX = to.left + to.width * 0.5 + motion.x;
  const targetY = to.top + to.height * 0.48 + motion.y;
  const startX = from.left + from.width / 2;
  const startY = from.top + from.height / 2;
  const fly = document.createElement("div");
  fly.className = "fly-piece";
  fly.innerHTML = `<img src="${step.image}" alt="${step.name}" onerror="this.onerror=null; this.src='${step.fallback}';" />`;
  fly.style.left = `${from.left}px`;
  fly.style.top = `${from.top}px`;
  fly.style.width = `${from.width}px`;
  fly.style.height = `${from.height}px`;
  document.body.appendChild(fly);
  const deltaX = targetX - startX;
  const deltaY = targetY - startY;
  const arcY = deltaY * 0.48 - 34;
  const endRotation = `${motion.rotate}deg`;
  if (fly.animate) {
    const animation = fly.animate([
      { transform: "translate3d(0,0,0) scale(1) rotate(0deg)", opacity: 1, offset: 0 },
      { transform: `translate3d(${deltaX * 0.52}px, ${arcY}px, 0) scale(${Math.min(1.08, 0.9 * motion.scale).toFixed(3)}) rotate(${motion.startRotate}deg)`, opacity: 0.96, offset: 0.58 },
      { transform: `translate3d(${deltaX}px, ${deltaY}px, 0) scale(${Math.min(0.72, 0.54 * motion.scale).toFixed(3)}) rotate(${endRotation})`, opacity: 0.18, offset: 1 }
    ], { duration: 430, easing: "cubic-bezier(0.18, 0.86, 0.22, 1)", fill: "forwards" });
    animation.onfinish = () => { fly.remove(); done(); };
    return;
  }
  requestAnimationFrame(() => {
    fly.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0) scale(${Math.min(0.72, 0.54 * motion.scale).toFixed(3)}) rotate(${endRotation})`;
    fly.style.opacity = "0.18";
  });
  window.setTimeout(() => { fly.remove(); done(); }, 430);
}

function addProcessLayer(step, layerIndex, motion = getLayerMotion(step, layerIndex)) {
  const layer = document.createElement("div");
  const { layout } = motion;
  layer.className = `process-layer layer-${step.id}`;
  layer.style.left = `calc(${layout.left}% + ${motion.x}px)`;
  layer.style.top = `calc(${layout.top}% + ${motion.y}px)`;
  layer.style.width = `${layout.width}%`;
  layer.style.height = `${layout.height}%`;
  layer.style.zIndex = String(layout.z + layerIndex);
  layer.style.setProperty("--land-drop", `${-24 - layerIndex * 1.5}px`);
  layer.style.setProperty("--land-bounce", "5px");
  layer.style.setProperty("--layer-rotate", `${motion.rotate}deg`);
  layer.style.setProperty("--layer-start-rotate", `${motion.startRotate}deg`);
  layer.style.setProperty("--layer-scale", motion.scale.toFixed(3));
  layer.style.setProperty("--layer-pop-scale", (motion.scale * 1.035).toFixed(3));
  if (["stracciatella", "stracciatella-real", "cheese-sauce", "creamy-cheese-sauce", "vodka-sauce"].includes(step.id)) {
    layer.innerHTML = `<span class="smear smear-cheese"></span>`;
  } else if (["pesto", "pesto-real", "cilantro-sauce"].includes(step.id)) {
    layer.innerHTML = `<span class="smear smear-pesto"></span>`;
  } else if (["balsamic", "balsamic-real"].includes(step.id)) {
    layer.innerHTML = `<span class="drizzle"></span><span class="drip d1"></span><span class="drip d2"></span>`;
  } else if (step.id === "parmesan") {
    layer.innerHTML = `<span class="flake f1"></span><span class="flake f2"></span><span class="flake f3"></span><span class="flake f4"></span><img src="${step.image}" alt="${step.name}" onerror="this.onerror=null; this.src='${step.fallback}';" />`;
  } else {
    layer.innerHTML = `<img src="${step.image}" alt="${step.name}" onerror="this.onerror=null; this.src='${step.fallback}';" />`;
  }
  processLayers.appendChild(layer);
  productionStage.classList.remove("is-stacking");
  void productionStage.offsetWidth;
  productionStage.classList.add("is-stacking");
}

function bouncePlate() {
  plateZone.classList.remove("is-popping");
  productionStage.classList.remove("is-settling");
  void plateZone.offsetWidth;
  plateZone.classList.add("is-popping");
  productionStage.classList.add("is-settling");
  window.setTimeout(() => productionStage.classList.remove("is-stacking", "is-settling"), 260);
}

function closeSandwich() {
  if (closingStarted) return;
  if (selectedIngredients.length < MAX_CHOICES) {
    showToast(`再点 ${MAX_CHOICES - selectedIngredients.length} 个食材，就能盖上面包。`);
    return;
  }
  closingStarted = true;
  closeButton.hidden = true;
  plateHint.textContent = "盖上面包，切成四份。";
  productionStage.classList.add("is-closing");
  playSound("drop");
  window.setTimeout(() => {
    productionStage.classList.add("is-closed", "is-pressing");
    plateHint.textContent = "切开看看今天像哪款。";
    playSound("cut");
    if (navigator.vibrate) navigator.vibrate(18);
    cutKnife.classList.add("is-cutting");
  }, 620);
  window.setTimeout(() => {
    productionStage.classList.remove("is-pressing");
    productionStage.classList.add("is-quartered");
    playSound("ding");
  }, 1400);
  window.setTimeout(renderResult, 2180);
}

function resetMaking(scrollToApp = true) {
  selectedIngredients = [];
  ingredientCounts = {};
  closingStarted = false;
  processLayers.innerHTML = "";
  productionStage.className = "open-sandwich";
  productionStage.style.removeProperty("--stack-lift");
  cutKnife.classList.remove("is-cutting");
  ingredientOrbit.querySelectorAll(".process-ingredient").forEach((button) => {
    button.classList.remove("is-added", "is-tapped", "is-taking");
    button.removeAttribute("data-count-label");
  });
  closeButton.hidden = true;
  plateHint.textContent = "点周围食材，随手搭一份。";
  assemblyHint.textContent = "随手点 5 个食材，看看你今天像哪款小红帽。";
  if (scrollToApp) {
    showScreen("app");
    openingStage.hidden = true;
    assembly.hidden = false;
    assembly.classList.add("is-visible");
    window.setTimeout(() => assembly.scrollIntoView({ block: "start", behavior: "smooth" }), 60);
  }
}

function scoreProfiles() {
  const rawScores = officialProfiles.map((profile) => {
    const raw = selectedIngredients.reduce((sum, ingredient) => sum + (getIngredientWeight(profile, ingredient)), 0);
    return { ...profile, raw };
  }).sort((a, b) => b.raw - a.raw);
  const topThree = rawScores.slice(0, 3);
  const total = topThree.reduce((sum, item) => sum + item.raw, 0) || 1;
  const percentages = topThree.map((item) => ({ ...item, percent: Math.max(1, Math.round((item.raw / total) * 100)) }));
  const tailSum = percentages.slice(1).reduce((sum, item) => sum + item.percent, 0);
  percentages[0].percent = Math.max(1, 100 - tailSum);
  return percentages;
}

function shouldShowHidden(scores) {
  const uniqueCount = new Set(selectedIngredients.map((item) => item.id)).size;
  const hasFullFlavor = ["beef", "stracciatella", "pesto", "arugula", "balsamic"].filter((id) => selectedIngredients.some((item) => item.id === id)).length >= 4;
  const closeRace = scores.length > 1 && Math.abs(scores[0].raw - scores[1].raw) < 0.58;
  return selectedIngredients.length === MAX_CHOICES && uniqueCount >= 5 && hasFullFlavor && closeRace;
}

function renderScoreList(scores, isHidden) {
  let list = document.querySelector("#scoreList");
  if (!list) {
    list = document.createElement("div");
    list.id = "scoreList";
    list.className = "score-list";
    matchLine.insertAdjacentElement("afterend", list);
  }
  list.innerHTML = scores.map((item, index) => `
    <div class="score-row ${index === 0 && !isHidden ? "is-top" : ""}">
      <span>${item.percent}% ${item.name}</span>
      <i style="width:${item.percent}%"></i>
    </div>
  `).join("");
}

function renderResult() {
  const scores = scoreProfiles();
  const hidden = shouldShowHidden(scores);
  lastResultScores = scores;
  lastHiddenResult = hidden;
  const top = scores[0];
  const visualImage = hidden ? "assets/products/fuli-platter/fuli-platter.png" : top.image;
  const visualAlt = hidden ? "福气满满拼盘" : top.name;
  resultVisual.innerHTML = `<img src="${visualImage}" alt="${visualAlt}" onerror="this.onerror=null; this.src='assets/sandwiches/little-red.jpg';" />`;
  resultBg.src = visualImage;
  resultKicker.textContent = hidden ? "当你的搭配太有内容，可能会召唤隐藏结果。" : "你随手搭出了一份今日口味。";
  if (hidden) {
    resultName.textContent = "你搭出了：福气满满拼盘";
    matchLine.textContent = "这份福气有点满，不是标准答案，但很像福里会端出来的一盘热闹。";
  } else {
    resultName.textContent = `你这份最像：${top.name}`;
    matchLine.textContent = top.copy;
  }
  renderScoreList(scores, hidden);
  offlineNote.innerHTML = "想吃真实小红帽？<br />来福里看看今日菜单。<br />真实供应请以福里当日菜单为准。";
  playSound("paper");
  showScreen("result");
}

function openMenuSheet() {
  renderMenuCards();
  menuSheet.classList.add("is-open");
  menuSheet.setAttribute("aria-hidden", "false");
}

function closeMenuSheet() {
  menuSheet.classList.remove("is-open");
  menuSheet.setAttribute("aria-hidden", "true");
}

function openTicketSheet(dataUrl) {
  ticketPreview.src = dataUrl;
  ticketSheet.classList.add("is-open");
  ticketSheet.setAttribute("aria-hidden", "false");
}

function closeTicketSheet() {
  ticketSheet.classList.remove("is-open");
  ticketSheet.setAttribute("aria-hidden", "true");
}

function openMiniSheet() {
  miniSheet.classList.add("is-open");
  miniSheet.setAttribute("aria-hidden", "false");
}

function closeMiniSheet() {
  miniSheet.classList.remove("is-open");
  miniSheet.setAttribute("aria-hidden", "true");
}

async function copyMiniProgramName() {
  try {
    if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error("clipboard unavailable");
    await navigator.clipboard.writeText(miniProgramName);
    showToast(`已复制：${miniProgramName}`);
  } catch (error) {
    showToast(`可以手动复制：${miniProgramName}`);
  }
}

function loadImageForCanvas(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

function roundedRect(context, x, y, width, height, radius) {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.arcTo(x + width, y, x + width, y + height, radius);
  context.arcTo(x + width, y + height, x, y + height, radius);
  context.arcTo(x, y + height, x, y, radius);
  context.arcTo(x, y, x + width, y, radius);
  context.closePath();
}

function drawWrappedText(context, text, x, y, maxWidth, lineHeight, maxLines = 3) {
  const chars = Array.from(text);
  let line = "";
  let lines = [];
  chars.forEach((char) => {
    const test = line + char;
    if (context.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = char;
    } else {
      line = test;
    }
  });
  if (line) lines.push(line);
  lines.slice(0, maxLines).forEach((item, index) => context.fillText(item, x, y + index * lineHeight));
  return Math.min(lines.length, maxLines) * lineHeight;
}

async function saveResultTicket() {
  try {
    const canvas = document.createElement("canvas");
    const width = 900;
    const height = 1320;
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    const scores = lastResultScores.length ? lastResultScores : scoreProfiles();
    const resultTitle = resultName.textContent || "你的福气三明治";
    const resultText = matchLine.textContent || "这份福气很有内容。";
    const imageElement = resultVisual.querySelector("img");
    const heroSrc = imageElement ? imageElement.getAttribute("src") : "assets/sandwiches/little-red.jpg";
    context.fillStyle = "#f7eddf";
    context.fillRect(0, 0, width, height);
    context.fillStyle = "#fff9ed";
    roundedRect(context, 56, 54, width - 112, height - 108, 28);
    context.fill();
    context.strokeStyle = "#cbb796";
    context.lineWidth = 3;
    context.stroke();
    context.fillStyle = "#b83228";
    context.font = "700 28px Arial, sans-serif";
    context.textAlign = "center";
    context.fillText("FULI LUCKY SANDWICH", width / 2, 112);
    context.fillStyle = "#2f281f";
    context.font = "700 48px serif";
    context.fillText("我的福气结果卡", width / 2, 178);
    try {
      const hero = await loadImageForCanvas(heroSrc);
      roundedRect(context, 118, 220, width - 236, 360, 18);
      context.save();
      context.clip();
      const ratio = Math.max((width - 236) / hero.width, 360 / hero.height);
      const drawWidth = hero.width * ratio;
      const drawHeight = hero.height * ratio;
      context.drawImage(hero, 118 + (width - 236 - drawWidth) / 2, 220 + (360 - drawHeight) / 2, drawWidth, drawHeight);
      context.restore();
    } catch (error) {
      context.fillStyle = "#ead8bd";
      roundedRect(context, 118, 220, width - 236, 360, 18);
      context.fill();
      context.fillStyle = "#71665c";
      context.font = "28px serif";
      context.fillText("福气三明治", width / 2, 410);
    }
    context.textAlign = "left";
    context.fillStyle = "#2f281f";
    context.font = "700 40px serif";
    context.fillText(resultTitle, 118, 650);
    context.fillStyle = "#71665c";
    context.font = "28px serif";
    drawWrappedText(context, resultText, 118, 704, width - 236, 42, 3);
    let y = 850;
    context.font = "700 26px Arial, sans-serif";
    context.fillStyle = "#2f281f";
    context.fillText("福气相似度", 118, y);
    y += 34;
    scores.slice(0, 3).forEach((item) => {
      context.fillStyle = "#3f3226";
      context.font = "26px Arial, sans-serif";
      context.fillText(`${item.percent}% ${item.name}`, 118, y);
      context.fillStyle = "#ead8bd";
      roundedRect(context, 118, y + 14, width - 236, 22, 11);
      context.fill();
      context.fillStyle = item === scores[0] ? "#b83228" : "#cbb796";
      roundedRect(context, 118, y + 14, Math.max(24, (width - 236) * item.percent / 100), 22, 11);
      context.fill();
      y += 76;
    });
    context.fillStyle = "#fff6e7";
    roundedRect(context, 118, 1110, width - 236, 116, 18);
    context.fill();
    context.fillStyle = "#b83228";
    context.font = "700 28px Arial, sans-serif";
    context.textAlign = "center";
    context.fillText("想吃真实小红帽？", width / 2, 1154);
    context.fillStyle = "#3f3226";
    context.font = "26px serif";
    context.fillText("打开微信搜索：Fulleee福里农舍", width / 2, 1196);
    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "fuli-lucky-sandwich-ticket.png";
    if ("download" in link) {
      document.body.appendChild(link);
      link.click();
      link.remove();
      showToast("已生成福气结果卡。如果没有自动保存，可以长按图片保存。");
    } else {
      openTicketSheet(dataUrl);
    }
    if (/MicroMessenger|Mobile/i.test(navigator.userAgent)) openTicketSheet(dataUrl);
  } catch (error) {
    showToast("生成结果卡失败，请稍后再试。");
  }
}
function showMiniProgramPrompt() {
  openMiniSheet();
}

function showMenu() {
  openMenuSheet();
}

document.querySelectorAll("[data-cut-bread]").forEach((button) => button.addEventListener("click", startCut));
closeButton.addEventListener("click", closeSandwich);
soundToggle.addEventListener("click", () => setSoundEnabled(!soundEnabled));
document.querySelectorAll("[data-reset]").forEach((button) => button.addEventListener("click", () => resetMaking(true)));
document.querySelector("[data-see-menu]").addEventListener("click", openMenuSheet);
document.querySelectorAll("[data-close-menu]").forEach((button) => button.addEventListener("click", closeMenuSheet));
document.querySelectorAll("[data-close-ticket]").forEach((button) => button.addEventListener("click", closeTicketSheet));
document.querySelectorAll("[data-open-mini]").forEach((button) => button.addEventListener("click", openMiniSheet));
document.querySelectorAll("[data-close-mini]").forEach((button) => button.addEventListener("click", closeMiniSheet));
document.querySelector("[data-mini-copy]").addEventListener("click", copyMiniProgramName);
document.querySelector("[data-menu-back-result]").addEventListener("click", closeMenuSheet);
document.querySelector("[data-save-ticket]").addEventListener("click", saveResultTicket);
document.querySelector("[data-order]").addEventListener("click", showMiniProgramPrompt);

showScreen("app");