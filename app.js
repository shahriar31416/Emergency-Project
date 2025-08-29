document.addEventListener("DOMContentLoaded", () => {
  const loveCountEl = document.getElementById("loveCount");
  let loveCount = parseInt(loveCountEl?.textContent || "0", 10);

  document.querySelectorAll(".card__fav").forEach(btn => {
    btn.addEventListener("click", () => {
      loveCount++;
      loveCountEl.textContent = loveCount;
    });
  });

  const coinEl = document.getElementById("coinCount");
  let coins = 100;
  if (coinEl) coinEl.textContent = coins;

  const historyList = document.getElementById("historyList");
  const clearBtn = document.getElementById("clearHistory");

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

  document.addEventListener("click", (e) => {
    const callBtn = e.target.closest(".btn--call");
    if (!callBtn) return;

    if (coins <= 0) {
      alert("❌ No coins left. You cannot make a call.");
      return;
    }

    const card = callBtn.closest(".card");
    const serviceName = card?.querySelector(".card__subtitle")?.textContent?.trim() || "Unknown Service";
    const number = card?.querySelector(".card__number")?.textContent?.trim() || "";

    coins = Math.max(0, coins - 20);
    coinEl.textContent = coins;

    alert(`📞 Calling ${serviceName} (${number})...`);

    if (historyList) addHistory(serviceName, number);
  });
});




