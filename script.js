let culoareaAleasa;

const culori= {
    "bad": "#556B2F",
    "ok": "#9ACD32",
    "good": "#f8de7e",
    "awesome":"#fffe7a",
}

function coloreaza(id){
    if(!culoareaAleasa) {
        alert("Pick a color from below")
    } else {
    document.getElementById(id.id).style.fill = culoareaAleasa;
    }

}

const changeColor = (color) =>{
    if(color === 'bad'){
        culoareaAleasa = culori.bad;
    } 
    if(color==="ok"){
        culoareaAleasa=culori.ok;
    }
    if(color==="good"){
        culoareaAleasa=culori.good;
    }
    if(color==="awesome"){
        culoareaAleasa=culori.awesome;
    }
}


for (let i in document.querySelectorAll('polygon')) {
    document.querySelectorAll('polygon')[i].addEventListener('click', () => {
        coloreaza(document.querySelectorAll('polygon')[i]);
    })
}
