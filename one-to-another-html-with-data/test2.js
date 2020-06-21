$(function() {
  let data = window.localStorage.getItem('user');
 
  $('#data').html(data);
  window.localStorage.clear();
});