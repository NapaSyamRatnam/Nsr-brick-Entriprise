/* NSR Brick Enterprise - Customer Management CRM Module */

import { store } from '../store.js';

export function renderCRMManager() {
  const currentUser = store.getCurrentUser();
  const isAdmin = currentUser && currentUser.role === 'owner';

  const customers = store.getCustomers();
  const totalOutstanding = customers.reduce((sum, c) => sum + c.outstandingBalance, 0);

  return `
    <div class="view-header">
      <div class="view-title-group">
        <h1>👥 Customer Relationship Management (CRM)</h1>
        <p>Maintain contractor profiles, builder GST credentials, transaction histories, and credit limits</p>
      </div>
      ${isAdmin ? `
        <div class="view-actions">
          <button class="btn btn-primary" id="btn-open-add-customer">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 4v16m-8-8h16"/></svg>
            Add New Customer
          </button>
        </div>
      ` : ''}
    </div>

    <!-- CRM Summary Cards -->
    <div class="metrics-grid">
      <div class="metric-card accent-amber">
        <div class="metric-header">
          <span class="metric-title">Registered Accounts</span>
          <div class="metric-icon">👥</div>
        </div>
        <div class="metric-value">${customers.length} Accounts</div>
        <div class="metric-subtext positive">Builders, Contractors & Dealers</div>
      </div>

      <div class="metric-card accent-red">
        <div class="metric-header">
          <span class="metric-title">Total Outstanding Dues</span>
          <div class="metric-icon">⌛</div>
        </div>
        <div class="metric-value">₹${totalOutstanding.toLocaleString()}</div>
        <div class="metric-subtext warning">Across Active Accounts</div>
      </div>

      <div class="metric-card accent-gold">
        <div class="metric-header">
          <span class="metric-title">Verified GST Accounts</span>
          <div class="metric-icon">🧾</div>
        </div>
        <div class="metric-value">${customers.filter(c => c.gstNo).length} / ${customers.length}</div>
        <div class="metric-subtext positive">100% Tax Compliant</div>
      </div>
    </div>

    <!-- Customer CRM Directory Table (Module 10) -->
    <div class="table-card">
      <div class="table-toolbar">
        <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:700;">Enterprise Customers & Builders Directory</h3>
        <div class="search-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          <input type="text" class="form-control" placeholder="Search customer, GST, company...">
        </div>
      </div>

      <div style="overflow-x:auto;">
        <table class="custom-table">
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Name & Company</th>
              <th>Category</th>
              <th>Phone & Email</th>
              <th>GST Number</th>
              <th>Site / City Address</th>
              <th>Total Orders</th>
              <th>Total Spent</th>
              <th>Outstanding Balance</th>
            </tr>
          </thead>
          <tbody>
            ${customers.map(c => `
              <tr>
                <td><strong style="color:var(--accent-amber);">${c.id}</strong></td>
                <td>
                  <div style="font-weight:700; color:var(--text-main);">${c.name}</div>
                  <div style="font-size:0.75rem; color:var(--text-muted);">${c.company}</div>
                </td>
                <td><span class="badge badge-info">${c.category}</span></td>
                <td>
                  <div style="font-size:0.82rem; color:var(--text-main);">${c.phone}</div>
                  <div style="font-size:0.75rem; color:var(--text-muted);">${c.email}</div>
                </td>
                <td><code style="color:var(--accent-gold); font-size:0.78rem;">${c.gstNo}</code></td>
                <td style="font-size:0.8rem; color:var(--text-muted);">${c.address}</td>
                <td><strong style="color:var(--text-main);">${c.totalOrders} Orders</strong></td>
                <td><strong style="color:var(--status-success);">₹${c.totalSpent.toLocaleString()}</strong></td>
                <td>
                  <strong style="color:${c.outstandingBalance > 0 ? 'var(--status-danger)' : 'var(--status-success)'};">
                    ₹${c.outstandingBalance.toLocaleString()}
                  </strong>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
