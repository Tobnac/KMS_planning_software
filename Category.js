function Category(id) {
    this.id = id;
}

Category.prototype.init = function () {

};

Category.prototype.generateHTML = function () {
    var html = "";

    html += '<div id="CategoryNo' + this.id + '" class="VisualControlSortableList">';

    for (var i = 0; i < 5; i++)
    {
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
    });
};