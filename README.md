# 🧱 TerraBrick Enterprise - Clay Brick Business & Logistics Platform

TerraBrick Enterprise is an all-in-one software application tailored for clay brick manufacturers, kiln operators, construction builders, site foremen/workers, and real estate developers.

It unifies **raw material tracking**, **kiln manufacturing telemetry**, **order management**, **payments ledger history**, **freight logistics**, and **construction site estimating** into a single, friendly web application.

---

## 🌟 Key Features

### 1. 🔑 Easy 1-Click Persona Logins & Sign In
- **Instant Demo Logins**:
  - 👑 **Clayton Miller** (*Kiln Business Owner*) – View raw materials stock, kiln temperatures, and sales revenue.
  - 👷‍♂️ **David Miller** (*Construction Builder*) – Access the Brick Estimator calculator and site delivery tracking.
  - 🏗️ **Robert Vance** (*Site Operations Foreman*) – Trigger 1-click site re-supply and driver ETA timers.
  - 🏢 **Marcus Chen** (*Real Estate Developer*) – Access laboratory quality certificates and volume pricing locks.
- **Custom Registration**: Register your custom company profile in seconds.

### 2. 👑 Kiln Owner & Executive Admin Dashboard
- **Telemetry & Live Gauges**: Real-time monitoring of raw red clay soil deposits (Tons), coal & biomass fuel reserves (Tons), and kiln water storage tanks.
- **Kiln Firing Chambers**: Live status tracking across 4 burn chambers (Firing temperature e.g. 1,050°C, brick count loaded, burn cycle completion % and remaining hours).
- **Executive KPIs**: Total revenue collected, outstanding receivables, active order pipeline, and fleet truck dispatches.

### 3. 🧱 Resource & Finished Stock Management
- **Supply Chain Alerts**: Automatic status warnings (Low Stock Alert vs Healthy Supply) based on re-order thresholds.
- **Finished Products Inventory**: Real-time stock counts and unit pricing for Grade-A Red Clay, Wire-Cut Facing, Thermal Insulation Hollow Clay, and Heritage Facing bricks.
- **Raw Material Restock Action**: Modal interface to log incoming raw clay, fuel, or water shipments.

### 4. 📦 Orders Management & Freight Logistics
- **Order Lifecycle Tracking**: Full status workflow (`Processing & Moulding` ➔ `Moulding & Firing` ➔ `Dispatched / In Transit` ➔ `Delivered`).
- **Issue New Brick Order Modal**: Complete order creation modal with client details, site address, brick selection, and advance deposit payment logging.

### 5. 💵 Payments Ledger & Invoicing History
- **Transaction History Log**: Full track history of verified payments, payment channels (Bank Wire ACH, Corporate Credit Line, Escrow, Cheque), dates, and reference codes.
- **Record Customer Payment Modal**: Log partial or full payment receipts for any order account balance.
- **Printable Digital Tax Invoice**: Professional tax invoice generator with line items, tax breakdown, balance due, and 1-click browser printing (`window.print()`).

### 6. 🏗️ Construction Builder & Contractor Hub
- **Interactive Brick & Mortar Calculator**: Input wall length, height, thickness, mortar joint size, and waste allowance %. Automatically calculates exact brick count, cement bags, sand tons, and material cost.
- **1-Click Convert Calculation to Bulk Order**: Pre-fills and opens order form with calculated quantities.

### 7. 🚧 Site Foreman & Worker Fast Express Portal
- **1-Click Site Re-Supply**: Express order form for urgent job site re-stocks.
- **Driver ETA Countdown**: Live arrival timer and driver contact hotline simulation.
- **Transit Damage Reporting**: Log broken/damaged bricks for instant replacement dispatches or credit notes.

### 8. 🏢 Real Estate Developer Quality Hub
- **Verified Laboratory Certificates**: Compressive strength test reports (PSI / MPa), water absorption %, efflorescence grade, and eco-green compliance (ISO 14001, ASTM C216).
- **Multi-Tower Township Demand Forecaster**: Estimate aggregate brick volume across towers and floors for bulk volume pricing locks.

---

## 📂 Codebase File Structure

```
c:\Users\Admin\claybrick-pro/
├── index.html                  # Main application structure & layout
├── package.json                # Project dependencies and run scripts
├── README.md                   # Complete project documentation
├── styles/
│   ├── main.css                # Terracotta industrial dark-mode design system
│   └── components.css          # Metric cards, resource gauges, data tables, invoice styling
└── js/
    ├── store.js                # State management, user auth profiles, localStorage persistence
    ├── app.js                  # App router, modal controller, calculator math, toast engine
    └── views/
        ├── loginView.js        # Easy 1-click demo logins & account sign-up
        ├── adminDashboard.js   # Kiln owner telemetry & KPI dashboard
        ├── resourceTracker.js  # Raw materials stock & kiln chamber log
        ├── ordersManager.js    # Order lifecycle & freight dispatch table
        ├── paymentsLedger.js   # Payments track history & printable tax invoices
        ├── builderPortal.js    # Builder hub & construction brick calculator
        ├── workerPortal.js     # Site foreman express re-stock & damage reporting
        └── realEstatePortal.js # Lab test quality certificates & volume bidding
```

---

## 🚀 How to Run locally

### Option 1: Using npm (Recommended)
```bash
# Navigate to the directory
cd c:\Users\Admin\claybrick-pro

# Run local development server
npm start
```
The application will open automatically in your default browser at `http://localhost:8085`.

### Option 2: Open directly in Browser
Simply double-click [index.html](file:///c:/Users/Admin/claybrick-pro/index.html) or open it with any web browser (Chrome, Edge, Firefox, Safari).

---

## 📜 License
MIT License - Open for commercial use and extension.
