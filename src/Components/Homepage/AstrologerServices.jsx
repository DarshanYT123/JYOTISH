import React from "react";
import { BsSun } from "react-icons/bs";
import { RiFileList2Line } from "react-icons/ri";

const AstrologerServices = () => {
  return (
    <>
      <div className="py-5  ">
        <div className="py-3">
          <h1 className=" text-left text-[var(--Secondry-Color,#773101)] font-Lexend text-[26px] not-italic font-semibold leading-normal">
            {" "}
            Astrology Services{" "}
          </h1>
        </div>
        <div className="flex flex-row gap-7 items-center justify-center lg:pt-[5rem]">
          {/* first card */}
          <div class="relative group">
            <div className="border-[1.5px] border-[#A1A1A1] bg-[#FFF] group-hover:bg-[#FFD893] rounded-[6px] w-[280px] h-[340px] shadow-[rgba(174,174,174,0.25)_0px_4px_10px_0px] ">
              <div class="absolute bottom-[18rem] left-[100px]">
                <div className="border rounded-full border-[#FFA300] bg-[#FFF] w-[100px] h-[100px] mx-auto  group-hover:bg-[#FFA300] ">
                  <BsSun
                    size={50}
                    //  style={{ color: "#FFA300"  }}
                    // onMouseOver={({target})=>target.style.color="#FFF"}
                    // onMouseOut={({target})=>target.style.color="#FFA300"}
                    className="absolute bottom-[1.7rem] left-[1.5rem] changeColor text-[#FFA300] group-hover:text-[#FFFF]"
                  />
                </div>
              </div>
              <div className="pt-14">
                <h1 className="text-[20px] font-semibold not-italic leading-normal text-[#3A3A3A]">
                  Today’s Horoscope
                </h1>
              </div>
              <div className="pt-5 px-4">
                <p className="text-center font-Poppins text-[14px] font-normal not-italic leading-[165.523%] tracking-[0.49px] text-[#A1A1A1]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>

          {/* End */}

          {/* second card */}
          <div class="relative group">
            <div className="border-[1.5px] border-[#A1A1A1] bg-[#FFF] group-hover:bg-[#92EBFF] rounded-[6px] w-[280px] h-[340px] shadow-[rgba(174,174,174,0.25)_0px_4px_10px_0px] ">
              <div class="absolute bottom-[18rem] left-[100px]">
                <div className="border rounded-full border-[#04B4DB] bg-[#FFF] w-[100px] h-[100px] mx-auto  group-hover:bg-[#04B4DB] ">
                  <RiFileList2Line
                    size={50}
                    //  style={{ color: "#FFA300"  }}
                    // onMouseOver={({target})=>target.style.color="#FFF"}
                    // onMouseOut={({target})=>target.style.color="#FFA300"}
                    className="absolute bottom-[1.7rem] left-[1.5rem] changeColor text-[#04B4DB] group-hover:text-[#FFFF]"
                  />
                </div>
              </div>
              <div className="pt-14">
                <h1 className="text-[20px] font-semibold not-italic leading-normal text-[#3A3A3A]">
                  Free Kundli
                </h1>
              </div>
              <div className="pt-5 px-4">
                <p className="text-center font-Poppins text-[14px] font-normal not-italic leading-[165.523%] tracking-[0.49px] text-[#A1A1A1]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>

          {/* End */}

          {/* third card */}
          <div class="relative group">
            <div className="border-[1.5px] border-[#A1A1A1] bg-[#FFF] group-hover:bg-[#FF92A5] rounded-[6px] w-[280px] h-[340px] shadow-[rgba(174,174,174,0.25)_0px_4px_10px_0px] ">
              <div class="absolute bottom-[18rem] left-[100px]">
                <div className="border rounded-full border-[#DB042A] bg-[#FFF] w-[100px] h-[100px] mx-auto  group-hover:bg-[#DB042A] ">
                  <RiFileList2Line
                    size={50}
                    //  style={{ color: "#FFA300"  }}
                    // onMouseOver={({target})=>target.style.color="#FFF"}
                    // onMouseOut={({target})=>target.style.color="#FFA300"}
                    className="absolute bottom-[1.7rem] left-[1.5rem] changeColor text-[#DB042A] group-hover:text-[#FFFF]"
                  />
                </div>
              </div>
              <div className="pt-14">
                <h1 className="text-[20px] font-semibold not-italic leading-normal text-[#3A3A3A]">
                  Compatibility
                </h1>
              </div>
              <div className="pt-5 px-4">
                <p className="text-center font-Poppins text-[14px] font-normal not-italic leading-[165.523%] tracking-[0.49px] text-[#A1A1A1]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>

          {/* End */}

          {/* fourth card */}
          <div class="relative group">
            <div className="border-[1.5px] border-[#A1A1A1] bg-[#FFF] group-hover:bg-[#FFD893] rounded-[6px] w-[280px] h-[340px] shadow-[rgba(174,174,174,0.25)_0px_4px_10px_0px] ">
              <div class="absolute bottom-[18rem] left-[100px]">
                <div className="border rounded-full border-[#FFA300] bg-[#FFF] w-[100px] h-[100px] mx-auto  group-hover:bg-[#FFA300] ">
                  <BsSun
                    size={50}
                    //  style={{ color: "#FFA300"  }}
                    // onMouseOver={({target})=>target.style.color="#FFF"}
                    // onMouseOut={({target})=>target.style.color="#FFA300"}
                    className="absolute bottom-[1.7rem] left-[1.5rem] changeColor text-[#FFA300] group-hover:text-[#FFFF]"
                  />
                </div>
              </div>
              <div className="pt-14">
                <h1 className="text-[20px] font-semibold not-italic leading-normal text-[#3A3A3A]">
                  Today’s Horoscope
                </h1>
              </div>
              <div className="pt-5 px-4">
                <p className="text-center font-Poppins text-[14px] font-normal not-italic leading-[165.523%] tracking-[0.49px] text-[#A1A1A1]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>

          {/* End */}
        </div>
      </div>
    </>
  );
};

export default AstrologerServices;
