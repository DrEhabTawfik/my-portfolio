document.addEventListener("DOMContentLoaded", function() {
    const button = document.createElement("button");
    button.textContent = "انقر هنا";
    button.style.margin = "20px";
    button.style.padding = "10px 20px";
    button.style.backgroundColor = "#333";
    button.style.color = "#fff";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";

    button.addEventListener("click", function() {
        this.style.backgroundColor = "#ff6347"; // تغيير اللون إلى أحمر
    });

    document.body.appendChild(button);
});