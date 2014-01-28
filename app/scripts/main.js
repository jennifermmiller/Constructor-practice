function makeNewDie (sides, multiplier, color) {
  this.numberOfSides = sides || 6;
  this.sideMultiplier = multiplier || 1;
  this.color = color || 'white';
  
  this.roll = function(numberOfTimes) {
    for(var i = 1; i <= numberOfTimes; i++){
      var roll = (Math.floor(Math.random()*this.numberOfSides+1)) * this.sideMultiplier;
      console.log("On roll " + i + ", the " + this.color + " die rolled "+ roll +".");   
    }
  }
};    

function WhitePageEntry(name, address, number) {
  this.name = name || 'need name';
  this.address = address || 'homeless???';
  this.number = number || '(999) 999-9999';
  this.public = true;
  
  this.getPhone = function () {
    if (this.public == true) {
      console.log(this.name + "'s phone number is " + this.number + ".");
    } else{
      console.log("I'm sorry, that information is private.");
    }
  };
  
  this.getAddress = function(){
    if (this.public == true) {
      console.log(this.name + " lives at " + this.address);
    } else{
      console.log("I'm sorry, that information is private.");
    }
  }
};

function LessonHorse(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
  this.occupation = 'lesson horse';
  this.level = 'beginner';
  this.shoesNeeded = 2;
  this.jumps = false;
  
  this.canJump = function(){
    this.jumps = true;
    this.level = 'intermediate';
    console.log("Whee! " +this.name +" thinks jumping is fun!");
  };
  
  this.blacksmith = function() {
    if (this.shoesNeeded > 0){
      console.log(this.name + " needs to see a blacksmith every six weeks.")
    } else {
      console.log(this.name + " only needs to see a blacksmith every eight weeks.")
    }
  }
};


//Messing around with a lorger constructor...Questions: passing parameters to methods then calling them with another method after being ran.
//                                                      A way to make console.log appear when method was called on its own but not when its called by another method?
function TrainTrip (options) {
  options = options || {};
  
  this.railLine = options.railLine || 'train';
  this.numberOfEngines = options.numberOfEngines || 1;
  this.fuelCapacity = options.fuelCapacity || 1000;
  this.employees = options.employees || 3;
  this.employeeWage = options.employeeWage || 10;
  this.range = options.range || 3000;
  this.milesToDestination = options.milesToDestination || 400;
  this.maxCapacity = options.maxCapacity || 50;
  this.speed = options.speed || 70;
  this.numberOfStops = options.numberOfStops || 2;
  this.lengthOfStop = options.lengthOfStop || .5;
  this.fuelByGal = options.fuelByGal || 4; 
  this.maintainance = options.maintainance || 0;
  this.markup = options.markup || 0.25;
  
  this.fuelEffiency = function(){
    var fuelEff = (this.range/this.fuelCapacity) / this.numberOfEngines;
    //console.log("This train gets " + Math.round(fuelEff) + " MPG.");
    return fuelEff;
  };
  
  this.lengthOfTrip = function() {
    var trip = (this.milesToDestination/this.speed) + (this.numberOfStops* this.lengthOfStop);
    //console.log('Your trip is estimated to take ' + Math.round(trip) + ' hours.');
    return trip;
  };
  
  this.trainOverhead = function(){
    var fuelCost = (this.milesToDestination/this.fuelEffiency()) * this.fuelByGal;
    var employeeCost = this.employees * this.employeeWage * this.lengthOfTrip();
    var totalOverhead = fuelCost + employeeCost + this.maintainance;
    //console.log('The cost to ' + this.railLine + ' will be $' + Math.round(totalOverhead) + " for this trip.");
    return totalOverhead;
  };
  
  this.pricePerPerson = function () {
    var price = ((this.trainOverhead()/this.maxCapacity) * this.markup) * 100;
    //console.log('The estimated cost per person on this trip is $' + Math.round(price) +'.');
    return price;
  };
  
  this.comparePrice = function(competitor){
    if (this.pricePerPerson() > competitor.pricePerPerson()){
      console.log('Unfortunately,' + competitor.railLine + ' has the cheaper ticket.');
    } else {
      console.log('Good choice! ' + this.railLine + ' has the cheaper ticket.');
    }
  }
};

var testTrain = {
  railLine : 'Amtrak',
  fuelCapacity: 2000,
  range: 5000,
  milesToDestination: 900,
  numberOfStops: 4,
  maxCapacity: 300
}

var fancyTrain = {
  railLine: 'fancy Pants',
  fuelCapacity: 3000,
  employees: 5,
  employeeWage: 18,
  milesToDestination: 840,
  maxCapacity: 500,
  numberOfStops: 5,
  maintainance: 1500,
  fuelByGal: 2.5
}
