import html2canvas from 'html2canvas';

document.querySelector("#start").addEventListener("click", function(e) {
  html2canvas(document.querySelector(".wrap")).then(canvas => {
    document.body.appendChild(canvas)
    const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); //Convert image to 'octet-stream' (Just a download, really)
    var anchor = document.createElement('a');
    anchor.setAttribute('download', 'ppool.png');
    anchor.setAttribute('href', image);
    anchor.click();
  });
})

document.querySelector("#stop").addEventListener("click", function(e) {
  html2canvas(document.querySelector(".wrap p")).then(canvas => {
    document.body.appendChild(canvas)
    const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); //Convert image to 'octet-stream' (Just a download, really)
    var anchor = document.createElement('a');
    anchor.setAttribute('download', 'ppool.png');
    anchor.setAttribute('href', image);
    anchor.click();
    // window.location.href = image;

  });
})


