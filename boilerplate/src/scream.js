function scream(string) {
  let output = string.toUpperCase();
  output += '!!!'
  return output
}

const screamSlim = (string) => `${string.toUpperCase(string)}!`

export {scream, screamSlim as default }