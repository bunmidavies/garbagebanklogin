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
                    loggedin=true;
                    _("details").innerHTML = "You have "+data[i+2]+" clout tokens.";
                }
            }
        }
     }, 'text');
     if(loggedin==false){
         _("details").innerHTML = "Login failed.";
     }
}