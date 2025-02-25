/**
 * scripts.js
 * Menonaktifkan klik kanan, mencegah inspect element, dan mendeteksi Developer Tools
 * @author Lynix Networks
 * @version 1.2
 */

function detectDevTools() {
    var threshold = 160; // Perbedaan ukuran jendela yang mencurigakan
    if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
        window.location.href = "https://www.lynix.id";
    }
}

// Mencegah shortcut Inspect Element dan View Source
document.addEventListener("keydown", function (e) {
    if (e.key === "F12") {
        detectDevTools(); // Langsung jalankan deteksi Developer Tools
    } else if (
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) || 
        e.ctrlKey && (e.key === "U" || e.key === "S")
    ) {
        e.preventDefault();
        e.stopPropagation(); // Mencegah event menyebar lebih lanjut
        alert("Akses ke sumber halaman dinonaktifkan!");
        return false;
    }
});

// Mencegah klik kanan
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    alert("Klik kanan dinonaktifkan!");
});

// Mencegah penggunaan "Save As" dengan menangkap event sebelum disimpan
document.addEventListener("beforeprint", function (e) {
    e.preventDefault();
    alert("Pencetakan halaman dinonaktifkan!");
    return false;
});

// Deteksi Developer Tools saat resize atau visibility berubah
(function() {
    window.addEventListener("resize", detectDevTools);
    document.addEventListener("visibilitychange", function() {
        if (document.visibilityState === "visible") {
            detectDevTools();
        }
    });
})();
