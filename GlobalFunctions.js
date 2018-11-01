function initAll() {
    var newList = new Category(1);
    document.getElementById("mainContainer").innerHTML += newList.generateHTML();
    newList.initFunctionality();

    newList = new Category(2);
    document.getElementById("mainContainer").innerHTML += newList.generateHTML();
    newList.initFunctionality();
}