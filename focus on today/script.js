const firstInput = document.querySelector("#first")
const secondInput = document.querySelector("#second")
const thirdInput = document.querySelector("#third")

const progressValue = document.querySelector(".progress-value")
const errorLabel = document.querySelector(".error-label")

const customCheckbox = document.querySelectorAll(".custom-checkbox")

const inputObj = {
  first: '',
  second: '',
  third: '',
}

firstInput.addEventListener("input",(e)=>{
  inputObj.first = e.target.value
})
secondInput.addEventListener("input",(e)=>{
  inputObj.second = e.target.value
})
thirdInput.addEventListener("input",(e)=>{
  inputObj.third = e.target.value
})

customCheckbox.forEach((item)=>{
  item.addEventListener('click',()=>{
    if(inputObj.first && inputObj.second && inputObj.third){
      errorLabel.style.display = 'none'
    }else{
      errorLabel.style.display = 'block'
    }
  })
})
