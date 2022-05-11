import { useEffect, useState} from 'react'
import backgroundphoto from './background.jpg';
import './App.css';
import Box from '@mui/material/Box'
import Grow from '@mui/material/Grow'
// @ts-ignore
import TypeWriterEffect from 'react-typewriter-effect'

const picSize = {
  marginTop: '4%',
  width: '80%',
  height: '80%',
  '@media (min-width:1024px)': {
    height: '27%',
    width: '27%'
  }
}

const loadDelay = 2.5

function App() {
  const [start,
    setStart] = useState(false);
  
    useEffect(() => {
      let timer1 = setTimeout(() => setStart(true), loadDelay)
  
      // this will clear Timeout when component unmount like in willComponentUnmount
      // and show will not change to true
      return () => {
        clearTimeout(timer1);
      }
    }, [])
  
  return (
    <div className="App">
      <header className="App-header">
      <Grow
      in={start}
      style={{
      transformOrigin: '0 0 0'
    }}
      {...(start ? { timeout: 2500 } : {})}>
      <Box
      component="img"
      maxWidth = "sm"
      // width = '90%'
      // height = '90%' 
      sx = {picSize}
      
      alt="The house from the offer."
      src={backgroundphoto}
      borderRadius = {30}
      />
      </Grow>
      <TypeWriterEffect
            textStyle={{ fontFamily: 'Comic Sans MS' , marginTop: '10px'}}
            cursorColor="black"
            multiText={[
              'Coming Soon...',
              'Winter 2020',
            ]}
            startDelay={2000}
            typeSpeed={100}
          />
      </header>
    </div>
  );
}

export default App;
