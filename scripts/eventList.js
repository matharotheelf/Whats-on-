class EventList {
  constructor(name) {
    this.name = name
    this.list = []
  }

  addEvent(name, date) {
    event = new Event(name, date)
    this.list.unshift(event)
  }

  chronologicallist() {
    var sorted_list = this.list.sort(function(a,b){
      return new Date(b.date) - new Date(a.date)
    });

    return sorted_list.reverse()
  }

}
