/* NSR Brick Enterprise - Transport & Delivery Logistics Module */

import { store } from '../store.js';

export function renderDeliveriesManager() {
  const currentUser = store.getCurrentUser();
  const isAdmin = currentUser && (currentUser.role === 'owner' || currentUser.role === 'worker');

  const deliveries = store.getDeliveries();
  const fleet = store.getFleet();

  return `
    <div class="view-header">
      <div class="view-title-group">
        <h1>🚚 Transport & Delivery Freight Logistics</h1>
        <p>Monitor heavy freight trucks, driver dispatches, order loading quantities, freight costs, and live site deliveries</p>
      </div>
      ${isAdmin ? `
        <div class="view-actions">
          <button class="btn btn-primary" id="btn-open-dispatch-truck">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 4v16m-8-8h16"/></svg>
            Dispatch Freight Truck
          </button>
        </div>
      ` : ''}
    </div>

    <!-- Active Transport Fleet Overview -->
    <h2 style="font-family:var(--font-heading); font-size:1.25rem; font-weight:800; margin-bottom:1rem; color:var(--text-main);">
      🚛 Active Heavy Logistics Fleet
    </h2>

    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:1.25rem; margin-bottom:2.5rem;">
      ${fleet.map(f => `
        <div style="background:var(--bg-surface); border:1px solid var(--bg-surface-border); border-radius:var(--radius-lg); padding:1.25rem;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
            <div style="font-family:var(--font-heading); font-weight:800; font-size:1.1rem; color:var(--accent-amber);">${f.id}</div>
            <span class="badge ${f.status === 'In Transit' ? 'badge-warning' : 'badge-success'}">${f.status}</span>
          </div>

          <div style="font-size:0.85rem; font-weight:700; color:var(--text-main); margin-bottom:0.25rem;">Driver: ${f.driverName}</div>
          <div style="font-size:0.78rem; color:var(--text-muted); margin-bottom:0.75rem;">${f.truckType} • Max Capacity: ${f.maxBricks.toLocaleString()} Bricks</div>

          <div style="background:var(--bg-dark); padding:0.65rem 0.85rem; border-radius:var(--radius-md); font-size:0.78rem; display:flex; justify-content:space-between;">
            <div>
              <span style="color:var(--text-subtle);">Active Order:</span>
              <strong style="color:var(--text-main); display:block;">${f.currentOrder}</strong>
            </div>
            <div style="text-align:right;">
              <span style="color:var(--text-subtle);">ETA:</span>
              <strong style="color:var(--accent-gold); display:block;">${f.eta}</strong>
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Transport Deliveries Table (Module 8) -->
    <div class="table-card">
      <div class="table-toolbar">
        <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:700;">Freight Dispatches & Site Deliveries Register</h3>
        <span class="badge badge-neutral">${deliveries.length} Recorded Shipments</span>
      </div>

      <div style="overflow-x:auto;">
        <table class="custom-table">
          <thead>
            <tr>
              <th>Dispatch ID</th>
              <th>Vehicle Number</th>
              <th>Driver & Phone</th>
              <th>Order ID</th>
              <th>Customer / Destination</th>
              <th>Quantity Loaded</th>
              <th>Freight Cost (₹)</th>
              <th>Expected Date</th>
              <th>Delivery Status</th>
            </tr>
          </thead>
          <tbody>
            ${deliveries.map(d => `
              <tr>
                <td><strong style="color:var(--accent-amber);">${d.id}</strong></td>
                <td><strong style="color:var(--text-main);">${d.vehicleNo}</strong></td>
                <td>
                  <div style="font-weight:600; color:var(--text-main);">${d.driverName}</div>
                  <div style="font-size:0.75rem; color:var(--text-muted);">${d.driverPhone}</div>
                </td>
                <td><strong style="color:var(--accent-gold);">${d.orderId}</strong></td>
                <td>
                  <div style="font-weight:600; color:var(--text-main);">${d.customerName}</div>
                  <div style="font-size:0.75rem; color:var(--text-muted);">${d.destination}</div>
                </td>
                <td><strong style="color:var(--text-main);">${d.quantityLoaded.toLocaleString()} Bricks</strong></td>
                <td><strong style="color:var(--status-success);">₹${d.freightCost.toLocaleString()}</strong></td>
                <td>${d.expectedDelivery}</td>
                <td>
                  <span class="badge ${d.status === 'Out for Delivery' ? 'badge-warning' : 'badge-success'}">🚚 ${d.status}</span>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
