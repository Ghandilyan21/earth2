function change()
{
    var check = document.getElementById("but")
    var x = document.getElementById("text");
    if(check.innerHTML == "Hide")
    {
        check.innerHTML = "Show" 
        x.style.display = "none"
    }
    else{
        check.innerHTML = "Hide" 
        x.style.display = "Block"
    }
}