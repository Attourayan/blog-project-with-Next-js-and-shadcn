import { navItems } from "@/lib/constants";
import Link from "next/link";
import { ThemToggle } from "./themToggle";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md  border-b border-border/50">
      <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo or Brand Name */}
          <div className="flex shrink-0  ">
            <h1 className="text-xl font-serif font-bold text-foreground">
              My Brand{" "}
            </h1>
          </div>
          {/* Navigation Links */}
          <div className="hidden sm:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200  px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
            { /* button toggle switch them mode  */}
         <ThemToggle/>
          </div>
        </div>
      </div>
    </nav>
  );
}
