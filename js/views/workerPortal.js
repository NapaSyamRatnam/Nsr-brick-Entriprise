/* TerraBrick Enterprise - Construction Site Worker & Foreman Quick Re-Supply Portal */

import { store } from '../store.js';

export function renderWorkerPortal() {
  const orders = store.getOrders();
  const activeDispatches = orders.filter(o => o.status === 'Dispatched' || o.status === 'Moulding & Firing');
  const inventory = store.getResources().finishedInventory;

  return `
    <div class="view-header">
      <div class="view-title-group">
        <h1>Site Worker & Foreman Fast Express Hub</h1>
        <p>1-Click site re-supply, live truck arrival countdown, driver contact & site transit damage reporting</p>
      </div>
      <div class="view-actions">
        <button class="btn btn-primary" id="btn-quick-resupply-modal">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          ⚡ 1-Click Site Re-Supply
        </button>
      </div>
    </div>

    <!-- Live Driver ETA Status Card -->
    <div style="background:linear-gradient(135deg, rgba(192, 74, 39, 0.15), var(--bg-surface)); border:1px solid var(--primary-terracotta); border-radius:var(--radius-lg); padding:1.5rem; margin-bottom:2rem; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:1.5rem;">
      <div style="display:flex; align-items:center; gap:1.25rem;">
        <div style="width:56px; height:56px; background:var(--primary-terracotta); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:1.8rem; box-shadow:0 0 15px var(--primary-terracotta);">
          🚚
        </div>
        <div>
          <div style="font-size:0.8rem; text-transform:uppercase; font-weight:700; color:var(--accent-amber); letter-spacing:0.05em;">Incoming Dispatch En Route</div>
          <div style="font-family:var(--font-heading); font-size:1.4rem; font-weight:800; color:var(--text-main);">Truck #TX-409 (Driver: Robert Vance)</div>
          <div style="font-size:0.85rem; color:var(--text-muted); margin-top:0.25rem;">Carrying 50,000 Grade-A Red Clay Bricks • Site: Metro Horizon Plaza</div>
        </div>
      </div>

      <div style="text-align:right;">
        <div style="font-size:0.78rem; color:var(--text-muted);">Estimated Delivery ETA</div>
        <div style="font-family:var(--font-heading); font-size:2rem; font-weight:800; color:var(--status-warning); animate:pulse 2s infinite;">1 Hour 45 Mins</div>
        <button class="btn btn-outline-terracotta btn-sm" style="margin-top:0.5rem;" onclick="alert('Calling Driver Robert Vance at +1 (555) 019-2834...')">
          📞 Call Driver
        </button>
      </div>
    </div>

    <!-- 2 Column Grid: Fast Re-Order Form & Damage Reporting -->
    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1.75rem; margin-bottom:2.5rem;">
      
      <!-- Quick Site Re-Supply Form -->
      <div style="background:var(--bg-surface); border:1px solid var(--bg-surface-border); border-radius:var(--radius-lg); padding:1.5rem;">
        <h3 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:700; color:var(--accent-amber); margin-bottom:1rem; display:flex; align-items:center; gap:0.5rem;">
          ⚡ Urgent Site Brick Re-Stock
        </h3>

        <form id="form-worker-resupply">
          <div class="form-group">
            <label class="form-label">Job Site Location / Address</label>
            <input type="text" id="ws-site-name" class="form-control" value="Sector 12 Metro Horizon Plaza - Block B" required>
          </div>

          <div class="form-group">
            <label class="form-label">Select Brick Grade Needed</label>
            <select id="ws-brick-type" class="form-select">
              ${Object.values(inventory).map(b => `
                <option value="${b.name}">${b.name}</option>
              `).join('')}
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">Quantity Needed (Pcs)</label>
            <input type="number" id="ws-quantity" class="form-control" value="5000" min="500" step="500">
          </div>

          <div class="form-group">
            <label class="form-label">Unloading Equipment Required</label>
            <select id="ws-unloading" class="form-select">
              <option value="Hydraulic Tipper Crane Truck">Hydraulic Tipper Crane Truck</option>
              <option value="Forklift Palletized Delivery">Forklift Palletized Delivery</option>
              <option value="Manual Labor Unloading">Manual Labor Unloading</option>
            </select>
          </div>

          <button type="submit" class="btn btn-primary" style="width:100%; margin-top:0.5rem;">
            Submit Urgent Re-Supply Order
          </button>
        </form>
      </div>

      <!-- Report Transit Breakage / Damage -->
      <div style="background:var(--bg-surface); border:1px solid var(--bg-surface-border); border-radius:var(--radius-lg); padding:1.5rem;">
        <h3 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:700; color:var(--status-warning); margin-bottom:1rem; display:flex; align-items:center; gap:0.5rem;">
          ⚠️ Report Delivery Damage / Replacement
        </h3>

        <form id="form-damage-report" onsubmit="event.preventDefault(); alert('Damage report logged successfully! Free replacement bricks queued with credit voucher.');">
          <div class="form-group">
            <label class="form-label">Select Delivered Order ID</label>
            <select class="form-select">
              ${orders.map(o => `
                <option value="${o.id}">${o.id} - ${o.clientName}</option>
              `).join('')}
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">Number of Damaged / Broken Bricks</label>
            <input type="number" class="form-control" placeholder="e.g. 150" value="120">
          </div>

          <div class="form-group">
            <label class="form-label">Damage Type / Cause</label>
            <select class="form-select">
              <option value="Corner Chipping in Transit">Corner Chipping in Transit</option>
              <option value="Corner Cracking during Unloading">Corner Cracking during Unloading</option>
              <option value="Kiln Firing Micro-cracks">Kiln Firing Micro-cracks</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">Attach Site Photo Proof (Simulation)</label>
            <input type="file" class="form-control" style="font-size:0.8rem;">
          </div>

          <button type="submit" class="btn btn-secondary" style="width:100%; margin-top:0.5rem;">
            Request Replacement / Credit Note
          </button>
        </form>
      </div>

    </div>
  `;
}
