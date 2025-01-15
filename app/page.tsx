import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
  <div>
    <Navbar />  
   <div className="container mx-auto">
   <div className="text-center mt-16 h-screen">
      <h1 className='text-4xl'>Welcome to Maryams Next.js API</h1><br />
      <Link href={"api/external"}><button className="m-4 p-2 bg-yellow-500 rounded-lg border">Go to API</button></Link> 
    </div>
    
  </div>
   </div>
  )
}
