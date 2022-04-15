import React from "react";

type Props = {};

const AllProjects = (props: Props) => {
  return (
    <div className="mx-auto max-w-6xl ">
      <div>
        <h1 className="text-4xl font-sofia my-32 font-bold leading-9 text-[#0d0c22]">
          Recent Dribbble shots
        </h1>
      </div>
      <div className="mt-6 space-y-6">
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                
              >
               <img className="p-5 rounded-sm" src="https://uploads-ssl.webflow.com/5e8c566954381032f62e178b/5faaf2643ab9e4775b5dbf81_metta-good-shopify-design-opt.jpg"/>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="text-center my-12">
       
            <a className="font-hind font-bold leading-9 text-[#ea4c89] p-5 border-solid border-1 border-[#ea4c89]-600 rounded-sm">View My Github</a>
         
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
