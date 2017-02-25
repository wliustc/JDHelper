window.addEventListener("load", myMain, false);

function myMain(evt) {
  // DO YOUR STUFF HERE.
  console.log("JD helper running!");
  console.log(window.location.href);
  console.log(document.URL);

  if (document.URL === "https://club.jd.com/myJdcomments/myJdcomment.action") {

    $("a[class='btn-def']:contains('评价')").each(function () {

      var href = $(this).attr('href');

     
      console.log(href);

       window.location.href  = href;

      if (typeof (localStorage) == 'undefined') {
        alert('Your browser does not support HTML5 localStorage. Try upgrading.');
      } else {

        var cnt = localStorage.length + 1;

        try {
          localStorage.setItem('jdhelperurl_' + cnt, href); //saves to the database, “key”, “value”
        } catch (e) {
          if (e == QUOTA_EXCEEDED_ERR) {
            alert('Quota exceeded!'); //data wasn’t successfully saved due to quota exceed so throw an error
          }
        }
        //document.write(localStorage.getItem(“name”)); //Hello World!
        // localStorage.removeItem(“name”); //deletes the matching item from the database
      }

    });

    console.log("redirect");
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (key.indexOf('jdhelperurl_') > -1) {
        window.location.href = localStorage.getItem(key);
        break;
      }
    }



  }

  if (document.URL.indexOf("orderVoucher.action") > -1) {
    console.log("auto commments star");
    console.log($('span[data-id="A1"]'));
    $('span[data-id="A1"]').each(function () {
      $(this).click();
    });

    $('span[class="star star5"]').each(function () {
      $(this).click();
    });

    var cnt = 0;
    $("a[class='tag-item']").each(function () {
      cnt++;
      if (cnt % 2 == 1) {
        $(this).addClass("tag-checked");
      }
    });

    $('textarea[placeholder="商品是否给力？快分享你的购买心得吧~"]').val("东西挺好的值得购买，下次还会再来。");

    $("a[class='btn-submit']").click();

  }
  if(document.URL.indexOf("saveCommentSuccess.action") > -1)
  {
      window.location.href = "https://club.jd.com/myJdcomments/myJdcomment.action";
  }

}