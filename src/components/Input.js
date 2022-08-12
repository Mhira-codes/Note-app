import React from 'react'
import { AiOutlineSearch} from 'react-icons/ai';

const Input = () => {
  return (
    <div className='w-full bg-slate-100 flex items-center py-2 px-2 rounded-full'>
      <AiOutlineSearch className=''/>
      <input type='text' placeholder='search' className='bg-transparent  border-none outline-none w-full px-2'/>

    </div>
  )
}

export default Input