/* NSR Brick Enterprise - Quality Control (QC) & Strength Testing Module */

import { store } from '../store.js';

export function renderQCManager() {
  const currentUser = store.getCurrentUser();
  const isAdmin = currentUser && (currentUser.role === 'owner' || currentUser.role === 'production');

  const qcLogs = store.getQualityControl();
  const totalApproved = qcLogs.filter(q => q.status === 'APPROVED').length;

  return `
    <div class="view-header">
      <div class="view-title-group">
        <h1>🧪 Quality Control (QC) & Strength Testing</h1>
        <p>Laboratory compressive strength testing, water absorption analysis, dimensional tolerance, and batch clearance certification</p>
      </div>
      ${isAdmin ? `
        <div class="view-actions">
          <button class="btn btn-primary" id="btn-open-log-qc">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 4v16m-8-8h16"/></svg>
            Log New QC Test
          </button>
        </div>
      ` : ''}
    </div>

    <!-- QC Summary Metrics -->
    <div class="metrics-grid">
      <div class="metric-card accent-green">
        <div class="metric-header">
          <span class="metric-title">Approved QC Batches</span>
          <div class="metric-icon">✓</div>
        </div>
        <div class="metric-value">${totalApproved} / ${qcLogs.length} Batches</div>
        <div class="metric-subtext positive">Cleared for High-Rise Construction</div>
      </div>

      <div class="metric-card accent-gold">
        <div class="metric-header">
          <span class="metric-title">Avg Compressive Strength</span>
          <div class="metric-icon">💪</div>
        </div>
        <div class="metric-value">3,975 PSI</div>
        <div class="metric-subtext positive">Exceeds IS 1077 Grade-A Standard</div>
      </div>

      <div class="metric-card accent-amber">
        <div class="metric-header">
          <span class="metric-title">Avg Water Absorption Rate</span>
          <div class="metric-icon">🌧️</div>
        </div>
        <div class="metric-value">6.0%</div>
        <div class="metric-subtext positive">Monsoon Dampness Resistant</div>
      </div>
    </div>

    <!-- Quality Control Records Table (Module 5) -->
    <div class="table-card">
      <div class="table-toolbar">
        <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:700;">Laboratory Brick Testing & Certification Register</h3>
        <span class="badge badge-neutral">${qcLogs.length} QC Audits Recorded</span>
      </div>

      <div style="overflow-x:auto;">
        <table class="custom-table">
          <thead>
            <tr>
              <th>QC Report ID</th>
              <th>Batch ID</th>
              <th>Sample Qty</th>
              <th>Compressive Strength (PSI)</th>
              <th>Water Absorption %</th>
              <th>Dimension & Visual</th>
              <th>Passed Qty</th>
              <th>Damaged / Rejected</th>
              <th>QC Inspector</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${qcLogs.map(q => `
              <tr>
                <td><strong style="color:var(--accent-amber);">${q.id}</strong></td>
                <td><strong style="color:var(--text-main);">${q.batchId}</strong></td>
                <td>${q.sampleQty} Pcs</td>
                <td><strong style="color:var(--accent-gold);">${q.compressiveStrength.toLocaleString()} PSI</strong></td>
                <td><strong style="color:var(--status-info);">${q.waterAbsorption}%</strong></td>
                <td>
                  <span class="badge badge-success">Dimensions PASS</span>
                  <span class="badge badge-success">Visual PASS</span>
                </td>
                <td><strong style="color:var(--status-success);">${q.passedQty.toLocaleString()} Pcs</strong></td>
                <td><span style="color:var(--status-danger); font-weight:600;">${q.rejectedQty.toLocaleString()} Pcs</span></td>
                <td>${q.inspector}</td>
                <td>
                  <span class="badge ${q.status === 'APPROVED' ? 'badge-success' : 'badge-danger'}">✓ ${q.status}</span>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
