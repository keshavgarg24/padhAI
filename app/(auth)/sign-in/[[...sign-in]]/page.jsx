'use client';

import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 min-h-screen flex items-center justify-center">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12 shadow-xl rounded-lg overflow-hidden">
        {/* Left Side: Hero Section */}
        <section className="relative flex flex-col justify-center bg-blue-600 bg-opacity-90 lg:col-span-5 lg:h-full xl:col-span-6 p-10 lg:p-12">
          <a href="#" className="text-white font-semibold text-2xl">
            <span className="sr-only">Home</span>
            <span>pdhAI</span>
          </a>
          <h2 className="mt-6 text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Take Control of Your Learning Journey with <strong>pdhAI</strong> 
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/90">
            At pdhAI, you create personalized courses, generate quizzes, and dive into immersive 3D classrooms. Education, tailored for you.
          </p>
        </section>

        {/* Right Side: Sign-in Section */}
        <main className="flex items-center justify-center bg-white px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl space-y-6">
            {/* Mobile Hero Section */}
            <div className="lg:hidden text-center">
              <a href="#" className="inline-flex items-center justify-center rounded-full bg-white text-blue-600 p-3">
                <span className="sr-only">Home</span>
                <span className="font-bold text-2xl">pdhAI</span>
              </a>

              <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Welcome to pdhAI
              </h1>

              <p className="mt-2 text-gray-600">
                Personalized, immersive AI-powered learning experiences.
              </p>
            </div>

            {/* Custom Sign-in Form */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <SignIn
                path="/sign-in"
                routing="path"
                signUpUrl="/sign-up"
                appearance={{
                  layout: {
                    primaryButton: 'w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg shadow-lg transition',
                    inputField: 'w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-600',
                  },
                  variables: {
                    borderRadius: '0.75rem',
                    colorPrimary: '#2563EB', // blue-600
                    colorBackground: '#F3F4F6', // gray background for the form
                  },
                  elements: {
                    primaryButton: 'rounded-lg',
                    inputField: 'text-lg border-gray-400',
                    errorMessageText: 'text-red-600', // Customize error messages
                  }
                }}
              />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
