/* Modal image.  Upon clicking image, will enlarge as a lightbox */


var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// get the target id upon hovering over image
// enlarge image when clicked
document.onmouseover = function (e) {
    var targ;
    if (!e) { var e = window.event; }
    if (e.target) { targ = e.target; }
    else if (e.srcElement) { targ = e.srcElement; }
    if (targ.nodeType == 3) { // defeat Safari bug
        targ = targ.parentNode;
    }
    console.log(targ.id);

    if (targ.localName == 'img' && targ.id) {
        var img = document.getElementById(targ.id);

        img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;

        }
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
