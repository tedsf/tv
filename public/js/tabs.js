$(document).ready(function () {
  $( "a" ).on("click", function(){
    $( ".tabs li" ).removeClass( "active" );
    $( this ).parent().addClass( "active" );

  var that = $(this).attr('href');
    $( ".tab-content" ).css('display', 'none')
    $( that ).css('display', 'block')

  });
})
