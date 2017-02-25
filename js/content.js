window.addEventListener("load", myMain, false);

function myMain(evt) {

  // DO YOUR STUFF HERE.
  console.log("JD helper running!");
  console.log(window.location.href);
  console.log(document.URL);

  if (document.URL === "https://club.jd.com/myJdcomments/myJdcomment.action") {

    if ($("a[class='btn-def']:contains('评价')") != undefined) {
      $("a[class='btn-def']:contains('评价')")[0].click();
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


    $('a[class="btn-submit"]')[0].click();




  }
  if (document.URL.indexOf("saveCommentSuccess.action") > -1) {
    window.location.href = "https://club.jd.com/myJdcomments/myJdcomment.action";
  }



}