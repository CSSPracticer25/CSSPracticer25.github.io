//Morning
let btnConcat = document.getElementById("btn-morning");
btnConcat.addEventListener('click', function() {

    let FullName = document.getElementById("txt-fullname").value;
    document.getElementById("output").innerText = FullName;

    document.getElementById("h1-output").innerText = "Good Morning, ";
});

//Afternoon
let btnAfter = document.getElementById("btn-afternoon");
btnAfter.addEventListener('click', function() {

    let FullName = document.getElementById("txt-fullname").value;
    document.getElementById("output").innerText = FullName;

    document.getElementById("h1-output").innerText = "Good Afternoon, ";
    
});

//Evening
let btnNight = document.getElementById("btn-evening");
btnNight.addEventListener('click', function() {

    let FullName = document.getElementById("txt-fullname").value;
    document.getElementById("output").innerText = FullName;

    document.getElementById("h1-output").innerText = "Good Evening, ";
});
