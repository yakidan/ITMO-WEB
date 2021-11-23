var before_load = new Date().getTime();
window.onload = page_load;

function page_load() {
    document.getElementById("load").innerHTML =
        "Время загрузки " + (new Date().getTime() - before_load) / 1000 + " seconds";
}