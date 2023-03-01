jQuery(document).ready(function ($) {
  // 特殊日期页面变灰
  if (isSpecialDay()) {
    $("html").css({
      filter: "grayscale(100%)",
      "-webkit-filter": "grayscale(100%)",
    });
  }
  // 判断是否为特殊日期
  function isSpecialDay() {
    let specialDays = ["4/4", "5/12", "7/7", "9/18", "12/13"];
    let currentDate = new Date();
    let month = currentDate.getMonth() + 1;
    let date = currentDate.getDate();
    for (let day of specialDays) {
      let d = day.split("/");
      if (month == d[0] && date == d[1]) {
        return true;
      }
    }
    return false;
  }
});
