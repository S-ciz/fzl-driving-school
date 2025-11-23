import Link from "next/link"

export default function NotFoundPage()
{
  return <div className=" h-screen flex justify-center items-center"> 
   
    <div className="py-10 px-5  text-center rounded border border-blue-300  shadow">
      <h1 className="text-[2rem] text-blue-500  font-bold">Page is not found</h1>
      <Link href={"/"}>
      <button className="bg-blue-500 text-white p-2 rounded cursor-pointer mt-5">Return to home</button></Link>
    </div>
  </div>

}