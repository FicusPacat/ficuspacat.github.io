const db = firebase.firestore();

//const db = getFirestore();
export const clientes = db.collection('clientes');
export const emails = db.collection('emails');