import MemberCard from '../components/MemberCard';
import ClientComponent from '../components/ClientComponent';


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
      {/* <MemberCard firstName={member1FN} lastName={member1LN}/>
      <MemberCard firstName={member2FN} lastName={member2LN}/>
      <MemberCard firstName={member3FN} lastName={member3LN}/>
      <MemberCard firstName={member4FN} lastName={member4LN}/>
      <MemberCard firstName={member5FN} lastName={member5LN}/> */}
      
      <ClientComponent/>
      
      
      
      
      
    </div>
  )
}