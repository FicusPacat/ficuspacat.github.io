import { clientes } from '../servicos/service.js'

const formcont = document.querySelector("#contact-us");

formcont.addEventListener('submit', (event) => {
	
    event.preventDefault();
    let novoCliente = {
        name: form.name.value,
        email: form.email.value,
        note: form.note.value,		
    }
    console.log(novoCliente)
    clientes.add(novoCliente).then((docRef) => {
        form.reset();
        alert(`Solicitação de contato enviada com sucesso!`)
    })
        .catch((error) => {
            alert(`Solicitação de contato não pode ser enviada`)
            console.error("Error adding document: ", error);
        });
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