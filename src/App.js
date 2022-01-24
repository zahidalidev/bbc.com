import react, { useState, useEffect } from "react";

function App(props){
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(`You clicked ${count} times`)
  })

  const addCount = () => {
    // setCount(count+1)
    console.log("add count: ", count)
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={()=> addCount()}>Click me</button>
    </div>
  )
}
export default App;