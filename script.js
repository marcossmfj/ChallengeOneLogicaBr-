//var textoOriginal = document.querySelector("input") ;
var textoOriginal = document.getElementById("meu-input") ;
// var meuclickcrip = document.querySelector("button");
 var meuclickcrip = document.getElementById("meu-crip");
 //var meuclickdescrip = document.querySelector("button");
 var meuclickdescrip = document.getElementById("meu-descrip");
 var textoConvertido = document.getElementById("txtstart") ;
 var copyTexto = document.getElementById("copytx");
 var textoFinal;
 var trocada1;
 var trocada2;  
   
 

 function capturarTexto (){
 console.log(textoOriginal.value);
 
 }

 function converterTexto(){
         var myFrase = textoOriginal.value;              
         trocada1 = myFrase.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
         textoFinal = trocada1;         
         
         document.getElementById('txtstart').value= trocada1;
         

 }     
 
 function cripParaTexto(){
         var myFrase = textoOriginal.value;              
         trocada2 = myFrase.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
         textoFinal = trocada2;          
         console.log(textoFinal);
         document.getElementById('txtstart').value= trocada2;
         
         

 }  

 
 
 function copiarTexto() {
         let textoCopiado = document.getElementById("txtstart");
         textoCopiado.select();
         textoCopiado.setSelectionRange(0, 99999)
         document.execCommand("copy");
         
 }

 
     
         
  
 
 meuclickcrip.onclick = function(){                
         
         converterTexto();  
           
            
                          
         
 }
 
 meuclickdescrip.onclick = function(){                
         
         cripParaTexto();
                          
         
 }

 copyTexto.onclick = function(){                
         
         execCopy();
                          
         
 }

 