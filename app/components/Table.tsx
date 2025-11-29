import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Delete from "./Delete"

import { Booking } from "@/lib/types";


export default function TableDemo({bookings}:{bookings:Booking[]}) {
  return (
    <Table>
      <TableCaption>A list of your sessions</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">#Session</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Duration</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {bookings.map((book) => (
          <TableRow key={book.id}>
            <TableCell className="font-medium">{book.id}</TableCell>
            <TableCell>{book.status}</TableCell>
            <TableCell>{book.durationHrs} hrs</TableCell>
            <TableCell>{book.date.toString()}</TableCell>
            <TableCell className="text-right flex gap-2 items-center justify-end">
              <span><Delete id={book.id}/> </span>
               <Button variant="outline"><Pencil/></Button>
                </TableCell>
          </TableRow>
        ))}
      </TableBody>
      
    </Table>
  );
}
