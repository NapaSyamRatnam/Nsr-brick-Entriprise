/* NSR Brick Enterprise - Business Intelligence & Reports Analytics Module */

import { store } from '../store.js';

export function renderReportsView() {
  const currentUser = store.getCurrentUser();
  const isAdmin = currentUser && currentUser.role === 'owner';

  const orders = store.getOrders();
  const payments = store.getPayments();
  const batches = store.getProductionBatches();
  const customers = store.getCustomers();

  const totalSales = orders.reduce((sum, o) => sum + o.totalAmount, 0);
  const totalPaid = payments.reduce((sum, p) => sum + p.amount, 0);
  const totalDue = orders.reduce((sum, o) => sum + o.balance, 0);
  const totalProduced = batches.reduce((sum, b) => sum + b.totalBricks, 0);
  const totalGood = batches.reduce((sum, b) => sum + b.goodBricks, 0);
  const totalDamaged = batches.reduce((sum, b) => sum + b.damagedBricks, 0);

  return `
    <div class="view-header">
      <div class="view-title-group">
        <h1>📊 Business Intelligence & Audit Reports</h1>
        <p>Generate sales revenue audits, production output reports, inventory closing balances, and freight delivery logs</p>
      </div>
    </div>

    <!-- Reports Summary Cards -->
    <div class="metrics-grid">
      <div class="metric-card accent-green">
        <div class="metric-header">
          <span class="metric-title">Gross Sales Order Revenue</span>
          <div class="metric-icon">💰</div>
        </div>
        <div class="metric-value">₹${totalSales.toLocaleString()}</div>
        <div class="metric-subtext positive">Verified Sales Contracts</div>
      </div>

      <div class="metric-card accent-gold">
        <div class="metric-header">
          <span class="metric-title">Total Payments Collected</span>
          <div class="metric-icon">💵</div>
        </div>
        <div class="metric-value">₹${totalPaid.toLocaleString()}</div>
        <div class="metric-subtext positive">Realized Bank & NEFT Receipts</div>
      </div>

      <div class="metric-card accent-red">
        <div class="metric-header">
          <span class="metric-title">Outstanding Payment Dues</span>
          <div class="metric-icon">⌛</div>
        </div>
        <div class="metric-value">₹${totalDue.toLocaleString()}</div>
        <div class="metric-subtext warning">Unsettled Receivables</div>
      </div>
    </div>

    <!-- Report Types Tab Grid -->
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap:1.25rem; margin-bottom:2.5rem;">
      
      <div style="background:var(--bg-surface); border:1px solid var(--bg-surface-border); border-radius:var(--radius-lg); padding:1.25rem;">
        <div style="font-size:1.8rem; margin-bottom:0.5rem;">📈</div>
        <h3 style="font-family:var(--font-heading); font-size:1.05rem; font-weight:700; color:var(--accent-gold); margin-bottom:0.25rem;">1. Sales & Revenue Audit</h3>
        <p style="font-size:0.78rem; color:var(--text-muted); margin-bottom:0.85rem;">Daily, weekly, monthly & yearly sales breakdown per product grade.</p>
        <button class="btn btn-secondary btn-sm" style="width:100%; font-size:0.75rem;">Download Sales PDF</button>
      </div>

      <div style="background:var(--bg-surface); border:1px solid var(--bg-surface-border); border-radius:var(--radius-lg); padding:1.25rem;">
        <div style="font-size:1.8rem; margin-bottom:0.5rem;">🏭</div>
        <h3 style="font-family:var(--font-heading); font-size:1.05rem; font-weight:700; color:var(--accent-amber); margin-bottom:0.25rem;">2. Production Audit</h3>
        <p style="font-size:0.78rem; color:var(--text-muted); margin-bottom:0.85rem;">Total bricks produced: ${totalGood.toLocaleString()} good / ${totalDamaged.toLocaleString()} damaged.</p>
        <button class="btn btn-secondary btn-sm" style="width:100%; font-size:0.75rem;">Download Production PDF</button>
      </div>

      <div style="background:var(--bg-surface); border:1px solid var(--bg-surface-border); border-radius:var(--radius-lg); padding:1.25rem;">
        <div style="font-size:1.8rem; margin-bottom:0.5rem;">📊</div>
        <h3 style="font-family:var(--font-heading); font-size:1.05rem; font-weight:700; color:var(--status-info); margin-bottom:0.25rem;">3. Inventory Stock Audit</h3>
        <p style="font-size:0.78rem; color:var(--text-muted); margin-bottom:0.85rem;">Opening stock, kiln produced, sold, damaged & closing balances.</p>
        <button class="btn btn-secondary btn-sm" style="width:100%; font-size:0.75rem;">Download Inventory PDF</button>
      </div>

      <div style="background:var(--bg-surface); border:1px solid var(--bg-surface-border); border-radius:var(--radius-lg); padding:1.25rem;">
        <div style="font-size:1.8rem; margin-bottom:0.5rem;">🚚</div>
        <h3 style="font-family:var(--font-heading); font-size:1.05rem; font-weight:700; color:var(--status-success); margin-bottom:0.25rem;">4. Delivery Freight Audit</h3>
        <p style="font-size:0.78rem; color:var(--text-muted); margin-bottom:0.85rem;">Vehicle trips, loading quantities, driver wages & freight costs.</p>
        <button class="btn btn-secondary btn-sm" style="width:100%; font-size:0.75rem;">Download Delivery PDF</button>
      </div>

    </div>

    <!-- Live Executive Sales & Financial Ledger Audit Table -->
    <div class="table-card">
      <div class="table-toolbar">
        <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:700;">Executive Business Operations Audit Table</h3>
        <span class="badge badge-neutral">${orders.length} Active Orders Audited</span>
      </div>

      <div style="overflow-x:auto;">
        <table class="custom-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Ordered Brick</th>
              <th>Quantity</th>
              <th>Total Amount (₹)</th>
              <th>Paid Amount (₹)</th>
              <th>Outstanding Balance (₹)</th>
              <th>Payment Status</th>
              <th>Delivery Status</th>
            </tr>
          </thead>
          <tbody>
            ${orders.map(o => `
              <tr>
                <td><strong style="color:var(--accent-amber);">${o.id}</strong></td>
                <td><strong style="color:var(--text-main);">${o.clientName}</strong></td>
                <td>${o.brickType.split(' ')[0]} ${o.brickType.split(' ')[1] || ''}</td>
                <td><strong style="color:var(--text-main);">${o.quantity.toLocaleString()} Pcs</strong></td>
                <td><strong style="color:var(--status-success);">₹${o.totalAmount.toLocaleString()}</strong></td>
                <td>₹${o.paidAmount.toLocaleString()}</td>
                <td><strong style="color:${o.balance > 0 ? 'var(--status-danger)' : 'var(--status-success)'};">₹${o.balance.toLocaleString()}</strong></td>
                <td><span class="badge ${o.paymentStatus === 'Paid' ? 'badge-success' : 'badge-warning'}">${o.paymentStatus}</span></td>
                <td><span class="badge ${o.status === 'Delivered' ? 'badge-success' : 'badge-info'}">${o.status}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
