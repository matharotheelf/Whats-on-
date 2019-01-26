if(localStorage.getItem('eventlist')) {
  eventList = JSON.parse(localStorage.getItem('eventlist'));
}
else {
  eventList = []
}

whatsOn = new EventList("WhatsOn");

eventList.forEach(function(element){
  whatsOn.addEvent(element[0],element[1])
})

listEvents()

var SubmitEvent = document.getElementById("SubmitEvent");
var weatherButton=document.getElementById("Seeweather");

function openInput() {
var x = document.getElementById("PostEvent");
if (x.style.display === "none") {
x.style.display = "block";
} else {
x.style.display = "none";
}
}

function postEvent() {
  var name = document.getElementById("eventnamepost").value;
  var date = document.getElementById("datepost").value;
  whatsOn.addEvent(name, date);
  eventList.push([name, date]);
  localStorage.setItem('eventlist', JSON.stringify(eventList));
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
    str += '<li>' + '<a href=file:///Users/admin/projects/whats-on-/singleevent.html?param1=' + event.name + '>' + event.shortenedstring()+ '</a>'+ " " + event.date + '</li>';
  });

  str += '</ul>';

  document.getElementById("eventList").innerHTML = str;

}

weatherButton.addEventListener('click', function () {
   var city = document.getElementById("cityname");
   var weatherDiv = document.getElementById("weatherDiv");
   var request = new XMLHttpRequest();
   var mykey = config.MY_KEY;
   request.open('GET', "http://api.openweathermap.org'/data/2.5/weather?q=" + city.value + "&APPID=" + mykey, true);
   request.onload = function () {
     var result = JSON.parse(this.response);
     weatherDiv.innerText = `${result.weather[0].description} ${result.main.temp_max - 273.15}`
   }
   request.send();
 })
