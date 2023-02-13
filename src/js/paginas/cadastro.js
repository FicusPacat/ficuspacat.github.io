import { clientes } from '../servicos/service.js'
//import { file1 } from '../main.js'
//import { file2 } from '../main.js'
//import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"; 
const storage = firebase.storage();


//const storageRef = storage.ref('pitally');
const form = document.querySelector("#contact-form");
document.getElementById("file1").onchange = function () {
		document.getElementById("uploadFile").value = this.files[0].name;
		var file01 = event.target.files[0];
		//console.log(file01);
	//const storageRef = ref(storage,'pitally/' + file.name);
	//uploadBytes(storageRef, file).then((snapshot) => {
	 // console.log('Uploaded a blob or file!');
	//})
	};


document.getElementById("file2").onchange = function () {
	document.getElementById("uploadFile2").value = this.files[0].name;
	//console.log(this.files[0].name);
	var file02 = event.target.files[0];
	//const storageRef = firebase.storage().ref('pitally/' + file.name);
	//const storageRef = ref(storage,'pitally/' + file.name);
	//uploadBytes(storageRef, file).then((snapshot) => {
	//  console.log('Uploaded a blob or file!');
	//})
	
};

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const file11 = document.querySelector("#file1").files[0];
	console.log(file11);
	const file22 = document.querySelector("#file2").files[0];
	console.log(file22);
	if (document.getElementById("judge1").checked==true){
		var judge1 = form.judge[0].value;
	} else{
		var judge1 = '';
	}
	if (document.getElementById("judge2").checked==true){
		var judge2 = form.judge[1].value;
	} else{
		var judge2 = '';
	}
	if (document.getElementById("judge3").checked==true){
		var judge3 = form.judge[2].value;
	} else{
		var judge3 = '';
	}
	if (document.getElementById("judge4").checked==true){
		var judge4 = form.judge[3].value;
	} else{
		var judge4 = '';
	}
    let novoCliente = {
		judge1 : judge1,
		judge2 : judge2,
		judge3 : judge3,
		judge4 : judge4,
		file1: form.uploadFile.value,
		file2: form.uploadFile2.value,
		//file1: file1,
		//file2: file2,
        diameter: form.diameter.value,
        thickness: form.thickness.value,
        sige: form.sige.value,
		sigu: form.sigu.value,
		poper: form.poper.value,		
    }
    console.log(novoCliente)
    clientes.add(novoCliente).then((docRef) => {
        form.reset();
        alert(`The quote request was sent successfully!`)
    })
        .catch((error) => {
            alert(`The request could not be sent!`)
            console.error("Error adding document: ", error);
        });
	const str1 = 'pitally/';
	const uploadRef = storage.ref(form.uploadFile.value);
	uploadRef.put(file11).then((snapshot) => {
		console.log('Uploaded the file 1!');
	});
	const uploadRef2 = storage.ref(form.uploadFile2.value);
	uploadRef2.put(file22).then((snapshot) => {
		console.log('Uploaded the file 2!');
	});
	//uploadBytes(uploadRef, file).then((snapshot) => {
//		console.log('Uploaded a blob or file!');
	//  });
})
/*
document.getElementById("file1").onchange = function () {
    //document.getElementById("uploadFile").value = this.files[0].name;
	const file = event.target.files[0];
    const storageRef = firebase.storage().ref('pitally/' + file.name);

	
};


document.getElementById("file2").onchange = function () {
    //document.getElementById("uploadFile2").value = this.files[0].name;
	//console.log(this.files[0].name);
	const file = event.target.files[0];
    const storageRef = firebase.storage().ref('pitally/' + file.name);
};
*/