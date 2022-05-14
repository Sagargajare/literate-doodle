import Image from "next/image";
import React from "react";

type Props = {};

const AboutMe = (props: Props) => {
  console.log(props);
  return (
    <div className="mx-auto max-w-6xl ">
      <div className="flex flex-row">
        <div className="basis-1/2">
          <h1 className="font-sofia font-bold text-[#0d0c22] text-4xl">
            About Me
          </h1>
          <div className="text-base text-[#0d0c22] leading-7 ">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              eius accusamus repudiandae quasi natus tempore obcaecati. Dolore
              iure explicabo nemo. Laudantium eligendi veniam sed error quo
              asperiores incidunt doloremque ut, deserunt odit labore nulla
              corrupti a, facilis doloribus accusantium sequi minima? Sed
              voluptas iste maiores, et id animi dignissimos dolore.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
              recusandae cumque expedita dolorem qui et reprehenderit quod,
              itaque placeat sunt porro ipsam? Ex, odio aliquid.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
              recusandae cumque expedita dolorem qui et reprehenderit quod,
              itaque placeat sunt porro ipsam? Ex, odio aliquid.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
              recusandae cumque expedita dolorem qui et reprehenderit quod,
              itaque placeat sunt porro ipsam? Ex, odio aliquid.
            </p>
          </div>
        </div>
        <div className="basis-1/2">
          <div className="flex items-center justify-center">
            <Image
              className="my-auto"
              src="/Hero.png"
              width="500"
              height="500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
