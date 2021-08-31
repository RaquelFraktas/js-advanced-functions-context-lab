/* Your Code Here */

function createEmployeeRecord(record){
  return {
      firstName: record[0],
      familyName: record[1],
      title: record[2],
      payPerHour: record[3],
      timeInEvents: [],
      timeOutEvents: [],
  }
}

function createEmployeeRecords(records){
  return records.map(record => createEmployeeRecord(record))
}

function createTimeInEvent(dateStamp){
   let splitDate= dateStamp.split(" ")
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(splitDate[1]),
        date: splitDate[0]
    })
    return this
}

function createTimeOutEvent (dateStamp){
  let [date, hour]= dateStamp.split(' ')
  this.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date,
  })
  return this
}

function hoursWorkedOnDate(soughtDate){
  let timeIn= this.timeInEvents.find(e => e.date === soughtDate)
  let timeOut= this.timeOutEvents.find(e => e.date === soughtDate)
  return (timeOut.hour-timeIn.hour)/100
}

function wagesEarnedOnDate(date){
   let hoursWorked= hoursWorkedOnDate.call(this, date)
   let wages= this.payPerHour
   return hoursWorked * wages
}

function calculatePayroll(eRecords){
  return eRecords.reduce((acc, record) => acc +allWagesFor.call(record),0)
}

function findEmployeeByFirstName(srcArray, fName){
  return srcArray.find( e => e.firstName === fName)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

