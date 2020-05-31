import React from 'react'
import {MemoryRouter, BrowserRouter , Route,Link } from "react-router-dom"

const PageOne=()=>{
  return <div>
   <Link  to="/PageTwo">Navigate to two page </Link>
  </div>
}
const PageTwo=()=>{
  return <div>
  <Link to ="/PageOne">Navigate to One page </Link>
  </div>
}

const App = ()=>{
  return( 
    <div>
      <MemoryRouter>
       <Route path ="/" exact component={PageOne}  />
       <Route path ="/PageTwo" component={PageTwo}  />
      </MemoryRouter>
    </div>
  )
}

export default App