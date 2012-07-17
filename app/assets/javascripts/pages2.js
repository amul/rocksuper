$(document).ready(function() {
  $('#add_blank_page').click(function() {
    //alert("trigger");
    $.post('pages', { _method:'POST', page : {active: 1, height: 800} }, function(data) {
      //console.log(data);
      html = "<tr>
                <td>"+ data.page.user_id +"</td>
                <td>"+ data.page.active  +"</td>
                <td>"+ data.page.height +"</td>
                <td><a href='/pages/" + data.page.id +"'>Show</a></td>
                <td><a href='/pages/" + data.page.id +"/edit'>Edit</a></td>
                <td><a href='/pages/" + data.page.id +"' data-confirm=\"Are you sure?\" data-method=\"delete\" rel=\"nofollow\">Destroy</a></td>
              </tr>";
      $('tbody').append(html);
      //alert("done");
    }, 'json');
  })
})