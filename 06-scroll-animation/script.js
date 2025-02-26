const contents = document.querySelectorAll(".content")

window.addEventListener('scroll', checkContents)

function checkContents() {
    const triggerBottom = window.innerHeight / 5 * 4 

    contents.forEach(content => {
        const contentTop = content.getBoundingClientRect().top
        if(contentTop < triggerBottom) {
            content.classList.add('show')
        } else {
            content.classList.remove('show')
        }
    })
}