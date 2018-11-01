function initAll() {
    var allLists = [];
    allLists.push(new Category(1));
    allLists.push(new Category(2));


    allLists.map(function (list) {
        document.getElementById("mainContainer").innerHTML += list.generateHTML();
    });

    allLists.map(function (list) {
        list.initFunctionality();
    });
}