/* NSR Brick Enterprise - Firebase Firestore Simulation Store & Database */

const STORAGE_KEY = 'nsr_brick_enterprise_db_v4';

const DEMO_USERS = {
  admin: {
    id: 'USR-ADMIN-01',
    name: 'N.S. Reddy (Business Owner)',
    role: 'owner',
    roleLabel: 'Business Administrator & Owner',
    email: 'nsreddy@nsrbrick.com',
    company: 'NSR Brick Enterprise Pvt Ltd',
    avatar: '👑',
    welcomeMsg: 'Welcome back, Mr. Reddy! NSR Brick Kilns & Logistics ERP are fully operational.'
  },
  builder: {
    id: 'USR-BUILD-02',
    name: 'Vikram Sharma (Lead Contractor)',
    role: 'builder',
    roleLabel: 'Construction Builder / Contractor',
    email: 'vikram@sharmabuilders.in',
    company: 'Sharma Infrastructure & Builders',
    avatar: '👷‍♂️',
    welcomeMsg: 'Welcome Vikram! Use our brick estimator or place direct site orders.'
  },
  worker: {
    id: 'USR-WORK-03',
    name: 'Ramesh Patel (Site Foreman)',
    role: 'worker',
    roleLabel: 'Site Operations Manager',
    email: 'ramesh@siteops.in',
    company: 'NSR Freight & Site Logistics',
    avatar: '🏗️',
    welcomeMsg: 'Hi Ramesh! Need fast brick re-supply? Use 1-Click Site Express below.'
  },
  realestate: {
    id: 'USR-DEV-04',
    name: 'Ananya Rao (Project Director)',
    role: 'realestate',
    roleLabel: 'Real Estate Developer',
    email: 'ananya@skyline.in',
    company: 'Skyline Real Estate Developers',
    avatar: '🏢',
    welcomeMsg: 'Welcome Ananya! Access lab compressive strength reports & volume pricing.'
  }
};

// High Quality Image Asset URLs for Hero Slider & Gallery
const ASSET_IMAGES = {
  factory: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80',
  kiln: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
  construction: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
  luxuryHome: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  commercial: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  workers: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
  bricksStack: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80'
};

const INITIAL_STATE = {
  currentUser: DEMO_USERS.admin,
  activeView: 'landing',
  demoUsers: DEMO_USERS,
  listeners: [], // Realtime firestore listener subscribers

  // Products Showcase Catalogue
  products: [
    {
      id: 'PRD-01',
      name: 'NSR Grade-A Heavy Density Red Clay Brick',
      category: 'Red Clay',
      dimensions: '9" x 4.25" x 2.75"',
      compressiveStrength: '3,850 PSI (26.5 MPa)',
      price: 8.50,
      stock: 420000,
      rating: 4.9,
      reviewsCount: 128,
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80',
      description: 'Kiln burnt heavy density red clay brick for load-bearing walls and high-rise structures.'
    },
    {
      id: 'PRD-02',
      name: 'NSR Wire-Cut Machine Pressed Facing Brick',
      category: 'Wire-Cut',
      dimensions: '9" x 4" x 3"',
      compressiveStrength: '4,200 PSI (28.9 MPa)',
      price: 12.00,
      stock: 180000,
      rating: 4.95,
      reviewsCount: 94,
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
      description: 'Precision wire-cut exterior facing brick with smooth aesthetic finish and zero plastering needed.'
    },
    {
      id: 'PRD-03',
      name: 'NSR Thermal Insulation Hollow Clay Block',
      category: 'Hollow Block',
      dimensions: '16" x 8" x 8"',
      compressiveStrength: '2,800 PSI (19.3 MPa)',
      price: 25.00,
      stock: 95000,
      rating: 4.85,
      reviewsCount: 62,
      image: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=600&q=80',
      description: 'Eco-friendly hollow clay block providing superior thermal & acoustic insulation.'
    },
    {
      id: 'PRD-04',
      name: 'NSR Hand-Crafted Heritage Clay Facing Brick',
      category: 'Heritage Facing',
      dimensions: '9" x 4" x 2.25"',
      compressiveStrength: '3,500 PSI (24.1 MPa)',
      price: 18.00,
      stock: 60000,
      rating: 5.0,
      reviewsCount: 45,
      image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=600&q=80',
      description: 'Vintage rustic hand-crafted red clay brick for luxury villas and heritage resort facades.'
    }
  ],

  // Kiln & Raw Resources Tracking (ERP)
  resources: {
    claySoilTons: { current: 1450, max: 2500, unit: 'Tons', reorderLevel: 500, costPerUnit: 45 },
    coalFuelTons: { current: 320, max: 800, unit: 'Tons', reorderLevel: 100, costPerUnit: 180 },
    waterReservesK: { current: 85, max: 150, unit: 'k-Liters', reorderLevel: 30, costPerUnit: 8 },
    rawMouldedBricks: { current: 280000, max: 500000, unit: 'Units', reorderLevel: 50000, costPerUnit: 0.12 },
    dryingShedCapacity: { current: 190000, max: 300000, unit: 'Units', reorderLevel: 40000, costPerUnit: 0.15 }
  },

  // Kiln Operating Chambers
  kilnChambers: [
    { id: 'Kiln-01', status: 'Firing', temp: '1,050°C', bricksLoaded: 120000, completionPct: 78, cyclesLeftHours: 14 },
    { id: 'Kiln-02', status: 'Cooling', temp: '320°C', bricksLoaded: 110000, completionPct: 92, cyclesLeftHours: 5 },
    { id: 'Kiln-03', status: 'Loading Raw', temp: '45°C', bricksLoaded: 85000, completionPct: 35, cyclesLeftHours: 48 },
    { id: 'Kiln-04', status: 'Maintenance', temp: '25°C', bricksLoaded: 0, completionPct: 0, cyclesLeftHours: 0 }
  ],

  // Orders Database (CRM)
  orders: [
    {
      id: 'ORD-NSR-8821',
      clientName: 'Sharma Infrastructure & Builders',
      clientRole: 'Builder',
      contactPerson: 'Vikram Sharma (Lead Contractor)',
      phone: '+91 98765 43210',
      siteAddress: 'Block 4, Metro Horizon Plaza, Sector 12, Hyderabad',
      orderDate: '2026-08-04',
      deliveryDate: '2026-08-08',
      brickType: 'NSR Grade-A Heavy Density Red Clay Brick',
      quantity: 50000,
      unitPrice: 8.50,
      totalAmount: 425000,
      paidAmount: 250000,
      balance: 175000,
      status: 'Dispatched',
      paymentStatus: 'Partial',
      driverAssigned: 'Robert Vance (Freight Truck #TX-409)',
      timeline: [
        { title: 'Order Confirmed & Contract Signed', time: 'Aug 04, 09:30 AM', status: 'completed' },
        { title: 'Batch Allocation & Kiln Inspection', time: 'Aug 05, 11:15 AM', status: 'completed' },
        { title: 'Loaded on Freight Truck #TX-409', time: 'Aug 07, 07:00 AM', status: 'completed' },
        { title: 'In Transit to Site - Driver En Route', time: 'Aug 07, 08:30 AM', status: 'active' },
        { title: 'Site Unloading & Quality Signoff', time: 'Expected Today 2:00 PM', status: 'pending' }
      ]
    },
    {
      id: 'ORD-NSR-8822',
      clientName: 'Sunrise Villa Construction',
      clientRole: 'Builder',
      contactPerson: 'Elena Rostova',
      phone: '+91 98765 11223',
      siteAddress: 'Oakridge Estates Lot #14, Bangalore',
      orderDate: '2026-08-05',
      deliveryDate: '2026-08-09',
      brickType: 'NSR Wire-Cut Machine Pressed Facing Brick',
      quantity: 25000,
      unitPrice: 12.00,
      totalAmount: 300000,
      paidAmount: 300000,
      balance: 0,
      status: 'Moulding & Firing',
      paymentStatus: 'Paid',
      driverAssigned: 'Unassigned (Kiln Stage)',
      timeline: [
        { title: 'Order Confirmed', time: 'Aug 05, 02:00 PM', status: 'completed' },
        { title: 'Kiln Chamber 01 Firing Stage', time: 'Aug 06, 08:00 AM', status: 'active' },
        { title: 'Cooling & Quality Check', time: 'Aug 08, 09:00 AM', status: 'pending' }
      ]
    },
    {
      id: 'ORD-NSR-8823',
      clientName: 'Skyline Real Estate Developers',
      clientRole: 'Real Estate Developer',
      contactPerson: 'Ananya Rao',
      phone: '+91 98765 99887',
      siteAddress: 'Eco-Park Business Towers, Mumbai',
      orderDate: '2026-08-06',
      deliveryDate: '2026-08-12',
      brickType: 'NSR Thermal Insulation Hollow Clay Block',
      quantity: 15000,
      unitPrice: 25.00,
      totalAmount: 375000,
      paidAmount: 100000,
      balance: 275000,
      status: 'Pending Batch Approval',
      paymentStatus: 'Partial',
      driverAssigned: 'Pending Freight Dispatch',
      timeline: [
        { title: 'Bulk Quote & Advance Deposit Received', time: 'Aug 06, 04:45 PM', status: 'completed' },
        { title: 'Lab Certification Verification', time: 'Aug 07, 10:00 AM', status: 'active' }
      ]
    }
  ],

  // Financial Payments & Ledger History (Finance ERP)
  payments: [
    { id: 'PAY-NSR-1001', orderId: 'ORD-NSR-8821', clientName: 'Sharma Infrastructure & Builders', amount: 250000, paymentMethod: 'UPI / Bank Transfer (NEFT)', date: '2026-08-04', status: 'Verified', refNo: 'NEFT-99384721' },
    { id: 'PAY-NSR-1002', orderId: 'ORD-NSR-8822', clientName: 'Sunrise Villa Construction', amount: 300000, paymentMethod: 'Corporate Credit Line', date: '2026-08-05', status: 'Verified', refNo: 'CC-77382910' },
    { id: 'PAY-NSR-1003', orderId: 'ORD-NSR-8823', clientName: 'Skyline Real Estate Developers', amount: 100000, paymentMethod: 'Digital Escrow Deposit', date: '2026-08-06', status: 'Verified', refNo: 'ESC-44021983' }
  ],

  // Fleet & Logistics
  fleet: [
    { id: 'TX-409', driverName: 'Robert Vance', truckType: '24-Ton Tri-Axle Freight Truck', maxBricks: 10000, status: 'In Transit', currentOrder: 'ORD-NSR-8821', eta: '1 Hour 45 Mins' },
    { id: 'TX-102', driverName: 'Carlos Mendoza', truckType: '18-Ton Flatbed Loader', maxBricks: 7500, status: 'Available', currentOrder: 'None', eta: 'Ready at Kiln Yard' },
    { id: 'TX-205', driverName: 'Samir Patel', truckType: '30-Ton Multi-Trailer Heavy Freight', maxBricks: 15000, status: 'Loading at Kiln Shed #2', currentOrder: 'ORD-NSR-8822', eta: 'Departs Tomorrow' }
  ],

  // Verified Quality Test Reports
  certificates: [
    { batchNo: 'NSR-BATCH-2026-C08', brickType: 'NSR Grade-A Heavy Density Red Clay', compressiveStrength: '3,850 PSI (26.5 MPa)', waterAbsorption: '6.4% (Ultra Low)', efflorescence: 'Nil (Class I)', thermalConductivity: '0.62 W/mK', greenCertification: 'ISO 14001 Eco-Grade' },
    { batchNo: 'NSR-BATCH-2026-W04', brickType: 'NSR Wire-Cut Machine Pressed Facing Brick', compressiveStrength: '4,200 PSI (28.9 MPa)', waterAbsorption: '5.1%', efflorescence: 'Nil (Class I)', thermalConductivity: '0.58 W/mK', greenCertification: 'ASTM C216 Compliant' }
  ],

  // Testimonials
  testimonials: [
    { name: 'Mr. Rajesh Agarwal', role: 'Chief Engineer, Apex Infrastructure', quote: 'NSR Brick Enterprise has consistently delivered ultra-high strength clay bricks for our commercial towers. Zero transit breakage and prompt site deliveries!' },
    { name: 'Kavita Sundaram', role: 'Principal Architect, Urban Living Studios', quote: 'Their wire-cut facing bricks gave our residential villa project a stunning aesthetic finish without requiring external plastering. Highly recommended!' },
    { name: 'Suresh Kumar', role: 'Project Director, National Highway Development', quote: 'The compressive strength test reports provided by NSR Brick Enterprise are 100% lab verified. Exceptional quality control.' }
  ]
};

class Store {
  constructor() {
    this.data = this.loadState();
    this.subscribers = [];
  }

  loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Could not read from localStorage, using seed data.', e);
    }
    return INITIAL_STATE;
  }

  saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
      this.notifySubscribers();
    } catch (e) {
      console.error('Failed to save to localStorage:', e);
    }
  }

  subscribe(callback) {
    this.subscribers.push(callback);
  }

  notifySubscribers() {
    this.subscribers.forEach(cb => cb(this.data));
  }

  // Auth
  getCurrentUser() { return this.data.currentUser || DEMO_USERS.admin; }
  getDemoUsers() { return DEMO_USERS; }
  getRole() { return this.getCurrentUser().role; }

  loginAsDemoProfile(roleKey) {
    if (DEMO_USERS[roleKey]) {
      this.data.currentUser = DEMO_USERS[roleKey];
      if (roleKey === 'owner') this.data.activeView = 'dashboard';
      else if (roleKey === 'builder') this.data.activeView = 'builder';
      else if (roleKey === 'worker') this.data.activeView = 'worker';
      else if (roleKey === 'realestate') this.data.activeView = 'realestate';
      
      this.saveState();
      return this.data.currentUser;
    }
    return null;
  }

  registerUser(name, email, role, company) {
    const newUser = {
      id: 'USR-NSR-' + Math.floor(100 + Math.random() * 900),
      name,
      email,
      role,
      roleLabel: role === 'owner' ? 'Business Owner / Admin' : (role === 'builder' ? 'Builder / Contractor' : (role === 'worker' ? 'Site Foreman' : 'Real Estate Developer')),
      company: company || 'Construction Enterprise',
      avatar: role === 'owner' ? '👑' : (role === 'builder' ? '👷‍♂️' : (role === 'worker' ? '🏗️' : '🏢')),
      welcomeMsg: `Welcome ${name}! Your profile account is ready.`
    };
    this.data.currentUser = newUser;
    this.saveState();
    return newUser;
  }

  // Getters
  getView() { return this.data.activeView; }
  getProducts() { return this.data.products; }
  getResources() { return this.data.resources; }
  getKilnChambers() { return this.data.kilnChambers; }
  getOrders() { return this.data.orders; }
  getPayments() { return this.data.payments; }
  getFleet() { return this.data.fleet; }
  getCertificates() { return this.data.certificates; }
  getTestimonials() { return this.data.testimonials; }
  getAssetImages() { return ASSET_IMAGES; }

  // Setters
  setView(view) {
    this.data.activeView = view;
    this.saveState();
  }

  // Actions
  addResourceStock(resourceKey, amount) {
    if (this.data.resources[resourceKey]) {
      this.data.resources[resourceKey].current = Math.min(
        this.data.resources[resourceKey].max,
        this.data.resources[resourceKey].current + amount
      );
      this.saveState();
    }
  }

  createOrder(orderData) {
    const id = 'ORD-NSR-' + Math.floor(1000 + Math.random() * 9000);
    const newOrder = {
      id,
      ...orderData,
      orderDate: new Date().toISOString().split('T')[0],
      status: 'Processing & Moulding',
      paymentStatus: orderData.paidAmount >= orderData.totalAmount ? 'Paid' : (orderData.paidAmount > 0 ? 'Partial' : 'Pending'),
      balance: Math.max(0, orderData.totalAmount - (orderData.paidAmount || 0)),
      driverAssigned: 'Pending Kiln Schedule',
      timeline: [
        { title: 'Order Confirmed & Logged in Portal', time: 'Just Now', status: 'completed' },
        { title: 'Kiln Chamber Allocation', time: 'Pending', status: 'active' },
        { title: 'Freight Dispatch & Delivery', time: 'Scheduled', status: 'pending' }
      ]
    };

    this.data.orders.unshift(newOrder);

    if (orderData.paidAmount && orderData.paidAmount > 0) {
      this.recordPayment({
        orderId: id,
        clientName: orderData.clientName,
        amount: orderData.paidAmount,
        paymentMethod: orderData.paymentMethod || 'UPI / Bank Transfer',
        refNo: 'NEFT-' + Math.floor(100000 + Math.random() * 900000)
      });
    }

    this.saveState();
    return newOrder;
  }

  updateOrderStatus(orderId, newStatus) {
    const order = this.data.orders.find(o => o.id === orderId);
    if (order) {
      order.status = newStatus;
      order.timeline.push({
        title: `Status updated: ${newStatus}`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'completed'
      });
      this.saveState();
    }
  }

  recordPayment({ orderId, clientName, amount, paymentMethod, refNo }) {
    const payId = 'PAY-NSR-' + Math.floor(1000 + Math.random() * 9000);
    const newPayment = {
      id: payId,
      orderId,
      clientName,
      amount: parseFloat(amount),
      paymentMethod,
      date: new Date().toISOString().split('T')[0],
      status: 'Verified',
      refNo: refNo || ('UPI-' + Math.floor(100000 + Math.random() * 900000))
    };

    this.data.payments.unshift(newPayment);

    const order = this.data.orders.find(o => o.id === orderId);
    if (order) {
      order.paidAmount += parseFloat(amount);
      order.balance = Math.max(0, order.totalAmount - order.paidAmount);
      if (order.balance === 0) order.paymentStatus = 'Paid';
      else if (order.paidAmount > 0) order.paymentStatus = 'Partial';
    }

    this.saveState();
    return newPayment;
  }

  createQuickSiteOrder(siteName, qty, brickType) {
    const item = this.data.products.find(p => p.name.includes(brickType) || p.name === brickType) || this.data.products[0];
    
    return this.createOrder({
      clientName: siteName + ' (Express Site Order)',
      clientRole: 'Contractor Worker Site Express',
      contactPerson: 'Site Foreman Urgent Re-stock',
      phone: '+91 98765 00000',
      siteAddress: siteName,
      deliveryDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      brickType: item.name,
      quantity: parseInt(qty),
      unitPrice: item.price,
      totalAmount: parseInt(qty) * item.price,
      paidAmount: 0,
      paymentMethod: 'Site Invoice Net-30'
    });
  }
}

export const store = new Store();
