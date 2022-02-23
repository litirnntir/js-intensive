const search = function () {
    const input = document.querySelector('.search-block > input');
    const searchBtn = document.querySelector('.search-block > button')
    let value

    input.addEventListener('input',  (event) => {
        value = event.target.value
    })

    searchBtn.addEventListener('click', () => {
        console.log(value)
    })
}


search();