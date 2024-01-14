export function getValueToAppend() {}

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
