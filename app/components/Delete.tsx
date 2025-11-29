"use client"

import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Trash } from "lucide-react";

import { deleteBooking } from "@/api";

export default function removeSession({id}: {id:string})
{


function deleteSession() 
{


  deleteBooking(id)
  .then(res=>{
    console.log(res)
    if(res.succcess)
    {

      alert("succcessfully deleted your session")
    }
  })

}


     return <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="destructive"><Trash/></Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete your session</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete your driving session?
            </DialogDescription>
          </DialogHeader>
         

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={()=>deleteSession()} type="submit">Delete session</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
}
