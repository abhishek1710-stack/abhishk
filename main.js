var yo=[];
function click(){console.log("h1");
    var a1=document.getElementById("a1").value; 

    var a2=document.getElementById("a2").value; 

    var a3=document.getElementById("a3").value; 

    var a4=document.getElementById("a4").value; 

    var a5=document.getElementById("a5").value;
    
    yo.push(a1);
    yo.push(a2);
    yo.push(a3);
    yo.push(a4);
    yo.push(a5);

    document.getElementById("w1").innerHTML=yo;
}
function hick()
{yo.sort();
    document.getElementById("w1").innerHTML=yo;


}