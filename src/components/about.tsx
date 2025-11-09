import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col relative mx-auto py-4 px-2 text-justify indent-0.5 text-sm">
      <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="100" className="my-1 px-2 mb-3">
        Hello! I&apos;m Adarsh Raj a MCA student at LPU Univerisity currently honing my skills in web development.
        Over the years, I have dabbled in various frameworks, starting with
        ReactJS and gradually transitioning to Next.js. Now, Next.js is my go-to
        framework for building efficient and scalable web applications.
      </h1>
      <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="250" className="my-1 px-2 mb-3">
        My journey into web development has been both challenging and rewarding.
        I&apos;ve enjoyed experimenting with different libraries and tools to enhance
        my projects. From the sleek and modern designs of Tailwind CSS to the
        comprehensive components of Bootstrap, each tool has taught me something
        new. Lately, I&apos;ve been exploring ShadCN, and it&apos;s been a fantastic
        addition to my toolkit, allowing me to create more refined and dynamic
        user interfaces.
      </h1>
      <h1 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="350" className="my-1 px-2 mb-3">
        In this portfolio, you&apos;ll find a showcase of my latest work, where I&apos;ve
        utilized Next.js, Tailwind CSS, and ShadCN to build responsive and
        visually appealing applications. My projects reflect my passion for
        clean code, intuitive design, and seamless user experiences. I&apos;m
        constantly learning and evolving, aiming to become a skilled Software
        Development Engineer (SDE) in the near future.
      </h1>
      <h1 className="text-2xl mt-8 underline underline-offset-4 decoration-sky-500 dark:decoration-sky-500/80 ">
        Links
      </h1>
      <ul className="list-disc pl-5 mt-3">
        <li className="mt-1">
          GitHub:{" "}
          <Link target="_blank" href={"https://github.com/adarsh07raj"}>
            {" "}
            <span className="underline underline-offset-2 text-sky-600 dark:text-sky-500 font-[500]">
              @adarsh07raj
            </span>
          </Link>
        </li>
        <li className="mt-1">
          Instagram:{" "}
          <Link target="_blank" href={""}>
            {" "}
            <span className="underline underline-offset-2 text-sky-600 dark:text-sky-500 font-[500]">
              @adarsh07raj
            </span>
          </Link>
        </li>
        <li className="mt-1">
          Twitter:{" "}
          <Link target="_blank" href={"https://github.com/adarsh07raj"}>
            {" "}
            <span className="underline underline-offset-2 text-sky-600 dark:text-sky-500 font-[500]">
              @adarsh07raj
            </span>
          </Link>
        </li>
        {/* <li className="mt-1">
          Quicklinks:{" "}
          <Link
            target="_blank"
            href={"https://adarsh07raj.github.io/LinkTree/"}
          >
            {" "}
            <span className="underline underline-offset-2 text-sky-600 dark:text-sky-500 font-[500]">
              https://adarsh07raj.github.io/LinkTree/
            </span>
          </Link>
        </li> */}
      </ul>

      <h1 className="text-2xl mt-8 underline underline-offset-4 decoration-sky-500 dark:decoration-sky-500/80 ">
        Education
      </h1>
      <div className="flex flex-col text-left">
        <Image
          src={"/lpu.png"}
          width={100}
          height={100}
          alt="gg"
          className="rounded-full w-20 h-20 my-2  border border-gray-600 p-1"
        ></Image>

        <p>
          Lovey Proffesional Unniversity
        </p>
        <p className="flex relative justify-end italic text-xs my-2">
          currently in 1st Sem
        </p>
      </div>
      <div className="flex flex-col text-left">
        <Image
          src={"/kvs.png"}
          width={100}
          height={100}
          alt="gg"
          className="rounded-full w-20 h-20 my-2 border border-gray-600 p-1"
        ></Image>

        <p>Aryabhatta Knowledge University</p>
        <p className="flex relative justify-end italic text-xs my-2">
          CGPA: 8.39
        </p>
      </div>
    </div>
  );
};

export default About;
