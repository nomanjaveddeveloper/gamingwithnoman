/* ============================================================
   NEXUS GAMING — script.js
   Complete Interactive Functionality
   ============================================================ */

$(document).ready(function () {

  /* ==========================================================
     PRODUCT DATA — 30+ Products
     ========================================================== */
  const products = [
    // Gaming PCs
    { id: 1,  name: 'NEXUS APEX X1',      category: 'gaming-pc', price: 4299, oldPrice: 4799, img: '112.webp', specs: 'RTX 4090 · i9-14900K · 64GB DDR5 · 4TB NVMe', rating: 5, reviews: 238, badge: 'hot' },
    { id: 2,  name: 'NEXUS ULTRA PRO',    category: 'gaming-pc', price: 2899, oldPrice: 3299, img: '113.jpg', specs: 'RTX 4080 · i7-14700K · 32GB DDR5 · 2TB NVMe', rating: 5, reviews: 189, badge: 'new' },
    { id: 3,  name: 'NEXUS PHANTOM',      category: 'gaming-pc', price: 1999, oldPrice: 2299, img: '114.webp', specs: 'RTX 4070 Ti · Ryzen 9 7900X · 32GB · 1TB NVMe', rating: 4, reviews: 145, badge: 'sale' },
    { id: 4,  name: 'NEXUS STEALTH',      category: 'gaming-pc', price: 1499, oldPrice: null, img: '116.avif', specs: 'RTX 4070 · Ryzen 7 7700X · 32GB · 1TB NVMe', rating: 4, reviews: 97,  badge: null },
    { id: 5,  name: 'NEXUS NOVA MINI',    category: 'gaming-pc', price: 999,  oldPrice: 1199, img: '117.jpg', specs: 'RTX 4060 · i5-14600K · 16GB DDR5 · 512GB NVMe', rating: 4, reviews: 211, badge: 'sale' },
    { id: 6,  name: 'NEXUS TITAN RGB',    category: 'gaming-pc', price: 3499, oldPrice: null, img: '118.webp', specs: 'RTX 4090 · i9-13900K · 128GB DDR5 · 8TB NVMe', rating: 5, reviews: 62,  badge: 'new' },
    // Monitors
    { id: 7,  name: 'NEXUS OLED 27"',     category: 'monitor',   price: 899,  oldPrice: 1099, img: '222.jpg', specs: '4K OLED · 240Hz · 0.03ms · HDR10+ · G-Sync', rating: 5, reviews: 176, badge: 'hot' },
    { id: 8,  name: 'NEXUS TITAN 34"',    category: 'monitor',   price: 1199, oldPrice: 1399, img: '223.jpg', specs: 'QHD IPS · 165Hz · 1ms · Ultrawide Curved', rating: 4, reviews: 134, badge: null },
    { id: 9,  name: 'NEXUS FRAG 24"',     category: 'monitor',   price: 449,  oldPrice: 549,  img: '224.webp', specs: 'FHD IPS · 360Hz · 0.5ms · NVIDIA Reflex', rating: 5, reviews: 298, badge: 'sale' },
    { id: 10, name: 'NEXUS VISION 32"',   category: 'monitor',   price: 699,  oldPrice: null, img: '226.png', specs: '4K IPS · 144Hz · 1ms · USB-C · HDR600', rating: 4, reviews: 88,  badge: 'new' },
    // Keyboards
    { id: 11, name: 'NEXUS MECH PRO',     category: 'keyboard',  price: 189,  oldPrice: 229,  img: '331.jpg', specs: 'Cherry MX Red · RGB Backlit · Full Size · Aluminium', rating: 5, reviews: 412, badge: 'hot' },
    { id: 12, name: 'NEXUS CYBER 65%',    category: 'keyboard',  price: 149,  oldPrice: null, img: '332.avif', specs: 'Optical Switches · PBT Keycaps · Wireless 2.4GHz', rating: 4, reviews: 267, badge: 'new' },
    { id: 13, name: 'NEXUS BLADE TKL',    category: 'keyboard',  price: 129,  oldPrice: 159,  img: '333.webp', specs: 'Blue Clicky · Tenkeyless · Per-Key RGB · USB-C', rating: 4, reviews: 198, badge: 'sale' },
    { id: 14, name: 'NEXUS ULTRA 75%',    category: 'keyboard',  price: 219,  oldPrice: null, img: '334.jpg', specs: 'Custom Gasket · Hot-swap · Silent Lubed Switches', rating: 5, reviews: 143, badge: null },
    // Mice
    { id: 15, name: 'NEXUS VIPER PRO',    category: 'mouse',     price: 89,   oldPrice: 109,  img: '441.webp', specs: '30K DPI · 6 Buttons · Optical · Wireless · RGB', rating: 5, reviews: 567, badge: 'hot' },
    { id: 16, name: 'NEXUS SNIPER X',     category: 'mouse',     price: 69,   oldPrice: null, img: '442.jpg', specs: '16K DPI · Ergonomic · 7 Buttons · 70hr Battery', rating: 4, reviews: 389, badge: 'new' },
    { id: 17, name: 'NEXUS CLICK 60G',    category: 'mouse',     price: 59,   oldPrice: 79,   img: '443.jpg', specs: '25K DPI · Ultralight 60g · Honeycomb Shell', rating: 4, reviews: 222, badge: 'sale' },
    { id: 18, name: 'NEXUS AIM ELITE',    category: 'mouse',     price: 119,  oldPrice: null, img: '7.jpg', specs: '36K DPI · 8K Hz Polling · Gen 3 Optical Switches', rating: 5, reviews: 156, badge: null },
    // Headsets
    { id: 19, name: 'NEXUS AUDIO X7',     category: 'headset',   price: 199,  oldPrice: 249,  img: '551.jpg', specs: '7.1 Surround · 50mm Drivers · ANC · USB-C', rating: 5, reviews: 334, badge: 'hot' },
    { id: 20, name: 'NEXUS SHADE WL',     category: 'headset',   price: 149,  oldPrice: null, img: '552.webp', specs: 'Wireless 2.4GHz · 30hr Battery · Retractable Mic', rating: 4, reviews: 287, badge: 'new' },
    { id: 21, name: 'NEXUS BASS 500',     category: 'headset',   price: 89,   oldPrice: 119,  img: '553.webp', specs: '40mm Custom Tuned · Virtual 7.1 · Braided Cable', rating: 4, reviews: 445, badge: 'sale' },
    // Gaming Chairs
    { id: 22, name: 'NEXUS THRONE PRO',   category: 'chair',     price: 599,  oldPrice: 699,  img: '662.webp', specs: 'Full Recline · 4D Armrests · Lumbar Massage · RGB', rating: 5, reviews: 178, badge: 'hot' },
    { id: 23, name: 'NEXUS COMMANDER',    category: 'chair',     price: 399,  oldPrice: null, img: '663.webp', specs: 'PU Leather · 165° Recline · 4D Arms · 150kg Load', rating: 4, reviews: 234, badge: 'new' },
    { id: 24, name: 'NEXUS PILOT X',      category: 'chair',     price: 299,  oldPrice: 349,  img: '664.png', specs: 'Fabric Mesh · Lumbar Support · Tilt Mechanism', rating: 4, reviews: 167, badge: 'sale' },
    // More PCs
    { id: 25, name: 'NEXUS CORE i7',      category: 'gaming-pc', price: 1299, oldPrice: null, img: '1111.webp', specs: 'RTX 4060 Ti · i7-13700K · 16GB · 1TB NVMe', rating: 4, reviews: 122, badge: null },
    { id: 26, name: 'NEXUS BLACK OPS',    category: 'gaming-pc', price: 2199, oldPrice: 2499, img: '1112.jpg', specs: 'RTX 4070 Super · i9-13900K · 32GB · 2TB', rating: 5, reviews: 88,  badge: 'sale' },
    // More Monitors
    { id: 27, name: 'NEXUS PIXEL 27"',    category: 'monitor',   price: 549,  oldPrice: 649,  img: '0000.webp', specs: 'QHD IPS · 180Hz · 1ms · VESA Mount · HDR400', rating: 4, reviews: 93,  badge: 'sale' },
    // More Mouse
    { id: 28, name: 'NEXUS TRACK 2',      category: 'mouse',     price: 49,   oldPrice: null, img: '1114.jpg', specs: '12K DPI · Ambidextrous · 6 Buttons · RGB', rating: 4, reviews: 312, badge: null },
    // More Keyboard
    { id: 29, name: 'NEXUS COMPACT 40%',  category: 'keyboard',  price: 99,   oldPrice: 129,  img: '1117.jpg', specs: 'Tactile Switches · Wireless BT5 · Aluminum Case', rating: 4, reviews: 76,  badge: 'sale' },
    // More Headset
    { id: 30, name: 'NEXUS EVO RGB',      category: 'headset',   price: 119,  oldPrice: 149,  img: '00.jpg', specs: 'Hybrid ANC · Hi-Res Audio · 35hr Battery · Foldable', rating: 5, reviews: 203, badge: 'new' },
    // Chair
    { id: 31, name: 'NEXUS TITAN CHAIR',  category: 'chair',     price: 799,  oldPrice: 999,  img: '1119.jpg', specs: 'Memory Foam · Magnetic Armrests · Cooling Fan', rating: 5, reviews: 56,  badge: 'hot' },
    // Keyboard
    { id: 32, name: 'NEXUS CLICKER X',    category: 'keyboard',  price: 79,   oldPrice: null, img: '000.webp', specs: 'Membrane Hybrid · Wrist Rest · Full RGB Underglow', rating: 3, reviews: 145, badge: null },
  ];

  /* ==========================================================
     STATE
     ========================================================== */
  let cart = JSON.parse(localStorage.getItem('nexus_cart') || '[]');
  let wishlist = JSON.parse(localStorage.getItem('nexus_wishlist') || '[]');
  let activeFilter = 'all';
  let activePrice = 5000;

  /* ==========================================================
     LOADER
     ========================================================== */
  $('body').addClass('loading');
  setTimeout(() => {
    $('#loader').addClass('hidden');
    $('body').removeClass('loading');
    setTimeout(() => $('#loader').hide(), 500);
  }, 2200);

  /* ==========================================================
     AOS INIT
     ========================================================== */
  AOS.init({ duration: 800, once: true, offset: 80 });

  /* ==========================================================
     NAVBAR SCROLL EFFECTS
     ========================================================== */
  $(window).on('scroll', function () {
    const scrollY = $(this).scrollTop();

    // Sticky style
    if (scrollY > 60) {
      $('#mainNav').addClass('scrolled');
    } else {
      $('#mainNav').removeClass('scrolled');
    }

    // Back to top
    if (scrollY > 400) {
      $('#backToTop').addClass('visible');
    } else {
      $('#backToTop').removeClass('visible');
    }

    // Active nav link
    const sections = ['home','featured','accessories','gallery','peripherals','compare','reviews','contact'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.offsetTop - 120;
      const bot = top + el.offsetHeight;
      if (scrollY >= top && scrollY < bot) {
        $('.nav-link').removeClass('active');
        $(`.nav-link[href="#${id}"]`).addClass('active');
      }
    });
  });

  /* ==========================================================
     ANIMATED COUNTERS
     ========================================================== */
  function animateCounters () {
    $('.stat-num').each(function () {
      const $this = $(this);
      const target = parseInt($this.data('target'));
      if ($this.data('counted')) return;
      $this.data('counted', true);
      $({ count: 0 }).animate({ count: target }, {
        duration: 2000,
        easing: 'swing',
        step: function () { $this.text(Math.ceil(this.count).toLocaleString()); },
        complete: function () { $this.text(target.toLocaleString()); }
      });
    });
  }

  // Trigger when hero is in view
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) animateCounters(); });
  }, { threshold: 0.3 });

  const heroEl = document.querySelector('.hero-stats');
  if (heroEl) heroObserver.observe(heroEl);

  /* ==========================================================
     PRODUCT CARD HTML GENERATOR
     ========================================================== */
  function createProductCard (p, size = 'col-lg-4') {
    const badgeHtml = p.badge ? `<div class="product-badge badge-${p.badge}">${p.badge.toUpperCase()}</div>` : '';
    const oldPriceHtml = p.oldPrice ? `<span class="product-price-old">$${p.oldPrice.toLocaleString()}</span>` : '';
    const stars = '★'.repeat(p.rating) + '☆'.repeat(5 - p.rating);
    const inWishlist = wishlist.some(w => w.id === p.id);

    return `
      <div class="col-12 col-md-6 ${size} product-col" data-category="${p.category}" data-price="${p.price}" data-aos="fade-up">
        <div class="product-card h-100">
          <div class="product-img-wrap">
            <img src="${p.img}" alt="${p.name}" loading="lazy" />
            ${badgeHtml}
            <div class="product-actions">
              <button class="action-btn wishlist-btn ${inWishlist ? 'wishlisted' : ''}" data-id="${p.id}" title="Wishlist">
                <i class="bi bi-heart${inWishlist ? '-fill' : ''}"></i>
              </button>
              <button class="action-btn" title="Quick View" onclick="showToast('Quick view coming soon!', 'info')">
                <i class="bi bi-eye"></i>
              </button>
            </div>
          </div>
          <div class="product-body">
            <div class="product-category">${p.category.replace('-', ' ')}</div>
            <div class="product-name">${p.name}</div>
            <div class="product-specs">${p.specs}</div>
            <div class="product-rating">${stars} <span>(${p.reviews})</span></div>
            <div class="product-price-row">
              <div>
                <div class="product-price">$${p.price.toLocaleString()}</div>
                ${oldPriceHtml}
              </div>
              <button class="btn-add-cart" onclick='addToCart(${JSON.stringify(p)})'>ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>`;
  }

  /* ==========================================================
     RENDER PRODUCTS GRID
     ========================================================== */
  function renderProducts () {
    const $grid = $('#productsGrid');
    $grid.empty();

    const filtered = products.filter(p => {
      const catOk = activeFilter === 'all' || p.category === activeFilter;
      const priceOk = p.price <= activePrice;
      return catOk && priceOk;
    });

    if (filtered.length === 0) {
      $grid.html('<div class="col-12 text-center py-5"><p style="color:var(--text-dim);font-family:var(--font-head);letter-spacing:2px;">NO PRODUCTS MATCH YOUR FILTER</p></div>');
      return;
    }

    filtered.forEach(p => $grid.append(createProductCard(p)));
    AOS.refresh();
    bindWishlistButtons();
  }

  /* ==========================================================
     FILTER FUNCTIONALITY
     ========================================================== */
  $(document).on('click', '.filter-btn', function () {
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');
    activeFilter = $(this).data('filter');
    renderProducts();
  });

  window.filterProducts = function (cat) {
    activeFilter = cat;
    $('.filter-btn').removeClass('active');
    $(`.filter-btn[data-filter="${cat}"]`).addClass('active');
    renderProducts();
    $('html, body').animate({ scrollTop: $('#featured').offset().top - 80 }, 600);
  };

  $('#priceRange').on('input', function () {
    activePrice = parseInt($(this).val());
    $('#priceVal').text(activePrice.toLocaleString());
    renderProducts();
  });

  /* ==========================================================
     ACCESSORIES SWIPER — subset of products
     ========================================================== */
  function renderAccessoriesSwiper () {
    const accessories = products.filter(p => ['keyboard','mouse','headset','monitor'].includes(p.category)).slice(0, 10);
    const $wrap = $('#accessoriesSwiper');
    accessories.forEach(p => {
      $wrap.append(`
        <div class="swiper-slide">
          <div class="product-card" style="max-width:320px;margin:auto;">
            <div class="product-img-wrap">
              <img src="${p.img}" alt="${p.name}" loading="lazy" />
              ${p.badge ? `<div class="product-badge badge-${p.badge}">${p.badge.toUpperCase()}</div>` : ''}
            </div>
            <div class="product-body">
              <div class="product-category">${p.category}</div>
              <div class="product-name">${p.name}</div>
              <div class="product-specs">${p.specs}</div>
              <div class="product-price-row">
                <div class="product-price">$${p.price.toLocaleString()}</div>
                <button class="btn-add-cart" onclick='addToCart(${JSON.stringify(p)})'>ADD</button>
              </div>
            </div>
          </div>
        </div>`);
    });
  }

  /* ==========================================================
     PERIPHERALS GRID
     ========================================================== */
  function renderPeripherals () {
    const perips = products.filter(p => ['keyboard','mouse','headset'].includes(p.category)).slice(0, 9);
    const $grid = $('#peripheralsGrid');
    perips.forEach(p => {
      $grid.append(`
        <div class="col-md-6 col-lg-4" data-aos="fade-up">
          <div class="peripheral-card">
            <div class="peripheral-img">
              <img src="${p.img}" alt="${p.name}" loading="lazy" />
            </div>
            <div class="peripheral-info">
              <div class="peripheral-name">${p.name}</div>
              <div class="peripheral-spec">${p.specs.split('·')[0].trim()}</div>
              <div class="peripheral-price">$${p.price}</div>
              <button class="btn-add-cart mt-2" onclick='addToCart(${JSON.stringify(p)})'>ADD TO CART</button>
            </div>
          </div>
        </div>`);
    });
  }

  /* ==========================================================
     CHAIRS GRID
     ========================================================== */
  function renderChairs () {
    const chairs = products.filter(p => p.category === 'chair');
    const $grid = $('#chairsGrid');
    chairs.forEach((p, i) => {
      $grid.append(`
        <div class="col-12" data-aos="fade-left" data-aos-delay="${i * 100}">
          <div class="product-card flex-row align-items-center p-3 gap-3">
            <img src="${p.img}" alt="${p.name}" style="width:90px;height:90px;object-fit:cover;border-radius:10px;flex-shrink:0;" />
            <div class="flex-1">
              <div class="product-name">${p.name}</div>
              <div class="product-specs" style="font-size:.78rem;">${p.specs.split('·').slice(0,2).join('·')}</div>
              <div class="product-price-row mt-2">
                <div class="product-price">$${p.price.toLocaleString()}</div>
                <button class="btn-add-cart" onclick='addToCart(${JSON.stringify(p)})'>ADD</button>
              </div>
            </div>
          </div>
        </div>`);
    });
  }

  /* ==========================================================
     SWIPER INIT
     ========================================================== */
  function initSwipers () {
    // Accessories
    new Swiper('.accessories-swiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: { delay: 3500, disableOnInteraction: false },
      pagination: { el: '.accessories-swiper .swiper-pagination', clickable: true },
      navigation: { nextEl: '.accessories-swiper .swiper-button-next', prevEl: '.accessories-swiper .swiper-button-prev' },
      breakpoints: {
        576: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
        1200: { slidesPerView: 4 }
      }
    });

    // Brands
    new Swiper('.brands-swiper', {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: true,
      autoplay: { delay: 2000, disableOnInteraction: false },
      speed: 1000,
      breakpoints: {
        576: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        992: { slidesPerView: 5 },
        1200: { slidesPerView: 6 }
      }
    });

    // Reviews
    new Swiper('.reviews-swiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: { delay: 4000 },
      pagination: { el: '.reviews-swiper .swiper-pagination', clickable: true },
      breakpoints: {
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 }
      }
    });
  }

  /* ==========================================================
     CART SYSTEM
     ========================================================== */
  window.addToCart = function (product) {
    const existing = cart.find(i => i.id === product.id);
    if (existing) {
      existing.qty++;
    } else {
      cart.push({ ...product, qty: 1 });
    }
    saveCart();
    updateCartUI();
    showToast(`${product.name} added to cart!`, 'success');
    // Animate badge
    $('#cartCount').addClass('pop');
    setTimeout(() => $('#cartCount').removeClass('pop'), 400);
  };

  function removeFromCart (id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    updateCartUI();
    renderCartSidebar();
  }

  function updateCartQty (id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.qty = Math.max(1, item.qty + delta);
    saveCart();
    updateCartUI();
    renderCartSidebar();
  }

  function saveCart () {
    localStorage.setItem('nexus_cart', JSON.stringify(cart));
  }

  function updateCartUI () {
    const total = cart.reduce((sum, i) => sum + i.qty, 0);
    $('#cartCount').text(total);
  }

  function renderCartSidebar () {
    const $body = $('#cartItems');
    const $footer = $('#cartFooter');
    $body.empty();

    if (cart.length === 0) {
      $body.html('<div class="empty-state"><i class="bi bi-bag"></i><p>Your cart is empty</p></div>');
      $footer.empty();
      return;
    }

    cart.forEach(item => {
      $body.append(`
        <div class="cart-item">
          <img src="${item.img}" alt="${item.name}" />
          <div class="flex-1">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">$${(item.price * item.qty).toLocaleString()}</div>
            <div class="cart-item-qty">
              <button class="qty-btn" onclick="updateCartQty(${item.id}, -1)">−</button>
              <span>${item.qty}</span>
              <button class="qty-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
            </div>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart(${item.id})"><i class="bi bi-trash"></i></button>
        </div>`);
    });

    const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
    $footer.html(`
      <div class="cart-total"><span>TOTAL</span><span>$${total.toLocaleString()}</span></div>
      <button class="btn nexus-btn-primary w-100 mb-2" onclick="showToast('Checkout coming soon!', 'info')">CHECKOUT</button>
      <button class="btn nexus-btn-ghost w-100" onclick="closeSidebars()">CONTINUE SHOPPING</button>
    `);
  }

  /* ==========================================================
     WISHLIST SYSTEM
     ========================================================== */
  function bindWishlistButtons () {
    $(document).off('click', '.wishlist-btn').on('click', '.wishlist-btn', function (e) {
      e.stopPropagation();
      const id = parseInt($(this).data('id'));
      const product = products.find(p => p.id === id);
      const idx = wishlist.findIndex(w => w.id === id);

      if (idx === -1) {
        wishlist.push(product);
        $(this).addClass('wishlisted').html('<i class="bi bi-heart-fill"></i>');
        showToast(`${product.name} added to wishlist ❤️`, 'success');
      } else {
        wishlist.splice(idx, 1);
        $(this).removeClass('wishlisted').html('<i class="bi bi-heart"></i>');
        showToast(`${product.name} removed from wishlist`, 'info');
      }

      localStorage.setItem('nexus_wishlist', JSON.stringify(wishlist));
      updateWishlistUI();
      renderWishlistSidebar();
    });
  }

  function updateWishlistUI () {
    $('#wishlistCount').text(wishlist.length);
  }

  function renderWishlistSidebar () {
    const $body = $('#wishlistItems');
    $body.empty();

    if (wishlist.length === 0) {
      $body.html('<div class="empty-state"><i class="bi bi-heart"></i><p>Your wishlist is empty</p></div>');
      return;
    }

    wishlist.forEach(item => {
      $body.append(`
        <div class="cart-item">
          <img src="${item.img}" alt="${item.name}" />
          <div class="flex-1">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">$${item.price.toLocaleString()}</div>
            <button class="btn-add-cart mt-2" onclick='addToCart(${JSON.stringify(item)})'>ADD TO CART</button>
          </div>
          <button class="cart-item-remove" onclick="removeFromWishlist(${item.id})"><i class="bi bi-trash"></i></button>
        </div>`);
    });
  }

  window.removeFromWishlist = function (id) {
    wishlist = wishlist.filter(w => w.id !== id);
    localStorage.setItem('nexus_wishlist', JSON.stringify(wishlist));
    updateWishlistUI();
    renderWishlistSidebar();
  };

  /* ==========================================================
     SIDEBAR CONTROLS
     ========================================================== */
  $('#cartBtn').on('click', function () {
    renderCartSidebar();
    $('#cartSidebar').addClass('open');
    $('#sidebarOverlay').addClass('active');
  });

  $('#wishlistBtn').on('click', function () {
    renderWishlistSidebar();
    $('#wishlistSidebar').addClass('open');
    $('#sidebarOverlay').addClass('active');
  });

  window.closeSidebars = function () {
    $('.nexus-sidebar').removeClass('open');
    $('#sidebarOverlay').removeClass('active');
  };

  /* ==========================================================
     SEARCH FUNCTIONALITY
     ========================================================== */
  $('#searchToggle').on('click', function () {
    $('#searchOverlay').addClass('active');
    $('#searchInput').focus();
  });

  $('#searchClose').on('click', function () {
    $('#searchOverlay').removeClass('active');
    $('#searchResults').empty();
    $('#searchInput').val('');
  });

  $('#searchInput').on('input', function () {
    const query = $(this).val().trim().toLowerCase();
    const $results = $('#searchResults');
    $results.empty();

    if (query.length < 2) return;

    const matches = products.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.specs.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    ).slice(0, 6);

    if (matches.length === 0) {
      $results.html('<p style="color:var(--text-dim);font-size:.85rem;text-align:center;padding:10px;">No products found</p>');
      return;
    }

    matches.forEach(p => {
      $results.append(`
        <div class="search-result-item" onclick='addToCart(${JSON.stringify(p)})'>
          <img src="${p.img}" alt="${p.name}" />
          <div>
            <div class="result-name">${p.name}</div>
            <div class="result-price">$${p.price.toLocaleString()}</div>
          </div>
          <button class="btn-add-cart ms-auto">ADD</button>
        </div>`);
    });
  });

  // Close search on Escape
  $(document).on('keydown', function (e) {
    if (e.key === 'Escape') {
      $('#searchOverlay').removeClass('active');
      closeSidebars();
    }
  });

  /* ==========================================================
     TOAST NOTIFICATION
     ========================================================== */
  let toastTimer;
  window.showToast = function (msg, type = 'info') {
    const $toast = $('#nexusToast');
    $toast.text(msg).removeClass('success error').addClass(type === 'success' ? 'success' : type === 'error' ? 'error' : '');
    $toast.addClass('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => $toast.removeClass('show'), 3000);
  };

  /* ==========================================================
     CONTACT FORM VALIDATION
     ========================================================== */
  window.submitContact = function (e) {
    e.preventDefault();
    let valid = true;

    const name = $('#cName').val().trim();
    const email = $('#cEmail').val().trim();
    const subject = $('#cSubject').val().trim();
    const message = $('#cMessage').val().trim();

    $('#nameErr,#emailErr,#subjectErr,#msgErr').text('');

    if (name.length < 2) { $('#nameErr').text('Please enter your name.'); valid = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { $('#emailErr').text('Enter a valid email.'); valid = false; }
    if (subject.length < 3) { $('#subjectErr').text('Please enter a subject.'); valid = false; }
    if (message.length < 10) { $('#msgErr').text('Message must be at least 10 characters.'); valid = false; }

    if (!valid) return;

    const $btn = $('#contactForm button[type=submit]');
    $btn.text('SENDING...').prop('disabled', true);

    setTimeout(() => {
      $btn.text('SEND MESSAGE').prop('disabled', false);
      $('#contactForm')[0].reset();
      $('#contactMsg').html('<p style="color:var(--neon-green);font-family:var(--font-head);font-size:.75rem;letter-spacing:2px;">✓ MESSAGE SENT SUCCESSFULLY! We\'ll respond within 24 hours.</p>');
      showToast('Message sent successfully!', 'success');
      setTimeout(() => $('#contactMsg').empty(), 5000);
    }, 1500);
  };

  /* ==========================================================
     NEWSLETTER FORM
     ========================================================== */
  window.submitNewsletter = function (e) {
    e.preventDefault();
    const email = $('#newsletterEmail').val().trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      $('#newsletterMsg').html('<span style="color:var(--neon-red);font-size:.8rem;">Please enter a valid email.</span>');
      return;
    }
    $('#newsletterMsg').html('<span style="color:var(--neon-green);font-family:var(--font-head);font-size:.75rem;letter-spacing:2px;">✓ YOU\'RE IN! Welcome to the NEXUS crew.</span>');
    $('#newsletterForm')[0].reset();
    showToast('Subscribed successfully!', 'success');
  };

  /* ==========================================================
     PARTICLE BACKGROUND (Hero)
     ========================================================== */
  function createParticles () {
    const container = document.getElementById('particles');
    if (!container) return;
    for (let i = 0; i < 60; i++) {
      const dot = document.createElement('div');
      const size = Math.random() * 3 + 1;
      dot.style.cssText = `
        position:absolute;
        width:${size}px;height:${size}px;
        background:${Math.random() > 0.5 ? 'rgba(0,212,255,0.5)' : 'rgba(155,0,255,0.5)'};
        border-radius:50%;
        left:${Math.random() * 100}%;
        top:${Math.random() * 100}%;
        animation:particleFloat ${4 + Math.random() * 8}s ease-in-out ${Math.random() * 5}s infinite alternate;
      `;
      container.appendChild(dot);
    }

    const style = document.createElement('style');
    style.textContent = `
      @keyframes particleFloat {
        from { transform: translateY(0) translateX(0); opacity: 0.3; }
        to   { transform: translateY(-${Math.random() * 30 + 20}px) translateX(${(Math.random() - 0.5) * 40}px); opacity: 0.9; }
      }
    `;
    document.head.appendChild(style);
  }

  /* ==========================================================
     SMOOTH SCROLL NAV LINKS
     ========================================================== */
  $(document).on('click', 'a[href^="#"]', function (e) {
    const target = $(this).attr('href');
    if (target === '#' || $(target).length === 0) return;
    e.preventDefault();
    const offset = $(target).offset().top - 80;
    $('html, body').animate({ scrollTop: offset }, 700, 'swing');
    // Close mobile nav
    $('#navMenu').collapse('hide');
  });

  /* ==========================================================
     BADGE ANIMATION STYLE
     ========================================================== */
  const badgeStyle = document.createElement('style');
  badgeStyle.textContent = `
    @keyframes popBadge { 0%,100% { transform:scale(1); } 50% { transform:scale(1.5); } }
    .badge-count.pop { animation: popBadge 0.4s ease; }
    .flex-1 { flex:1; }
  `;
  document.head.appendChild(badgeStyle);

  /* ==========================================================
     INITIALIZE EVERYTHING
     ========================================================== */
  renderProducts();
  renderAccessoriesSwiper();
  renderPeripherals();
  renderChairs();
  initSwipers();
  createParticles();
  updateCartUI();
  updateWishlistUI();
  bindWishlistButtons();

  // AOS refresh after renders
  setTimeout(() => AOS.refresh(), 300);

}); // end document.ready
