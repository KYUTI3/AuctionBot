'use client';
import { useEffect, useState } from 'react'
import Input from './input'


const MyForm = () => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
   
  }

  return (
    <div className="btn-container">
    <form className='button' onSubmit={handleSubmit}>
      <Input type="text" placeholder="Treat Yourself!" value={inputValue} onChange={handleInputChange} />
      <button type="submit">Submit</button>

        <style jsx>{`
          .button { 
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            text-align: center;
            flex-wrap: nowrap;
            top: -305px
          }
        `}</style>
    </form>
</div>
  )
}

export default MyForm
