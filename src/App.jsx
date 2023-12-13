import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  const [names, setName] = useState(["ahmad", 'babak', 'saeed', 'danial','hossein','amir'])
  const [nameHolder, setNameHolder ] = useState(names[0])
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddText = () => {
    if (inputText.trim() !== '') {
      setName((prevArray) => [...prevArray, inputText]);
      setInputText('');
    }
  };
  const handleChangeCount = () => {
    setCount((count) => count + 1)
    setNameHolder(names[Math.floor(Math.random() * names.length )])
  };
  return (
    <>
      <h1>{nameHolder}</h1>
      <div className="card">
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter name"
      />
      <Button onClick={handleChangeCount}>
          Change
        </Button>
        <Button onClick={handleAddText} variant="primary">Add</Button>{' '}
      </div>
    </>
  )
}

export default App
