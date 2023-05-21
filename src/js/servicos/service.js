const db = firebase.firestore();

//const db = getFirestore();
export const clientes = db.collection('clientes');
export const clientesrbp3d = db.collection('clientes_rbp3d');
export const emails = db.collection('emails');