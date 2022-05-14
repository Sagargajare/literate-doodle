import React from 'react'

type Props = {}

const Certified = (props: Props) => {
  console.log(props)
  return (
    <div className="bg-[#F9F9F9] mx-auto max-w-6xl">
      <div className="flex flex-row py-6 px-3">
        <div className="basis-1/4">
          <h3 className="text-3xl text-[#0d0c22] leading-6 font-semibold">
            Certified With
          </h3>
        </div>
        <div className="basis-1/4">
          <h3 className="text-3xl text-[#0d0c22] leading-6 font-semibold">
            Udemy
          </h3>
        </div>
        <div className="basis-1/4">
          <h3 className="text-3xl text-[#0d0c22] leading-6 font-semibold">
            Coursera
          </h3>
        </div>
        <div className="basis-1/4">
          <h3 className="text-3xl text-[#0d0c22] leading-6 font-semibold">
            Hackerrank
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Certified;