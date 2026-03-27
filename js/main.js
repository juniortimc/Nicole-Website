// unwritten — main.js

// --- Product Data (Task 5.1) ---
const products = [
  {
    id: 'linen-wrap-dress',
    name: 'Linen Wrap Dress',
    price: 149900,
    image: 'images/linen-wrap-dress.jpg',
    hoverImage: 'images/linen-wrap-dress-hover.jpg',
    fabric: '100% French Linen',
    care: ['Hand wash cold', 'Lay flat to dry', 'Cool iron if needed']
  },
  {
    id: 'cotton-wide-leg-trousers',
    name: 'Cotton Wide-Leg Trousers',
    price: 119900,
    image: 'images/cotton-wide-leg-trousers.jpg',
    hoverImage: 'images/cotton-wide-leg-trousers-hover.jpg',
    fabric: '100% Organic Cotton',
    care: ['Machine wash cold', 'Tumble dry low', 'Warm iron']
  },
  {
    id: 'floral-midi-skirt',
    name: 'Floral Midi Skirt',
    price: 99900,
    image: 'images/floral-midi-skirt.jpg',
    hoverImage: 'images/floral-midi-skirt-hover.jpg',
    fabric: '100% Viscose',
    care: ['Hand wash cold', 'Do not tumble dry', 'Cool iron on reverse']
  },
  {
    id: 'sage-silk-blouse',
    name: 'Sage Silk Blouse',
    price: 89900,
    image: 'images/sage-silk-blouse.jpg',
    hoverImage: 'images/sage-silk-blouse-hover.jpg',
    fabric: '100% Mulberry Silk',
    care: ['Dry clean only', 'Store on padded hanger']
  }
];

// --- Currency Formatting (Task 5.2) ---
function formatZAR(priceInCents) {
  const rands = Math.floor(priceInCents / 100);
  const cents = priceInCents % 100;

  // Add commas to the integer part manually
  const randStr = String(rands);
  let withCommas = '';
  const len = randStr.length;
  for (let i = 0; i < len; i++) {
    if (i > 0 && (len - i) % 3 === 0) {
      withCommas += ',';
    }
    withCommas += randStr[i];
  }

  // Always show exactly 2 decimal places
  const centStr = String(cents).padStart(2, '0');

  return 'R' + withCommas + '.' + centStr;
}

// --- Render Product Card (Task 6.3) ---
function renderProductCard(product) {
  var careHtml = '';
  if (product.care && product.care.length) {
    for (var c = 0; c < product.care.length; c++) {
      careHtml += '<li>' + product.care[c] + '</li>';
    }
  }

  return '<div class="product-card">' +
    '<div class="product-card-image-wrapper">' +
      '<img src="' + product.image + '" alt="' + product.name + '" class="product-card-image" loading="lazy">' +
      '<div class="quick-add-overlay">' +
        '<button class="quick-add-btn">Quick Add</button>' +
      '</div>' +
    '</div>' +
    '<div class="product-card-info">' +
      '<h3 class="product-card-name">' + product.name + '</h3>' +
      '<p class="product-card-price">' + formatZAR(product.price) + '</p>' +
    '</div>' +
    '<div class="fabric-care-dropdown">' +
      '<button class="fabric-care-toggle" aria-expanded="false" aria-label="Toggle fabric and care details">Fabric &amp; Care</button>' +
      '<div class="fabric-care-content">' +
        (product.fabric ? '<p class="fabric-care-fabric"><strong>Fabric:</strong> ' + product.fabric + '</p>' : '') +
        (careHtml ? '<ul class="fabric-care-list">' + careHtml + '</ul>' : '') +
      '</div>' +
    '</div>' +
  '</div>';
}

// --- Fabric & Care Dropdown Toggle (Task 7.2) ---
function toggleDropdown(toggleBtn) {
  var dropdown = toggleBtn.closest('.fabric-care-dropdown');
  if (!dropdown) return;
  var isOpen = dropdown.classList.toggle('is-open');
  toggleBtn.setAttribute('aria-expanded', String(isOpen));
}

// --- Gallery Data ---
var galleryImages = [
  { src: 'images/gallery-cad-sketch-1.jpg', alt: 'Technical CAD pattern sketch', category: 'process' },
  { src: 'images/gallery-lavender-dress.jpg', alt: 'Nicole reading in a lavender and pink dress', category: 'range' },
  { src: 'images/gallery-cad-sketch-2.jpg', alt: 'Garment construction technical drawing', category: 'process' },
  { src: 'images/gallery-portrait-bw.jpg', alt: 'Black and white portrait in the field', category: 'range' },
  { src: 'images/gallery-pattern-draft.jpg', alt: 'Pattern drafting on fabric', category: 'process' },
  { src: 'images/gallery-orange-pink.jpg', alt: 'Vibrant orange and pink coordinated sets', category: 'range' },
  { src: 'images/gallery-fabric-prep.jpg', alt: 'Fabric preparation and cutting', category: 'process' },
  { src: 'images/gallery-floral-detail.jpg', alt: 'Close-up of floral waist detail on orange jumpsuit', category: 'range' },
  { src: 'images/gallery-construction-1.jpg', alt: 'Garment construction in progress', category: 'process' },
  { src: 'images/gallery-field-shot-1.jpg', alt: 'Lifestyle field shot from unwritten collection', category: 'range' },
  { src: 'images/gallery-draping.jpg', alt: 'Fabric draping on mannequin', category: 'process' },
  { src: 'images/gallery-studio-portrait.jpg', alt: 'Studio portrait in handcrafted garment', category: 'range' },
  { src: 'images/gallery-toile-fitting.jpg', alt: 'Toile fitting and adjustments', category: 'process' },
  { src: 'images/gallery-golden-hour.jpg', alt: 'Golden hour lifestyle shot', category: 'range' },
  { src: 'images/gallery-sewing-detail.jpg', alt: 'Close-up sewing machine detail', category: 'process' },
  { src: 'images/gallery-corseted-gown.jpg', alt: 'Nicole in the pink and blue corseted gown', category: 'range' },
  { src: 'images/gallery-flat-lay.jpg', alt: 'Flat lay of garment pieces', category: 'process' },
  { src: 'images/gallery-walking-field.jpg', alt: 'Walking through the field in linen dress', category: 'range' },
  { src: 'images/gallery-embroidery.jpg', alt: 'Hand embroidery detail', category: 'process' },
  { src: 'images/gallery-sunset-silhouette.jpg', alt: 'Sunset silhouette in flowing garment', category: 'range' },
  { src: 'images/gallery-mood-board.jpg', alt: 'Design mood board and inspiration', category: 'process' },
  { src: 'images/gallery-vineyard.jpg', alt: 'Stellenbosch vineyard lifestyle shot', category: 'range' }
];

var GALLERY_PAGE_SIZE = 9;

function renderGalleryItem(item) {
  return '<div class="gallery-item" data-category="' + item.category + '">' +
    '<img src="' + item.src + '" alt="' + item.alt + '" loading="lazy">' +
    '<div class="gallery-caption">Designed &amp; Handcrafted by Nicole Venter</div>' +
  '</div>';
}

// --- Inject Product Cards on DOM Load (Task 6.5) ---
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function () {

    // --- Gallery (Masonry Grid with Load More + Filters) ---
    var galleryGrid = document.getElementById('gallery-grid');
    var loadMoreBtn = document.getElementById('gallery-load-more');
    var galleryFilters = document.querySelectorAll('.gallery-filter');
    var currentFilter = 'all';
    var visibleCount = 0;

    function getFilteredImages() {
      if (currentFilter === 'all') return galleryImages;
      return galleryImages.filter(function (img) { return img.category === currentFilter; });
    }

    function renderGallery(reset) {
      var filtered = getFilteredImages();
      if (reset) {
        visibleCount = 0;
        if (galleryGrid) galleryGrid.innerHTML = '';
      }
      var end = Math.min(visibleCount + GALLERY_PAGE_SIZE, filtered.length);
      var html = '';
      for (var i = visibleCount; i < end; i++) {
        html += renderGalleryItem(filtered[i]);
      }
      if (galleryGrid) galleryGrid.innerHTML += html;
      visibleCount = end;
      if (loadMoreBtn) {
        if (visibleCount >= filtered.length) {
          loadMoreBtn.classList.add('is-hidden');
        } else {
          loadMoreBtn.classList.remove('is-hidden');
        }
      }
    }

    if (galleryGrid) {
      renderGallery(true);
    }

    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', function () {
        renderGallery(false);
      });
    }

    if (galleryFilters.length) {
      galleryFilters.forEach(function (btn) {
        btn.addEventListener('click', function () {
          galleryFilters.forEach(function (b) { b.classList.remove('is-active'); });
          btn.classList.add('is-active');
          currentFilter = btn.getAttribute('data-filter');
          renderGallery(true);
        });
      });
    }

    // --- Fabric & Care Dropdown Event Delegation (Task 7.2) ---
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.fabric-care-toggle');
      if (btn) {
        toggleDropdown(btn);
      }
    });

    // --- Newsletter Form Validation (Task 10.4) ---
    var newsletterForm = document.querySelector('.newsletter-form');

    // --- Mobile Menu Toggle (Task 11.2) ---
    var menuToggle = document.querySelector('.mobile-menu-toggle');
    var navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', function () {
        var isOpen = navLinks.classList.toggle('is-open');
        menuToggle.classList.toggle('is-active');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
      });

      // Close menu when a nav link is clicked
      navLinks.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
          navLinks.classList.remove('is-open');
          menuToggle.classList.remove('is-active');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    }

    if (newsletterForm) {
      newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var input = newsletterForm.querySelector('.newsletter-input');
        var message = newsletterForm.querySelector('.newsletter-message');
        var email = input ? input.value.trim() : '';
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Reset message classes
        message.classList.remove('error', 'success');

        if (!email) {
          message.textContent = 'Please enter your email address.';
          message.classList.add('error');
        } else if (!emailRegex.test(email)) {
          message.textContent = 'Please enter a valid email address.';
          message.classList.add('error');
        } else {
          message.textContent = 'Thank you for joining the journey.';
          message.classList.add('success');
          input.value = '';
        }
      });
    }

    // --- Coming Soon Form Validation (Phase 1) ---
    var comingSoonForm = document.querySelector('.coming-soon-form');
    if (comingSoonForm) {
      comingSoonForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var input = comingSoonForm.querySelector('.coming-soon-input');
        var message = comingSoonForm.querySelector('.coming-soon-message');
        var email = input ? input.value.trim() : '';
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        message.classList.remove('error', 'success');

        if (!email) {
          message.textContent = 'Please enter your email address.';
          message.classList.add('error');
        } else if (!emailRegex.test(email)) {
          message.textContent = 'Please enter a valid email address.';
          message.classList.add('error');
        } else {
          message.textContent = "You're on the list. We'll be in touch.";
          message.classList.add('success');
          input.value = '';
        }
      });
    }
  });
}

// --- Module export for testing (works in browser and Node.js) ---
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { formatZAR, products, renderProductCard, toggleDropdown, galleryImages, renderGalleryItem, GALLERY_PAGE_SIZE };
}
