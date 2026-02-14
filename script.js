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
    noBtn.style.transform = \`translate(\${randomX}px, \${randomY}px)\`;
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

/////////////////////////////////////////////////////
// PLAYLIST
/////////////////////////////////////////////////////

function openPlaylist() {
  modal.style.display = "flex";
  modalContent.innerHTML = `
    <h2>Our Song 💙</h2>
    <iframe style="border-radius:12px"
      src="https://open.spotify.com/embed/track/1VdZ0vKfR5jneCmWIUAMxK"
      width="100%" height="152"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
    </iframe>
  `;
}

/////////////////////////////////////////////////////
// LOVE LETTER
/////////////////////////////////////////////////////

function openLetter() {
  modal.style.display = "flex";
  modalContent.innerHTML = `
    <div style="text-align:left; line-height:1.7;">
      <h2 style="text-align:center;">💌 To My Papa</h2>
      <p>
        From the last day of your school when I wanted to say 
        I love you but couldn’t… to every single moment 
        we walked together silently — you became my peace.
      </p>
      <p>
        When you smile, I feel complete.
        When you cry, I break.
        When I am with you… I become weak in the best way.
      </p>
      <p>
        Ena nadanthalum…
        I can't leave you.
        I can't live without you.
      </p>
      <p style="margin-top:20px; font-weight:600;">
        Forever Yours,<br>
        Divakaran 💙
      </p>
    </div>
  `;
}

/////////////////////////////////////////////////////
// MEMORIES SLIDER
/////////////////////////////////////////////////////

function openMemories() {
  modal.style.display = "flex";

  const images = [
    "images/memory1.jpg",
    "images/memory2.jpg",
    "images/memory3.jpg",
    "images/memory4.jpg",
    "images/memory5.jpg",
    "images/forever.jpg"
  ];

  let current = 0;

  modalContent.innerHTML = `
    <div style="text-align:center;">
      <img id="memoryImage"
        src="\${images[current]}"
        style="width:100%; border-radius:16px; transition:0.5s ease;">
      
      <div style="margin-top:15px; display:flex; justify-content:center; gap:20px;">
        <button onclick="prevMemory()">⬅</button>
        <button onclick="nextMemory()">➡</button>
      </div>
    </div>
  `;

  window.nextMemory = function () {
    if (current < images.length - 1) {
      current++;
      document.getElementById("memoryImage").src = images[current];
    }
  };

  window.prevMemory = function () {
    if (current > 0) {
      current--;
      document.getElementById("memoryImage").src = images[current];
    }
  };
          }
