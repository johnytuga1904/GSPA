import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Gift, ChevronRight } from "lucide-react";

import GiftCertificateForm from "../components/gift/GiftCertificateForm";
import CertificatePreview from "../components/gift/CertificatePreview";
import { Button } from "../components/ui/button";

const GiftCertificatesPage = () => {
  const [showPreview, setShowPreview] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Helmet>
        <title>Gift Certificates | Rochela Spa</title>
        <meta
          name="description"
          content="Purchase a gift certificate for Rochela Spa services. Perfect for any occasion."
        />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-light text-amber-900 mb-4">
            Gift Certificates
          </h1>
          <p className="text-lg text-amber-800 max-w-2xl mx-auto">
            Give the gift of relaxation and beauty with a Rochela Spa gift
            certificate. Perfect for birthdays, anniversaries, or any special
            occasion.
          </p>
        </motion.div>

        {!showPreview ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center text-center"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Gift className="h-8 w-8 text-amber-800" />
              </div>
              <h2 className="text-2xl font-light text-amber-900 mb-2">
                Monetary Value
              </h2>
              <p className="text-amber-700 mb-6">
                Choose any amount for your gift certificate
              </p>
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&q=80"
                alt="Monetary Gift Certificate"
                className="rounded-md mb-6 w-full h-48 object-cover"
              />
              <Button
                onClick={() => setShowPreview(true)}
                className="bg-amber-800 hover:bg-amber-900 text-white"
              >
                Select <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center text-center"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Gift className="h-8 w-8 text-amber-800" />
              </div>
              <h2 className="text-2xl font-light text-amber-900 mb-2">
                Specific Service
              </h2>
              <p className="text-amber-700 mb-6">
                Gift a specific spa service of your choice
              </p>
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&q=80"
                alt="Service Gift Certificate"
                className="rounded-md mb-6 w-full h-48 object-cover"
              />
              <Button
                onClick={() => setShowPreview(true)}
                className="bg-amber-800 hover:bg-amber-900 text-white"
              >
                Select <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        ) : (
          <GiftCertificateForm
            onComplete={() => console.log("Purchase completed")}
          />
        )}

        <motion.div
          className="bg-white rounded-lg shadow-md p-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-2xl font-light text-amber-900 mb-6 text-center">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-amber-800 mb-2">
                How long are gift certificates valid?
              </h3>
              <p className="text-gray-600">
                All gift certificates are valid for 12 months from the date of
                purchase.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-amber-800 mb-2">
                Can I use a gift certificate for any service?
              </h3>
              <p className="text-gray-600">
                Yes, monetary gift certificates can be used for any service at
                Rochela Spa.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-amber-800 mb-2">
                How will the recipient receive their gift certificate?
              </h3>
              <p className="text-gray-600">
                You can choose between digital delivery via email or physical
                delivery by mail.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-amber-800 mb-2">
                Can I personalize my gift certificate?
              </h3>
              <p className="text-gray-600">
                Yes, you can add a personal message and the recipient's name to
                make it special.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-amber-800 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept all major credit cards, including Visa, Mastercard,
                and American Express.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-amber-800 mb-2">
                Can I refund a gift certificate?
              </h3>
              <p className="text-gray-600">
                Gift certificates are non-refundable but can be transferred to
                another person.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-2xl font-light text-amber-900 mb-4">
            Need Help?
          </h2>
          <p className="text-amber-800 mb-6">
            If you have any questions about our gift certificates, please don't
            hesitate to contact us.
          </p>
          <Button
            variant="outline"
            className="border-amber-800 text-amber-800 hover:bg-amber-50"
          >
            Contact Us
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default GiftCertificatesPage;
