"use client";
import Header from "@/app/components/Header";
import { Button } from "@/components/ui/button";

import { getBookings } from "@/prisma/actions/booking";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import React, { useEffect, useState} from "react";
import { useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Booking } from "@/lib/types";
import TableDemo from "@/app/components/Table";

function DialogDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Book new session</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Book a new session</DialogTitle>
            <DialogDescription>
              Create a new sessiont to book a lesson
            </DialogDescription>
          </DialogHeader>
          {/* Content goes here */}
          <Label>Pick a date</Label>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow-sm"
            captionLayout="dropdown"
          />
          <Label>Time</Label>
          <Input placeholder="Time" type="time" />

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}


export default function UserComp({}) {
  const searchParams = useSearchParams();
  const id = Number(searchParams.get("id"));
  const [bookings, setData] = useState<Booking[]>();

  useEffect(() => {
    getBookings(id).then((res) => setData(res));
  }, [id]);

  function status(): { pend: number; completed: number } {
    if (bookings == undefined) {
      return { pend: 0, completed: 0 };
    }

    return {
      pend: bookings.filter((item: Booking) => item.status === "PENDING")
        .length,
      completed: bookings.filter((item: Booking) => item.status === "COMPLETED")
        .length,
    };
  }

 
  return (
    <>
      <Header />
      <div className="dashboard container p-1 flex gap-5 flex-wrap m-auto mt-5">
        <div className=" transition-all duration-700 hover:transform-[scale(0.9)] p-5 py-10 flex-1 bg-blue-700 rounded text-center">
          <h1 className="text-blue-100">Pending</h1>
          <h1 className="text-4xl text-white font-bold"> {status().pend}</h1>
        </div>
        <div className=" transition-all duration-700 hover:transform-[scale(0.9)] p-5 py-10 flex-1 bg-blue-500 rounded text-center">
          <h1 className="text-blue-100">Completed</h1>
          <h1 className="text-4xl text-white font-bold">
            {status().completed}
          </h1>
        </div>
      </div>

      <div className="container px-5 py-5 m-auto flex justify-between items-center">
        <span className="text-3xl">Book new session</span>
        <DialogDemo />
      </div>

      <div className="container p-4 m-auto">
        {/* Table for sessions*/}
        {bookings !== undefined && <TableDemo bookings={bookings} />}
      </div>
    </>
  );
}
