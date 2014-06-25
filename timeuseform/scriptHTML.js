$( "#target" ).submit(function( event ) {
  alert( "Handler for .submit() called." );
  event.preventDefault();
});



function updatesum() {
   // alert('a');
var time = document.getElementById("txtTime").value;
var cost = document.getElementById("txtCost").value;
var total=0; 
total = (time-0) +( cost-0);
   // alert(total);
document.getElementById("txtTotal").innerHTML = total;
return false;
}