
function myFunction(){
    
    var ip=document.getElementById('inp').value;
    if(ip!=""){
       document.getElementById('feedback').style.display="none";
    
       document.getElementById('mc').innerHTML=ip;
    }
    else{
     
        document.getElementById('feedback').style.display="block";
        setTimeout(function(){
            alertFunc();
        },3000)
       function alertFunc(){
        document.getElementById('feedback').style.display="none";
       }
        
    }
  
}