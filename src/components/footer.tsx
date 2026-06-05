import { Section } from "./section";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import * as motion from "motion/react-client";
const socialLinks = [
  { name: "Facebook", icon: <FaFacebook size={20} />, url: "#" },
  { name: "Twitter", icon: <FaTwitter size={20} />, url: "#" },
  { name: "Instagram", icon: <FaInstagram size={20} />, url: "#" },
  { name: "LinkedIn", icon: <FaLinkedin size={20} />, url: "#" },
];

const quickLinks = [
  { name: "Home", url: "#" },
  { name: "About", url: "#" },
  { name: "Services", url: "#" },
  { name: "Contact", url: "#" },
];

const Footer = () => {
  return (
    <Section className="w-full">
      <footer className="bg-background py-5 text-center text-muted-foreground border-t border-border/50 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 p-5">
          {/* resonance */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-serif font-medium ">resonance</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              vel voluptatibus laudantium aut.
            </p>
            <div className="flex justify-center items-center p-2">
              {socialLinks.map((link) => {
                return (
                  <a
                    key={link.name}
                    href="{link.url}"
                    className="text-primary hover:text-primary/50 transition-colors duration-300 mx-2"
                  >
                    {link.icon}
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/*     quick links */}
          <motion.div
            className="px-20 space-y-2"
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-serif font-medium text-left">
              quick links
            </h3>
            <ul className="mt-2 text-left space-y-2">
              {quickLinks.map((link) => {
                return (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      className="text-primary hover:text-primary/60 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* stay updated */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-serif font-medium "> stay updated </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <div className="mt-4 flex justify-center items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="px-4 py-2 bg-primary text-white rounded-r-md hover:bg-primary/80 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-border/50 p-5">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} My Company. All rights reserved.
            </p>
            <p className="text-sm mt-2">Made By AM.</p>
   
        </div>
      </footer>
    </Section>
  );
};

export default Footer;
