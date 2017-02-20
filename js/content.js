
console.log("JD helper running!");

chrome.
$("a[class='btn-def']:contains('评价')").each(function(){

var href = $(this).attr('href');
console.log(href);

if (typeof(localStorage) == 'undefined' ) {
  alert('Your browser does not support HTML5 localStorage. Try upgrading.');
}
else {

var cnt = localStorage.length + 1;

  try {
    localStorage.setItem('jdhelperurl_'+cnt, href); //saves to the database, “key”, “value”
  }
  catch (e) {
    if (e == QUOTA_EXCEEDED_ERR) {
      alert('Quota exceeded!'); //data wasn’t successfully saved due to quota exceed so throw an error
    }
  }
  //document.write(localStorage.getItem(“name”)); //Hello World!
 // localStorage.removeItem(“name”); //deletes the matching item from the database
}

});







// auto commments star
$('span[data-id="A1"]').each(function(){ $(this).click();});