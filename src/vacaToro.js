function buscarVacaToro(vec1,vec2){
    let resp="";
    for(var i = 0;i<vec1.length;i++){
        if(vec1[i]==vec2[i])
            resp = resp + "!";
        else{
            if(vec1.includes(vec2[i]))
                resp = resp + "*";
        }    
    }
    return resp;
}
export default buscarVacaToro;
