

var siteNameInput = document.getElementById('siteNameInput');
var siteUrlInput = document.getElementById('siteUrlInput');
var hiddenButton = document.getElementById('hiddenButton');



siteList = [];

if( localStorage.getItem('sites') != null){


siteList = JSON.parse( localStorage.getItem('sites') );

displayData();



}



function sumbit(){


  if( validationName() == true && validationUrl() == true){

  
 var site = {
   
  name : siteNameInput.value , 

  url : siteUrlInput.value


 }


siteList.push(site);  // end sumbit

localStorage.setItem('sites' , JSON.stringify(siteList));

clearForm();

displayData();


  }

  else{
         
    
    hiddenButton.click();


   }

 
 }



 function clearForm(){

   siteNameInput.value = '';
   siteUrlInput.value = '';


 }



 function displayData(){
   
    var cartona  = '';

    for(var i = 0 ; i < siteList.length ; i++){
        
    cartona += `
     
    
    <tr>

    <td> ${i}</td>
    <td> ${ siteList[i].name }</td>
    <td> 

    <a onclick="visitSite()" class="btn btn-success" href="${ siteList[i].url }"> <i class="fa-solid fa-eye me-2"></i>Visit</a>

    </td>

    <td>
    <button onclick="deleteSite(${i})" class="btn btn-danger"> <i class="fa-solid fa-trash me-2"></i>Delete</button>
    </td>



</tr>

    
    `

    }

document.getElementById('tableBody').innerHTML = cartona;

 }

 
function deleteSite(index){
 
    siteList.splice( index,1);
    
    localStorage.setItem('sites' , JSON.stringify(siteList));

    
    displayData();


}


function validationName(){

  var text = siteNameInput.value;

var regexName = /^[A-Z][a-z]{3,20}$/

if(regexName.test(text)){


   siteNameInput.classList.add('is-valid');
   siteNameInput.classList.remove('is-invalid');
   return true;




}


else{

  siteNameInput.classList.add('is-invalid');
  siteNameInput.classList.remove('is-valid');
  return false;

}


}



function validationUrl(){

var URL = siteUrlInput.value;

var regexUrl = /^(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?$/


if(regexUrl.test(URL)){


  siteUrlInput.classList.add('is-valid');
  siteUrlInput.classList.remove('is-invalid');
  return true;




}


else{

  siteUrlInput.classList.add('is-invalid');
  siteUrlInput.classList.remove('is-valid');
  return false;


}




}



