let sliderimage = Array.from(document.querySelectorAll('.slider-container img'))

let slidCount = sliderimage.length

let currentSlide = 1

let slideNumber = document.getElementById('slider-number')

let prevBtn = document.getElementById('prev')
let nextBtn = document.getElementById('next')

nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

let paginationElement = document.createElement('ul')
paginationElement.setAttribute('id', 'pagination-ul')

for(let i=1; i<=slidCount; i++){
    let paginationItem = document.createElement('li')
    paginationItem.setAttribute('data-index', i)
    paginationItem.appendChild(document.createTextNode(i))
    paginationElement.appendChild(paginationItem)
}
document.getElementById('indicators').appendChild(paginationElement)

let paginationCreatesUl = document.getElementById('pagination-ul')

let paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'))

for(let i=0;i<paginationBullets.length;i++){
    paginationBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'))
        thechecker()
    }
}
theChecker()

function nextSlide() {
    if(nextBtn.classList.contains('disable')){
        return false;
    } else{
        currentSlide++
        theChecker()
    }
}

function prevSlide() {
    if(prevBtn.classList.contains('disable')){
        return false;
    } else{
        currentSlide--
        theChecker()
    }
}

function removeActive() {
    sliderimage.forEach((img)=>{
        img.classList.remove('active')
    });

    paginationBullets.forEach((bullet)=>{
        bullet.classList.remove('active')
    })
}

function theChecker() {
    slideNumber.textContent = 'slide #' + (currentSlide) + 'of' + (slidCount)
    removeActive()
    sliderimage[currentSlide - 1].classList.add('active')
    paginationCreatesUl.children[currentSlide - 1].classList.add('active')
    
    if(currentSlide == slidCount){
        nextBtn.classList.add('disabled')
    } else {
        nextBtn.classList.remove('disabled')
    }
    if(currentSlide == 1) {
        prevBtn.classList.add('disabled')
    } else {
        prevBtn.classList.remove('disabled')
    }
}
theChecker()