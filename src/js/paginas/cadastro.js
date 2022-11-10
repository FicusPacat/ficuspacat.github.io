import { clientes } from '../servicos/service.js'

const form = document.querySelector("#contact-form");

form.addEventListener('submit', (event) => {
		if (document.getElementById("judge1").checked==true){
			judge1 = form.judge[0].value;
		}
		else{
			judge1 = ''
		}
		if (document.getElementById("judge2").checked==true){
			judge2 = form.judge[1].value;
		}		
		else{
			judge2 = ''
		}
		if (document.getElementById("judge3").checked==true){
			judge3 = form.judge[2].value;
		}		
		else{
			judge3 = ''
		}
		if (document.getElementById("judge4").checked==true){
			judge4 = form.judge[3].value;
		}		
		else{
			judge4 = ''
		}
    event.preventDefault();
    let novoCliente = {
		judge1 : judge1,
		judge2 : judge2,
		judge3 : judge3,
		judge4 : judge4,
		//file1: form.uploadFile.value,
		//file2: form.uploadFile2.value,
        diameter: form.diameter.value,
        thickness: form.thickness.value,
        sige: form.sige.value,
		sigu: form.sigu.value,
		poper: form.poper.value,		
    }
    console.log(novoCliente)
    clientes.add(novoCliente).then((docRef) => {
        form.reset();
        alert(`Solicitação de orçamento enviada com sucesso!`)
    })
        .catch((error) => {
            alert(`Solicitação de orçamento não pode ser enviada`)
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