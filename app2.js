const btnSuccess = document.querySelector('.btn-success')
const btnWarning = document.querySelector('.btn-warning')
const btnError = document.querySelector('.btn-error')


btnSuccess.addEventListener('click', () =>{
    createToast({
        message: 'Đã đăng nhập thành công !',
        type: 'success'
    })
})
btnWarning.addEventListener('click', () =>{
    createToast({
        message: 'Warning... !',
        type: 'warning'
    })
})
btnError.addEventListener('click', () =>{
    createToast({
        message: 'Đăng nhập thất bại !',
        type: 'error'
    })
})

function createToast({
    message = '',
    type = 'success'
}){
    const main = document.getElementById('wrapper')
    const toast = document.createElement('div')
    const icons = {
        success:'fa-solid fa-circle-check',
        warning:'fa-solid fa-circle-exclamation',
        error:'fa-solid fa-triangle-exclamation'
    }
    const icon = icons[type]
    toast.classList.add('toast',`toast-${type}`)
    toast.innerHTML = ` 
                        <i class="${icon}"></i>
                        <span class="message">${message}</span>
                        <span class="time-out"></span>            
    `
    main.appendChild(toast)

    setTimeout(function(){
        toast.style.animation = 'slideHide 2s ease forwards'
    },4000)
    
    setTimeout(function(){
        toast.remove()
    },6000)

}



       