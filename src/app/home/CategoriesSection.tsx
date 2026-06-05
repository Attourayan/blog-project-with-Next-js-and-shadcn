import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Categories } from "@/lib/data";
import { ArrowRight, CalendarDays } from "lucide-react";
import * as motion from "motion/react-client";
import { Section } from "@/components/section";

export const CategoriesSection = () => {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="space-y-4"
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl capitalize pb-6 font-serif font-bold">
          {" "}
          explore topics.
        </h1>
        <p className="text-muted-foreground text-lg ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores eum,
          beatae voluptate corporis sed ut doloribus labore, nemo illo
          asperiores temporibus expedita, accusamus ipsum mollitia iusto animi
          facilis unde fuga.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className=" grid gap-6 grid-cols-1 md:grid-cols-4 lg:grid-cols-6  mt-4"
      >
        {Categories.map((category) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: category.id * 0.2 }}
              key={category.id}
            >
              <Card
                key={category.id}
                className="group  hover:scale-105 transition-transform duration-300  hover;shadow-lg"
              >
                <CardHeader>
                  <div
                    dangerouslySetInnerHTML={{ __html: category.icon }}
                    className="w-8 h-8 text-primary  group-hover:text-foreground group-hover:scale-110 transition-transform duration-300 mx-auto font-bold text-3xl"
                  />
                </CardHeader>

                <CardContent className="flex flex-col justify-center items-center gap-4">
                  <div className="font-sans text-lg text-primary  group-hover:text-foreground transition-colors duration-300">
                    {category.name}{" "}
                  </div>
                  <Badge className="rounded-sm  group-hover:bg-foreground group-hover:text-secondary dark:group-hover:text-primary transition-colors duration-200">
                    {" "}
                    {category.count} Posts{" "}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
};
