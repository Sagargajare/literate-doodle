import React from "react";

type Props = {};

function Project({}: Props) {
  const projects = (i: any) => (
    <div key={i} className="flex justify-center items-center my-32">
      <div className="basis-2/6 ">
        <div>
          <h2 className="text-[#0d0c22] font-semibold ">
            One-page Personal Website for Freelance Marketer, Nicole Warshauer
          </h2>
        </div>
        <div>
          <h1 className="text-base text-[#a4a4a4] mb-6">
            Website Design, Webflow Build
          </h1>
        </div>
        <div className="mb-5">
          <p className="text-base text-[#5c5b66] leading-7">
            This was a fully custom website that I designed from scratch in
            Figma, and then built in Webflow. The aim was to have a friendly,
            yet professional vibe. The site is very fast—with a Google Pagespeed
            score of 99 for desktop and 92 for mobile.
          </p>
        </div>
        <div className="pt-5">
          <a className="text-[#1f1f1f] font-semibold" href="#">
            Visit nicolewarshauer.com{" "}
          </a>
        </div>
      </div>
      <div className="basis-4/6 ">
        <div className="flex flex-wrap justify-center">
          <img
            className="m-auto"
            width={500}
            src="https://uploads-ssl.webflow.com/5e8c566954381032f62e178b/5ea3ff7ac07d782eac32f39f_nicole-webflow-project-opt.jpg"
          />
        </div>
      </div>
    </div>
  );
  return (
    <div className="mx-auto max-w-6xl ">
      <div>
        <h1 className="text-4xl font-sofia font-bold leading-9 text-[#0d0c22]">
          Featured Projects
        </h1>
      </div>
      <div className="">{[0, 1, 2, 4].map((i) => projects(i))}</div>
    </div>
  );
}

export default Project;
