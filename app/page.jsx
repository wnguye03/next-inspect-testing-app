import MemberCard from '../components/MemberCard';
import ClientComponent from '../components/ClientComponent';
import Form from '../components/Form';


async function getMembers() {
  try {
    const res = await fetch('http://localhost:3000/api/member');
    console.log("success");
    return res.json();
  } catch (error) {
    console.log(error);
  }
  
}
 
export default async function Page() {
  const data = await getMembers();

  
 
  console.log(data);
  return (
    <div className='flex flex-col mt-10 gap-10'>
    
     
      {data.map((member) => {
        return <MemberCard key={member._id} firstName={member.firstName} lastName={member.lastName}/>

      })}
      
      <ClientComponent/>
      
   
      
      
      
    </div>
  )
}