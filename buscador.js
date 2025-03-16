
function buscar() {
    let input = document.getElementById("search").value.toLowerCase();
    let items = document.querySelectorAll("#lista li");
    
    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(input)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
