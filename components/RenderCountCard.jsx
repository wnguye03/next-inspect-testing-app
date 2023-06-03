
async function getRenderCount() {
  try {
    await fetch('http://localhost:3000/api/renderCount', {method: 'PATCH'});

    const res = await fetch('http://localhost:3000/api/renderCount')
    
    console.log("success");
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

const RenderCountCard = async () => {
  const data = await getRenderCount();

  return (
    <div className="border-2 border-orange-400"> 
      <h1>RenderCountCard Component</h1>
      <h1>Total server side rendering: {data.count}</h1>
      
    </div>
  )
}

export default RenderCountCard;
