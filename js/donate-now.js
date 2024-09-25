document
  .getElementById("noakhali-donation-btn")
  .addEventListener("click", function () {
    const noakhaliDonation = getInputValueById("input-noakhali-donation");
    const totalNoakhaliDonation = getTextValueById("total-noakhali-donation");
    const balance = getTextValueById("total-balance");

    if (isNaN(noakhaliDonation) || noakhaliDonation <= 0) {
      alert("failed to make donation: invalid input");
      document.getElementById("input-noakhali-donation").value = "";

      const modalClose = document.getElementById("my_modal_1-close");
      modalClose.click();
      return;
    } else if (noakhaliDonation > balance) {
      alert("Insufficient balance, please donate a lower amount.");
      document.getElementById("input-noakhali-donation").value = "";

      const modalClose = document.getElementById("my_modal_1-close");
      modalClose.click();
      return;
    } else {
      const newTotalNoakhaliDonation = totalNoakhaliDonation + noakhaliDonation;
      document.getElementById("total-noakhali-donation").innerText =
        newTotalNoakhaliDonation;

      const newBalance = balance - noakhaliDonation;
      document.getElementById("total-balance").innerText = newBalance;

      document.getElementById("input-noakhali-donation").value = "";

      const time = new Date();
      const donationTime = time.toLocaleString();

      const history = document.createElement("div");
      history.className = "card bg-transparent border-[1px] w-11/12 mb-5";
      history.innerHTML = `   <div class="card-body">
                <h3 class="text-lg text-[#111111] font-extrabold leading-none mb-2">
                ${noakhaliDonation} Taka is donated at Noakhali, Bangladesh
                </h3>
                <p class="text-base text-[#111111]/70 font-light leading-none">
                Donation Time: ${donationTime}
                </p>
                </div>`;

      document.getElementById("history-container").appendChild(history);
      return;
    }
  });

// noakhali end

document
  .getElementById("feni-donation-btn")
  .addEventListener("click", function () {
    const feniDonation = getInputValueById("input-feni-donation");
    const totalFeniDonation = getTextValueById("total-feni-donation");
    const balance = getTextValueById("total-balance");

    if (isNaN(feniDonation) || feniDonation <= 0) {
      alert("failed to make donation: invalid input");
      document.getElementById("input-feni-donation").value = "";

      const modalClose = document.getElementById("my_modal_2-close");
      modalClose.click();
      return;
    } else if (feniDonation > balance) {
      alert("Insufficient balance, please donate a lower amount.");
      document.getElementById("input-feni-donation").value = "";

      const modalClose = document.getElementById("my_modal_2-close");
      modalClose.click();
      return;
    } else {
      const newTotalFeniDonation = totalFeniDonation + feniDonation;
      document.getElementById("total-feni-donation").innerText =
        newTotalFeniDonation;

      const newBalance = balance - feniDonation;
      document.getElementById("total-balance").innerText = newBalance;

      document.getElementById("input-feni-donation").value = "";

      const time = new Date();
      const donationTime = time.toLocaleString();

      const history = document.createElement("div");
      history.className = "card bg-transparent border-[1px] w-11/12 mb-5";
      history.innerHTML = `   <div class="card-body">
                <h3 class="text-lg text-[#111111] font-extrabold leading-none mb-2">
                ${feniDonation} Taka is donated at Feni, Bangladesh
                </h3>
                <p class="text-base text-[#111111]/70 font-light leading-none">
                Donation Time: ${donationTime}
                </p>
                </div>`;

      document.getElementById("history-container").appendChild(history);
      return;
    }
  });

// feni end

document
  .getElementById("quota-donation-btn")
  .addEventListener("click", function () {
    const quotaDonation = getInputValueById("input-quota-donation");
    const totalQuotaDonation = getTextValueById("total-quota-donation");
    const balance = getTextValueById("total-balance");

    if (isNaN(quotaDonation) || quotaDonation <= 0) {
      alert("failed to make donation: invalid input");
      document.getElementById("input-quota-donation").value = "";

      const modalClose = document.getElementById("my_modal_3-close");
      modalClose.click();
      return;
    } else if (quotaDonation > balance) {
      alert("Insufficient balance, please donate a lower amount.");
      document.getElementById("input-quota-donation").value = "";

      const modalClose = document.getElementById("my_modal_3-close");
      modalClose.click();
      return;
    } else {
      const newTotalQuotaDonation = totalQuotaDonation + quotaDonation;
      document.getElementById("total-quota-donation").innerText =
        newTotalQuotaDonation;

      const newBalance = balance - quotaDonation;
      document.getElementById("total-balance").innerText = newBalance;

      document.getElementById("input-quota-donation").value = "";

      const time = new Date();
      const donationTime = time.toLocaleString();

      const history = document.createElement("div");
      history.className = "card bg-transparent border-[1px] w-11/12 mb-5";
      history.innerHTML = `   <div class="card-body">
                <h3 class="text-lg text-[#111111] font-extrabold leading-none mb-2">
                ${quotaDonation} Taka is donated as Aid For Injured personnel, Quota Movement 
                </h3>
                <p class="text-base text-[#111111]/70 font-light leading-none">
                Donation Time: ${donationTime}
                </p>
                </div>`;

      document.getElementById("history-container").appendChild(history);
      return;
    }
  });
