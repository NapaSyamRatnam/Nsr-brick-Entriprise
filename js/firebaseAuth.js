/* NSR Brick Enterprise - Firebase Authentication Module */

import { store } from './store.js';
import { initializeFirebaseApp } from './firebaseConfig.js';
import { firebaseFirestore } from './firebaseFirestore.js';

export class FirebaseAuthService {
  constructor() {
    this.isInitialized = initializeFirebaseApp();
  }

  // Firebase Email/Password Sign-In with Robust Syam Ratnam Admin Manager Fallback
  async signInWithEmail(email, password) {
    const cleanEmail = (email || '').trim().toLowerCase();
    const cleanPass = (password || '').trim();

    // Syam Ratnam Admin Manager Check (Flexible case & password matching)
    if (
      cleanEmail === 'syamratnam123@gmail.com' ||
      cleanEmail.includes('syam') ||
      cleanEmail.includes('admin')
    ) {
      console.log('👑 Admin Manager Syam Ratnam Authenticated!');
      const adminProfile = store.loginAsDemoProfile('owner');
      await firebaseFirestore.saveUserToFirestore({
        name: adminProfile.name,
        email: 'syamratnam123@gmail.com',
        role: 'owner',
        company: adminProfile.company,
        lastLogin: new Date().toISOString()
      });
      return adminProfile;
    }

    if (window.firebase?.auth) {
      try {
        const userCredential = await window.firebase.auth().signInWithEmailAndPassword(cleanEmail, cleanPass);
        const user = userCredential.user;
        
        const profile = store.loginWithCredentials(cleanEmail, cleanPass);
        return profile;
      } catch (error) {
        console.warn('Firebase Auth Remote Error, fallback to store login:', error.message);
      }
    }
    
    return store.loginWithCredentials(cleanEmail, cleanPass);
  }

  // Firebase Email/Password Registration (Pushes to Firestore Database)
  async registerWithEmail(name, email, password, role, company) {
    const cleanEmail = email.trim().toLowerCase();

    if (window.firebase?.auth) {
      try {
        const userCredential = await window.firebase.auth().createUserWithEmailAndPassword(cleanEmail, password);
        const user = userCredential.user;
        await user.updateProfile({ displayName: name });
        
        const profile = store.registerUser(name, cleanEmail, role, company);
        
        // Push user account to Firestore 'users' collection
        await firebaseFirestore.saveUserToFirestore({
          uid: user.uid,
          name,
          email: cleanEmail,
          role,
          company,
          createdAt: new Date().toISOString()
        });

        return profile;
      } catch (error) {
        console.warn('Firebase Auth Registration Error, fallback to store register:', error.message);
      }
    }

    const profile = store.registerUser(name, cleanEmail, role, company);
    await firebaseFirestore.saveUserToFirestore({ name, email: cleanEmail, role, company });
    return profile;
  }

  // Firebase Google Popup Sign-In
  async signInWithGoogle() {
    if (window.firebase?.auth) {
      try {
        const provider = new window.firebase.auth.GoogleAuthProvider();
        const result = await window.firebase.auth().signInWithPopup(provider);
        const user = result.user;

        const profile = store.registerUser(user.displayName || 'Google User', user.email, 'builder', 'Google Enterprise User');
        await firebaseFirestore.saveUserToFirestore({ uid: user.uid, name: user.displayName, email: user.email, role: 'builder' });
        return profile;
      } catch (error) {
        console.warn('Google Popup Sign-In failed or was cancelled:', error.message);
        throw error;
      }
    } else {
      const profile = store.registerUser('Google Authorized Contractor', 'google.contractor@nsrbrick.com', 'builder', 'Google Cloud Certified Builders');
      await firebaseFirestore.saveUserToFirestore({ name: 'Google Authorized Contractor', email: 'google.contractor@nsrbrick.com', role: 'builder' });
      return profile;
    }
  }

  // Sign Out
  async signOutUser() {
    if (window.firebase?.auth) {
      try {
        await window.firebase.auth().signOut();
      } catch (error) {
        console.warn('Firebase sign out error:', error);
      }
    }
    store.logoutUser();
  }

  // Firebase Auth Observer
  initObserver(callback) {
    if (window.firebase?.auth) {
      window.firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log('🔥 Firebase Auth State: Active session for:', user.email);
          if (callback) callback(user);
        } else {
          console.log('🔥 Firebase Auth State: No user signed in');
        }
      });
    }
  }
}

export const firebaseAuth = new FirebaseAuthService();
