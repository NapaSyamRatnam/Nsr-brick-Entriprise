/* TerraBrick Enterprise - Real Estate Developer & Quality Certification Hub */

import { store } from '../store.js';

export function renderRealEstatePortal() {
  const certificates = store.getCertificates();

  return `
    <div class="view-header">
      <div class="view-title-group">
        <h1>Real Estate Developer & Quality Hub</h1>
        <p>Verified laboratory test certificates, eco-ratings, compressive strength specs & volume bidding contracts</p>
      </div>
      <div class="view-actions">
        <button class="btn btn-primary" onclick="alert('Contract proposal sent to TerraBrick Enterprise Sales Team. A dedicated key account manager will contact you within 2 hours.');">
          📜 Request Bulk Price Lock Quote
        </button>
      </div>
    </div>

    <!-- Certified Lab Test Reports Grid -->
    <h2 style="font-family:var(--font-heading); font-size:1.2rem; font-weight:700; margin-bottom:1rem; color:var(--accent-amber);">
      🔬 Official Laboratory Quality & Strength Test Certificates
    </h2>

    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap:1.5rem; margin-bottom:2.5rem;">
      ${certificates.map(c => `
        <div style="background:var(--bg-surface); border:1px solid var(--bg-surface-border); border-radius:var(--radius-lg); padding:1.5rem; display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
              <span class="badge badge-success">✓ Verified Lab Certified</span>
              <span style="font-family:monospace; font-size:0.8rem; color:var(--text-muted);">${c.batchNo}</span>
            </div>
            
            <h3 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:700; color:var(--text-main); margin-bottom:1rem;">${c.brickType}</h3>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; font-size:0.85rem; background:var(--bg-dark); padding:1rem; border-radius:var(--radius-md); margin-bottom:1rem;">
              <div>
                <div style="font-size:0.75rem; color:var(--text-muted);">Compressive Strength</div>
                <div style="font-weight:700; color:var(--accent-amber);">${c.compressiveStrength}</div>
              </div>
              <div>
                <div style="font-size:0.75rem; color:var(--text-muted);">Water Absorption Rate</div>
                <div style="font-weight:700; color:var(--status-info);">${c.waterAbsorption}</div>
              </div>
              <div>
                <div style="font-size:0.75rem; color:var(--text-muted);">Efflorescence Test</div>
                <div style="font-weight:700; color:var(--status-success);">${c.efflorescence}</div>
              </div>
              <div>
                <div style="font-size:0.75rem; color:var(--text-muted);">Thermal Insulation</div>
                <div style="font-weight:700; color:var(--text-main);">${c.thermalConductivity}</div>
              </div>
            </div>
          </div>

          <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--bg-surface-border); padding-top:0.85rem;">
            <span style="font-size:0.78rem; color:var(--text-subtle);">${c.greenCertification}</span>
            <button class="btn btn-secondary btn-sm" onclick="alert('Downloading Certified PDF Report for ${c.batchNo}...')">
              📥 Download PDF
            </button>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Multi-Project Brick Demand Forecaster for Developers -->
    <div style="background:var(--bg-surface); border:1px solid var(--bg-surface-border); border-radius:var(--radius-lg); padding:1.75rem;">
      <h3 style="font-family:var(--font-heading); font-size:1.2rem; font-weight:700; color:var(--text-main); margin-bottom:0.5rem;">
        🏢 Commercial & Residential Township Project Volume Estimator
      </h3>
      <p style="font-size:0.88rem; color:var(--text-muted); margin-bottom:1.5rem;">Calculate aggregate clay brick requirements across multiple towers and phases</p>

      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:1rem; margin-bottom:1.5rem;">
        <div class="form-group">
          <label class="form-label">Number of High-Rise Towers</label>
          <input type="number" id="re-towers" class="form-control" value="4">
        </div>
        <div class="form-group">
          <label class="form-label">Floors per Tower</label>
          <input type="number" id="re-floors" class="form-control" value="12">
        </div>
        <div class="form-group">
          <label class="form-label">Apartment Units per Floor</label>
          <input type="number" id="re-units" class="form-control" value="6">
        </div>
      </div>

      <div style="background:var(--bg-dark); border:1px solid var(--bg-surface-border); border-radius:var(--radius-md); padding:1.25rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
        <div>
          <div style="font-size:0.8rem; color:var(--text-muted);">Total Township Brick Volume</div>
          <div style="font-family:var(--font-heading); font-size:1.8rem; font-weight:800; color:var(--accent-amber);" id="re-total-volume">1,728,000 Bricks</div>
        </div>
        <div>
          <div style="font-size:0.8rem; color:var(--text-muted);">Locked Volume Tier Discount</div>
          <div style="font-family:var(--font-heading); font-size:1.4rem; font-weight:800; color:var(--status-success);">15% Volume Rebate</div>
        </div>
        <button class="btn btn-primary" onclick="alert('Volume Bidding Contract initialized! TerraBrick Enterprise executive will email contract terms.')">
          Lock In Volume Pricing
        </button>
      </div>
    </div>
  `;
}
