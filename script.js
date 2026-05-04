const products = [
  {
    id: "hakutsuru-tenku-mitose",
    name: "超特撰 白鶴 天空 袋吊り 純米大吟醸 みとせ",
    category: "日本酒",
    region: "兵庫",
    grape: "山田錦",
    price: 29700,
    rating: 4.9,
    badge: "限定",
    color: "#6d8aa0",
    image: "https://www.hakutsuru.co.jp/product/product_file/file/06476_2021.jpg",
    sourceUrl: "https://www.hakutsuru.co.jp/product/sake/tenku/06476.html",
    description: "3年間氷冷貯蔵した数量限定酒。まろやかでふくらみのある味わい。"
  },
  {
    id: "hakutsuru-tenku-awane",
    name: "超特撰 白鶴 天空 瓶内発酵 純米大吟醸 あわね",
    category: "スパークリング日本酒",
    region: "兵庫",
    grape: "白鶴錦",
    price: 41800,
    rating: 4.9,
    badge: "泡",
    color: "#c7a451",
    image: "https://www.hakutsuru.co.jp/product/product_file/file/07072.jpg",
    sourceUrl: "https://www.hakutsuru.co.jp/product/sake/tenku/07072.html",
    description: "瓶内発酵の最高級スパークリング日本酒。白桃やマスカットを思わせる香り。"
  },
  {
    id: "opus-one-2019",
    name: "Opus One 2019",
    category: "海外ワイン",
    region: "アメリカ / ナパ・ヴァレー",
    grape: "ボルドーブレンド",
    price: 98000,
    rating: 4.9,
    badge: "Napa",
    color: "#5b1826",
    image: "https://www.opusonewinery.com/wp-content/uploads/2022/09/Opus-One-2019.jpg",
    sourceUrl: "https://www.opusonewinery.com/products/opus-one-2019/",
    description: "黒系果実、ドライローズ、カカオの余韻。特別な食卓向けの海外プレミアムワイン。"
  },
  {
    id: "dom-perignon-2015",
    name: "Dom Pérignon Vintage 2015",
    category: "シャンパン",
    region: "フランス / シャンパーニュ",
    grape: "ピノ・ノワール / シャルドネ",
    price: 40000,
    rating: 4.9,
    badge: "Vintage",
    color: "#2f3b28",
    image: "https://images.selfridges.com/is/image/selfridges/R04369157_M?dpr=on%2C2",
    sourceUrl: "https://www.selfridges.com/JP/en/product/dom-perignon-dom-prignon-vintage-blanc-champagne-2015-750ml_R04369156/",
    description: "ヴィンテージ表記の高級シャンパン。ギフトや記念日の乾杯に。"
  },
  {
    id: "yamazaki-12",
    name: "サントリー シングルモルト 山崎12年",
    category: "ウイスキー",
    region: "日本",
    grape: "モルト",
    price: 25800,
    rating: 4.9,
    badge: "12年",
    color: "#8b5a2b",
    image: "https://www.suntory.co.jp/whisky/yamazaki/img/product/item2_l.png",
    sourceUrl: "https://www.suntory.co.jp/whisky/yamazaki/product/",
    description: "熟した果実、バニラ、樽香の余韻。ギフトにも選ばれるシングルモルト。"
  },
  {
    id: "yamazaki-18",
    name: "サントリー シングルモルト 山崎18年",
    category: "ウイスキー",
    region: "日本",
    grape: "モルト",
    price: 165000,
    rating: 5.0,
    badge: "18年",
    color: "#8b5a2b",
    image: "https://www.suntory.co.jp/whisky/yamazaki/img/product/item3_l.png",
    sourceUrl: "https://www.suntory.co.jp/whisky/yamazaki/product/",
    description: "スパニッシュオーク樽熟成由来のドライフルーツやチョコレートの香り。"
  },
  {
    id: "yamazaki-25",
    name: "サントリー シングルモルト 山崎25年",
    category: "ウイスキー",
    region: "日本",
    grape: "モルト",
    price: 880000,
    rating: 5.0,
    badge: "25年",
    color: "#5a2f18",
    image: "https://www.suntory.co.jp/whisky/yamazaki/img/product/item4_l.png",
    sourceUrl: "https://www.suntory.co.jp/whisky/yamazaki/product/",
    description: "長期熟成原酒を厳選した希少品。高貴な木香と深い余韻を楽しむ一本。"
  },
  {
    id: "premium-gift",
    name: "山崎12年・天空みとせ プレミアムギフト",
    category: "ギフト",
    region: "日本",
    grape: "ウイスキー / 日本酒",
    price: 59800,
    rating: 4.8,
    badge: "贈答",
    color: "#7a1f33",
    image: "https://www.suntory.co.jp/whisky/yamazaki/img/product/item2_l.png",
    sourceUrl: "https://www.suntory.co.jp/whisky/yamazaki/product/",
    description: "高価格帯ギフト想定。熨斗・包装、メッセージカード、温度管理配送に対応。"
  }
];

const MINIMUM_PRODUCT_PRICE = 20000;
const categories = ["すべて", ...new Set(products.map((product) => product.category))];
const paymentMethods = {
  card: {
    tag: "即時決済",
    button: "カードで購入手続きへ",
    note: "カード決済は注文完了時に与信を行い、出荷準備時に売上確定する想定です。",
    toast: "カード決済画面へ進む想定です"
  },
  paypay: {
    tag: "QR決済",
    button: "PayPayで購入手続きへ",
    note: "PayPayはスマホアプリまたはPC画面のQRコードで支払う想定です。定期便にはカード決済を使います。",
    toast: "PayPay決済画面へ進む想定です"
  },
  konbini: {
    tag: "前払い",
    button: "コンビニ前払いで注文する",
    note: "コンビニ前払いは入金確認後に出荷します。支払期限切れの場合は注文と在庫確保を解除する想定です。",
    toast: "コンビニ支払い案内を発行する想定です"
  }
};
const state = {
  category: "すべて",
  query: "",
  sort: "recommended",
  paymentMethod: "card",
  cart: new Map()
};

const formatter = new Intl.NumberFormat("ja-JP", {
  style: "currency",
  currency: "JPY",
  maximumFractionDigits: 0
});

const productGrid = document.querySelector("#productGrid");
const resultCount = document.querySelector("#resultCount");
const categoryFilters = document.querySelector("#categoryFilters");
const searchInput = document.querySelector("#searchInput");
const sortSelect = document.querySelector("#sortSelect");
const cartPanel = document.querySelector("#cartPanel");
const cartToggle = document.querySelector("#cartToggle");
const cartClose = document.querySelector("#cartClose");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("#cartCount");
const productSubtotalElement = document.querySelector("#productSubtotal");
const deliveryFeeElement = document.querySelector("#deliveryFee");
const cartSubtotal = document.querySelector("#cartSubtotal");
const coolDelivery = document.querySelector("#coolDelivery");
const paymentMethodsElement = document.querySelector("#paymentMethods");
const paymentTag = document.querySelector("#paymentTag");
const paymentNote = document.querySelector("#paymentNote");
const checkoutButton = document.querySelector("#checkoutButton");
const toast = document.querySelector("#toast");
const ageGate = document.querySelector("#ageGate");
const confirmAge = document.querySelector("#confirmAge");
const denyAge = document.querySelector("#denyAge");

function init() {
  renderCategoryFilters();
  renderProducts();
  renderCart();
  renderPayment();

  const ageConfirmed = localStorage.getItem("cave-aoi-age-confirmed") === "true";
  ageGate.classList.toggle("is-hidden", ageConfirmed);
  document.body.classList.toggle("no-scroll", !ageConfirmed);
}

function renderCategoryFilters() {
  categoryFilters.innerHTML = categories
    .map(
      (category) => `
        <button
          class="segment-button ${category === state.category ? "is-active" : ""}"
          type="button"
          data-category="${category}"
          aria-pressed="${category === state.category}"
        >
          ${category}
        </button>
      `
    )
    .join("");
}

function getFilteredProducts() {
  const query = state.query.trim().toLowerCase();
  const filtered = products.filter((product) => {
    const matchesCategory = state.category === "すべて" || product.category === state.category;
    const searchTarget = `${product.name} ${product.category} ${product.region} ${product.grape} ${product.description}`.toLowerCase();
    return product.price >= MINIMUM_PRODUCT_PRICE && matchesCategory && searchTarget.includes(query);
  });

  return filtered.sort((a, b) => {
    if (state.sort === "priceAsc") return a.price - b.price;
    if (state.sort === "priceDesc") return b.price - a.price;
    if (state.sort === "rating") return b.rating - a.rating;
    return b.rating * 100 - b.price / 100 - (a.rating * 100 - a.price / 100);
  });
}

function renderProducts() {
  const visibleProducts = getFilteredProducts();
  resultCount.textContent = `${visibleProducts.length}件`;

  if (visibleProducts.length === 0) {
    productGrid.innerHTML = `<p class="empty-state">条件に合う商品がありません。</p>`;
    return;
  }

  productGrid.innerHTML = visibleProducts
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-visual ${product.image ? "has-image" : ""}">
            <span class="product-badge">${product.badge}</span>
            ${
              product.image
                ? `<img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.parentElement.classList.remove('has-image'); this.remove();">`
                : ""
            }
            <span class="bottle" style="--bottle: ${product.color}"></span>
          </div>
          <div class="product-body">
            <div class="product-meta">
              <span>${product.category}</span>
              <span>${product.region}</span>
              <span>★ ${product.rating}</span>
            </div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <a class="product-source" href="${product.sourceUrl}" target="_blank" rel="noreferrer">公式情報</a>
            <div class="price-row">
              <strong>${formatter.format(product.price)}</strong>
              <button class="add-button" type="button" data-add="${product.id}">追加</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function addToCart(productId) {
  const current = state.cart.get(productId) || 0;
  state.cart.set(productId, current + 1);
  renderCart();
  showToast("カートに追加しました");
}

function updateQuantity(productId, delta) {
  const nextQuantity = (state.cart.get(productId) || 0) + delta;
  if (nextQuantity <= 0) {
    state.cart.delete(productId);
  } else {
    state.cart.set(productId, nextQuantity);
  }
  renderCart();
}

function renderCart() {
  const entries = [...state.cart.entries()];
  const totalQuantity = entries.reduce((sum, [, quantity]) => sum + quantity, 0);
  const productTotal = entries.reduce((sum, [id, quantity]) => {
    const product = products.find((item) => item.id === id);
    return sum + product.price * quantity;
  }, 0);
  const deliveryTotal = coolDelivery.checked && productTotal > 0 ? 880 : 0;
  const total = productTotal + deliveryTotal;

  cartCount.textContent = totalQuantity;
  productSubtotalElement.textContent = formatter.format(productTotal);
  deliveryFeeElement.textContent = formatter.format(deliveryTotal);
  cartSubtotal.textContent = formatter.format(total);

  if (entries.length === 0) {
    cartItems.innerHTML = `<p class="empty-state">まだ商品が入っていません。</p>`;
    return;
  }

  cartItems.innerHTML = entries
    .map(([id, quantity]) => {
      const product = products.find((item) => item.id === id);
      return `
        <article class="cart-item">
          <div>
            <h3>${product.name}</h3>
            <p>${formatter.format(product.price)} / ${product.category}</p>
          </div>
          <div class="quantity-controls" aria-label="${product.name}の数量">
            <button type="button" data-quantity="${product.id}" data-delta="-1">−</button>
            <strong>${quantity}</strong>
            <button type="button" data-quantity="${product.id}" data-delta="1">＋</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderPayment() {
  const method = paymentMethods[state.paymentMethod];
  paymentTag.textContent = method.tag;
  paymentNote.textContent = method.note;
  checkoutButton.textContent = method.button;

  document.querySelectorAll(".payment-method").forEach((label) => {
    const input = label.querySelector("input");
    const isSelected = input.value === state.paymentMethod;
    label.classList.toggle("is-selected", isSelected);
    input.checked = isSelected;
  });
}

function openCart() {
  cartPanel.classList.add("is-open");
  cartPanel.setAttribute("aria-hidden", "false");
}

function closeCart() {
  cartPanel.classList.remove("is-open");
  cartPanel.setAttribute("aria-hidden", "true");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 1800);
}

categoryFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  renderCategoryFilters();
  renderProducts();
});

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (!button) return;
  addToCart(button.dataset.add);
  openCart();
});

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-quantity]");
  if (!button) return;
  updateQuantity(button.dataset.quantity, Number(button.dataset.delta));
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderProducts();
});

sortSelect.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderProducts();
});

cartToggle.addEventListener("click", openCart);
cartClose.addEventListener("click", closeCart);
coolDelivery.addEventListener("change", renderCart);

paymentMethodsElement.addEventListener("change", (event) => {
  if (event.target.name !== "paymentMethod") return;
  state.paymentMethod = event.target.value;
  renderPayment();
});

checkoutButton.addEventListener("click", () => {
  if (state.cart.size === 0) {
    showToast("商品を追加してください");
    return;
  }
  showToast(paymentMethods[state.paymentMethod].toast);
});

confirmAge.addEventListener("click", () => {
  localStorage.setItem("cave-aoi-age-confirmed", "true");
  ageGate.classList.add("is-hidden");
  document.body.classList.remove("no-scroll");
});

denyAge.addEventListener("click", () => {
  window.location.href = "https://www.google.com/";
});

init();
