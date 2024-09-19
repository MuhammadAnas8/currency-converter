import './index.css'
import Converter from './components/Converter/Converter'
import Heor from './components/Hero/Heor'
import { CurrencyProvider } from './context/CurrencyContext'

function App() {
  return (
    <div className="App">
      <CurrencyProvider >
    <Heor />
    <Converter />
    </CurrencyProvider>
    </ div>
  )
}

export default App
