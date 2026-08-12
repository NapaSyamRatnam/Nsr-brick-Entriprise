/* NSR Brick Enterprise - Firebase Firestore Simulation Store & Database */

const STORAGE_KEY = 'nsr_brick_enterprise_db_v6_syam_admin';

// Admin Manager & Demo Accounts Registry
const DEMO_USERS = {
  admin: {
    id: 'USR-ADMIN-SYAM',
    name: 'Syam Ratnam (Admin Manager)',
    role: 'owner',
    roleLabel: 'Business Administrator & Kiln Manager',
    email: 'syamratnam123@gmail.com',
    company: 'NSR Brick Enterprise Pvt Ltd',
    avatar: '👑',
    welcomeMsg: 'Welcome back, Mr. Syam Ratnam! NSR Brick Kilns & Enterprise ERP are fully operational.'
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

export const HERO_SLIDES_DATA = [
  {
    phase: 'Phase 1 of 6',
    title: 'Purified Raw Clay Quarrying & Alluvial Mixing',
    subtitle: 'High-plasticity alluvial clay soil extracted from natural deposits & processed through automated de-airing vacuum pug mills.',
    badge: '🌿 End-to-End Phase 1 • Raw Soil Extraction & Purifying',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1920&q=85',
    spec1: '1,450 Tons Soil',
    spec2: 'De-Aired Vacuum',
    spec3: 'Nil Impurities'
  },
  {
    phase: 'Phase 2 of 6',
    title: 'Precision Vacuum Moulding & Wire-Cut Extrusion',
    subtitle: 'Automated machine pressing and high-tension wire-cutting for razor-sharp edges, uniform dimensions, and dense green brick cores.',
    badge: '⚙️ End-to-End Phase 2 • Precision Wire-Cut Extrusion',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1920&q=85',
    spec1: 'Wire-Cut Finish',
    spec2: '420k Bricks/Day',
    spec3: 'Exact Dimensions'
  },
  {
    phase: 'Phase 3 of 6',
    title: 'Ventilated Drying Sheds & De-Moisturization',
    subtitle: 'Green clay bricks stacked in temperature-controlled drying sheds to lower moisture levels under 3% before entering the tunnel kiln.',
    badge: '☀️ End-to-End Phase 3 • Natural Sun & Chamber Drying',
    image: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=1920&q=85',
    spec1: '< 3% Moisture',
    spec2: 'Zero Cracking',
    spec3: '48-Hour Cycle'
  },
  {
    phase: 'Phase 4 of 6',
    title: 'High-Temperature 1,050°C Tunnel Kiln Firing',
    subtitle: '36-hour continuous fire vitrification in automated Hoffman kilns producing 3,850+ PSI compressive strength and zero efflorescence.',
    badge: '🔥 End-to-End Phase 4 • 1,050°C Kiln Baking Vitrification',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1920&q=85',
    spec1: '1,050°C Tunnel',
    spec2: '3,850+ PSI',
    spec3: 'Nil Efflorescence'
  },
  {
    phase: 'Phase 5 of 6',
    title: 'Pallet Shrink-Wrapping & GPS Freight Dispatch',
    subtitle: 'Kiln-cooled red clay bricks sorted into heavy-duty pallets, shrink-wrapped, and loaded onto trucks for same-day delivery.',
    badge: '📦 End-to-End Phase 5 • Palletized Logistics & Dispatch',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1920&q=85',
    spec1: 'Shrink Palletized',
    spec2: '3 Trucks Active',
    spec3: 'Direct Site Freight'
  },
  {
    phase: 'Phase 6 of 6',
    title: 'Exposed Red Clay Brick Wall Architecture',
    subtitle: 'Breathtaking load-bearing walls, rustic villa facades, and interior exposed red clay brick masonry built for lifetime elegance.',
    badge: '🧱 End-to-End Phase 6 • Exposed Red Clay Brick Wall Masonry',
    image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=1920&q=85',
    spec1: 'Red Clay Wall',
    spec2: 'Zero Plastering',
    spec3: '50+ Year Life'
  }
];

const ASSET_IMAGES = {
  slide1_brickStack: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1920&q=85',
  slide2_kilnFiring: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1920&q=85',
  slide3_factorySite: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1920&q=85',
  slide4_brickPallets: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=1920&q=85',
  slide5_architecturalVilla: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85',
  slide6_wireCutBricks: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1920&q=85',
  kiln: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
  bricksStack: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80',
  construction: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
  facingBricks: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
  factory: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80',
  luxuryHome: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  commercial: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  workers: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=1200&q=80'
};

const INITIAL_STATE = {
  currentUser: DEMO_USERS.admin, // Automatically default to Admin Manager Syam Ratnam
  activeView: 'landing',
  demoUsers: DEMO_USERS,
  registeredUsers: [],
  listeners: [],

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
      image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      description: 'Vintage rustic hand-crafted red clay brick for luxury villas and heritage resort facades.'
    }
  ],

  resources: {
    claySoilTons: { current: 1450, max: 2500, unit: 'Tons', reorderLevel: 500, costPerUnit: 45 },
    coalFuelTons: { current: 320, max: 800, unit: 'Tons', reorderLevel: 100, costPerUnit: 180 },
    waterReservesK: { current: 85, max: 150, unit: 'k-Liters', reorderLevel: 30, costPerUnit: 8 },
    rawMouldedBricks: { current: 280000, max: 500000, unit: 'Units', reorderLevel: 50000, costPerUnit: 0.12 },
    dryingShedCapacity: { current: 190000, max: 300000, unit: 'Units', reorderLevel: 40000, costPerUnit: 0.15 }
  },

  kilnChambers: [
    { id: 'Kiln-01', status: 'Firing', temp: '1,050°C', bricksLoaded: 120000, completionPct: 78, cyclesLeftHours: 14 },
    { id: 'Kiln-02', status: 'Cooling', temp: '320°C', bricksLoaded: 110000, completionPct: 92, cyclesLeftHours: 5 },
    { id: 'Kiln-03', status: 'Loading Raw', temp: '45°C', bricksLoaded: 85000, completionPct: 35, cyclesLeftHours: 48 },
    { id: 'Kiln-04', status: 'Maintenance', temp: '25°C', bricksLoaded: 0, completionPct: 0, cyclesLeftHours: 0 }
  ],

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
    }
  ],

  payments: [
    { id: 'PAY-NSR-1001', orderId: 'ORD-NSR-8821', clientName: 'Sharma Infrastructure & Builders', amount: 250000, paymentMethod: 'UPI / Bank Transfer (NEFT)', date: '2026-08-04', status: 'Verified', refNo: 'NEFT-99384721' },
    { id: 'PAY-NSR-1002', orderId: 'ORD-NSR-8822', clientName: 'Sunrise Villa Construction', amount: 300000, paymentMethod: 'Corporate Credit Line', date: '2026-08-05', status: 'Verified', refNo: 'CC-77382910' }
  ],

  fleet: [
    { id: 'TX-409', driverName: 'Robert Vance', truckType: '24-Ton Tri-Axle Freight Truck', maxBricks: 10000, status: 'In Transit', currentOrder: 'ORD-NSR-8821', eta: '1 Hour 45 Mins' },
    { id: 'TX-102', driverName: 'Carlos Mendoza', truckType: '18-Ton Flatbed Loader', maxBricks: 7500, status: 'Available', currentOrder: 'None', eta: 'Ready at Kiln Yard' }
  ],

  productionBatches: [
    { id: 'BATCH-2026-001', rawClayTons: 20, coalFuelTons: 2.5, totalBricks: 18000, damagedBricks: 500, goodBricks: 17500, kilnChamber: 'Kiln-03', status: 'Completed', date: '2026-08-01', operator: 'Suresh Kumar' },
    { id: 'BATCH-2026-002', rawClayTons: 25, coalFuelTons: 3.0, totalBricks: 22000, damagedBricks: 650, goodBricks: 21350, kilnChamber: 'Kiln-01', status: 'Firing', date: '2026-08-05', operator: 'Ramesh Patel' },
    { id: 'BATCH-2026-003', rawClayTons: 15, coalFuelTons: 1.8, totalBricks: 14000, damagedBricks: 300, goodBricks: 13700, kilnChamber: 'Kiln-02', status: 'Cooling', date: '2026-08-08', operator: 'Mahesh Naidu' }
  ],

  customers: [
    { id: 'CUST-001', name: 'Ravi Builders & Developers', company: 'Ravi Construction Pvt Ltd', phone: '+91 98480 12345', email: 'ravi@ravibuilders.in', address: 'Banjara Hills, Hyderabad', gstNo: '36AAACR1234F1ZP', category: 'Builder', totalOrders: 12, totalSpent: 1450000, outstandingBalance: 175000 },
    { id: 'CUST-002', name: 'Kumar Constructions', company: 'Kumar Infra Solutions', phone: '+91 94401 54321', email: 'kumar@kumarinfra.com', address: 'Indiranagar, Bangalore', gstNo: '29AAACK4321E1ZQ', category: 'Lead Contractor', totalOrders: 8, totalSpent: 850000, outstandingBalance: 0 },
    { id: 'CUST-003', name: 'ABC Developers Ltd', company: 'ABC Heights & Villas', phone: '+91 99887 66554', email: 'sales@abcdevelopers.com', address: 'Gachibowli Tech Park, Hyderabad', gstNo: '36AAACA8899D1ZR', category: 'Real Estate Company', totalOrders: 15, totalSpent: 2800000, outstandingBalance: 450000 },
    { id: 'CUST-004', name: 'Sri Lakshmi Hardware & Building Materials', company: 'Sri Lakshmi Dealers', phone: '+91 98665 44332', email: 'lakshmi.hardware@gmail.com', address: 'GT Road, Nellore', gstNo: '37AAACS5566G1ZS', category: 'Distributor / Dealer', totalOrders: 20, totalSpent: 3200000, outstandingBalance: 120000 }
  ],

  workers: [
    { id: 'WRK-101', name: 'Ramesh Patel', phone: '+91 98765 11100', role: 'Kiln Operator', shift: 'Day Shift (06:00 - 14:00)', attendance: 'Present', dailyWage: 850, workAssigned: 'Kiln Chamber 01 & 02 Firing Temperature Watch' },
    { id: 'WRK-102', name: 'Mahesh Naidu', phone: '+91 98765 22200', role: 'Loading & Dispatch Foreman', shift: 'Day Shift (08:00 - 17:00)', attendance: 'Present', dailyWage: 750, workAssigned: 'Truck Freight Loading & Pallet Strapping' },
    { id: 'WRK-103', name: 'Suresh Kumar', phone: '+91 98765 33300', role: 'Production & Moulding Operator', shift: 'Night Shift (22:00 - 06:00)', attendance: 'Present', dailyWage: 800, workAssigned: 'Vacuum Wire-Cut Machine Operation' },
    { id: 'WRK-104', name: 'Robert Vance', phone: '+91 98765 44400', role: 'Heavy Freight Logistics Driver', shift: 'Flexi Shift', attendance: 'On Duty', dailyWage: 950, workAssigned: 'Freight Delivery Truck KA-01-AB-1234 to Hyderabad Site' }
  ],

  deliveries: [
    { id: 'DEL-2026-01', vehicleNo: 'KA-01-AB-1234', driverName: 'Robert Vance', driverPhone: '+91 98765 44400', orderId: 'ORD-NSR-8821', customerName: 'Sharma Infrastructure & Builders', destination: 'Hyderabad Site', quantityLoaded: 10000, freightCost: 8000, dispatchDate: '2026-08-07', expectedDelivery: '2026-08-08', status: 'Out for Delivery' },
    { id: 'DEL-2026-02', vehicleNo: 'AP-26-TB-5678', driverName: 'Carlos Mendoza', driverPhone: '+91 98765 55500', orderId: 'ORD-NSR-8822', customerName: 'Sunrise Villa Construction', destination: 'Bangalore Site', quantityLoaded: 15000, freightCost: 12000, dispatchDate: '2026-08-06', expectedDelivery: '2026-08-07', status: 'Delivered' }
  ],

  factoryGallery: [
    { title: 'Purified Raw Clay Quarrying & Stockpile', category: 'Raw Material', image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80', desc: '1,450 tons of high-plasticity alluvial clay soil' },
    { title: 'Automated Vacuum Wire-Cut Moulding', category: 'Production', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80', desc: '420,000 bricks pressed daily with uniform precision' },
    { title: 'Chamber Drying Sheds', category: 'Drying', image: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=800&q=80', desc: 'De-moisturization shed under 3% moisture content' },
    { title: '1,050°C Continuous Tunnel Kiln Firing', category: 'Firing', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80', desc: 'High temperature vitrification for 3,850+ PSI strength' },
    { title: 'Palletized Ready-to-Ship Inventory', category: 'Loading', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80', desc: 'Strapped and shrink-wrapped brick pallets' },
    { title: 'Luxury Villa Exposed Red Brick Architecture', category: 'Projects', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', desc: 'Exposed red clay brick facade project in Hyderabad' }
  ],

  reviews: [
    { id: 'REV-01', customerName: 'Ravi Construction Pvt Ltd', rating: 5, date: '2026-08-01', comment: 'Outstanding brick density and compressive strength! Zero breakage on-site.', project: 'Metro Horizon Plaza' },
    { id: 'REV-02', customerName: 'Kumar Infra Solutions', rating: 5, date: '2026-08-03', comment: 'Precision wire-cut facing bricks gave our villa project an amazing rustic look.', project: 'Oakridge Estates' },
    { id: 'REV-03', customerName: 'ABC Heights & Villas', rating: 4.8, date: '2026-08-05', comment: 'Prompt freight delivery and genuine weight. Highly recommended supplier!', project: 'Skyline Commercial Tower' }
  ],

  qualityControl: [
    { id: 'QC-2026-001', batchId: 'BATCH-2026-001', sampleQty: 50, compressiveStrength: 3850, waterAbsorption: 6.2, dimensionsPass: true, visualPass: true, passedQty: 17500, rejectedQty: 500, inspector: 'Ramesh Patel', testDate: '2026-08-02', status: 'APPROVED' },
    { id: 'QC-2026-002', batchId: 'BATCH-2026-002', sampleQty: 50, compressiveStrength: 4100, waterAbsorption: 5.8, dimensionsPass: true, visualPass: true, passedQty: 21350, rejectedQty: 650, inspector: 'Syam Ratnam', testDate: '2026-08-06', status: 'APPROVED' }
  ],

  vendors: [
    { id: 'VEND-01', name: 'Krishna Alluvial Clay Quarry', category: 'Raw Clay Soil', contact: 'Rao Sahab (+91 94400 11223)', gstNo: '37AAACK1122A1Z1', totalPurchased: 450000, balanceDue: 45000 },
    { id: 'VEND-02', name: 'Singareni Coal & Biomass Supplies', category: 'Coal & Biomass Fuel', contact: 'Prakash Reddy (+91 98480 33445)', gstNo: '36AAACS3344B1Z2', totalPurchased: 890000, balanceDue: 120000 },
    { id: 'VEND-03', name: 'Deccan Heavy Logistics Diesel', category: 'Truck Fuel & Diesel', contact: 'Venkat Rao (+91 98665 55667)', gstNo: '36AAACD5566C1Z3', totalPurchased: 320000, balanceDue: 0 }
  ],

  expenses: [
    { id: 'EXP-101', category: 'Coal & Biomass Fuel', amount: 180000, vendorName: 'Singareni Coal Supplies', date: '2026-08-03', paymentMethod: 'Bank Transfer', notes: '20 Tons Steam Coal for Kiln-01' },
    { id: 'EXP-102', category: 'Labor Wages & Shift Salary', amount: 95000, vendorName: 'Factory Payroll', date: '2026-08-05', paymentMethod: 'Cash Deposit', notes: 'Weekly Wages for 14 Kiln & Moulding Operators' },
    { id: 'EXP-103', category: 'Truck Diesel & Logistics Fuel', amount: 45000, vendorName: 'Deccan Heavy Diesel', date: '2026-08-07', paymentMethod: 'Corporate Card', notes: 'Diesel for Freight Trucks TX-409 & TX-102' }
  ],

  quotations: [
    { id: 'QT-2026-001', customerName: 'Ravi Builders & Developers', brickType: 'NSR Grade-A Heavy Density Red Clay Brick', quantity: 25000, rate: 8.50, freightCost: 4500, totalAmount: 217000, status: 'Sent', date: '2026-08-09', validityDate: '2026-08-25' },
    { id: 'QT-2026-002', customerName: 'Skyline Real Estate Developers', brickType: 'NSR Wire-Cut Machine Pressed Facing Brick', quantity: 50000, rate: 12.00, freightCost: 9000, totalAmount: 609000, status: 'Draft', date: '2026-08-10', validityDate: '2026-08-30' }
  ],

  taxConfig: {
    cgstPct: 6.0,
    sgstPct: 6.0,
    igstPct: 12.0,
    hsnCode: '68101190',
    taxInclusive: false,
    companyGstNo: '37AAAAA9999A1Z0'
  },

  auditLogs: [
    { id: 'LOG-001', timestamp: '2026-08-12 18:30:15', user: 'Syam Ratnam (Admin)', action: 'ORDER_STATUS_UPDATE', details: 'Updated Order ORD-NSR-8821 status from Production to Dispatched', ipAddress: '192.168.1.10' },
    { id: 'LOG-002', timestamp: '2026-08-12 19:15:40', user: 'System Automated Workflow', action: 'STOCK_RESERVATION', details: 'Reserved 50,000 bricks for Order ORD-NSR-8821', ipAddress: 'Firestore-Trigger' }
  ],

  stockMovements: [
    { id: 'MOV-001', date: '2026-08-01', type: 'PRODUCTION_IN', item: 'NSR Grade-A Red Clay Brick', qty: 17500, reference: 'BATCH-2026-001', balanceAfter: 437500 },
    { id: 'MOV-002', date: '2026-08-07', type: 'DISPATCH_OUT', item: 'NSR Grade-A Red Clay Brick', qty: 50000, reference: 'ORD-NSR-8821', balanceAfter: 387500 }
  ],

  certificates: [
    { batchNo: 'NSR-BATCH-2026-C08', brickType: 'NSR Grade-A Heavy Density Red Clay', compressiveStrength: '3,850 PSI (26.5 MPa)', waterAbsorption: '6.4% (Ultra Low)', efflorescence: 'Nil (Class I)', thermalConductivity: '0.62 W/mK', greenCertification: 'ISO 14001 Eco-Grade' }
  ],

  testimonials: [
    { name: 'Mr. Rajesh Agarwal', role: 'Chief Engineer, Apex Infrastructure', quote: 'NSR Brick Enterprise has consistently delivered ultra-high strength clay bricks for our commercial towers. Zero transit breakage and prompt site deliveries!' }
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
      if (saved) {
        const parsed = JSON.parse(saved);
        if (!parsed.currentUser) parsed.currentUser = DEMO_USERS.admin;
        return parsed;
      }
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

  // Auth & Access Control
  getCurrentUser() { return this.data.currentUser; }
  isLoggedIn() { return !!this.data.currentUser; }
  getDemoUsers() { return DEMO_USERS; }
  getRole() { return this.data.currentUser ? this.data.currentUser.role : 'guest'; }

  loginWithCredentials(email, password) {
    const cleanEmail = email.trim().toLowerCase();
    
    // Check if Syam Ratnam (Admin Manager)
    if (cleanEmail === 'syamratnam123@gmail.com') {
      this.data.currentUser = DEMO_USERS.admin;
      this.data.activeView = 'dashboard';
      this.saveState();
      return DEMO_USERS.admin;
    }

    // Standard user login
    const name = cleanEmail.split('@')[0] || 'Authenticated User';
    const newUser = {
      id: 'USR-NSR-' + Math.floor(100 + Math.random() * 900),
      name: name.charAt(0).toUpperCase() + name.slice(1),
      email: cleanEmail,
      role: 'builder',
      roleLabel: 'Verified Enterprise User',
      company: 'Registered Enterprise',
      avatar: '👤',
      welcomeMsg: `Welcome ${name}! Your account is authenticated.`
    };
    this.data.currentUser = newUser;
    this.saveState();
    return newUser;
  }

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
    const cleanEmail = email.trim().toLowerCase();
    
    const newUser = {
      id: 'USR-NSR-' + Math.floor(100 + Math.random() * 900),
      name,
      email: cleanEmail,
      role,
      roleLabel: role === 'owner' ? 'Business Owner / Admin Manager' : (role === 'builder' ? 'Builder / Contractor' : (role === 'worker' ? 'Site Foreman' : 'Real Estate Developer')),
      company: company || 'NSR Construction Enterprise',
      avatar: role === 'owner' ? '👑' : (role === 'builder' ? '👷‍♂️' : (role === 'worker' ? '🏗️' : '🏢')),
      welcomeMsg: `Welcome ${name}! Your account has been registered in Firebase.`
    };

    if (!this.data.registeredUsers) this.data.registeredUsers = [];
    this.data.registeredUsers.push(newUser);

    this.data.currentUser = newUser;
    this.saveState();
    return newUser;
  }

  logoutUser() {
    this.data.currentUser = null;
    this.data.activeView = 'landing';
    this.saveState();
  }

  // Getters
  getView() { return this.data.activeView; }
  getProducts() { return this.data.products; }
  getResources() { return this.data.resources; }
  getKilnChambers() { return this.data.kilnChambers; }
  getOrders() { return this.data.orders; }
  getPayments() { return this.data.payments; }
  getFleet() { return this.data.fleet; }
  getProductionBatches() { return this.data.productionBatches || []; }
  getCustomers() { return this.data.customers || []; }
  getWorkers() { return this.data.workers || []; }
  getDeliveries() { return this.data.deliveries || []; }
  getFactoryGallery() { return this.data.factoryGallery || []; }
  getReviews() { return this.data.reviews || []; }
  getCertificates() { return this.data.certificates; }
  getTestimonials() { return this.data.testimonials; }
  getAssetImages() { return ASSET_IMAGES; }
  getQuotations() { return this.data.quotations || []; }
  getQualityControl() { return this.data.qualityControl || []; }
  getVendors() { return this.data.vendors || []; }
  getExpenses() { return this.data.expenses || []; }
  getTaxConfig() { return this.data.taxConfig; }
  getAuditLogs() { return this.data.auditLogs || []; }
  getStockMovements() { return this.data.stockMovements || []; }

  convertQuoteToOrder(quoteId) {
    const q = (this.data.quotations || []).find(item => item.id === quoteId);
    if (!q) return null;

    q.status = 'Converted';
    const newOrder = this.createOrder({
      clientName: q.customerName,
      clientRole: 'Builder / Contractor',
      contactPerson: q.customerName,
      phone: '+91 98765 00000',
      siteAddress: 'Project Construction Site',
      deliveryDate: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      brickType: q.brickType,
      quantity: q.quantity,
      unitPrice: q.rate,
      totalAmount: q.totalAmount,
      paidAmount: q.totalAmount * 0.5, // 50% Advance
      paymentMethod: 'Bank Transfer (NEFT)'
    });

    this.recordAuditLog('CONVERT_QUOTE_TO_ORDER', `Converted Quotation ${quoteId} into Order ${newOrder.id}`);
    this.saveState();
    return newOrder;
  }

  cancelOrder(orderId, reason) {
    const order = this.data.orders.find(o => o.id === orderId);
    if (order) {
      order.status = 'Cancelled';
      order.cancelReason = reason || 'Customer Request';
      this.recordAuditLog('CANCEL_ORDER', `Cancelled Order ${orderId}. Reason: ${reason}`);
      this.saveState();
    }
  }

  getOperationalAlerts() {
    const alerts = [];
    const res = this.data.resources;
    if (res.claySoilTons && res.claySoilTons.current <= res.claySoilTons.reorderLevel) {
      alerts.push({ type: 'danger', icon: '⚠️', title: 'Low Raw Clay Stock Alert', msg: `Clay Reserve at ${res.claySoilTons.current} Tons (Reorder Level: ${res.claySoilTons.reorderLevel} Tons)` });
    }
    if (res.coalFuelTons && res.coalFuelTons.current <= res.coalFuelTons.reorderLevel) {
      alerts.push({ type: 'warning', icon: '🔥', title: 'Low Coal Fuel Stock Alert', msg: `Coal Biomass Reserve at ${res.coalFuelTons.current} Tons (Reorder Level: ${res.coalFuelTons.reorderLevel} Tons)` });
    }
    const overdueOrders = this.data.orders.filter(o => o.balance > 0 && o.paymentStatus === 'Partial');
    if (overdueOrders.length > 0) {
      alerts.push({ type: 'info', icon: '⌛', title: 'Overdue Customer Dues Alert', msg: `${overdueOrders.length} active orders have outstanding balance dues requiring payment collection.` });
    }
    return alerts;
  }

  recordAuditLog(action, details) {
    const user = this.getCurrentUser();
    const log = {
      id: 'LOG-' + Math.floor(1000 + Math.random() * 9000),
      timestamp: new Date().toLocaleString(),
      user: user ? `${user.name} (${user.role})` : 'Anonymous Guest',
      action,
      details,
      ipAddress: 'Client Session'
    };
    if (!this.data.auditLogs) this.data.auditLogs = [];
    this.data.auditLogs.unshift(log);
    this.saveState();
  }

  calculatePnL() {
    const revenue = this.data.orders.reduce((sum, o) => sum + o.totalAmount, 0);
    const totalExpenses = (this.data.expenses || []).reduce((sum, e) => sum + e.amount, 0);
    const grossProfit = revenue - totalExpenses;
    const outstandingDues = this.data.orders.reduce((sum, o) => sum + o.balance, 0);
    return { revenue, totalExpenses, grossProfit, outstandingDues };
  }

  exportToCSV(type) {
    let items = [];
    if (type === 'orders') items = this.data.orders;
    else if (type === 'payments') items = this.data.payments;
    else if (type === 'production') items = this.data.productionBatches;
    else if (type === 'customers') items = this.data.customers;
    else if (type === 'inventory') items = this.data.products;

    if (!items.length) return '';

    const keys = Object.keys(items[0]);
    const csvRows = [keys.join(',')];
    for (const item of items) {
      const values = keys.map(k => {
        const val = typeof item[k] === 'object' ? JSON.stringify(item[k]) : String(item[k]);
        return `"${val.replace(/"/g, '""')}"`;
      });
      csvRows.push(values.join(','));
    }
    return csvRows.join('\n');
  }

  // Setters
  setView(view) {
    this.data.activeView = view;
    this.saveState();
  }

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
