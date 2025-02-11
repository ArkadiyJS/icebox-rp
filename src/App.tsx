import Card from './card/card'
import Carousel from './carousel/carousel'
import SpecificationsIcebox from './specificationsIcebox/specificationsIcebox'
import './App.css'

function App() {
  

  return (
    <div className='App'>

      <div className='header'></div>

      <div className='content'>
        
        <div className='navBar'>

          
        </div>
                
                
        <div className='main'>
          {/* <Card/> */}
          <SpecificationsIcebox/>
          {/* <Carousel/> */}
        </div>
      </div>
      
    </div>
  )
}

export default App
