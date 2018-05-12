// code solution here
class President {
  constructor(name, politicalParty, yearsInOffice, homeState) {
    this.name = name;
    this.politicalParty = politicalParty;
    this.yearsInOffice = yearsInOffice;
    this.homeState = homeState
    this.veto = function() { return "NO!" }
    this.passBill = function() {return "You can do that!" }
    this.doCharity = function() { return "I like to help people."}
    this.conductPressInterview = function() {  return "I am proud to be an American."}
    this.sayHi = function() { return "Hi, my name is Lyndon B Johnson. I am from Texas. I represent the Democrats, and was in office 1963-1969." }
  }
}
