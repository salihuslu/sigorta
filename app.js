const formControls = document.querySelectorAll('.form-control')
const inputs = document.querySelectorAll('input')
const submitBtn = document.querySelector('.submit')

formControls.forEach(control => {
    const input = control.querySelector('input')

    control.addEventListener('mouseover', () => {
        input.focus()
    })
})

inputs.forEach(input => {
    input.addEventListener("input", ()=> {
        let allValid = true 

        inputs.forEach(input => {
            if(!input.checkValidity()){
                allValid = false
            }
        })

        if(allValid){
            submitBtn.classList.add("active")
        } else{
            submitBtn.classList.remove("active")
        }
    })
})