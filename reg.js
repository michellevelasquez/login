//VARIABLES

const forms = document.querySelector(".bigbox");
const contra = document.querySelector("#password");
const boton = document.querySelector(".log")
const correos = document.querySelector("#correo");



//arrays
var mailList = ["a@a.com","b@b.com","c@c.com","w@w.com"]
var passList = ["a","b","c","w"]


//event listedners
boton.addEventListener("click",ValidateEmail)
boton.addEventListener("click",showALL)




function showALL(event){
    event.preventDefault();
   /* console.log(user.value);
    console.log(contra.value)
    */

    var a = new User;
    a.obtener();
    console.log(a);
    if(k===true){
        p(a);
    }else{
        continue;
    }

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

    console.log(mailList.findIndex(isCorrectEmail));

    if(a!= "" ||b!=""){
    if(mailList.findIndex(isCorrectEmail) != -1){
        alert("You Already Have An Account");
    }else{
        mailList.push(a);
        passList.push(b);
        console.log(mailList);
        console.log(passList);
        var pos = a.indexOf("@");
        console.log(pos);
        var res = a.substring(0,pos);
        console.log(res);
        alert("Welcome "+res+"\nYour password is "+b);
    }
    }else{
        alert("Try Again!");
}
}


let k = function ValidateEmail(usuario) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(usuario.correo))
  {
    return (true)
  }
    alert("¡Ingrese un correo valido!")
    return (false)

}