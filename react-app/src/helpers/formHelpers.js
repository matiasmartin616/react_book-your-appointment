export function getFormData (form) {
  const inputs = form.querySelectorAll('input')
  const data = {}

  for (const input of inputs) {
    if (!input.id) { throw new Error(`Id not found in element \n${input.outerHTML}`) }
    data[input.id] = input.value
  }

  return data
}
