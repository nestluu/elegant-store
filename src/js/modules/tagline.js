function tagline() {
    const closeTaglineBtn = document.querySelector('#closeTagline')
    const tagline = document.querySelector('.tagline')

    closeTaglineBtn.onclick = function(event) {
        tagline.remove()
    }
}

export default tagline