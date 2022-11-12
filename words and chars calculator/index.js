let text=document.querySelector('.text')
let words=document.querySelector('.words')
let character=document.querySelector('.characters')
text.addEventListener('input',()=>{
    character.textContent=text.value.length
    let txt=text.value.trim()
    words.textContent=txt.split(/\s+/).filter((item)=>item).length
})