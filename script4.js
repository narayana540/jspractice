var counter=0;
function lowerFunc(){
    counter--;
    document.getElementById('countervalue').textContent=counter;

    if(counter<0){
        document.getElementById('countervalue').style.color="red";
    }    
}
function higherFunc(){
    counter++;
    document.getElementById('countervalue').textContent=counter;
    
        if(counter>0){
            document.getElementById('countervalue').style.color="green";
        }
      
       
  
    
}

