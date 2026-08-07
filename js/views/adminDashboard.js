/* NSR Brick Enterprise - Executive Dashboard ERP & CRM View */

import { store } from '../store.js';

export function renderAdminDashboard() {
  const resources = store.getResources();
  const orders = store.getOrders();
  const payments = store.getPayments();
  const kilns = store.getKilnChambers();
  const fleet = store.getFleet();

  const totalRevenue = payments.reduce((acc, p) => acc + p.amount, 0);
  const totalPendingDues = orders.reduce((acc, o) => acc + o.balance, 0);
  const totalBricksInStock = Object.values(store.getProducts()).reduce((acc, item) => acc + item.stock, 0);
  const activeOrdersCount = orders.filter(o => o.status !== 'Delivered').length;

  return `
    <div class="view-header">
      <div class="view-title-group">
        <h1>NSR Kiln Executive Dashboard (ERP & CRM)</h1>
        <p>Real-time telemetry on raw clay stock, kiln firing chambers, dispatch logistics & financial health</p>
      </div>
      <div class="view-actions">
        <button class="btn btn-secondary btn-sm" id="btn-restock-quick">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 4v16m-8-8h16"/></svg>
          Restock Materials
        </button>
        <button class="btn btn-primary btn-sm" id="btn-new-order-admin">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
          Log New Brick Order
        </button>
      </div>
    </div>

    <!-- Top KPI Metric Cards Grid -->
    <div class="metrics-grid">
      <div class="metric-card accent-amber">
        <div class="metric-header">
          <span class="metric-title">Finished Clay Bricks Stock</span>
          <div class="metric-icon">🧱</div>
        </div>
        <div class="metric-value">${(totalBricksInStock / 1000).toFixed(0)}k <span style="font-size: 1rem; font-weight:400; color:var(--text-muted);">Units</span></div>
        <div class="metric-subtext positive">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
          Sufficient stock for 3.5 weeks
        </div>
      </div>

      <div class="metric-card accent-gold">
        <div class="metric-header">
          <span class="metric-title">Total Payments Collected</span>
          <div class="metric-icon">💵</div>
        </div>
        <div class="metric-value">₹${totalRevenue.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
        <div class="metric-subtext positive">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
          Verified bank & UPI cleared
        </div>
      </div>

      <div class="metric-card accent-green">
        <div class="metric-header">
          <span class="metric-title">Active Orders in Pipeline</span>
          <div class="metric-icon">📦</div>
        </div>
        <div class="metric-value">${activeOrdersCount} <span style="font-size: 1rem; font-weight:400; color:var(--text-muted);">Active Jobs</span></div>
        <div class="metric-subtext positive">
          ${fleet.filter(f => f.status.includes('Transit')).length} Freight trucks en route
        </div>
      </div>

      <div class="metric-card accent-blue">
        <div class="metric-header">
          <span class="metric-title">Outstanding Receivables</span>
          <div class="metric-icon">⌛</div>
        </div>
        <div class="metric-value">₹${totalPendingDues.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
        <div class="metric-subtext warning">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
          Pending clearing from 2 builders
        </div>
      </div>
    </div>

    <!-- Kiln Firing Chambers Live Telemetry Grid -->
    <div style="margin-bottom: 2rem;">
      <h2 style="font-family:var(--font-heading); font-size:1.25rem; font-weight:700; margin-bottom: 1rem; display:flex; align-items:center; gap:0.5rem;">
        <span style="display:inline-block; width:10px; height:10px; border-radius:50%; background:var(--primary-terracotta);"></span>
        NSR Tunnel Kilns Real-Time Firing Telemetry
      </h2>
      
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(270px, 1fr)); gap: 1.25rem;">
        ${kilns.map(k => `
          <div style="background:var(--bg-surface); border:1px solid var(--bg-surface-border); border-radius:var(--radius-lg); padding:1.25rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
              <span style="font-family:var(--font-heading); font-weight:700; font-size:1.1rem; color:var(--text-main);">${k.id}</span>
              <span class="badge ${k.status === 'Firing' ? 'badge-warning' : (k.status === 'Cooling' ? 'badge-info' : 'badge-neutral')}">
                ${k.status === 'Firing' ? '🔥 ' + k.status : k.status}
              </span>
            </div>
            
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem; margin-bottom:0.75rem; font-size:0.85rem; color:var(--text-muted);">
              <div>Core Temp: <strong style="color:var(--text-main);">${k.temp}</strong></div>
              <div>Bricks Baked: <strong style="color:var(--text-main);">${k.bricksLoaded.toLocaleString()}</strong></div>
            </div>

            <div class="progress-bar-bg">
              <div class="progress-bar-fill fill-terracotta" style="width: ${k.completionPct}%"></div>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--text-subtle); margin-top:0.25rem;">
              <span>Progress: ${k.completionPct}%</span>
              <span>${k.cyclesLeftHours > 0 ? k.cyclesLeftHours + 'h remaining' : 'Completed'}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Raw Material Resource Gauges & Recent Dispatch Split -->
    <div style="display:grid; grid-template-columns: 1fr 1.2fr; gap: 1.5rem;">
      <!-- Raw Materials Stock -->
      <div style="background:var(--bg-surface); border:1px solid var(--bg-surface-border); border-radius:var(--radius-lg); padding:1.5rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.25rem;">
          <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:700;">Raw Material Supplies</h3>
          <button class="btn btn-outline-terracotta btn-sm nav-link-trigger" data-view="resources">Manage Stock</button>
        </div>

        <div style="margin-bottom: 1.25rem;">
          <div style="display:flex; justify-content:space-between; font-size:0.88rem; margin-bottom:0.35rem;">
            <span><strong style="color:var(--accent-amber);">Red Clay Soil Quarry Stock</strong></span>
            <span><strong>${resources.claySoilTons.current}</strong> / ${resources.claySoilTons.max} ${resources.claySoilTons.unit}</span>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill fill-terracotta" style="width: ${(resources.claySoilTons.current / resources.claySoilTons.max * 100).toFixed(0)}%"></div>
          </div>
        </div>

        <div style="margin-bottom: 1.25rem;">
          <div style="display:flex; justify-content:space-between; font-size:0.88rem; margin-bottom:0.35rem;">
            <span><strong style="color:var(--accent-gold);">Coal & Biomass Fuel</strong></span>
            <span><strong>${resources.coalFuelTons.current}</strong> / ${resources.coalFuelTons.max} ${resources.coalFuelTons.unit}</span>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill fill-amber" style="width: ${(resources.coalFuelTons.current / resources.coalFuelTons.max * 100).toFixed(0)}%"></div>
          </div>
        </div>

        <div style="margin-bottom: 1rem;">
          <div style="display:flex; justify-content:space-between; font-size:0.88rem; margin-bottom:0.35rem;">
            <span><strong style="color:var(--status-info);">Water Storage Tanks</strong></span>
            <span><strong>${resources.waterReservesK.current}</strong> / ${resources.waterReservesK.max} ${resources.waterReservesK.unit}</span>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill fill-blue" style="width: ${(resources.waterReservesK.current / resources.waterReservesK.max * 100).toFixed(0)}%"></div>
          </div>
        </div>
      </div>

      <!-- Live Order Feed -->
      <div style="background:var(--bg-surface); border:1px solid var(--bg-surface-border); border-radius:var(--radius-lg); padding:1.5rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.25rem;">
          <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:700;">Recent Dispatch & Orders</h3>
          <button class="btn btn-outline-terracotta btn-sm nav-link-trigger" data-view="orders">All Orders (${orders.length})</button>
        </div>

        <div style="display:flex; flex-direction:column; gap:0.85rem;">
          ${orders.slice(0, 3).map(o => `
            <div style="background:var(--bg-dark); border:1px solid var(--bg-surface-border); border-radius:var(--radius-md); padding:0.85rem 1rem; display:flex; justify-content:space-between; align-items:center;">
              <div>
                <div style="font-weight:700; font-size:0.9rem; color:var(--text-main);">${o.id} - ${o.clientName}</div>
                <div style="font-size:0.78rem; color:var(--text-muted); margin-top:0.15rem;">
                  ${o.quantity.toLocaleString()} x ${o.brickType.split(' ')[1] || 'Red Clay'} • Site: ${o.siteAddress.substring(0, 25)}...
                </div>
              </div>
              <div style="text-align:right;">
                <span class="badge ${o.status === 'Dispatched' ? 'badge-warning' : (o.status === 'Delivered' ? 'badge-success' : 'badge-info')}">
                  ${o.status}
                </span>
                <div style="font-size:0.85rem; font-weight:700; color:var(--accent-gold); margin-top:0.25rem;">₹${o.totalAmount.toLocaleString()}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}
