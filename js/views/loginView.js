/* NSR Brick Enterprise - Separate Login & Registration View with Required Field Validation */

export function renderLoginView() {
  return `
    <div style="max-width:680px; margin: 2.5rem auto; padding: 1rem;">
      
      <!-- NSR Brick Header Banner -->
      <div style="background: linear-gradient(135deg, rgba(192, 74, 39, 0.2), var(--bg-surface-elevated)); border: 1px solid var(--primary-terracotta); border-radius: var(--radius-lg); padding: 2rem; margin-bottom: 2rem; text-align: center; box-shadow: var(--shadow-glow);">
        <div style="font-size: 3rem; margin-bottom: 0.5rem;">🧱</div>
        <h1 style="font-family: var(--font-heading); font-size: 2.2rem; font-weight: 900; color: var(--text-main); margin-bottom: 0.5rem;">
          NSR Brick Enterprise Portal
        </h1>
        <p style="font-size: 0.95rem; color: var(--text-muted); max-width: 580px; margin: 0 auto; line-height: 1.6;">
          🔒 <strong>Production Firebase Authentication Active</strong>: Please enter your login credentials or register a new account to unlock full access to Executive ERP, Stock Inventory, Freight Logistics, and Financial Ledgers.
        </p>
      </div>

      <!-- Main Auth Card with Separate Login & Registration Tabs -->
      <div style="background: var(--bg-surface); border: 1px solid var(--bg-surface-border); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-lg);">
        
        <!-- Tab Navigation Header Buttons -->
        <div style="display: flex; border-bottom: 1px solid var(--bg-surface-border); background: var(--bg-surface-elevated);">
          <button id="tab-btn-login" class="auth-tab-btn active" style="flex: 1; padding: 1.1rem; border: none; background: transparent; color: var(--accent-amber); font-family: var(--font-heading); font-weight: 800; font-size: 1.05rem; cursor: pointer; border-bottom: 3px solid var(--primary-terracotta);">
            🔐 Log In to Account
          </button>
          <button id="tab-btn-register" class="auth-tab-btn" style="flex: 1; padding: 1.1rem; border: none; background: transparent; color: var(--text-muted); font-family: var(--font-heading); font-weight: 800; font-size: 1.05rem; cursor: pointer; border-bottom: 3px solid transparent;">
            ✍️ Register New Account
          </button>
        </div>

        <div style="padding: 2.5rem;">

          <!-- Google Quick Auth Button -->
          <button class="btn btn-secondary" id="btn-google-login" style="width: 100%; margin-bottom: 1.75rem; display: flex; align-items: center; justify-content: center; gap: 0.6rem; padding: 0.85rem; font-weight: 600; border: 1px solid var(--bg-surface-border);">
            <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>
            Sign In with Google Account
          </button>

          <div style="text-align: center; font-size: 0.75rem; color: var(--text-subtle); margin-bottom: 1.75rem; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 700;">OR ENTER REQUIRED CREDENTIALS BELOW</div>

          <!-- LOGIN FORM (WITH EXPLICIT REQUIRED FIELD VALIDATION) -->
          <div id="auth-panel-login">
            <form id="form-login-account" novalidate>
              <div class="form-group">
                <label class="form-label" for="login-email">
                  Email Address / Username <span style="color: var(--status-danger);">*</span>
                </label>
                <input type="email" id="login-email" class="form-control" placeholder="Enter your email address" value="" required>
                <span id="err-login-email" style="display: none; font-size: 0.75rem; color: var(--status-danger); margin-top: 0.25rem;">
                  ⚠️ Email Address is required to log in.
                </span>
              </div>

              <div class="form-group">
                <label class="form-label" for="login-password">
                  Password <span style="color: var(--status-danger);">*</span>
                </label>
                <input type="password" id="login-password" class="form-control" placeholder="Enter your password" value="" required>
                <span id="err-login-password" style="display: none; font-size: 0.75rem; color: var(--status-danger); margin-top: 0.25rem;">
                  ⚠️ Password is required to log in.
                </span>
              </div>

              <button type="submit" id="btn-submit-login" class="btn btn-primary" style="width: 100%; margin-top: 1rem; padding: 0.85rem; font-size: 0.95rem;">
                🚀 Log In & Unlock ERP Access
              </button>
            </form>
          </div>

          <!-- REGISTER FORM (WITH EXPLICIT REQUIRED FIELD VALIDATION) -->
          <div id="auth-panel-register" style="display: none;">
            <form id="form-register-account" novalidate>
              <div class="form-group">
                <label class="form-label" for="reg-name">
                  Full Name <span style="color: var(--status-danger);">*</span>
                </label>
                <input type="text" id="reg-name" class="form-control" placeholder="Enter your full name" value="" required>
                <span id="err-reg-name" style="display: none; font-size: 0.75rem; color: var(--status-danger); margin-top: 0.25rem;">
                  ⚠️ Full Name is required to register.
                </span>
              </div>

              <div class="form-group">
                <label class="form-label" for="reg-email">
                  Email Address <span style="color: var(--status-danger);">*</span>
                </label>
                <input type="email" id="reg-email" class="form-control" placeholder="Enter your email address" value="" required>
                <span id="err-reg-email" style="display: none; font-size: 0.75rem; color: var(--status-danger); margin-top: 0.25rem;">
                  ⚠️ Valid Email Address is required.
                </span>
              </div>

              <div class="form-group">
                <label class="form-label" for="reg-password">
                  Password <span style="color: var(--status-danger);">*</span>
                </label>
                <input type="password" id="reg-password" class="form-control" placeholder="Create a secure password" value="" required>
                <span id="err-reg-password" style="display: none; font-size: 0.75rem; color: var(--status-danger); margin-top: 0.25rem;">
                  ⚠️ Password is required.
                </span>
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
                  <input type="text" id="reg-company" class="form-control" placeholder="Enterprise Company Name" value="">
                </div>
              </div>

              <button type="submit" id="btn-submit-register" class="btn btn-primary" style="width: 100%; margin-top: 1rem; padding: 0.85rem; font-size: 0.95rem;">
                ✍️ Register Account & Push to Firebase Database
              </button>
            </form>
          </div>

        </div>
      </div>

    </div>
  `;
}
