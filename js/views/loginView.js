/* NSR Brick Enterprise - Dedicated Admin Manager & User Authentication View */

import { store } from '../store.js';

export function renderLoginView() {
  return `
    <div style="max-width:650px; margin: 2.5rem auto; padding: 1rem;">
      
      <!-- NSR Brick Header Banner -->
      <div style="background: linear-gradient(135deg, rgba(192, 74, 39, 0.25), var(--bg-surface-elevated)); border: 1px solid var(--primary-terracotta); border-radius: var(--radius-lg); padding: 2rem; margin-bottom: 2rem; text-align: center; box-shadow: var(--shadow-glow);">
        <div style="font-size: 3rem; margin-bottom: 0.5rem;">👑</div>
        <h1 style="font-family: var(--font-heading); font-size: 2.2rem; font-weight: 900; color: var(--text-main); margin-bottom: 0.5rem;">
          NSR Brick Enterprise Portal
        </h1>
        <p style="font-size: 0.95rem; color: var(--text-muted); max-width: 580px; margin: 0 auto; line-height: 1.6;">
          🔥 <strong>Production Firebase Authentication Active</strong>: Admin Manager credentials automatically pushed & prepared below. Click Log In to enter Executive ERP.
        </p>
      </div>

      <!-- Main Clean Auth Card -->
      <div style="background: var(--bg-surface); border: 1px solid var(--bg-surface-border); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-lg); margin-bottom: 2rem;">
        
        <!-- Tab Header Buttons -->
        <div style="display: flex; border-bottom: 1px solid var(--bg-surface-border); background: var(--bg-surface-elevated);">
          <button id="tab-btn-admin-login" class="auth-tab-btn active" style="flex: 1; padding: 1.1rem; border: none; background: transparent; color: var(--accent-amber); font-family: var(--font-heading); font-weight: 800; font-size: 1rem; cursor: pointer; border-bottom: 3px solid var(--primary-terracotta);">
            👑 Admin Manager Log In
          </button>
          <button id="tab-btn-user-auth" class="auth-tab-btn" style="flex: 1; padding: 1.1rem; border: none; background: transparent; color: var(--text-muted); font-family: var(--font-heading); font-weight: 800; font-size: 1rem; cursor: pointer; border-bottom: 3px solid transparent;">
            ✍️ Register New Account
          </button>
        </div>

        <div style="padding: 2.5rem;">

          <!-- PANEL 1: ADMIN MANAGER LOGIN FORM (PRE-FILLED WITH syamratnam123@gmail.com / Syam@1234) -->
          <div id="auth-panel-admin-login">
            <form id="form-admin-login" novalidate>
              <div class="form-group">
                <label class="form-label" for="admin-email">
                  Email Address / Username <span style="color: var(--status-danger);">*</span>
                </label>
                <input type="email" id="admin-email" class="form-control" placeholder="syamratnam123@gmail.com" value="syamratnam123@gmail.com" required>
                <span id="err-admin-email" style="display: none; font-size: 0.75rem; color: var(--status-danger); margin-top: 0.25rem;">
                  ⚠️ Email Address is required.
                </span>
              </div>

              <div class="form-group">
                <label class="form-label" for="admin-password">
                  Password <span style="color: var(--status-danger);">*</span>
                </label>
                <input type="password" id="admin-password" class="form-control" placeholder="Syam@1234" value="Syam@1234" required>
                <span id="err-admin-password" style="display: none; font-size: 0.75rem; color: var(--status-danger); margin-top: 0.25rem;">
                  ⚠️ Password is required.
                </span>
              </div>

              <button type="submit" id="btn-submit-admin-login" class="btn btn-primary" style="width: 100%; margin-top: 1rem; padding: 0.95rem; font-size: 1.05rem; font-weight: 800; background: linear-gradient(135deg, var(--primary-terracotta), var(--accent-amber)); border: none; box-shadow: var(--shadow-lg);">
                👑 Log In as Admin Manager (syamratnam123@gmail.com)
              </button>
            </form>
          </div>

          <!-- PANEL 2: REGISTRATION FORM -->
          <div id="auth-panel-user" style="display: none;">
            <button class="btn btn-secondary" id="btn-google-login" style="width: 100%; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: center; gap: 0.6rem; padding: 0.85rem; font-weight: 600; border: 1px solid var(--bg-surface-border);">
              <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>
              Sign In with Google Account
            </button>

            <form id="form-register-account" novalidate>
              <div class="form-group">
                <label class="form-label" for="reg-name">
                  Full Name <span style="color: var(--status-danger);">*</span>
                </label>
                <input type="text" id="reg-name" class="form-control" placeholder="Enter your full name" value="" required>
              </div>

              <div class="form-group">
                <label class="form-label" for="reg-email">
                  Email Address <span style="color: var(--status-danger);">*</span>
                </label>
                <input type="email" id="reg-email" class="form-control" placeholder="Enter email address" value="" required>
              </div>

              <div class="form-group">
                <label class="form-label" for="reg-password">
                  Password <span style="color: var(--status-danger);">*</span>
                </label>
                <input type="password" id="reg-password" class="form-control" placeholder="Create a password" value="" required>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div class="form-group">
                  <label class="form-label" for="reg-role">Account Role</label>
                  <select id="reg-role" class="form-select">
                    <option value="builder">Construction Builder / Contractor</option>
                    <option value="owner">Business Owner / Kiln Admin Manager</option>
                    <option value="worker">Site Operations Foreman</option>
                    <option value="realestate">Real Estate Developer</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label" for="reg-company">Company / Business Name</label>
                  <input type="text" id="reg-company" class="form-control" placeholder="Company Name" value="">
                </div>
              </div>

              <button type="submit" id="btn-submit-register" class="btn btn-primary" style="width: 100%; margin-top: 1rem; padding: 0.85rem; font-size: 0.95rem;">
                ✍️ Register Account & Push to Firebase
              </button>
            </form>
          </div>

        </div>
      </div>

    </div>
  `;
}
