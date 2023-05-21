import { clientes } from '../servicos/service.js'
//import { file1 } from '../main.js'
//import { file2 } from '../main.js'
//import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"; 
const storage = firebase.storage();


//const storageRef = storage.ref('pitally');
const form2 = document.querySelector("#contact-form2");
document.getElementById("filerbp").onchange = function () {
		document.getElementById("uploadFilerbp").value = this.files[0].name;
		var filer01rbp = event.target.files[0];
		//console.log(file01);
	//const storageRef = ref(storage,'pitally/' + file.name);
	//uploadBytes(storageRef, file).then((snapshot) => {
	 // console.log('Uploaded a blob or file!');
	//})
	};


document.getElementById("file3d").onchange = function () {
	document.getElementById("uploadFile3d").value = this.files[0].name;
	//console.log(this.files[0].name);
	var file023d = event.target.files[0];
	//const storageRef = firebase.storage().ref('pitally/' + file.name);
	//const storageRef = ref(storage,'pitally/' + file.name);
	//uploadBytes(storageRef, file).then((snapshot) => {
	//  console.log('Uploaded a blob or file!');
	//})
	
};

form2.addEventListener('submit', (event) => {
	event.preventDefault();
	const file11rbp = document.querySelector("#filerbp").files[0];
	console.log(file11);
	const file223d = document.querySelector("#file3d").files[0];
	console.log(file22);
	if (document.getElementById("judgelevel2").checked==true){
		var judgelevel2 = form2.judge[0].value;
	} else{
		var judgelevel2 = '';
	}
	if (document.getElementById("judgefemrbp").checked==true){
		var judgefemrbp = form2.judge[1].value;
	} else{
		var judgefemrbp = '';
	}
	if (document.getElementById("judgefemrbp").checked==true){
		var judgefem3d = form2.judge[2].value;
	} else{
		var judgefem3d = '';
	}

    let novoCliente = {
		judgelevel2 : judgelevel2,
		judgefemrbp : judgefemrbp,
		judgefem3d : judgefem3d,
		file1: form.uploadFilerpb.value,
		file2: form.uploadFile3d.value,
		//file1: file1,
		//file2: file2,
        diameter: form.diameter.value,
        thickness: form.thickness.value,
        sige: form.sige.value,
		sigu: form.sigu.value,
		poper: form.poper.value,
		name: form.name2.value,
        email: form.email2.value,		
    }
    console.log(novoCliente)
    clientes.add(novoCliente).then((docRef) => {
        form.reset();
        alert(`Analysis request successfully sent. An email with a preview report and a quote will be send to the given email.`)
    })
        .catch((error) => {
            alert(`The request could not be sent!`)
            console.error("Error adding document: ", error);
        });
	const str1 = 'pitally/';
	const uploadRef = storage.ref(form.uploadFile.value);
	uploadRef.put(file11rbp).then((snapshot) => {
		console.log('Uploaded the file rbp!');
	});
	const uploadRef2 = storage.ref(form.uploadFile2.value);
	uploadRef2.put(file223d).then((snapshot) => {
		console.log('Uploaded the file 3d!');
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