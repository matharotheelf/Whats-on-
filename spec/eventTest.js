spec('Events are stored with a name', function(){
  massacre = new Event('Istvaan V')
  expectEquality(massacre.name, 'Istvaan V')
})


spec('Events are stored with a date', function(){
  massacre = new Event('Istvaan III', '12/02/2018')
  expectEquality(massacre.date, '12/02/2018')
})

spec('Shortens string', function(){
  massacre = new Event('abcdefghijklmnopqrstu','12/02/2018')
  expectEquality(massacre.shortenedstring(),'abcdefghijklmnopqrst')
})
