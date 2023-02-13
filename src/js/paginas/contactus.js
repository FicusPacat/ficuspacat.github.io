import { emails } from '../servicos/service.js'

const formcont = document.querySelector("#contactus");

formcont.addEventListener('submit', (event) => {
    event.preventDefault();
    let novoemail = {
        name: formcont.name.value,
        email: formcont.email.value,
        note: formcont.note.value,		
    }
    console.log(novoemail)
    emails.add(novoemail).then((docRef) => { 
        formcont.reset();
        alert(`The contact request was sent successfully!`)
    })
        .catch((error) => {
            alert(`A contact request could not be sent!`)
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