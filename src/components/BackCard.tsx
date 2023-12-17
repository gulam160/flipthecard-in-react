import React, { FormEvent, useState } from "react";
import { BsPhoneFlip } from "react-icons/bs";
import { Button, Icon, Input, Link, Textarea } from "@chakra-ui/react";
import { IoSend } from "react-icons/io5";
import { socials } from "@/constants/SocialData";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Lottie from "react-lottie-player";
import Social from "@/assets/Socialconnect.json";

type BackCardProps = {
  handleFlip: () => void;
};

const BackCard: React.FC<BackCardProps> = ({ handleFlip }) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    access_key: "3ddf160b-03f8-42c4-b525-d184fad95a14",
  });
  const handleChange = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const data = JSON.stringify(formData);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: data,
    })
      .then((res) => res.json())
      .then(() => {
        setLoading(true);
        setFormData({
          ...formData,
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        toast.success("Message sent", {
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="cards">
      <h4 className="text-lg text-gray-500 font-semibold mt-2 mx-1">
        Message Me
      </h4>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="flex gap-x-4 mb-4">
          <Input
            type="text"
            className="outline-none border-1 border-gray-500"
            onChange={handleChange}
            value={formData.name}
            id="contactName"
            name="name"
            placeholder="Name"
            required
          />
          <Input
            type="email"
            className="outline-none"
            onChange={handleChange}
            value={formData.email}
            id="contactEmail"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <Input
          type="text"
          className="mb-4 outline-none"
          onChange={handleChange}
          value={formData.subject}
          id="contactSubject"
          name="subject"
          placeholder="Subject"
          required
        />
        <Textarea
          className="w-full mb-4 outline-none"
          onChange={handleChange}
          value={formData.message}
          name="message"
          id="contactMessage"
          rows={5}
          placeholder="Message"
          required
        ></Textarea>
        <div className="flex justify-end items-center">
          <Button
            isLoading={loading}
            className="mr-2"
            type="submit"
            backgroundColor={"#0095f6"}
            color={"white"}
          >
            Send
            <Icon as={IoSend} mt={0.7} ml={2} />
          </Button>
        </div>
      </form>

      <section className="mt-10">
        <h4 className="text-lg text-gray-500 font-semibold mb-2 mx-1">
          Get Social
        </h4>
        <div className="grid grid-cols-9 gap-3 sm:gap-2 mt-6">
          {socials &&
            socials.map(({ color, icon, id, url }) => (
              <Link href={url} mx={"auto"}>
                <Icon
                  key={id}
                  as={icon}
                  color={color}
                  className="mx-auto text-3xl sm:text-2xl cursor-pointer"
                />
              </Link>
            ))}
        </div>
      </section>
      <Lottie
        animationData={Social}
        play
        loop
        className="w-[175px] sm:w-[215px] md:w-[235px] lg:w-[170px] mt-11 mx-auto"
      />
      <section className="mt-10 mb-4 flex items-center justify-center">
        <p
          className="text-white font-semibold w-fit mx-auto bg-[#0095f6] px-5 py-2 rounded-lg cursor-pointer"
          onClick={handleFlip}
        >
          Flip back
          <Icon as={BsPhoneFlip} fontSize={22} ml={2} />
        </p>
      </section>
    </div>
  );
};

export default BackCard;
