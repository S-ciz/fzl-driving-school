"use client"

import Header from "@/app/components/Header";
import Chart from "@/app/components/Chart";
import TableDemo from "@/app/components/Table";
import { getBookings, getAllUsers } from "@/api";
import { Booking } from "@/lib/types";

import { useState, useEffect } from "react";

export default function AdminPage() {

  const [bookings, setBookings] = useState<Booking[]>([])
  const [userCount, setCount] = useState<number>(0)

  useEffect(()=>{

    getBookings()
    .then(res=> console.log(setBookings(res.data)))
    .catch(err=>console.log(err))

    getAllUsers()
    .then(res=> setCount(res.data.length))

  }, [])
  return (
    <>
      <Header />
      <h1 className="text-5xl text-center p-5">
        Welcome back <span className="font-bold text-blue-400">admin</span>
      </h1>

      <div className="container m-auto grid md:gap-1 md:grid-cols-3 grid-cols-1 gap-3 p-5">
        <section className="col-span-2">
          {" "}
          <Chart />{" "}
        </section>
        <section className="flex p-5 flex-col rounded-2xl bg-blue-500 text-center flex-1 items-center justify-center">
          <h1 className="text-blue-200 pb-2 text-2xl">Students</h1>
          <h1 className="text-7xl text-white font-bold">{userCount <  10 ? `0${userCount}` : userCount}</h1>
        </section>
      </div>

      {/* Table  */}
      <h1 className="container text-blue-300 m-auto text-start px-6 pt-5 font-bold text-3xl">
        Upcoming and previous sessions
      </h1>
      <main className="container p-5 m-auto"> <TableDemo bookings={bookings} /> </main>
    </>
  );
}
