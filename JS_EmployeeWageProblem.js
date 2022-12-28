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