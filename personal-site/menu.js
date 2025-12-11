let total = 0;

document.querySelectorAll(".add-btn").forEach(button => {
  button.addEventListener("click", () => {
    const price = parseFloat(button.dataset.price);
    total += price;
    document.getElementById("total").textContent = total.toFixed(2);
  });
});