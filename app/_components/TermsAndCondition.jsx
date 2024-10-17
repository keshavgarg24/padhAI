import Head from 'next/head'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

const TermsAndCondition = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions | AI Course Generator</title>
        <meta name="description" content="Read the terms and conditions for using AI Course Generator services." />
        <meta name="keywords" content="terms and conditions, AI courses, legal" />
        <link rel="canonical" href="https://www.yourwebsite.com/terms-and-conditions" />
      </Head>
      <Header />
      
      <div className="container mx-auto px-6 py-12 max-w-3xl">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 dark:text-white mb-6">
          Terms and Conditions
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Welcome to <strong>padhAI</strong>! By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">1. Acceptance of Terms</h2>
            <p className="text-gray-600 dark:text-gray-300">
              By using our website, you confirm that you accept these terms and conditions in full. If you do not agree with any part of these terms, you must not use our website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">2. Use of Our Services</h2>
            <p className="text-gray-600 dark:text-gray-300">
              You agree to use our services only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">3. Intellectual Property</h2>
            <p className="text-gray-600 dark:text-gray-300">
              All content, trademarks, and other intellectual property rights in the website and its contents are owned by or licensed to padhAI. You may not reproduce, distribute, or exploit any part of our website without our permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">4. Limitation of Liability</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Our platform will not be liable for any direct, indirect, or consequential loss or damage arising out of or in connection with your use of our website and services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">5. Changes to Terms</h2>
            <p className="text-gray-600 dark:text-gray-300">
              We may update these terms and conditions from time to time. Your continued use of the website following any changes will be deemed acceptance of those changes.
            </p>
          </div>

          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              If you have any questions about these terms, please contact us at <strong>padhai.contactus@gmail.com</strong>.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default TermsAndCondition;
