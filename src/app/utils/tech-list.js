var techStackList = [".Net Core","Redis","MSSQL","ElasticSearch","Angular"]

var techList = document.getElementById("techList");

export const techLi = _.forEach(techStackList,function(value){
    let newLi= document.createElement("li");
    let liContent = document.createTextNode(value);
    newLi.appendChild(liContent);
    techList.appendChild(newLi);
});



