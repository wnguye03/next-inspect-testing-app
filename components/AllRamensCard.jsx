'use client'
import RamenCard from "./RamenCard";

async function getRamens() {
  try {
    const res = await fetch('http://localhost:3000/api/ramen');
    console.log("success");
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

async function updateFlavor(id, flavor) {
  try {
    await fetch(`http://localhost:3000/api/ramen/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({flavor})
    });

    console.log("success");
  } catch (error) {
    console.log(error);
  }
}

const AllRamensCard = async () => {
  const data = await getRamens();

  return (
    <div className="border-2 border-orange-400"> 
      <h1> AllRamensCard Component</h1>
      {data.map((ramen) => {
        console.log(ramen._id)
        return (
          <RamenCard key={ramen._id} id={ramen._id}flavor={ramen.flavor} updateFlavor={updateFlavor}/>
          // <RamenCard key={ramen._id} flavor={ramen.flavor}/>
        )
      })}
      
    </div>
  )
}

export default AllRamensCard
