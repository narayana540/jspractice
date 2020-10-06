const imgArr=["img/questionBcg.jpeg","img/headerBcg.jpeg","img/mainBcg.jpeg","img/questionBcg.jpeg"]
 

var counter=0;
function prev(){
    counter--;
    if(counter<0){
       counter=imgArr.length-1;
    }
    console.log(imgArr[counter]);
    document.getElementById('imgdiv').style.background="url(${imgArr[counter]})";
}
function next(){
    counter++;
    if(counter>0){
       counter=imgArr.length+1;
    }
    console.log(imgArr[counter]);
    document.getElementById('imgdiv').style.background="url(+imgArr[counter]+)";
}