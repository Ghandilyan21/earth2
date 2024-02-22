var images = ["https://cdn.irazek.am/images/2020-05-12/526cb5287105f0663829365ac0cf620a.jpg",
    "https://picsartacademy.am/assets/meta/main-meta.png", "https://i.ytimg.com/vi/1Inq0SWpESs/hqdefault.jpg"];
var i = 0;
document.getElementById("img").src = images[i];
function refresh()
{   
    if(i > (images.length - 1))
    {
        i = 0;
    }
    if(i < 0)
    {
        i = (images.length - 1);
    }
}
function next()
{
    ++i;
    refresh()
    document.getElementById("img").src = images[i];

}
function prev()
{
    --i;
    refresh()
    document.getElementById("img").src = images[i];
}