// $(document).ready(function(){
//     $.ajaxSetup({ cache: false });
//     $('#find').keyup(function(){
       
//      $('#result').html('');
//      $('#state').val('');
//      var searchField = $('#find').val();
//      var expression = new RegExp(searchField, "i");
//      $.getJSON('users.json', function(data) {
//       $.each(data, function(key, value){
//        if (value.subjet.search(expression) != -1)
//        {
//         $('#result').append('<li class="list-group-item link-class"> '+value.subjet+'</li>');
//        }
//       });   
//      });
//     });
    
//     $('#result').on('click', 'li', function() {
//      var click_text = $(this).text().split('|');
//      $('#find').val($.trim(click_text[0]));
//      $("#result").html('');
//     });
//    });


   $(document).ready(function() {
    $.ajaxSetup({
        cache: false
    });
    $('#find').keyup(function() {
        $('#myTable').html('');
        $('#state').val('');
        var searchField = $('#find').val();
        var expression = new RegExp(searchField, "i");
        $.getJSON('/Siteweb/asset/js/users.json', function(data) {
            $.each(data, function(key, value) {
                if (value.subjet.search(expression) != -1 || value.date.search(expression) != -1) {
                    $('#result').append('<li class="list-group-item link-class"> '+value.subjet+'</li>');
                }
            });
        });
    });

    $('#result').on('click', 'li', function() {
        var click_text = $(this).text().split('|');
        $('#result').val($.trim(click_text[0]));
        $("#result").html('');
    });
});
$.getJSON("/Siteweb/asset/js/users.json", function buildTable(data) {
    var table = document.getElementById('result')

    for (var i = 0; i < data.length; i++) {
        var row = `<li>
                       
                        ${data[i].lien}
                  </li>`
        table.innerHTML += row;


    }
})