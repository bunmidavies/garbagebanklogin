function _(x){
    return document.getElementById(x);
}
function login(){
    user = _("user").value;
    pass = _("pw").value;
    if(user == "ree" && pass=="nig"){
        console.log("logged in.")
    }
    else{
        console.log("failed.")
    }
}