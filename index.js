const chords = {
    'major': [
        'A♭', 'A', 'B♭', 'B', 'C', 'D♭', 'D', 'E♭', 'E', 'F', 'F♯', 'G'
    ],
    'minor': [
        'A♭m', 'Am', 'B♭m', 'Bm', 'Cm', 'D♭m', 'Dm', 'E♭m', 'Em', 'Fm', 'F♯m', 'Gm'
    ],
    'majorSeventh': [
        'A♭maj7', 'Amaj7', 'B♭maj7', 'Bmaj7', 'Cmaj7', 'D♭maj7', 'Dmaj7', 'E♭maj7', 'Emaj7', 'Fmaj7', 'F♯maj7', 'Gmaj7'
    ],
    'minorSeventh': [
        'A♭m7', 'Am7', 'B♭m7', 'Bm7', 'Cm7', 'D♭m7', 'Dm7', 'E♭m7', 'Em7', 'Fm7', 'F♯m7', 'Gm7'
    ],
    'dominantSeventh': [
        'A♭7', 'A7', 'B♭7', 'B7', 'C7', 'D♭7', 'D7', 'E♭7', 'E7', 'F7', 'F♯7', 'G7'
    ],
}

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