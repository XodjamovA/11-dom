let body = document.body
let center = document.querySelector('center')

let main = document.createElement('div')
let h1 = document.createElement('h1')
let input = document.createElement('input')
let btn = document.createElement('button')
let hr = document.createElement('hr')
let row = document.createElement('div')

h1.classList.add('size')
input.classList.add('border')
btn.classList.add('add')
row.classList.add('row')
main.classList.add('container')

h1.innerHTML = 'Todo List'
btn.innerHTML = 'Add'
// input.placeholder = 'Buy Modal S'


row.append(input, btn)
center.append(h1, row, hr)
body.append(center, main)

btn.onclick = () => {
    // function reload(params) {
    let div = document.createElement('div')
    let b = document.createElement('b')
    let i = document.createElement('i')
    let img = document.createElement('img')
    let cont = document.createElement('div')

    div.classList.add('grey')
    img.src = "./img/1.svg"
    cont.classList.add('column')

    b.innerHTML = input.value
    i.innerHTML = new Date();

    cont.append(b, i)
    div.append(cont, img)
    main.append(div)

    img.onclick = () => {
        div.remove()
    }
}
// }

