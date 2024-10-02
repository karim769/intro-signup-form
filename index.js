
const inputFiled=document.getElementsByTagName("input");
const warningElements=document.getElementsByClassName("warning");
const submitInput=document.querySelector("input[type='submit']");


// this will listen for all warning that has clicked 
// and returned to default
for (let i = 0; i < warningElements.length; i++) {
   const element = warningElements[i]; 

   element.addEventListener('click',() =>{
      element.style.display="none";
      inputFiled[i].style.display="block";


   })
   
}

function checkEmptyFiled(e){

  for (let i = 0; i < inputFiled.length-1; i++) {
   const element = inputFiled[i];

   if(element.value===''){
   e.preventDefault();
      element.style.display="none";
      warningElements[i].style.display="flex";
   }

}  

}

submitInput.addEventListener('click',function(e) {
   checkEmptyFiled(e);

});