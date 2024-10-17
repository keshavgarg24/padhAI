import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

const AboutUs = () => {
  return (
    <>
      <Header />
      <Head>
        <title>About Us | pdhAI</title>
        <meta
          name="description"
          content="Discover pdhAI, where learning adapts to you. Customize courses, quizzes, and even enjoy immersive 3D classrooms."
        />
        <meta
          name="keywords"
          content="AI courses, personalized learning, gamified education, 3D classrooms"
        />
        <link
          rel="canonical"
          href="https://www.yourwebsite.com/about-us"
        />
      </Head>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6 text-center sm:text-4xl lg:text-5xl text-gray-900 dark:text-gray-100">
          About Us
        </h1>

        <div className="mb-8 space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed sm:text-xl sm:max-w-2xl sm:mx-auto">
          <p>
            At <span className="font-semibold text-blue-600">padhAI</span>, we
            empower you to take control of your learning journey. Gone are the
            days when you were told what to study. Now, you can tailor your
            educational experience to your unique needs and goals.
          </p>

          <p>
            Whether it's creating personalized courses or generating quizzes
            that challenge your understanding, pdhAI allows you to design your
            own path. Dive deep into topics that matter most to you, at a pace
            that works best for your learning style.
          </p>

          <p>
            And that's not all. Imagine stepping into a fully immersive{' '}
            <span className="font-semibold text-purple-600">3D classroom</span>,
            where learning meets innovation, making education interactive and
            exciting. Add a layer of fun with{' '}
            <span className="font-semibold text-green-600">gamified</span>{' '}
            learning experiences that keep you engaged and motivated every step
            of the way.
          </p>

          <p className="text-lg sm:text-xl">
            <strong>Our Vision:</strong> To revolutionize the education space by
            offering not just knowledge, but experiences. At pdhAI, we are
            committed to reshaping how education is delivered, bringing the
            power of AI, creativity, and personalization together to help you
            unlock your full potential.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
