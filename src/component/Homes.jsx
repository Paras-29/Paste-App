import React, { useEffect, useState } from 'react'
import  { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const Homes = () => {

  const[title,setTitle]=useState('');
  const [value, setValue] = useState(''); 
  const[searchParams,setSearchParams]=useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch()
  const allPastes = useSelector((state)=>state.paste.pastes);


  useEffect(()=>{
    if(pasteId){
      const paste = allPastes.find((p)=>
      p._id === pasteId);
      setTitle(paste.title);
      setValue(paste.content);
    }
  },[pasteId])


  function createPaste(){
    const paste = {
      title:title,
      content:value,
      _id:pasteId || Date.now().toString(36),
      createdAt:new Date().toISOString(),
    }
    

    if(pasteId){
      //update
      dispatch(updateToPastes(paste))
    }else{
      //create
      dispatch(addToPastes(paste))
    }

    //after creation or updation
    setTitle('');
    setValue('');
    setSearchParams({});

  }

  return (
    <div>
      <div className='flex flex-row gap-8 justify-between'>
      <input className='p-2 rounded-2xl  mt-2 min-w-[60%]'
       type="text"
       placeholder='enter value here'
       value={title}
       onChange={(e)=>setTitle(e.target.value)}/>

       <button onClick={createPaste}
        className='p-2 rounded-2xl  mt-2 '>
        {
          pasteId?"Update Paste" : "Create My Paste"
        }
       </button>
    </div>
    <div className='mt-4'>
      <textarea
        className='p-4 min-w-[500px] rounded-2xl'
        type="text"
        value={value}
        placeholder='Enter content here'
        onChange={(e) => setValue(e.target.value)} // Update state on change
        rows={16}
      />

       
    </div>
    </div>
  
  )
}

export default Homes