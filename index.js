function calculate(){
  
  let maths=Number(document.getElementById("maths").value);
  let sci=Number(document.getElementById("sci").value);
  let eng=Number(document.getElementById("eng").value);
  let hindi=Number(document.getElementById("hindi").value);
  let sst=Number(document.getElementById("sst").value);
  let average=(maths+sci+eng+hindi+sst)/5;
  
  if(average>=95){
    document.getElementById("grade").textContent="You Got A+";
  }
  else if(average>=85){
    document.getElementById("grade").textContent="You Got B+";
  }
  else if(average>=75){
    document.getElementById("grade").textContent="You Got C+";
  }
  else if(average>=65){
    document.getElementById("grade").textContent="You Got D+";
  }
  else{
    document.getElementById("grade").textContent="You Failed!";
  }
}

