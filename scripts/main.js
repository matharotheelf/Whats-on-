let whatsOn = new EventList("WhatsOn")

var SubmitEvent = document.getElementById("SubmitEvent")

function openInput() {
var x = document.getElementById("PostEvent");
if (x.style.display === "none") {
x.style.display = "block";
} else {
x.style.display = "none";
}
}

function postEvent() {
  var name = document.getElementById("eventnamepost").value
  var date = document.getElementById("datepost").value
  whatsOn.addEvent(name, date)
}

SubmitEvent.onclick = function() {
  postEvent()
  openInput()
  listEvents()
  console.log(whatsOn.list)
};

function listEvents() {
  var str = '<ul style="list-style-type:none">'

  whatsOn.chronologicallist().forEach(function(event) {
    str += '<li>' + event.name + " " + event.date + '</li>';
  });

  str += '</ul>';

  document.getElementById("eventList").innerHTML = str;

}
