/*--------------------------------------------*/

var data_click = document.getElementById("jsonclick");
var data_showen = document.getElementById("datacollected");
data_click.addEventListener("click", function(){
    var datarequest = new XMLHttpRequest();

    datarequest.open('GET','/Siteweb/asset/js/users.json');
    datarequest.onload = function(){
        var mydata = JSON.parse(datarequest.responseText);
addHtml(mydata); };
    datarequest.send();
});
/*--------------------------------------------*/
function addHtml(data){
    var htmlText = "";
    for (i = 0; i < data.length ; i+=1){
        htmlText +=" <div class='data-collected'> <b> " + data[i].subjet+"<br>"+ 
        " </b>" + data[i].date +  " " + 
        data[i].mocharikin  + " <a href = '#' >" + 
        data[i].lien + " <a> </div><hr>"  ;
    };

    data_showen.insertAdjacentHTML('beforeend',htmlText);
}







   
      

