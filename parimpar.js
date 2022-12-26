const frm = document.querySelector("form");
let add = document.getElementById('btSubmit');
let verifica = document.getElementById('btNovo');
let vetor=[];

frm.addEventListener("submit", (e) => {
    e.preventDefault(); 
    const numero = Number(frm.inNumero.value);
    if (vetor.length < 10){ //se o tamanho do vetor for menor que 10
        vetor.push(numero); //adiciona o numero no final do vetor
    }
    if(vetor.length==10){ //se o vetor ja estiver cheio com 10 numeros
        add.setAttribute("class","oculta"); //oculta o botao de ADD
        verifica.setAttribute("class","exibe"); //o botao de verificar aparece
    }
    frm.inNumero.value='';
    frm.inNumero.focus();
});
 
//acumuladores 
let par=0;
let impar=0;
frm.btNovo.addEventListener('click',()=>{
    for (let i=0; i < 10; i++){ //for usado para percorrer o vetor
        if(vetor[i]%2==0){ //se for divisivel por 2 e resto 0 é par
            par++;
        }else{ //senao é impar
            impar++;
        }
    }
    outpar.innerText=`Quantidade de elementos pares:${par} `;
    outimpar.innerText=`Quantidade de elementos ímpares:${impar} `;
});