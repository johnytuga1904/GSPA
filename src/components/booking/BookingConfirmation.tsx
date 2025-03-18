import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface BookingConfirmationProps {
  bookingDetails?: {
    confirmationNumber: string;
    serviceName: string;
    date: string;
    time: string;
    duration: string;
    location: string;
    price: string;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
  };
}

const BookingConfirmation = ({
  bookingDetails = {
    confirmationNumber: "ROCH-2023-7845",
    serviceName: "Japanese Head Spa",
    date: "June 15, 2023",
    time: "2:30 PM",
    duration: "60 minutes",
    location: "Rochela Spa, 123 Luxury Avenue",
    price: "€120",
    customerName: "Jane Smith",
    customerEmail: "jane.smith@example.com",
    customerPhone: "+41 123 456 789",
  },
}: BookingConfirmationProps) => {
  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-100">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
            <Check className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Booking Confirmed!
        </h2>
        <p className="text-gray-600">
          Your appointment has been successfully scheduled.
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Confirmation #{bookingDetails.confirmationNumber}
        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Appointment Details
        </h3>

        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <Calendar className="h-5 w-5 text-gray-500" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-800">
                {bookingDetails.date}
              </p>
              <div className="flex items-center mt-1">
                <Clock className="h-4 w-4 text-gray-500 mr-1" />
                <p className="text-sm text-gray-600">
                  {bookingDetails.time} ({bookingDetails.duration})
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <MapPin className="h-5 w-5 text-gray-500" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-800">
                {bookingDetails.location}
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-gray-200">
            <p className="text-sm font-medium text-gray-800">
              {bookingDetails.serviceName}
            </p>
            <p className="text-sm text-gray-600 mt-1">{bookingDetails.price}</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Your Information
        </h3>

        <div className="space-y-2">
          <p className="text-sm">
            <span className="font-medium">Name:</span>{" "}
            {bookingDetails.customerName}
          </p>
          <p className="text-sm">
            <span className="font-medium">Email:</span>{" "}
            {bookingDetails.customerEmail}
          </p>
          <p className="text-sm">
            <span className="font-medium">Phone:</span>{" "}
            {bookingDetails.customerPhone}
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <Button
          variant="default"
          className="bg-brown-600 hover:bg-brown-700 text-white"
          onClick={() =>
            window.open(
              "data:text/calendar;charset=utf-8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART:20230615T143000%0ADTEND:20230615T153000%0ASUMMARY:Japanese Head Spa at Rochela Spa%0ADESCRIPTION:Your appointment for Japanese Head Spa at Rochela Spa%0ALOCATION:Rochela Spa, 123 Luxury Avenue%0AEND:VEVENT%0AEND:VCALENDAR",
              "_blank",
            )
          }
        >
          Add to Calendar
        </Button>
        <Button
          variant="outline"
          className="border-brown-300 text-brown-700 hover:bg-brown-50"
        >
          Return to Homepage
        </Button>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          Need to make changes? Contact us at{" "}
          <span className="text-brown-600">contact@rochelaspa.com</span> or call{" "}
          <span className="text-brown-600">+41 123 456 789</span>
        </p>
      </div>
    </div>
  );
};

export default BookingConfirmation;
