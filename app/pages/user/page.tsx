"use client"
import {Suspense} from "react"
import UserComp from "./userComp"
export default function UserPage()
{

  return <Suspense fallback={<p>Loading page...</p>}>
    <UserComp/>
  </Suspense>
}