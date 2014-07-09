$(document).ready(function(){
    $('a[data-text]').each(function(){
      $(this).attr('data-text', "This works!");
    });
    $.getScript('http://platform.twitter.com/widgets.js');
});