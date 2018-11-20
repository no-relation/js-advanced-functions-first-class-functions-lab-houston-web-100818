const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
};

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(drivers.length-2)
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(rate){
    return function(fare){ return fare * rate};
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(drivers, driverFnctn){
    return driverFnctn(drivers);
};