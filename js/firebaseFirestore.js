/* NSR Brick Enterprise - Firebase Firestore Database Synchronization Module */

import { store } from './store.js';

export class FirebaseFirestoreService {
  constructor() {
    this.db = null;
    this.initFirestore();
  }

  initFirestore() {
    if (window.firebase?.firestore) {
      try {
        this.db = window.firebase.firestore();
        console.log('🔥 Official Firebase Firestore Database Connected to nsr-brick-enterprise!');
        
        // Auto-push initial Admin Manager & Core Business Data to Firebase
        this.autoPushInitialDataToFirestore();
        this.startRealtimeListeners();
      } catch (e) {
        console.warn('Firestore initialization fallback active:', e);
      }
    }
  }

  // Auto Push Admin Manager Syam Ratnam & Core Collections to Firebase Firestore
  async autoPushInitialDataToFirestore() {
    if (!this.db) return;

    try {
      // Push Admin Manager Profile to 'users' collection
      await this.db.collection('users').doc('admin_syam_ratnam').set({
        name: 'Syam Ratnam (Admin Manager)',
        email: 'syamratnam123@gmail.com',
        role: 'owner',
        roleLabel: 'Business Administrator & Kiln Manager',
        company: 'NSR Brick Enterprise Pvt Ltd',
        status: 'Active Admin',
        updatedAt: window.firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });

      console.log('🔥 Admin Manager Syam Ratnam pushed to Firebase Firestore (users/admin_syam_ratnam)');

      // Push Seed Products to 'products' collection
      const products = store.getProducts();
      for (const p of products) {
        await this.db.collection('products').doc(p.id).set(p, { merge: true });
      }

      // Push Initial Orders to 'orders' collection
      const orders = store.getOrders();
      for (const o of orders) {
        await this.db.collection('orders').doc(o.id).set(o, { merge: true });
      }

      console.log('🔥 Core Products & Orders automatically synced to Firebase Firestore database!');
    } catch (err) {
      console.warn('Firestore auto-push note:', err.message);
    }
  }

  // Realtime Snapshot Listeners across all clients
  startRealtimeListeners() {
    if (!this.db) return;

    // Listen for Orders Collection Changes
    try {
      this.db.collection('orders').onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'added' || change.type === 'modified') {
            console.log('🔥 Realtime Firestore Event: Order updated:', change.doc.id);
          }
        });
      }, (error) => {
        console.warn('Firestore orders listener note:', error.message);
      });

      // Listen for Registered Users
      this.db.collection('users').onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          console.log('🔥 Realtime Firestore Event: User account synchronized:', change.doc.id);
        });
      }, (error) => {
        console.warn('Firestore users listener note:', error.message);
      });
    } catch (err) {
      console.warn('Firestore listeners error:', err);
    }
  }

  // Save User Account Registration to Firestore Database
  async saveUserToFirestore(userData) {
    if (this.db) {
      try {
        const docRef = await this.db.collection('users').add({
          ...userData,
          registeredAt: window.firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log('🔥 User account pushed to Firebase Firestore with ID:', docRef.id);
        return docRef.id;
      } catch (err) {
        console.warn('Firestore user save fallback:', err.message);
      }
    }
    return null;
  }

  // Firestore Data Mutations
  async addOrderToFirestore(orderData) {
    if (this.db) {
      try {
        const docRef = await this.db.collection('orders').add({
          ...orderData,
          createdAt: window.firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log('🔥 Order saved to Firebase Firestore with ID:', docRef.id);
        return docRef.id;
      } catch (err) {
        console.warn('Firestore add order fallback:', err.message);
      }
    }
    return null;
  }

  async updateOrderStatusInFirestore(orderId, newStatus) {
    if (this.db) {
      try {
        await this.db.collection('orders').doc(orderId).update({
          status: newStatus,
          updatedAt: window.firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log('🔥 Updated order status in Firebase Firestore:', orderId, newStatus);
      } catch (err) {
        console.warn('Firestore status update fallback:', err.message);
      }
    }
  }

  async recordPaymentInFirestore(paymentData) {
    if (this.db) {
      try {
        await this.db.collection('payments').add({
          ...paymentData,
          createdAt: window.firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log('🔥 Payment recorded in Firebase Firestore:', paymentData.orderId);
      } catch (err) {
        console.warn('Firestore payment record fallback:', err.message);
      }
    }
  }

  async updateResourceStockInFirestore(resourceKey, amount) {
    if (this.db) {
      try {
        await this.db.collection('resources').doc(resourceKey).set({
          resourceKey,
          amount,
          updatedAt: window.firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
        console.log('🔥 Raw material resource updated in Firebase Firestore:', resourceKey, amount);
      } catch (err) {
        console.warn('Firestore resource update fallback:', err.message);
      }
    }
  }

  async syncAllDataToFirestore() {
    if (!this.db) return;
    try {
      const resources = store.getResources();
      for (const [key, res] of Object.entries(resources)) {
        await this.db.collection('resources').doc(key).set({ ...res, updatedAt: window.firebase.firestore.FieldValue.serverTimestamp() }, { merge: true });
      }

      const kilnChambers = store.getKilnChambers();
      for (const chamber of kilnChambers) {
        await this.db.collection('kiln_chambers').doc(chamber.id).set({ ...chamber, updatedAt: window.firebase.firestore.FieldValue.serverTimestamp() }, { merge: true });
      }

      const payments = store.getPayments();
      for (const pay of payments) {
        await this.db.collection('payments').doc(pay.id).set(pay, { merge: true });
      }

      console.log('🔥 Complete Firebase Firestore database sync complete across resources, kiln chambers, orders, and payments!');
    } catch (err) {
      console.warn('Full sync note:', err.message);
    }
  }
}

export const firebaseFirestore = new FirebaseFirestoreService();
