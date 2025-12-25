let cart = [];
let total = 0;

// ================= CART =================
function addCart(nama, harga) {
  cart.push({ nama, harga });
  total += harga;
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById("cartList");
  const totalHarga = document.getElementById("totalHarga");

  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.nama} - Rp ${item.harga.toLocaleString("id-ID")}
      <button onclick="removeItem(${index})">❌</button>
    `;
    cartList.appendChild(li);
  });

  totalHarga.textContent = total.toLocaleString("id-ID");
}

function removeItem(index) {
  total -= cart[index].harga;
  cart.splice(index, 1);
  renderCart();
}

// ================= CHECKOUT =================
function checkout() {
  if (cart.length === 0) {
    alert("Keranjang masih kosong");
    return;
  }

  let pesan = "Halo, saya mau order:%0A";
  cart.forEach(item => {
    pesan += `- ${item.nama} (Rp ${item.harga})%0A`;
  });
  pesan += `%0ATotal: Rp ${total}`;

  window.open(`https://wa.me/62NOMORKAMU?text=${pesan}`, "_blank");
}

// ================= FILTER =================
function filterProduk(kategori) {
  const produk = document.querySelectorAll(".produk");
  produk.forEach(p => {
    if (kategori === "all" || p.classList.contains(kategori)) {
      p.style.display = "block";
    } else {
      p.style.display = "none";
    }
  });
}

// ================= SORT =================
function sortHarga() {
  const container = document.getElementById("produkList");
  const items = Array.from(container.children);

  items.sort((a, b) =>
    a.dataset.harga - b.dataset.harga
  );

  items.forEach(item => container.appendChild(item));
}

// ================= DARK MODE =================
function toggleDark() {
  document.body.classList.toggle("dark");
}

// ================= SEARCH =================
document.getElementById("search").addEventListener("keyup", function () {
  const keyword = this.value.toLowerCase();
  document.querySelectorAll(".produk").forEach(p => {
    p.style.display = p.innerText.toLowerCase().includes(keyword)
      ? "block"
      : "none";
  });
});
