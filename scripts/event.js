class Event {
  constructor(name, date){
    this.name = name
    this.date = date
  }

  shortenedstring() {
    return this.name.substring(0, 20)
  }
}
