import React, { useContext } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguageContext } from "@/context/LanguageContext";

interface CertificatePreviewProps {
  amount?: number;
  recipientName?: string;
  senderName?: string;
  message?: string;
  expiryDate?: Date;
  certificateType?: "monetary" | "service";
  serviceName?: string;
}

const CertificatePreview = ({
  amount = 100,
  recipientName = "Anna Schmidt",
  senderName = "Maria Weber",
  message = "Enjoy a relaxing day at our spa! Wishing you the best relaxation experience.",
  expiryDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
  certificateType = "monetary",
  serviceName = "Japanese Head Spa",
}: CertificatePreviewProps) => {
  // In a real implementation, this would use the language context
  // For now, we'll just use English as default
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="w-full max-w-[600px] mx-auto bg-white p-4">
      <Card className="overflow-hidden border-2 border-amber-200 bg-gradient-to-r from-amber-50 to-amber-100">
        <div className="relative">
          {/* Certificate Header */}
          <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-6 text-center">
            <h2 className="text-2xl font-serif tracking-wide">ROCHELA SPA</h2>
            <p className="text-amber-200 mt-1 text-sm uppercase tracking-widest">
              Gift Certificate
            </p>
          </div>

          {/* Certificate Body */}
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <h3 className="text-xl text-amber-900 mb-1">
                For: <span className="font-semibold">{recipientName}</span>
              </h3>
              <p className="text-sm text-amber-800">From: {senderName}</p>
            </div>

            <div className="my-8 flex justify-center">
              {certificateType === "monetary" ? (
                <div className="text-4xl font-light text-amber-900 border-2 border-amber-300 rounded-full py-6 px-10 bg-amber-50">
                  €{amount.toFixed(2)}
                </div>
              ) : (
                <div className="text-2xl font-light text-amber-900 border-2 border-amber-300 rounded-lg py-4 px-6 bg-amber-50">
                  {serviceName}
                </div>
              )}
            </div>

            <div className="my-6 px-8">
              <p className="italic text-amber-800 text-sm">"{message}"</p>
            </div>

            <div className="mt-10 flex flex-col items-center">
              <div className="w-32 h-[1px] bg-amber-300 mb-4"></div>
              <p className="text-xs text-amber-700">
                Certificate ID: GC-
                {Math.floor(Math.random() * 10000)
                  .toString()
                  .padStart(4, "0")}
              </p>
              <p className="text-xs text-amber-700 mt-1">
                Valid until: {formatDate(expiryDate)}
              </p>
            </div>
          </CardContent>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-amber-200 opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-amber-200 opacity-50"></div>

          {/* Certificate Type Badge */}
          <Badge className="absolute top-4 right-4 bg-amber-800 hover:bg-amber-800 text-white">
            {certificateType === "monetary" ? "Value" : "Service"}
          </Badge>
        </div>
      </Card>

      <div className="text-center mt-4 text-sm text-gray-500">
        <p>This is a preview of your gift certificate.</p>
      </div>
    </div>
  );
};

export default CertificatePreview;
