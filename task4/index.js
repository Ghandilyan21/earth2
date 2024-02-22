function changeText()
{
    var x = document.getElementById("demo");
    if(x.innerHTML == "Goodbye")
    {
        x.innerHTML = "Hello"
    }
    else{
        x.innerHTML = "Goodbye"
    }
}