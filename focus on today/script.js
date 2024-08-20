const firstInput = document.querySelector("#first")
const secondInput = document.querySelector("#second")
const thirdInput = document.querySelector("#third")

const progressValue = document.querySelector(".progress-value")
const errorLabel = document.querySelector(".error-label")

const customCheckbox = document.querySelectorAll(".custom-checkbox")
const checkIcon = document.querySelectorAll(".check-icon")
const goalInput = document.querySelectorAll(".goal-input")

const goalContainer = document.querySelectorAll('.goal-container')

let calculate = []
calculate[0] = false
calculate[1] = false
calculate[2] = false

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
      calculate[index] = !calculate[index]
      goalContainer.forEach((value,i)=>{
        if(index===i){
          value.classList.toggle('completed')
        }
      })
      let newCal = calculate.filter((item)=> item)
      if(newCal.length===1){
        progressValue.style.width = '33.4%'
      }else if(newCal.length===2){
        progressValue.style.width = '66.7%'
      }else if(newCal.length===3){
        progressValue.style.width = '100%'
      }else if(newCal.length===0){
        progressValue.style.width = '0px'
      }
    }else{
      errorLabel.style.display = 'block'
    }
  })
})

