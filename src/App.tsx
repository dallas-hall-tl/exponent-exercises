import './App.css'
import ExpressionBuilder from './components/ExpressionBuilder'
import ExponentPractice from './components/ExponentPractice'
import ExponentAnimation from './components/ExponentAnimation'

function App() {
  return (
    <div className="App" style={{
      backgroundColor: '#e6f3ff',
      minHeight: '100vh',
      padding: '2rem',
      color: '#1a1a1a'
    }}>
      <h1 style={{
        color: '#0066cc',
        textAlign: 'center',
        marginBottom: '2rem',
        fontSize: '2.5rem',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)'
      }}>Multiplication Expression Builder</h1>
      
      <div style={{ marginBottom: '3rem' }}>
        <ExponentAnimation />
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <ExpressionBuilder />
      </div>

      <h2 style={{
        color: '#0066cc',
        textAlign: 'center',
        marginBottom: '2rem',
        fontSize: '2rem',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)'
      }}>Practice</h2>
      
      <ExponentPractice x={2} targetExponent={4} />
    </div>
  )
}

export default App
