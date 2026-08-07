/* TerraBrick Enterprise - Financial & Payments Ledger View */

import { store } from '../store.js';

export function renderPaymentsLedger() {
  const payments = store.getPayments();
  const orders = store.getOrders();

  const totalCollected = payments.reduce((sum, p) => sum + p.amount, 0);
  const totalOutstanding = orders.reduce((sum, o) => sum + o.balance, 0);
  const fullyPaidOrdersCount = orders.filter(o => o.paymentStatus === 'Paid').length;

  return `
    <div class="view-header">
      <div class="view-title-group">
        <h1>Payments & Invoicing History Ledger</h1>
        <p>Complete track history of customer payments, advance deposits, outstanding balances & digital receipts</p>
      </div>
      <div class="view-actions">
        <button class="btn btn-primary" id="btn-open-record-payment">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 4v16m-8-8h16"/></svg>
          Record New Customer Payment
        </button>
      </div>
    </div>

    <!-- Financial KPI Summary Cards -->
    <div class="metrics-grid">
      <div class="metric-card accent-green">
        <div class="metric-header">
          <span class="metric-title">Total Payments Collected</span>
          <div class="metric-icon">💵</div>
        </div>
        <div class="metric-value">₹${totalCollected.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
        <div class="metric-subtext positive">${payments.length} Verified Transactions</div>
      </div>

      <div class="metric-card accent-amber">
        <div class="metric-header">
          <span class="metric-title">Outstanding Dues</span>
          <div class="metric-icon">⌛</div>
        </div>
        <div class="metric-value">₹${totalOutstanding.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
        <div class="metric-subtext warning">Across ${orders.filter(o => o.balance > 0).length} Unsettled Accounts</div>
      </div>

      <div class="metric-card accent-gold">
        <div class="metric-header">
          <span class="metric-title">Settled Client Contracts</span>
          <div class="metric-icon">📑</div>
        </div>
        <div class="metric-value">${fullyPaidOrdersCount} / ${orders.length}</div>
        <div class="metric-subtext positive">100% Payment Clearance</div>
      </div>
    </div>

    <!-- Payments Ledger Table -->
    <div class="table-card">
      <div class="table-toolbar">
        <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:700;">Transaction Log History</h3>
        <div class="search-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          <input type="text" id="payment-search-input" class="form-control" placeholder="Search reference #, order ID, client...">
        </div>
      </div>

      <div style="overflow-x:auto;">
        <table class="custom-table" id="payments-data-table">
          <thead>
            <tr>
              <th>Receipt / Pay ID</th>
              <th>Order ID</th>
              <th>Client Name</th>
              <th>Amount Paid</th>
              <th>Payment Method</th>
              <th>Date</th>
              <th>Ref / Wire Code</th>
              <th>Status</th>
              <th>Invoice</th>
            </tr>
          </thead>
          <tbody>
            ${payments.map(p => `
              <tr>
                <td><strong style="color:var(--accent-amber);">${p.id}</strong></td>
                <td><strong style="color:var(--text-main);">${p.orderId}</strong></td>
                <td>
                  <div style="font-weight:600; color:var(--text-main);">${p.clientName}</div>
                </td>
                <td><strong style="color:var(--status-success);">₹${p.amount.toLocaleString(undefined, {minimumFractionDigits:2})}</strong></td>
                <td>${p.paymentMethod}</td>
                <td>${p.date}</td>
                <td style="font-family:monospace; font-size:0.8rem; color:var(--text-muted);">${p.refNo}</td>
                <td>
                  <span class="badge badge-success">✓ ${p.status}</span>
                </td>
                <td>
                  <button class="btn btn-secondary btn-sm btn-print-invoice" data-order-id="${p.orderId}">View Receipt</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
