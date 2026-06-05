import { Section } from "@/components/section";
import { quotes } from "@/lib/data";
import { Quote } from "lucide-react";
import * as motion from "motion/react-client";

const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

export const QuatesSection = () => {
  const randomQuote = getRandomQuote();
  console.log(randomQuote);
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col justify-center items-center gap-8 text-primary  ">
          <Quote size={35} />
          <blockquote className="text-xl font-sans italic   leading-relaxed">
            "{randomQuote.text}"
          </blockquote>
          <cite className="font-serif text-lg capitalize  ">
            -{randomQuote.author}
          </cite>
        </div>
      </motion.div>
    </Section>
  );
};
