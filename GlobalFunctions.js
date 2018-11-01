function initAll() {
    var newList = new Category(1, "One");
    document.getElementById("mainContainer").innerHTML += newList.generateHTML();
    newList.initFunctionality();

    newList = new Category(2, "Two");
    document.getElementById("mainContainer").innerHTML += newList.generateHTML();
    newList.initFunctionality();
}