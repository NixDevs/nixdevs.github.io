(function(window, document, undefined) {
    // code that should be taken care of right away
    window.onload = init;
    function init(){
      const animated = document.getElementById("tube")
      ended = false
      animated.addEventListener('animationend', () => {
            ended = true
            setTimeout(() => {
                  text = document.getElementById("tube")
                  opacity = 0
                  function increaseOpacity() {
                        opacity += 0.01; // Adjust the increment value as needed for smoother or faster animation
                        tube.style.opacity = opacity;
                        if (opacity < 1) {
                          requestAnimationFrame(increaseOpacity);
                        }
                  }
                  text.style.color = "#fff900";
                  listText = document.getElementsByClassName("glow")
                  for (let i = 0; i < listText.length; i ++) {
                        listText[i].style.textShadow = '0 0 7px #fff000, 0 0 20px #ff6c00'
                  }
                  increaseOpacity()


                  

            }, 2e3);
      });
    }
  
})(window, document, undefined);


