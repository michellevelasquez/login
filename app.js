//VARIABLES

const forms = document.querySelector(".bigbox");
const contra = document.querySelector("#password");
const boton = document.querySelector(".log")
const correos = document.querySelector("#correo");


//arrays
const mailList = ["a@a.com","b@b.com","c@c.com","w@w.com"]
const passList = ["a","b","c","w"]


//event listedners
boton.addEventListener("click",showALL)

function showALL(event){
    event.preventDefault();
   /* console.log(user.value);
    console.log(contra.value)
    */

    var a = new User;
    a.obtener();
    console.log(a);
    p(a);
}

//Class
class User{
 obtener(){
        this.contrasena = contra.value;
        this.correo = correos.value;
    }
}

let p = function(usuario){
    let a = usuario.correo;
    let b = usuario.contrasena;
    console.log(a);
    console.log(b);

    const isCorrectEmail = (element) => element ===a;
    const isCorrectPassword = (element) => element ===b;

    console.log(mailList.findIndex(isCorrectEmail));
    console.log(passList.findIndex(isCorrectPassword));

    if(a!= "" ||b!=""){
    if(mailList.findIndex(isCorrectEmail) === passList.findIndex(isCorrectPassword)){
        alert("Congrats!");
    }else if(mailList.findIndex(isCorrectEmail) === -1){
        alert("username not found");
    }else if(mailList.findIndex(isCorrectEmail) != -1 && passList.findIndex(isCorrectPassword)!=mailList.findIndex(isCorrectEmail)){
        alert("wrong password");
    }
    }else{
        alert("Try Again!");
}
}



