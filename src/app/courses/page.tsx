import CourseCard from "@/components/common/CourseCard";
import courses from "@/constants/courses";
import DashboardLayout from "@/layout/DashboardLayout";
import React from "react";

const Courses = () => {
  return (
    <DashboardLayout>
      <section className="mb-[28px] border-b border-[#545454] pb-[32px]">
        <h3 className="text-lg font-semibold mb-5">Recommended Courses</h3>
        <div className="grid grid-cols-3 gap-6">
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
      </section>
      <section className="">
        <h3 className="text-lg font-semibold mb-5">All Courses</h3>
        <div className="grid grid-cols-3 gap-6">
          {courses?.map((course) => (
            <CourseCard
              key={course.title}
              title={course.title}
              content={course.descriptiopn}
              time={course.duration}
              courseImage={course.courseImage}
            />
          ))}
        </div>
      </section>
    </DashboardLayout>
  );
};

export default Courses;
