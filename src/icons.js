export function asset(path) {
  const file = String(path).replace(/^\//, '')
  return `${import.meta.env.BASE_URL}${file}`
}

export const LOGO_PNG = asset('logo.png')

export const LORD = {
  home: asset('lord/home.json'),
  shop: asset('lord/shop.json'),
  plant: asset('lord/plant.json'),
  person: asset('lord/person.json'),
  phone: asset('lord/phone.json'),
  mail: asset('lord/mail.json'),
  pin: asset('lord/pin.json'),
  note: asset('lord/note.json'),
  send: asset('lord/send.json'),
  party: asset('lord/party.json'),
  globe: asset('lord/globe.json'),
}
