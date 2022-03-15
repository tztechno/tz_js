function RegisterEvent() {
  const calID = "xxxxxxxx@gmail.com";
  var calendar = CalendarApp.getCalendarById(calID);
  var sheet=SpreadsheetApp.getActiveSheet();
  var title = sheet.getRange("A2:A10").getValues();
  var startTime = sheet.getRange("B2:B10").getValues();
  var endTime = sheet.getRange("C2:C10").getValues();
  // calendar.createEvent(title[0], new Date(startTime[0]), new Date(endTime[0]));
  // calendar.createEvent(title[1], new Date(startTime[1]), new Date(endTime[1]));
  // calendar.createEvent(title[2], new Date(startTime[2]), new Date(endTime[2]));
for (let step = 0; step < 10; step++) {
  calendar.createEvent(title[2], new Date(startTime[step]), new Date(endTime[step]));
  }
}

function delCalenderEvent() {
    const calID = "xxxxxxxx@gmail.com";
    var calendar = CalendarApp.getCalendarById(calID);
    let startDate = new Date('2022/03/14 00:00:00');
    let endDate = new Date('2022/03/16 00:00:00');;
    let myEvent = calendar.getEvents(startDate, endDate);
    myEvent[0].deleteEvent();
}

