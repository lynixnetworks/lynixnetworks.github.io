/**
 * scripts.js
  * @author Lynix Networks
 * @version 1.3
 */

 document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && (e.key === "u" || e.key === "s")) {
      e.preventDefault();
      alert("Akses ke sumber halaman dinonaktifkan!");
    }
  });
  
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    alert("Klik kanan dinonaktifkan!");
  });
  
  (function() {
    function detectDevTools() {
        var threshold = 160;
        if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
            window.location.href = "https://www.lynix.id";
        }
    }
  
    window.addEventListener("resize", detectDevTools);
  
    document.addEventListener("visibilitychange", function() {
        if (document.visibilityState === "visible") {
            detectDevTools();
        }
    });
  
    document.addEventListener("keydown", function(e) {
        if (e.key === "F12" || (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) || (e.ctrlKey && e.key === "U")) {
            e.preventDefault();
            window.location.href = "https://www.lynix.id";
        }
    });
  })();
