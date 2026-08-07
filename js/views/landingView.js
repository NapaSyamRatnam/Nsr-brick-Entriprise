/* NSR Brick Enterprise - Full Landing Page (Homepage) View */

import { store } from '../store.js';

export function renderLandingView() {
  const products = store.getProducts();
  const testimonials = store.getTestimonials();
  const assetImages = store.getAssetImages();

  return `
    <!-- Full-Width Hero Section with Animated Background Image Slider -->
    <div class="hero-section" id="hero-slider-container">
      <div class="hero-slider-bg" id="hero-bg-slide" style="background-image: url('${assetImages.factory}');"></div>
      
      <div class="hero-content">
        <div class="hero-badge">
          <span>🧱</span> NSR Brick Enterprise • ISO 9001 Certified Kilns
        </div>
        <h1 class="hero-title">
          High Strength Red Clay Bricks for Modern Construction
        </h1>
        <p class="hero-subtitle">
          Leading manufacturer of high-density kiln burnt red clay bricks, wire-cut facing bricks, and thermal hollow blocks. Trusted by top builders, contractors, and real estate developers across India.
        </p>

        <div class="hero-ctas">
          <button class="btn btn-primary btn-lg btn-scroll-quote">
            📋 Get a Free Quote
          </button>
          <button class="btn btn-secondary btn-lg nav-link-trigger" data-view="builder">
            📐 Brick Calculator
          </button>
          <button class="btn btn-outline-terracotta btn-lg btn-scroll-products">
            🧱 Explore Products
          </button>
          <button class="btn btn-secondary btn-lg" onclick="alert('Connecting to NSR Sales Team on WhatsApp (+91 98765 43210)...')">
            💬 WhatsApp Sales
          </button>
        </div>
      </div>
    </div>

    <!-- Company Introduction & Why Choose Us Section -->
    <div style="margin-bottom: 4rem;">
      <div style="text-align:center; max-width:700px; margin:0 auto 2.5rem auto;">
        <h2 style="font-family:var(--font-heading); font-size:2rem; font-weight:800; color:var(--text-main); margin-bottom:0.5rem;">
          Why Choose NSR Brick Enterprise?
        </h2>
        <p style="color:var(--text-muted); font-size:0.95rem;">
          We combine traditional high-density clay moulding with automated tunnel kiln baking technology to ensure maximum compressive load capacity.
        </p>
      </div>

      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap:1.5rem;">
        
        <div style="background:var(--bg-surface); border:1px solid var(--bg-surface-border); border-radius:var(--radius-lg); padding:1.5rem;">
          <div style="font-size:2.2rem; margin-bottom:0.75rem;">🏺</div>
          <h3 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:700; color:var(--accent-amber); margin-bottom:0.35rem;">Premium Natural Clay</h3>
          <p style="font-size:0.85rem; color:var(--text-muted);">Sourced from high-grade alluvial soil deposits, purified for zero efflorescence and deep rich red tone.</p>
        </div>

        <div style="background:var(--bg-surface); border:1px solid var(--bg-surface-border); border-radius:var(--radius-lg); padding:1.5rem;">
          <div style="font-size:2.2rem; margin-bottom:0.75rem;">💪</div>
          <h3 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:700; color:var(--accent-gold); margin-bottom:0.35rem;">High Compressive Strength</h3>
          <p style="font-size:0.85rem; color:var(--text-muted);">Lab tested up to 4,200 PSI (28.9 MPa) to easily support multi-story load bearing civil structures.</p>
        </div>

        <div style="background:var(--bg-surface); border:1px solid var(--bg-surface-border); border-radius:var(--radius-lg); padding:1.5rem;">
          <div style="font-size:2.2rem; margin-bottom:0.75rem;">🌧️</div>
          <h3 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:700; color:var(--status-info); margin-bottom:0.35rem;">Weather & Thermal Resistant</h3>
          <p style="font-size:0.85rem; color:var(--text-muted);">Ultra-low 5% water absorption rate resists monsoon dampness, thermal expansion, and salt efflorescence.</p>
        </div>

        <div style="background:var(--bg-surface); border:1px solid var(--bg-surface-border); border-radius:var(--radius-lg); padding:1.5rem;">
          <div style="font-size:2.2rem; margin-bottom:0.75rem;">🚚</div>
          <div style="font-family:var(--font-heading); font-size:1.15rem; font-weight:700; color:var(--status-success); margin-bottom:0.35rem;">Fast Freight Delivery</div>
          <p style="font-size:0.85rem; color:var(--text-muted);">Dedicated 24-ton flatbed truck fleet equipped with GPS tracking for direct job site unloading.</p>
        </div>

        <div style="background:var(--bg-surface); border:1px solid var(--bg-surface-border); border-radius:var(--radius-lg); padding:1.5rem;">
          <div style="font-size:2.2rem; margin-bottom:0.75rem;">🏷️</div>
          <div style="font-family:var(--font-heading); font-size:1.15rem; font-weight:700; color:var(--accent-amber); margin-bottom:0.35rem;">Affordable Direct Pricing</div>
          <p style="font-size:0.85rem; color:var(--text-muted);">Direct factory-to-site supply without middlemen, offering bulk volume discounts for townships.</p>
        </div>

        <div style="background:var(--bg-surface); border:1px solid var(--bg-surface-border); border-radius:var(--radius-lg); padding:1.5rem;">
          <div style="font-size:2.2rem; margin-bottom:0.75rem;">🔬</div>
          <div style="font-family:var(--font-heading); font-size:1.15rem; font-weight:700; color:var(--status-success); margin-bottom:0.35rem;">100% Quality Assurance</div>
          <p style="font-size:0.85rem; color:var(--text-muted);">Every batch comes with ISO 14001 green ratings and certified lab test reports.</p>
        </div>

      </div>
    </div>

    <!-- Product Showcase Grid -->
    <div style="margin-bottom: 4rem;" id="products-section">
      <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:2rem; flex-wrap:wrap; gap:1rem;">
        <div>
          <h2 style="font-family:var(--font-heading); font-size:2rem; font-weight:800; color:var(--text-main);">
            Brick Catalogue & Specifications
          </h2>
          <p style="color:var(--text-muted); font-size:0.9rem;">Explore our high-density red clay bricks, wire-cut facing bricks & hollow blocks</p>
        </div>
        <button class="btn btn-secondary nav-link-trigger" data-view="builder">Open Brick Quantity Calculator</button>
      </div>

      <div class="product-grid">
        ${products.map(p => `
          <div class="product-card">
            <div class="product-image-box">
              <img src="${p.image}" alt="${p.name}">
              <div class="product-badge-tag">${p.category}</div>
            </div>
            
            <div class="product-info">
              <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.25rem;">
                  <span style="font-size:0.75rem; color:var(--status-warning); font-weight:700;">★ ${p.rating} (${p.reviewsCount} reviews)</span>
                  <span class="product-stock-count">${(p.stock/1000).toFixed(0)}k In Stock</span>
                </div>
                <h3 class="product-name">${p.name}</h3>
                <div class="product-specs">
                  <strong>Dim:</strong> ${p.dimensions} • <strong>Strength:</strong> ${p.compressiveStrength}
                </div>
                <p style="font-size:0.8rem; color:var(--text-subtle); margin-bottom:1rem;">${p.description}</p>
              </div>

              <div>
                <div class="product-price-row">
                  <div>
                    <div style="font-size:0.72rem; color:var(--text-muted); text-transform:uppercase;">Price per Brick</div>
                    <div class="product-price">₹${p.price.toFixed(2)}</div>
                  </div>
                  <span class="badge badge-success">Factory Direct</span>
                </div>

                <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem;">
                  <button class="btn btn-primary btn-sm btn-product-buy" data-brick-name="${p.name}" data-price="${p.price}">Buy Now</button>
                  <button class="btn btn-outline-terracotta btn-sm btn-product-quote" data-brick-name="${p.name}">Get Quote</button>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Manufacturing 8-Step Timeline Pipeline -->
    <div style="margin-bottom: 4rem;">
      <div style="text-align:center; max-width:700px; margin:0 auto 2.5rem auto;">
        <h2 style="font-family:var(--font-heading); font-size:2rem; font-weight:800; color:var(--text-main); margin-bottom:0.5rem;">
          Our 8-Step Manufacturing Process
        </h2>
        <p style="color:var(--text-muted); font-size:0.9rem;">From raw clay extraction to high-temperature kiln firing and quality packing</p>
      </div>

      <div class="manufacturing-timeline">
        <div class="timeline-step-card">
          <div class="step-num">1</div>
          <div class="step-title">Clay Collection</div>
        </div>
        <div class="timeline-step-card">
          <div class="step-num">2</div>
          <div class="step-title">Purification & Mixing</div>
        </div>
        <div class="timeline-step-card">
          <div class="step-num">3</div>
          <div class="step-title">Vacuum Molding</div>
        </div>
        <div class="timeline-step-card">
          <div class="step-num">4</div>
          <div class="step-title">Sun Shed Drying</div>
        </div>
        <div class="timeline-step-card">
          <div class="step-num">5</div>
          <div class="step-title">1050°C Kiln Firing</div>
        </div>
        <div class="timeline-step-card">
          <div class="step-num">6</div>
          <div class="step-title">Lab Inspection</div>
        </div>
        <div class="timeline-step-card">
          <div class="step-num">7</div>
          <div class="step-title">Pallet Packing</div>
        </div>
        <div class="timeline-step-card">
          <div class="step-num">8</div>
          <div class="step-title">Freight Delivery</div>
        </div>
      </div>
    </div>

    <!-- Masonry Photo Gallery Grid -->
    <div style="margin-bottom: 4rem;">
      <h2 style="font-family:var(--font-heading); font-size:1.8rem; font-weight:800; color:var(--text-main); margin-bottom:1.5rem;">
        📸 Factory, Kiln & Project Site Gallery
      </h2>

      <div class="gallery-grid">
        <div class="gallery-item">
          <img src="${assetImages.factory}" alt="NSR Clay Brick Factory">
          <div class="gallery-caption">NSR Automated Tunnel Kiln Factory</div>
        </div>
        <div class="gallery-item">
          <img src="${assetImages.kiln}" alt="Brick Kiln Firing">
          <div class="gallery-caption">High Temperature 1,050°C Kiln Baking</div>
        </div>
        <div class="gallery-item">
          <img src="${assetImages.construction}" alt="Construction Site">
          <div class="gallery-caption">High-Rise Residential Project Site</div>
        </div>
        <div class="gallery-item">
          <img src="${assetImages.luxuryHome}" alt="Luxury Villa Exterior">
          <div class="gallery-caption">Luxury Villa Facing Brick Facade</div>
        </div>
        <div class="gallery-item">
          <img src="${assetImages.commercial}" alt="Commercial Tower">
          <div class="gallery-caption">Commercial Business Towers</div>
        </div>
        <div class="gallery-item">
          <img src="${assetImages.bricksStack}" alt="Finished Brick Yard">
          <div class="gallery-caption">400,000+ Ready Brick Inventory Yard</div>
        </div>
      </div>
    </div>

    <!-- Customer Testimonials Carousel & Clients List -->
    <div class="testimonials-section">
      <div style="text-align:center; margin-bottom:2rem;">
        <span style="font-size:0.8rem; text-transform:uppercase; color:var(--accent-gold); font-weight:700; letter-spacing:0.08em;">Client Testimonials</span>
        <h2 style="font-family:var(--font-heading); font-size:1.8rem; font-weight:800; color:var(--text-main); margin-top:0.25rem;">Trusted by Top Builders & Developers</h2>
      </div>

      <div class="testimonial-card">
        <div style="font-size:2rem; color:var(--primary-terracotta); margin-bottom:0.5rem;">“</div>
        <div class="testimonial-quote">${testimonials[0].quote}</div>
        <div class="testimonial-author">${testimonials[0].name}</div>
        <div class="testimonial-role">${testimonials[0].role}</div>
      </div>
    </div>

    <!-- Contact & Inquiry Form with Embedded Map Simulation -->
    <div style="background:var(--bg-surface); border:1px solid var(--bg-surface-border); border-radius:var(--radius-lg); padding:2.5rem; margin-bottom:2rem;" id="contact-section">
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:2.5rem;">
        
        <div>
          <h2 style="font-family:var(--font-heading); font-size:1.8rem; font-weight:800; color:var(--accent-amber); margin-bottom:0.75rem;">
            📞 Contact NSR Brick Sales
          </h2>
          <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:1.5rem;">
            Have questions or need bulk quote estimates? Reach out to our dedicated technical team.
          </p>

          <div style="display:flex; flex-direction:column; gap:1rem; font-size:0.9rem; margin-bottom:2rem;">
            <div>📍 <strong>Corporate HQ:</strong> Quarry Road, Industrial Brick Zone, Hyderabad, India</div>
            <div>📞 <strong>Phone Hotline:</strong> +91 98765 43210 / +91 40 5555 BRICK</div>
            <div>✉️ <strong>Email:</strong> sales@nsrbrick.com</div>
            <div>💬 <strong>WhatsApp:</strong> +91 98765 43210</div>
          </div>

          <!-- Embedded Map Simulation -->
          <div style="background:var(--bg-dark); border:1px solid var(--bg-surface-border); border-radius:var(--radius-md); height:160px; display:flex; align-items:center; justify-content:center; flex-direction:column; color:var(--text-muted);">
            <span style="font-size:2rem;">🗺️</span>
            <span style="font-size:0.85rem; margin-top:0.35rem;">Interactive Google Maps Location</span>
            <span style="font-size:0.75rem; color:var(--accent-gold);">NSR Kilns Unit 1 & Quarry Yard</span>
          </div>
        </div>

        <!-- Quick Inquiry Form -->
        <div>
          <h3 style="font-family:var(--font-heading); font-size:1.25rem; font-weight:700; margin-bottom:1rem;">Request Instant Sales Quote</h3>
          
          <form id="landing-inquiry-form">
            <div class="form-group">
              <label class="form-label">Full Name</label>
              <input type="text" id="inq-name" class="form-control" placeholder="e.g. Ramesh Varma" required>
            </div>
            
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
              <div class="form-group">
                <label class="form-label">Phone Number</label>
                <input type="text" id="inq-phone" class="form-control" placeholder="+91 98765 00000" required>
              </div>
              <div class="form-group">
                <label class="form-label">Your Role</label>
                <select id="inq-role" class="form-select">
                  <option value="Builder">Builder / Contractor</option>
                  <option value="Developer">Real Estate Developer</option>
                  <option value="Architect">Architect / Engineer</option>
                  <option value="Individual">Individual Home Owner</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Estimated Brick Requirement (Pcs)</label>
              <input type="number" id="inq-qty" class="form-control" value="25000" min="1000" step="1000">
            </div>

            <div class="form-group">
              <label class="form-label">Project Details / Message</label>
              <textarea id="inq-message" class="form-control" rows="3" placeholder="Specify site location and unloading requirements..."></textarea>
            </div>

            <button type="submit" class="btn btn-primary" style="width:100%;">
              🚀 Submit Quote Inquiry
            </button>
          </form>
        </div>

      </div>
    </div>
  `;
}
