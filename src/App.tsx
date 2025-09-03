import { Button } from "./topics/02/props-with-type.tsx"

function App() {

  return (
    <>
      <Button label="Click Me" onClick={()=>alert("Clicked!")}/>
    </>
  )
}

export default App
