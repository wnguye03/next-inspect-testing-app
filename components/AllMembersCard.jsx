
async function getMembers() {
  try {
    const res = await fetch('http://localhost:3000/api/member');
    console.log("success");
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

const AllMembersCard = async () => {
  const data = await getMembers();

  return (
    <div className="border-2 border-orange-400"> 
      <h1> AllMembersCard Component</h1>
      {data.map((member) => {
        return (
          <p key={member._id} className="border-2 border-green-200">
            {member.firstName} 
            {member.lastName}
          </p>
        )
      })}
      
    </div>
  )
}

export default AllMembersCard
