const regexName = /^[a-zA-Zçéèàëïùôû]{3,15}$/;
const regexHp = /^[0-9]{1,3}$/;
const regexCp = /^[0-9]{1,2}$/;
const regexImage =
    /^https:\/\/assets\.pokemon\.com\/assets\/cms2\/img\/pokedex\/detail\/[0-9]{3}\.png$/;
const regexPassword = /^.{4,}$/
module.exports = {
    regexName, regexHp, regexCp, regexImage, regexPassword
}