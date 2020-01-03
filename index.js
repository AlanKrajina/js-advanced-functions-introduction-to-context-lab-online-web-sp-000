// Your code here
function createEmployeeRecord(array){
  let obj = {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
  };
  return obj;
}

function createEmployeeRecords(twoRows){
  return twoRows.map(person => createEmployeeRecord(person))
}


function createTimeInEvent(record,date){
  let newTime = {
    type: 'TimeIn',
    hour: parseInt(date.slice(-4),10),
    date: date.slice(0,10)
  }
  record.timeInEvents.push(newTime)
  return record
}

function createTimeOutEvent(record,date){
  let newTime = {
    type: 'TimeOut',
    hour: parseInt(date.slice(-4),10),
    date: date.slice(0,10)
  }
  record.timeOutEvents.push(newTime)
  return record
}

function hoursWorkedOnDate(record,date){

//timeInEvent and timeOutEvent oduzet da se dobije brojka

  let newTime = {
    hour: parseInt(date.slice(-4),10),
  }

  // old time - record.

  let oldTime = record.timeInEvents

  return newTime - oldTime

  //return newTime.hour
}
