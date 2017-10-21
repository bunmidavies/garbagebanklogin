function _(x){
    return document.getElementById(x);
}

function login(){
    user = _("user").value;
    pass = _("pw").value;
    $.get('logins.txt', function(data) {
        data = data.split("\n");
        if(data[0] == "ey"){
            console.log("ree");
        }
     }, 'text');
    if(user == "ree" && pass=="nig"){
        console.log("logged in.")
        _("details").innerHTML = "You have 30 clout tokens.";
        
    }
    else{
        console.log("failed.")
        _("details").innerHTML = "";
    }
}