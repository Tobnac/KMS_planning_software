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

    html += '<div id="CategoryNo' + this.id + '" class="VisualControlSortableList">';

    for (var i = 0; i < 5; i++) {
        html += '<div class="VisualControlSortableListElement SortableListElement_Movable">Task no. ' + i + '</div>';
    }

    html += '</div>';

    return html;
};

Category.prototype.initFunctionality = function () {
    $("#CategoryNo" + this.id).sortable({
        connectWith: ".VisualControlSortableList",
        update: function () {
            console.log($(this).sortable('toArray'));
        }
    }).disableSelection();
};

function addCat() {
    let title = document.getElementById('catTitle').value;
    let color = document.getElementById('color').value;
    let newCat = new Category(category.length, title, color);
    category.add(newCat);
    document.getElementById("mainContainer").innerHTML += newCat.generateHTML();
    newCat.initFunctionality();
}