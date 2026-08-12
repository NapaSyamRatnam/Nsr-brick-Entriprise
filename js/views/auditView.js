/* NSR Brick Enterprise - Audit Logs & Data Backup / Export Module */

import { store } from '../store.js';

export function renderAuditView() {
  const currentUser = store.getCurrentUser();
  const isAdmin = currentUser && currentUser.role === 'owner';

  const auditLogs = store.getAuditLogs();

  return `
    <div class="view-header">
      <div class="view-title-group">
        <h1>🔐 Security Audit Logs & Data Backup Engine</h1>
        <p>Immutable system audit trails, user action tracking, and 1-Click CSV data exports for business compliance</p>
      </div>
    </div>

    <!-- Data Backup & CSV Export Engine -->
    <div style="background:var(--bg-surface); border:1px solid var(--primary-terracotta); border-radius:var(--radius-lg); padding:1.5rem 2rem; margin-bottom:2.5rem; box-shadow:var(--shadow-md);">
      <h2 style="font-family:var(--font-heading); font-size:1.25rem; font-weight:800; color:var(--text-main); margin-bottom:0.5rem;">
        📥 Enterprise Data Export & Backup Strategy
      </h2>
      <p style="color:var(--text-muted); font-size:0.88rem; margin-bottom:1.25rem;">
        Export complete operational data records to CSV / Excel spreadsheets or trigger on-demand Firestore backups.
      </p>

      <div style="display:flex; gap:1rem; flex-wrap:wrap;">
        <button class="btn btn-primary btn-sm btn-export-csv" data-type="orders">📄 Export Orders CSV</button>
        <button class="btn btn-secondary btn-sm btn-export-csv" data-type="payments">💵 Export Payments CSV</button>
        <button class="btn btn-secondary btn-sm btn-export-csv" data-type="production">🏭 Export Production CSV</button>
        <button class="btn btn-secondary btn-sm btn-export-csv" data-type="customers">👥 Export Customers CSV</button>
        <button class="btn btn-secondary btn-sm btn-export-csv" data-type="inventory">📦 Export Inventory CSV</button>
      </div>
    </div>

    <!-- Immutable Audit Logs Register Table (Module 12) -->
    <div class="table-card">
      <div class="table-toolbar">
        <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:700;">System Action Audit Log Register</h3>
        <span class="badge badge-neutral">${auditLogs.length} Log Entries</span>
      </div>

      <div style="overflow-x:auto;">
        <table class="custom-table">
          <thead>
            <tr>
              <th>Log ID</th>
              <th>Timestamp</th>
              <th>User Account</th>
              <th>Action Code</th>
              <th>Activity Details</th>
              <th>Session Origin</th>
            </tr>
          </thead>
          <tbody>
            ${auditLogs.map(l => `
              <tr>
                <td><strong style="color:var(--accent-amber);">${l.id}</strong></td>
                <td><small style="color:var(--text-muted);">${l.timestamp}</small></td>
                <td><strong style="color:var(--text-main);">${l.user}</strong></td>
                <td><span class="badge badge-info">${l.action}</span></td>
                <td style="font-size:0.8rem; color:var(--text-main);">${l.details}</td>
                <td><code style="font-size:0.75rem; color:var(--text-subtle);">${l.ipAddress}</code></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
