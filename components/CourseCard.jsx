"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";

import Link from "next/link";
import { emailState } from "@/app/recoilContextProvider";
import { useRecoilValue } from "recoil";
import Image from "next/image";
import { useRouter } from "next/navigation";

function CourseCard({ course }) {
  console.log(course);
  const router = useRouter();
  const email = useRecoilValue(emailState);
  const handleEdit = () => {
    router.push("/edit-course", undefined, {
      shallow: true,
      state: { data: course },
    });
  };
  return (
    <Card className="mt-6 ml-8 mb-16 w-80 md:ml-14 lg:ml-28">
      <CardHeader color="blue-gray" className="mt-5 h-56 sm:h-48">
        <Image
          src={course.imageLink}
          width={450}
          height={450}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {course.title}
        </Typography>
        <Typography>{course.description}</Typography>
        <Typography>
          <span className="font-black font-md">Price:&nbsp;</span>
          {course.price}&nbsp;$
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 justify-center">
        <Button className="m-4 w-24 ml-4" onClick={handleEdit}>
          Edit
          {/* <Link
            href={{
              pathname: "/edit-course",
              query: course,
            }}
            // as={"/edit-course"}
          >
            Edit
          </Link> */}
        </Button>
        <Button className="m-4 w-24">
          <Link href="/course-details">Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
export default CourseCard;
