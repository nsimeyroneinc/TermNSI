document$.subscribe(function () {
    var observer = new MutationObserver(addSort);
    var config = { childList: true };
    var outputs = document.querySelectorAll(".sqloutput");
    outputs.forEach(function (out) {
        observer.observe(out, config);
    })

})

function addSort() {
    var tables = document.querySelectorAll(".sqltable");
    tables.forEach(function (table) {
        new Tablesort(table);
    })

}

document$.subscribe(function () {
    var tables = document.querySelectorAll("article table:not([class])");
    tables.forEach(function (table) {
        new Tablesort(table);
    })
})
