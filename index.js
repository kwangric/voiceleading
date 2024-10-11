document.querySelector('#start').addEventListener('click', () => {
    document.querySelector('#settings').classList.toggle('d-none')
    document.querySelector('#start').classList.toggle('d-none')
    document.querySelector('#next').classList.toggle('d-none')
    document.querySelector('#reset').classList.toggle('d-none')
    generateChords()
})

document.querySelector('#next').addEventListener('click', () => {
    generateChords()
})

document.querySelector('#reset').addEventListener('click', () => {
    clearChords()
    document.querySelector('#settings').classList.toggle('d-none')
    document.querySelector('#start').classList.toggle('d-none')
    document.querySelector('#next').classList.toggle('d-none')
    document.querySelector('#reset').classList.toggle('d-none')
})

const generateChords = () => {
    console.log('chords generated')
}

const clearChords = () => {
    console.log('chords cleared')
}