const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
    insert.innerHTML = // insert에 속한 자식 요소들이 전부 사라지고 덮어씌움!
    `<div class='btn'>
        ${event.key == ' ' ? 'Space' : event.key}
        <small>event.key</small>
    </div>
    <div class='btn'>
        ${event.keyCode}
        <small>event.keyCode</small>
    </div>
    <div class='btn'>
        ${event.code}
        <small>event.code</small>
    </div>`
})