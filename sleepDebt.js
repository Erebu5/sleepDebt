function getSleepHours(day) {
  if (day === 'Monday') {
    return 6
  } else if (day === 'Tuesday') {
    return 7
  } else if (day === 'Wednesday') {
    return 8 
  } else if (day === 'Thursday') {
    return 6
  } else if (day === 'Friday') {
    return 6
  } else if (day === 'Saturday') {
    return 6
  } else if (day === 'Sunday') {
    return 7
  }
}

function getActualSleepHours() {
  return getSleepHours('Monday') + 
  getSleepHours('Tuesday') + 
  getSleepHours('Wednesday') + 
  getSleepHours('Thursday') + 
  getSleepHours('Friday') + 
  getSleepHours('Saturday') + 
  getSleepHours('Sunday')
}

function getIdealSleepHours() {
  var idealHours = 8
  return parseInt(idealHours * 7)
}

function calculateSleepDebt() {
  var actualSleepHours = getActualSleepHours()
  var idealSleepHours = getIdealSleepHours()
  
  if (actualSleepHours === idealSleepHours) {
    console.log('You\'ve achieved the desired amount of sleep for the week.')
  }
  if (actualSleepHours > idealSleepHours) {
    console.log('You have overslept ' + (actualSleepHours - idealSleepHours) + ' hours this week.')
  }
  if (actualSleepHours < idealSleepHours) {
    console.log('You have underslept ' + (idealSleepHours - actualSleepHours) + ' hours this week.')
  }
}

calculateSleepDebt()
