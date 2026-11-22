/**
 * Shopee Product Comparison - Interactive Controller (PRD + Skill)
 * Implements full state persistence, smart difference detection, best value tagging,
 * and Shopee UX Heuristics.
 */

// 1. Comprehensive Product Dataset (TWS Bluetooth Category)
const productsData = [
  {
    id: 1,
    name: "Baseus Bowie WM02 TWS Earphone Wireless Bluetooth 5.3 Low Latency 60ms",
    price: 189000,
    originalPrice: 350000,
    discount: "46%",
    shop: "Baseus Official Shop",
    shopType: "mall", // 'mall' or 'star'
    rating: 4.8,
    reviewsCount: "14.2rb",
    sold: "38.5rb",
    location: "Kota Jakarta Barat",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&auto=format&fit=crop&q=80",
    tags: ["Gratis Ongkir XTRA", "Cashback XTRA"],
    sentiments: ["Suara Jernih (94%)", "Bass Pas (88%)", "Baterai Awet (92%)"],
    specs: {
      battery: "25 Jam (Total)",
      bluetooth: "Bluetooth 5.3",
      driver: "10mm Dynamic PU",
      anc: "ENC AI Call Noise Reduction (Bukan ANC)",
      latency: "60ms Ultra Low Latency",
      waterproof: "IPX4 Tahan Percikan Keringat",
      warranty: "12 Bulan Resmi Baseus Indonesia",
      origin: "Dikirim dari Jakarta Barat",
      voucher: "Diskon 10rb Min. Belanja 150rb"
    }
  },
  {
    id: 2,
    name: "Soundcore by Anker R50i True Wireless Earbuds 10mm Driver Extra Bass IPX5",
    price: 199000,
    originalPrice: 399000,
    discount: "50%",
    shop: "Anker Official Mall",
    shopType: "mall",
    rating: 4.9,
    reviewsCount: "28.9rb",
    sold: "75.1rb",
    location: "Kota Jakarta Utara",
    image: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=400&auto=format&fit=crop&q=80",
    tags: ["Gratis Ongkir XTRA", "Shopee Pilihan"],
    sentiments: ["Bass Nendang (98%)", "App Soundcore Bagus (95%)", "Bahan Kokoh (91%)"],
    specs: {
      battery: "30 Jam (10 Jam Earbud + 20 Jam Case)",
      bluetooth: "Bluetooth 5.3",
      driver: "10mm Extra Bass Graphene",
      anc: "2-Mic AI ENC Clear Call",
      latency: "80ms Game Mode",
      waterproof: "IPX5 Tahan Semprotan Air",
      warranty: "18 Bulan Resmi Anker Indonesia (Ganti Baru)",
      origin: "Dikirim dari Jakarta Utara",
      voucher: "Diskon 15rb Min. Belanja 200rb"
    }
  },
  {
    id: 3,
    name: "Lenovo Thinkplus LP40 Pro TWS Wireless Earphone HiFi Stereo Touch Control",
    price: 99000,
    originalPrice: 249000,
    discount: "60%",
    shop: "Lenovo Audio Official Store",
    shopType: "star",
    rating: 4.6,
    reviewsCount: "62.4rb",
    sold: "120rb+",
    location: "Kota Tangerang",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&auto=format&fit=crop&q=80",
    tags: ["Gratis Ongkir", "Murah Lebay"],
    sentiments: ["Harga Murah Banget (96%)", "Kecil Ringan (90%)", "Suara Standar (78%)"],
    specs: {
      battery: "20 Jam (Total)",
      bluetooth: "Bluetooth 5.1",
      driver: "13mm Large Composite Diaphragm",
      anc: "Tidak Ada (Passive Only)",
      latency: "110ms Standar",
      waterproof: "IPX4 Tahan Percikan",
      warranty: "6 Bulan Garansi Toko/Distributor",
      origin: "Dikirim dari Tangerang",
      voucher: "Diskon 5rb Min. Belanja 90rb"
    }
  },
  {
    id: 4,
    name: "realme Buds T100 True Wireless Earbuds 88ms Super Low Latency AI ENC",
    price: 249000,
    originalPrice: 399000,
    discount: "38%",
    shop: "realme Official Store",
    shopType: "mall",
    rating: 4.8,
    reviewsCount: "9.8rb",
    sold: "22.3rb",
    location: "Kota Jakarta Pusat",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&auto=format&fit=crop&q=80",
    tags: ["Gratis Ongkir XTRA", "Cashback XTRA"],
    sentiments: ["Desain Keren Two-Tone (95%)", "Mic Telepon Jernih (91%)", "Koneksi Cepat (93%)"],
    specs: {
      battery: "28 Jam (Total)",
      bluetooth: "Bluetooth 5.3",
      driver: "10mm Dynamic Bass Driver",
      anc: "AI ENC Noise Cancellation for Calls",
      latency: "88ms Super Low Latency",
      waterproof: "IPX5 Tahan Keringat",
      warranty: "12 Bulan Resmi realme Service Center",
      origin: "Dikirim dari Jakarta Pusat",
      voucher: "Diskon 20rb Min. Belanja 250rb"
    }
  },
  {
    id: 5,
    name: "Xiaomi Redmi Buds 4 Active TWS Google Fast Pair 12mm Dynamic Driver",
    price: 199000,
    originalPrice: 299000,
    discount: "33%",
    shop: "Xiaomi Authorized Official",
    shopType: "mall",
    rating: 4.7,
    reviewsCount: "11.5rb",
    sold: "31.0rb",
    location: "Kota Jakarta Selatan",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=80",
    tags: ["Gratis Ongkir XTRA"],
    sentiments: ["Koneksi Google Fast Pair Cepat (96%)", "Fitting Nyaman (89%)", "Suara Vokal Jelas (87%)"],
    specs: {
      battery: "28 Jam (5 Jam Earbud + 23 Jam Case)",
      bluetooth: "Bluetooth 5.3",
      driver: "12mm Dynamic Driver",
      anc: "Noise Cancellation for Calls",
      latency: "90ms Low Latency",
      waterproof: "IPX4",
      warranty: "12 Bulan Resmi Xiaomi Indonesia",
      origin: "Dikirim dari Jakarta Selatan",
      voucher: "Diskon 10rb Min. Belanja 180rb"
    }
  },
  {
    id: 6,
    name: "Edifier X3s True Wireless Stereo Earbuds Qualcomm aptX Game Mode CVC 8.0",
    price: 329000,
    originalPrice: 599000,
    discount: "45%",
    shop: "Edifier Official Store",
    shopType: "mall",
    rating: 4.9,
    reviewsCount: "8.4rb",
    sold: "18.2rb",
    location: "Kota Jakarta Barat",
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&auto=format&fit=crop&q=80",
    tags: ["Gratis Ongkir XTRA", "Cashback XTRA"],
    sentiments: ["Kualitas Audio Audiophile (99%)", "aptX Mantap (97%)", "Kecil Pas di Telinga (93%)"],
    specs: {
      battery: "28 Jam (8 Jam Earbud + 20 Jam Case)",
      bluetooth: "Bluetooth 5.2 Qualcomm aptX",
      driver: "8mm Micro Dynamic Hi-Res",
      anc: "Qualcomm cVc 8.0 Dual Mic Clear Call",
      latency: "75ms Gaming Mode Khusus",
      waterproof: "IP55 Tahan Debu & Air",
      warranty: "12 Bulan Resmi Edifier Indonesia",
      origin: "Dikirim dari Jakarta Barat",
      voucher: "Diskon 25rb Min. Belanja 300rb"
    }
  }
];

// 2. Application State
let selectedProductIds = [1, 2, 4]; // Default 3 produk terpilih untuk demonstrasi instan
let cartCount = 0;
let isMobileView = false;

// 3. Initialize & Load Persistence
function initApp() {
  const saved = localStorage.getItem("shopee_compare_ids");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        selectedProductIds = parsed;
      }
    } catch (e) {
      console.warn("Storage parse error", e);
    }
  }
  renderProducts();
  updateDock();
}

// 4. Render Product Cards Grid
function renderProducts() {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = productsData.map(product => {
    const isSelected = selectedProductIds.includes(product.id);
    const shopBadgeClass = product.shopType === "mall" ? "badge-shop-mall" : "badge-shop-star";
    const shopBadgeText = product.shopType === "mall" ? "Shopee Mall" : "Star+";

    return `
      <div class="card ${isSelected ? 'is-selected' : ''}" id="product-card-${product.id}" onclick="handleCardClick(event, ${product.id})">
        <div class="card-image-box">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <div class="badge-shop-type ${shopBadgeClass}">${shopBadgeText}</div>
          <div class="badge-discount">${product.discount}<br>OFF</div>
        </div>
        <div class="card-body">
          <h3 class="card-title" title="${product.name}">${product.name}</h3>
          
          <div class="card-voucher-tags">
            ${product.tags.map(t => `<span class="tag-badge ${t.includes('Ongkir') ? 'tag-ongkir' : 'tag-cashback'}">${t}</span>`).join('')}
          </div>

          <div class="card-price-row">
            <span class="price-original">Rp${product.originalPrice.toLocaleString('id-ID')}</span>
            <span class="price-current">Rp${product.price.toLocaleString('id-ID')}</span>
          </div>

          <div class="card-meta-row">
            <div class="card-rating">
              <span>⭐</span> ${product.rating}
            </div>
            <span>${product.sold} terjual</span>
          </div>

          <div class="card-location">${product.location}</div>

          <div class="card-compare-action">
            <button class="btn-toggle-compare" type="button" onclick="toggleCompare(event, ${product.id})">
              <span>${isSelected ? '✓' : '＋'}</span>
              <span>${isSelected ? 'Hapus Komparasi' : 'Bandingkan'}</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// 5. Toggle Compare Product (Selection Handler)
function toggleCompare(event, id) {
  if (event) event.stopPropagation();
  const index = selectedProductIds.indexOf(id);

  if (index > -1) {
    selectedProductIds.splice(index, 1);
    showToast("Produk dihapus dari baki komparasi");
  } else {
    if (selectedProductIds.length >= 4) {
      showToast("Maksimal 4 produk untuk komparasi terbaik!");
      return;
    }
    selectedProductIds.push(id);
    const prod = productsData.find(p => p.id === id);
    showToast(`"${prod.name.substring(0, 28)}..." ditambahkan ke komparasi`);
  }

  saveState();
  renderProducts();
  updateDock();

  // If modal is currently open, refresh the modal table
  const modal = document.getElementById("compareModal");
  if (modal.classList.contains("is-open")) {
    if (selectedProductIds.length < 2) {
      closeComparisonModal();
    } else {
      renderComparisonMatrix();
    }
  }
}

function handleCardClick(event, id) {
  // If clicked inside compare button, handled by toggleCompare
  if (event.target.closest('.card-compare-action')) return;
  // Default behavior toggles compare
  toggleCompare(event, id);
}

// 6. Update Floating Comparison Dock
function updateDock() {
  const dock = document.getElementById("floatingDock");
  const dockCounter = document.getElementById("dockCounter");
  const dockThumbnails = document.getElementById("dockThumbnails");
  const btnCompare = document.getElementById("btnDockCompare");
  const btnCount = document.getElementById("btnCompareCount");

  const count = selectedProductIds.length;
  dockCounter.textContent = `${count}/4`;
  btnCount.textContent = count;

  if (count > 0) {
    dock.classList.add("is-visible");
    btnCompare.disabled = count < 2;

    dockThumbnails.innerHTML = selectedProductIds.map(id => {
      const prod = productsData.find(p => p.id === id);
      return `
        <div class="dock-thumb-item" title="${prod.name}">
          <img src="${prod.image}" alt="">
          <span class="dock-thumb-remove" onclick="toggleCompare(event, ${prod.id})" title="Hapus">×</span>
        </div>
      `;
    }).join('');
  } else {
    dock.classList.remove("is-visible");
  }
}

// 7. Clear All Selections
function clearAllSelections() {
  selectedProductIds = [];
  saveState();
  renderProducts();
  updateDock();
  showToast("Semua produk di baki komparasi telah dibersihkan.");
}

// 8. Open & Render Full Comparison Matrix Modal
function openComparisonModal() {
  if (selectedProductIds.length < 2) {
    showToast("Pilih minimal 2 produk untuk dibandingkan!");
    return;
  }
  renderComparisonMatrix();
  document.getElementById("compareModal").classList.add("is-open");
}

function closeComparisonModal() {
  document.getElementById("compareModal").classList.remove("is-open");
}

// 9. Matrix Table Generation with Categorized Rows & Sticky Header
function renderComparisonMatrix() {
  const selectedProducts = selectedProductIds.map(id => productsData.find(p => p.id === id));
  const table = document.getElementById("matrixTable");
  document.getElementById("modalItemsCount").textContent = `${selectedProducts.length} Produk Dibandingkan`;

  // Determine Best Values
  const lowestPrice = Math.min(...selectedProducts.map(p => p.price));
  const highestRating = Math.max(...selectedProducts.map(p => p.rating));

  // Build thead (Sticky Product Cards)
  let theadHtml = `
    <thead>
      <tr>
        <th class="col-feature">
          <div style="font-size: 14px; font-weight: 700; color: #222;">Parameter Spesifikasi</div>
          <div style="font-size: 11px; color: #777; margin-top: 4px;">Perbandingan mendalam antar varian</div>
        </th>
        ${selectedProducts.map(p => `
          <th class="col-product">
            <div class="header-product-card">
              <button class="btn-remove-col" onclick="toggleCompare(event, ${p.id})" title="Hapus produk ini">×</button>
              <img src="${p.image}" class="header-product-img" alt="${p.name}">
              <div class="header-product-name" title="${p.name}">${p.name}</div>
              <div class="header-product-price">Rp${p.price.toLocaleString('id-ID')}</div>
              <div class="header-cta-group">
                <button class="btn-table-buy" onclick="openCheckout(${p.id})">Beli Sekarang</button>
                <button class="btn-table-cart" onclick="addToCart('${p.name}')">+ Keranjang</button>
              </div>
            </div>
          </th>
        `).join('')}
      </tr>
    </thead>
  `;

  // Specification Definitions grouped by Category
  const specGroups = [
    {
      title: "1. Ringkasan Harga, Promo & Voucher",
      rows: [
        {
          label: "Harga Promo Efektif",
          getValue: p => `<strong>Rp${p.price.toLocaleString('id-ID')}</strong> <span style="color:#d0011b; font-size:11px;">(-${p.discount})</span>`,
          rawKey: p => p.price,
          badge: p => p.price === lowestPrice ? '<br><span class="badge-best badge-best-price">🏷️ Harga Termurah</span>' : ''
        },
        {
          label: "Harga Asli (Coret)",
          getValue: p => `<s>Rp${p.originalPrice.toLocaleString('id-ID')}</s>`,
          rawKey: p => p.originalPrice
        },
        {
          label: "Voucher Diskon Toko",
          getValue: p => `<span style="color: #ee4d2d; font-weight: 600;">${p.specs.voucher}</span>`,
          rawKey: p => p.specs.voucher
        },
        {
          label: "Gratis Ongkir & Cashback",
          getValue: p => p.tags.join(" • "),
          rawKey: p => p.tags.join(",")
        }
      ]
    },
    {
      title: "2. Reputasi Toko & Ulasan Pembeli",
      rows: [
        {
          label: "Lencana & Nama Toko",
          getValue: p => `<strong>${p.shop}</strong> (${p.shopType === 'mall' ? '<span style="color:#d0011b;font-weight:700;">Shopee Mall</span>' : '<span style="color:#ff5722;font-weight:700;">Star+</span>'})`,
          rawKey: p => p.shopType
        },
        {
          label: "Skor Rating Bintang",
          getValue: p => `⭐ <strong>${p.rating}</strong> / 5.0 (${p.reviewsCount} Ulasan)`,
          rawKey: p => p.rating,
          badge: p => p.rating === highestRating ? '<br><span class="badge-best badge-best-rating">⭐ Rating Tertinggi</span>' : ''
        },
        {
          label: "Total Terjual",
          getValue: p => `${p.sold} produk terjual`,
          rawKey: p => p.sold
        },
        {
          label: "Sentimen Utama Ulasan",
          getValue: p => `
            <div class="review-sentiment-chips">
              ${p.sentiments.map(s => `<span class="sentiment-chip">👍 ${s}</span>`).join('')}
            </div>
          `,
          rawKey: p => p.sentiments[0]
        }
      ]
    },
    {
      title: "3. Spesifikasi Audio & Hardware",
      rows: [
        {
          label: "Daya Tahan Baterai",
          getValue: p => `<strong>${p.specs.battery}</strong>`,
          rawKey: p => p.specs.battery,
          badge: p => p.specs.battery.includes("30 Jam") ? '<br><span class="badge-best badge-best-battery">🔋 Baterai Terlama</span>' : ''
        },
        {
          label: "Versi Bluetooth",
          getValue: p => p.specs.bluetooth,
          rawKey: p => p.specs.bluetooth
        },
        {
          label: "Driver Audio",
          getValue: p => p.specs.driver,
          rawKey: p => p.specs.driver
        },
        {
          label: "Peredam Bising (Noise Reduction)",
          getValue: p => p.specs.anc,
          rawKey: p => p.specs.anc
        },
        {
          label: "Latensi Gaming",
          getValue: p => p.specs.latency,
          rawKey: p => p.specs.latency
        },
        {
          label: "Ketahanan Air (Water Resistance)",
          getValue: p => p.specs.waterproof,
          rawKey: p => p.specs.waterproof
        }
      ]
    },
    {
      title: "4. Garansi & Pengiriman",
      rows: [
        {
          label: "Garansi & Perlindungan",
          getValue: p => `🛡️ ${p.specs.warranty}`,
          rawKey: p => p.specs.warranty
        },
        {
          label: "Lokasi Asal Pengiriman",
          getValue: p => `📍 ${p.specs.origin}`,
          rawKey: p => p.specs.origin
        }
      ]
    }
  ];

  // Build tbody
  let tbodyHtml = "<tbody>";

  specGroups.forEach(group => {
    tbodyHtml += `
      <tr class="category-section-row">
        <td colspan="${selectedProducts.length + 1}">${group.title}</td>
      </tr>
    `;

    group.rows.forEach(row => {
      // Check if values across all products are different
      const values = selectedProducts.map(p => String(row.rawKey(p)));
      const isDifferent = new Set(values).size > 1;

      tbodyHtml += `
        <tr class="spec-data-row ${isDifferent ? 'is-different' : 'is-identical'}" data-different="${isDifferent}">
          <td class="feature-title">${row.label}</td>
          ${selectedProducts.map(p => `
            <td>
              ${row.getValue(p)}
              <span class="best-badge-slot">${row.badge ? row.badge(p) : ''}</span>
            </td>
          `).join('')}
        </tr>
      `;
    });
  });

  tbodyHtml += "</tbody>";

  table.innerHTML = theadHtml + tbodyHtml;

  // Apply current active toolbar states
  applyHighlightDifferences();
  applyHideIdentical();
  applyBestValueBadges();
}

// 10. Toolbar Controls (Highlight, Hide Identical, Best Value)
function applyHighlightDifferences() {
  const isChecked = document.getElementById("toggleDiff").checked;
  const rows = document.querySelectorAll(".matrix-table tbody tr.spec-data-row");

  rows.forEach(row => {
    if (row.getAttribute("data-different") === "true") {
      if (isChecked) {
        row.classList.add("is-different");
      } else {
        row.classList.remove("is-different");
      }
    }
  });
}

function applyHideIdentical() {
  const isChecked = document.getElementById("toggleHideIdentical").checked;
  const identicalRows = document.querySelectorAll('.matrix-table tbody tr[data-different="false"]');

  identicalRows.forEach(row => {
    row.style.display = isChecked ? "none" : "";
  });
}

function applyBestValueBadges() {
  const isChecked = document.getElementById("toggleBestValue").checked;
  const badges = document.querySelectorAll(".best-badge-slot");
  badges.forEach(b => {
    b.style.display = isChecked ? "inline" : "none";
  });
}

// 11. Shopping Cart & Micro-interactions
function addToCart(productName) {
  cartCount += 1;
  const badge = document.getElementById("cartCount");
  badge.textContent = cartCount;

  // Pulse animation on badge
  badge.style.transform = "scale(1.4)";
  setTimeout(() => { badge.style.transform = "scale(1)"; }, 200);

  showToast(`"${productName.substring(0, 25)}..." masuk ke Keranjang!`);
}

function openCheckout(productId) {
  const p = productsData.find(item => item.id === productId);
  const body = document.getElementById("checkoutBody");
  body.innerHTML = `
    <div style="display: flex; gap: 14px; margin-bottom: 14px; align-items: center;">
      <img src="${p.image}" style="width: 70px; height: 70px; object-fit: cover; border-radius: 4px; border: 1px solid #ddd;">
      <div>
        <h4 style="font-size: 14px; margin-bottom: 4px;">${p.name}</h4>
        <div style="color: #ee4d2d; font-size: 16px; font-weight: 700;">Rp${p.price.toLocaleString('id-ID')}</div>
        <div style="font-size: 12px; color: #777;">Toko: ${p.shop}</div>
      </div>
    </div>
    <div style="background: #fdfdfd; border: 1px solid #eee; padding: 10px; border-radius: 4px; font-size: 12px;">
      <div><strong>Metode Pembayaran:</strong> ShopeePay (Saldo Cukup)</div>
      <div style="margin-top: 4px;"><strong>Opsi Pengiriman:</strong> Reguler Gratis Ongkir XTRA (Estimasi 2 Hari)</div>
    </div>
  `;
  document.getElementById("checkoutModal").classList.add("is-open");
}

function closeCheckoutModal() {
  document.getElementById("checkoutModal").classList.remove("is-open");
}

function completeCheckout() {
  closeCheckoutModal();
  showToast("🎉 Transaksi Berhasil! Terima kasih telah berbelanja di Shopee.");
}

// 12. Toast Notification Helper
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById("toast");
  const msg = document.getElementById("toastMessage");
  msg.textContent = message;
  toast.classList.add("is-show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("is-show");
  }, 2600);
}

// 13. State Persistence
function saveState() {
  localStorage.setItem("shopee_compare_ids", JSON.stringify(selectedProductIds));
}

// 14. Responsive Mobile Device Emulator Switcher
function toggleDeviceView() {
  isMobileView = !isMobileView;
  const btn = document.getElementById("btnDeviceToggle");
  if (isMobileView) {
    document.body.classList.add("mobile-view");
    btn.textContent = "💻 Mode Desktop";
    showToast("Beralih ke tampilan simulasi layar smartphone (Mobile View)");
  } else {
    document.body.classList.remove("mobile-view");
    btn.textContent = "📱 Mode HP (Mobile View)";
    showToast("Beralih ke tampilan Desktop Monitor");
  }
}

// 15. Outside Click to Close Modals
window.onclick = function(event) {
  const compareModal = document.getElementById("compareModal");
  const checkoutModal = document.getElementById("checkoutModal");
  if (event.target === compareModal) {
    closeComparisonModal();
  }
  if (event.target === checkoutModal) {
    closeCheckoutModal();
  }
};

// Initialize app on DOM ready
document.addEventListener("DOMContentLoaded", initApp);
