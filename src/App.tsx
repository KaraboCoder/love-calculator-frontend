import React from 'react';
import Inputs from './components/Inputs'
import Loading from './components/Loading'
import Results from './components/Results'
import { AppContext } from './context'
import './App.css';



function App() {
  const [resultLove, setLove] = React.useState<string | null>(null)
  const [loading, setLoading] = React.useState(false)

  const calculateLove = async (name1: string, name2: string) => {
    setLoading(true)
    const res = await fetch('https://love-calculator-backend.herokuapp.com/api/calculate-love', {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({ name1, name2 })
    })
    const { love } = await res.json()
    setLove(love)
    setLoading(false)
  }

  const clear = () => {
    setLove(null)
  }

  return (
    <AppContext.Provider value={{ calculateLove, clear }}>
      <div className="App">
        <div className="bg-overlay">
          {
            !loading && !resultLove && <Inputs />
          }
          {
            loading && !resultLove && (<Loading />)
          }
          {
            resultLove && (<Results love={resultLove} />)
          }
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
