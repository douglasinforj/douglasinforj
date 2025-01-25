let count = 1
document.getElementById("radio1").checked = true;

//função de intervalos
setInterval ( function(){
    nextImage();             //função passa imagem
}, 2000)



function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}