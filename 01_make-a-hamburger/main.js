// 芝麻seeds 番茄酱ketchup cheese奶酪 生菜lettuse
let seeds = document.querySelector('#seeds')
let ketchup = document.querySelector('#ketchup')
let cheese = document.querySelector('#cheese')
let lettuse = document.querySelector('#lettuse')

let all = [seeds, ketchup, cheese, lettuse]

let buttons = document.querySelectorAll('button')
let i = [1, 1, 1, 1]
Array.from(buttons)
  .filter((_, i) => i < 4)
  .forEach((item, index) => {
    item.onclick = function () {
      all[index].style.display = ['none', 'block'][i[index]++ % 2]
    }
  })

buttons[4].onclick = function () {
  all.forEach(item => {
    item.style.display = 'none'
  })
  i = [1, 1, 1, 1]
}
