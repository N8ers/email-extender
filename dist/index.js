"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appendEmailAddress = exports.getValueToAppend = void 0;
function getValueToAppend() { }
exports.getValueToAppend = getValueToAppend;
function appendEmailAddress(email) {
    const slicedEmail = email.split("@");
    if (slicedEmail.length !== 2) {
        throw new Error("Email address has incorrect number of '@' symbols.");
    }
    const valueToAppend = "+1";
    const appendedEmail = slicedEmail[0] + valueToAppend + "@" + slicedEmail[1];
    return appendedEmail;
}
exports.appendEmailAddress = appendEmailAddress;
