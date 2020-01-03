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

  let day = date.split(" ")[0]
  let time = date.split(" ")[1]
  let timeRecord = {
      type: "TimeIn",
      hour: parseInt(time, 10),
      date: day
  }
/*
  let newTime = {
    type: 'TimeIn',
    hour: time.slice(-4),
    date: time.slice(0,10)
  }
*/
  record.timeInEvents.push(timeRecord)
  return record

}
