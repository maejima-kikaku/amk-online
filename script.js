const products = [
  {
    id: "opus-one-2019",
    name: "Opus One 2019",
    category: "赤ワイン",
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
    id: "chateau-margaux-2015",
    name: "Château Margaux 2015",
    category: "赤ワイン",
    region: "フランス / ボルドー・マルゴー",
    grape: "カベルネ・ソーヴィニヨン主体",
    price: 260000,
    rating: 5.0,
    badge: "1級",
    color: "#4d1720",
    image: "https://www.wine.com/product/images/w_600,h_600,c_fit,q_auto:good,fl_progressive/153459.jpg",
    sourceUrl: "https://www.chateau-margaux.com/en/actualites/2017/chateau-margaux-2015-un-millesime-dexception-2",
    description: "ボルドー格付け第1級の象徴的ヴィンテージ。熟成向けの贈答・セラー保管提案に。"
  },
  {
    id: "sassicaia-2020",
    name: "Tenuta San Guido Sassicaia 2020",
    category: "赤ワイン",
    region: "イタリア / トスカーナ・ボルゲリ",
    grape: "ボルドーブレンド",
    price: 52000,
    rating: 4.8,
    badge: "Super Tuscan",
    color: "#6b1f2b",
    image: "https://www.wine.com/product/images/w_600,h_600,c_fit,q_auto:good,fl_progressive/1299329.jpg",
    sourceUrl: "https://www.tenutasanguido.com/en/sassicaia/",
    description: "スーパータスカンを代表する一本。力強さと上品さを兼ね備えたディナー向け赤ワイン。"
  },
  {
    id: "gaja-barbaresco-2020",
    name: "Gaja Barbaresco 2020",
    category: "赤ワイン",
    region: "イタリア / ピエモンテ・バルバレスコ",
    grape: "ネッビオーロ",
    price: 68000,
    rating: 4.9,
    badge: "Piedmont",
    color: "#7a2330",
    image: "https://www.wine.com/product/images/w_600,h_600,c_fit,q_auto:good,fl_progressive/1083501.jpg",
    sourceUrl: "https://www.gaja.com/en/wines/barbaresco/barbaresco",
    description: "ネッビオーロの華やかな香りと繊細なタンニン。上質な肉料理や熟成チーズに。"
  },
  {
    id: "krug-grande-cuvee",
    name: "Krug Grande Cuvée",
    category: "シャンパン",
    region: "フランス / シャンパーニュ",
    grape: "ピノ・ノワール / シャルドネ / ムニエ",
    price: 43000,
    rating: 4.9,
    badge: "泡",
    color: "#b98b2f",
    image: "https://www.wine.com/product/images/w_600,h_600,c_fit,q_auto:good,fl_progressive/291160.jpg",
    sourceUrl: "https://www.krug.com/champagne/grande-cuvee",
    description: "複数年のリザーヴワインを重ねた奥行き。アペリティフから食中まで使える泡。"
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
    sourceUrl: "https://www.domperignon.com/",
    description: "ヴィンテージ表記の高級シャンパン。ギフトや記念日の乾杯に。"
  },
  {
    id: "chateau-dyquem-2016",
    name: "Château d'Yquem 2016",
    category: "白ワイン",
    region: "フランス / ソーテルヌ",
    grape: "セミヨン / ソーヴィニヨン・ブラン",
    price: 72000,
    rating: 4.9,
    badge: "甘口",
    color: "#c49a37",
    image: "https://www.wine.com/product/images/w_600,h_600,c_fit,q_auto:good,fl_progressive/591628.jpg",
    sourceUrl: "https://yquem.fr/int-en/",
    description: "世界的に名高い貴腐ワイン。デザート、ブルーチーズ、特別なギフトに合わせたい一本。"
  },
  {
    id: "premium-wine-gift",
    name: "プレミアムワイン2本ギフト",
    category: "ギフト",
    region: "フランス / イタリア",
    grape: "赤ワイン / シャンパン",
    price: 88000,
    rating: 4.8,
    badge: "贈答",
    color: "#7a1f33",
    image: "https://images.unsplash.com/photo-1606767208159-7f9ab8ca8a0f?auto=format&fit=crop&w=900&q=80",
    sourceUrl: "#products",
    description: "赤ワインとシャンパンを組み合わせたギフト提案。熨斗・包装、メッセージカードに対応。"
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
