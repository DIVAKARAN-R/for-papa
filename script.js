document.addEventListener("DOMContentLoaded", function () {

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
    }, 800);
  }

  //////////////////////////////////////////////////////
  // 💗 FULL SCREEN HEART ANIMATION
  //////////////////////////////////////////////////////

  function heartExplosion(type = "love") {
    const effect = document.createElement("div");
    effect.style.position = "fixed";
    effect.style.inset = "0";
    effect.style.display = "flex";
    effect.style.alignItems = "center";
    effect.style.justifyContent = "center";
    effect.style.fontSize = "6rem";
    effect.style.zIndex = "9999";
    effect.style.background = "rgba(0,0,0,0.7)";
    effect.style.transition = "all 1s ease";

    effect.innerHTML = type === "love" ? "💗💗💗" : "💔";

    document.body.appendChild(effect);

    setTimeout(() => {
      effect.style.opacity = "0";
      effect.style.transform = "scale(2)";
    }, 200);

    setTimeout(() => {
      effect.remove();
    }, 1000);
  }

  //////////////////////////////////////////////////////
  // YES BUTTON
  //////////////////////////////////////////////////////

  yesBtn.addEventListener("click", function () {
    heartExplosion("love");

    setTimeout(() => {
      switchScreen(screen1, screen3);
    }, 1000);
  });

  //////////////////////////////////////////////////////
  // NO BUTTON
  //////////////////////////////////////////////////////

  noBtn.addEventListener("click", function () {
    noClickCount++;

    if (noClickCount < 3) {
      const x = Math.random() * 200 - 100;
      const y = Math.random() * 200 - 100;
      noBtn.style.transform = `translate(${x}px, ${y}px)`;
    } else {
      heartExplosion("break");
      setTimeout(() => {
        switchScreen(screen1, screen2);
      }, 1000);
    }
  });

  //////////////////////////////////////////////////////
  // GO TO GIFTS
  //////////////////////////////////////////////////////

  toGifts.addEventListener("click", function () {
    switchScreen(screen2, screen3);
  });

  //////////////////////////////////////////////////////
  // GIFT CARD ROTATE EFFECT
  //////////////////////////////////////////////////////

  function createGiftSection(contentHTML) {
    const section = document.createElement("div");
    section.style.position = "fixed";
    section.style.inset = "0";
    section.style.background = "#ffe6f0";
    section.style.display = "flex";
    section.style.alignItems = "center";
    section.style.justifyContent = "center";
    section.style.flexDirection = "column";
    section.style.zIndex = "999";
    section.style.padding = "20px";
    section.style.animation = "fadeIn 0.6s ease";

    section.innerHTML = contentHTML;

    document.body.appendChild(section);
  }

  //////////////////////////////////////////////////////
  // 🎵 PLAYLIST GIFT
  //////////////////////////////////////////////////////

  window.openPlaylist = function () {
    createGiftSection(`
      <div style="background:white;padding:25px;border-radius:20px;width:100%;max-width:500px;text-align:center;">
        <h2>Our Playlist 💗</h2>
        <iframe style="border-radius:16px"
          src="https://open.spotify.com/embed/playlist/5G2HdYF950irfMO7UCa9FO"
          width="100%" height="380" frameBorder="0">
        </iframe>
        <button onclick="this.parentElement.parentElement.remove()" style="margin-top:15px;">Back</button>
      </div>
    `);
  };

  //////////////////////////////////////////////////////
  // 💌 LOVE LETTER SECTION
  //////////////////////////////////////////////////////

  window.openLetter = function () {
    createGiftSection(`
      <div style="
        background:url('https://i.imgur.com/8Km9tLL.jpg');
        background-size:cover;
        padding:40px;
        border-radius:20px;
        width:100%;
        max-width:600px;
        font-family:cursive;
        line-height:1.8;
        color:#4b2e2e;
        box-shadow:0 10px 30px rgba(0,0,0,0.3);
      ">
        <h2 style="text-align:center;">To My Papa 💌</h2>
        <p>
          From the day I couldn’t confess my love,
          my heart chose you.
        </p>
        <p>
          Your smile is my peace.
          Your tears break me.
          Without you, I am incomplete.
        </p>
        <p>
          No matter what happens,
          I am yours. Forever.
        </p>
        <p style="margin-top:30px;font-weight:bold;">
          Always loving you,<br>
          Divakaran 💙
        </p>
        <div style="text-align:center;margin-top:20px;">
          <button onclick="this.closest('div').parentElement.remove()">Back</button>
        </div>
      </div>
    `);
  };

  //////////////////////////////////////////////////////
  // 📸 MEMORIES SECTION
  //////////////////////////////////////////////////////

  window.openMemories = function () {

    const images = [
      "images/memory1.jpg",
      "images/memory2.jpg",
      "images/memory3.jpg",
      "images/memory4.jpg",
      "images/memory5.jpg"
    ];

    let current = 0;

    createGiftSection(`
      <div style="background:white;padding:25px;border-radius:20px;width:100%;max-width:500px;text-align:center;">
        <img id="memImg" src="${images[0]}" style="width:100%;border-radius:16px;">
        <div style="margin-top:15px;">
          <button id="prev">⬅</button>
          <button id="next">➡</button>
        </div>
        <button id="surpriseBtn" style="margin-top:15px;">Surprise 💝</button>
        <button onclick="this.parentElement.parentElement.remove()" style="margin-top:10px;">Back</button>
      </div>
    `);

    setTimeout(() => {
      document.getElementById("next").onclick = function () {
        if (current < images.length - 1) {
          current++;
          document.getElementById("memImg").src = images[current];
        }
      };

      document.getElementById("prev").onclick = function () {
        if (current > 0) {
          current--;
          document.getElementById("memImg").src = images[current];
        }
      };

      document.getElementById("surpriseBtn").onclick = function () {
        heartExplosion("love");

        setTimeout(() => {
          document.getElementById("memImg").src = "images/forever.jpg";
          alert("Will you marry me papa? 💍💗");
        }, 1000);
      };

    }, 100);
  };

});
