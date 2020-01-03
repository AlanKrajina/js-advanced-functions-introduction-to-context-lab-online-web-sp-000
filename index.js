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


function createTimeInEvent(record,time){

  let newTime = {
    type: 'TimeOut',
    hour: time.slice(-4),
    date: time.slice(0,10)
  }

  let newObj = record.timeOutEvents.push(newTime)
  return newObj
//  return record.map(person => createEmployeeRecord(person.push(newTime)))

}
