import React from 'react'
import  { useParams, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const ViewPaste = () => {

  const {id} = useParams();
const allPastes = useSelector
((state) => state.paste.pastes);
const paste = allPastes.filter((p) => p._id === id)[0];
console.log("Final Paste: ",
paste);


  return (
    <div>
      <div className='flex flex-row gap-8 justify-between'>
      <input className='p-2 rounded-2xl  mt-2 min-w-[60%] bg-white'
       type="text"
       placeholder='enter value here'
       value={paste.title}
       disabled
       onChange={(e)=>setTitle(e.target.value)}/>

      
    </div>
    <div className='mt-4'>
      <textarea
        className='p-4 min-w-[500px] rounded-2xl'
        type="text"
        value={paste.content}
        placeholder='Enter content here'
        onChange={(e) => setValue(e.target.value)} // Update state on change
        rows={16}
      />

       
    </div>
    
    </div>
  )
}

export default ViewPaste