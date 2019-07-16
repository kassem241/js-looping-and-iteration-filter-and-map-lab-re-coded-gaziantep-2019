// Code your solution here:
function driversWithRevenueOver(drivers,revenue){
  return drivers.filter(driver => driver.revenue > revenue);
}
function driverNamesWithRevenueOver (drivers, revenue){
  return driversWithRevenueOver(drivers,revenue).map(driver => driver.name);
}
function exactMatch(drivers,obj){
  let objKey = Object.keys(obj);
  return drivers.filter(driver => driver[objKey[0]] === obj[objKey[0]]);
}
function exactMatchToList(drivers,obj){
  return exactMatch(drivers,obj).map(driver => driver.name);
}
