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

// --- Gallery Data (real images from assets/Images/) ---
var galleryImages = [
  // Collection (lookbook — model shots)
  { src: 'assets/Images/lookbook/013F1C03-CFDC-4849-B8CF-C1C97BAC215E_1_105_c.jpeg', alt: 'Collection lookbook shot 1', category: 'collection' },
  { src: 'assets/Images/lookbook/172F0D2B-6281-4E1A-AC3B-B993872FC835.jpeg', alt: 'Collection lookbook shot 2', category: 'collection' },
  { src: 'assets/Images/lookbook/1C19BA58-B11D-41BB-8C63-0D871CAE1991_1_105_c.jpeg', alt: 'Collection lookbook shot 3', category: 'collection' },
  { src: 'assets/Images/lookbook/38E2E51E-1242-4A69-95F5-C90FF674D9DD_1_105_c.jpeg', alt: 'Collection lookbook shot 4', category: 'collection' },
  { src: 'assets/Images/lookbook/41853AD6-76F9-48B9-A029-27C39E7C0B0A_1_105_c.jpeg', alt: 'Collection lookbook shot 5', category: 'collection' },
  { src: 'assets/Images/lookbook/4B2189F9-9ACA-4D75-8FC6-D7F4E9B242C1_1_105_c.jpeg', alt: 'Collection lookbook shot 6', category: 'collection' },
  { src: 'assets/Images/lookbook/5D2C7032-600E-44BB-8A76-FAAC607E1334_1_105_c.jpeg', alt: 'Collection lookbook shot 7', category: 'collection' },
  { src: 'assets/Images/lookbook/721E2420-6E0D-4B6C-8577-79C94DB1398D_1_105_c.jpeg', alt: 'Collection lookbook shot 8', category: 'collection' },
  { src: 'assets/Images/lookbook/A038C0D2-0162-4BB9-99E6-8CE76B398651_1_105_c.jpeg', alt: 'Collection lookbook shot 9', category: 'collection' },
  { src: 'assets/Images/lookbook/A08EF800-67CC-4FC4-AB36-AB502D3A9B3E_1_105_c.jpeg', alt: 'Collection lookbook shot 10', category: 'collection' },
  { src: 'assets/Images/lookbook/A2245CFA-389A-4C3D-862D-52DE911F5BF9_1_105_c.jpeg', alt: 'Collection lookbook shot 11', category: 'collection' },
  { src: 'assets/Images/lookbook/A6B76AA6-86A1-45D2-8D6D-8A3BF432CA1F_1_105_c.jpeg', alt: 'Collection lookbook shot 12', category: 'collection' },
  { src: 'assets/Images/lookbook/B6E32A37-5F0D-4E2F-9AAB-E032C6F0AAA4_1_105_c.jpeg', alt: 'Collection lookbook shot 13', category: 'collection' },
  { src: 'assets/Images/lookbook/BBD07274-A36F-4D31-8BCE-6560A577276E_1_105_c.jpeg', alt: 'Collection lookbook shot 14', category: 'collection' },
  { src: 'assets/Images/lookbook/BEC4E60E-1367-4877-B375-F74D65196030_1_105_c.jpeg', alt: 'Collection lookbook shot 15', category: 'collection' },
  { src: 'assets/Images/lookbook/BF2FCB71-2A21-46A4-8D5B-47D003B1C3A6.jpeg', alt: 'Collection lookbook shot 16', category: 'collection' },
  { src: 'assets/Images/lookbook/C15898F6-4363-40BF-AEB0-98D59807646D_1_105_c.jpeg', alt: 'Collection lookbook shot 17', category: 'collection' },
  { src: 'assets/Images/lookbook/C58F111C-C7F9-44D7-B292-E30F5DA748F5_1_105_c.jpeg', alt: 'Collection lookbook shot 18', category: 'collection' },
  { src: 'assets/Images/lookbook/CA801E16-A0FB-4380-822D-76B45A210855.jpeg', alt: 'Collection lookbook shot 19', category: 'collection' },
  { src: 'assets/Images/lookbook/D3971B71-AD0F-495F-ACF8-4E381F0C0F13_1_105_c.jpeg', alt: 'Collection lookbook shot 20', category: 'collection' },
  { src: 'assets/Images/lookbook/E4B41311-3695-4512-98A1-C2BD1B7DC601_1_105_c.jpeg', alt: 'Collection lookbook shot 21', category: 'collection' },
  { src: 'assets/Images/lookbook/EEBE3131-F9A3-4B86-9BF8-E22A3A210244_1_105_c.jpeg', alt: 'Collection lookbook shot 22', category: 'collection' },
  { src: 'assets/Images/lookbook/F3AEF5FC-2C47-4CEB-BB13-78E687C6FBC0.jpeg', alt: 'Collection lookbook shot 23', category: 'collection' },
  { src: 'assets/Images/lookbook/F58BFC9E-11CA-4787-9B3B-AEC612179C5B.jpeg', alt: 'Collection lookbook shot 24', category: 'collection' },
  // The Process (studio — mannequin/construction shots)
  { src: 'assets/Images/studio/02A38BDF-485A-4E0E-84E8-5706DEFE9FE5_1_105_c.jpeg', alt: 'Studio process shot 1', category: 'process' },
  { src: 'assets/Images/studio/264E8922-2CC6-4B0A-88E6-A5E4BE482373_4_5005_c.jpeg', alt: 'Studio process shot 2', category: 'process' },
  { src: 'assets/Images/studio/352FA296-2098-42B1-86E5-5161309EA09A_4_5005_c.jpeg', alt: 'Studio process shot 3', category: 'process' },
  { src: 'assets/Images/studio/367CFC0D-81FA-490E-9934-558C0E4C3977_1_105_c.jpeg', alt: 'Studio process shot 4', category: 'process' },
  { src: 'assets/Images/studio/3DE609E7-A290-4319-B4F8-E1F9F8BA311F_4_5005_c.jpeg', alt: 'Studio process shot 5', category: 'process' },
  { src: 'assets/Images/studio/3F3EFC85-EA2D-401E-8A76-18DEE9DA0E98_4_5005_c.jpeg', alt: 'Studio process shot 6', category: 'process' },
  { src: 'assets/Images/studio/446C7034-1F09-4941-9A3E-0623B95F317E_4_5005_c.jpeg', alt: 'Studio process shot 7', category: 'process' },
  { src: 'assets/Images/studio/5B4C34A1-1AEE-4009-AE55-759A6257FEF4_4_5005_c.jpeg', alt: 'Studio process shot 8', category: 'process' },
  { src: 'assets/Images/studio/75687030-8622-4FC0-AA0D-B9C5371ADA26_4_5005_c.jpeg', alt: 'Studio process shot 9', category: 'process' },
  { src: 'assets/Images/studio/7AA755EA-56BA-427E-B80F-DCD32C455A64_1_105_c.jpeg', alt: 'Studio process shot 10', category: 'process' },
  { src: 'assets/Images/studio/7B4397D9-723A-4EC3-9EBB-F67067DFECB7_4_5005_c.jpeg', alt: 'Studio process shot 11', category: 'process' },
  { src: 'assets/Images/studio/D44F1613-7CB1-48D1-A99B-B04219E32890_4_5005_c.jpeg', alt: 'Studio process shot 12', category: 'process' },
  { src: 'assets/Images/studio/E0F9BEE4-23FF-45E1-B58A-0EE50F34A1D4_4_5005_c.jpeg', alt: 'Studio process shot 13', category: 'process' },
  { src: 'assets/Images/studio/E9531667-07F1-4698-9003-CEC9724017D0_4_5005_c.jpeg', alt: 'Studio process shot 14', category: 'process' },
  { src: 'assets/Images/studio/F4D270D0-15A4-43C9-AD66-2E8416A6D8D8_1_105_c.jpeg', alt: 'Studio process shot 15', category: 'process' }
];

var GALLERY_PAGE_SIZE = 12;

function renderGalleryItem(item) {
  return '<div class="gallery-item parallax-zoom" data-category="' + item.category + '">' +
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
      // Save scroll position before injecting
      var scrollY = window.scrollY;
      var end = Math.min(visibleCount + GALLERY_PAGE_SIZE, filtered.length);
      var html = '';
      for (var i = visibleCount; i < end; i++) {
        html += renderGalleryItem(filtered[i]);
      }
      if (galleryGrid) galleryGrid.innerHTML += html;
      // Restore scroll position after injection (prevents jump)
      if (!reset) window.scrollTo(0, scrollY);

      // Staggered reveal: when each image loads, add is-loaded with a delay
      var newItems = galleryGrid ? galleryGrid.querySelectorAll('.gallery-item:not(.is-loaded)') : [];
      newItems.forEach(function (item, idx) {
        var img = item.querySelector('img');
        if (!img) return;
        var reveal = function () {
          setTimeout(function () {
            item.classList.add('is-loaded');
          }, idx * 80); // 80ms stagger between each
        };
        if (img.complete && img.naturalHeight > 0) {
          reveal();
        } else {
          img.addEventListener('load', reveal);
          img.addEventListener('error', reveal); // still reveal on error
        }
      });

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

    // --- Scroll Animations: Fade-In-Up (IntersectionObserver) ---
    var fadeElements = document.querySelectorAll('.fade-in-up');
    if (fadeElements.length && 'IntersectionObserver' in window) {
      var fadeObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            fadeObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      fadeElements.forEach(function (el) { fadeObserver.observe(el); });
    } else {
      // Fallback: show everything if no IntersectionObserver
      fadeElements.forEach(function (el) { el.classList.add('is-visible'); });
    }

    // --- Scroll Animations: Parallax Zoom ---
    function updateParallaxZoom() {
      var zoomElements = document.querySelectorAll('.parallax-zoom img');
      var viewportHeight = window.innerHeight;
      zoomElements.forEach(function (img) {
        var rect = img.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < viewportHeight) {
          var progress = 1 - (rect.top / viewportHeight);
          progress = Math.max(0, Math.min(1, progress));
          var scale = 1 + (progress * 0.1); // scale(1) to scale(1.1)
          img.style.transform = 'scale(' + scale.toFixed(3) + ')';
        }
      });
    }
    window.addEventListener('scroll', updateParallaxZoom, { passive: true });
    updateParallaxZoom();

    // --- Custom Cursor (trailing effect) ---
    var cursor = document.getElementById('custom-cursor');
    if (cursor && window.matchMedia('(hover: hover)').matches) {
      document.body.classList.add('has-custom-cursor');
      var cursorX = 0, cursorY = 0, targetX = 0, targetY = 0;
      document.addEventListener('mousemove', function (e) {
        targetX = e.clientX;
        targetY = e.clientY;
      });
      function animateCursor() {
        cursorX += (targetX - cursorX) * 0.15;
        cursorY += (targetY - cursorY) * 0.15;
        cursor.style.transform = 'translate(' + cursorX.toFixed(1) + 'px,' + cursorY.toFixed(1) + 'px)';
        requestAnimationFrame(animateCursor);
      }
      animateCursor();

      // Expand on interactive elements
      var expandTargets = 'a, button, .portfolio-btn, .gallery-item img, .process-tile img, .horizontal-scroll-item img';
      document.addEventListener('mouseover', function (e) {
        if (e.target.closest(expandTargets)) cursor.classList.add('is-expanded');
      });
      document.addEventListener('mouseout', function (e) {
        if (e.target.closest(expandTargets)) cursor.classList.remove('is-expanded');
      });
    }

    // --- Horizontal Scroll Gallery (scroll-linked) ---
    var hScrollWrapper = document.getElementById('horizontal-scroll');
    if (hScrollWrapper) {
      var hTrack = hScrollWrapper.querySelector('.horizontal-scroll-track');
      function updateHorizontalScroll() {
        var rect = hScrollWrapper.getBoundingClientRect();
        var viewH = window.innerHeight;
        var wrapperH = hScrollWrapper.offsetHeight;
        // Calculate progress: 0 when top enters viewport, 1 when bottom leaves
        var progress = (viewH - rect.top) / (viewH + wrapperH);
        progress = Math.max(0, Math.min(1, progress));
        // Total scroll distance = track width - wrapper width
        var trackW = hTrack.scrollWidth;
        var wrapperW = hScrollWrapper.offsetWidth;
        var maxShift = trackW - wrapperW;
        if (maxShift > 0) {
          hTrack.style.transform = 'translateX(-' + (progress * maxShift).toFixed(1) + 'px)';
        }
      }
      window.addEventListener('scroll', updateHorizontalScroll, { passive: true });
      updateHorizontalScroll();
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
