QUnit.test("hello test", function (assert) {
    "use strict";
    assert.ok(1 === 1, "Passed!");
});

QUnit.test("add Cat test", function (assert) {
    "use strict";
    const catName = "testCat";
    document.getElementById("catTitle").value = catName;
    document.getElementById("addCatBtn").click();
    const curCountOfCats = document.getElementsByClassName("category").length;
    const value = document.getElementById("CategoryDiv" + (curCountOfCats - 1)).firstElementChild.innerHTML;
    assert.ok(value === catName);
});

QUnit.test("remove Cat test", function (assert) {
    "use strict";
    const beforeCountOfCats = document.getElementsByClassName("category").length;
    document.getElementById("categoryDeleteButton" + (beforeCountOfCats - 1)).click();
    const afterCountOfCats = document.getElementsByClassName("category").length;
    assert.ok(beforeCountOfCats - 1 === afterCountOfCats);
});