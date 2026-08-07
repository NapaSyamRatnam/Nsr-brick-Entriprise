/* NSR Brick Enterprise - Core ERP & CRM Application Controller */

import { store } from './store.js';
import { renderLandingView } from './views/landingView.js';
import { renderAdminDashboard } from './views/adminDashboard.js';
import { renderResourceTracker } from './views/resourceTracker.js';
import { renderOrdersManager } from './views/ordersManager.js';
import { renderPaymentsLedger } from './views/paymentsLedger.js';
import { renderBuilderPortal } from './views/builderPortal.js';
import { renderWorkerPortal } from './views/workerPortal.js';
import { renderRealEstatePortal } from './views/realEstatePortal.js';
import { renderLoginView } from './views/loginView.js';

class App {
  constructor() {
    this.contentContainer = document.getElementById('app-content');
    this.modalOverlay = document.getElementById('modal-overlay');
    this.modalTitle = document.getElementById('modal-title');
    this.modalBody = document.getElementById('modal-body');
    this.modalFooter = document.getElementById('modal-footer');
    this.toastContainer = document.getElementById('toast-container');
    
    this.heroSlideIndex = 0;
    this.init();
  }

  navigateToLanding() {
    store.setView('landing');
    this.updateNavUI();
    this.renderActiveView();
  }

  init() {
    this.bindGlobalEvents();
    this.updateUserHeaderUI();
    this.renderActiveView();
    this.startHeroSlider();

    // Subscribe to store realtime updates
    store.subscribe(() => {
      this.updateNavUI();
      this.updateUserHeaderUI();
    });
  }

  bindGlobalEvents() {
    // Theme Toggle (Light/Dark)
    document.getElementById('btn-theme-toggle')?.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      const isLight = document.body.classList.contains('light-theme');
      document.getElementById('theme-icon').textContent = isLight ? '☀️' : '🌙';
      this.showToast(`Switched to ${isLight ? 'Light' : 'Dark'} Industrial Theme`, 'info');
    });

    // Header Login/Account Switch Button
    document.getElementById('btn-header-login-switch')?.addEventListener('click', () => {
      store.setView('login');
      this.updateNavUI();
      this.renderActiveView();
      this.showToast('Select an Admin or User profile to authenticate', 'info');
    });

    // Navigation Links (Sidebar & Topbar)
    document.querySelectorAll('.nav-link, .nav-link-trigger').forEach(link => {
      link.addEventListener('click', (e) => {
        const view = e.currentTarget.dataset.view;
        if (view) {
          store.setView(view);
          this.updateNavUI();
          this.renderActiveView();
        }
      });
    });

    // Scroll Triggers on Landing Page
    document.addEventListener('click', (e) => {
      if (e.target.closest('.btn-scroll-products')) {
        if (store.getView() !== 'landing') store.setView('landing');
        this.renderActiveView();
        setTimeout(() => {
          document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      if (e.target.closest('.btn-scroll-quote') || e.target.closest('.btn-scroll-contact')) {
        if (store.getView() !== 'landing') store.setView('landing');
        this.renderActiveView();
        setTimeout(() => {
          document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    });

    // Modal Close
    document.getElementById('modal-close-btn')?.addEventListener('click', () => this.closeModal());
    this.modalOverlay?.addEventListener('click', (e) => {
      if (e.target === this.modalOverlay) this.closeModal();
    });

    // Content Event Delegation
    this.contentContainer.addEventListener('click', (e) => {
      // 1-Click Demo Profile Login
      const demoCard = e.target.closest('.demo-login-card');
      if (demoCard) {
        const role = demoCard.dataset.role;
        const loggedUser = store.loginAsDemoProfile(role);
        this.updateUserHeaderUI();
        this.updateNavUI();
        this.renderActiveView();
        this.showToast(`Firebase Authenticated: ${loggedUser.name} (${loggedUser.roleLabel})`, 'success');
        return;
      }

      // Product Buy Now Button
      const buyBtn = e.target.closest('.btn-product-buy');
      if (buyBtn) {
        const brickName = buyBtn.dataset.brickName;
        const price = parseFloat(buyBtn.dataset.price);
        this.openCreateOrderModal({ brickType: brickName, unitPrice: price });
        return;
      }

      // Product Get Quote Button
      const quoteBtn = e.target.closest('.btn-product-quote');
      if (quoteBtn) {
        const brickName = quoteBtn.dataset.brickName;
        this.openCreateOrderModal({ brickType: brickName, quantity: 20000 });
        return;
      }

      // Restock Button
      if (e.target.closest('#btn-restock-quick') || e.target.closest('#btn-open-restock-modal')) {
        this.openRestockModal();
        return;
      }

      // Log New Order Button
      if (e.target.closest('#btn-new-order-admin') || e.target.closest('#btn-open-create-order')) {
        this.openCreateOrderModal();
        return;
      }

      // Record Payment Button
      if (e.target.closest('#btn-open-record-payment')) {
        this.openRecordPaymentModal();
        return;
      }

      // View Order Logistics
      const viewOrderBtn = e.target.closest('.btn-view-order');
      if (viewOrderBtn) {
        const orderId = viewOrderBtn.dataset.id;
        this.openOrderDetailsModal(orderId);
        return;
      }

      // Print Invoice
      const printInvoiceBtn = e.target.closest('.btn-print-invoice');
      if (printInvoiceBtn) {
        const orderId = printInvoiceBtn.dataset.orderId;
        this.openInvoiceModal(orderId);
        return;
      }

      // Scroll to Calculator
      if (e.target.closest('#btn-scroll-to-calc')) {
        const calcElem = document.getElementById('brick-calculator-section');
        if (calcElem) calcElem.scrollIntoView({ behavior: 'smooth' });
        return;
      }

      // Calculator Convert to Order
      if (e.target.closest('#btn-calc-place-order')) {
        this.handleCalculatorToOrder();
        return;
      }
    });

    // Delegated Change Events for Calculator Math
    this.contentContainer.addEventListener('input', (e) => {
      if (e.target.id?.startsWith('calc-') || e.target.id?.startsWith('re-')) {
        this.recalculateBrickEstimates();
        this.recalculateRealEstateEstimates();
      }
    });
  }

  startHeroSlider() {
    const images = Object.values(store.getAssetImages());
    setInterval(() => {
      const bgSlide = document.getElementById('hero-bg-slide');
      if (bgSlide && store.getView() === 'landing') {
        this.heroSlideIndex = (this.heroSlideIndex + 1) % images.length;
        bgSlide.style.backgroundImage = `url('${images[this.heroSlideIndex]}')`;
      }
    }, 4500);
  }

  updateUserHeaderUI() {
    const user = store.getCurrentUser();
    const avatarElem = document.getElementById('header-user-avatar');
    const nameElem = document.getElementById('header-user-name');
    const roleElem = document.getElementById('header-user-role');

    if (user) {
      if (avatarElem) avatarElem.textContent = user.avatar;
      if (nameElem) nameElem.textContent = user.name;
      if (roleElem) roleElem.textContent = user.roleLabel;
    }
  }

  updateNavUI() {
    const currentView = store.getView();
    const topNav = document.getElementById('main-top-nav');
    const sidebar = document.getElementById('app-sidebar');

    const isPublicView = currentView === 'landing' || currentView === 'login';

    // Top landing navbar is shown ONLY on public landing/login pages
    if (topNav) {
      topNav.style.display = isPublicView ? 'flex' : 'none';
    }

    // Left sidebar component with all ERP module buttons is shown ONLY after user/admin login
    if (sidebar) {
      sidebar.style.display = isPublicView ? 'none' : 'flex';
    }

    // Update Sidebar active links
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.dataset.view === currentView) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    const activeOrders = store.getOrders().filter(o => o.status !== 'Delivered');
    const badge = document.getElementById('sidebar-orders-badge');
    if (badge) badge.textContent = activeOrders.length;
  }

  renderActiveView() {
    const view = store.getView();
    let html = '';

    switch (view) {
      case 'landing':
        html = renderLandingView();
        break;
      case 'dashboard':
        html = this.wrapWithFriendlyHeader(renderAdminDashboard(), '👑 NSR Executive ERP Dashboard', 'Real-time telemetry on raw material stock, kiln firing chambers, dispatch logistics & financial health.');
        break;
      case 'resources':
        html = this.wrapWithFriendlyHeader(renderResourceTracker(), '🧱 Resources & Stock ERP', 'Monitor raw red clay soil deposits, coal fuel reserves, water tanks, drying shed queues, and finished brick stock.');
        break;
      case 'orders':
        html = this.wrapWithFriendlyHeader(renderOrdersManager(), '📦 Orders & Freight Logistics', 'Track contractor brick orders, moulding schedules, kiln chamber allocation, and live site dispatch.');
        break;
      case 'payments':
        html = this.wrapWithFriendlyHeader(renderPaymentsLedger(), '💵 Financial Ledger & Payments', 'Complete track history of customer payments, advance deposits, GST breakdown & digital receipts.');
        break;
      case 'builder':
        html = this.wrapWithFriendlyHeader(renderBuilderPortal(), '🏗️ Builder & Estimator Portal', 'Estimate brick quantities, calculate mortar ratios, track job site dispatches, and request bulk quotes.');
        break;
      case 'worker':
        html = this.wrapWithFriendlyHeader(renderWorkerPortal(), '🚧 Worker Express Portal', '1-Click site re-supply, live truck arrival countdown, driver contact & site transit damage reporting.');
        break;
      case 'realestate':
        html = this.wrapWithFriendlyHeader(renderRealEstatePortal(), '🏢 Real Estate Quality Hub', 'Verified laboratory test certificates, eco-ratings, compressive strength specs & volume bidding contracts.');
        break;
      case 'login':
        html = renderLoginView();
        break;
      default:
        html = renderLandingView();
    }

    this.contentContainer.innerHTML = html;
    this.bindViewSpecificListeners();
  }

  wrapWithFriendlyHeader(contentHtml, titleStr, descStr) {
    const user = store.getCurrentUser();
    return `
      <div style="background: linear-gradient(135deg, rgba(192, 74, 39, 0.12), var(--bg-surface-elevated)); border: 1px solid var(--bg-surface-border); border-left: 4px solid var(--primary-terracotta); border-radius: var(--radius-md); padding: 1rem 1.25rem; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
        <div style="display: flex; align-items: center; gap: 0.85rem;">
          <span style="font-size: 1.8rem;">${user ? user.avatar : '🧱'}</span>
          <div>
            <div style="font-weight: 700; font-size: 0.95rem; color: var(--text-main);">
              ${user ? user.welcomeMsg : 'Welcome to NSR Brick Enterprise!'}
            </div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">
              Authenticated as <strong>${user ? user.name : 'Guest'}</strong> (${user ? user.company : 'NSR Platform'})
            </div>
          </div>
        </div>

        <button class="btn btn-secondary btn-sm" onclick="alert('💡 Help Guide: Click sidebar menu options to navigate ERP modules. Use the Brick Calculator for project cost estimates.')">
          💡 Module Guide
        </button>
      </div>

      ${contentHtml}
    `;
  }

  bindViewSpecificListeners() {
    // Landing Page Inquiry Form Submit
    const landingForm = document.getElementById('landing-inquiry-form');
    if (landingForm) {
      landingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('inq-name').value;
        const phone = document.getElementById('inq-phone').value;
        const qty = document.getElementById('inq-qty').value;
        
        this.showToast(`Firebase Cloud Message: Quote request of ${qty} bricks received for ${name} (${phone})!`, 'success');
        landingForm.reset();
      });
    }

    // Custom Login Form Submit
    const regForm = document.getElementById('form-register-user');
    if (regForm) {
      regForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('reg-name').value;
        const email = document.getElementById('reg-email').value;
        const role = document.getElementById('reg-role').value;
        const company = document.getElementById('reg-company').value;

        const newUser = store.registerUser(name, email, role, company);
        this.updateUserHeaderUI();
        
        if (role === 'owner') store.setView('dashboard');
        else if (role === 'builder') store.setView('builder');
        else if (role === 'worker') store.setView('worker');
        else if (role === 'realestate') store.setView('realestate');

        this.updateNavUI();
        this.renderActiveView();
        this.showToast(`Firebase Auth Success! Welcome, ${newUser.name}`, 'success');
      });
    }

    // Worker Express Form Submit
    const workerForm = document.getElementById('form-worker-resupply');
    if (workerForm) {
      workerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const site = document.getElementById('ws-site-name').value;
        const qty = document.getElementById('ws-quantity').value;
        const brick = document.getElementById('ws-brick-type').value;

        store.createQuickSiteOrder(site, qty, brick);
        this.showToast(`Urgent express dispatch of ${qty} bricks queued for ${site}!`, 'success');
        store.setView('orders');
        this.updateNavUI();
        this.renderActiveView();
      });
    }

    this.recalculateBrickEstimates();
    this.recalculateRealEstateEstimates();
  }

  /* Brick Estimator Calculation Math */
  recalculateBrickEstimates() {
    const length = parseFloat(document.getElementById('calc-length')?.value || 60);
    const height = parseFloat(document.getElementById('calc-height')?.value || 10);
    const thickness = parseFloat(document.getElementById('calc-thickness')?.value || 9);
    const brickPrice = parseFloat(document.getElementById('calc-brick-type')?.value || 8.50);
    const wastePct = parseFloat(document.getElementById('calc-waste')?.value || 0.05);

    const wallAreaSqFt = length * height;
    let bricksPerSqFt = 7;
    if (thickness === 9) bricksPerSqFt = 14;
    else if (thickness === 13.5) bricksPerSqFt = 21;

    const baseBricks = wallAreaSqFt * bricksPerSqFt;
    const totalBricksWithWaste = Math.ceil(baseBricks * (1 + wastePct));

    const cementBags = Math.ceil(totalBricksWithWaste / 400);
    const sandTons = (totalBricksWithWaste * 0.00037).toFixed(1);
    const totalMaterialCost = totalBricksWithWaste * brickPrice;

    const resBricks = document.getElementById('res-brick-count');
    const resCement = document.getElementById('res-cement');
    const resSand = document.getElementById('res-sand');
    const resCost = document.getElementById('res-total-cost');

    if (resBricks) resBricks.innerHTML = `${totalBricksWithWaste.toLocaleString()} <span style="font-size:1rem; font-weight:400; color:var(--text-main);">Pcs</span>`;
    if (resCement) resCement.textContent = `${cementBags} Bags`;
    if (resSand) resSand.textContent = `${sandTons} Tons`;
    if (resCost) resCost.textContent = `₹${totalMaterialCost.toLocaleString(undefined, {minimumFractionDigits: 2})}`;
  }

  recalculateRealEstateEstimates() {
    const towers = parseInt(document.getElementById('re-towers')?.value || 4);
    const floors = parseInt(document.getElementById('re-floors')?.value || 12);
    const units = parseInt(document.getElementById('re-units')?.value || 6);

    const totalBricks = towers * floors * units * 6000;
    const volElem = document.getElementById('re-total-volume');
    if (volElem) volElem.textContent = `${totalBricks.toLocaleString()} Bricks`;
  }

  handleCalculatorToOrder() {
    const selectElem = document.getElementById('calc-brick-type');
    const selectedOption = selectElem.options[selectElem.selectedIndex];
    const brickName = selectedOption.dataset.name || 'NSR Grade-A Heavy Density Red Clay Brick';
    const brickPrice = parseFloat(selectElem.value);
    
    const countStr = document.getElementById('res-brick-count')?.textContent.replace(/[^0-9]/g, '') || '7560';
    const qty = parseInt(countStr);

    this.openCreateOrderModal({
      brickType: brickName,
      quantity: qty,
      unitPrice: brickPrice,
      totalAmount: qty * brickPrice
    });
  }

  /* Modal Handlers */
  openModal(title, bodyHtml, footerHtml) {
    this.modalTitle.textContent = title;
    this.modalBody.innerHTML = bodyHtml;
    this.modalFooter.innerHTML = footerHtml || '';
    this.modalOverlay.classList.add('active');
  }

  closeModal() {
    this.modalOverlay.classList.remove('active');
  }

  openRestockModal() {
    const bodyHtml = `
      <form id="form-restock">
        <div class="form-group">
          <label class="form-label">Resource Type</label>
          <select id="restock-type" class="form-select">
            <option value="claySoilTons">Red Clay Soil Quarry Stock (Tons)</option>
            <option value="coalFuelTons">Coal & Biomass Fuel (Tons)</option>
            <option value="waterReservesK">Water Reserves (k-Liters)</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Quantity to Add</label>
          <input type="number" id="restock-amount" class="form-control" value="250" min="10" step="10" required>
        </div>
      </form>
    `;

    const footerHtml = `
      <button class="btn btn-secondary" onclick="document.getElementById('modal-close-btn').click()">Cancel</button>
      <button class="btn btn-primary" id="btn-submit-restock">Add to Inventory</button>
    `;

    this.openModal('Restock Raw Material Inventory', bodyHtml, footerHtml);

    document.getElementById('btn-submit-restock').addEventListener('click', () => {
      const type = document.getElementById('restock-type').value;
      const amount = parseFloat(document.getElementById('restock-amount').value);

      store.addResourceStock(type, amount);
      this.closeModal();
      this.showToast(`Updated Firestore: Added ${amount} units to raw inventory!`, 'success');
      this.renderActiveView();
    });
  }

  openCreateOrderModal(prefillData = {}) {
    const products = store.getProducts();
    const currentUser = store.getCurrentUser();

    const bodyHtml = `
      <form id="form-create-order">
        <div class="form-group">
          <label class="form-label">Client / Construction Company Name</label>
          <input type="text" id="co-client" class="form-control" value="${prefillData.clientName || currentUser.company || 'Sharma Infrastructure & Builders'}" required>
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
          <div class="form-group">
            <label class="form-label">Contact Person</label>
            <input type="text" id="co-person" class="form-control" value="${currentUser.name || 'Vikram Sharma'}" required>
          </div>
          <div class="form-group">
            <label class="form-label">Phone Number</label>
            <input type="text" id="co-phone" class="form-control" value="+91 98765 43210">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Delivery Job Site Address</label>
          <input type="text" id="co-address" class="form-control" value="Block 4, Metro Horizon Plaza, Sector 12, Hyderabad" required>
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
          <div class="form-group">
            <label class="form-label">Brick Grade</label>
            <select id="co-brick" class="form-select">
              ${products.map(b => `
                <option value="${b.name}" data-price="${b.price}" ${prefillData.brickType === b.name ? 'selected' : ''}>${b.name} (₹${b.price.toFixed(2)})</option>
              `).join('')}
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Quantity (Units)</label>
            <input type="number" id="co-qty" class="form-control" value="${prefillData.quantity || 30000}" min="1000" step="1000" required>
          </div>
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
          <div class="form-group">
            <label class="form-label">Advance Deposit Amount (₹)</label>
            <input type="number" id="co-advance" class="form-control" value="${prefillData.paidAmount || 100000}">
          </div>
          <div class="form-group">
            <label class="form-label">Payment Method</label>
            <select id="co-paymethod" class="form-select">
              <option value="UPI / Bank Transfer (NEFT)">UPI / Bank Transfer (NEFT)</option>
              <option value="Corporate Credit Line">Corporate Credit Line</option>
              <option value="Digital Escrow Deposit">Digital Escrow Deposit</option>
            </select>
          </div>
        </div>
      </form>
    `;

    const footerHtml = `
      <button class="btn btn-secondary" onclick="document.getElementById('modal-close-btn').click()">Cancel</button>
      <button class="btn btn-primary" id="btn-submit-order">Confirm & Issue Order</button>
    `;

    this.openModal('Issue New Clay Brick Order', bodyHtml, footerHtml);

    document.getElementById('btn-submit-order').addEventListener('click', () => {
      const clientName = document.getElementById('co-client').value;
      const contactPerson = document.getElementById('co-person').value;
      const phone = document.getElementById('co-phone').value;
      const siteAddress = document.getElementById('co-address').value;
      const brickSelect = document.getElementById('co-brick');
      const brickType = brickSelect.value;
      const unitPrice = parseFloat(brickSelect.options[brickSelect.selectedIndex].dataset.price || 8.50);
      const quantity = parseInt(document.getElementById('co-qty').value);
      const paidAmount = parseFloat(document.getElementById('co-advance').value || 0);
      const paymentMethod = document.getElementById('co-paymethod').value;

      const totalAmount = quantity * unitPrice;

      const newOrder = store.createOrder({
        clientName,
        clientRole: 'Builder',
        contactPerson,
        phone,
        siteAddress,
        deliveryDate: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
        brickType,
        quantity,
        unitPrice,
        totalAmount,
        paidAmount,
        paymentMethod
      });

      this.closeModal();
      this.showToast(`Firebase Cloud Message: Order ${newOrder.id} confirmed!`, 'success');
      store.setView('orders');
      this.updateNavUI();
      this.renderActiveView();
    });
  }

  openRecordPaymentModal() {
    const orders = store.getOrders().filter(o => o.balance > 0);

    if (orders.length === 0) {
      alert('All current customer order accounts are fully paid!');
      return;
    }

    const bodyHtml = `
      <form id="form-record-pay">
        <div class="form-group">
          <label class="form-label">Select Customer Order</label>
          <select id="rp-order" class="form-select">
            ${orders.map(o => `
              <option value="${o.id}" data-client="${o.clientName}" data-balance="${o.balance}">
                ${o.id} - ${o.clientName} (Balance Due: ₹${o.balance.toLocaleString()})
              </option>
            `).join('')}
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Payment Amount (₹)</label>
          <input type="number" id="rp-amount" class="form-control" value="${orders[0].balance}" min="1" step="0.01" required>
        </div>

        <div class="form-group">
          <label class="form-label">Payment Channel</label>
          <select id="rp-method" class="form-select">
            <option value="UPI / Instant Bank Transfer">UPI / Instant Bank Transfer</option>
            <option value="NEFT / RTGS Wire">NEFT / RTGS Wire</option>
            <option value="Digital Escrow Clearing">Digital Escrow Clearing</option>
            <option value="Company Cheque">Company Cheque</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Bank Reference / Transaction #</label>
          <input type="text" id="rp-ref" class="form-control" value="NEFT-${Math.floor(100000 + Math.random() * 900000)}">
        </div>
      </form>
    `;

    const footerHtml = `
      <button class="btn btn-secondary" onclick="document.getElementById('modal-close-btn').click()">Cancel</button>
      <button class="btn btn-primary" id="btn-submit-payment">Record Payment Receipt</button>
    `;

    this.openModal('Record Customer Payment Receipt', bodyHtml, footerHtml);

    document.getElementById('rp-order').addEventListener('change', (e) => {
      const selectedOption = e.target.options[e.target.selectedIndex];
      const bal = selectedOption.dataset.balance;
      document.getElementById('rp-amount').value = bal;
    });

    document.getElementById('btn-submit-payment').addEventListener('click', () => {
      const orderSelect = document.getElementById('rp-order');
      const orderId = orderSelect.value;
      const clientName = orderSelect.options[orderSelect.selectedIndex].dataset.client;
      const amount = parseFloat(document.getElementById('rp-amount').value);
      const paymentMethod = document.getElementById('rp-method').value;
      const refNo = document.getElementById('rp-ref').value;

      store.recordPayment({ orderId, clientName, amount, paymentMethod, refNo });

      this.closeModal();
      this.showToast(`Recorded payment of ₹${amount.toLocaleString()} for ${orderId}!`, 'success');
      this.renderActiveView();
    });
  }

  openOrderDetailsModal(orderId) {
    const order = store.getOrders().find(o => o.id === orderId);
    if (!order) return;

    const bodyHtml = `
      <div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted);">Order Tracking ID</div>
            <div style="font-family:var(--font-heading); font-size:1.5rem; font-weight:800; color:var(--accent-amber);">${order.id}</div>
          </div>
          <span class="badge ${order.status === 'Dispatched' ? 'badge-warning' : (order.status === 'Delivered' ? 'badge-success' : 'badge-info')}">
            ${order.status}
          </span>
        </div>

        <div style="background:var(--bg-dark); padding:1rem; border-radius:var(--radius-md); font-size:0.88rem; margin-bottom:1.5rem;">
          <div style="margin-bottom:0.35rem;"><strong>Client:</strong> ${order.clientName}</div>
          <div style="margin-bottom:0.35rem;"><strong>Delivery Site:</strong> ${order.siteAddress}</div>
          <div style="margin-bottom:0.35rem;"><strong>Brick Grade:</strong> ${order.brickType} (${order.quantity.toLocaleString()} Pcs)</div>
          <div><strong>Freight Driver:</strong> ${order.driverAssigned}</div>
        </div>

        <h4 style="font-family:var(--font-heading); font-size:1rem; font-weight:700; margin-bottom:0.75rem;">Fulfillment & Transit Timeline</h4>
        
        <div class="timeline">
          ${order.timeline.map(t => `
            <div class="timeline-item ${t.status}">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <div class="timeline-title">${t.title}</div>
                <div class="timeline-time">${t.time}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    const isOwner = store.getRole() === 'owner';
    const footerHtml = `
      ${isOwner && order.status !== 'Delivered' ? `
        <button class="btn btn-outline-terracotta btn-sm" id="btn-advance-status" data-id="${order.id}">Advance Delivery Status</button>
      ` : ''}
      <button class="btn btn-secondary" onclick="document.getElementById('modal-close-btn').click()">Close</button>
    `;

    this.openModal(`Order Logistics - ${order.id}`, bodyHtml, footerHtml);

    document.getElementById('btn-advance-status')?.addEventListener('click', (e) => {
      const nextStatusMap = {
        'Processing & Moulding': 'Moulding & Firing',
        'Moulding & Firing': 'Dispatched',
        'Dispatched': 'Delivered'
      };
      const nextStatus = nextStatusMap[order.status] || 'Delivered';
      store.updateOrderStatus(order.id, nextStatus);
      this.closeModal();
      this.showToast(`Status updated to ${nextStatus}`, 'success');
      this.renderActiveView();
    });
  }

  openInvoiceModal(orderId) {
    const order = store.getOrders().find(o => o.id === orderId);
    if (!order) return;

    const invoiceNo = 'INV-NSR-2026-' + order.id.replace('ORD-NSR-', '');
    const gstAmount = order.totalAmount * 0.18; // 18% GST

    const bodyHtml = `
      <div class="invoice-container" id="printable-invoice-area">
        <div class="invoice-header">
          <div>
            <div class="invoice-brand">NSR BRICK ENTERPRISE</div>
            <div style="font-size:0.8rem; color:#64748B; margin-top:0.25rem;">High-Density Clay Brick Manufacturers & Kilns</div>
            <div style="font-size:0.8rem; color:#64748B;">Quarry Site #4, Industrial Zone, Hyderabad • GSTIN: 36AAAAA0000A1Z5</div>
          </div>
          <div style="text-align:right;">
            <div style="font-size:1.4rem; font-weight:800; color:#1E293B;">TAX INVOICE</div>
            <div style="font-weight:700; color:#C04A27;"># ${invoiceNo}</div>
            <div style="font-size:0.8rem; color:#64748B; margin-top:0.25rem;">Date: ${order.orderDate}</div>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; margin-bottom:1.5rem; font-size:0.88rem;">
          <div>
            <div style="font-weight:700; color:#475569; text-transform:uppercase; font-size:0.75rem;">Billed To:</div>
            <div style="font-weight:700; color:#0F172A; font-size:1.05rem;">${order.clientName}</div>
            <div style="color:#475569;">Attn: ${order.contactPerson}</div>
            <div style="color:#475569;">${order.siteAddress}</div>
          </div>
          <div style="text-align:right;">
            <div style="font-weight:700; color:#475569; text-transform:uppercase; font-size:0.75rem;">Payment Status:</div>
            <div style="font-weight:700; color:#0F172A;">${order.paymentStatus}</div>
            <div style="color:#475569;">Payment Method: <strong>${order.paymentMethod}</strong></div>
          </div>
        </div>

        <table class="invoice-table">
          <thead>
            <tr>
              <th>Item Description</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th style="text-align:right;">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>${order.brickType}</strong><br><span style="font-size:0.75rem; color:#64748B;">High-density kiln burnt red clay</span></td>
              <td>${order.quantity.toLocaleString()} Pcs</td>
              <td>₹${order.unitPrice.toFixed(2)}</td>
              <td style="text-align:right;">₹${order.totalAmount.toLocaleString(undefined, {minimumFractionDigits:2})}</td>
            </tr>
          </tbody>
        </table>

        <div class="invoice-total-row">
          <div>Subtotal: ₹${order.totalAmount.toLocaleString(undefined, {minimumFractionDigits:2})}</div>
        </div>
        <div class="invoice-total-row">
          <div>GST (18%): ₹${gstAmount.toLocaleString(undefined, {minimumFractionDigits:2})}</div>
        </div>
        <div class="invoice-total-row" style="color:#059669;">
          <div>Amount Paid: -₹${order.paidAmount.toLocaleString(undefined, {minimumFractionDigits:2})}</div>
        </div>
        <div class="invoice-total-row" style="color:#C04A27; font-size:1.25rem;">
          <div>Balance Due: ₹${order.balance.toLocaleString(undefined, {minimumFractionDigits:2})}</div>
        </div>
      </div>
    `;

    const footerHtml = `
      <button class="btn btn-secondary" onclick="document.getElementById('modal-close-btn').click()">Close</button>
      <button class="btn btn-primary" onclick="window.print()">🖨️ Print Tax Invoice</button>
    `;

    this.openModal(`Tax Invoice ${invoiceNo}`, bodyHtml, footerHtml);
  }

  showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <span>${message}</span>
    `;
    this.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 4000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.app = new App();
});
