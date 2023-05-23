'use client';

async function getMembers() {
  try {
    const res = await fetch('http://localhost:3000/api/member');
    console.log("success");
    return res.json();
  } catch (error) {
    console.log(error);
  }
  
}

const ClientComponent = async () => {
  const data = await getMembers();
  const testMember = data[0]
  
  return (
    <div className='member_card'> 
      {testMember.firstName} {testMember.lastName}
    </div>
  )
}

export default ClientComponent;
