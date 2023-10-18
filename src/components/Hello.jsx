function Hello(Props){
    console.log(Props);
    return(
      <p>Hello {Props.username}!!!!!!!!
      , You are {Props.age} years old.</p>
    )
  }
 export default Hello ;