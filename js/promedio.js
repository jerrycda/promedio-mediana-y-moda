const lista1 = [];

function onClickButtonPush(){
 const inputNumeros = document.getElementById("InputEst");
 const NumerosValores = Number(inputNumeros.value);
 const listaT = lista1.unshift(NumerosValores);
 return lista1
}



//promedio o media Aritmetica
function calcularMediaAritmetica(lista){
    //let sumalista = 0;
    //for(let i = 0; i < lista.length; i++){
    //  sumalista = sumalista + lista[i];
    //}

  const sumalista = lista.reduce(
    function(valorAcumulado = 0, nuevoElemento){
     return valorAcumulado + nuevoElemento;
    }
  );

  const promedioLista = sumalista / lista.length;

 return promedioLista;
}
function onClickButtonMedia(){ 
 const media = calcularMediaAritmetica(lista1);
 const resultM = document.getElementById("ResultM");
 resultM.innerText = "la media de la lista es:" + media;
 }


//mediana 


function calcularMediana(lista1) {
 const mitadLista1 = parseInt(lista1.length / 2);

 function esPar(numerito){
   if(numerito % 2 === 0){
      return true; 
   }else{
      return false;
   }
 }
 let mediana;
 
 if (esPar(lista1.length)) {
     const elemento1 = lista1[mitadLista1];
     const elemento2 = lista1[mitadLista1 - 1];
 
     const promedioElemento1y2 = calcularMediaAritmetica ([
         elemento1,
         elemento2,
        
     ]);
     mediana = promedioElemento1y2;  
    
     
 }else{
  mediana = lista1[mitadLista1];
 }
 return mediana
}
function onClickButtonMediana(){ 
  const mediana1 = calcularMediana(lista1);
  const resultMediana = document.getElementById("ResultMediana");
  resultMediana.innerText = "la mediana de la lista es:" + mediana1;
  }

//moda
function CalcularModa() {
  const lista1Count = {};
  
  lista1.map(
      function (elemento) {
       if (lista1Count[elemento]) {
           lista1Count[elemento] += 1; 
       }else{
          lista1Count[elemento] = 1;
       }   
       
      }
  );
  
  const lista1Array = Object.entries(lista1Count).sort(
      function (valorAcumulado, nuevoValor){
        return valorAcumulado[1] - nuevoValor[1];    
      }
  );
  
  
  const moda = lista1Array[lista1Array.length - 1];
  return moda
}


function onClickButtonModa(){
  const modaT = CalcularModa(lista1);
  const resultModa = document.getElementById("ResultModa");
  resultModa.innerText = "la moda de la lista es:" + modaT[0];
  }

