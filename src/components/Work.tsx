import React from "react";

type Props = {};

function Work({}: Props) {
  return (
    <div className="mx-auto max-w-6xl h-screen">
      <div className="my-12">
        <h1 className="text-3xl text-black font-extrabold">What I Do?</h1>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="p-6">
          <div className="my-4">
            <img
              src="https://uploads-ssl.webflow.com/5e8c566954381032f62e178b/5ea3f1e4d3a80f41e2c133ef_ux-ui-design.svg"
              width={50}
            />
          </div>
          <div className="text-black font-semibold my-2 py-2">Blockchain</div>
          <div className="">
            <p className="font-normal text-base leading-7 text-[#5c5b66] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              repellendus suscipit cupiditate adipisci neque, assumenda animi
              distinctio vel blanditiis labore accusamus! Exercitationem quasi
              aspernatur dolorum debitis earum explicabo similique vel!
            </p>
          </div>
          <div className="">
            <a className="text-black font-semibold">Contact</a>
          </div>
        </div>
        <div className="p-6">
          <div className="my-4">
            <img
              src="https://uploads-ssl.webflow.com/5e8c566954381032f62e178b/5ea3f1e4d3a80f41e2c133ef_ux-ui-design.svg"
              width={50}
            />
          </div>
          <div className="text-black font-semibold my-2 py-2">Blockchain</div>
          <div className="">
            <p className="font-normal text-base leading-7 text-[#5c5b66]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              repellendus suscipit cupiditate adipisci neque, assumenda animi
              distinctio vel blanditiis labore accusamus! Exercitationem quasi
              aspernatur dolorum debitis earum explicabo similique vel!
            </p>
          </div>
          <div className="">
            <a className="text-black font-semibold">Contact</a>
          </div>
        </div>
        <div className="p-6">
          <div className="my-4">
            <img
              src="https://uploads-ssl.webflow.com/5e8c566954381032f62e178b/5ea3f1e4d3a80f41e2c133ef_ux-ui-design.svg"
              width={50}
            />
          </div>
          <div className="text-black font-semibold my-2 py-2">Blockchain</div>
          <div className="">
            <p className="font-normal text-base leading-7 text-[#5c5b66]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              repellendus suscipit cupiditate adipisci neque, assumenda animi
              distinctio vel blanditiis labore accusamus! Exercitationem quasi
              aspernatur dolorum debitis earum explicabo similique vel!
            </p>
          </div>
          <div className="">
            <a className="text-black font-semibold">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
