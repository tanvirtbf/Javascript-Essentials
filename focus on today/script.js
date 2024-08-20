const firstInput = document.querySelector("#first")
const secondInput = document.querySelector("#second")
const thirdInput = document.querySelector("#third")

const progressValue = document.querySelector(".progress-value")
const errorLabel = document.querySelector(".error-label")

const customCheckbox = document.querySelectorAll(".custom-checkbox")
const checkIcon = document.querySelectorAll(".check-icon")
const goalInput = document.querySelectorAll(".goal-input")

const goalContainer = document.querySelectorAll('.goal-container')


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

customCheckbox.forEach((item,index)=>{
  item.addEventListener('click',()=>{
    if(inputObj.first && inputObj.second && inputObj.third){
      errorLabel.style.display = 'none'
      goalContainer.forEach((value,i)=>{
        if(index===i){
          value.classList.toggle('completed')
        }
      })
    }else{
      errorLabel.style.display = 'block'
    }
  })
})
