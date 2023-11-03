import React from "react";
import { BsFillChatDotsFill } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";
import { CgFileDocument } from "react-icons/cg";

const ChatWithAstrologer = () => {
  return (
    <>
      <div className="lg:px-10 px-6 py-2 ">
        <div className="flex flex-row gap-[22px] items-center justify-center mx-auto p-2">
          <div className="relative">
            <div className="border-2 rounded-[5px] border-[#04B4DB] bg-[#FFF] hover:bg-[#92EBFF]  w-[290px] h-[80px] shadow-[rgba(174, 174, 174, 0.25)_0px_4px_10px_0px] ">
              <div className="flex gap-3 p-4 py-2">
                <div className="w-[60px] h-[60px] border rounded-full bg-[#04B4DB]  shadow-[rgba(0, 0, 0, 0.25)_0px_4px_4px_0px]">
                  <BsFillChatDotsFill
                    size={25}
                    style={{ color: "#FFF" }}
                    className="absolute bottom-[1.7rem] left-[2.2rem]"
                  />
                </div>
                <div className="py-5">
                  <h5 className="text-[#3A3A3A] font-Lexend text-[16px] not-italic font-medium leading-normal">
                    Chat With Astrologer
                  </h5>
                </div>
              </div>
            </div>
          </div>

          {/* =========================second=============================== */}

          <div className="relative">
            <div className="border-2 rounded-[5px] border-[#DB042A] bg-[#FFF] hover:bg-[#FF92A5]  w-[290px] h-[80px] shadow-[rgba(174, 174, 174, 0.25)_0px_4px_10px_0px]">
              <div className="flex gap-3 p-4 py-2">
                <div className="w-[60px] h-[60px] border rounded-full bg-[#DB042A] shadow-[rgba(0, 0, 0, 0.25)_0px_4px_4px_0px] ">
                  <BiSolidPhoneCall
                    size={25}
                    style={{ color: "#FFF" }}
                    className="absolute bottom-[1.7rem] left-[2.2rem]"
                  />
                </div>
                <div className="py-5">
                  <h5 className="text-[#3A3A3A] font-Lexend text-[16px] not-italic font-medium leading-normal">
                    Talk To Astrologer
                  </h5>
                </div>
              </div>
            </div>
          </div>

          {/* ============================second end====================== */}

          {/* =============================third ========================= */}
          <div className="relative">
            <div className="border-2 rounded-[5px] border-[#FFA300] bg-[#FFF] hover:bg-[#FFD893]  w-[290px] h-[80px] shadow-[rgba(174, 174, 174, 0.25)_0px_4px_10px_0px]">
              <div className="flex gap-3 p-4 py-2">
                <div className="w-[60px] h-[60px] border rounded-full bg-[#FFA300] shadow-[rgba(0, 0, 0, 0.25)_0px_4px_4px_0px] ">
                  <CgFileDocument
                    size={25}
                    style={{ color: "#FFF" }}
                    className="absolute bottom-[1.7rem] left-[2.2rem]"
                  />
                </div>
                <div className="py-5">
                  <h5 className="text-[#3A3A3A] font-Lexend text-[16px] not-italic font-medium leading-normal">
                    Free Kundli
                  </h5>
                </div>
              </div>
            </div>
          </div>
          {/* ===============================end ========================== */}

          {/* =============================fourth ========================= */}
          <div className="relative">
            <div className="border-2 rounded-[5px] border-[#773101] bg-[#FFF] hover:bg-[#bf7a4b] w-[290px] h-[80px] shadow-[rgba(174, 174, 174, 0.25)_0px_4px_10px_0px]">
              <div className="flex gap-3 p-4 py-2">
                <div className="w-[60px] h-[60px] border rounded-full bg-[#773101] shadow-[rgba(0, 0, 0, 0.25)_0px_4px_4px_0px] ">
                  <CgFileDocument
                    size={25}
                    style={{ color: "#FFF" }}
                    className="absolute bottom-[1.7rem] left-[2.2rem]"
                  />
                </div>
                <div className="py-5">
                  <h5 className="text-[#3A3A3A] font-Lexend text-[16px] not-italic font-medium leading-normal">
                    Free Kundli
                  </h5>
                </div>
              </div>
            </div>
          </div>
          {/* ===============================end ========================== */}
        </div>
      </div>
    </>
  );
};

export default ChatWithAstrologer;
