import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header()
{

    return <header className="bg-white text-dark p-5 m-auto">
 
 <div className="container flex justify-between items-center pb-2 m-auto ">
  <h1 className="font-bold text-4xl d-flex"> <span><div className="bg-blue-8000 rounded w-3 h-5">FZL</div></span>  FZL</h1>

  <ul className="flex items-center gap-5">
    <Link href={"/"}>Home </Link>
    <Link href={"/pages/signIn"}><Button variant="outline">Sign in</Button> </Link>
  </ul>
 </div>

    </header>
}