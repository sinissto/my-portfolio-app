"use client";

import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "(+32) 470 123 456" },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "sinisha.stojanovic@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Avenue des Communautes 4, 1140 Evere",
  },
  { icon: <FaPhoneAlt />, title: "Phone", description: "(+32) 470 123 456" },
];

const ContactPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className={"py-6"}
    >
      <div className={"container mx-auto"}>
        <div className={"flex flex-col xl:flex-row gap-[30px]"}>
          <div className={"xl:h-[54%] order-2 xl:order-none"}>
            <div className={"flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"}>
              <h3 className={"text-4xl text-accent"}>Let's work together</h3>
              <p className={"text-white/60"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                amet animi architecto aut blanditiis, corporis est inventore
                iste libero, natus nostrum perspiciatis quae, quam tempore
                voluptates. Atque exercitationem hic vel.
              </p>
              <form action="">
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-6"}>
                  <Input type={"firstname"} placeholder={"First name"} />
                  <Input type={"lastname"} placeholder={"Last name"} />
                  <Input type={"email"} placeholder={"Email address"} />
                  <Input type={"phone"} placeholder={"Phone number"} />
                </div>
                <Select>
                  <SelectTrigger className={"w-full"}>
                    <SelectValue placeholder={"Select a service"}></SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value={"est"}>Web development</SelectItem>
                      <SelectItem value={"cst"}>UI/UX Design</SelectItem>
                      <SelectItem value={"mst"}>Logo Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Textarea
                  className={"h-[200px]"}
                  placeholder={"Type your message here"}
                />

                <Button size={"md"} className={cn("max-w-40 mt-8")}>
                  Send message
                </Button>
              </form>
            </div>
          </div>
          <div
            className={
              "flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0"
            }
          >
            INFO
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactPage;
