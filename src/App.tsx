import React, { useState } from 'react';
import { Equal, Plus, Minus, X, Divide, Trash2 } from 'lucide-react';

type Operation = '+' | '-' | '*' | '/' | null;

function App() {
  const [display, setDisplay] = useState('0');
  const [firstNumber, setFirstNumber] = useState<number | null>(null);
  const [operation, setOperation] = useState<Operation>(null);
  const [newNumber, setNewNumber] = useState(true);

  const handleNumberClick = (num: string) => {
    if (newNumber) {
      setDisplay(num);
      setNewNumber(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleOperationClick = (op: Operation) => {
    setOperation(op);
    setFirstNumber(parseFloat(display));
    setNewNumber(true);
  };

  const handleEquals = () => {
    if (firstNumber === null || operation === null) return;
    
    const secondNumber = parseFloat(display);
    let result: number;

    switch (operation) {
      case '+':
        result = firstNumber + secondNumber;
        break;
      case '-':
        result = firstNumber - secondNumber;
        break;
      case '*':
        result = firstNumber * secondNumber;
        break;
      case '/':
        result = firstNumber / secondNumber;
        break;
      default:
        return;
    }

    setDisplay(result.toString());
    setFirstNumber(null);
    setOperation(null);
    setNewNumber(true);
  };

  const handleClear = () => {
    setDisplay('0');
    setFirstNumber(null);
    setOperation(null);
    setNewNumber(true);
  };

  const handleDecimal = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
      setNewNumber(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-700 p-6 rounded-2xl shadow-2xl w-full max-w-xs">
        <div className="bg-gray-800 p-4 rounded-xl mb-4">
          <div className="text-right">
            <div className="text-gray-400 text-sm h-6">
              {firstNumber !== null ? `${firstNumber} ${operation}` : ''}
            </div>
            <div className="text-white text-4xl font-semibold tracking-wider overflow-hidden">
              {display}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          <button
            onClick={handleClear}
            className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-lg flex items-center justify-center transition-colors"
          >
            <Trash2 size={20} />
          </button>
          <button
            onClick={() => handleOperationClick('/')}
            className="bg-gray-600 hover:bg-gray-500 text-white p-4 rounded-lg flex items-center justify-center transition-colors"
          >
            <Divide size={20} />
          </button>
          <button
            onClick={() => handleOperationClick('*')}
            className="bg-gray-600 hover:bg-gray-500 text-white p-4 rounded-lg flex items-center justify-center transition-colors"
          >
            <X size={20} />
          </button>
          <button
            onClick={() => handleOperationClick('-')}
            className="bg-gray-600 hover:bg-gray-500 text-white p-4 rounded-lg flex items-center justify-center transition-colors"
          >
            <Minus size={20} />
          </button>

          {[7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberClick(num.toString())}
              className="bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg text-xl font-medium transition-colors"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleOperationClick('+')}
            className="bg-gray-600 hover:bg-gray-500 text-white p-4 rounded-lg flex items-center justify-center transition-colors row-span-2"
          >
            <Plus size={20} />
          </button>

          {[4, 5, 6].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberClick(num.toString())}
              className="bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg text-xl font-medium transition-colors"
            >
              {num}
            </button>
          ))}

          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberClick(num.toString())}
              className="bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg text-xl font-medium transition-colors"
            >
              {num}
            </button>
          ))}
          <button
            onClick={handleEquals}
            className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg flex items-center justify-center transition-colors row-span-2"
          >
            <Equal size={20} />
          </button>

          <button
            onClick={() => handleNumberClick('0')}
            className="bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg text-xl font-medium transition-colors col-span-2"
          >
            0
          </button>
          <button
            onClick={handleDecimal}
            className="bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg text-xl font-medium transition-colors"
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;