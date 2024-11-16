function loadHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}
document.addEventListener("DOMContentLoaded", () => {
    loadHTML("header", "/html/header.html");
    loadHTML("footer", "/html/footer.html");
});