// 定义获取词语下标
var wordIndex = 0;
jQuery(document).ready(function ($) {
  // 点击body时触发事件
  $("body").click(function (event) {
    // 需要显示的词语
    var words = [
      "富强",
      "民主",
      "文明",
      "和谐",
      "自由",
      "平等",
      "公正",
      "法治",
      "爱国",
      "敬业",
      "诚信",
      "友善",
    ];
    // 设置词语给span标签
    var span = $("<span></span>").text(words[wordIndex]);
    // 下标等于原来下标+1  余 词语总数
    wordIndex = (wordIndex + 1) % words.length;
    // 获取鼠标指针的位置，分别相对于文档的左和右边缘。
    // 获取x和y的指针坐标
    var x = event.pageX,
      y = event.pageY;
    // 在鼠标的指针的位置给$i定义的span标签添加css样式
    span.css({
      "z-index": 999,
      top: y - 20,
      left: x - 16,
      position: "absolute",
      "font-weight": "bold",
      color: rand_color(),
      "user-select": "none",
    });
    // 随机颜色
    function rand_color() {
      // ~~按位取反两次，用来取整，比Math.floor()快
      return (
        "rgb(" +
        ~~(255 * Math.random()) +
        "," +
        ~~(255 * Math.random()) +
        "," +
        ~~(255 * Math.random()) +
        ")"
      );
    }
    // 在body添加这个标签
    $("body").append(span);
    // animate() 方法执行 CSS 属性集的自定义动画。
    // 该方法通过CSS样式将元素从一个状态改变为另一个状态。CSS属性值是逐渐改变的，这样就可以创建动画效果。
    span.animate(
      {
        // 将原来的位置向上移动180
        top: y - 180,
        opacity: 0,
        // 1500动画的速度
      },
      1500,
      function () {
        // 时间到了自动删除
        span.remove();
      }
    );
  });
});
