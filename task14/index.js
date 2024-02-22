

function store()
{
    
    var buff = document.getElementById("inp").value;
    localStorage.setItem("data", buff);
    // console.log(buff);
    
}

document.getElementById("inp").value = localStorage.getItem('data');

// localStorage.removeItem("data");
