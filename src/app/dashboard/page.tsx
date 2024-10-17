import Button from "@/components/common/Button";
import CourseCard from "@/components/common/CourseCard";
import courses from "@/constants/courses";
import DashboardLayout from "@/layout/DashboardLayout";
import React from "react";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="w-full  flex flex-col gap-[24px] ">
        <section className="bg-[#404040] rounded-[26px] w-full mb-6 p-6">
          <div className="w-full flex items-center justify-between mb-[28px]">
            <div>
              <h2 className="text-2xl leading-8 font-semibold">Hello, XOXO</h2>
              <p className="text-sm text-[#d2d2d2]">
                Let’s start your journey to mastering Web3.{" "}
              </p>
            </div>

            <Button text="View all course" withArrow={true} variant="fit" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-5">Recommeded courses</h3>
            <div className="w-full flex flex-row flex-wrap  gap-6">
              {courses?.slice(0, 3)?.map((course) => (
                <CourseCard
                  key={course.title}
                  title={course.title}
                  content={course.descriptiopn}
                  time={course.duration}
                  courseImage={course.courseImage}
                />
              ))}
            </div>
          </div>
        </section>

        <div className="grid grid-cols-2 gap-5 w-full">
          <div className="bg-[#404040] rounded-[30px] w-full h-[200px]"></div>
          <div className="bg-[#404040] rounded-[30px] w-full h-[200px]"></div>
        </div>

        <div className="bg-[#404040] rounded-[30px] w-full p-6">
          <h3 className="font-semibold text-lg mb-5">Recommeded courses</h3>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
