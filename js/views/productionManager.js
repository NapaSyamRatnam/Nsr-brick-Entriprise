/* NSR Brick Enterprise - Production & Kiln Chamber Management Module */

import { store } from '../store.js';

export function renderProductionManager() {
  const currentUser = store.getCurrentUser();
  const isAdmin = currentUser && (currentUser.role === 'owner' || currentUser.role === 'worker');

  const batches = store.getProductionBatches();
  const kilns = store.getKilnChambers();
  const resources = store.getResources();

  const totalGoodBricks = batches.reduce((sum, b) => sum + b.goodBricks, 0);
  const totalDamagedBricks = batches.reduce((sum, b) => sum + b.damagedBricks, 0);
  const activeKilnsCount = kilns.filter(k => k.status === 'Firing').length;

  return `
    <div class="view-header">
      <div class="view-title-group">
        <h1>🏭 Brick Production & Kiln Chamber Management</h1>
        <p>Monitor raw material batch mixing, vacuum wire-cut moulding, drying shed queues, and 1,050°C tunnel kiln firing</p>
      </div>
      ${isAdmin ? `
        <div class="view-actions">
          <button class="btn btn-primary" id="btn-open-new-batch-modal">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 4v16m-8-8h16"/></svg>
            Log New Production Batch
          </button>
        </div>
      ` : ''}
    </div>

    <!-- Production KPI Summary Cards -->
    <div class="metrics-grid">
      <div class="metric-card accent-amber">
        <div class="metric-header">
          <span class="metric-title">Good Bricks Output</span>
          <div class="metric-icon">🧱</div>
        </div>
        <div class="metric-value">${totalGoodBricks.toLocaleString()} Pcs</div>
        <div class="metric-subtext positive">97.2% Quality Clearance Rate</div>
      </div>

      <div class="metric-card accent-red">
        <div class="metric-header">
          <span class="metric-title">Damaged / Rejected Bricks</span>
          <div class="metric-icon">⚠️</div>
        </div>
        <div class="metric-value">${totalDamagedBricks.toLocaleString()} Pcs</div>
        <div class="metric-subtext warning">2.8% Manufacturing Wastage</div>
      </div>

      <div class="metric-card accent-gold">
        <div class="metric-header">
          <span class="metric-title">Active Tunnel Kilns</span>
          <div class="metric-icon">🔥</div>
        </div>
        <div class="metric-value">${activeKilnsCount} / ${kilns.length} Operating</div>
        <div class="metric-subtext positive">Continuous 1,050°C Firing</div>
      </div>
    </div>

    <!-- Kiln Chamber Deep-Dive Grid -->
    <h2 style="font-family:var(--font-heading); font-size:1.25rem; font-weight:800; margin-bottom:1rem; color:var(--text-main);">
      🔥 Dedicated Kiln Chamber Monitor (Module 6)
    </h2>

    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:1.25rem; margin-bottom:2.5rem;">
      ${kilns.map(k => `
        <div style="background:var(--bg-surface); border:1px solid var(--bg-surface-border); border-radius:var(--radius-lg); padding:1.25rem;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
            <div style="font-family:var(--font-heading); font-weight:800; font-size:1.1rem; color:var(--accent-gold);">${k.id}</div>
            <span class="badge ${k.status === 'Firing' ? 'badge-warning' : (k.status === 'Cooling' ? 'badge-info' : 'badge-neutral')}">${k.status}</span>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; font-size:0.82rem; margin-bottom:0.85rem;">
            <div>
              <div style="color:var(--text-muted);">Core Temperature</div>
              <div style="font-weight:800; font-size:1.2rem; color:var(--accent-amber);">${k.temp}</div>
            </div>
            <div>
              <div style="color:var(--text-muted);">Bricks Loaded</div>
              <div style="font-weight:700; font-size:1.1rem; color:var(--text-main);">${k.bricksLoaded.toLocaleString()}</div>
            </div>
          </div>

          <div style="margin-bottom:0.5rem;">
            <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--text-muted); margin-bottom:0.25rem;">
              <span>Firing Cycle Progress</span>
              <span>${k.completionPct}%</span>
            </div>
            <div class="progress-bar-bg" style="margin:0;">
              <div class="progress-bar-fill fill-terracotta" style="width:${k.completionPct}%"></div>
            </div>
          </div>

          <div style="font-size:0.75rem; color:var(--text-subtle); text-align:right;">
            Cycles Remaining: ${k.cyclesLeftHours > 0 ? k.cyclesLeftHours + ' Hours' : 'Cycle Complete'}
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Production Batches Log Table (Module 5) -->
    <div class="table-card">
      <div class="table-toolbar">
        <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:700;">Production Batches & Material Consumption Log</h3>
        <span class="badge badge-neutral">${batches.length} Recorded Batches</span>
      </div>

      <div style="overflow-x:auto;">
        <table class="custom-table">
          <thead>
            <tr>
              <th>Batch ID</th>
              <th>Date</th>
              <th>Raw Clay Used</th>
              <th>Coal Fuel Used</th>
              <th>Good Bricks Output</th>
              <th>Damaged Bricks</th>
              <th>Kiln Chamber</th>
              <th>Operator</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${batches.map(b => `
              <tr>
                <td><strong style="color:var(--accent-amber);">${b.id}</strong></td>
                <td>${b.date}</td>
                <td><strong>${b.rawClayTons} Tons</strong></td>
                <td>${b.coalFuelTons} Tons</td>
                <td><strong style="color:var(--status-success);">${b.goodBricks.toLocaleString()} Pcs</strong></td>
                <td><span style="color:var(--status-danger); font-weight:600;">${b.damagedBricks.toLocaleString()} Pcs</span></td>
                <td><span class="badge badge-neutral">${b.kilnChamber}</span></td>
                <td>${b.operator}</td>
                <td>
                  <span class="badge ${b.status === 'Completed' ? 'badge-success' : (b.status === 'Firing' ? 'badge-warning' : 'badge-info')}">${b.status}</span>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
