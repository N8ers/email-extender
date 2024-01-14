export function prependPositiveOneDigitNumberWithZero(number: number): string {
  if (number < 0) {
    throw new Error("Number must be positive.")
  }

  const numberAsString = number.toString()
  if (number < 10) {
    return `0${numberAsString}`
  }
  return numberAsString
}

export function getValueToAppend(): string {
  const date = new Date()
  const year: string = date.getFullYear().toString()
  // month is zero indexed
  const month: string = prependPositiveOneDigitNumberWithZero(
    date.getMonth() + 1
  )
  const day = prependPositiveOneDigitNumberWithZero(date.getDate())
  const hour = prependPositiveOneDigitNumberWithZero(date.getHours())
  const minute = prependPositiveOneDigitNumberWithZero(date.getMinutes())
  const second = prependPositiveOneDigitNumberWithZero(date.getSeconds())
  const formattedDate = `${year}.${month}.${day}.${hour}.${minute}.${second}`

  return formattedDate
}

export function appendEmailAddress(email: string): string {
  const slicedEmail = email.split("@")
  if (slicedEmail.length !== 2) {
    throw new Error("Email address has incorrect number of '@' symbols.")
  }

  const valueToAppend = "+1"
  const appendedEmail: string =
    slicedEmail[0] + valueToAppend + "@" + slicedEmail[1]

  return appendedEmail
}
