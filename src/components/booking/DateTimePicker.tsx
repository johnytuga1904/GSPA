import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { format, addDays, isSameDay } from "date-fns";

interface TimeSlot {
  time: string;
  available: boolean;
}

interface DateTimePickerProps {
  onDateTimeSelect?: (date: Date, time: string) => void;
  selectedService?: string;
  disabledDates?: Date[];
}

const DateTimePicker = ({
  onDateTimeSelect = () => {},
  selectedService = "Japanese Head Spa",
  disabledDates = [],
}: DateTimePickerProps) => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(today);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Generate mock time slots for the selected date
  const generateTimeSlots = (date: Date): TimeSlot[] => {
    // Mock data - in a real app, this would come from an API based on service availability
    const baseSlots = [
      { time: "09:00", available: true },
      { time: "10:00", available: true },
      { time: "11:00", available: true },
      { time: "12:00", available: true },
      { time: "13:00", available: true },
      { time: "14:00", available: true },
      { time: "15:00", available: true },
      { time: "16:00", available: true },
      { time: "17:00", available: true },
    ];

    // Make some slots unavailable based on the day of week
    // This is just for demonstration purposes
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0) {
      // Sunday
      return baseSlots.map((slot) => ({ ...slot, available: false }));
    } else if (dayOfWeek === 6) {
      // Saturday
      return baseSlots.map((slot) => {
        if (slot.time === "09:00" || slot.time === "17:00") {
          return { ...slot, available: false };
        }
        return slot;
      });
    } else if (isSameDay(date, today)) {
      // Make some slots unavailable for today
      return baseSlots.map((slot) => {
        if (["09:00", "10:00", "11:00"].includes(slot.time)) {
          return { ...slot, available: false };
        }
        return slot;
      });
    }

    return baseSlots;
  };

  const timeSlots = selectedDate ? generateTimeSlots(selectedDate) : [];

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset time selection when date changes
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    if (selectedDate) {
      onDateTimeSelect(selectedDate, time);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
        Select Date & Time for {selectedService}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Calendar Section */}
        <Card className="border border-gray-100">
          <CardHeader>
            <CardTitle className="text-lg font-medium">Select Date</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              disabled={[{ before: today }, ...disabledDates]}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        {/* Time Slots Section */}
        <Card className="border border-gray-100">
          <CardHeader>
            <CardTitle className="text-lg font-medium">
              {selectedDate ? (
                <>Available Times for {format(selectedDate, "EEEE, MMMM d")}</>
              ) : (
                "Please select a date first"
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {selectedDate ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {timeSlots.map((slot) => (
                  <Button
                    key={slot.time}
                    variant={selectedTime === slot.time ? "default" : "outline"}
                    className={cn(
                      "h-12",
                      !slot.available && "opacity-50 cursor-not-allowed",
                      selectedTime === slot.time &&
                        "bg-primary text-primary-foreground",
                    )}
                    disabled={!slot.available}
                    onClick={() => handleTimeSelect(slot.time)}
                  >
                    {slot.time}
                  </Button>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-48 text-gray-500">
                Please select a date to view available time slots
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {selectedDate && selectedTime && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            Your Selection
          </h3>
          <p className="text-gray-600">
            {format(selectedDate, "EEEE, MMMM d, yyyy")} at {selectedTime}
          </p>
        </div>
      )}
    </div>
  );
};

export default DateTimePicker;
