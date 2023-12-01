import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instance from "../../axios";
import { tokenConfig } from "../../Config/Config";
const Course = ({ course_name,
  //  moduleLevel,
  // completionLevel,
  // timeleft,
  completion_percentage,
  completed_lessons,
  total_lessons,
  course_id }) => {
  const [percent, setPercent] = useState(0);

  const getPercentCompleted = () => {
    instance
      .get(`/services/percent_complete/${course_id}/`, tokenConfig())
      .then((res) => {
        console.log(res, "cou");

        setPercent(res.data.completion_percentage);
      })
      .catch((err) => {
        console.log(err);
      });
  }; 

  useEffect(() => {
    getPercentCompleted()
  }, [])
  return (
    <Link
      className="flex flex-col pt-[2rem] px-[1.5rem] pb-[2.3125rem] bg-[#DCDEF9] rounded-[5px] w-full font-lato"
      to={`/dashboard/course/${course_id}`}
    >
      <p className="mb-[1rem] font-[500] text-[1.5rem]">{course_name}</p>
      <p className="mb-[1rem] text-[12px] font-[500] text-[#4A4A4A]">
        {total_lessons}
      </p>
      <div className="mb-[2.5rem]">
        <div className="flex justify-between mb-[0.5rem]">
          <p className="text-[#303030] font-[400] text-[12px]">
            Module {completed_lessons} of {total_lessons} 
          </p>{" "}
          {/* <p>{timeleft}</p> */}
        </div>
        <div className="w-full bg-[#f9f9f9] rounded-[10px] h-[10px]">
          <div
            className="bg-[#5A0C91] rounded-[10px] h-full"
            style={{ width: `${completion_percentage}` }}
          ></div>
        </div>
      </div>
      <button className="py-[10px] px-[1.25rem] rounded-[10px] bg-[#5A0C91] text-[white]">
        Continue learning
      </button>
    </Link>
  );
};

export default Course;
