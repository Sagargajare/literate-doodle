import React from "react";

import Image from "next/image";

import Button1 from "./buttons/Button1";
import Button2 from "./buttons/Button2";

type Props = {};

const Hero = (props: Props) => {
  const lazyRoot = React.useRef(null);
  console.log(props);
  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-col  lg:flex-row py-10  h-full">
        <div className="m-auto p-2">
          <div className="mb-4">
            <h2 className="font-sofia text-4xl font-medium text-[#0d0c22]">
              {" "}
              Hi, my name is Sagar
            </h2>
          </div>
          <div>
            <h3 className="font-sofia text-4xl font-semibold text-[#0d0c22]">
              I am Fullstack developer with knowledge of MERN Stack, Django and
              Flask and Blockchain Enthusiast
            </h3>
          </div>
          <div className="mt-5">
            <Button2>Project</Button2>
            <Button1>Resume</Button1>
          </div>
        </div>
        <div className="p-2">
          <Image lazyRoot={lazyRoot} src="/Hero.png" width="900" height="900" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
