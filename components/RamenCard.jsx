'use client';

const RamenCard = ({key, flavor, updateFlavor}) => {
  return (
    <div>
      {flavor}
      <button className="border-2 border-violet-200 m-5" onClick={(()=> updateFlavor(id))}> Update Flavor </button>
    </div>
  )
}

export default RamenCard;