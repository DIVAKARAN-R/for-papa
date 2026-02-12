// Screen Elements
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const toGifts = document.getElementById("toGifts");

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");

let noClickCount = 0;

// Utility: Switch Screens
function switchScreen(current, next) {
  current.classList.remove("active");
  setTimeout(() => {
    next.classList.add("active");
  }, 400);
}

// YES button logic
yesBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  modalContent.innerHTML = `
    <h2>I knew it… but still my heart is racing 💙</h2>
    <button onclick="goToGifts()">Continue 💙</button>
  `;
});

// NO button logic
noBtn.addEventListener("click", () => {
  noClickCount++;

  if (noClickCount < 3) {
    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
  } else {
    modal.style.display = "flex";
    modalContent.innerHTML = `
      <h2>Okay okay… before you decide 🥺</h2>
      <p>Let me explain why you should choose me 💙</p>
      <button onclick="goToPros()">Tell Me 💙</button>
    `;
  }
});

function goToPros() {
  modal.style.display = "none";
  switchScreen(screen1, screen2);
}

function goToGifts() {
  modal.style.display = "none";
  switchScreen(screen1, screen3);
}

toGifts.addEventListener("click", () => {
  switchScreen(screen2, screen3);
});

// Modal close
function closeModal() {
  modal.style.display = "none";
}

// Playlist
function openPlaylist() {
  modal.style.display = "flex";
  modalContent.innerHTML = `
    <h2>Our Song 💙</h2>
    <iframe style="border-radius:12px"
      src="https://open.spotify.com/embed/track/1VdZ0vKfR5jneCmWIUAMxK"
      width="100%" height="152" frameBorder="0"
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
    </iframe>
  `;
}

// Love Letter
function openLetter() {
  modal.style.display = "flex";
  modalContent.innerHTML = `
    <div style="background:#f8f4ec;padding:2rem;font-family:'Playfair Display',serif;">
      <h2 style="margin-bottom:1rem;">Papa 💙</h2>
      <p>From that last school day walk… to today… you became my world slowly.</p>
      <p>I may not be perfect. But one thing is true — Ena nadanthalum I can’t leave you.</p>
      <p>When you cry, I break. When you smile, I feel complete.</p>
      <p style="margin-top:1.5rem;">Forever yours,<br>Divakaran 💙</p>
    </div>
  `;
}

// Memories (basic slider placeholder)
function openMemories() {
  modal.style.display = "flex";
  modalContent.innerHTML = `
    <h2>Our Memories 💙</h2>
    <p>Photos will appear here after upload.</p>
  `;
    }
