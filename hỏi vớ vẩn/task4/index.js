


function loadImages() {
    document.getElementById('id1').style.maxHeight = "200px";
    var images = document.querySelectorAll("#id1 img");
    
    setTimeout(()=>{
    for(var i = 0; i < images.length; i++)
        {
    images[i].src = images[i].getAttribute('data-src');
        }
    }    
    ,2000);
    
  }




