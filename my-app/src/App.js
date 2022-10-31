import logo from './logo.svg';
import './App.css';


function Header(){
  return(
    <header>
      <nav className='nav'>
        <img src={logo} class="logo" alt='logo'/>
        <h3>ReactFacts</h3>
        <h4>React Course - Project 1</h4>
      </nav>
    </header>
  )
}
function MainContent() {
  return (
      <main>
          <h1 class="main-title">Fun facts about React</h1>
          <ul class="main-facts">
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Power thousands of enterprise apps, including mobile apps</li>
          </ul>
      </main>
  )
}

function Footer(){
  return(
    <footer>
    </footer>
  )
}

function App (){
   return (
    <div>
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
)
}

export default App;



