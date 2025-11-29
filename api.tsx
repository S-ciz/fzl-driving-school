import { Booking } from "./lib/types";

const BASE_URL = process.env.NEXT_PUBLIC_API;

const headers = {
  "Content-Type": "application/json",
};


export function genID()
{
   const alpha = 'abcdefghijklmnopqrstuvwxyz'
   const number = '0123456789'
   const chars = alpha + number + alpha.toUpperCase() 
   const n = chars.length - 1
   const maxchar = 10
   let id = ""
   for(let i = 0; i < maxchar; i++) 
   {
      const random = Math.floor(Math.random()*n)
      id += chars[random]
   }

   return id;
}

//login
export async function getUser(email: string, password: string) {
  const res = await fetch(`${BASE_URL}/fzl/api/login`, {
    headers,
    method: "POST",
    body: JSON.stringify({ email: email, password: password }),
  });

  return await res.json();
}
export async function getAllUsers() {
  const res = await fetch(`${BASE_URL}/fzl/api/users`, {
    headers,
    method: "GET",
  });

  return await res.json();
}


//bookings
export async function getBookings() {
  const res = await fetch(`${BASE_URL}/fzl/api/bookings`, {
    headers,
    method: "GET",
  });

  return await res.json();
}

export async function  postBooking(booking:Booking) 
{
     const res = await fetch(`${BASE_URL}/fzl/api/bookings`, {
    headers,
    method: "POST",
    body: JSON.stringify(booking),
  });

  return await res.json();
}

export async function getBooking(id: string) {

  const res = await fetch(`${BASE_URL}/fzl/api/bookings/${id}`, {
    headers,
    method: "GET",
  });

  return await res.json();
}


export async function deleteBooking(id:string) 
{
  
 const res = await fetch(`${BASE_URL}/fzl/api/bookings/${id}`, {
    headers,
    method: "DELETE",
  });

  return await res.json();
}