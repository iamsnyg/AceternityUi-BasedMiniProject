"use client";
 
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/music_course.json";
import Link from "next/link";

function page() {
  return (
    <div className="min-h-screen py-12 mx-6 sm:mx-12 md:16 lg:mx-24  pt-36 bg-black">
        <h2 className="text-white text-lg md:text-4xl font-semibold  mb-8">All Courses: {courseData.courses.length}</h2>
        <div className="flex flex-wrap justify-center">
            {courseData.courses.map((course) => (
                <CardContainer className="inter-var" key={course.id}>
                <CardBody className="bg-gray-50 relative group/card m-5 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {course.title}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={course.image}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>

                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {course.description}
                  </CardItem>
                  
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as="h4"
                      
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      {course.instructor}
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      $ {course.price}
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
        </div>

    </div>
  )
}

export default page