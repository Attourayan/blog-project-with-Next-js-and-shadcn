import { cn } from "@/lib/utils";

  
export const Section = ({className,children}: Readonly<{
  children: React.ReactNode;className?: string;
}>) => {
  return (
    <section className=  " not-odd: min-h-[40vh] flex justify-center items-center mb-5 px-1   text-center sm:px-6 lg:px-8 overflow-hidden     ">
      <div    className={cn(
        " md:max-w-7xl mx-auto      ",
        className
      )}       >{children}</div>
    </section>
  );
};
