/* TerraBrick Enterprise - Raw Materials & Inventory Resources Tracker View */

import { store } from '../store.js';

export function renderResourceTracker() {
  const currentUser = store.getCurrentUser();
  const isAdmin = currentUser && currentUser.role === 'owner';

  const resources = store.getResources();
  const kilns = store.getKilnChambers();

  return `
    <div class="view-header">
      <div class="view-title-group">
        <h1>Kiln Resources & Finished Stock Inventory</h1>
        <p>Monitor raw clay deposits, coal fuel reserves, water tanks, drying shed queues, and finished grade stock</p>
      </div>
      ${isAdmin ? `
        <div class="view-actions">
          <button class="btn btn-primary" id="btn-open-restock-modal">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 4v16m-8-8h16"/></svg>
            Log Raw Material Shipment
          </button>
        </div>
      ` : ''}
    </div>

    <!-- Section 1: Raw Materials Stock -->
    <h2 style="font-family:var(--font-heading); font-size:1.2rem; font-weight:700; margin-bottom:1rem; color:var(--accent-amber);">
      🧱 1. Raw Materials Supply Chain (Kiln Fuel & Soil)
    </h2>

    <div class="resource-section">
      <!-- Clay Soil Card -->
      <div class="resource-card">
        <div class="resource-header">
          <span class="resource-name">
            <svg width="20" height="20" fill="none" stroke="var(--primary-terracotta)" stroke-width="2" viewBox="0 0 24 24"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
            Red Clay Soil Quarry Stock
          </span>
          <span class="badge ${resources.claySoilTons.current <= resources.claySoilTons.reorderLevel ? 'badge-danger' : 'badge-success'}">
            ${resources.claySoilTons.current <= resources.claySoilTons.reorderLevel ? 'Low Stock Alert' : 'Healthy Supply'}
          </span>
        </div>
        <div style="font-size:1.75rem; font-family:var(--font-heading); font-weight:800; margin-bottom:0.25rem;">
          ${resources.claySoilTons.current.toLocaleString()} <span style="font-size:0.9rem; font-weight:400; color:var(--text-muted);">${resources.claySoilTons.unit}</span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill fill-terracotta" style="width:${(resources.claySoilTons.current / resources.claySoilTons.max * 100).toFixed(0)}%"></div>
        </div>
        <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:var(--text-muted); margin-top:0.5rem;">
          <span>Max Capacity: ${resources.claySoilTons.max} Tons</span>
          <span>Re-order Threshold: ${resources.claySoilTons.reorderLevel} Tons</span>
        </div>
      </div>

      <!-- Coal Fuel Card -->
      <div class="resource-card">
        <div class="resource-header">
          <span class="resource-name">
            <svg width="20" height="20" fill="none" stroke="var(--accent-gold)" stroke-width="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
            Coal & Biomass Fuel
          </span>
          <span class="badge ${resources.coalFuelTons.current <= resources.coalFuelTons.reorderLevel ? 'badge-danger' : 'badge-warning'}">
            ${resources.coalFuelTons.current <= resources.coalFuelTons.reorderLevel ? 'Re-order Urgently' : 'Optimal Burn Reserve'}
          </span>
        </div>
        <div style="font-size:1.75rem; font-family:var(--font-heading); font-weight:800; margin-bottom:0.25rem;">
          ${resources.coalFuelTons.current.toLocaleString()} <span style="font-size:0.9rem; font-weight:400; color:var(--text-muted);">${resources.coalFuelTons.unit}</span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill fill-amber" style="width:${(resources.coalFuelTons.current / resources.coalFuelTons.max * 100).toFixed(0)}%"></div>
        </div>
        <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:var(--text-muted); margin-top:0.5rem;">
          <span>Max Capacity: ${resources.coalFuelTons.max} Tons</span>
          <span>Burn Cost: ₹${resources.coalFuelTons.costPerUnit}/Ton</span>
        </div>
      </div>

      <!-- Water Tanks Card -->
      <div class="resource-card">
        <div class="resource-header">
          <span class="resource-name">
            <svg width="20" height="20" fill="none" stroke="var(--status-info)" stroke-width="2" viewBox="0 0 24 24"><path d="M20 14.66V20a2 2 0 01-2 2H6a2 2 0 01-2-2v-5.34a2 2 0 01.586-1.414l7-7a2 2 0 012.828 0l7 7A2 2 0 0120 14.66z"/></svg>
            Water Mixing Storage Tanks
          </span>
          <span class="badge badge-info">Normal Operational</span>
        </div>
        <div style="font-size:1.75rem; font-family:var(--font-heading); font-weight:800; margin-bottom:0.25rem;">
          ${resources.waterReservesK.current} <span style="font-size:0.9rem; font-weight:400; color:var(--text-muted);">${resources.waterReservesK.unit}</span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill fill-blue" style="width:${(resources.waterReservesK.current / resources.waterReservesK.max * 100).toFixed(0)}%"></div>
        </div>
        <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:var(--text-muted); margin-top:0.5rem;">
          <span>Max Capacity: ${resources.waterReservesK.max} k-Liters</span>
          <span>Water Pressure: 4.2 Bar</span>
        </div>
      </div>
    </div>

    <!-- Section 2: Finished Brick Inventory Breakdown -->
    <h2 style="font-family:var(--font-heading); font-size:1.2rem; font-weight:700; margin-top:2rem; margin-bottom:1rem; color:var(--accent-amber);">
      🔥 2. Ready-to-Ship Finished Red Brick Inventory
    </h2>

    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:1.25rem; margin-bottom:2.5rem;">
      ${Object.entries(resources.finishedInventory).map(([key, item]) => `
        <div style="background:var(--bg-surface); border:1px solid var(--bg-surface-border); border-radius:var(--radius-lg); padding:1.25rem; display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <div style="font-size:0.8rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; margin-bottom:0.25rem;">Finished Product</div>
            <div style="font-family:var(--font-heading); font-size:1.05rem; font-weight:700; color:var(--text-main); margin-bottom:0.75rem;">${item.name}</div>
          </div>
          
          <div style="background:var(--bg-dark); border-radius:var(--radius-md); padding:0.85rem; display:flex; justify-content:space-between; align-items:center;">
            <div>
              <div style="font-size:0.75rem; color:var(--text-subtle);">Available Stock</div>
              <div style="font-family:var(--font-heading); font-size:1.4rem; font-weight:800; color:var(--accent-gold);">${item.count.toLocaleString()}</div>
            </div>
            <div style="text-align:right;">
              <div style="font-size:0.75rem; color:var(--text-subtle);">Unit Price</div>
              <div style="font-size:1.1rem; font-weight:700; color:var(--status-success);">₹${item.pricePerBrick.toFixed(2)}</div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Section 3: Kiln Firing Chamber Deep-Dive Table -->
    <div class="table-card" style="margin-bottom:2.5rem;">
      <div class="table-toolbar">
        <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:700;">Kiln Chamber Firing & Cool-Down Log</h3>
        <span class="badge badge-neutral">${kilns.length} Operational Chambers</span>
      </div>
      <table class="custom-table">
        <thead>
          <tr>
            <th>Chamber ID</th>
            <th>Operating Status</th>
            <th>Core Kiln Temp</th>
            <th>Bricks Loaded</th>
            <th>Burn Progress</th>
            <th>Time Remaining</th>
          </tr>
        </thead>
        <tbody>
          ${kilns.map(k => `
            <tr>
              <td><strong style="color:var(--text-main);">${k.id}</strong></td>
              <td>
                <span class="badge ${k.status === 'Firing' ? 'badge-warning' : (k.status === 'Cooling' ? 'badge-info' : 'badge-neutral')}">
                  ${k.status}
                </span>
              </td>
              <td><strong style="color:var(--accent-amber);">${k.temp}</strong></td>
              <td>${k.bricksLoaded.toLocaleString()} Units</td>
              <td>
                <div style="display:flex; align-items:center; gap:0.75rem;">
                  <div class="progress-bar-bg" style="width:100px; margin:0;">
                    <div class="progress-bar-fill fill-terracotta" style="width:${k.completionPct}%"></div>
                  </div>
                  <span>${k.completionPct}%</span>
                </div>
              </td>
              <td>${k.cyclesLeftHours > 0 ? k.cyclesLeftHours + ' Hours' : 'Complete'}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <!-- Section 4: Auditable Stock Movement Ledger (Directive 3) -->
    <div class="table-card">
      <div class="table-toolbar">
        <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:700;">📊 Auditable Stock Movement Ledger</h3>
        <span class="badge badge-neutral">Opening + Production - Dispatched = Available</span>
      </div>
      <div style="overflow-x:auto;">
        <table class="custom-table">
          <thead>
            <tr>
              <th>Movement ID</th>
              <th>Date</th>
              <th>Movement Type</th>
              <th>Brick Grade Item</th>
              <th>Quantity Change</th>
              <th>Order / Batch Ref</th>
              <th>Balance After</th>
            </tr>
          </thead>
          <tbody>
            ${store.getStockMovements().map(m => `
              <tr>
                <td><strong style="color:var(--accent-amber);">${m.id}</strong></td>
                <td>${m.date}</td>
                <td>
                  <span class="badge ${m.type === 'PRODUCTION_IN' ? 'badge-success' : 'badge-warning'}">
                    ${m.type}
                  </span>
                </td>
                <td><strong style="color:var(--text-main);">${m.item}</strong></td>
                <td>
                  <strong style="color:${m.qty > 0 ? 'var(--status-success)' : 'var(--status-danger)'};">
                    ${m.qty > 0 ? '+' : ''}${m.qty.toLocaleString()} Pcs
                  </strong>
                </td>
                <td><code style="color:var(--accent-gold); font-size:0.78rem;">${m.reference}</code></td>
                <td><strong>${m.balanceAfter.toLocaleString()} Pcs</strong></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
