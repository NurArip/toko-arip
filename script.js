// ==========================
// KERANJANG BELANJA
// ==========================
let cart = [];

// Tambah produk ke keranjang
function addCart(nama, harga) {
  harga = Number(harga); // pastikan angka
  cart.push({ nama, harga });
  renderCart();
}

// Tampilkan isi keranjang
function renderCart() {
  const list = document.getElementById("cartList");
  list.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.nama} - Rp ${item.harga.toLocaleString("id-ID")}`;
    list.appendChild(li);
  });

  updateTotal();
}

// Hitung & tampilkan total harga
function updateTotal() {
  let total = 0;
  cart.forEach(item => {
    total += item.harga;
  });

  const totalEl = document.getElementById("totalHarga");
  if (totalEl) {
    totalEl.textContent = total.toLocaleString("id-ID");
  }
}

// Checkout ke WhatsApp
function checkout() {
  if (cart.length === 0) {
    alert("Keranjang masih kosong");
    return;
  }

  let pesan = "Halo, saya mau pesan:%0A%0A";

  cart.forEach(item => {
    pesan += `- ${item.nama} : Rp ${item.harga.toLocaleString("id-ID")}%0A`;
  });

  let total = cart.reduce((sum, item) => sum + item.harga, 0);
  pesan += `%0A*Total: Rp ${total.toLocaleString("id-ID")}*`;

  // GANTI nomor WA di bawah ini
  const noWA = "62XXXXXXXXXX";

  window.open(`https://wa.me/${noWA}?text=${pesan}`, "_blank");
}
