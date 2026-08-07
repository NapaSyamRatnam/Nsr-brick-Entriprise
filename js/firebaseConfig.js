/* NSR Brick Enterprise - Firebase Configuration Module */

const FIREBASE_CONFIG_KEY = 'nsr_firebase_config_credentials';

// User's Official Live Firebase Project Credentials
const LIVE_FIREBASE_CONFIG = {
  apiKey: "AIzaSyC7-39oNwYTaCR7M8_qJP-i5XO8qPrq-Qc",
  authDomain: "nsr-brick-enterprise.firebaseapp.com",
  projectId: "nsr-brick-enterprise",
  storageBucket: "nsr-brick-enterprise.firebasestorage.app",
  messagingSenderId: "208776458339",
  appId: "1:208776458339:web:5fd5440307db02574a4856",
  measurementId: "G-46LB3NRTYV"
};

export function getFirebaseConfig() {
  try {
    const saved = localStorage.getItem(FIREBASE_CONFIG_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.warn('Could not load custom Firebase config, using defaults.', e);
  }
  return LIVE_FIREBASE_CONFIG;
}

export function saveFirebaseConfig(newConfig) {
  try {
    localStorage.setItem(FIREBASE_CONFIG_KEY, JSON.stringify(newConfig));
    return true;
  } catch (e) {
    console.error('Failed to save Firebase credentials:', e);
    return false;
  }
}

export function initializeFirebaseApp() {
  const config = getFirebaseConfig();
  
  if (window.firebase && !window.firebase.apps?.length) {
    try {
      window.firebase.initializeApp(config);
      console.log('🔥 Official Firebase App connected to project:', config.projectId);
      return true;
    } catch (err) {
      console.warn('Firebase initialization note:', err);
    }
  }
  return false;
}
