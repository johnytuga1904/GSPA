import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CreditCard, Lock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  cardNumber: z
    .string()
    .min(16, "Card number must be at least 16 digits")
    .max(19),
  cardholderName: z.string().min(2, "Cardholder name is required"),
  expiryMonth: z.string().min(1, "Month is required"),
  expiryYear: z.string().min(1, "Year is required"),
  cvv: z.string().min(3, "CVV must be at least 3 digits").max(4),
  billingAddress: z.object({
    street: z.string().min(1, "Street address is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State/Province is required"),
    zipCode: z.string().min(1, "Zip/Postal code is required"),
    country: z.string().min(1, "Country is required"),
  }),
});

type PaymentFormProps = {
  onSubmit?: (values: z.infer<typeof formSchema>) => void;
  totalAmount?: number;
};

const PaymentForm = ({
  onSubmit = () => {},
  totalAmount = 100,
}: PaymentFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardNumber: "",
      cardholderName: "",
      expiryMonth: "",
      expiryYear: "",
      cvv: "",
      billingAddress: {
        street: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
      },
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    onSubmit(values);
  };

  const months = Array.from({ length: 12 }, (_, i) => {
    const month = i + 1;
    return month < 10 ? `0${month}` : `${month}`;
  });

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => `${currentYear + i}`);

  const countries = [
    "United States",
    "Canada",
    "Germany",
    "France",
    "Italy",
    "Switzerland",
    "Austria",
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-6 border-b pb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Secure Payment</h2>
        <p className="text-gray-600">Complete your gift certificate purchase</p>
      </div>

      <div className="flex justify-between items-center mb-6 bg-gray-50 p-4 rounded-md">
        <div>
          <p className="text-sm text-gray-500">Total Amount</p>
          <p className="text-xl font-bold text-gray-800">
            ${totalAmount.toFixed(2)}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <CreditCard className="h-5 w-5 text-gray-400" />
          <span className="text-sm text-gray-500">Secure payment</span>
          <Lock className="h-4 w-4 text-gray-400" />
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Card Information</h3>

            <FormField
              control={form.control}
              name="cardNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Card Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="1234 5678 9012 3456"
                      {...field}
                      className="font-mono"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cardholderName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cardholder Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <FormField
                  control={form.control}
                  name="expiryMonth"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Month</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="MM" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {months.map((month) => (
                            <SelectItem key={month} value={month}>
                              {month}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-1">
                <FormField
                  control={form.control}
                  name="expiryYear"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Year</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="YYYY" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {years.map((year) => (
                            <SelectItem key={year} value={year}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-1">
                <FormField
                  control={form.control}
                  name="cvv"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CVV</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="123"
                          {...field}
                          type="password"
                          maxLength={4}
                          className="font-mono"
                        />
                      </FormControl>
                      <FormDescription className="text-xs">
                        3 or 4 digits on back of card
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t">
            <h3 className="text-lg font-medium">Billing Address</h3>

            <FormField
              control={form.control}
              name="billingAddress.street"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Street Address</FormLabel>
                  <FormControl>
                    <Input placeholder="123 Main St" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="billingAddress.city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="New York" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="billingAddress.state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State/Province</FormLabel>
                    <FormControl>
                      <Input placeholder="NY" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="billingAddress.zipCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Zip/Postal Code</FormLabel>
                    <FormControl>
                      <Input placeholder="10001" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="billingAddress.country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="pt-6">
            <Button
              type="submit"
              className="w-full py-6 text-base bg-amber-800 hover:bg-amber-900"
            >
              Complete Payment
            </Button>
            <p className="text-xs text-center mt-4 text-gray-500">
              Your payment information is encrypted and secure. We never store
              your full card details.
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default PaymentForm;
