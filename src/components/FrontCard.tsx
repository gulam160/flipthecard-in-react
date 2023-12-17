import React from "react";
import { Icon, Image } from "@chakra-ui/react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import profilePhoto from "@/assets/my-profile.svg";
import { data } from "@/constants/SkillData";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineConnectWithoutContact } from "react-icons/md";

interface FrontCardProps {
  handleFlip: () => void;
}

const FrontCard: React.FC<FrontCardProps> = ({ handleFlip }) => {
  return (
    <div className="cards h-full">
      <section className="flex justify-center mt-8">
        <div className="border-2 border-[#0095f6] rounded-full relative">
          <Image
            src={profilePhoto}
            alt="profile"
            width={140}
            className="rounded-full"
          />
          <Icon
            as={RiVerifiedBadgeFill}
            fontSize={30}
            color={"#0095f6"}
            className="absolute bottom-3 right-[2px] bg-white rounded-full p-1 border-b border-[#0095f6]"
          />
        </div>
      </section>
      <section className="my-2 flex flex-col items-center">
        <h1 className="text-gray-700 text-2xl text-center font-bold">
          Gulam Mustafa
        </h1>
        <p className="text-center font-semibold text-gray-500 mt-1">
          Web & Mobile App Developer
        </p>
        <div className="flex justify-center items-center gap-2 mt-1">
          <Icon as={FaLocationDot} color={"#6b7280"} />
          <p className="text-gray-500">Navi Mumbai, Maharastra, India</p>
        </div>
        <span className="w-1/3 h-[1px] bg-gray-400 my-3"></span>
      </section>
      <section className="my-2">
        <p className="my-3 px-4 text-lg text-gray-500 underline font-semibold">
          Summary
        </p>
        <p className="text-justify text-gray-500 px-4 my-1">
          A result-oriented and experienced Software Developer proficient in
          both Web and Native Mobile App development. Capable of translating
          designs into pixel-perfect and eye-catching UIs. Skilled in delivering
          impactful business solutions and bridging the gap between frontend and
          backend technologies.
        </p>
      </section>
      <section className="my-2">
        <p className="my-3 px-4 text-lg text-gray-500 underline font-semibold">
          Skills
        </p>
        <div className="grid grid-cols-8 px-4 gap-4 sm:gap-3 mt-5">
          {data &&
            data.map(({ id, icon, color }) => {
              return color ? (
                <Icon
                  key={id}
                  as={icon}
                  color={color}
                  className="mx-auto text-3xl sm:text-2xl"
                />
              ) : (
                <Image src={icon} className="w-[30px]" />
              );
            })}
        </div>
      </section>

      <section className="mt-10 mb-4">
        <p
          className="text-white font-semibold w-fit mx-auto bg-[#0095f6] px-5 py-2 rounded-lg cursor-pointer"
          onClick={handleFlip}
        >
          Let's connect
          <Icon as={MdOutlineConnectWithoutContact} fontSize={28} ml={2} />
        </p>
      </section>
    </div>
  );
};
export default FrontCard;
