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
    this.values = [];
}

Category.prototype.init = function () {

};

Category.prototype.generateHTML = function () {
    var html = "";

    // list
    html += '<div id="CategoryNo' + this.id + '" class="VisualControlSortableList">';
    html += '</div>';
    html += '<button id="categoryDeleteButton' + this.id + '" onclick="delCat(' + this.id + ' )"></button';
    html += "<br>";

    // add inputs
    html += '<input id="CatogoryAddInput' + this.id + '">';
    html += '<select id="CatogoryAddColorInput'+this.id+'"><option>red</option><option>yellow</option><option>green</option></select>';
    html += '<input type="datetime-local" id="CatogoryAddDateInput' + this.id + '">';
    html += '<button id="CatogoryAddButton' + this.id + '">+</button>';

    return html;
};

Category.prototype.initFunctionality = function () {
    var x=this;

    document.getElementById("CatogoryAddButton"+this.id).addEventListener("click",function () {
        var name = document.getElementById("CatogoryAddInput"+x.id).value;
        var color = document.getElementById("CatogoryAddColorInput"+x.id).value;
        var date = document.getElementById("CatogoryAddDateInput"+x.id).value;
        var html = '<div class="VisualControlSortableListElement SortableListElement_Movable" style="border-color: '+color+'; color: white">';
        html += name + "<br>" + date + '<button id="deleteBtn'+x.id + '_' + x.value.length + '">x</button></div>';
        document.getElementById("CategoryNo"+x.id).innerHTML += html;
        x.values.push(x.values.length);


    });

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
    var title = document.getElementById('catTitle').value;
    var color = document.getElementById('color').value;
    var newCat = new Category(category.length, title, color);
    category.push(newCat);
    document.getElementById("mainContainer").innerHTML += newCat.generateHTML();
    newCat.initFunctionality();
}