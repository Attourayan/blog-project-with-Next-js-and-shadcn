import { cn } from "@/lib/utils";

  
export const Section = ({className,children}: Readonly<{
  children: React.ReactNode;className?: string;
}>) => {
  return (
    <section className="  min-h-[90vh] flex justify-center  px-3 sm:px-6 lg:px-8 overflow-hidden    text-center">
      <div    className={cn(
        "max-w-7xl mx-auto",
        className
      )}       >{children}</div>
    </section>
  );
};
