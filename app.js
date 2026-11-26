// ============================================
// CREAM BOY FRESH CAKES & BAKES
// Master Architecture Script for Multi-Page Bakery
// ============================================

(function () {
  'use strict';

  // ── Business Information ──
  const BUSINESS = {
    name: 'Cream Boy Fresh Cakes & Bakes',
    phone: '+919894030744',
    phoneDisplay: '+91 98940 30744',
    whatsapp: '919894030744',
    address: 'Near Sastra University Ground, Anna Nagar, Sastra College Road, Kumbakonam, Tamil Nadu – 612001',
    hours: 'Mon–Sun: 9:00 AM – 10:00 PM',
  };

  function sanitize(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function buildWhatsAppUrl(message) {
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${BUSINESS.whatsapp}?text=${encoded}`;
  }

  // ── Products & Catalog Data ──
  const PRODUCTS = {
    cakes: [
      {
        id: 'c1',
        name: 'Black Forest Celebration',
        emoji: '🎂',
        category: 'cakes',
        filterTag: 'bestseller',
        badge: 'Signature Design',
        varietyTag: 'Single & Multi-Tier',
        desc: 'Traditional European Black Forest design featuring fluffy chocolate sponge, layered whipped dairy cream, dark cherry reduction, and shaved Belgian chocolate curls.',
        varieties: ['Standard Round (500g / 1kg / 2kg)', 'Two-Tier Celebration Cake', 'Heart-Shaped Anniversary Design', 'Party Celebration Slab'],
        designFeatures: ['Handcrafted Belgian Chocolate Curls', 'Glossy Glazed Maraschino Cherries', 'Light Dairy Whipped Frosting', 'Eggless Preparation Available'],
        ingredients: [
          { e: '🍫', n: 'Chocolate Sponge' }, { e: '🍒', n: 'Dark Cherries' },
          { e: '🥛', n: 'Dairy Cream' }, { e: '🍬', n: 'Cherry Syrup' },
          { e: '🫙', n: 'Dutch Cocoa' }, { e: '🌾', n: 'Fine Wheat Flour' }
        ]
      },
      {
        id: 'c2',
        name: 'Classic Vanilla Blossom',
        emoji: '🍰',
        category: 'cakes',
        filterTag: 'special',
        badge: 'Classic Design',
        varietyTag: 'All Occasions',
        desc: 'Timeless floral vanilla cake design with pillowy golden sponge, silky smooth vanilla cream frosting, hand-piped shell borders, and edible sugar pearls.',
        varieties: ['Round Classic Single Tier', 'Mini Bento Cake Design', 'Tiered Wedding Style', 'Pastel Blossom Floral Theme'],
        designFeatures: ['Hand-Piped Cream Rosettes', 'Edible Sugar Pearls & Gold Dust', 'Madagascar Vanilla Essence', 'Eggless Preparation Available'],
        ingredients: [
          { e: '🌾', n: 'Fine Flour' }, { e: '🥛', n: 'Fresh Dairy Cream' },
          { e: '🫙', n: 'Pure Butter' }, { e: '🌿', n: 'Bourbon Vanilla' },
          { e: '🍬', n: 'Cane Sugar' }, { e: '🥛', n: 'Pure Whole Milk' }
        ]
      },
      {
        id: 'c3',
        name: 'Butterscotch Caramel Crunch',
        emoji: '🧁',
        category: 'cakes',
        filterTag: 'bestseller',
        badge: 'Crowd Favorite',
        varietyTag: 'Crunch & Drizzle',
        desc: 'Warm golden butterscotch sponge layered with rich toffee cream, finished with homemade cashew-almond praline crunch and warm caramel glaze drip.',
        varieties: ['Round Crunch Cake', 'Two-Tier Birthday Design', 'Caramel Drip Special', 'Custom Theme Topping'],
        designFeatures: ['Crunchy Roasted Nut Praline', 'Rich Golden Caramel Drip', 'Butterscotch Swirl Frosting', 'Eggless Option Available'],
        ingredients: [
          { e: '🫙', n: 'Golden Butter' }, { e: '🤎', n: 'Cashew Praline' },
          { e: '🥛', n: 'Toffee Cream' }, { e: '🌾', n: 'Fine Flour' },
          { e: '🍬', n: 'Brown Sugar' }, { e: '🌿', n: 'Butterscotch' }
        ]
      },
      {
        id: 'c4',
        name: 'Fresh Tropical Pineapple',
        emoji: '🍍',
        category: 'cakes',
        filterTag: 'fruit',
        badge: 'Fresh Fruit',
        varietyTag: 'Tropical & Light',
        desc: 'Moist vanilla sponge infused with real pineapple reduction, layered with whipped light cream, tender fruit tidbits, and toasted almond flakes on the rim.',
        varieties: ['Single Tier Round', 'Heart Shaped Romantic Design', 'Party Celebration Slab', 'Fresh Fruit Crown Tier'],
        designFeatures: ['Real Pineapple Chunk Filling', 'Almond Flake Rim Encrusting', 'Featherlight Whipped Cream', 'Eggless Option Available'],
        ingredients: [
          { e: '🍍', n: 'Fresh Pineapple' }, { e: '🌾', n: 'Cake Flour' },
          { e: '🥛', n: 'Light Cream' }, { e: '🫙', n: 'Butter' },
          { e: '🍬', n: 'Pure Sugar' }, { e: '🌿', n: 'Natural Essence' }
        ]
      },
      {
        id: 'c5',
        name: 'Belgian Chocolate Truffle',
        emoji: '🍫',
        category: 'cakes',
        filterTag: 'chocolate',
        badge: 'Signature Luxury',
        varietyTag: 'Dark & Decadent',
        desc: 'Our masterpiece cake featuring dense, fudgy cocoa sponge blanketed in velvety 55% dark chocolate ganache, handcrafted chocolate shards, and cocoa dusting.',
        varieties: ['Signature Round Truffle', 'Two-Tier Grand Celebration', 'Mirror Glaze Finish', 'Heart Shape Truffle'],
        designFeatures: ['55% Belgian Dark Ganache', 'Artisanal Chocolate Sails', 'Mirror Gloss Finish', 'Eggless Option Available'],
        ingredients: [
          { e: '🍫', n: 'Dark Chocolate' }, { e: '🥛', n: 'Heavy Cream' },
          { e: '🫙', n: 'Dutch Cocoa' }, { e: '🌾', n: 'Flour' },
          { e: '🫙', n: 'Pure Butter' }, { e: '🍬', n: 'Sugar' }
        ]
      },
      {
        id: 'c6',
        name: 'Velvet Royal Cream Cheese',
        emoji: '❤️',
        category: 'cakes',
        filterTag: 'special',
        badge: 'Special Celebration',
        varietyTag: 'Royal & Elegant',
        desc: 'Vibrant crimson velvet sponge with gentle hints of cocoa, finished in smooth cream cheese frosting, red velvet crumb coating, and white chocolate accents.',
        varieties: ['Round Velvet Design', 'Tiered Wedding Cake', 'Heart Shape Anniversary', 'Naked Cake Rustic Finish'],
        designFeatures: ['Authentic Cream Cheese Frosting', 'Velvet Crumb Rim Coating', 'White Chocolate Filigree', 'Eggless Option Available'],
        ingredients: [
          { e: '🌾', n: 'Cake Flour' }, { e: '🧀', n: 'Cream Cheese' },
          { e: '🥛', n: 'Buttermilk' }, { e: '🫙', n: 'Pure Butter' },
          { e: '🫙', n: 'Cocoa' }, { e: '🍬', n: 'Fine Sugar' }
        ]
      }
    ],
    sweets: [
      {
        id: 's1',
        name: 'Pure Ghee Mysore Pak',
        emoji: '🟡',
        category: 'sweets',
        filterTag: 'ghee',
        badge: 'Heritage Recipe',
        varietyTag: 'Pure Cow Ghee',
        desc: 'Traditional South Indian sweet made with aromatic country ghee, golden roasted besan (gram flour), and pure cane sugar. Soft, porous, melt-in-mouth texture.',
        varieties: ['Standard Box (250g / 500g / 1kg)', 'Gift Box Assortment', 'Wedding Festival Pack'],
        designFeatures: ['Prepared in 100% Pure Cow Ghee', 'No Artificial Preservatives', 'Freshly Prepared Daily'],
        ingredients: [
          { e: '🫘', n: 'Roasted Besan' }, { e: '🫙', n: 'Pure Cow Ghee' },
          { e: '🍬', n: 'Cane Sugar' }, { e: '🌿', n: 'Cardamom' }
        ]
      },
      {
        id: 's2',
        name: 'Tirunelveli Wheat Halwa',
        emoji: '🟠',
        category: 'sweets',
        filterTag: 'halwa',
        badge: 'Traditional',
        varietyTag: 'Slow Cooked',
        desc: 'Rich, glossy wheat milk halwa slow-cooked for hours in pure country ghee and caramelized sugar, generously garnished with roasted cashews.',
        varieties: ['Fresh Pack (250g / 500g / 1kg)', 'Festive Tin Packaging'],
        designFeatures: ['Traditional Slow-Cook Method', 'Studded with Roasted Cashews', 'Luscious Glossy Texture'],
        ingredients: [
          { e: '🌾', n: 'Fermented Wheat Milk' }, { e: '🫙', n: 'Country Ghee' },
          { e: '🍬', n: 'Caramel Sugar' }, { e: '🥜', n: 'Roasted Cashews' }
        ]
      },
      {
        id: 's3',
        name: 'Motichoor Ladoo',
        emoji: '🟤',
        category: 'sweets',
        filterTag: 'festive',
        badge: 'Festive Delight',
        varietyTag: 'Aromatic & Soft',
        desc: 'Delicate fine besan pearls cooked in saffron syrup, bound with pure ghee, melon seeds, and fragrant green cardamom.',
        varieties: ['Standard Box (6 / 12 / 24 pcs)', 'Pooja Special Box', 'Festival Hamper'],
        designFeatures: ['Fine Tiny Pearls (Motichoor)', 'Kashmiri Saffron Essence', 'Melon Seeds & Cashews'],
        ingredients: [
          { e: '🫘', n: 'Besan Pearls' }, { e: '🫙', n: 'Pure Ghee' },
          { e: '🍬', n: 'Saffron Syrup' }, { e: '🥜', n: 'Melon Seeds' }
        ]
      },
      {
        id: 's4',
        name: 'Gulab Jamun',
        emoji: '🔴',
        category: 'sweets',
        filterTag: 'festive',
        badge: 'Classic Favorite',
        varietyTag: 'Soft & Juicy',
        desc: 'Soft khoya dumplings fried golden brown and soaked in aromatic Damask rose-petal and green cardamom infused warm sugar syrup.',
        varieties: ['Box of 6, 12, or 24 Pieces', 'Mini Jamun Party Tub'],
        designFeatures: ['Pure Fresh Milk Khoya', 'Rose Water & Cardamom Syrup', 'Melt-in-Mouth Texture'],
        ingredients: [
          { e: '🥛', n: 'Fresh Khoya (Mawa)' }, { e: '🌾', n: 'Flour' },
          { e: '🌸', n: 'Rose Water' }, { e: '🫙', n: 'Cardamom' }
        ]
      },
      {
        id: 's5',
        name: 'Kaju Katli Diamond',
        emoji: '⬜',
        category: 'sweets',
        filterTag: 'ghee',
        badge: 'Premium Cashew',
        varietyTag: 'Silver Foiled',
        desc: 'Diamond-shaped cashew fudge crafted from hand-sorted Goan cashews ground fine and cooked with pure sugar, adorned with traditional silver foil.',
        varieties: ['Gift Box (250g / 500g / 1kg)', 'Diwali Special Hamper'],
        designFeatures: ['100% Premium Goan Cashews', 'Refined Diamond Cut', 'Silky Smooth Texture'],
        ingredients: [
          { e: '🥜', n: 'Premium Cashews' }, { e: '🍬', n: 'Fine Sugar' },
          { e: '🫙', n: 'Country Ghee' }, { e: '✨', n: 'Edible Silver Foil' }
        ]
      },
      {
        id: 's6',
        name: 'Rava Kesari',
        emoji: '🟡',
        category: 'sweets',
        filterTag: 'halwa',
        badge: 'Puja Special',
        varietyTag: 'Saffron Scented',
        desc: 'Fragrant roasted semolina simmered in pure ghee and scented with Kashmiri saffron, with golden fried cashews and sweet raisins.',
        varieties: ['Fresh Pack (250g / 500g)', 'Temple Special Offering Box'],
        designFeatures: ['Rich Cow Ghee Flavor', 'Real Kashmiri Saffron', 'Plump Golden Raisins'],
        ingredients: [
          { e: '🌾', n: 'Roasted Rava' }, { e: '🫙', n: 'Pure Ghee' },
          { e: '🌿', n: 'Saffron' }, { e: '🥜', n: 'Cashews & Raisins' }
        ]
      }
    ],
    karam: [
      {
        id: 'k1',
        name: 'Madras Special Mixture',
        emoji: '🫘',
        category: 'karam',
        filterTag: 'mixture',
        badge: 'Spicy & Crispy',
        varietyTag: 'Handcrafted',
        desc: 'Classic South Indian karam mixture of crispy omapodi, boondi, roasted peanuts, fried chana dal, and curry leaves seasoned with Guntur red chilli.',
        varieties: ['Pouch Pack (100g / 250g / 500g)', 'Family Snacking Tub'],
        designFeatures: ['Fried in Pure Groundnut Oil', 'Fragrant Curry Leaves & Hing', 'Crispy Tea-Time Crunch'],
        ingredients: [
          { e: '🌾', n: 'Gram & Rice Flour' }, { e: '🥜', n: 'Peanuts' },
          { e: '🌶️', n: 'Red Chilli' }, { e: '🌿', n: 'Curry Leaves' }
        ]
      },
      {
        id: 'k2',
        name: 'Butter Murukku',
        emoji: '🌀',
        category: 'karam',
        filterTag: 'murukku',
        badge: 'Crispy Classic',
        varietyTag: 'Butter Rich',
        desc: 'Delicate spiral murukku made with raw rice flour, urad flour, cumin, white sesame, and fresh butter that melts crisply in the mouth.',
        varieties: ['Pack of 100g, 250g, 500g', 'Festive Gift Tin'],
        designFeatures: ['Rich Country Butter Aroma', 'Fragrant Cumin & Sesame', 'Light Crunchy Bite'],
        ingredients: [
          { e: '🌾', n: 'Rice & Urad Flour' }, { e: '🫙', n: 'Fresh Butter' },
          { e: '🌿', n: 'Cumin & Sesame' }, { e: '🧂', n: 'Sea Salt' }
        ]
      },
      {
        id: 'k3',
        name: 'Crispy Thattai',
        emoji: '⭕',
        category: 'karam',
        filterTag: 'thattai',
        badge: 'Homemade Taste',
        varietyTag: 'Traditional',
        desc: 'Thin, crispy round rice crackers pressed by hand, studded with soaked chana dal, crushed peanuts, asafoetida, and curry leaves.',
        varieties: ['Pouch (100g / 250g / 500g)', 'Gokulashtami Special Pack'],
        designFeatures: ['Hand-Pressed Thin Discs', 'Studded with Crunchy Chana Dal', 'Traditional South Spicing'],
        ingredients: [
          { e: '🌾', n: 'Rice Flour' }, { e: '🥜', n: 'Peanuts & Chana' },
          { e: '🌶️', n: 'Red Chilli' }, { e: '🌿', n: 'Curry Leaves' }
        ]
      },
      {
        id: 'k4',
        name: 'Manapparai Seedai',
        emoji: '⚪',
        category: 'karam',
        filterTag: 'thattai',
        badge: 'Snack Favorite',
        varietyTag: 'Crunchy Bites',
        desc: 'Crunchy spherical karam bites made from roasted rice flour, grated fresh coconut, butter, and white sesame seeds.',
        varieties: ['Pouch (100g / 250g / 500g)', 'Snack Jar Packaging'],
        designFeatures: ['Fresh Coconut Infusion', 'Golden Toasted Sesame', 'Signature Manapparai Crunch'],
        ingredients: [
          { e: '🌾', n: 'Roasted Rice Flour' }, { e: '🫙', n: 'Fresh Coconut' },
          { e: '⚪', n: 'White Sesame' }, { e: '🫙', n: 'Butter' }
        ]
      },
      {
        id: 'k5',
        name: 'Ribbon Pakoda',
        emoji: '🎀',
        category: 'karam',
        filterTag: 'mixture',
        badge: 'Spiced Ribbons',
        varietyTag: 'Crisp & Light',
        desc: 'Delicate ribbon-shaped strips of seasoned gram flour and rice dough, gently spiced with ajwain (omam) and chilli powder.',
        varieties: ['Pouch (100g / 250g / 500g)', 'Festival Assorted Pack'],
        designFeatures: ['Fragrant Carom (Ajwain) Seeds', 'Ultra-Light Crisp Texture', 'Mild Golden Spice'],
        ingredients: [
          { e: '🌾', n: 'Gram & Rice Flour' }, { e: '🌶️', n: 'Red Chilli' },
          { e: '🌿', n: 'Ajwain (Omam)' }, { e: '🫙', n: 'Pure Oil' }
        ]
      },
      {
        id: 'k6',
        name: 'Handmade Kai Murukku',
        emoji: '🔵',
        category: 'karam',
        filterTag: 'murukku',
        badge: 'Artisanal Heritage',
        varietyTag: 'Hand-Rolled',
        desc: 'Traditional spiral murukku rolled by hand by experienced artisans for unmatched delicacy, spiral symmetry, and crisp lightness.',
        varieties: ['Standard Box (100g / 250g / 500g)', 'Wedding Seer Pack'],
        designFeatures: ['100% Hand-Twisted by Artisans', 'Traditional Wedding Seer Item', 'Extra Crunchy Flavour'],
        ingredients: [
          { e: '🌾', n: 'Raw Rice Flour' }, { e: '🫘', n: 'Urad Flour' },
          { e: '🫙', n: 'Butter' }, { e: '🌿', n: 'Sesame & Cumin' }
        ]
      }
    ]
  };

  // ── Continuous Marquee Ticker Items ──
  const TICKER_ITEMS = [
    'Handcrafted Celebration Cakes',
    'Pure Cow Ghee Sweets',
    '100% Pure & Hygienic Ingredients',
    'Crispy Handmade Karam',
    'Fresh Every Morning in Kumbakonam',
    'Custom Theme & Tier Cakes',
    'Serving Kumbakonam Since 2010'
  ];

  // ── Initialize Current Page ──
  document.addEventListener('DOMContentLoaded', () => {
    setupHeaderScroll();
    setupMobileMenu();
    setupTicker();
    setupProductModal();
    setupContactForm();
    setupCounterObserver();

    // Determine current page and render products
    const pageType = document.body.dataset.pageType;

    if (pageType === 'cakes') {
      renderShowcaseCards('cakes', 'cakesContainer', 'all');
      setupFilterTabs('cakeFilterTabs', 'cakes', 'cakesContainer');
    } else if (pageType === 'sweets') {
      renderShowcaseCards('sweets', 'sweetsContainer', 'all');
      setupFilterTabs('sweetFilterTabs', 'sweets', 'sweetsContainer');
    } else if (pageType === 'karam') {
      renderShowcaseCards('karam', 'karamContainer', 'all');
      setupFilterTabs('karamFilterTabs', 'karam', 'karamContainer');
    } else {
      // Home Page
      setupHeroWhiteBakeryCanvas();
    }
  });

  // ── Header Scroll Blur ──
  function setupHeaderScroll() {
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // ── Mobile Menu Toggle ──
  function setupMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    if (!navToggle || !mobileMenu) return;

    function closeMobileMenu() {
      navToggle.classList.remove('open');
      mobileMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }

    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.classList.toggle('open');
      mobileMenu.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    });
  }

  // ── Ticker Ticker Bar ──
  function setupTicker() {
    const track = document.getElementById('tickerTrack');
    if (!track) return;
    const duplicated = TICKER_ITEMS.concat(TICKER_ITEMS);
    track.innerHTML = duplicated.map(item => `
      <div class="ticker-item">
        <span class="ticker-star">★</span>
        <span>${item}</span>
      </div>
    `).join('');
  }

  // ── Counter Numbers Animation ──
  function setupCounterObserver() {
    const statNums = document.querySelectorAll('[data-count]');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !e.target.dataset.counted) {
          e.target.dataset.counted = 'true';
          const target = parseInt(e.target.getAttribute('data-count'), 10);
          const suffix = e.target.getAttribute('data-suffix') || '';
          let current = 0;
          const duration = 1600;
          const step = target / (duration / 16);
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            e.target.textContent = Math.round(current) + suffix;
          }, 16);
        }
      });
    }, { threshold: 0.2 });
    statNums.forEach(n => observer.observe(n));
  }

  // ── Render Showcase Cards ──
  function renderShowcaseCards(type, containerId, activeFilter = 'all') {
    const container = document.getElementById(containerId);
    if (!container) return;
    let items = PRODUCTS[type] || [];

    if (activeFilter !== 'all') {
      items = items.filter(x => x.filterTag === activeFilter);
    }

    container.innerHTML = items.map(p => `
      <div class="showcase-card" data-id="${sanitize(p.id)}" data-type="${sanitize(type)}"
           role="button" tabindex="0" aria-label="View details for ${sanitize(p.name)}">
        <div class="showcase-card-img-wrap">
          <span class="showcase-card-emoji" role="img" aria-label="${sanitize(p.name)}">${p.emoji}</span>
          ${p.badge ? `<span class="showcase-card-badge">${sanitize(p.badge)}</span>` : ''}
        </div>
        <div class="showcase-card-body">
          <h3 class="showcase-card-title">${sanitize(p.name)}</h3>
          <p class="showcase-card-desc">${sanitize(p.desc)}</p>
          <div class="showcase-card-foot">
            <span class="showcase-variety-tag">${sanitize(p.varietyTag || 'Available Variety')}</span>
            <span class="showcase-view-link">View Details <span>→</span></span>
          </div>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.showcase-card').forEach(card => {
      card.addEventListener('click', function () {
        const id = this.dataset.id;
        const ctype = this.dataset.type;
        openProductShowcaseModal(id, ctype);
      });
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          const id = this.dataset.id;
          const ctype = this.dataset.type;
          openProductShowcaseModal(id, ctype);
        }
      });
    });
  }

  // ── Filter Tabs Handling ──
  function setupFilterTabs(tabsWrapId, productType, containerId) {
    const tabsWrap = document.getElementById(tabsWrapId);
    if (!tabsWrap) return;

    tabsWrap.querySelectorAll('.filter-pill').forEach(btn => {
      btn.addEventListener('click', function () {
        tabsWrap.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const filter = this.dataset.filter;
        renderShowcaseCards(productType, containerId, filter);
      });
    });
  }

  // ── Modal Handling (Design Showcase Details Only — No Ordering) ──
  let modalBg, modalBox;

  function setupProductModal() {
    modalBg = document.getElementById('modalBg');
    modalBox = document.getElementById('modalBox');

    if (modalBg) {
      modalBg.addEventListener('click', e => {
        if (e.target === modalBg) closeProductModal();
      });
    }

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeProductModal();
    });
  }

  function closeProductModal() {
    if (modalBg) modalBg.classList.remove('show');
    document.body.style.overflow = '';
  }

  function openProductShowcaseModal(id, type) {
    const p = PRODUCTS[type]?.find(x => x.id === id);
    if (!p || !modalBg || !modalBox) return;

    const varietiesHtml = (p.varieties || []).map(v => `
      <div class="showcase-feature-item">
        <span>✨</span> <span>${sanitize(v)}</span>
      </div>
    `).join('');

    const featuresHtml = (p.designFeatures || []).map(f => `
      <div class="showcase-feature-item">
        <span>🎂</span> <span>${sanitize(f)}</span>
      </div>
    `).join('');

    const ingsHtml = (p.ingredients || []).map(ing => `
      <div class="ing-chip">
        <span style="font-size:1.1rem;display:block;margin-bottom:2px;">${ing.e}</span>
        ${sanitize(ing.n)}
      </div>
    `).join('');

    modalBox.innerHTML = `
      <div class="modal-top">
        <button class="modal-x" id="modalCloseBtn" aria-label="Close modal">✕</button>
        <span class="modal-em" role="img" aria-label="${sanitize(p.name)}">${p.emoji}</span>
        <h2 class="modal-name">${sanitize(p.name)}</h2>
        <span class="section-eyebrow" style="margin-top:4px;">${sanitize(p.badge || 'Showcase')}</span>
      </div>
      <div class="modal-body">
        <p class="modal-desc-txt">${sanitize(p.desc)}</p>

        <h3 class="modal-sec-h">🎨 Available Varieties &amp; Sizes</h3>
        <div class="showcase-features-list">${varietiesHtml}</div>

        ${p.designFeatures ? `
          <h3 class="modal-sec-h">✨ Artisan Highlights &amp; Customization</h3>
          <div class="showcase-features-list">${featuresHtml}</div>
        ` : ''}

        <h3 class="modal-sec-h">🧁 Fresh Ingredients</h3>
        <div class="ing-grid">${ingsHtml}</div>

        <div class="modal-actions">
          <button class="btn btn-outline" id="modalCloseBtn2">
            Close Details
          </button>
          <a class="btn btn-primary" href="https://wa.me/919894030744?text=Hello%20Cream%20Boy%20Bakery!%20I%20am%20interested%20in%20the%20${encodeURIComponent(p.name)}%20variety." target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:8px;">
            <svg class="icon-svg" style="width:18px;height:18px;" viewBox="0 0 24 24"><path d="M12.031 2C6.51 2 2.022 6.488 2.022 12.009c0 1.947.56 3.766 1.531 5.309L2 22l4.828-1.527a9.96 9.96 0 0 0 5.203 1.458h.004c5.52 0 10.01-4.488 10.01-10.009C22.045 6.488 17.551 2 12.031 2zm0 18.254a8.27 8.27 0 0 1-4.225-1.157l-.303-.18-3.137.992.998-3.056-.197-.315a8.277 8.277 0 0 1-1.272-4.529c0-4.57 3.719-8.289 8.289-8.289 4.57 0 8.288 3.719 8.288 8.289 0 4.57-3.718 8.245-8.288 8.245zm4.542-6.195c-.249-.125-1.472-.726-1.7-.809-.228-.083-.394-.125-.56.125-.166.249-.643.809-.788.975-.145.166-.29.187-.539.062-.249-.125-1.05-.387-2-1.234-.739-.659-1.238-1.473-1.383-1.722-.145-.249-.015-.383.11-.507.112-.112.249-.29.373-.435.125-.145.166-.249.249-.415.083-.166.042-.311-.021-.435-.062-.125-.56-1.349-.768-1.847-.202-.485-.407-.419-.56-.427-.145-.008-.311-.01-.477-.01-.166 0-.436.062-.664.311-.228.249-.871.851-.871 2.075s.892 2.407 1.016 2.573c.125.166 1.755 2.68 4.252 3.757.594.256 1.058.409 1.421.524.597.19 1.14.163 1.569.099.479-.071 1.472-.602 1.68-1.183.207-.581.207-1.079.145-1.183-.062-.104-.228-.166-.477-.29z"/></svg>
            <span>Inquire on WhatsApp</span>
          </a>
        </div>
      </div>
    `;

    modalBox.querySelector('#modalCloseBtn')?.addEventListener('click', closeProductModal);
    modalBox.querySelector('#modalCloseBtn2')?.addEventListener('click', closeProductModal);

    modalBg.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  // ── Contact Form (Sends WhatsApp Inquiry) ──
  function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = sanitize(form.querySelector('[name="name"]')?.value?.trim() || '');
      const phone = sanitize(form.querySelector('[name="phone"]')?.value?.trim() || '');
      const type = sanitize(form.querySelector('[name="orderType"]')?.value?.trim() || '');
      const message = sanitize(form.querySelector('[name="message"]')?.value?.trim() || '');

      if (!name || !phone) {
        alert('Please provide your name and phone number so we can respond to your enquiry.');
        return;
      }

      const wa = `Hello Cream Boy Bakery! 🎂\n\n`
               + `👤 *Name:* ${name}\n`
               + `📞 *Phone:* ${phone}\n`
               + `🏷️ *Topic:* ${type || 'Bakery Inquiries'}\n`
               + `📝 *Message:* ${message || 'I would like to inquire about your bakery products.'}\n\n`
               + `Thank you!`;

      window.open(buildWhatsAppUrl(wa), '_blank', 'noopener,noreferrer');
      form.reset();
    });
  }

  // ── Clean White Bakery Canvas Animation (Home Page) ──
  function setupHeroWhiteBakeryCanvas() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;

    function resize() {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const particles = [];
    const PARTICLE_COUNT = 45;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.2 + 0.6,
        speedY: -(Math.random() * 0.5 + 0.2),
        speedX: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.4 + 0.15,
        life: Math.random() * 180,
        maxLife: Math.random() * 180 + 90,
      });
    }

    const steamPuffs = Array.from({ length: 12 }, () => ({
      x: width * 0.78 + (Math.random() - 0.5) * 120,
      y: height * 0.62 + Math.random() * 40,
      radius: Math.random() * 18 + 8,
      speedY: -(Math.random() * 0.6 + 0.3),
      speedX: (Math.random() - 0.5) * 0.2,
      alpha: Math.random() * 0.08 + 0.03,
      expand: Math.random() * 0.1 + 0.04,
    }));

    let time = 0;

    function drawArtisanCakeTurntable(cx, cy, scale) {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(scale, scale);

      const rot = time * 0.016;

      // Soft Shadow on White
      ctx.beginPath();
      ctx.ellipse(0, 95, 140, 36, 0, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(68, 64, 60, 0.07)';
      ctx.filter = 'blur(8px)';
      ctx.fill();
      ctx.filter = 'none';

      // Porcelain & Gold Stand
      ctx.beginPath();
      ctx.ellipse(0, 75, 130, 34, 0, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#c58a17';
      ctx.stroke();

      ctx.beginPath();
      ctx.ellipse(0, 80, 128, 32, 0, 0, Math.PI);
      ctx.fillStyle = '#f8f4ec';
      ctx.fill();

      // Lower Tier Cake
      const t1W = 100;
      const t1H = 44;
      const t1Y = 38;

      ctx.beginPath();
      ctx.rect(-t1W, t1Y - t1H, t1W * 2, t1H);
      const cakeBaseGrad = ctx.createLinearGradient(-t1W, 0, t1W, 0);
      cakeBaseGrad.addColorStop(0, '#f2e8db');
      cakeBaseGrad.addColorStop(0.5, '#fffdfa');
      cakeBaseGrad.addColorStop(1, '#ebdccb');
      ctx.fillStyle = cakeBaseGrad;
      ctx.fill();

      ctx.beginPath();
      ctx.ellipse(0, t1Y, t1W, 26, 0, 0, Math.PI);
      ctx.fillStyle = '#dfcdb7';
      ctx.fill();

      ctx.beginPath();
      ctx.ellipse(0, t1Y - t1H, t1W, 26, 0, 0, Math.PI * 2);
      ctx.fillStyle = '#fefcf8';
      ctx.fill();

      // Chocolate Drips
      for (let d = -t1W + 12; d < t1W - 8; d += 18) {
        const dripLen = Math.sin(d * 0.12 + rot) * 10 + 14;
        ctx.beginPath();
        ctx.moveTo(d, t1Y - t1H);
        ctx.quadraticCurveTo(d + 4, t1Y - t1H + dripLen, d + 6, t1Y - t1H + dripLen);
        ctx.quadraticCurveTo(d + 8, t1Y - t1H + dripLen, d + 12, t1Y - t1H);
        ctx.fillStyle = '#3c2415';
        ctx.fill();
      }

      // Upper Tier Cake
      const t2W = 68;
      const t2H = 40;
      const t2Y = 2;

      ctx.beginPath();
      ctx.rect(-t2W, t2Y - t2H, t2W * 2, t2H);
      const tier2Grad = ctx.createLinearGradient(-t2W, 0, t2W, 0);
      tier2Grad.addColorStop(0, '#f9e7e7');
      tier2Grad.addColorStop(0.5, '#fff8f8');
      tier2Grad.addColorStop(1, '#f3d9d9');
      ctx.fillStyle = tier2Grad;
      ctx.fill();

      ctx.beginPath();
      ctx.ellipse(0, t2Y - t2H, t2W, 18, 0, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();

      // Rosettes
      const rosetteCount = 7;
      for (let r = 0; r < rosetteCount; r++) {
        const angle = (r / rosetteCount) * Math.PI * 2 + rot;
        const rx = Math.cos(angle) * (t2W - 10);
        const ry = (t2Y - t2H) + Math.sin(angle) * 12;

        ctx.beginPath();
        ctx.arc(rx, ry, 7.5, 0, Math.PI * 2);
        ctx.fillStyle = '#fffefc';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.08)';
        ctx.shadowBlur = 3;
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.beginPath();
        ctx.arc(rx - 1.5, ry - 1.5, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#fef3c7';
        ctx.fill();
      }

      // Cherries
      [0, 2.1, 4.2].forEach(ca => {
        const cxC = Math.cos(ca + rot * 0.9) * 14;
        const cyC = (t2Y - t2H) + Math.sin(ca + rot * 0.9) * 5 - 6;

        ctx.beginPath();
        ctx.arc(cxC, cyC, 6.5, 0, Math.PI * 2);
        const cGrad = ctx.createRadialGradient(cxC - 2, cyC - 2, 1, cxC, cyC, 7);
        cGrad.addColorStop(0, '#ef4444');
        cGrad.addColorStop(0.6, '#dc2626');
        cGrad.addColorStop(1, '#7c1a22');
        ctx.fillStyle = cGrad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(cxC - 2, cyC - 2, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fill();
      });

      // Confectioner's Piping Nozzle
      const pipeAngle = -rot * 2.2;
      const pipeX = Math.cos(pipeAngle) * (t2W + 4);
      const pipeY = (t2Y - t2H) + Math.sin(pipeAngle) * 14 - 10;

      ctx.save();
      ctx.translate(pipeX, pipeY);
      ctx.rotate(0.25);

      ctx.beginPath();
      ctx.moveTo(-5, -22);
      ctx.lineTo(5, -22);
      ctx.lineTo(2.5, 0);
      ctx.lineTo(-2.5, 0);
      ctx.closePath();
      ctx.fillStyle = '#cbd5e1';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(0, 2.5, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#fffdf9';
      ctx.fill();

      ctx.restore();

      ctx.restore();
    }

    function render() {
      ctx.clearRect(0, 0, width, height);
      time += 1;

      // Warm Soft Ambient Lighting
      const ambientGlow = ctx.createRadialGradient(
        width * 0.78, height * 0.5, 10,
        width * 0.78, height * 0.5, width * 0.5
      );
      ambientGlow.addColorStop(0, 'rgba(245, 211, 132, 0.22)');
      ambientGlow.addColorStop(0.5, 'rgba(245, 211, 132, 0.05)');
      ambientGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = ambientGlow;
      ctx.fillRect(0, 0, width, height);

      // Steam Puffs
      steamPuffs.forEach(s => {
        s.y += s.speedY;
        s.x += s.speedX;
        s.radius += s.expand;
        s.alpha *= 0.99;

        if (s.y < height * 0.25 || s.alpha < 0.003) {
          s.x = width * 0.78 + (Math.random() - 0.5) * 120;
          s.y = height * 0.62 + Math.random() * 40;
          s.radius = Math.random() * 16 + 8;
          s.alpha = Math.random() * 0.07 + 0.02;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 235, 220, ${s.alpha})`;
        ctx.fill();
      });

      // Turntable on Desktop, Tablet & Mobile Viewports
      let cakeX, cakeY, cakeScale;
      if (width > 960) {
        cakeX = width * 0.76;
        cakeY = height * 0.52 + Math.sin(time * 0.02) * 3;
        cakeScale = Math.min(width / 1300, 1.05);
      } else if (width > 680) {
        cakeX = width * 0.72;
        cakeY = height * 0.55 + Math.sin(time * 0.02) * 3;
        cakeScale = 0.85;
      } else {
        cakeX = width * 0.5;
        cakeY = height * 0.78 + Math.sin(time * 0.02) * 2;
        cakeScale = Math.max(0.55, width / 650);
      }
      drawArtisanCakeTurntable(cakeX, cakeY, cakeScale);

      // Golden Dust Sparkles
      particles.forEach(p => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.life += 1;

        if (p.life > p.maxLife || p.y < 0) {
          p.x = Math.random() * width;
          p.y = height + 10;
          p.life = 0;
          p.alpha = Math.random() * 0.4 + 0.15;
        }

        const fade = Math.sin((p.life / p.maxLife) * Math.PI);
        const a = p.alpha * fade;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(197, 138, 23, ${a * 0.6})`;
        ctx.fill();
      });

      requestAnimationFrame(render);
    }

    render();
  }

  // Global API
  window.CreamBoyApp = {
    openProductShowcaseModal
  };

})();
