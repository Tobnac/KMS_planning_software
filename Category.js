const category = [];

function renderAll() {
    let html = "";
    for (let i = 0; i < category.length; i++) {
        if (category[i] != null) {
            html += category[i].generateHTML();
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
    let html = "";
    html += '<div class="category" id=CategoryDiv' + this.id + '>';
    if (this.id !== 0) {
        html += '<h3>' + this.title + '</h3>';
    }
    // list
    html += '<div id="CategoryNo' + this.id + '" class="VisualControlSortableList" style="border-color:' + this.color + '" >';
    html += '</div>';
    //delete category
    if (this.id !== 0) {
        html += `<button id="categoryDeleteButton${this.id}" onclick="delCat(${this.id} )">-</button>`;
    }
    html += "<br>";

    // add inputs
    html += '<input id="CategoryAddInput' + this.id + '">';
    html += `<select id="CategoryAddColorInput${this.id}"><option>red</option><option>yellow</option><option>green</option></select>`;
    html += '<input type="datetime-local" id="CategoryAddDateInput' + this.id + '">';
    html += '<button id="CategoryAddButton' + this.id + '">+</button>';
    html += '</div';
    return html;
};

Category.prototype.initFunctionality = function () {
    let x = this;

    document.getElementById("CategoryAddButton"+this.id).addEventListener("click",function () {
        const name = document.getElementById("CategoryAddInput" + x.id).value;
        const color = document.getElementById("CategoryAddColorInput" + x.id).value;
        const date = document.getElementById("CategoryAddDateInput" + x.id).value;
        let html = '<div id="task' + x.id + '_' + x.values.length + '" class="VisualControlSortableListElement SortableListElement_Movable" style="border-color: ' + color + '; color: white">';
        html += name + "<br>" + date + '<br>';
        html += '<button onclick="openEditPopUp(this.parentElement)">edit</button>';
        html += `<button onclick="this.parentElement.parentElement.removeChild(this.parentElement);" id="deleteBtn${x.id}_${x.values.length}">x</button></div>`;
        document.getElementById("CategoryNo"+x.id).innerHTML += html;
        x.values.push(x.values.length);

        // document.getElementById("deleteBtn" + x.id + "_" + (x.values.length-1)).addEventListener("click", function () {

        // })
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
    document.getElementById("mainContainer").removeChild(document.getElementById('CategoryDiv' + id))
}

function createCat(newCat) {
    category.push(newCat);
    document.getElementById("mainContainer").innerHTML += newCat.generateHTML();
    newCat.initFunctionality();
}

function addCat() {
    const title = document.getElementById('catTitle').value;
    const color = document.getElementById('color').value;
    const newCat = new Category(category.length, title, color);
    createCat(newCat);
}