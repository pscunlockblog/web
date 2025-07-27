<script>
//<![CDATA[      
!function(){
  function a(e){
    if (e.parentNode.parentNode.className.indexOf("enabled") != -1) {
      e.parentNode.parentNode.className = "single disabled";
      e.value = "Hide Answer";
    } else {
      e.parentNode.parentNode.className = "single enabled";
      e.value = "Show Answer";
    }
  }

  !function() {
    var e = document.getElementsByClassName("toggle-answer");
    for (var n = 0; n < e.length; n++) {
      if (e.hasOwnProperty(n)) {
        e[n].addEventListener("click", a.bind(this, e[n]));
      }
    }
  }()
}();
//]]>
</script>
