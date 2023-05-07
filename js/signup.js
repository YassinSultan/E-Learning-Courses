var userName=document.getElementById("userName");
var userEmail=document.getElementById("userEmail");
var userPass=document.getElementById("userPass");
var EmailAlert=document.getElementById("EmailAlert");
var passAlert=document.getElementById("passAlert");
var NameAlert=document.getElementById("NameAlert");
var SameEmail=document.getElementById("SameEmail");

var userlist=[];
if(localStorage.getItem("list")==null){
    userlist=[];
}
else{
    userlist=JSON.parse(localStorage.getItem("list"))
}
//   Regular Expression
var emailValid=/^[a-z0-9A-Z-\._]{4,20}@[A-Za-z]{3,10}.[a-zA-Z]{3,6}$/;
var passvalid=/^[a-zA-Z0-9@-_$%#@!*.]{8,15}$/;
var NameValid=/^[a-zA-Z]{3,15}$/;

function addUser(){
    if(ValidEmail()==true && ValidPass()==true && check()!=true ){
        var user={
            name:userName.value,
            Email:userEmail.value,
            pass:userPass.value
        };
        userlist.push(user);
        localStorage.setItem("list",JSON.stringify(userlist))
        document.getElementById("Signin").click();
    }
}


//valid Name

userName.addEventListener("blur",validname)
function validname(){
    if(NameValid.test(userName.value)==true){
        console.log("true")
        userName.classList.add("is-valid")
        userName.classList.remove("is-invalid")
        NameAlert.classList.replace("d-block","d-none")
    }
    else{
        userName.classList.remove("is-valid")
        userName.classList.add("is-invalid")
        NameAlert.classList.replace("d-none","d-block")
    }
}




// ValidEmail
userEmail.addEventListener("blur",ValidEmail)
function ValidEmail(){
    if(emailValid.test(userEmail.value)==true){
        userEmail.classList.add("is-valid")
        userEmail.classList.remove("is-invalid")
        EmailAlert.classList.replace("d-block","d-none")
        return true
    }
    else{
        userEmail.classList.remove("is-valid")
        userEmail.classList.add("is-invalid")
        EmailAlert.classList.replace("d-none","d-block")
        return false
    }
}
function check(){
    for(var i=0;i<userlist.length;i++){
        if(userlist[i].Email==userEmail.value){
            SameEmail.classList.replace("d-none","d-block")
            return true;
            break;
        }
    }
}
userEmail.addEventListener("blur",check)
userEmail.addEventListener("keyup",function(){
    SameEmail.classList.replace("d-block","d-none")
    userEmail.classList.remove("is-valid")
    EmailAlert.classList.replace("d-block","d-none")
})


// ValidPass
userPass.addEventListener("blur",ValidPass)
function ValidPass(){
    if(passvalid.test(userPass.value)==true){
        userPass.classList.add("is-valid")
        userPass.classList.remove("is-invalid")
        passAlert.classList.replace("d-block","d-none")
        return true
    }
    else{
        userPass.classList.remove("is-valid")
        userPass.classList.add("is-invalid")
        passAlert.classList.replace("d-none","d-block")
        return false
    }
}
