/* TerraBrick Enterprise - Builder & Contractor Hub & Clay Brick Estimator */

import { store } from '../store.js';

export function renderBuilderPortal() {
  const orders = store.getOrders().filter(o => o.clientRole.includes('Builder') || store.getRole() === 'builder');
  const inventory = store.getResources().finishedInventory;

  return `
    <div class="view-header">
      <div class="view-title-group">
        <h1>Construction Builder & Contractor Portal</h1>
        <p>Estimate brick quantities, calculate mortar ratios, track job site dispatches, and request bulk quotes</p>
      </div>
      <div class="view-actions">
        <button class="btn btn-primary" id="btn-scroll-to-calc">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 7h6m-6 4h6m-6 4h6M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
          Open Brick Estimator
        </button>
      </div>
    </div>

    <!-- Brick Estimator Calculator Box -->
    <div class="calculator-card" id="brick-calculator-section" style="margin-bottom: 2.5rem;">
      <div style="margin-bottom: 1.5rem; border-bottom: 1px solid var(--bg-surface-border); padding-bottom: 1rem;">
        <h2 style="font-family:var(--font-heading); font-size:1.4rem; font-weight:800; color:var(--accent-amber); display:flex; align-items:center; gap:0.5rem;">
          📐 Construction Brick & Mortar Calculator
        </h2>
        <p style="font-size:0.88rem; color:var(--text-muted);">Enter wall dimensions to calculate exact brick count, mortar bags, and price estimate</p>
      </div>

      <div class="calc-grid">
        <!-- Inputs Form -->
        <div>
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem;">
            <div class="form-group">
              <label class="form-label">Wall Length (Feet)</label>
              <input type="number" id="calc-length" class="form-control" value="60" min="1" step="0.5">
            </div>
            <div class="form-group">
              <label class="form-label">Wall Height (Feet)</label>
              <input type="number" id="calc-height" class="form-control" value="10" min="1" step="0.5">
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Wall Thickness Strategy</label>
            <select id="calc-thickness" class="form-select">
              <option value="4.5">4.5-inch Half-Brick Single Skin (Partition Wall)</option>
              <option value="9" selected>9-inch Double-Brick Load Bearing Wall</option>
              <option value="13.5">13.5-inch Triple-Brick Heavy Structural Wall</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">Select Clay Brick Type</label>
            <select id="calc-brick-type" class="form-select">
              ${Object.values(inventory).map(b => `
                <option value="${b.pricePerBrick}" data-name="${b.name}">${b.name} (₹${b.pricePerBrick.toFixed(2)}/pc)</option>
              `).join('')}
            </select>
          </div>

          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem;">
            <div class="form-group">
              <label class="form-label">Mortar Joint Thickness</label>
              <select id="calc-mortar" class="form-select">
                <option value="0.375">3/8 inch (Standard)</option>
                <option value="0.5">1/2 inch (Heavy)</option>
                <option value="0.25">1/4 inch (Thin Joint)</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Waste & Breakage Factor</label>
              <select id="calc-waste" class="form-select">
                <option value="0.05">5% (Recommended)</option>
                <option value="0.08">8% (Complex Cutting)</option>
                <option value="0.10">10% (High Margin)</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Calculated Output Display Card -->
        <div class="calc-results-box">
          <div>
            <div style="font-size:0.8rem; text-transform:uppercase; color:var(--text-muted); font-weight:700; letter-spacing:0.05em; margin-bottom:0.5rem;">Calculation Results</div>
            
            <div class="calc-result-stat">
              <div class="calc-result-label">Total Net Bricks Required</div>
              <div class="calc-result-value" id="res-brick-count">7,560 <span style="font-size:1rem; font-weight:400; color:var(--text-main);">Pcs</span></div>
            </div>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-top:1rem; padding-top:1rem; border-top:1px solid var(--bg-surface-border);">
              <div>
                <div style="font-size:0.75rem; color:var(--text-muted);">Cement Bags Needed</div>
                <div style="font-size:1.1rem; font-weight:700; color:var(--text-main);" id="res-cement">18 Bags</div>
              </div>
              <div>
                <div style="font-size:0.75rem; color:var(--text-muted);">Masonry Sand Needed</div>
                <div style="font-size:1.1rem; font-weight:700; color:var(--text-main);" id="res-sand">2.8 Tons</div>
              </div>
            </div>

            <div style="margin-top:1.25rem; padding-top:1rem; border-top:1px dashed var(--primary-terracotta);">
              <div style="font-size:0.8rem; color:var(--text-muted);">Estimated Total Material Cost</div>
              <div style="font-family:var(--font-heading); font-size:1.8rem; font-weight:800; color:var(--status-success);" id="res-total-cost">₹64,260.00</div>
            </div>
          </div>

          <button class="btn btn-primary" id="btn-calc-place-order" style="margin-top:1.5rem; width:100%;">
            🚚 Convert Calculation to Bulk Order
          </button>
        </div>
      </div>
    </div>

    <!-- Builder's Active Orders List -->
    <h2 style="font-family:var(--font-heading); font-size:1.2rem; font-weight:700; margin-bottom:1rem; color:var(--text-main);">
      📦 Active Builder Job Site Dispatches
    </h2>

    <div class="table-card" style="margin-bottom:2.5rem;">
      <div class="table-toolbar">
        <h3 style="font-family:var(--font-heading); font-size:1.05rem; font-weight:700;">Site Orders</h3>
        <span class="badge badge-info">${orders.length} Orders Logged</span>
      </div>

      <div style="overflow-x:auto;">
        <table class="custom-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Project Site</th>
              <th>Brick Type</th>
              <th>Quantity</th>
              <th>Order Total</th>
              <th>Dispatch Status</th>
              <th>Assigned Freight</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${orders.map(o => `
              <tr>
                <td><strong style="color:var(--accent-amber);">${o.id}</strong></td>
                <td>
                  <div style="font-weight:600;">${o.clientName}</div>
                  <div style="font-size:0.75rem; color:var(--text-muted);">${o.siteAddress}</div>
                </td>
                <td>${o.brickType.split(' ')[0]}</td>
                <td><strong>${o.quantity.toLocaleString()}</strong></td>
                <td><strong style="color:var(--status-success);">₹${o.totalAmount.toLocaleString()}</strong></td>
                <td>
                  <span class="badge ${o.status === 'Dispatched' ? 'badge-warning' : (o.status === 'Delivered' ? 'badge-success' : 'badge-info')}">
                    ${o.status}
                  </span>
                </td>
                <td style="font-size:0.8rem; color:var(--text-muted);">${o.driverAssigned}</td>
                <td>
                  <button class="btn btn-secondary btn-sm btn-view-order" data-id="${o.id}">Track Truck</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Quotation Lifecycle & 1-Click Convert to Order Table (Directive 6) -->
    <div class="table-card">
      <div class="table-toolbar">
        <h3 style="font-family:var(--font-heading); font-size:1.05rem; font-weight:700;">💬 Quotations Register (Draft ➔ Sent ➔ Convert to Order)</h3>
        <span class="badge badge-neutral">${store.getQuotations().length} Quotations</span>
      </div>

      <div style="overflow-x:auto;">
        <table class="custom-table">
          <thead>
            <tr>
              <th>Quote ID</th>
              <th>Customer Name</th>
              <th>Requested Brick Grade</th>
              <th>Quantity</th>
              <th>Quotation Total (₹)</th>
              <th>Validity Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${store.getQuotations().map(q => `
              <tr>
                <td><strong style="color:var(--accent-amber);">${q.id}</strong></td>
                <td><strong style="color:var(--text-main);">${q.customerName}</strong></td>
                <td>${q.brickType.split(' ')[0]} ${q.brickType.split(' ')[1] || ''}</td>
                <td><strong>${q.quantity.toLocaleString()} Pcs</strong></td>
                <td><strong style="color:var(--status-success);">₹${q.totalAmount.toLocaleString()}</strong></td>
                <td>${q.validityDate}</td>
                <td>
                  <span class="badge ${q.status === 'Converted' ? 'badge-success' : (q.status === 'Sent' ? 'badge-warning' : 'badge-neutral')}">
                    ${q.status}
                  </span>
                </td>
                <td>
                  ${q.status !== 'Converted' ? `
                    <button class="btn btn-primary btn-sm btn-convert-quote" data-quote-id="${q.id}">
                      ✓ Accept & Convert to Order
                    </button>
                  ` : `<span style="color:var(--status-success); font-size:0.8rem; font-weight:700;">✓ Converted</span>`}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
