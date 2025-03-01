const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

// getElementById는 id를 통해 객체를 찾는 거고, 그 이외에는 querySelctor를 사용한다고 함
// 후자가 전자에 비해 속도가 느려서 전자를 사용하는 경우가 많다고 한다...

textarea.focus() // 바로 textarea가 선택되도록 해 사용자가 바로 입력할 수 있도록 함

textarea.addEventListener('keyup', (e) => { // e는 이벤트 객체로 어떤 이벤트가 발생했는지에 대한 정보를 담고 있음
    createTags(e.target.value) // e.target = 이벤트가 발생한 요소, 즉 textarea

    if (e.key === 'Enter') {
        setTimeout(()=>{
            e.target.value = '' // 엔터 키 누르면 textarea 초기화
        }, 10) 

        randomSelect() // 이후에 선택하기
    }
})

function createTags(input) {
    const tags = input
                    .split(',') // 쉼표를 기준으로 문자열을 잘라서 배열로 변환함
                    .filter(tag => tag.trim() !== '') // tag.trim()으로 공백 제거된 값 반환, 이후에 ''인 값들은 제거(이건 filter의 역할)
                    .map(tag => tag.trim()) // 배열의 요소를 변환해서 새 배열을 만듬 -> 공백 제거된 값들로 새로운 배열 생성

    tagsEl.innerHTML = '' // tagsEl 아래 자식 요소 전부 제거

    tags.forEach(tag => {
        // 각 태그 요소들 생성
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag

        // 생성한 태그 요소를 tags 아래로 추가
        tagsEl.appendChild(tagEl)
    });
}

function randomSelect() {
    const times = 30

    // setTimeOut 과는 달리 반복적으로 실행함
    const interval = setInterval(() =>{
        const randomTag = pickRandomTag()

        if (randomTag !== undefined) { // 선택된 태그가 존재하면
            highlightTag(randomTag)

            setTimeout(()=>{
                unHighlightTag(randomTag)
            }, 100) // 0.1초 후에 강조 효과 제거
        }
    },100) // 깜빡이는 걸 반복함

    setTimeout(()=>{
        clearInterval(interval) 

        setTimeout(()=>{
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
        }, 100) // 최종 선택
    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)] 
    // Math.floor() = 소수점 버림
    // Math.random() = 0-1 사이 소수 생성
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}