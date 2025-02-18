"use client";

import { motion } from "framer-motion";
import "swiper/css";
import { useState } from "react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi aut doloremque eligendi expedita fuga laboriosam.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi aut doloremque eligendi expedita fuga laboriosam.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi aut doloremque eligendi expedita fuga laboriosam.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

const WorkPage = () => {
  const [project, setProject] = useState(projects.at(0));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={"min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"}
    >
      <div className={"container mx-auto"}>
        <div className={"flex flex-col xl:flex-row xl:gap-[30px]"}>
          <div
            className={
              "w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none"
            }
          >
            <div className={"flex flex-col gap-[30px] h-[50%]"}>
              <div
                className={
                  "text-8xl leading-none font-extrabold text-transparent text-outline "
                }
              >
                {project.num}
              </div>

              <h2
                className={
                  "text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize"
                }
              >
                {project.category} project
              </h2>
              <p className={"text-white/60"}>{project.description}</p>
              <ul className={"flex gap-4"}>
                {project.stack.map((item, index) => (
                  <li key={index} className={"text-xl text-accent"}>
                    {item.name}
                    {index !== project.stack.length - 1 && ", "}
                  </li>
                ))}
              </ul>

              <div className={"border border-white/20"}></div>

              <div className={"flex items-center gap-4"}>
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className={
                          "w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"
                        }
                      >
                        <BsArrowUpRight
                          className={
                            "text-white text-3xl group-hover:text-accent"
                          }
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className={
                          "w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"
                        }
                      >
                        <BsGithub
                          className={
                            "text-white text-3xl group-hover:text-accent"
                          }
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className={"w-full xl:w-[50%]"}>slide</div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkPage;
