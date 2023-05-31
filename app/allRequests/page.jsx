
import AllMembersCard from "@/components/AllMembersCard";

const allRequestsPage = () => {
  return (
    <div className="grid grid-cols-2 gap-5 m-10 ">
      <div className="flex flex-col gap-5 border-2 border-purple-500 p-5 ">
        <h1> Server Components: </h1>
        <div id="server-fetch-get" className="border-2 border-pink-200 p-5">
          <h1> Request type: server-fetch-get </h1>
          <AllMembersCard/>
        </div>
        <div id="server-fetch-post-get" className="border-2 border-pink-200 p-5">
          <h1> Request type: server-fetch-post-get </h1>
        </div>
        <div id="server-fetch-patch-get" className="border-2 border-pink-200 p-5">
          <h1> Request type: server-fetch-patch-get </h1>
        </div>
        <div id="server-fetch-delete-get" className="border-2 border-pink-200 p-5">
          <h1> Request type: server-fetch-delete-get </h1>
        </div>
        
      </div>
      <div className="flex flex-col gap-5 border-2 border-indigo-500 p-5">
        <h1> Client Components: </h1>
        <div id="client-fetch-get" className="border-2 border-pink-200 p-5">
          <h1> Request type: client-fetch-get </h1>
        </div>
        <div id="client-fetch-post-get" className="border-2 border-pink-200 p-5">
          <h1> Request type: client-fetch-post-get </h1>
        </div>
        <div id="client-fetch-patch-get" className="border-2 border-pink-200 p-5">
          <h1> Request type: client-fetch-patch-get </h1>
        </div>
        <div id="client-fetch-delete-get" className="border-2 border-pink-200 p-5">
          <h1> Request type: client-fetch-delete-get </h1>
        </div>
      </div>
      
    </div>
  )
}

export default allRequestsPage;
