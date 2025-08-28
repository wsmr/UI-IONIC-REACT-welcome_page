import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ChevronRight } from 'lucide-react'
import './App.css'

function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const totalSteps = 5

  const handleSkip = () => {
    // Navigate to main app or next screen
    console.log('Skip clicked')
  }

  const handleContinue = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Navigate to main app
      console.log('Continue to main app')
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Status bar simulation */}
      <div className="flex justify-between items-center px-6 py-2 text-sm">
        <span>3:43:38</span>
        <div className="flex items-center space-x-1">
          <span className="text-xs">📶 2.00</span>
          <span className="text-xs">📶</span>
          <span className="text-xs">📶</span>
          <span className="text-xs">📶</span>
          <span className="text-xs">🔋 60%</span>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center items-center px-8 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light mb-4">Welcome!</h1>
          <p className="text-gray-300 text-lg">Let's do a quick tour of the app</p>
        </div>

        {/* Page indicators */}
        <div className="flex space-x-2 mb-16">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentStep ? 'bg-white' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="flex justify-between items-center px-8 pb-8">
        <Button
          variant="ghost"
          onClick={handleSkip}
          className="text-white hover:bg-gray-800 text-base"
        >
          Skip
        </Button>
        <Button
          onClick={handleContinue}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full flex items-center space-x-2"
        >
          <span>Continue</span>
          <ChevronRight size={16} />
        </Button>
      </div>
    </div>
  )
}

export default App

