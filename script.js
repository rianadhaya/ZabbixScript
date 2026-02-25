const copyBtn = document.getElementById("copy-btn");
const btnText = document.getElementById("btn-text");
const commandText = document.getElementById("command-text");

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(commandText.innerText);

    // Success state
    copyBtn.classList.add("success");
    btnText.innerText = "Berhasil Disalin!";

    const originalSvg = copyBtn.querySelector("svg").innerHTML;
    copyBtn.querySelector("svg").innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        `;

    setTimeout(() => {
      copyBtn.classList.remove("success");
      btnText.innerText = "Salin Perintah";
      copyBtn.querySelector("svg").innerHTML = originalSvg;
    }, 2000);
  } catch (err) {
    console.error("Failed to copy: ", err);
    btnText.innerText = "Gagal Menyalin";
    setTimeout(() => {
      btnText.innerText = "Salin Perintah";
    }, 2000);
  }
});
