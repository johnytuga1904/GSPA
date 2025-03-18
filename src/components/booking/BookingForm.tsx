import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

// Create mock components since the actual components are not available
const ServiceSelector = ({
  onSelect,
  initialSelection = { serviceType: "", specificService: "" },
}) => {
  return (
    <div className="bg-white p-4">
      <h2 className="text-xl font-semibold mb-4">Select Your Service</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          className="border border-amber-200 p-4 rounded-lg cursor-pointer hover:bg-amber-50"
          onClick={() =>
            onSelect({
              serviceType: "Japanese Head Spa",
              specificService: "Relaxation Treatment",
            })
          }
        >
          <h3 className="font-medium">Japanese Head Spa</h3>
          <p className="text-sm text-gray-600">
            Relaxing scalp and head treatment
          </p>
        </div>
        <div
          className="border border-amber-200 p-4 rounded-lg cursor-pointer hover:bg-amber-50"
          onClick={() =>
            onSelect({
              serviceType: "BIAB & Shellac",
              specificService: "Gel Manicure",
            })
          }
        >
          <h3 className="font-medium">BIAB & Shellac</h3>
          <p className="text-sm text-gray-600">Long-lasting nail treatments</p>
        </div>
      </div>
    </div>
  );
};

const DateTimePicker = ({
  onSelect,
  initialSelection = { date: new Date(), time: "" },
}) => {
  return (
    <div className="bg-white p-4">
      <h2 className="text-xl font-semibold mb-4">Select Date & Time</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border border-amber-200 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Date</h3>
          <div className="bg-gray-100 h-64 rounded flex items-center justify-center">
            Calendar Placeholder
          </div>
        </div>
        <div className="border border-amber-200 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Available Times</h3>
          <div className="grid grid-cols-2 gap-2">
            {[
              "9:00 AM",
              "10:00 AM",
              "11:00 AM",
              "1:00 PM",
              "2:00 PM",
              "3:00 PM",
            ].map((time) => (
              <div
                key={time}
                className="border border-amber-200 p-2 rounded text-center cursor-pointer hover:bg-amber-50"
                onClick={() => onSelect({ date: new Date(), time })}
              >
                {time}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomerInfoForm = ({
  onSubmit,
  initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
  },
}) => {
  return (
    <div className="bg-white p-4">
      <h2 className="text-xl font-semibold mb-4">Your Information</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            type="tel"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Special Requests
          </label>
          <textarea className="w-full p-2 border border-gray-300 rounded h-24"></textarea>
        </div>
        <Button
          className="w-full bg-amber-600 hover:bg-amber-700 text-white"
          onClick={() => onSubmit(initialValues)}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

const BookingConfirmation = ({ bookingData, onConfirm }) => {
  return (
    <div className="bg-white p-4">
      <h2 className="text-xl font-semibold mb-4">Booking Confirmation</h2>
      <div className="border border-amber-200 p-4 rounded-lg mb-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">Confirmation Number</h3>
          <span className="text-amber-600 font-bold">
            {bookingData.confirmationNumber || "RC-0000"}
          </span>
        </div>
        <Separator className="my-3" />
        <div className="space-y-3">
          <div>
            <h4 className="text-sm text-gray-500">Service</h4>
            <p>
              {bookingData.serviceType} - {bookingData.specificService}
            </p>
          </div>
          <div>
            <h4 className="text-sm text-gray-500">Date & Time</h4>
            <p>
              {bookingData.date?.toLocaleDateString()} at {bookingData.time}
            </p>
          </div>
          <div>
            <h4 className="text-sm text-gray-500">Customer</h4>
            <p>
              {bookingData.customerInfo?.firstName}{" "}
              {bookingData.customerInfo?.lastName}
            </p>
            <p>{bookingData.customerInfo?.email}</p>
            <p>{bookingData.customerInfo?.phone}</p>
          </div>
        </div>
      </div>
      <Button
        className="w-full bg-amber-600 hover:bg-amber-700 text-white"
        onClick={onConfirm}
      >
        Add to Calendar
      </Button>
    </div>
  );
};

export interface BookingFormProps {
  onComplete?: (bookingData: BookingData) => void;
  initialStep?: number;
}

export interface BookingData {
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

const BookingForm = ({
  onComplete = () => {},
  initialStep = 0,
}: BookingFormProps) => {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [bookingData, setBookingData] = useState<BookingData>({
    serviceType: "Japanese Head Spa",
    specificService: "Relaxation Treatment",
    date: new Date(),
    time: "10:00 AM",
    customerInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      notes: "",
    },
    confirmationNumber: "",
  });

  const steps = [
    { name: "Service", description: "Select your service" },
    { name: "Date & Time", description: "Choose appointment time" },
    { name: "Your Details", description: "Complete your information" },
    { name: "Confirmation", description: "Review and confirm" },
  ];

  const handleServiceSelection = (serviceData: {
    serviceType: string;
    specificService: string;
  }) => {
    setBookingData({ ...bookingData, ...serviceData });
    nextStep();
  };

  const handleDateTimeSelection = (dateTimeData: {
    date: Date;
    time: string;
  }) => {
    setBookingData({ ...bookingData, ...dateTimeData });
    nextStep();
  };

  const handleCustomerInfoSubmit = (
    customerData: BookingData["customerInfo"],
  ) => {
    // Generate a random confirmation number
    const confirmationNumber = `RC-${Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0")}`;

    setBookingData({
      ...bookingData,
      customerInfo: customerData,
      confirmationNumber,
    });
    nextStep();
  };

  const handleConfirmation = () => {
    onComplete(bookingData);
    // Here you would typically send the data to your backend
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-sm">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex justify-between">
          {steps.map((step, index) => (
            <div key={step.name} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  index < currentStep
                    ? "bg-amber-600 text-white"
                    : index === currentStep
                      ? "bg-amber-100 border-2 border-amber-600 text-amber-600"
                      : "bg-gray-100 text-gray-400"
                }`}
              >
                {index < currentStep ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <div className="text-center mt-2">
                <p className="text-sm font-medium">{step.name}</p>
                <p className="text-xs text-gray-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="relative mt-2">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-0.5 bg-gray-200"></div>
          <div
            className="absolute left-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-amber-600 transition-all"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
      </div>

      <Card className="border-amber-100">
        <CardContent className="p-6">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentStep === 0 && (
              <ServiceSelector
                onSelect={handleServiceSelection}
                initialSelection={{
                  serviceType: bookingData.serviceType || "",
                  specificService: bookingData.specificService || "",
                }}
              />
            )}

            {currentStep === 1 && (
              <DateTimePicker
                onSelect={handleDateTimeSelection}
                initialSelection={{
                  date: bookingData.date,
                  time: bookingData.time || "",
                }}
              />
            )}

            {currentStep === 2 && (
              <CustomerInfoForm
                onSubmit={handleCustomerInfoSubmit}
                initialValues={bookingData.customerInfo}
              />
            )}

            {currentStep === 3 && (
              <BookingConfirmation
                bookingData={bookingData}
                onConfirm={handleConfirmation}
              />
            )}
          </motion.div>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <div className="mt-6 flex justify-between">
        {currentStep > 0 && currentStep < 3 && (
          <Button
            variant="outline"
            onClick={prevStep}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" /> Back
          </Button>
        )}

        {currentStep === 0 && <div></div>}

        {currentStep === 3 && (
          <Button
            variant="outline"
            onClick={() => setCurrentStep(0)}
            className="flex items-center gap-2"
          >
            Book Another Appointment
          </Button>
        )}

        {currentStep < 2 && (
          <Button
            variant="ghost"
            className="ml-auto text-gray-500"
            onClick={() => window.history.back()}
          >
            Cancel
          </Button>
        )}
      </div>
    </div>
  );
};

export default BookingForm;
