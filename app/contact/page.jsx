"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import emailjs from "@emailjs/browser";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+359) 888 577 040",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "dvalchevvv@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Kazanlak, Bulgaria",
  },
];

import { motion } from "framer-motion";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      !formData.firstname ||
      !formData.lastname ||
      !formData.email ||
      !formData.phone ||
      !formData.service ||
      !formData.message
    )
      return;
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
    );
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={sendEmail}
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                I’m excited to connect and explore new opportunities with you.
                Reach out, and let’s discuss how I can bring your ideas to life
                with my expertise and dedication.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  required
                  type="firstname"
                  placeholder="Firstname"
                  value={formData.firstname}
                  onChange={(e) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      firstname: e.target.value,
                    }))
                  }
                />
                <Input
                  required
                  type="lastname"
                  placeholder="Lastname"
                  value={formData.lastname}
                  onChange={(e) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      lastname: e.target.value,
                    }))
                  }
                />
                <Input
                  required
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      email: e.target.value,
                    }))
                  }
                />
                <Input
                  required
                  type="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      phone: e.target.value,
                    }))
                  }
                />
              </div>
              <Select
                value={formData.service}
                onValueChange={(value) =>
                  setFormData((prevData) => ({ ...prevData, service: value }))
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="db">Database Managment</SelectItem>
                    <SelectItem value="api">API Development</SelectItem>
                    <SelectItem value="desktop">
                      Desktop Applications
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                required
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    message: e.target.value,
                  }))
                }
                value={formData.message}
              />
              <Button size="md" className="max-w-[200px] py-2">
                Send message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
