/* NSR Brick Enterprise - Firebase Auth Portal & User/Admin Login View */

import { store } from '../store.js';

export function renderLoginView() {
  const demoUsers = store.getDemoUsers();

  return `
    <div style="max-width:960px; margin: 2rem auto; padding: 1rem;">
      
      <!-- NSR Brick Header Banner -->
      <div style="background: linear-gradient(135deg, rgba(192, 74, 39, 0.2), var(--bg-surface-elevated)); border: 1px solid var(--primary-terracotta); border-radius: var(--radius-lg); padding: 2rem; margin-bottom: 2.5rem; text-align: center; box-shadow: var(--shadow-glow);">
        <div style="font-size: 3rem; margin-bottom: 0.5rem;">🧱</div>
        <h1 style="font-family: var(--font-heading); font-size: 2.2rem; font-weight: 900; color: var(--text-main); margin-bottom: 0.5rem;">
          NSR Brick Enterprise Portal
        </h1>
        <p style="font-size: 1rem; color: var(--text-muted); max-width: 650px; margin: 0 auto 1.5rem auto; line-height: 1.6;">
          Enterprise ERP & CRM platform powered by Firebase Auth & Firestore. Select your access role or log in below:
        </p>

        <div style="display: flex; justify-content: center; gap: 1.5rem; flex-wrap: wrap; font-size: 0.85rem; color: var(--accent-gold);">
          <span>🔐 Firebase Realtime Auth</span>
          <span>⚡ Live Firestore Synchronization</span>
          <span>🚚 Fleet GPS & GST Ledger</span>
        </div>
      </div>

      <!-- 1-Click Role Logins Grid -->
      <div style="margin-bottom: 3rem;">
        <h2 style="font-family: var(--font-heading); font-size: 1.35rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.5rem; text-align: center;">
          👉 1-Click Instant Demo Role Authentication
        </h2>
        <p style="text-align: center; color: var(--text-muted); font-size: 0.88rem; margin-bottom: 1.5rem;">
          Jump straight into Admin or User ERP portals with pre-populated company profiles:
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 1.25rem;">
          
          <!-- Admin Owner -->
          <div class="demo-login-card" data-role="owner" style="background: var(--bg-surface); border: 2px solid var(--bg-surface-border); border-radius: var(--radius-lg); padding: 1.5rem; cursor: pointer; text-align: center;">
            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">${demoUsers.admin.avatar}</div>
            <h3 style="font-family: var(--font-heading); font-size: 1.1rem; font-weight: 700; color: var(--accent-amber);">${demoUsers.admin.name}</h3>
            <div style="font-size: 0.78rem; font-weight: 600; color: var(--text-muted); margin-bottom: 0.75rem;">${demoUsers.admin.roleLabel}</div>
            <button class="btn btn-primary btn-sm" style="width:100%;">Log In as Admin Owner</button>
          </div>

          <!-- Builder User -->
          <div class="demo-login-card" data-role="builder" style="background: var(--bg-surface); border: 2px solid var(--bg-surface-border); border-radius: var(--radius-lg); padding: 1.5rem; cursor: pointer; text-align: center;">
            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">${demoUsers.builder.avatar}</div>
            <h3 style="font-family: var(--font-heading); font-size: 1.1rem; font-weight: 700; color: var(--accent-gold);">${demoUsers.builder.name}</h3>
            <div style="font-size: 0.78rem; font-weight: 600; color: var(--text-muted); margin-bottom: 0.75rem;">${demoUsers.builder.roleLabel}</div>
            <button class="btn btn-primary btn-sm" style="width:100%;">Log In as Contractor</button>
          </div>

          <!-- Worker User -->
          <div class="demo-login-card" data-role="worker" style="background: var(--bg-surface); border: 2px solid var(--bg-surface-border); border-radius: var(--radius-lg); padding: 1.5rem; cursor: pointer; text-align: center;">
            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">${demoUsers.worker.avatar}</div>
            <h3 style="font-family: var(--font-heading); font-size: 1.1rem; font-weight: 700; color: var(--status-success);">${demoUsers.worker.name}</h3>
            <div style="font-size: 0.78rem; font-weight: 600; color: var(--text-muted); margin-bottom: 0.75rem;">${demoUsers.worker.roleLabel}</div>
            <button class="btn btn-primary btn-sm" style="width:100%;">Log In as Site Foreman</button>
          </div>

          <!-- Real Estate User -->
          <div class="demo-login-card" data-role="realestate" style="background: var(--bg-surface); border: 2px solid var(--bg-surface-border); border-radius: var(--radius-lg); padding: 1.5rem; cursor: pointer; text-align: center;">
            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">${demoUsers.realestate.avatar}</div>
            <h3 style="font-family: var(--font-heading); font-size: 1.1rem; font-weight: 700; color: var(--status-info);">${demoUsers.realestate.name}</h3>
            <div style="font-size: 0.78rem; font-weight: 600; color: var(--text-muted); margin-bottom: 0.75rem;">${demoUsers.realestate.roleLabel}</div>
            <button class="btn btn-primary btn-sm" style="width:100%;">Log In as Developer</button>
          </div>

        </div>
      </div>

      <!-- Sign In / Register Account -->
      <div style="background: var(--bg-surface); border: 1px solid var(--bg-surface-border); border-radius: var(--radius-lg); padding: 2rem; max-width: 540px; margin: 0 auto;">
        <h3 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.5rem; text-align: center;">
          ✍️ Firebase Auth Email Sign In / Registration
        </h3>

        <form id="form-register-user">
          <div class="form-group">
            <label class="form-label">Full Name</label>
            <input type="text" id="reg-name" class="form-control" value="Vikram Sharma" required>
          </div>

          <div class="form-group">
            <label class="form-label">Email Address</label>
            <input type="email" id="reg-email" class="form-control" value="vikram@sharmabuilders.in" required>
          </div>

          <div class="form-group">
            <label class="form-label">Account Role</label>
            <select id="reg-role" class="form-select">
              <option value="builder" selected>Construction Builder / Contractor</option>
              <option value="owner">Business Owner / Kiln Admin</option>
              <option value="worker">Site Operations Foreman</option>
              <option value="realestate">Real Estate Developer</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">Company / Business Name</label>
            <input type="text" id="reg-company" class="form-control" value="Sharma Infrastructure & Builders">
          </div>

          <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 0.5rem; padding: 0.75rem;">
            Authenticate & Access Portal
          </button>
        </form>
      </div>

    </div>
  `;
}
