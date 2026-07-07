window.FULI_CATEGORIES = Object.freeze([
  { id: "protein", name: "主料", limit: 1, required: true },
  { id: "vegetable", name: "蔬菜 / 叶菜", limit: 1, required: true },
  { id: "cheese", name: "奶酪", limit: 1, required: true },
  { id: "sauce", name: "酱料", limit: 2, required: true },
  { id: "accent", name: "风味点缀", limit: 1, required: false }
]);

window.FULI_INGREDIENTS = Object.freeze([
  { id: "beef", name: "低温慢煮牛肉", category: "protein", image: "assets/ingredients/thumbs/beef.webp", thumb: "assets/ingredients/thumbs/beef.webp", tags: ["beef", "meat", "protein"], relatedSandwichIds: ["little-red", "wolf-grandma", "ferdinand", "chief"] },
  { id: "arugula", name: "芝麻菜", category: "vegetable", image: "assets/ingredients/thumbs/arugula.webp", thumb: "assets/ingredients/thumbs/arugula.webp", tags: ["arugula", "vegetable", "fresh"], relatedSandwichIds: ["little-red", "wolf-grandma", "hunter", "pasture"] },
  { id: "pepper", name: "南非甜辣椒", category: "vegetable", image: "assets/ingredients/thumbs/pepper.webp", thumb: "assets/ingredients/thumbs/pepper.webp", tags: ["pepper", "vegetable", "sweet"], relatedSandwichIds: ["little-red", "pasture"] },
  { id: "stracciatella", name: "斯塔塞特拉奶酪", category: "cheese", image: "assets/ingredients/thumbs/stracciatella.webp", thumb: "assets/ingredients/thumbs/stracciatella.webp", tags: ["cheese", "soft"], relatedSandwichIds: ["little-red", "wolf-grandma", "hunter", "chief", "pasture", "pistachio"] },
  { id: "parmesan", name: "帕马森芝士碎", category: "cheese", image: "assets/ingredients/thumbs/parmesan.webp", thumb: "assets/ingredients/thumbs/parmesan.webp", tags: ["cheese", "parmesan"], relatedSandwichIds: ["little-red", "ferdinand"] },
  { id: "pesto", name: "青酱", category: "sauce", image: "assets/ingredients/thumbs/pesto.webp", thumb: "assets/ingredients/thumbs/pesto.webp", tags: ["pesto", "sauce", "green"], relatedSandwichIds: ["little-red", "pasture"] },
  { id: "balsamic", name: "摩德纳黑醋", category: "sauce", image: "assets/ingredients/thumbs/balsamic.webp", thumb: "assets/ingredients/thumbs/balsamic.webp", tags: ["balsamic", "sauce", "acid"], relatedSandwichIds: ["little-red", "pasture"] },
  { id: "pepper-accent", name: "甜辣椒点缀", category: "accent", image: "assets/ingredients/thumbs/pepper.webp", thumb: "assets/ingredients/thumbs/pepper.webp", tags: ["pepper", "accent", "sweet"], relatedSandwichIds: ["little-red"] },
  { id: "parmesan-accent", name: "芝士碎点缀", category: "accent", image: "assets/ingredients/thumbs/parmesan.webp", thumb: "assets/ingredients/thumbs/parmesan.webp", tags: ["parmesan", "accent", "cheese"], relatedSandwichIds: ["little-red", "ferdinand"] }
]);

window.FULI_OFFICIAL_SANDWICHES = Object.freeze([
  {
    id: "little-red",
    name: "小红帽",
    englishName: "The Little Red",
    image: "assets/sandwiches/little-red.jpg",
    thumb: "assets/sandwiches/thumbs/little-red.webp",
    ingredients: ["佛卡夏面包", "斯塔塞特拉奶酪", "青酱", "低温慢煮牛肉", "芝麻菜", "帕马森芝士碎", "南非甜辣椒", "摩德纳黑醋"],
    tags: ["招牌", "第一次来", "小红帽系列"],
    matchTags: ["bread", "cheese", "soft", "pesto", "beef", "meat", "arugula", "vegetable", "parmesan", "pepper", "balsamic", "sauce"],
    description: "不知道吃什么就选它。",
    flavorLabel: "招牌 / 第一次来",
    availableNote: "在售 / 每日供应",
    isAvailable: true,
    isDailyAvailable: true
  },
  {
    id: "wolf-grandma",
    name: "狼外婆",
    englishName: "The Good Wolf",
    image: "assets/sandwiches/wolf-grandma.jpg",
    thumb: "assets/sandwiches/thumbs/wolf-grandma.webp",
    ingredients: ["佛卡夏面包", "斯塔塞特拉奶酪", "无酒精伏特加酱", "低温慢煮牛肉", "芝麻菜", "马苏里拉芝士片", "茶树菇"],
    tags: ["复杂风味", "升级版用餐体验"],
    matchTags: ["bread", "cheese", "soft", "beef", "meat", "arugula", "vegetable"],
    description: "茶树菇和马苏里拉拉丝，风味更复杂。",
    flavorLabel: "复杂风味 / 拉丝",
    availableNote: "在售 / 每日供应",
    isAvailable: true,
    isDailyAvailable: true
  },
  {
    id: "hunter",
    name: "猎人",
    englishName: "The Huntoman",
    image: "assets/sandwiches/hunter.jpg",
    thumb: "assets/sandwiches/thumbs/hunter.webp",
    ingredients: ["佛卡夏面包", "斯塔塞特拉奶酪", "黑松露酱", "意大利莫特苔拉香肠", "芝麻菜", "茶树菇"],
    tags: ["黑松露", "低脂高蛋白"],
    matchTags: ["bread", "cheese", "soft", "meat", "arugula", "vegetable"],
    description: "黑松露酱、莫特苔拉和茶树菇，把山林香气塞进佛卡夏。",
    flavorLabel: "黑松露 / 山林香气",
    availableNote: "在售 / 每日供应",
    isAvailable: true,
    isDailyAvailable: true
  },
  {
    id: "ferdinand",
    name: "公牛费迪",
    englishName: "Ferdinand The Bull",
    image: "assets/sandwiches/ferdinand.jpg",
    thumb: "assets/sandwiches/thumbs/ferdinand.webp",
    ingredients: ["佛卡夏面包", "低温水煮牛腩", "香菜酱", "芝士酱", "车达奶酪", "羽衣甘蓝"],
    tags: ["终极犒劳", "健身和补给", "肉食", "芝士"],
    matchTags: ["bread", "beef", "meat", "cheese", "pesto", "sauce", "vegetable"],
    description: "慢炖牛腩配香菜酱和双重奶酪，扎实又浓郁。",
    flavorLabel: "牛腩 / 双重奶酪",
    availableNote: "在售 / 每日供应",
    isAvailable: true,
    isDailyAvailable: true
  },
  {
    id: "chief",
    name: "村长",
    englishName: "The Godfather",
    image: "assets/sandwiches/chief.jpg",
    thumb: "assets/sandwiches/thumbs/chief.webp",
    ingredients: ["佛卡夏面包", "斯塔塞特拉奶酪", "意式撒料", "低温慢煮牛肉", "酸黄瓜"],
    tags: ["健身餐", "轻食日", "清爽"],
    matchTags: ["bread", "cheese", "soft", "beef", "meat", "vegetable"],
    description: "酸黄瓜清爽解腻。",
    flavorLabel: "清爽 / 酸黄瓜",
    availableNote: "在售 / 每日供应",
    isAvailable: true,
    isDailyAvailable: true
  },
  {
    id: "pasture",
    name: "牧场",
    englishName: "The Paoture",
    image: "assets/sandwiches/pasture.jpg",
    thumb: "assets/sandwiches/thumbs/pasture.webp",
    ingredients: ["佛卡夏面包", "斯塔塞特拉奶酪", "青酱", "草莓西红柿", "芝麻菜", "马苏里拉芝士片", "摩德纳黑醋", "意式撒料"],
    tags: ["全素", "果蔬", "清爽"],
    matchTags: ["bread", "cheese", "soft", "pesto", "arugula", "vegetable", "balsamic", "sauce"],
    description: "草莓西红柿、芝麻菜和奶酪，清爽但不寡淡。",
    flavorLabel: "果蔬 / 清爽",
    availableNote: "在售 / 每日供应",
    isAvailable: true,
    isDailyAvailable: true
  },
  {
    id: "pistachio",
    name: "开心果",
    englishName: "Nonna",
    image: "assets/sandwiches/pistachio.jpg",
    thumb: "assets/sandwiches/thumbs/pistachio.webp",
    ingredients: ["佛卡夏面包", "斯塔塞特拉奶酪", "开心果酱", "开心果碎", "意大利莫特苔拉香肠", "腌制小洋葱"],
    tags: ["高品质食材", "传统意大利", "坚果"],
    matchTags: ["bread", "cheese", "soft", "meat"],
    description: "开心果酱、开心果碎和莫特苔拉，咸香坚果味很足。",
    flavorLabel: "坚果 / 咸香",
    availableNote: "在售 / 每日供应",
    isAvailable: true,
    isDailyAvailable: true
  }
]);
