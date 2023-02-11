export const isEmpty = function (value) {
  return (
    value === '' || value === null || value === undefined || (typeof value === 'object' && !Object.keys(value).length)
  )
}

export function isValidEmail(email) {
  return email.match(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/)
}

export function isValidPhoneNumber(phoneNumber) {
  return phoneNumber.match(/^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/)
}

export function isPrice(price) {
  if (price) return price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',') + ' 원'
}

export function getTextLength(text) {
  let str_character
  let int_char_count = 0
  let int_contents_length = text.length
  for (let k = 0; k < int_contents_length; k++) {
    str_character = text.charAt(k)
    if (escape(str_character).length > 4) {
      int_char_count += 2
    } else {
      int_char_count++
    }
  }
  return int_char_count
}
