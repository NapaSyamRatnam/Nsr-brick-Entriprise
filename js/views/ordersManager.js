/* TerraBrick Enterprise - Orders Management & Dispatch Tracking View */

import { store } from '../store.js';

export function renderOrdersManager() {
  const orders = store.getOrders();

  return `
    <div class="view-header">
      <div class="view-title-group">
        <h1>Clay Brick Orders & Freight Logistics</h1>
        <p>Track contractor brick orders, moulding schedules, kiln chamber allocation, and live site dispatch</p>
      </div>
      <div class="view-actions">
        <button class="btn btn-primary" id="btn-open-create-order">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 4v16m-8-8h16"/></svg>
          Create New Brick Order
        </button>
      </div>
    </div>

    <!-- Orders Filter & Search Table -->
    <div class="table-card">
      <div class="table-toolbar">
        <div class="search-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          <input type="text" id="order-search-input" class="form-control" placeholder="Search order ID, builder, address...">
        </div>

        <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
          <select id="order-status-filter" class="form-select" style="min-width:160px;">
            <option value="ALL">All Statuses</option>
            <option value="Processing">Processing & Moulding</option>
            <option value="Firing">Moulding & Firing</option>
            <option value="Dispatched">Dispatched / In Transit</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      </div>

      <div style="overflow-x:auto;">
        <table class="custom-table" id="orders-data-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Client / Builder</th>
              <th>Brick Type</th>
              <th>Quantity</th>
              <th>Total (₹)</th>
              <th>Payment Status</th>
              <th>Fulfillment Status</th>
              <th>Delivery Site</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${orders.map(o => `
              <tr data-order-id="${o.id}">
                <td><strong style="color:var(--accent-amber);">${o.id}</strong></td>
                <td>
                  <div style="font-weight:600; color:var(--text-main);">${o.clientName}</div>
                  <div style="font-size:0.75rem; color:var(--text-muted);">${o.contactPerson}</div>
                </td>
                <td style="max-width:180px;">${o.brickType.split(' ')[0]} ${o.brickType.split(' ')[1] || ''}</td>
                <td><strong style="color:var(--text-main);">${o.quantity.toLocaleString()}</strong></td>
                <td><strong style="color:var(--status-success);">₹${o.totalAmount.toLocaleString()}</strong></td>
                <td>
                  <span class="badge ${o.paymentStatus === 'Paid' ? 'badge-success' : (o.paymentStatus === 'Partial' ? 'badge-warning' : 'badge-danger')}">
                    ${o.paymentStatus} (₹${o.paidAmount.toLocaleString()})
                  </span>
                </td>
                <td>
                  <span class="badge ${o.status === 'Dispatched' ? 'badge-warning' : (o.status === 'Delivered' ? 'badge-success' : 'badge-info')}">
                    ${o.status}
                  </span>
                </td>
                <td style="font-size:0.8rem; color:var(--text-muted); max-width:200px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
                  ${o.siteAddress}
                </td>
                <td>
                  <button class="btn btn-secondary btn-sm btn-view-order" data-id="${o.id}">View Logistics</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
