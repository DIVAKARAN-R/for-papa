alert("Script Loaded Successfully");

document.addEventListener("DOMContentLoaded", function () {

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

  function switchScreen(current, next) {
    current.classList.remove("active");
    setTimeout(() => {
      next.classList.add("active");
    }, 400);
  }

  /////////////////////////////////////////////////////
  // YES BUTTON
  /////////////////////////////////////////////////////

  yesBtn.addEventListener("click", function () {
    modal.style.display = "flex";
    modalContent.innerHTML = `
      <h2>I knew it… but still my heart is racing 💙</h2>
      <button id="continueBtn">Continue 💙</button>
    `;

    document.getElementById("continueBtn").addEventListener("click", function () {
      modal.style.display = "none";
      switchScreen(screen1, screen3);
    });
  });

  /////////////////////////////////////////////////////
  // NO BUTTON
  /////////////////////////////////////////////////////

  noBtn.addEventListener("click", function () {
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
        <button id="tellMeBtn">Tell Me 💙</button>
      `;

      document.getElementById("tellMeBtn").addEventListener("click", function () {
        modal.style.display = "none";
        switchScreen(screen1, screen2);
      });
    }
  });

  /////////////////////////////////////////////////////
  // TO GIFTS BUTTON
  /////////////////////////////////////////////////////

  toGifts.addEventListener("click", function () {
    switchScreen(screen2, screen3);
  });

  /////////////////////////////////////////////////////
  // CLOSE MODAL
  /////////////////////////////////////////////////////

  window.closeModal = function () {
    modal.style.display = "none";
  };

  /////////////////////////////////////////////////////
  // PLAYLIST
  /////////////////////////////////////////////////////

  window.openPlaylist = function () {
    modal.style.display = "flex";
    modalContent.innerHTML = `
      <h2>Our Playlist 💙</h2>
      <iframe style="border-radius:16px"
        src="https://open.spotify.com/embed/playlist/5G2HdYF950irfMO7UCa9FO"
        width="100%"
        height="380"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
      </iframe>
    `;
  };

  /////////////////////////////////////////////////////
  // LOVE LETTER
  /////////////////////////////////////////////////////

  window.openLetter = function () {
    modal.style.display = "flex";
    modalContent.innerHTML = `
      <div style="text-align:left; line-height:1.7;">
        <h2 style="text-align:center;">💌 To My Papa</h2>
        <p>
          From the last day of your school when I wanted to say 
          I love you but couldn’t… you became my peace.
        </p>
        <p>
          When you smile, I feel complete.
          When you cry, I break.
          When I am with you… I become weak.
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
  };

  /////////////////////////////////////////////////////
  // MEMORIES
  /////////////////////////////////////////////////////

  window.openMemories = function () {
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
          src="${images[current]}"
          style="width:100%; border-radius:16px;">
        <div style="margin-top:15px; display:flex; justify-content:center; gap:20px;">
          <button id="prevBtn">⬅</button>
          <button id="nextBtn">➡</button>
        </div>
      </div>
    `;

    document.getElementById("nextBtn").addEventListener("click", function () {
      if (current < images.length - 1) {
        current++;
        document.getElementById("memoryImage").src = images[current];
      }
    });

    document.getElementById("prevBtn").addEventListener("click", function () {
      if (current > 0) {
        current--;
        document.getElementById("memoryImage").src = images[current];
      }
    });
  };

});
