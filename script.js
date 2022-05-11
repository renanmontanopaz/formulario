var email= document.getElementById('email');
var username= document.getElementById('username');
var pass= document.getElementById('pass');
var confirpass= document.getElementById('confirpass');

email.addEventListener('focus',()=>{
    email.style.borderColor="#58A4B0"
});
email.addEventListener('blur',()=>{
    email.style.borderColor="#ccc"
});
username.addEventListener('focus',()=>{
    username.style.borderColor="#58A4B0"
});
username.addEventListener('blur',()=>{
    username.style.borderColor="#ccc"
});
pass.addEventListener('focus',()=>{
    pass.style.borderColor="#58A4B0"
});
pass.addEventListener('blur',()=>{
    pass.style.borderColor="#ccc"
});
pass.addEventListener('focus',()=>{
    confirpass.style.borderColor="#58A4B0"
});
confirpass.addEventListener('blur',()=>{
    confirpass.style.borderColor="#ccc"
});
const fields = document.querySelectorAll("[required]")

/*function ValidateField(field){
    function verifyErrors(){
        let foundError = false;
        for(let error in field.validity) {
            // se não for customError
            // então verifica se tem erro
            if (error !== "customError" && field.validity[error]) {
                foundError = true
            }
        }
        return foundError;
    }
    function setCustomMessage(message= "Campo Obrigatório"){
        if(message){
            field.style.borderColor = "red"
            field.setCustomValidity("Esse campo é obrigatório")
        }else{
            field.style.borderColor="green"
            field.setCustomValidity("")
        }
    }
    return verifyErrors()
}*/
function customValidation(event){
    const field = event.target
    let foundError = false/*ValidateField(field)*/
    function verifyErrors(){
        /*let foundError = false;*/
        for(let error in field.validity) {
            // se não for customError
            // então verifica se tem erro
            if (error !== "customError" && field.validity[error]) {
                foundError = true
            }
        }
        return foundError;
    }
    const error = verifyErrors()

    if(error){
        //trocar mensagem de required
        field.style.borderColor="#B05858FF"
        field.setCustomValidity("Esse campo é obrigatório")
    }else{
        field.style.borderColor="green"
        field.setCustomValidity("")
    }
}
for (let field of fields){
    field.addEventListener("invalid", customValidation)
    customValidation(field)
}


document.querySelector("form")
.addEventListener("submit",event =>{
    console.log("enviar o formulário")

    // não vai enviar o formulário
    event.preventDefault()
})