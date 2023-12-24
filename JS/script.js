var siteNameInput=document.getElementById('Site Name');
var siteUrlInput=document.getElementById('Site URL');
var addbtn=document.getElementById('addbtn');
var tablebody=document.getElementById('tablee')
var sitescontainer=[];
if(localStorage.getItem("sites")!=null){
    sitescontainer=JSON.parse(localStorage.getItem("sites"))
    displaysites();
}
function addSites(){
    if (isValidURL()==true&&isValidName()==true){
        var sites={
            name:siteNameInput.value,
            url:siteUrlInput.value,
        
        }
        sitescontainer.push(sites);
        localStorage.setItem("sites",JSON.stringify(sitescontainer))
    
        displaysites();
        clearform();
        // console.log(sitescontainer)
    }
    else{
        // var myimages=document.querySelectorAll(".itemm img");
        var lightboxcontainer=document.querySelector("#lightboxcontainer");
        lightboxcontainer.classList.replace("d-none","d-flex")
    }
//         for(var i=0;i<myimages.length;i++){
//             myimages[i].addEventListener("click",function(){
//                 console.log("hi");
//                 lightboxcontainer.classList.replace("d-none","d-flex")
// })
// }
    }
    //     alert('INVALIDURL');
    // }
    // }
   
function displaysites(){
    var cartoona=``;
    for(i=0;i<sitescontainer.length;i++){
        cartoona+=`<tr class="text-center">
        <td>${i+1}</td>
        <td>${sitescontainer[i].name}</td>
        <td><button onclick="Visit(${i})" class="btn btn-warning"><span><i class="fa-regular fa-eye me-1"></i></span>Visit</button></td>
        <td><button onclick="Delete(${i})" class="btn btn-warning"><span><i class="fa-solid fa-trash me-1"></i></span>Delete</button></td>
        </tr>`
    }
    document.getElementById("tablee").innerHTML=cartoona;
}
function clearform(){
    siteNameInput.value="";
    siteUrlInput.value="";
}
function Delete(siteindex){
sitescontainer.splice(siteindex,1);
localStorage.setItem("sites",JSON.stringify(sitescontainer))
displaysites(sitescontainer);
}


function Visit(siteindex){
    var url = sitescontainer[siteindex].url;
    window.open(url, "_blank");
}
function isValidName() {
    var nameregex = /^.{3,}$/;
    if(nameregex.test(siteNameInput.value)==true){
        return true;
    }
    else{
        return false;
    }
}
function isValidURL() {
    var regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    if(regex.test(siteUrlInput.value)==true){
        return true;
    }
    else{
        return false;
    }
}
var close=document.querySelector("#closebtn");
close.addEventListener("click",function(closee)
{
    lightboxcontainer.classList.replace("d-flex","d-none")

})
// var inputElement = document.querySelector("#right");
//     var checkIcon = document.querySelector('.fa-check');
//     // var xIcon = document.querySelector('.fa-x');
//         inputElement.addEventListener("keydown",function(){
//             checkIcon.classList.replace("d-none","d-block")
//         })
//     if (isValidName()) {
//     inputElement.addEventListener("keydown", function() {
//         checkIcon.classList.replace("d-none", "d-block");
//     });
// }
    
    