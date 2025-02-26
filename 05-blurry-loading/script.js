const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30) // 함수 반복하게 해줌

function blurring() {
    load++
    if (load > 99) {
        clearInterval(int) // setInterval에 의해 반복되는 작업을 취소함
    }

    loadText.innerText = `${load}%` // text 요소를 설정할 수 있게 함
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}