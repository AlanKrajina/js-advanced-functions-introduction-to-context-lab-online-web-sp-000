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

function createEmployeeRecords(record){
  let employeeRecords = []
  let som = employeeRecords.concat(record)
  som.flat(); 
  return som.map(person => person.firstName)
}
