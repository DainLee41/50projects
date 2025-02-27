const joke = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke() {
  const config = {
    headers: { // HTTP 쵸청의 헤더 설정
      Accept: 'application/json', // API가 JSON 형식의 데이터를 반환하도록 요청하는 헤더
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json()

  joke.innerHTML = data.joke
}