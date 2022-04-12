class vacaToro{
     buscaPrimos(codigo){
        const codVec1 = this.separarCodigo(codigo);
        let resp = "";
        for(var i = 0;i<codVec1.length;i++){
            if(this.primo(codVec1[i])){
                resp = "%"
            }
        }   
        
        return resp;
    }

     primo(num) {
        for (var i = 2; i < num; i++) {
          if (num % i === 0) {
            return false;
          }
        }
        return num !== 1;
      }

    mensajeFelicidades(){
        return "Felicidades Adivinaste El codigo";
    }
    
    buscarVacaToro(codigoSecreto,codigoIngresado){    
        let coonf = false;
        const codVec1 = this.separarCodigo(codigoSecreto);
        const codVec2 = this.separarCodigo(codigoIngresado);
        let output="";
        for(var i = 0;i<codVec1.length;i++){
            if(codVec1[i]==codVec2[i]){
                output += "!";
                coonf=true;
            }
            
            else{
                if(codVec1.includes(codVec2[i])){
                    output += "*";
                    coonf=true;
                }
            }
            if((codVec1[i]+1==codVec2[i])||(codVec1[i]-1==codVec2[i])){
                output += "#";
                coonf=true;
            }    
        }    
        if(coonf==false){
            output = "Codigo imcompatible";
        }                
        return output;
    }

    unir(cod){
        let output="";
        for(var i = 0;i<cod.length;i++){
            output += cod[i];
        }
        return output;
    }    
   
    compararCodigo(codigoSecreto, codigoIngresado){
        let output = this.validarCodigo(codigoIngresado)
        if(codigoSecreto == codigoIngresado){
            output = this.mensajeFelicidades();
        }
        if(output != "Codigo Vacio" && codigoSecreto!=codigoIngresado){
            output = this.buscarVacaToro(codigoSecreto,codigoIngresado);            
            if(output != "Codigo imcompatible")                
                output = this.unir(this.separarCodigo(output).sort()) 
        }
        return output;
    }

    separarCodigo(codigoSecreto){
        let numString = String(codigoSecreto);
        const array = []    
        for(var i = 0;i<numString.length;i++){
            let valInsert = numString.charAt(i);
            array.push(valInsert);        
        }
        return array;
    }
     
    validarCodigo(codigo){
        if(codigo==""){
            return "Codigo Vacio";    
        }
        return codigo;
    }
}
export default vacaToro;