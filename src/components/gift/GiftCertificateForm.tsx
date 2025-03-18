import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ChevronRight,
  ChevronLeft,
  Gift,
  Mail,
  Truck,
  CreditCard,
} from "lucide-react";

import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Textarea } from "../ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Separator } from "../ui/separator";
import { Progress } from "../ui/progress";

import CertificatePreview from "./CertificatePreview";
import PaymentForm from "./PaymentForm";

const giftAmountSchema = z.object({
  amount: z.string().min(1, "Amount is required"),
  certificateType: z.enum(["value", "service"]),
  serviceType: z.string().optional(),
});

const personalizationSchema = z.object({
  recipientName: z.string().min(1, "Recipient name is required"),
  senderName: z.string().min(1, "Sender name is required"),
  message: z.string().optional(),
});

const deliverySchema = z.object({
  deliveryMethod: z.enum(["digital", "physical"]),
  recipientEmail: z.string().email("Valid email is required").optional(),
  recipientAddress: z.string().optional(),
  recipientCity: z.string().optional(),
  recipientZip: z.string().optional(),
  recipientCountry: z.string().optional(),
});

type GiftCertificateFormProps = {
  onComplete?: (data: any) => void;
};

const GiftCertificateForm = ({
  onComplete = () => {},
}: GiftCertificateFormProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    amount: "100",
    certificateType: "value",
    serviceType: "",
    recipientName: "",
    senderName: "",
    message: "",
    deliveryMethod: "digital",
    recipientEmail: "",
    recipientAddress: "",
    recipientCity: "",
    recipientZip: "",
    recipientCountry: "",
  });

  const navigate = useNavigate();

  const amountForm = useForm({
    resolver: zodResolver(giftAmountSchema),
    defaultValues: {
      amount: formData.amount,
      certificateType: formData.certificateType as "value" | "service",
      serviceType: formData.serviceType,
    },
  });

  const personalizationForm = useForm({
    resolver: zodResolver(personalizationSchema),
    defaultValues: {
      recipientName: formData.recipientName,
      senderName: formData.senderName,
      message: formData.message,
    },
  });

  const deliveryForm = useForm({
    resolver: zodResolver(deliverySchema),
    defaultValues: {
      deliveryMethod: formData.deliveryMethod as "digital" | "physical",
      recipientEmail: formData.recipientEmail,
      recipientAddress: formData.recipientAddress,
      recipientCity: formData.recipientCity,
      recipientZip: formData.recipientZip,
      recipientCountry: formData.recipientCountry,
    },
  });

  const handleAmountSubmit = (data: any) => {
    setFormData({ ...formData, ...data });
    setStep(2);
  };

  const handlePersonalizationSubmit = (data: any) => {
    setFormData({ ...formData, ...data });
    setStep(3);
  };

  const handleDeliverySubmit = (data: any) => {
    setFormData({ ...formData, ...data });
    setStep(4);
  };

  const handlePaymentComplete = () => {
    onComplete(formData);
    // Navigate to confirmation or back to home
    navigate("/");
  };

  const services = [
    { id: "japanese-head-spa", name: "Japanese Head Spa", price: 120 },
    { id: "biab-shellac", name: "BIAB & Shellac", price: 85 },
    { id: "sugaring", name: "Sugaring", price: 70 },
    { id: "pmu", name: "Permanent Makeup", price: 200 },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white">
      <div className="mb-8">
        <h1 className="text-3xl font-light text-center mb-2">
          Gift Certificate
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Give the gift of relaxation and beauty
        </p>

        <Progress value={(step / 4) * 100} className="h-2 mb-4" />

        <div className="flex justify-between text-sm text-gray-500 mb-8">
          <span className={step >= 1 ? "font-medium text-black" : ""}>
            Amount
          </span>
          <span className={step >= 2 ? "font-medium text-black" : ""}>
            Personalization
          </span>
          <span className={step >= 3 ? "font-medium text-black" : ""}>
            Delivery
          </span>
          <span className={step >= 4 ? "font-medium text-black" : ""}>
            Payment
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {step === 1 && (
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Select Certificate Amount</CardTitle>
                <CardDescription>
                  Choose a monetary value or specific service
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={amountForm.handleSubmit(handleAmountSubmit)}>
                  <Tabs
                    defaultValue="value"
                    onValueChange={(value) =>
                      amountForm.setValue(
                        "certificateType",
                        value as "value" | "service",
                      )
                    }
                  >
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="value">Monetary Value</TabsTrigger>
                      <TabsTrigger value="service">
                        Specific Service
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="value">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="amount">Gift Amount (€)</Label>
                          <Input
                            id="amount"
                            type="number"
                            min="50"
                            {...amountForm.register("amount")}
                          />
                          {amountForm.formState.errors.amount && (
                            <p className="text-sm text-red-500 mt-1">
                              {amountForm.formState.errors.amount.message}
                            </p>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4">
                          {[50, 100, 150, 200, 250].map((amount) => (
                            <Button
                              key={amount}
                              type="button"
                              variant="outline"
                              onClick={() =>
                                amountForm.setValue("amount", amount.toString())
                              }
                              className="flex-1 min-w-[80px]"
                            >
                              €{amount}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="service">
                      <div className="space-y-4">
                        <RadioGroup
                          onValueChange={(value) =>
                            amountForm.setValue("serviceType", value)
                          }
                          defaultValue={formData.serviceType}
                        >
                          {services.map((service) => (
                            <div
                              key={service.id}
                              className="flex items-center space-x-2 border p-3 rounded-md"
                            >
                              <RadioGroupItem
                                value={service.id}
                                id={service.id}
                              />
                              <Label htmlFor={service.id} className="flex-1">
                                {service.name}
                              </Label>
                              <span className="text-right font-medium">
                                €{service.price}
                              </span>
                            </div>
                          ))}
                        </RadioGroup>
                        {amountForm.formState.errors.serviceType && (
                          <p className="text-sm text-red-500 mt-1">
                            {amountForm.formState.errors.serviceType.message}
                          </p>
                        )}
                      </div>
                    </TabsContent>
                  </Tabs>

                  <div className="mt-6 flex justify-end">
                    <Button type="submit" className="px-8">
                      Next <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Personalize Your Gift</CardTitle>
                <CardDescription>
                  Add a personal touch to your gift certificate
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={personalizationForm.handleSubmit(
                    handlePersonalizationSubmit,
                  )}
                >
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="recipientName">Recipient's Name</Label>
                      <Input
                        id="recipientName"
                        {...personalizationForm.register("recipientName")}
                      />
                      {personalizationForm.formState.errors.recipientName && (
                        <p className="text-sm text-red-500 mt-1">
                          {
                            personalizationForm.formState.errors.recipientName
                              .message
                          }
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="senderName">Your Name</Label>
                      <Input
                        id="senderName"
                        {...personalizationForm.register("senderName")}
                      />
                      {personalizationForm.formState.errors.senderName && (
                        <p className="text-sm text-red-500 mt-1">
                          {
                            personalizationForm.formState.errors.senderName
                              .message
                          }
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="message">
                        Personal Message (Optional)
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Add a personal message..."
                        className="resize-none"
                        rows={4}
                        {...personalizationForm.register("message")}
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(1)}
                    >
                      <ChevronLeft className="mr-2 h-4 w-4" /> Back
                    </Button>
                    <Button type="submit">
                      Next <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {step === 3 && (
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Delivery Method</CardTitle>
                <CardDescription>
                  Choose how you want to deliver your gift
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={deliveryForm.handleSubmit(handleDeliverySubmit)}
                >
                  <div className="space-y-6">
                    <RadioGroup
                      defaultValue={formData.deliveryMethod}
                      onValueChange={(value) =>
                        deliveryForm.setValue(
                          "deliveryMethod",
                          value as "digital" | "physical",
                        )
                      }
                      className="space-y-3"
                    >
                      <div className="flex items-start space-x-3 border p-4 rounded-md">
                        <RadioGroupItem
                          value="digital"
                          id="digital"
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label
                            htmlFor="digital"
                            className="flex items-center"
                          >
                            <Mail className="mr-2 h-4 w-4" /> Digital Delivery
                          </Label>
                          <p className="text-sm text-gray-500 mt-1">
                            Send via email immediately after purchase
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 border p-4 rounded-md">
                        <RadioGroupItem
                          value="physical"
                          id="physical"
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label
                            htmlFor="physical"
                            className="flex items-center"
                          >
                            <Truck className="mr-2 h-4 w-4" /> Physical Delivery
                          </Label>
                          <p className="text-sm text-gray-500 mt-1">
                            Printed certificate delivered by mail (3-5 business
                            days)
                          </p>
                        </div>
                      </div>
                    </RadioGroup>

                    <Separator />

                    {deliveryForm.watch("deliveryMethod") === "digital" && (
                      <div>
                        <Label htmlFor="recipientEmail">
                          Recipient's Email
                        </Label>
                        <Input
                          id="recipientEmail"
                          type="email"
                          {...deliveryForm.register("recipientEmail")}
                        />
                        {deliveryForm.formState.errors.recipientEmail && (
                          <p className="text-sm text-red-500 mt-1">
                            {
                              deliveryForm.formState.errors.recipientEmail
                                .message
                            }
                          </p>
                        )}
                      </div>
                    )}

                    {deliveryForm.watch("deliveryMethod") === "physical" && (
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="recipientAddress">
                            Recipient's Address
                          </Label>
                          <Input
                            id="recipientAddress"
                            {...deliveryForm.register("recipientAddress")}
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="recipientCity">City</Label>
                            <Input
                              id="recipientCity"
                              {...deliveryForm.register("recipientCity")}
                            />
                          </div>
                          <div>
                            <Label htmlFor="recipientZip">Postal Code</Label>
                            <Input
                              id="recipientZip"
                              {...deliveryForm.register("recipientZip")}
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="recipientCountry">Country</Label>
                          <Input
                            id="recipientCountry"
                            {...deliveryForm.register("recipientCountry")}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 flex justify-between">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(2)}
                    >
                      <ChevronLeft className="mr-2 h-4 w-4" /> Back
                    </Button>
                    <Button type="submit">
                      Next <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {step === 4 && (
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Payment</CardTitle>
                <CardDescription>
                  Complete your purchase securely
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6 p-4 bg-gray-50 rounded-md">
                  <h3 className="font-medium mb-2 flex items-center">
                    <Gift className="mr-2 h-4 w-4" /> Order Summary
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Certificate Type:</span>
                      <span className="font-medium">
                        {formData.certificateType === "value"
                          ? "Monetary Value"
                          : "Specific Service"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Amount:</span>
                      <span className="font-medium">
                        {formData.certificateType === "value"
                          ? `€${formData.amount}`
                          : services.find((s) => s.id === formData.serviceType)
                              ?.name || "Selected Service"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Method:</span>
                      <span className="font-medium">
                        {formData.deliveryMethod === "digital"
                          ? "Digital (Email)"
                          : "Physical (Mail)"}
                      </span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between font-medium">
                      <span>Total:</span>
                      <span>
                        {formData.certificateType === "value"
                          ? `€${formData.amount}`
                          : `€${services.find((s) => s.id === formData.serviceType)?.price || 0}`}
                      </span>
                    </div>
                  </div>
                </div>

                <PaymentForm onComplete={handlePaymentComplete} />

                <div className="mt-6 flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(3)}
                  >
                    <ChevronLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="hidden md:block">
          <div className="sticky top-6">
            <CertificatePreview
              amount={formData.amount}
              certificateType={formData.certificateType}
              serviceType={formData.serviceType}
              recipientName={formData.recipientName || "Recipient Name"}
              senderName={formData.senderName || "Your Name"}
              message={
                formData.message || "Your personal message will appear here..."
              }
              services={services}
            />

            <div className="mt-8 p-4 bg-gray-50 rounded-md">
              <h3 className="font-medium mb-4">
                Why Choose Our Gift Certificates?
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Valid for 12 months from purchase date</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Redeemable for any service at Rochela Spa</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Beautifully designed certificate</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Perfect gift for any occasion</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCertificateForm;
