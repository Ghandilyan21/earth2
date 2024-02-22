function validate()
{
    if(!document.getElementById("inp").value)
    {
        document.getElementById("worning").innerHTML = "Please enter your mail before submit"
    }
    else{
        document.getElementById("worning").innerHTML = "Your mail is valide"
        document.getElementById("worning").style.cssText = "{color : black}"
    }
}