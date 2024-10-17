"use client";
import DashboardLayout from "@/layout/DashboardLayout";
import React, { useMemo } from "react";
import { Tabs, rem } from "@mantine/core";
import courses from "@/constants/courses";
import LessonCard from "@/components/common/LessonCard";

const Course = ({ params }: { params: { course: string } }) => {
  const lessons = useMemo(() => {
    return courses.find(
      (e) => e.title.toLowerCase() === params.course.toLowerCase()
    )?.lessons;
  }, [params]);
  return (
    <div>
      <DashboardLayout>
        <section className="mb-[28px] bg-[#222]  pb-[32px] rounded-[16px]">
          <h3 className="text-lg font-medium px-6 py-7">{params.course}</h3>

          <div>
            <div className="w-full h-[370px] bg-[#323232] mb-6"></div>

            <Tabs defaultValue="gallery" className="px-[24px]">
              <Tabs.List className="gap-7 mb-6 border-b-[#545454] border-b">
                <Tabs.Tab value="resources" className="font-medium py-4 mr-7">
                  Resources
                </Tabs.Tab>
                <Tabs.Tab value="lessons" className="font-medium py-4 mr-7">
                  Lessons in course
                </Tabs.Tab>
                <Tabs.Tab value="quiz" className="font-medium py-4 mr-7">
                  take Quiz
                </Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="resources">
                <div className="mb-[40px]">
                  <span className="text-[#a8a8a8] mb-[18px]">Blockchain</span>
                  <h3 className="text-2xl font-semibold">
                    Introduction to Blockchain
                  </h3>
                </div>
                <div className="mb-[40px]">
                  <h4 className="text-lg font-semibold mb-[12px]">
                    Description
                  </h4>
                  <p className="text-[#a8a8a8] max-w-[720px]">
                    Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.Rorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Nunc vulputate libero et velit interdum, ac aliquet
                    odio mattis.Rorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nunc vulputate libero et velit interdum, ac
                    aliquet odio mattis.
                  </p>
                </div>

                <div className="mb-[40px]">
                  <h4 className="text-lg font-semibold mb-[9px] leading-6">
                    Useful links
                  </h4>
                  <p className="text-[#a8a8a8]">example.com</p>
                </div>
              </Tabs.Panel>

              <Tabs.Panel value="lessons" className="space-y-4 > * + *">
                {lessons?.map((lesson, i) => (
                  <LessonCard
                    key={lesson.title}
                    {...lesson}
                    isPlaying={i === 0}
                  />
                ))}
              </Tabs.Panel>

              <Tabs.Panel value="quiz">Settings tab content</Tabs.Panel>
            </Tabs>
          </div>
        </section>
      </DashboardLayout>
    </div>
  );
};

export default Course;
