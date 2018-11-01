function Category(id) {
    this.id = id;
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