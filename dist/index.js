"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appendEmailAddress = exports.getValueToAppend = exports.prependPositiveOneDigitNumberWithZero = void 0;
function prependPositiveOneDigitNumberWithZero(number) {
    if (number < 0) {
        throw new Error("Number must be positive.");
    }
    const numberAsString = number.toString();
    if (number < 10) {
        return `0${numberAsString}`;
    }
    return numberAsString;
}
exports.prependPositiveOneDigitNumberWithZero = prependPositiveOneDigitNumberWithZero;
function getValueToAppend() {
    const date = new Date();
    const year = date.getFullYear().toString();
    // month is zero indexed
    const month = prependPositiveOneDigitNumberWithZero(date.getMonth() + 1);
    const day = prependPositiveOneDigitNumberWithZero(date.getDate());
    const hour = prependPositiveOneDigitNumberWithZero(date.getHours());
    const minute = prependPositiveOneDigitNumberWithZero(date.getMinutes());
    const second = prependPositiveOneDigitNumberWithZero(date.getSeconds());
    const formattedDate = `${year}.${month}.${day}.${hour}.${minute}.${second}`;
    return formattedDate;
}
exports.getValueToAppend = getValueToAppend;
function appendEmailAddress(email) {
    const slicedEmail = email.split("@");
    if (slicedEmail.length !== 2) {
        throw new Error("Email address has incorrect number of '@' symbols.");
    }
    const valueToAppend = getValueToAppend();
    const appendedEmail = slicedEmail[0] + "+" + valueToAppend + "@" + slicedEmail[1];
    return appendedEmail;
}
exports.appendEmailAddress = appendEmailAddress;
