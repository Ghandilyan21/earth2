//var info = ["London is the capital city of England","Paris is the capital of France.","Tokyo is the capital of Japan."]
const info = new Map();
info.set("London","London is the capital city of England");
info.set("Paris","Paris is the capital of France.");
info.set("Tokio","Tokyo is the capital of Japan.");

function openCity(city)
{
    document.getElementById("title").innerHTML = city;
    document.getElementById("par").innerHTML = info.get(city);
}