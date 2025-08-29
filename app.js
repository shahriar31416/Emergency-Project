document.addEventListener("DOMContentLoaded", () => {
  const loveCountEl = document.getElementById("loveCount");
  const coinEl = document.getElementById("coinCount");
  const copyCountEl = document.getElementById("copyCount");
  const historyList = document.getElementById("historyList");
  const clearBtn = document.getElementById("clearHistory");

  let loveCount = parseInt(loveCountEl?.textContent || "0", 10);
  let coins = 100;
  let copyCount = 0;

  if (coinEl) coinEl.textContent = coins;
  if (copyCountEl) copyCountEl.textContent = copyCount;

  document.querySelectorAll(".card__fav").forEach(btn => {
    btn.addEventListener("click", () => {
      loveCount++;
      loveCountEl.textContent = loveCount;
    });
  });

  function addHistory(service, number) {
    const li = document.createElement("li");
    li.className = "history__item";
    li.innerHTML = `
      <div class="history__name">${service}</div>
      <div class="history__small">${number}</div>
      <time class="history__time">${new Date().toLocaleTimeString()}</time>
    `;
    historyList.prepend(li);
  }

  clearBtn?.addEventListener("click", () => {
    historyList.innerHTML = "";
  });

  async function handleCopy(copyBtn){
    const card = copyBtn.closest(".card");
    const number = card?.querySelector(".card__number")?.textContent?.trim() || "";
    if (!number || copyBtn.dataset.copying === "1") return;

    try{
      await navigator.clipboard.writeText(number);
    }catch{
      alert("❌ Copy not supported in this browser.");
      return;
    }

    copyCount++;
    copyCountEl.textContent = copyCount;

    const original = copyBtn.innerHTML;
    copyBtn.dataset.copying = "1";
    copyBtn.disabled = true;
    copyBtn.classList.add("is-copied");
    copyBtn.innerHTML = "✓ Copied";

    setTimeout(() => {
      copyBtn.innerHTML = original;
      copyBtn.classList.remove("is-copied");
      copyBtn.disabled = false;
      copyBtn.dataset.copying = "0";
    }, 1200);
  }

  document.addEventListener("click", (e) => {
    const callBtn = e.target.closest(".btn--call");
    if (callBtn) {
      if (coins <= 0) {
        alert(" No coins left. You cannot make a call.");
        return;
      }
      const card = callBtn.closest(".card");
      const serviceName = card?.querySelector(".card__subtitle")?.textContent?.trim() || "Unknown Service";
      const number = card?.querySelector(".card__number")?.textContent?.trim() || "";
      coins = Math.max(0, coins - 20);
      coinEl.textContent = coins;
      alert(`📞 Calling ${serviceName} (${number})...`);
      if (historyList) addHistory(serviceName, number);
      return;
    }

    const copyBtn = e.target.closest(".btn--ghost");
    if (copyBtn) handleCopy(copyBtn);
  });
});





