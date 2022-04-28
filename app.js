// const $ = document.querySelector.bind(document)
// const $$ = document.querySelectorAll.bind(document)

// const btnShowSuccess = $('.btn-success')
// const btnShowWarning = $('.btn-warning')
// const btnShowError = $('.btn-error')

// btnShowSuccess.addEventListener('click', () =>{
//     createToast({
//         message: 'This is a success message !',
//         type: 'success',
//     })
// })
// btnShowWarning.addEventListener('click', () =>{
//     createToast({
//         message: 'This is a warning message !',
//         type: 'warning',
//     })
// })
// btnShowError.addEventListener('click', () =>{
//     createToast({
//         message: 'This is a error message !',
//         type: 'error',
//     })
// })


// function createToast({
//     message = '',
//     type = 'success'
// }){
//     const main =document.getElementById('wrapper')
//     const toast = document.createElement('div')
//     const icons = {
//         success: 'fa-solid fa-circle-check',
//         warning: 'fa-solid fa-circle-exclamation',
//         error: 'fa-solid fa-triangle-exclamation'
//     }
//     const icon = icons[type]
//     toast.classList.add('toast',`toast-${type}`)
//     // toast.classList.add(status)
//     toast.innerHTML = `
//                 <i class="${icon}"></i>
//                 <span class="message">${message}</span>
//                 <span class="time-out"></span>
//         `
//     main.appendChild(toast)

//     setTimeout(function(){
//         toast.style.animation = 'slideHide 2s ease forwards'
//     },3000)
//     setTimeout(function(){
//         main.removeChild(toast)
//     },6000)
// }
