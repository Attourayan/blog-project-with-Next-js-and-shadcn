"use client";


import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ThemToggle } from "./themToggle";
import { navItems } from "@/lib/constants";
import Link from "next/link";
import { useState } from "react";

const MobileNavigation = () => {

const [isOpen,setIsOpen] = useState(false);



  return (
    <div className="flex  space-x-5 md:hidden ">
      <Sheet open={isOpen}>
         <ThemToggle   />
        <SheetTrigger asChild >
          <button
          onClick={()=>setIsOpen(true)}
            type="button"
            className="text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary rounded-sm p-1"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            {" "}
            <Menu />
          </button>
        </SheetTrigger>
        <SheetContent   >
          <SheetTitle></SheetTitle>
        <div className="flex flex-col   items-left mt-8 p-5 space-y-10">
          {navItems.map((item)=>
            <Link key={item.name
            } href={item.href} onClick={()=>setIsOpen(false)}  className="text-sm font-sans text-muted-foreground hover:text-primary  hover:underline font-bold transition-colors duration-300">{item.name}</Link>
          )}
        </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavigation;
