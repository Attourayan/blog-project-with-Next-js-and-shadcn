import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import * as motion from "motion/react-client";
import React from "react";

const HeroSection = () => {
  return (
    <Section>
        <div className="grid lg:grid-cols-2 gap-12  items-center justify-center  ">
          {/* left content  */}
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <h2 className="text-4xl  md:text-6xl lg:text-7xl font-serif font-bold">
              Welcome to Our
              <span className="font-sans  text-primary  italic ">
                Website
              </span>
            </h2>
            <p className="max-w-xl px-2 text-sm  text-muted-foreground md:text-lg lg:text-justify">
              Your journey starts here. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Dolore magni aspernatur dignissimos soluta quas,
              nemo fuga recusandae consectetur, beatae nulla quam eaque? Minus
              eligendi voluptates eum perspiciatis quae, perferendis quam. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Dolore
              corporis quasi itaque placeat veritatis? Porro tempore ipsam, iste
              vero repudiandae beatae. Dolor id vitae amet ipsa quasi sint
              debitis nisi quas error nulla non adipisci fugit aperiam atque
              quibusdam omnis, asperiores, facere tempora tempore eius qui
              excepturi quidem molestias deleniti. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <Button className="  p-6 text-xl capitalize text-foreground group">
                
                read the latest post
                <ArrowRight className=" transition-transform   group-hover:translate-x-3 group-hover:font-bolder" />
              </Button>
            </motion.div>
          </motion.div>

          {/* right content  */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center relative py-6"
          >
            <div className="w-70 h-70 md:w-80  md:h-60 bg-gradient-to-br from-primary/20 to-secondary/20 absolute  rounded-full -top-10 -right-10 blur-3xl opacity-50 "> </div>
              <div className="w-70 h-70 md:w-96 md:h-96 rounded-2xl bg-gradient-to-tl from-secondary/30 to-primary/30   transform rotate-6 shadow-2xl"></div>
           
          </motion.div>
        </div>
     
    </Section>
  );
};

export default HeroSection;
