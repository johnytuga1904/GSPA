import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

// Import components
import BookingForm from "../components/booking/BookingForm";
import ServiceSelector from "../components/booking/ServiceSelector";
import DateTimePicker from "../components/booking/DateTimePicker";
import CustomerInfoForm from "../components/booking/CustomerInfoForm";
import BookingConfirmation from "../components/booking/BookingConfirmation";

// Import types
interface BookingData {
  serviceType?: string;
  specificService?: string;
  date?: Date;
  time?: string;
  customerInfo?: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    notes?: string;
  };
  confirmationNumber?: string;
}

const BookingPage = () => {
  const navigate = useNavigate();
  const [bookingStep, setBookingStep] = useState<number>(0);
  const [bookingData, setBookingData] = useState<BookingData>({
    serviceType: "",
    specificService: "",
    date: new Date(),
    time: "",
    customerInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      notes: "",
    },
    confirmationNumber: "",
  });

  // Handle service selection
  const handleServiceSelect = (service: any) => {
    setBookingData({
      ...bookingData,
      serviceType: service.name,
      specificService: service.description,
    });
    setBookingStep(1);
  };

  // Handle date and time selection
  const handleDateTimeSelect = (date: Date, time: string) => {
    setBookingData({
      ...bookingData,
      date,
      time,
    });
    setBookingStep(2);
  };

  // Handle customer information submission
  const handleCustomerInfoSubmit = (data: any) => {
    // Generate a random confirmation number
    const confirmationNumber = `ROCH-${Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0")}`;

    setBookingData({
      ...bookingData,
      customerInfo: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        notes: data.specialRequests,
      },
      confirmationNumber,
    });
    setBookingStep(3);
  };

  // Handle back button
  const handleBack = () => {
    if (bookingStep > 0) {
      setBookingStep(bookingStep - 1);
    }
  };

  // Handle booking completion
  const handleBookingComplete = () => {
    // In a real app, you would send the booking data to your backend here
    console.log("Booking completed:", bookingData);
    // Navigate to homepage or thank you page
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4">
      <Helmet>
        <title>Book an Appointment | Rochela Spa</title>
        <meta
          name="description"
          content="Book your luxury spa treatment at Rochela Spa. Choose from our premium services including Japanese Head Spa, BIAB & Shellac, Sugaring, and PMU."
        />
      </Helmet>

      <div className="container mx-auto max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-light text-center mb-8 text-stone-800">
          Book Your Appointment
        </h1>

        <div className="mb-8">
          <div className="flex justify-between max-w-md mx-auto">
            {[
              "Select Service",
              "Choose Time",
              "Your Details",
              "Confirmation",
            ].map((step, index) => (
              <div key={step} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${index === bookingStep ? "bg-amber-600 text-white" : index < bookingStep ? "bg-green-600 text-white" : "bg-stone-200 text-stone-500"}`}
                >
                  {index < bookingStep ? "✓" : index + 1}
                </div>
                <span className="text-xs mt-2 hidden sm:block">{step}</span>
              </div>
            ))}
          </div>
          <div className="relative mt-2 max-w-md mx-auto">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-0.5 bg-stone-200"></div>
            <div
              className="absolute left-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-amber-600 transition-all"
              style={{ width: `${(bookingStep / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        <motion.div
          key={bookingStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-lg shadow-sm overflow-hidden"
        >
          {bookingStep === 0 && (
            <ServiceSelector onServiceSelect={handleServiceSelect} />
          )}

          {bookingStep === 1 && (
            <DateTimePicker
              onDateTimeSelect={handleDateTimeSelect}
              selectedService={bookingData.serviceType}
            />
          )}

          {bookingStep === 2 && (
            <CustomerInfoForm
              onSubmit={handleCustomerInfoSubmit}
              onBack={handleBack}
            />
          )}

          {bookingStep === 3 && (
            <BookingConfirmation
              bookingDetails={{
                confirmationNumber:
                  bookingData.confirmationNumber || "ROCH-0000",
                serviceName: bookingData.serviceType || "Spa Service",
                date: bookingData.date?.toLocaleDateString() || "Not specified",
                time: bookingData.time || "Not specified",
                duration: "60 minutes", // This would come from the service data in a real app
                location: "Rochela Spa, Luxury Avenue",
                price: "€120", // This would come from the service data in a real app
                customerName: `${bookingData.customerInfo?.firstName} ${bookingData.customerInfo?.lastName}`,
                customerEmail: bookingData.customerInfo?.email || "",
                customerPhone: bookingData.customerInfo?.phone || "",
              }}
            />
          )}
        </motion.div>

        {/* Alternative booking method */}
        <div className="mt-12 text-center">
          <p className="text-stone-600 mb-4">Prefer to book over the phone?</p>
          <p className="text-lg font-medium text-amber-800">
            Call us at +41 123 456 789
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
