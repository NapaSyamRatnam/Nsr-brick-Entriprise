/* NSR Brick Enterprise - Admin Business Settings & System Configurations */

import { store } from '../store.js';

export function renderSettingsView() {
  const currentUser = store.getCurrentUser();
  const isAdmin = currentUser && currentUser.role === 'owner';
  const taxConfig = store.getTaxConfig();

  return `
    <div class="view-header">
      <div class="view-title-group">
        <h1>⚙️ Business Configuration & ERP Settings</h1>
        <p>Configure enterprise tax rates, GSTIN credentials, document prefixes, default pricing, and freight parameters</p>
      </div>
    </div>

    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:2rem;">
      
      <!-- Company & Tax Configuration -->
      <div style="background:var(--bg-surface); border:1px solid var(--bg-surface-border); border-radius:var(--radius-lg); padding:1.75rem;">
        <h3 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:700; color:var(--accent-amber); margin-bottom:1.25rem;">
          🏢 Enterprise Profile & GST Configuration
        </h3>

        <div class="form-group">
          <label class="form-label">Company Legal Name</label>
          <input type="text" class="form-control" value="NSR Brick Enterprise Pvt Ltd" readonly>
        </div>

        <div class="form-group">
          <label class="form-label">Factory Address & Kiln Yard</label>
          <input type="text" class="form-control" value="Quarry Road, Industrial Kiln Zone, Nellore / AP" readonly>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
          <div class="form-group">
            <label class="form-label">Company GSTIN</label>
            <input type="text" class="form-control" value="${taxConfig.companyGstNo}">
          </div>
          <div class="form-group">
            <label class="form-label">HSN/SAC Code</label>
            <input type="text" class="form-control" value="${taxConfig.hsnCode}">
          </div>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
          <div class="form-group">
            <label class="form-label">CGST Rate (%)</label>
            <input type="number" class="form-control" value="${taxConfig.cgstPct}">
          </div>
          <div class="form-group">
            <label class="form-label">SGST Rate (%)</label>
            <input type="number" class="form-control" value="${taxConfig.sgstPct}">
          </div>
        </div>
      </div>

      <!-- Operational Prefixes & Pricing Settings -->
      <div style="background:var(--bg-surface); border:1px solid var(--bg-surface-border); border-radius:var(--radius-lg); padding:1.75rem;">
        <h3 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:700; color:var(--accent-gold); margin-bottom:1.25rem;">
          📑 ERP Document Prefixes & Freight Parameters
        </h3>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
          <div class="form-group">
            <label class="form-label">Invoice ID Prefix</label>
            <input type="text" class="form-control" value="INV-2026-">
          </div>
          <div class="form-group">
            <label class="form-label">Quotation ID Prefix</label>
            <input type="text" class="form-control" value="QT-2026-">
          </div>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
          <div class="form-group">
            <label class="form-label">Order ID Prefix</label>
            <input type="text" class="form-control" value="ORD-NSR-">
          </div>
          <div class="form-group">
            <label class="form-label">Freight Charge Rate (₹/KM)</label>
            <input type="number" class="form-control" value="120">
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Default Red Clay Brick Price (₹/Piece)</label>
          <input type="number" step="0.5" class="form-control" value="8.50">
        </div>

        <button class="btn btn-primary" id="btn-save-settings" style="width:100%; margin-top:0.5rem;">
          💾 Save Business Settings & Configurations
        </button>
      </div>

    </div>
  `;
}
