 
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PostFeatured } from "@/lib/data";
import { ArrowRight, CalendarDays } from "lucide-react";
import * as motion from "motion/react-client";
import Image from "next/image";
import { Section } from "@/components/section";

const FeaturedSection = () => {
  const posts = PostFeatured;

  return (
    <Section> 
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .9 }} className="space-y-6">
         <h1 className="text-2xl md:text-3xl lg:text-4xl capitalize pb-6 font-serif font-bold">
          {" "}
          featured insights.
        </h1>
        <p className="text-muted-foreground text-xl  lg:text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores eum,
          beatae voluptate corporis sed ut doloribus labore, nemo illo
          asperiores temporibus expedita, accusamus ipsum mollitia iusto animi
          facilis unde fuga.
        </p>
        </motion.div>
      
        <div className="grid md:grid-cols-2 gap-2 md:gap-6 mt-12">
          {posts.map((post) => {
            return (
              <motion.div  initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: post.id * 0.2 }} key={post.id}>
              <Card
                className="group border relative p-0  hover:shadow-2xl"

              >
                <CardHeader className="p-0 ">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={150}
                    height={150}
                    className="w-full h-auto object-cover group-hover:scale-110  transition-transform duration-300"
                  />
                  <Badge
                    
                    className="absolute top-3 left-3"
                  >
                    {post.category}
                  </Badge>
                </CardHeader>
                <CardContent className=" p-4 text-left gap-4 flex flex-col">

                  <div className=" flex justify-left items-center gap-2 text-muted-foreground text-sm">
                    <CalendarDays size={18} /> 
                    <span className="text-muted-foreground"> {post.date}</span>
                  </div>

                  <div className="text-2xl text-foreground font-bold font-serif capitalize group-hover:text-primary transition-colors duration-200"> {post.title}</div>

                  <div className="text-muted-foreground line-clamp-1">{post.except}</div>

                  <span className="group/more text-md  text-primary capitalize font-bold  cursor-pointer flex items-center gap-2 p-4  group-hover:underline transition-all duration-300 self-start">
                    read more <ArrowRight className="group-hover/more:translate-x-2  transition-transform duration-300" />
                  </span>
                </CardContent>
              </Card>
              </motion.div>
            );
          })}
        </div>
</Section>
  );
};
export default FeaturedSection;
