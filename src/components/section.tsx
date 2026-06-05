import { cn } from "@/lib/utils";

  
export const Section = ({className,children}: Readonly<{
  children: React.ReactNode;className?: string;
}>) => {
  return (
    <section className="  min-h-[40vh] flex justify-center mb-5 p-6 sm:px-6 lg:px-8 overflow-hidden    text-center ">
      <div    className={cn(
        "max-w-7xl mx-auto",
        className
      )}       >{children}</div>
    </section>
  );
};
