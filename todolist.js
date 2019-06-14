const pClick = document.getElementById('pClick');
const pClick2 = document.getElementById('pClick2');


pClick.onclick = function() {
    document.getElementById('cover').style.height = 0;
    document.getElementById('pClick').style.color = 'transparent'
    document.getElementById('a').style.color = 'red';
    document.getElementById("a").style.transition = "all 2s";
    document.getElementById("cover").style.transition = "all 2s";
    document.getElementById("pClick").style.transition = "all 2s";

}

pClick2.onclick = function() {
    document.getElementById('cover2').style.height = 0;
    document.getElementById('pClick2').style.color = 'transparent'
    document.getElementById('a2').style.color = 'red';
    document.getElementById("a2").style.transition = "all 2s";
    document.getElementById("cover2").style.transition = "all 2s";
    document.getElementById("pClick2").style.transition = "all 2s";

}