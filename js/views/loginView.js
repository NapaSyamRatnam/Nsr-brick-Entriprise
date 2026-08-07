/* NSR Brick Enterprise - Dedicated Admin Manager & User Authentication View */

import { store } from '../store.js';

export function renderLoginView() {
  return `
    <div style="max-width:800px; margin: 2rem auto; padding: 1rem;">
      
      <!-- NSR Brick Header Banner -->
      <div style="background: linear-gradient(135deg, rgba(192, 74, 39, 0.25), var(--bg-surface-elevated)); border: 1px solid var(--primary-terracotta); border-radius: var(--radius-lg); padding: 2rem; margin-bottom: 2rem; text-align: center; box-shadow: var(--shadow-glow);">
        <div style="font-size: 3rem; margin-bottom: 0.5rem;">👑</div>
        <h1 style="font-family: var(--font-heading); font-size: 2.2rem; font-weight: 900; color: var(--text-main); margin-bottom: 0.5rem;">
          NSR Brick Enterprise Portals
        </h1>
        <p style="font-size: 0.95rem; color: var(--text-muted); max-width: 600px; margin: 0 auto; line-height: 1.6;">
          🔥 <strong>Firebase Database & Authentication Portal</strong>: Separate access portals for Admin Managers and Construction Contractors.
        </p>
      </div>

      <!-- Main Auth Card with Separate Admin vs User Tabs -->
      <div style="background: var(--bg-surface); border: 1px solid var(--bg-surface-border); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-lg); margin-bottom: 2rem;">
        
        <!-- Tab Header Buttons -->
        <div style="display: flex; border-bottom: 1px solid var(--bg-surface-border); background: var(--bg-surface-elevated);">
          <button id="tab-btn-admin-login" class="auth-tab-btn active" style="flex: 1; padding: 1.1rem; border: none; background: transparent; color: var(--accent-amber); font-family: var(--font-heading); font-weight: 800; font-size: 1rem; cursor: pointer; border-bottom: 3px solid var(--primary-terracotta);">
            👑 Admin Manager Login
          </button>
          <button id="tab-btn-admin-reg" class="auth-tab-btn" style="flex: 1; padding: 1.1rem; border: none; background: transparent; color: var(--text-muted); font-family: var(--font-heading); font-weight: 800; font-size: 1rem; cursor: pointer; border-bottom: 3px solid transparent;">
            ✍️ Admin Registration
          </button>
          <button id="tab-btn-user-auth" class="auth-tab-btn" style="flex: 1; padding: 1.1rem; border: none; background: transparent; color: var(--text-muted); font-family: var(--font-heading); font-weight: 800; font-size: 1rem; cursor: pointer; border-bottom: 3px solid transparent;">
            👷‍♂️ Contractor / User Login
          </button>
        </div>

        <div style="padding: 2.2rem;">

          <!-- PANEL 1: ADMIN MANAGER LOGIN (syamratnam123@gmail.com / Syam@1234) -->
          <div id="auth-panel-admin-login">
            <div style="background: rgba(192, 74, 39, 0.1); border: 1px solid var(--primary-terracotta); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.5rem; text-align: center;">
              <span style="font-size: 0.82rem; color: var(--accent-gold); font-weight: 700;">👑 Primary Admin Manager Account Configured:</span>
              <div style="font-size: 0.88rem; color: var(--text-main); margin-top: 0.25rem;">
                Username: <strong>syamratnam123@gmail.com</strong> • Password: <strong>Syam@1234</strong>
              </div>
            </div>

            <form id="form-admin-login" novalidate>
              <div class="form-group">
                <label class="form-label" for="admin-email">
                  Admin Manager Username / Email <span style="color: var(--status-danger);">*</span>
                </label>
                <input type="email" id="admin-email" class="form-control" placeholder="syamratnam123@gmail.com" value="" required>
                <span id="err-admin-email" style="display: none; font-size: 0.75rem; color: var(--status-danger); margin-top: 0.25rem;">
                  ⚠️ Admin Username is required.
                </span>
              </div>

              <div class="form-group">
                <label class="form-label" for="admin-password">
                  Admin Manager Password <span style="color: var(--status-danger);">*</span>
                </label>
                <input type="password" id="admin-password" class="form-control" placeholder="Enter password (e.g. Syam@1234)" value="" required>
                <span id="err-admin-password" style="display: none; font-size: 0.75rem; color: var(--status-danger); margin-top: 0.25rem;">
                  ⚠️ Admin Password is required.
                </span>
              </div>

              <button type="submit" id="btn-submit-admin-login" class="btn btn-primary" style="width: 100%; margin-top: 1rem; padding: 0.85rem; font-size: 1rem;">
                👑 Log In as Admin Manager & Enter ERP Dashboard
              </button>
            </form>
          </div>

          <!-- PANEL 2: SEPARATE ADMIN MANAGER REGISTRATION -->
          <div id="auth-panel-admin-reg" style="display: none;">
            <div style="text-align: center; margin-bottom: 1.5rem;">
              <h3 style="font-family: var(--font-heading); font-size: 1.2rem; font-weight: 800; color: var(--accent-amber);">Register New Admin Manager Account</h3>
              <p style="font-size: 0.85rem; color: var(--text-muted);">Admin accounts have full executive control and auto-sync to Firebase Firestore <code style="color:var(--accent-gold);">users</code> collection.</p>
            </div>

            <form id="form-admin-register" novalidate>
              <div class="form-group">
                <label class="form-label" for="areg-name">
                  Admin Full Name <span style="color: var(--status-danger);">*</span>
                </label>
                <input type="text" id="areg-name" class="form-control" placeholder="e.g. Syam Ratnam" value="" required>
                <span id="err-areg-name" style="display: none; font-size: 0.75rem; color: var(--status-danger); margin-top: 0.25rem;">
                  ⚠️ Admin Name is required.
                </span>
              </div>

              <div class="form-group">
                <label class="form-label" for="areg-email">
                  Admin Email Address / Username <span style="color: var(--status-danger);">*</span>
                </label>
                <input type="email" id="areg-email" class="form-control" placeholder="e.g. syamratnam123@gmail.com" value="" required>
                <span id="err-areg-email" style="display: none; font-size: 0.75rem; color: var(--status-danger); margin-top: 0.25rem;">
                  ⚠️ Valid Admin Email is required.
                </span>
              </div>

              <div class="form-group">
                <label class="form-label" for="areg-password">
                  Admin Password <span style="color: var(--status-danger);">*</span>
                </label>
                <input type="password" id="areg-password" class="form-control" placeholder="Create secure admin password" value="" required>
                <span id="err-areg-password" style="display: none; font-size: 0.75rem; color: var(--status-danger); margin-top: 0.25rem;">
                  ⚠️ Admin Password is required.
                </span>
              </div>

              <div class="form-group">
                <label class="form-label" for="areg-company">Enterprise / Kiln Division Name</label>
                <input type="text" id="areg-company" class="form-control" placeholder="NSR Brick Enterprise Pvt Ltd" value="NSR Brick Enterprise Pvt Ltd">
              </div>

              <button type="submit" id="btn-submit-admin-register" class="btn btn-primary" style="width: 100%; margin-top: 1rem; padding: 0.85rem; font-size: 1rem;">
                👑 Register Admin Manager & Push to Firebase Database
              </button>
            </form>
          </div>

          <!-- PANEL 3: USER / CONTRACTOR LOGIN & REGISTRATION -->
          <div id="auth-panel-user" style="display: none;">
            <button class="btn btn-secondary" id="btn-google-login" style="width: 100%; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: center; gap: 0.6rem; padding: 0.85rem; font-weight: 600; border: 1px solid var(--bg-surface-border);">
              <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>
              Sign In with Google Account
            </button>

            <form id="form-login-account" novalidate>
              <div class="form-group">
                <label class="form-label" for="login-email">
                  Email Address / Username <span style="color: var(--status-danger);">*</span>
                </label>
                <input type="email" id="login-email" class="form-control" placeholder="Enter your email address" value="" required>
              </div>

              <div class="form-group">
                <label class="form-label" for="login-password">
                  Password <span style="color: var(--status-danger);">*</span>
                </label>
                <input type="password" id="login-password" class="form-control" placeholder="Enter your password" value="" required>
              </div>

              <button type="submit" id="btn-submit-login" class="btn btn-primary" style="width: 100%; margin-top: 1rem; padding: 0.85rem; font-size: 0.95rem;">
                👷‍♂️ Log In as Contractor / User
              </button>
            </form>
          </div>

        </div>
      </div>

    </div>
  `;
}
