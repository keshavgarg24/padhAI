"use client";
import Head from "next/head";
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    setSuccess(true);
    setName("");
    setEmail("");
    setMessage("");

    // Simulate successful or failed response with a toast notification
    if (success) {
      toast.success(`Thank you for your message, ${name}! We will get back to you soon.`);
    } else {
      toast.error(`Something went wrong. Please try again, ${name}.`);
    }
  };

  return (
    <>
      <Header />
      <Head>
        <title>Contact Us | padhAI</title>
        <meta
          name="description"
          content="Get in touch with AI Course Generator for any inquiries, feedback, or support."
        />
        <meta name="keywords" content="contact, customer support, AI courses" />
      </Head>

      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="text-lg text-center mb-8 text-gray-600 dark:text-gray-300">
          We are always here to help. Drop us a message, and we'll get back to you as soon as possible.
        </p>

        <div className="w-full flex justify-center">
          <form
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center w-full md:w-2/3 lg:w-1/2 gap-6 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Send Us a Message</h2>
            <p className="text-base text-gray-600 dark:text-gray-400 text-center">
              We are very responsive to messages and love to hear from you!
            </p>

            <div className="w-full flex flex-col gap-4">
              <input
                {...register("name", { required: true })}
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-[50px] rounded-lg leading-tight border border-gray-300 dark:border-gray-600 py-2 px-4 focus:ring-2 focus:ring-blue-400 focus:outline-none dark:bg-gray-700 dark:text-white"
                type="text"
                placeholder="Your Name"
              />
              {errors.name && <span className="text-red-400 text-sm">This field is required</span>}
            </div>

            <div className="w-full flex flex-col gap-4">
              <input
                {...register("email", { required: true })}
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-[50px] rounded-lg border border-gray-300 dark:border-gray-600 py-2 px-4 focus:ring-2 focus:ring-blue-400 focus:outline-none dark:bg-gray-700 dark:text-white"
                type="email"
                placeholder="Your Email"
              />
              {errors.email && <span className="text-red-400 text-sm">This field is required</span>}
            </div>

            <div className="w-full flex flex-col gap-4">
              <textarea
                {...register("message", { required: true })}
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full h-[140px] rounded-lg border border-gray-300 dark:border-gray-600 py-2 px-4 focus:ring-2 focus:ring-blue-400 focus:outline-none dark:bg-gray-700 dark:text-white"
                placeholder="Enter Your Message"
              />
              {errors.message && <span className="text-red-400 text-sm">This field is required</span>}
            </div>

            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="w-full md:w-auto px-10 py-3 bg-blue-500 text-white font-medium rounded-full shadow-lg hover:bg-blue-600 transition ease-in-out duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
