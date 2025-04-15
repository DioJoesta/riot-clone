import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import { NavigationBar } from './components/navigation'
import { NewsPage } from './components/newsPage'
import { WorkWithUsPage } from './components/workWithUs'
import { WhoWeArePage } from './components/whoWeAre'
import { SignInPage } from './components/signinPage'
import "./styles/index.css"
import { SignUp } from './components/signupPage'
import { HomePage } from './components/homePage'
import Game from './components/tictactoe'
import { SideNav } from './components/sidenav'


function App() {

  return (
    <>
    
      <Router>

        <NavigationBar/>
        <SideNav/>
        
        
        <Routes>
          
          <Route path='/' element= {<HomePage/>}/>
          <Route path='/news-page' element= {<NewsPage/>}/>
          <Route path='/work-with-us' element= {<WorkWithUsPage/>}/>
          <Route path='/who-we-are' element= {<WhoWeArePage/>}/>
          <Route path='/signin' element= {<SignInPage/>}/>
          <Route path='/signup' element= {<SignUp/>}/>
          <Route path='/tictactoe' element= {<Game/>}/>
        </Routes>
      </Router>
      
    </>
  )
}

export default App
