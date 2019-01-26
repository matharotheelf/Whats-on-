let params = (new URL(document.location)).searchParams;
let name = params.get("param1");
document.getElementById("singleevent").innerHTML = name;
