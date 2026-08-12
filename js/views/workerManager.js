/* NSR Brick Enterprise - Worker & Shift Roster Management Module */

import { store } from '../store.js';

export function renderWorkerManager() {
  const currentUser = store.getCurrentUser();
  const isAdmin = currentUser && currentUser.role === 'owner';

  const workers = store.getWorkers();

  return `
    <div class="view-header">
      <div class="view-title-group">
        <h1>👷 Worker & Shift Operations Management</h1>
        <p>Manage kiln operators, moulding technicians, loading foremen, attendance, and shift duty assignments</p>
      </div>
      ${isAdmin ? `
        <div class="view-actions">
          <button class="btn btn-primary" id="btn-open-add-worker">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 4v16m-8-8h16"/></svg>
            Add New Worker
          </button>
        </div>
      ` : ''}
    </div>

    <!-- Worker Roster Grid -->
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:1.25rem; margin-bottom:2.5rem;">
      ${workers.map(w => `
        <div style="background:var(--bg-surface); border:1px solid var(--bg-surface-border); border-radius:var(--radius-lg); padding:1.25rem;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
            <div style="font-family:var(--font-heading); font-weight:800; font-size:1.1rem; color:var(--text-main);">${w.name}</div>
            <span class="badge ${w.attendance === 'Present' || w.attendance === 'On Duty' ? 'badge-success' : 'badge-warning'}">${w.attendance}</span>
          </div>

          <div style="font-size:0.8rem; color:var(--accent-amber); font-weight:700; margin-bottom:0.25rem;">${w.role}</div>
          <div style="font-size:0.78rem; color:var(--text-muted); margin-bottom:0.75rem;">Phone: ${w.phone} • Daily Wage: ₹${w.dailyWage}</div>

          <div style="background:var(--bg-dark); padding:0.75rem; border-radius:var(--radius-md); font-size:0.78rem; border:1px solid var(--bg-surface-border);">
            <div style="color:var(--text-subtle); font-size:0.7rem; font-weight:700; text-transform:uppercase;">Shift: ${w.shift}</div>
            <div style="color:var(--accent-gold); font-weight:600; margin-top:0.25rem;">Assigned: ${w.workAssigned}</div>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Worker Attendance Table (Module 11) -->
    <div class="table-card">
      <div class="table-toolbar">
        <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:700;">Factory Workers Roster & Daily Wages Register</h3>
        <span class="badge badge-neutral">${workers.length} Total Workers</span>
      </div>

      <div style="overflow-x:auto;">
        <table class="custom-table">
          <thead>
            <tr>
              <th>Worker ID</th>
              <th>Name & Phone</th>
              <th>Role</th>
              <th>Shift Schedule</th>
              <th>Daily Wage (₹)</th>
              <th>Today's Attendance</th>
              <th>Current Work Assignment</th>
            </tr>
          </thead>
          <tbody>
            ${workers.map(w => `
              <tr>
                <td><strong style="color:var(--accent-amber);">${w.id}</strong></td>
                <td>
                  <div style="font-weight:700; color:var(--text-main);">${w.name}</div>
                  <div style="font-size:0.75rem; color:var(--text-muted);">${w.phone}</div>
                </td>
                <td><span class="badge badge-info">${w.role}</span></td>
                <td style="font-size:0.8rem; color:var(--text-muted);">${w.shift}</td>
                <td><strong style="color:var(--status-success);">₹${w.dailyWage}</strong></td>
                <td>
                  <span class="badge ${w.attendance === 'Present' || w.attendance === 'On Duty' ? 'badge-success' : 'badge-warning'}">✓ ${w.attendance}</span>
                </td>
                <td style="font-size:0.8rem; color:var(--text-main);">${w.workAssigned}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
