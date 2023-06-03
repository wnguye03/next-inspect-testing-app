'use client';
import React, {useState} from 'react';



const RamenCard = ({id, flavor, updateFlavor}) => {

  const [isUpdate, setIsUpdate] = useState(false);
  const [newFlavor, setNewFlavor] = useState(flavor);
  const [fetchedFlavor, setFetchedFlavor] = useState(flavor);

  async function handleClick(id, newFlavor){
    try {
      await updateFlavor(id, newFlavor);
      setIsUpdate(false);

      const {flavor} = await fetch(`http://localhost:3000/api/ramen/${id}`).then(data => data.json());

      setFetchedFlavor(flavor);

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      

      {isUpdate ? 
        <div>
          <input type="text" className='border-2 border-blue-500' value={newFlavor} onChange={e => setNewFlavor(e.target.value)}/>
          <button className="border-2 border-violet-200 m-5" onClick={(()=> handleClick(id, newFlavor))}> Confirm new flavor </button>
          <button className="border-2 border-violet-200 m-5" onClick={(()=> setIsUpdate(false))}> Cancel </button>
        </div>
        
        :
        <div>
          {fetchedFlavor}
          <button className="border-2 border-violet-200 m-5" onClick={(()=> setIsUpdate(true))}> Update Flavor </button>
        </div>
        
      }
      
    </div>
  )
}

export default RamenCard;