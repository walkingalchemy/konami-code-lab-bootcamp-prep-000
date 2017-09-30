const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  const input = document.querySelector('body')
  let index = 0
  //var entered = []
  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);

    if (key === code[index]) {
      i++
      console.log('${e.which} : ${i}')
      if (index === code.length) {
        alert("+30 Lives!")
        index = 0
      }
    } else {
      index = 0
    }
  }
  input.addEventListner('keydown', onKeyDownHandler(e))
}
