import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';

const Paste = () => {

  const pastes = useSelector((state)=>
  state.paste.pastes);

  const[searchTerm,setSearchTerm] = useState('')

  const dispatch = useDispatch();

  const filterData = pastes.filter(
    (paste) =>paste.title.
    toLowerCase().includes
    (searchTerm.toLowerCase())
  )

  function handleDelete(pasteId){
    dispatch(removeFromPastes(pasteId));
  }

  return (
    <div>
      <input
      className='p-2 rounded-2xl min-w-[600px] mt-4'
       type="search "
       placeholder='search here'
       value={searchTerm}
       onChange={(e) => setSearchTerm(e.target.value)}
       />
       <div className='flex flex-col gap-4 text-white mt-5'>
        {
          filterData.length > 0 &&
          filterData.map(
            (paste) => {
              return (

                <div className='border-2 border-zinc-500' key={paste?._id}>
                  <div>
                  {paste.title}
                  </div>

                  <div>
                  {paste.content}
                  </div>

                  <div className='flex flex-row gap-4 place-content-evenly text-black p-5'>
                    <button>
                    <a href={`/?pasteId=${paste?._id}`}>
                      Edit
                     </a>
                    </button>
                    <button>
                    <a href={`/pastes/${paste?._id}`}>
                      View
                     </a>
                    </button>
                    <button onClick={() => {
                      navigator.clipboard.writeText
                      (paste?.content)
                      toast.success("copied to clipboard")
                      }}>
                      Copy
                      </button>
                    <button onClick={handleDelete}>
                      Delete
                    </button>
                    <button>
                      Share
                    </button>
                  </div>
                  <div>
                    {paste.createdAt}
                  </div>
                </div>

                
              )
            })
        }  
       </div>
    </div>
  )
}

export default Paste