function grandParent(){
  function parent(){
    let x = 10
    function child(){
      console.log(x)
    }
    function siblings(){

    }
    child()
    siblings()
  }
  parent()
}
grandParent() // 10