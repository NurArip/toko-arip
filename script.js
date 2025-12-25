let cart = [];

document.getElementById("search").addEventListener("keyup", function () {
  let q = this.value.toLowerCase();
  document.querySelectorAll(".produk").forEach(p => {
    p.style.display = p.innerText.toLowerCase().includes(q) ? "block" : "none";
  });
});

function filterProduk(k) {
  document.querySelectorAll(".produk").forEach(p => {
    p.style.display = (k === "all" || p.classList.contains(k)) ? "block" : "none";
  });
}

function sortHarga() {
  let list = document.getElementById("produkList");
  let items = [...list.children].sort((a,b)=>a.dataset.harga-b.dataset.harga);
  items.forEach(i=>list.appendChild(i));
}

function toggleDark() {
  document.body.classList.toggle("dark");
}

function addCart(nama,harga) {
  cart.push({nama,harga});
  renderCart();
}

function renderCart() {
  let ul = document.getElementById("cartList");
  ul.innerHTML = "";
  cart.forEach(i=>{
    ul.innerHTML += `<li>${i.nama} - Rp ${i.harga}</li>`;
  });
}

function checkout() {
  let pesan = cart.map(i=>`${i.nama} Rp${i.harga}`).join("%0A");
  window.open(`https://wa.me/62NOMORKAMU?text=Order:%0A${pesan}`);
}
