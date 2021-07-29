const imagesArray = document.querySelectorAll('.img-galery')
const buttonLeft = document.querySelector('.arrow-left')
const buttonRight = document.querySelector('.arrow-right')
const modalImg = document.querySelector('.img-modal')
const Modal = document.querySelector('.modalOpen')

console.log(imagesArray)

let actualIndex = null

imagesArray.forEach((cadaImagen,index)=>{
    imagesArray[index].addEventListener('click',()=>{
        
        

        actualIndex = index

        Modal.style = 'display: flex;'
        modalImg.src = imagesArray[index].src

        window.scrollTo(0, 0);
        document. getElementsByTagName("html")[0].style = 'overflow: hidden;'

        if(actualIndex > 7){
            buttonRight.style.display = 'none'
        }else if(actualIndex < 1){
            buttonLeft.style.display = 'none'
        }
    })

})

buttonRight.addEventListener('click',()=>{
    actualIndex++

    modalImg.src = imagesArray[actualIndex].src

    if(actualIndex > 7){
        buttonRight.style.display = 'none'
    }else{
        buttonLeft.style.display = 'initial'
    }
})

buttonLeft.addEventListener('click',()=>{
    actualIndex--

    modalImg.src = imagesArray[actualIndex].src

    if(actualIndex < 1){
        buttonLeft.style.display = 'none'
    }else{
        buttonRight.style.display = 'initial'
    }
})
  
Modal.addEventListener('click',(e)=>{
    if(e.target !== buttonRight && e.target !== buttonLeft && e.target !== modalImg){
        Modal.style.display = 'none'
    }
    window.scrollTo(0, 0);
    document. getElementsByTagName("html")[0].style = 'overflow: initial;'
    
})