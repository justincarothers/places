// var place = {
//   state: "",
//   landmark: [],
//   timeOfYe

function Place(state, timeOfYear) {
  this.state = state;
  this.landmark = [];
  this.timeOfYear = timeOfYear;
}

function Landmark(name, location, activity) {
  this.name = name;
  this.location = location;
  this.activity = activity;
}

Places.prototype.fullPlace = function() {

  return this.state + " " + this.landmark + " " + this.timeOfYear + " ";

}
// var places = new Place();

//UI
$(document).ready(function({
 //grab user inputs for Place
 var newPlace = new Place("OR", "Spring");
 var newLandMark = new Landmark

});
