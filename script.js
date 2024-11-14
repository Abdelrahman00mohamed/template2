let disimg=document.querySelectorAll('.portfolio-item img')
let img=document.querySelector('.portfolio-item img').getAttribute('src')
let over=document.querySelectorAll('.portfolio-item img ')
let box=document.querySelector(".i")
let imgdis=document.querySelector(".imgbg img")
let clos=document.querySelector(".close")

// for(let i=0;i<over.length;i++){
//   over[i].addEventListener("click",(e)=>{
//     let ind=e.target
//     if(over[i]==0){
      
      
//     }
//     box.classList.remove('d-none')
// imgdis.setAttribute('src',`${img}`)

    
//   })
// }
// clos.addEventListener('click',()=>{
//   box.classList.add('d-none')
// })

for(let i=0;i<over.length;i++){
  over[i].addEventListener("click",(e)=>{
    let ind=e.target.getAttribute('src')
    box.classList.remove('d-none')
imgdis.setAttribute('src',`${ind}`)   
  })
}

clos.addEventListener('click',()=>{
  box.classList.add('d-none')
})