const sounds = ['applause', 'gasp', 'boo', 'tada', 'victory', 'wrong']

sounds.forEach( sound => {
    const btn = document.createElement('button') // button 요소 생성
    btn.classList.add('btn') // class에 btn 추가하기

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSongs()
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn) // id가 button인 부모 요소 아래에 btn을 추가함
})