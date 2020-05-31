import React from 'react'
import {BrowserRouter , Route,Link } from "react-router-dom"
/*1061056689916-e2otjujkfedhp15hlp2p82maa9l942sn.apps.googleusercontent.com*/
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
      <BrowserRouter>
       <Route path ="/" exact component={PageOne}  />
       <Route path ="/PageTwo" component={PageTwo}  />
      </BrowserRouter>
    </div>
  )
}

export default App