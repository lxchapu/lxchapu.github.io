jQuery(document).ready(function ($) {
  const title = document.title;
  $(window).on("blur", function () {
    document.title = "(っ °Д °;)っ - chapu的小站";
  });
  $(window).on("focus", function () {
    document.title = title;
  });
});
