var siteNameInput=document.getElementById('Site Name');
var siteUrlInput=document.getElementById('Site URL');
var sitescontainer=[];
if(localStorage.getItem("sites")!=null){
    sitescontainer=JSON.parse(localStorage.getItem("sites"))
    displaysites();
}
function addSites(){
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
