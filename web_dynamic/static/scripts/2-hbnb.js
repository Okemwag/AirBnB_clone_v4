$(document).ready(function () {
  const obj = {};
  $('div.amenities li input').change(function () {
    if ($(this).is(':checked')) {
      obj[($(this).attr('data-id'))] = $(this).attr('data-name');
    } else {
      delete obj[($(this).attr('data-id'))];
    }
    $('div.amenities h4').html(Object.values(obj).join(', '));
  });

  $.getJSON('http://0.0.0.0:5001/api/v1/status/', function (data){
      if (data.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    });
});
