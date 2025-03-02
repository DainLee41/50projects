const followers = document.querySelectorAll(".follower")

followers.forEach(follower => {
    follower.innerText = '0' // 초기 텍스트 0으로 설정함

    const updateFollower = () => {
        // data-target 값을 가져와(getAttribute) 숫자로 변환함(+ 단항 연산자) 
        const target = +follower.getAttribute('data-target') 
        const c = +follower.innerText

        const increment = target / 200

        if (c < target) {
            follower.innerText = `${Math.ceil(c+increment)}` // ceil은 올림 함수
            setTimeout(updateFollower, 1) // 재귀함수 호출
        } else {
            follower.innerText = target
        }
    }

    updateFollower()
})