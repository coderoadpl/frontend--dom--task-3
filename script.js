(function (containerSelector) {

    const container = document.querySelector(containerSelector)

    if(!container) return

    const input = container.querySelector('input')

    const button = container.querySelector('button')

    const p = container.querySelector('p')

    input.setAttribute('type', 'number')

    // attributes without a value returns empty string
    console.log(button.getAttribute('disabled'))
    console.log(typeof button.getAttribute('disabled'))

    button.removeAttribute('disabled')

    // element do not have this attribute - null is returned
    console.log(button.getAttribute('disabled'))
    console.log(typeof button.getAttribute('disabled'))

    p.setAttribute('class', 'red')
    p.setAttribute('style', 'color: blue;')

})('#working-area-2')