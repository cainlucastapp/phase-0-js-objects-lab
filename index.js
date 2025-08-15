//Write your code here

const attendee = {attendeeId:"T001",name:"Alice Smith",event:"JavaScript Conference",ticketType:"VIP",ticketPrice:150.00}

//Log Name
function logAttendeeName(attendee){
  console.log(attendee.name);
}

// Log Ticket Price
function logTicketPrice(){
  console.log(attendee.ticketPrice);
}

//Update Ticket Type
function updateTicketType(attendee,ticketType){
  attendee.ticketType = ticketType;
}

//Update Ticket Price
function updateTicketPrice(attendee,ticketPrice){
  attendee.ticketPrice = ticketPrice;
}

//Remove Event Property
function removeEventProperty(attendee){
  delete attendee.event;
}

//Check In Property
function addCheckedInProperty(attendee){
  attendee.checkedIn = true;
}

//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};