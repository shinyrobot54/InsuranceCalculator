/** @author Meyerson, Gabe (gabemeyerson@gmail.com)
 *  @version 0.0.1
 *  @summary Calculates insurance pricing (project 2)
 *  @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let continueYesNo;
let policyNum, birthyear, premiumDueDate, accidents, age, agePrice, accidentPrice, premium;
let lastName, firstName;

function main() {
    process.stdout.write('\x1Bc'); //clear screen
    if (continueYesNo == null) {
        setContinueYesNo();
    }
    if (continueYesNo === 1) {
        setPolicyNum();
        setFirstName();
        setLastName();
        setBirthYear();
        setPremiumDueDate();
        setAccidents();
        setAge();
        setAgePrice();
        setAccidentsPrice();
        setPremium();
        printInfo();
        setContinueYesNo();
        return main();
    }
    if (continueYesNo === 0){
        printBye();
    }
}

main();

function setContinueYesNo() {
    if (continueYesNo === 1){
        continueYesNo = Number(PROMPT.question('\n Would you like to continue? [Yes = 1 No = 0] \n '));
    } else {
        continueYesNo = 1
    }
}

function setPolicyNum () {
    policyNum = Math.floor((Math.random() * 1000) + 1);
}

function setFirstName() {
    firstName = PROMPT.question('\n Please enter your first name \n');
}
function setLastName() {
    lastName = PROMPT.question('\n Please enter your last name \n');
}

function setBirthYear() {
    birthyear = PROMPT.question('\n Please enter your birthyear [yyyy] \n');
}
function setPremiumDueDate() {
    premiumDueDate = PROMPT.question('\n Please enter you premium due date [mm/dd/yyyy] \n');
}

function setAccidents() {
    accidents = PROMPT.question('\n Please enter the number of driving accidents you have had in the last three years \n');
}

function setAge () {
    age = Number(2016 - birthyear);
}

function setAgePrice() {
    const BASEPRICE = 100, SIXTEENTOTWENTYNINE = 20, THIRTYTOFOURTYFOUR = 10, SIXTYANDUP = 30;
    const AGEFIFTEEN = 15, AGETHIRTY = 30, AGEFOURTYFIVE = 45, AGESIXTY = 60;
    if (age > AGEFIFTEEN && age < AGETHIRTY){
        agePrice = Number(BASEPRICE + SIXTEENTOTWENTYNINE);
    }
    else if (age >= AGETHIRTY && age < AGEFOURTYFIVE){
        agePrice = Number(BASEPRICE + THIRTYTOFOURTYFOUR);
    }
    else if (age >= AGESIXTY){
        agePrice = Number(BASEPRICE + SIXTYANDUP);
    }
}

function setAccidentsPrice() {
    const PRICEPERACCIDENT = 50;
    accidentPrice = Number(accidents * PRICEPERACCIDENT);
}

function setPremium(){
    premium = Number(agePrice + accidentPrice);
}

function printInfo() {
    console.log('\nHi ' + firstName + ' ' + lastName + '!\nPolicy Number: ' + policyNum + '\nPremium: ' + premium + '\nPremium Due Date: ' + premiumDueDate + '');
}

function printBye() {
    console.log('\n Have a good day!')
}