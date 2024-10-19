"use client";
import DashboardLayout from "@/layout/DashboardLayout";
import React, { useMemo, useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import courses from "@/constants/courses";
import LessonCard from "@/components/common/LessonCard";
import Button from "@/components/common/Button";
import Quiz from "@/components/modals/Quiz";

const Course = ({ params }: { params: { course: string } }) => {
  const [openModal, setOpenModal] = useState(false);
  const [playingLesson, setPlayingLesson] = useState(0);
  const courseData = useMemo(() => {
    return courses.find(
      (e) =>
        e.title.toLowerCase() ===
        decodeURIComponent(params.course).toLowerCase()
    );
  }, [params]);

  return (
    <div>
      <DashboardLayout>
        <section className="mb-[28px] bg-[#222]  pb-[32px] rounded-[16px]">
          <h3 className="text-lg font-medium px-6 py-7">
            {decodeURIComponent(params.course)}
          </h3>

          <div>
            <div className="w-full h-[370px] bg-[#323232] mb-6">
              <iframe
                width="425"
                height="344"
                src={
                  courseData?.lessons &&
                  courseData?.lessons[playingLesson]?.source
                }
                frameBorder="0"
                allowFullScreen
                className="w-full h-full object-contain"
                title={
                  courseData?.lessons &&
                  courseData?.lessons[playingLesson]?.title
                }
              ></iframe>
            </div>

            <Tabs.Root className="w-full" defaultValue="resources">
              <Tabs.List
                className="gap-7 mb-6 border-b-[#545454] border-b"
                aria-label="Manage your account"
              >
                <Tabs.Trigger
                  className="font-medium text-base py-4 mr-7 data-[state=active]:border-b data-[state=active]:border-white"
                  value="resources"
                >
                  Resources
                </Tabs.Trigger>
                <Tabs.Trigger
                  className="font-medium text-base py-4 mr-7 data-[state=active]:border-b data-[state=active]:border-white"
                  value="lessons"
                >
                  Lessons in course
                </Tabs.Trigger>
                <Tabs.Trigger
                  className="font-medium text-base py-4 mr-7 data-[state=active]:border-b data-[state=active]:border-white"
                  value="quiz"
                >
                  Take quiz
                </Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content
                className="grow rounded-b-md  p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
                value="resources"
              >
                <div className="mb-[40px]">
                  <span className="text-[#a8a8a8] mb-[18px]">
                    {courseData?.category}
                  </span>
                  <h3 className="text-2xl font-semibold">
                    {decodeURIComponent(params.course)}
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
              </Tabs.Content>
              <Tabs.Content className="space-y-4 > * + *" value="lessons">
                {courseData?.lessons?.map((lesson, i) => (
                  <LessonCard
                    key={lesson.title}
                    {...lesson}
                    isPlaying={i === playingLesson}
                    onClick={() => {
                      setPlayingLesson(i);
                    }}
                  />
                ))}
              </Tabs.Content>
              <Tabs.Content value="quiz">
                <h3 className="text-2xl font-semibold text-[#DCBBFF] mb-4">
                  Attention!
                </h3>

                <ul className="list-disc !p-0  space-y-6 > * + * mb-6">
                  <li className="font-normal text-[#D2D2D2]">
                    You will have to complete all the lessons in this course to
                    take the quiz. If you haven’t go back and do so.
                  </li>

                  <li>
                    NFT Certificates will be awarded to students who scored{" "}
                    <span className="text-[#DCBBFF]">at least 80%.</span>
                  </li>

                  <li>
                    You only have{" "}
                    <span className="text-[#DCBBFF]">2 chances.</span> If you
                    don’t score up to 80%, sorry we don’t have a certificate for
                    you.
                  </li>
                </ul>
                <p className="text-[#DCBBFF] italic">Best of luck, champ!</p>

                {courseData?.quiz && (
                  <Quiz title={params.course} quiz={courseData?.quiz} />
                )}
              </Tabs.Content>
            </Tabs.Root>
          </div>
        </section>
      </DashboardLayout>
    </div>
  );
};

export default Course;
