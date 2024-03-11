let Execute = document.getElementById("btnExecute");

Execute.addEventListener('click', function() {
    let Limit = document.getElementById("txtLimitRow").value;
    let Limit2 = document.getElementById("txtLimitColumn").value;
    let Divs = "";
    for(var x = 1; x <= Limit; x++) {
       Divs += "";
        for(var y = 1; y <= Limit2; y++) {
            Divs += "<div class='text-center bg-secondary m-2 p-2' style='width: 40px; height: 40px;'>" + (x * y) + "</div>";
            Divs += "";
        }
       
    }

    document.getElementById("div-wrapper").innerHTML = Divs;
});
