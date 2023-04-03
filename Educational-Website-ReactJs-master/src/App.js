import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Route, } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"

import Login from "./login/js/Login";
import Signup from "./login/js/Signup";
function App() {
  const  isLogin = window.location?.pathname==="/login";
  const  isSignup =  window.location?.pathname==="/signup";
  return (
    <>
      <Router>
        {!(isLogin|isSignup)&&<Header />}
          <Route exact path="/login" component={Login } />
          <Route exact path="/signup" component={Signup} />
          <Route exact path='/about' component={About} />
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} />         
          <Route exact path='/' component={Home} />
          {!(isLogin|isSignup)&&<Footer />}        
          
      </Router>
    </>
  )
}

export default App
