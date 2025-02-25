/**
 * scripts.js
 * Menonaktifkan klik kanan, mencegah inspect element, dan mendeteksi Developer Tools
 * @author Lynix Networks
 * @version 1.0
 */

function detectDevTools() {
    var threshold = 160; // Perbedaan ukuran jendela yang mencurigakan
    if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
        window.location.href = "https://www.lynix.id";
    }
}

document.addEventListener("keydown", function (e) {
    if (
        e.key === "F12" || 
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) || 
        (e.ctrlKey && (e.key === "U" || e.key === "S"))
    ) {
        e.preventDefault();
        alert("Akses ke sumber halaman dinonaktifkan!");
    }
});

document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    alert("Klik kanan dinonaktifkan!");
});

(function() {
    window.addEventListener("resize", detectDevTools);
    document.addEventListener("visibilitychange", function() {
        if (document.visibilityState === "visible") {
            detectDevTools();
        }
    });
})();
