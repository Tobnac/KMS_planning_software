var category = [];

function renderAll() {
    var html = "";
    for (var i = 0; i < category.length; i++) {
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

    html += '<div id="CategoryNo' + this.id + '" class="VisualControlSortableList">';
    html += '</div>';
    html += '<input id="CatogoryAddInput' + this.id + '"></input>'
    html += '<button id="CatogoryAddButton' + this.id + '">+</button>'
    return html;
};

Category.prototype.initFunctionality = function () {
    var x=this;
    document.getElementById("CatogoryAddButton"+this.id).addEventListener("click",function () {

        document.getElementById("CategoryNo"+x.id).innerHTML += '<div class="VisualControlSortableListElement SortableListElement_Movable">' + document.getElementById("CatogoryAddInput"+x.id).value + '</div>';
    })
    $("#CategoryNo" + this.id).sortable({
        connectWith: ".VisualControlSortableList",
        update: function () {
            console.log($(this).sortable('toArray'));
        }
    });
};

function addCat() {
    var title = document.getElementById('catTitle').value;
    var color = document.getElementById('color').value;
    var newCat = new Category(category.length, title, color);
    category.push(newCat);
    document.getElementById("mainContainer").innerHTML += newCat.generateHTML();
    newCat.initFunctionality();
}