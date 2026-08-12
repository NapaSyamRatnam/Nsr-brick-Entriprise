/* NSR Brick Enterprise - Finance, Expenses, Vendors & P&L Module */

import { store } from '../store.js';

export function renderFinanceManager() {
  const currentUser = store.getCurrentUser();
  const isAdmin = currentUser && currentUser.role === 'owner';

  const vendors = store.getVendors();
  const expenses = store.getExpenses();
  const taxConfig = store.getTaxConfig();
  const pnl = store.calculatePnL();

  return `
    <div class="view-header">
      <div class="view-title-group">
        <h1>💰 Finance, Expenses, Vendors & P&L Statement</h1>
        <p>Manage raw material suppliers, factory operational expenses, GST tax configurations, and profit/loss performance</p>
      </div>
      ${isAdmin ? `
        <div class="view-actions">
          <button class="btn btn-primary" id="btn-open-add-expense">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 4v16m-8-8h16"/></svg>
            Log Business Expense
          </button>
        </div>
      ` : ''}
    </div>

    <!-- P&L Financial Performance Summary -->
    <div class="metrics-grid">
      <div class="metric-card accent-green">
        <div class="metric-header">
          <span class="metric-title">Gross Sales Revenue</span>
          <div class="metric-icon">💰</div>
        </div>
        <div class="metric-value">₹${pnl.revenue.toLocaleString()}</div>
        <div class="metric-subtext positive">Verified Sales Contracts</div>
      </div>

      <div class="metric-card accent-red">
        <div class="metric-header">
          <span class="metric-title">Total Operating Expenses</span>
          <div class="metric-icon">💸</div>
        </div>
        <div class="metric-value">₹${pnl.totalExpenses.toLocaleString()}</div>
        <div class="metric-subtext warning">Coal, Labor & Diesel Fuel</div>
      </div>

      <div class="metric-card accent-gold">
        <div class="metric-header">
          <span class="metric-title">Net Operating Profit</span>
          <div class="metric-icon">📈</div>
        </div>
        <div class="metric-value">₹${pnl.grossProfit.toLocaleString()}</div>
        <div class="metric-subtext positive">Pre-Tax Net Margin</div>
      </div>
    </div>

    <!-- Tax Configuration Banner -->
    <div style="background:var(--bg-surface); border:1px solid var(--primary-terracotta); border-radius:var(--radius-lg); padding:1.25rem 1.5rem; margin-bottom:2.5rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
      <div>
        <div style="display:flex; align-items:center; gap:0.5rem;">
          <span class="badge badge-warning">🧾 GST & HSN Tax Config</span>
          <span style="font-weight:700; font-size:0.9rem; color:var(--text-main);">HSN Code: ${taxConfig.hsnCode} • GST Rate: ${taxConfig.cgstPct + taxConfig.sgstPct}% (CGST ${taxConfig.cgstPct}% + SGST ${taxConfig.sgstPct}%)</span>
        </div>
        <div style="font-size:0.78rem; color:var(--text-muted); margin-top:0.35rem;">Company GSTIN: <strong>${taxConfig.companyGstNo}</strong> • Statutory Tax Compliant</div>
      </div>
      <button class="btn btn-secondary btn-sm" id="btn-edit-tax-config">Update Tax Rates</button>
    </div>

    <!-- Vendors Directory & Purchase Orders Table (Module 7) -->
    <div class="table-card" style="margin-bottom:2.5rem;">
      <div class="table-toolbar">
        <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:700;">Suppliers & Vendor Accounts Directory</h3>
        <span class="badge badge-neutral">${vendors.length} Registered Vendors</span>
      </div>

      <div style="overflow-x:auto;">
        <table class="custom-table">
          <thead>
            <tr>
              <th>Vendor ID</th>
              <th>Vendor Name</th>
              <th>Supply Category</th>
              <th>Contact Details</th>
              <th>GSTIN</th>
              <th>Total Purchased (₹)</th>
              <th>Outstanding Balance (₹)</th>
            </tr>
          </thead>
          <tbody>
            ${vendors.map(v => `
              <tr>
                <td><strong style="color:var(--accent-amber);">${v.id}</strong></td>
                <td><strong style="color:var(--text-main);">${v.name}</strong></td>
                <td><span class="badge badge-info">${v.category}</span></td>
                <td>${v.contact}</td>
                <td><code style="color:var(--accent-gold); font-size:0.78rem;">${v.gstNo}</code></td>
                <td><strong style="color:var(--status-success);">₹${v.totalPurchased.toLocaleString()}</strong></td>
                <td><strong style="color:${v.balanceDue > 0 ? 'var(--status-danger)' : 'var(--status-success)'};">₹${v.balanceDue.toLocaleString()}</strong></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Operating Expenses Register (Module 8) -->
    <div class="table-card">
      <div class="table-toolbar">
        <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:700;">Factory Operating Expenses Register</h3>
        <span class="badge badge-neutral">${expenses.length} Expense Logs</span>
      </div>

      <div style="overflow-x:auto;">
        <table class="custom-table">
          <thead>
            <tr>
              <th>Expense ID</th>
              <th>Date</th>
              <th>Category</th>
              <th>Vendor / Payee</th>
              <th>Amount (₹)</th>
              <th>Payment Method</th>
              <th>Description / Notes</th>
            </tr>
          </thead>
          <tbody>
            ${expenses.map(e => `
              <tr>
                <td><strong style="color:var(--accent-amber);">${e.id}</strong></td>
                <td>${e.date}</td>
                <td><span class="badge badge-warning">${e.category}</span></td>
                <td><strong style="color:var(--text-main);">${e.vendorName}</strong></td>
                <td><strong style="color:var(--status-danger);">₹${e.amount.toLocaleString()}</strong></td>
                <td>${e.paymentMethod}</td>
                <td style="font-size:0.8rem; color:var(--text-muted);">${e.notes}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
