function isValidEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
function submit()
{
    var mail = document.getElementById("mail").value;
    if(isValidEmail(mail))
    {
        document.getElementById("error").innerHTML = "You are submited"
    }
    else{
        document.getElementById("error").innerHTML = "Enter valid email"
    }
}