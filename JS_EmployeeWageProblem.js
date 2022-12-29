//Welcome to Employee Wage Problem

//UC1
const Is_Present = 0;
let empCheck = Math.floor(Math.random() * 10 % 2);
if(empCheck == Is_Present)
{
    console.log("UC1 - Employee is Absent");
}
else
{
    console.log("UC1 - Employee is Present");
}

//UC2
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empHours = 0;
empCheck = Math.floor(Math.random() * 10 % 3);
switch (empCheck)
{
    case IS_PART_TIME:
        empHours = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHours = FULL_TIME_HOURS;
        break;
    default:
        empHours = 0;
}

let empWage = empHours * WAGE_PER_HOUR;
console.log("UC2 - Employee Wage: " + empWage);

//UC3
function getWorkingHours(empCheck)
{
    switch (empCheck)
    {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
empHours = 0;
empCheck = Math.floor(Math.random() * 10 % 3);
empHours = getWorkingHours(empCheck);
empWage = empHours * WAGE_PER_HOUR;
console.log("UC3 - Employee Wage: " + empWage);

//UC4
const NUM_OF_WORKING_DAYS = 20;
empHours = 0;
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++)
{
    empCheck = Math.floor(Math.random() * 10 % 3);
    empHours += getWorkingHours(empCheck);
}
empWage = empHours * WAGE_PER_HOUR;
console.log("UC4 - Total Hours: " + empHours + ", Employee Wage: " + empWage);

//UC5
const MAX_HRS_IN_MONTH = 160;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10 % 3);
    totalEmpHrs += getWorkingHours(empCheck); 
}
empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("UC5 - Total Days: " + totalWorkingDays + ", Total Hours: " + totalEmpHrs + ", Employee Wage: " + empWage);

//UC6
function calcDailyWage(empHours)
{
    return empHours * WAGE_PER_HOUR;
}

totalEmpHrs = 0;
totalWorkingDays = 0;
let empDailyWageArr = new Array();

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10 % 3);
    empHours = getWorkingHours(empCheck);
    totalEmpHrs += empHours;
    empDailyWageArr.push(calcDailyWage(empHours));
}
empWage = calcDailyWage(totalEmpHrs);
console.log("UC6 - Total Days: " + totalWorkingDays + ", Total Hours: " + totalEmpHrs + ", Employee Wage: " + empWage);

//UC7a
let totalEmpWage = 0;
function sum(dailyWage)
{
    totalEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7a - Total Days: " + totalWorkingDays + ", Total Hours: " + totalEmpHrs + ", Employee Wage: " + totalEmpWage);

function totalWages(totalWage, dailyWage)
{
    return totalWage + dailyWage;
}
console.log("UC7a - Employee Wage with reduce: " + empDailyWageArr.reduce(totalWages, 0));

//UC7b
let dailyCntr = 0;
function mapDayWithWage(dailyWage)
{
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7b - Daily Wage Map");
console.log(mapDayWithWageArr);

//UC7c
function fullTimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("UC7c - Daily Wage Filter When FullTime Wage Earned");
console.log(fullDayWageArr);

//UC7d
function findFullTimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC7d - First Time FullTime Wage was earned on Day: " + mapDayWithWageArr.find(findFullTimeWage));

//UC7e
function isAllFullTimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC7e - Check All Element have FullTime Wage: " + fullDayWageArr.every(isAllFullTimeWage));

//UC7f
function isAnyPartTimeWage(dailyWage)
{
    return dailyWage.includes("80");
}
console.log("UC7f - Check If Any Part Time Wage: " + mapDayWithWageArr.some(isAllFullTimeWage));

//UC7g
function totalDaysWorked(numOfDays, dailyWage)
{
    if (dailyWage > 0)
    {
        return numOfDays+1;
    }
    return numOfDays;
}
console.log("UC7g - Number of Days Employee Worked: " + empDailyWageArr.reduce(totalDaysWorked, 0));

//UC8
let WageDayMap = new Map();
console.log("UC8 - Day Daily Wage")
for(i = 1; i <= 20; i++)
{
  WageDayMap.set(i, empDailyWageArr[i-1])
}
for(const [keys,values] of WageDayMap){
  console.log("  Day = " + keys + " " + ", DailyWage = " + values)
}
let totalWage = 0;
WageDayMap.forEach(value=> totalWage += value)
console.log("UC8 - Total wage by Map is: " + totalWage);