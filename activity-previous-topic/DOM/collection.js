function processLinks(){
    var linkslist = document.links;
    var contents = "<ul>";

    for ( var i=0; i < linkslist.length; ++i){
        var currentLink = linkslist[i];
        contents += "<li><a href=' " + currentLink.href + "'>" + currentLink.innerHTML + "</li>";
    }

    contents += "</ul>";
    document.getElementById("links").innerHTML = contents;
}

window.addEventListener("load", processLinks, false);