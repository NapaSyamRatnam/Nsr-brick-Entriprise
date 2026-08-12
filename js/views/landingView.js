/* NSR Brick Enterprise - Full Landing Page (Homepage) View */

import { store } from '../store.js';

export function renderLandingView() {
  const products = store.getProducts();
  const testimonials = store.getTestimonials();
  const assetImages = store.getAssetImages();

  return `
    <!-- Full-Width Hero Section showcasing Buildings, Raw Clay, and Fire Kiln Bricks with Product Quality Specs -->
    <div class="hero-section" id="hero-slider-container" style="padding: 2.5rem;">
      <div style="display: grid; grid-template-columns: 1fr 420px; gap: 2rem; align-items: center; width: 100%;">
        
        <!-- Left Hero Content Column -->
        <div class="hero-content" style="padding: 0; max-width: 100%;">
          <div class="hero-badge">
            <span>🧱</span> NSR Brick Enterprise • ISO 9001 Certified Fire Kilns & Raw Clay
          </div>

          <h1 class="hero-title" style="font-size: 2.5rem; margin-bottom: 0.75rem;">
            High-Density Kiln Burnt Red Clay & Fire Bricks for Modern Architecture
          </h1>

          <p class="hero-subtitle" style="font-size: 0.95rem; margin-bottom: 1.25rem;">
            Engineered for maximum compressive strength, load-bearing durability, and zero efflorescence. Manufactured from purified raw clay deposits and baked at 1,050°C in automated tunnel kilns.
          </p>

          <!-- Product Quality Spec Badges Bar -->
          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 1.25rem; background: rgba(15, 18, 21, 0.85); border: 1px solid var(--primary-terracotta); border-radius: var(--radius-md); padding: 1rem; backdrop-filter: blur(8px);">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span style="font-size: 1.4rem;">💪</span>
              <div>
                <div style="font-weight: 800; font-size: 0.9rem; color: var(--accent-gold);">3,850+ PSI</div>
                <div style="font-size: 0.7rem; color: var(--text-muted);">Compressive Strength</div>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 0.5rem; border-left: 1px solid var(--bg-surface-border); padding-left: 0.75rem;">
              <span style="font-size: 1.4rem;">🔥</span>
              <div>
                <div style="font-weight: 800; font-size: 0.9rem; color: var(--accent-amber);">1,050°C Fire Fired</div>
                <div style="font-size: 0.7rem; color: var(--text-muted);">High Temp Kiln</div>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 0.5rem; border-left: 1px solid var(--bg-surface-border); padding-left: 0.75rem;">
              <span style="font-size: 1.4rem;">🌧️</span>
              <div>
                <div style="font-weight: 800; font-size: 0.9rem; color: var(--status-info);">< 6% Water Abs</div>
                <div style="font-size: 0.7rem; color: var(--text-muted);">Monsoon Resistant</div>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 0.5rem; border-left: 1px solid var(--bg-surface-border); padding-left: 0.75rem;">
              <span style="font-size: 1.4rem;">🌿</span>
              <div>
                <div style="font-weight: 800; font-size: 0.9rem; color: var(--status-success);">ISO 14001 Eco</div>
                <div style="font-size: 0.7rem; color: var(--text-muted);">Nil Efflorescence</div>
              </div>
            </div>
          </div>

          <!-- Dynamic Interactive Hero Carousel Navigation Bar -->
          <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(15, 18, 21, 0.92); border: 1px solid var(--primary-terracotta); border-radius: var(--radius-md); padding: 0.65rem 1rem; backdrop-filter: blur(12px); box-shadow: var(--shadow-md);">
            
            <div style="display: flex; gap: 0.35rem; flex-wrap: wrap;" id="hero-carousel-pills-container">
              <button class="hero-carousel-dot active" data-slide="0" style="background: var(--primary-terracotta); color: #fff; border: none; padding: 0.3rem 0.65rem; border-radius: var(--radius-full); font-size: 0.7rem; font-weight: 700; cursor: pointer;">
                🌿 1. Raw Clay
              </button>
              <button class="hero-carousel-dot" data-slide="1" style="background: rgba(255,255,255,0.1); color: var(--text-muted); border: 1px solid var(--bg-surface-border); padding: 0.3rem 0.65rem; border-radius: var(--radius-full); font-size: 0.7rem; font-weight: 700; cursor: pointer;">
                ⚙️ 2. Wire-Cut
              </button>
              <button class="hero-carousel-dot" data-slide="2" style="background: rgba(255,255,255,0.1); color: var(--text-muted); border: 1px solid var(--bg-surface-border); padding: 0.3rem 0.65rem; border-radius: var(--radius-full); font-size: 0.7rem; font-weight: 700; cursor: pointer;">
                ☀️ 3. Sun Drying
              </button>
              <button class="hero-carousel-dot" data-slide="3" style="background: rgba(255,255,255,0.1); color: var(--text-muted); border: 1px solid var(--bg-surface-border); padding: 0.3rem 0.65rem; border-radius: var(--radius-full); font-size: 0.7rem; font-weight: 700; cursor: pointer;">
                🔥 4. 1,050°C Kiln
              </button>
              <button class="hero-carousel-dot" data-slide="4" style="background: rgba(255,255,255,0.1); color: var(--text-muted); border: 1px solid var(--bg-surface-border); padding: 0.3rem 0.65rem; border-radius: var(--radius-full); font-size: 0.7rem; font-weight: 700; cursor: pointer;">
                📦 5. Freight
              </button>
              <button class="hero-carousel-dot" data-slide="5" style="background: rgba(255,255,255,0.1); color: var(--text-muted); border: 1px solid var(--bg-surface-border); padding: 0.3rem 0.65rem; border-radius: var(--radius-full); font-size: 0.7rem; font-weight: 700; cursor: pointer;">
                🧱 6. Red Wall
              </button>
            </div>

            <div style="display: flex; gap: 0.4rem;">
              <button id="btn-hero-prev" style="background: var(--bg-surface-elevated); border: 1px solid var(--bg-surface-border); color: #fff; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size:0.85rem;" title="Previous Slide">❮</button>
              <button id="btn-hero-next" style="background: var(--bg-surface-elevated); border: 1px solid var(--bg-surface-border); color: #fff; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size:0.85rem;" title="Next Slide">❯</button>
            </div>

          </div>
        </div>

        <!-- Right Hero Dynamic Showcase Image Frame -->
        <div style="position: relative; border-radius: var(--radius-lg); overflow: hidden; border: 2px solid var(--primary-terracotta); box-shadow: var(--shadow-glow); background: var(--bg-dark); height: 360px;">
          <img id="hero-dynamic-img" src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1000&q=80" alt="End-to-End Brick Phase" style="width: 100%; height: 100%; object-fit: cover; transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);" />
          
          <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(15, 18, 21, 0.95), transparent); padding: 1.25rem 1rem 0.85rem; backdrop-filter: blur(4px);">
            <div id="hero-dynamic-caption" style="font-weight: 800; font-size: 0.82rem; color: var(--accent-gold); text-transform: uppercase; letter-spacing: 0.05em;">
              🌿 End-to-End Phase 1 • Raw Soil Extraction & Purifying
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Admin Panel Quick Access Section on Landing Page -->
    <div style="background: linear-gradient(135deg, rgba(192, 74, 39, 0.15), var(--bg-surface-elevated)); border: 1px solid var(--primary-terracotta); border-radius: var(--radius-lg); padding: 2rem 2.5rem; margin-bottom: 3.5rem; box-shadow: var(--shadow-glow);">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1.5rem;">
        
        <div style="max-width: 650px;">
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
            <span class="badge badge-warning">👑 Admin & Kiln Management Portal</span>
            <span style="font-size: 0.78rem; color: var(--accent-gold);">Firebase Authenticated Access</span>
          </div>
          <h2 style="font-family: var(--font-heading); font-size: 1.8rem; font-weight: 900; color: var(--text-main); margin-bottom: 0.5rem;">
            Enterprise Admin Control Panel
          </h2>
          <p style="color: var(--text-muted); font-size: 0.92rem; line-height: 1.6;">
            Executive control panel for Admin Managers: monitor 1,050°C tunnel kiln firing telemetry, raw clay quarry reserves, contractor freight dispatches, customer payments ledger, and live Firebase Firestore database synchronization.
          </p>
        </div>

        <div>
          <button class="btn btn-primary btn-lg" id="btn-landing-enter-admin" style="padding: 0.9rem 2rem; font-size: 1rem; box-shadow: var(--shadow-lg); font-weight: 800; background: linear-gradient(135deg, var(--primary-terracotta), var(--accent-amber)); border: none;">
            👑 Enter Admin Panel (Executive ERP)
          </button>
        </div>

      </div>
    </div>

    <!-- Raw Material Quality & Fire Brick Product Showcase -->
    <div style="margin-bottom: 4rem;">
      <div style="text-align:center; max-width:750px; margin:0 auto 2.5rem auto;">
        <h2 style="font-family:var(--font-heading); font-size:2.2rem; font-weight:800; color:var(--text-main); margin-bottom:0.5rem;">
          Raw Clay & Fire Brick Product Line
        </h2>
        <p style="color:var(--text-muted); font-size:0.95rem;">
          Every brick grade is manufactured from purified natural clay soil and kiln baked for ultimate compressive strength
        </p>
      </div>

      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap:1.5rem; margin-bottom:2.5rem;">
        
        <div style="background:var(--bg-surface); border:1px solid var(--bg-surface-border); border-radius:var(--radius-lg); padding:1.5rem;">
          <div style="font-size:2.2rem; margin-bottom:0.75rem;">🏺</div>
          <h3 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:700; color:var(--accent-amber); margin-bottom:0.35rem;">Purified Raw Clay Material</h3>
          <p style="font-size:0.85rem; color:var(--text-muted);">Extracted from rich alluvial quarry soil deposits, double-vacuum de-aired to ensure structural density and zero air voids.</p>
        </div>

        <div style="background:var(--bg-surface); border:1px solid var(--bg-surface-border); border-radius:var(--radius-lg); padding:1.5rem;">
          <div style="font-size:2.2rem; margin-bottom:0.75rem;">🔥</div>
          <h3 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:700; color:var(--accent-gold); margin-bottom:0.35rem;">1,050°C Tunnel Fire Baking</h3>
          <p style="font-size:0.85rem; color:var(--text-muted);">Baked in computer-controlled tunnel kilns for 72 hours, vitrifying the clay into high-density fire-resistant bricks.</p>
        </div>

        <div style="background:var(--bg-surface); border:1px solid var(--bg-surface-border); border-radius:var(--radius-lg); padding:1.5rem;">
          <div style="font-size:2.2rem; margin-bottom:0.75rem;">🏢</div>
          <h3 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:700; color:var(--status-info); margin-bottom:0.35rem;">High-Rise Load Capacity</h3>
          <p style="font-size:0.85rem; color:var(--text-muted);">Lab tested up to 4,200 PSI to easily support multi-story commercial buildings, luxury villas, and civil infrastructure.</p>
        </div>

        <div style="background:var(--bg-surface); border:1px solid var(--bg-surface-border); border-radius:var(--radius-lg); padding:1.5rem;">
          <div style="font-size:2.2rem; margin-bottom:0.75rem;">🌧️</div>
          <h3 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:700; color:var(--status-success); margin-bottom:0.35rem;">Nil Efflorescence Guarantee</h3>
          <p style="font-size:0.85rem; color:var(--text-muted);">Ultra-low 5% water absorption rate prevents salt efflorescence, moisture damage, and surface cracking over decades.</p>
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
                  <span class="product-stock-count">${(p.stock/1000).toFixed(0)}k Available</span>
                </div>
                <h3 class="product-name">${p.name}</h3>
                <div class="product-specs" style="margin-bottom:0.4rem;">
                  <strong>Dim:</strong> ${p.dimensions} • <strong>Grade:</strong> Premium • <strong>Min Qty:</strong> 1,000 Bricks
                </div>
                <p style="font-size:0.8rem; color:var(--text-subtle); margin-bottom:0.85rem;">${p.description}</p>
              </div>

              <div>
                <div class="product-price-row" style="background:var(--bg-dark); padding:0.6rem 0.85rem; border-radius:var(--radius-md); margin-bottom:0.85rem; border:1px solid var(--bg-surface-border);">
                  <div>
                    <div style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Unit Price</div>
                    <div class="product-price" style="font-size:1.1rem; color:var(--status-success);">₹${p.price.toFixed(2)}</div>
                  </div>
                  <div style="text-align:right;">
                    <div style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Bulk Price / 1,000</div>
                    <div style="font-weight:800; font-size:1.05rem; color:var(--accent-gold);">₹${(p.price * 1000 * 0.9).toLocaleString()}</div>
                  </div>
                </div>

                <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem;">
                  <button class="btn btn-primary btn-sm btn-product-buy" data-brick-name="${p.name}" data-price="${p.price}">🛒 Order Now</button>
                  <button class="btn btn-outline-terracotta btn-sm btn-product-quote" data-brick-name="${p.name}">💬 Get Quote</button>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Distance & Freight Charge Calculator Widget -->
    <div style="background: linear-gradient(135deg, rgba(192, 74, 39, 0.12), var(--bg-surface-elevated)); border: 1px solid var(--primary-terracotta); border-radius: var(--radius-lg); padding: 2rem 2.5rem; margin-bottom: 3.5rem; box-shadow: var(--shadow-md);">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: center;">
        <div>
          <span class="badge badge-warning" style="margin-bottom:0.5rem;">🚚 Factory Direct Freight</span>
          <h2 style="font-family:var(--font-heading); font-size:1.8rem; font-weight:800; color:var(--text-main); margin-bottom:0.5rem;">
            Location & Distance Freight Calculator
          </h2>
          <p style="color:var(--text-muted); font-size:0.9rem;">
            Calculate real-time delivery distance from our Nellore Kiln Plant & Quarry Yard to your construction site.
          </p>
        </div>

        <div style="background: var(--bg-dark); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--bg-surface-border);">
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 0.75rem;">
            <div>
              <label class="form-label" style="font-size:0.75rem;">Delivery Destination</label>
              <input type="text" id="calc-freight-address" class="form-control" value="Gachibowli, Hyderabad" placeholder="Enter City / Site Address">
            </div>
            <div>
              <label class="form-label" style="font-size:0.75rem;">Distance (KM)</label>
              <input type="number" id="calc-freight-km" class="form-control" value="35" min="5" max="500">
            </div>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; background: rgba(192, 74, 39, 0.15); padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px dashed var(--primary-terracotta);">
            <div>
              <div style="font-size:0.72rem; color:var(--text-subtle);">Estimated Freight Charge</div>
              <div style="font-weight:800; font-size:1.25rem; color:var(--accent-gold);" id="calc-freight-total">₹4,500</div>
            </div>
            <button class="btn btn-secondary btn-sm" id="btn-calc-freight-update">Update Freight</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Manufacturing 8-Step Timeline Pipeline -->
    <div style="margin-bottom: 4rem;">
      <div style="text-align:center; max-width:700px; margin:0 auto 2.5rem auto;">
        <h2 style="font-family:var(--font-heading); font-size:2rem; font-weight:800; color:var(--text-main); margin-bottom:0.5rem;">
          Our 8-Step Manufacturing Process
        </h2>
        <p style="color:var(--text-muted); font-size:0.9rem;">From raw clay extraction to high-temperature fire kiln baking and quality packing</p>
      </div>

      <div class="manufacturing-timeline">
        <div class="timeline-step-card">
          <div class="step-num">1</div>
          <div class="step-title">Raw Clay Extraction</div>
        </div>
        <div class="timeline-step-card">
          <div class="step-num">2</div>
          <div class="step-title">Purification & Mixing</div>
        </div>
        <div class="timeline-step-card">
          <div class="step-num">3</div>
          <div class="step-title">Vacuum Moulding</div>
        </div>
        <div class="timeline-step-card">
          <div class="step-num">4</div>
          <div class="step-title">Sun Shed Drying</div>
        </div>
        <div class="timeline-step-card">
          <div class="step-num">5</div>
          <div class="step-title">1,050°C Fire Firing</div>
        </div>
        <div class="timeline-step-card">
          <div class="step-num">6</div>
          <div class="step-title">Strength Lab Check</div>
        </div>
        <div class="timeline-step-card">
          <div class="step-num">7</div>
          <div class="step-title">Pallet Packing</div>
        </div>
        <div class="timeline-step-card">
          <div class="step-num">8</div>
          <div class="step-title">Freight Site Delivery</div>
        </div>
      </div>
    </div>

    <!-- Masonry Photo Gallery Grid -->
    <div style="margin-bottom: 4rem;">
      <h2 style="font-family:var(--font-heading); font-size:1.8rem; font-weight:800; color:var(--text-main); margin-bottom:1.5rem;">
        📸 Factory, Fire Kilns & High-Rise Building Gallery
      </h2>

      <div class="gallery-grid">
        <div class="gallery-item">
          <img src="${assetImages.factory}" alt="NSR Clay Brick Factory">
          <div class="gallery-caption">NSR Automated Tunnel Kiln Factory</div>
        </div>
        <div class="gallery-item">
          <img src="${assetImages.kiln}" alt="Fire Brick Kiln Firing">
          <div class="gallery-caption">High Temperature 1,050°C Fire Brick Baking</div>
        </div>
        <div class="gallery-item">
          <img src="${assetImages.construction}" alt="Construction Site">
          <div class="gallery-caption">High-Rise Residential Building Site</div>
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

    <!-- Contact & WhatsApp Instant Quote Generator -->
    <div style="background:var(--bg-surface); border:1px solid var(--bg-surface-border); border-radius:var(--radius-lg); padding:2.5rem; margin-bottom:2rem;" id="contact-section">
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:2.5rem;">
        
        <div>
          <h2 style="font-family:var(--font-heading); font-size:1.8rem; font-weight:800; color:var(--accent-amber); margin-bottom:0.75rem;">
            📞 Contact NSR Brick Sales & Management
          </h2>
          <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:1.5rem;">
            Have questions or need bulk quote estimates for high-rise buildings? Reach out to our technical team or order via WhatsApp.
          </p>

          <div style="display:flex; flex-direction:column; gap:1rem; font-size:0.9rem; margin-bottom:1.5rem;">
            <div>📍 <strong>Corporate Plant:</strong> Quarry Road, Kiln Zone, Nellore / AP, India</div>
            <div>📞 <strong>Phone Hotline:</strong> +91 98765 43210 / +91 40 5555 BRICK</div>
            <div>✉️ <strong>Email:</strong> sales@nsrbrick.com</div>
            <div>💬 <strong>WhatsApp Hotline:</strong> +91 98765 43210</div>
          </div>

          <!-- WhatsApp Direct Action Button -->
          <a href="https://wa.me/919876543210?text=Hello%20NSR%20Brick%20Enterprise%2C%20I%20need%20a%20quotation%20for%20Red%20Clay%20Bricks" target="_blank" class="btn" style="background:#25D366; color:#FFF; font-weight:800; width:100%; justify-content:center; gap:0.5rem; font-size:1rem; margin-bottom:1.5rem; box-shadow:var(--shadow-md);">
            <span>📱</span> Chat on WhatsApp Direct Quote
          </a>

          <!-- Embedded Map Simulation -->
          <div style="background:var(--bg-dark); border:1px solid var(--bg-surface-border); border-radius:var(--radius-md); height:140px; display:flex; align-items:center; justify-content:center; flex-direction:column; color:var(--text-muted);">
            <span style="font-size:1.8rem;">🗺️</span>
            <span style="font-size:0.85rem; margin-top:0.35rem;">Google Maps Location</span>
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
              <textarea id="inq-message" class="form-control" rows="3" placeholder="Specify building site location and unloading requirements..."></textarea>
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
