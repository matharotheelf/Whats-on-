spec('A new event is added to the events list', function(){
  var events = new EventList('Events')
  events.addEvent('Istvaan V', '12/02/18')
  expectEquality(events.list.length, 1)
})

spec('Events are displayed in chronological order', function(){
  var events = new EventList('Events')
  events.addEvent('Istvaan V', '2019-02-01')
  events.addEvent('Istvaan IV', '2019-01-01')
  expectEquality(events.chronologicallist()[0].name,'Istvaan IV')
})
