"use client";
import { Button, Typography } from "@material-tailwind/react";

import NavBarAfterLogin from "@/components/NavBarAfterLogin";

import { emailState } from "../recoilContextProvider";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/navigation";

const CourseDetails = () => {
  //   const location = useLocation();
  //   const { course } = location.state;
  const router = useRouter();
  //   const data = router.query;
  console.log(router);
  const email = useRecoilValue(emailState);

  //   console.log(course);

  const handleDelete = () => {};

  return (
    <>
      <NavBarAfterLogin />
      <Typography variant="h5" className="text-center m-4 ">
        {/* {course.title} */}
      </Typography>
      {/* <Typography variant="h6">{course.description}</Typography> */}
      <div className="bg-black text-white m-4  lg:flex lg:flex-row lg:m-4">
        <div className="m-4 lg:w-1/2 p-4">
          <Typography className="font-lg font-extrabold">
            A brief summary
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus
            efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus
            explicari qui ex, appareat similique an usu. Vel an hinc putant
            fierent, saperet legimus offendit sed ei doctus volumus explicari
            qui ex, appareat similique an usu. . Dolor euripidis cum eu, ea per
            lucilius periculis corrumpit, ut euismod omittam ancillae his.
          </Typography>
          <Typography className="text-gray-500 font-bold">
            John - General Manager
          </Typography>
        </div>
        <div className="m-4 lg:w-1/2 p-4">
          <Typography className="font-lg font-extrabold">
            What you will learn
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus
            efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus
            explicari qui.
          </Typography>
          <Typography>
            <div>✓Certified and expert teachers</div>
            <div>✓Extensive doumentation provided</div>
            <div> ✓Money back garantee</div>
            <div>✓Became an exeprt in only 6 days</div>
          </Typography>
        </div>
      </div>
      <div className="flex flex-col item-center m-8 lg:w-24 ">
        <Button onClick={handleDelete}>Delete</Button>
      </div>
    </>
  );
};

export default CourseDetails;
