var category = [];

function renderAll() {
    var html = "";
    for (let i = 0; i < category.length; i++) {
        if (category[i] != null) {
            html += category[i].generateHTML()
        }
    }
    return html;
}

function Category(id, title, color) {
    this.id = id;
    this.title = title;
    this.color = color;
}

Category.prototype.init = function () {

};

Category.prototype.generateHTML = function () {
    var html = "";

    html += '<div id="CategoryNo' + this.id + '" class="VisualControlSortableList" style="border-color:" + this.color>';
    html += '</div>';
    html += '<button id="categoryDeleteButton' + this.id + '" onclick="delCat(' + this.id + ' )"></button';
    html += '<input id="CatogoryAddInput' + this.id + '"></input>';
    html += '<button id="CatogoryAddButton' + this.id + '">+</button>';
    return html;
};

Category.prototype.initFunctionality = function () {
    var x = this;
    document.getElementById("CatogoryAddButton" + this.id).addEventListener("click", function () {

        document.getElementById("CategoryNo" + x.id).innerHTML += '<div class="VisualControlSortableListElement SortableListElement_Movable">' + document.getElementById("CatogoryAddInput" + x.id).value + '</div>';
    })
    $("#CategoryNo" + this.id).sortable({
        connectWith: ".VisualControlSortableList",
        update: function () {
            console.log($(this).sortable('toArray'));
        }
    });
};

function delCat(id) {
    category[id] = null;
    console.log("del");
    document.getElementById("mainContainer").innerHTML = renderAll()
}

function addCat() {
    let title = document.getElementById('catTitle').value;
    let color = document.getElementById('color').value;
    let newCat = new Category(category.length, title, color);
    category.push(newCat);
    console.log(title);
    document.getElementById("mainContainer").innerHTML += newCat.generateHTML();
    newCat.initFunctionality();
}