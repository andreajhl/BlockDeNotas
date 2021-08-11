var palabra='hola';
var array='parte-pepitohola'
var j=0
var i=0
while(j+1<=palabra.length){
   if (array[i]!==palabra[j]) {
       i++
   }else{
        j++
        i++
   }
}
console.log(j,i-palabra.length)