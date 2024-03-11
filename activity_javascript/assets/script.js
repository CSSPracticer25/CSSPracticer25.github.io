let Execute = document.getElementById("btnExecute");

Execute.addEventListener('click', function() {
    let LimitRow = document.getElementById("txtLimitRow").value;
    let LimitColumn = document.getElementById("txtLimitColumn").value;

    let Divs = "<table class='table table-bordered'>";
    for (let x = 1; x <= LimitRow; x++) {
        Divs += "<tr>";
        for (let y = 1; y <= LimitColumn; y++) {
            Divs += "<td class='text-center bg-secondary m-2 p-2' style='width: 40px; height: 40px;'>" + (x * y) + "</td>";
        }
        Divs += "</tr>";
    }
    Divs += "</table>";

    document.getElementById("div-wrapper").innerHTML = Divs;
});
