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
        htmlText +=" <div class='data-collected'> <b>" + data[i].subjet+"<br>"+ 
        " </b>" + data[i].date +  " " + 
        data[i].mocharikin  + " <a href = '#' >" + 
        data[i].lien + " <a> </div><hr>"  ;
    };

    data_showen.insertAdjacentHTML('beforeend',htmlText);
}



$(document).ready(function(){
    $.ajaxSetup({ cache: false });
    $('#search').keyup(function(){
     $('#result').html('');
     $('#state').val('');
     var searchField = $('#search').val();
     var expression = new RegExp(searchField, "i");
     $.getJSON('data.json', function(data) {
      $.each(data, function(key, value){
       if (value.name.search(expression) != -1 || value.location.search(expression) != -1)
       {
        $('#result').append('<li class="list-group-item link-class"><img src="'+value.image+'" height="40" width="40" class="img-thumbnail" /> '+value.name+' | <span class="text-muted">'+value.location+'</span></li>');
       }
      });   
     });
    });
    
    $('#result').on('click', 'li', function() {
     var click_text = $(this).text().split('|');
     $('#search').val($.trim(click_text[0]));
     $("#result").html('');
    });
   });
   


