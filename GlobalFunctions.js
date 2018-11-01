function initAll() {
    localStorage.setItem("admin", "admin");
    var category1 = new Category(0, "default");
    createCat(category1);
}