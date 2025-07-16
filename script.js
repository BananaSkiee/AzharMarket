// Toggle sidebar keranjang
document.getElementById("cartBtn").addEventListener("click", () => {
  document.getElementById("cartSidebar").classList.toggle("active");
});

document.getElementById("closeCart").addEventListener("click", () => {
  document.getElementById("cartSidebar").classList.remove("active");
});

// Toggle mobile menu
document.querySelector(".menu-btn").addEventListener("click", () => {
  document.getElementById("mobileNav").classList.toggle("show");
});

// Tombol search
document.getElementById("searchBtn").addEventListener("click", () => {
  const keyword = document.getElementById("searchInput").value;
  alert("Cari produk: " + keyword);
});
