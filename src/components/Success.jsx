import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const Success = () => {
    const navigate = useNavigate()
    const navigateToHome = () => {
        navigate('/')
    }
  return (
    <div className='h-screen text-white pt-32 text-center mb-[-8em]' >
        <div className='flex justify-center pb-4'>

        <AiOutlineCheckCircle size={70} className='text-green-500' />
        </div>
        <h1 className='text-5xl'>Form Submitted Successfully!</h1>
        <h2 className='text-3xl pt-4'>Thank you for your interest!</h2>

        <div className='pt-10'>
            <button onClick={navigateToHome} className='btn btn-primary btn-wide text-2xl'>Go Back</button>
        </div>
    </div>
  )
}

export default Success