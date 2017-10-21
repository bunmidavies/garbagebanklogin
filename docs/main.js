function _(x){
    return document.getElementById(x);
}

function login(){
    user = _("user").value;
    pass = _("pw").value;
    $.get('logins.txt', function(data) {
        data = data.split("\n");
        for(var i=0;i<data.length;i++){
            if(user==data[i]){
                if(pass==data[i+1]){
                    console.log("logged in.")
                }
            }
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