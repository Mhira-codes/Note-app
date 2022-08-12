import React, { useState } from 'react'




const AddNotes = () => {
const [noteText, setNoteText] = useState('')


const handleText = (e)=>{
    setNoteText(e.target.value)
}


const saveText = () =>{  

}
  return (
    <div className="h-[36%] w-[250px] bg-teal-50 rounded px-2 flex py-1 flex-col justify-between mt-4">


<textarea
 col=' 20'
  row='8'
  placeholder='Type to add a note'
  className='bg-transparent outline-none resize-none'
  value={noteText}
  onChange={handleText}
  >

</textarea>
<div className="flex justify-between">
        <small>200 words remaining</small>
  <button onClick={saveText} className='bg-zinc-300 rounded text-black cursor-pointer  px-1 hover:bg-gray-600'>save</button>
      </div>
    </div>
  )
}

export default AddNotes