module.exports = function toReadable (number) {
  let res = ''
  const oneToNine = {0: '', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'},
        tenToNineteen = {10: 'ten',11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'},
        tens = {20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'}
  if(number === 0) {
    res = 'zero'
    return res.trimEnd()
  }
  if(number < 10) {
    res = Object.entries(oneToNine).find(([key, value]) => key == number)[1]
    return res.trimEnd()
  }
  if(number >= 10 && number < 20) {
    res = Object.entries(tenToNineteen).find(([key, value]) => key == number)[1]
    return res.trimEnd()
  }
  if(number <= 90 && number % 10 === 0) {
    res = Object.entries(tens).find(([key, value]) => key == number)[1]
    return res.trimEnd()
  }
  if(number >= 100 && number % 100 === 0 && number < 1000) {
    res = Object.entries(oneToNine).find(([key, value]) => key == number / 100)[1]  + ' hundred'
    return res.trimEnd()
  }
  if(number > 20 && number < 100) {
    let t = Math.floor(number / 10) * 10,
        o = number % 10
    res = Object.entries(tens).find(([key, value]) => key == t)[1] + ' ' + Object.entries(oneToNine).find(([key, value]) => key == o)[1]
    return res.trimEnd()
  }
  if(number > 100 && number < 1000) {
    let h = Math.floor(number / 100) * 100,
        t = number % 100 >= 20 ? Math.floor(number % 100 / 10) * 10 : number % 100,
        o = number % 100 >= 20 ? (number % 100) % 10 : 0
    console.log('t: ', t, 'o: ', o)
    res = Object.entries(oneToNine).find(([key, value]) => key == h / 100)[1]  + ' hundred' + ' ' + Object.entries(t > 9 && t < 20 ? tenToNineteen : t > 0 && t < 10 ? oneToNine : tens).find(([key, value]) => key == t)[1] + ' ' + Object.entries(oneToNine).find(([key, value]) => key == o)[1]
    return res.trimEnd()
  }
}
