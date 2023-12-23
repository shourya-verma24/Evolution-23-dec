function UserInfo(name,location){
    this.name = name
    this.location = location
  }
  
  function serveFood(food){
    return "Serving " + food + " to " + this.name + " in " + this.location
  }
  function serveIn(name,location,food){
    let user = new UserInfo(name,location)
    return serveFood.call(user,food)
    
  }
  function billNote(total){
    return "Bill amount " + total + " to " + this.name + " in " + this.location
  }
  
  function generateInVoice(name,location,quantity,price){
    let userinfo = new UserInfo(name,location,quantity,price)
    return billNote.apply(userinfo,[quantity*price])
  }
  console.log(serveIn("Raj","Pune","Pizza"))
  console.log(generateInVoice("Raj","Pune",2,100))
    

export { UserInfo, serveIn, serveFood, billNote, generateInVoice };
