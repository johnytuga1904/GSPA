import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full bg-[#f8f3f0] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80"
            alt="Spa interior"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-light text-[#3c2a21] mb-4">
            About Rochela Spa
          </h1>
          <p className="text-lg md:text-xl text-[#5c4434] max-w-2xl mx-auto">
            A sanctuary of beauty and relaxation in the heart of the city
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-light text-[#3c2a21] mb-6">
              Our Story
            </h2>
            <p className="text-[#5c4434] mb-4">
              Founded in 2018, Rochela Spa was born from a passion for providing
              exceptional beauty services in a tranquil, luxurious environment.
              Our founder, Elena Rochela, combined her expertise in beauty
              therapy with her vision of creating a space where clients could
              escape the hustle of everyday life.
            </p>
            <p className="text-[#5c4434] mb-4">
              What began as a small studio has blossomed into a premier
              destination for women seeking premium beauty treatments delivered
              with personalized care and attention to detail.
            </p>
            <p className="text-[#5c4434]">
              At Rochela Spa, we believe that beauty rituals should be moments
              of self-care and rejuvenation. Every treatment is designed to
              nurture both body and spirit, leaving you feeling refreshed and
              radiant.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80"
              alt="Spa founder"
              className="rounded-lg shadow-lg w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#e8d5c4] rounded-lg -z-10"></div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-16 px-4 md:px-8 bg-[#f8f3f0]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-light text-[#3c2a21] mb-8">
            Our Philosophy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-none shadow-sm">
              <CardContent className="pt-6">
                <div className="h-16 w-16 bg-[#e8d5c4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#3c2a21] text-2xl">01</span>
                </div>
                <h3 className="text-xl font-medium text-[#3c2a21] mb-3">
                  Quality
                </h3>
                <p className="text-[#5c4434]">
                  We use only premium products and techniques to ensure
                  exceptional results for every client.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-sm">
              <CardContent className="pt-6">
                <div className="h-16 w-16 bg-[#e8d5c4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#3c2a21] text-2xl">02</span>
                </div>
                <h3 className="text-xl font-medium text-[#3c2a21] mb-3">
                  Personalization
                </h3>
                <p className="text-[#5c4434]">
                  Every treatment is tailored to your unique needs and
                  preferences for a truly bespoke experience.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-sm">
              <CardContent className="pt-6">
                <div className="h-16 w-16 bg-[#e8d5c4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#3c2a21] text-2xl">03</span>
                </div>
                <h3 className="text-xl font-medium text-[#3c2a21] mb-3">
                  Tranquility
                </h3>
                <p className="text-[#5c4434]">
                  We create a peaceful sanctuary where you can relax, unwind,
                  and emerge feeling renewed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-[#3c2a21] mb-8 text-center">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Elena Rochela",
              role: "Founder & Head Therapist",
              image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
              bio: "With over 15 years of experience in luxury spas across Europe, Elena brings unparalleled expertise to every treatment.",
            },
            {
              name: "Sophie Laurent",
              role: "Senior Aesthetician",
              image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
              bio: "Specialized in PMU and advanced skincare, Sophie is known for her meticulous attention to detail and gentle approach.",
            },
            {
              name: "Mia Keller",
              role: "Beauty Specialist",
              image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mia",
              bio: "An expert in Japanese head spa techniques and nail artistry, Mia creates personalized experiences for ultimate relaxation.",
            },
          ].map((member, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-sm">
              <div className="h-64 bg-[#f8f3f0] flex items-center justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-48 w-48 object-cover rounded-full border-4 border-white"
                />
              </div>
              <CardContent className="text-center pt-6">
                <h3 className="text-xl font-medium text-[#3c2a21]">
                  {member.name}
                </h3>
                <p className="text-[#a67c52] mb-3">{member.role}</p>
                <p className="text-[#5c4434]">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8 bg-[#f8f3f0]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-[#3c2a21] mb-8 text-center">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-[#3c2a21] mb-6">
                  Send Us a Message
                </h3>
                <form className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className="border-[#e8d5c4] focus:border-[#a67c52] focus:ring-[#a67c52]"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="border-[#e8d5c4] focus:border-[#a67c52] focus:ring-[#a67c52]"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      className="border-[#e8d5c4] focus:border-[#a67c52] focus:ring-[#a67c52] min-h-[150px]"
                    />
                  </div>
                  <Button className="w-full bg-[#3c2a21] hover:bg-[#5c4434] text-white">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-[#3c2a21] mb-6">
                  Visit Our Spa
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-[#a67c52] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-[#5c4434]">123 Serenity Avenue</p>
                      <p className="text-[#5c4434]">Zurich, 8001</p>
                      <p className="text-[#5c4434]">Switzerland</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-[#a67c52] mr-3 flex-shrink-0" />
                    <p className="text-[#5c4434]">+41 44 123 4567</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-[#a67c52] mr-3 flex-shrink-0" />
                    <p className="text-[#5c4434]">info@rochelaspa.com</p>
                  </div>
                  <div className="flex items-start">
                    <Clock className="text-[#a67c52] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-[#5c4434]">
                        Monday - Friday: 9am - 8pm
                      </p>
                      <p className="text-[#5c4434]">Saturday: 10am - 6pm</p>
                      <p className="text-[#5c4434]">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-[#3c2a21] mb-6">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="h-10 w-10 rounded-full bg-[#e8d5c4] flex items-center justify-center text-[#3c2a21] hover:bg-[#a67c52] hover:text-white transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="h-10 w-10 rounded-full bg-[#e8d5c4] flex items-center justify-center text-[#3c2a21] hover:bg-[#a67c52] hover:text-white transition-colors"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-gray-200">
        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=1200&q=80"
            alt="Map location"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Link to="/booking">
              <Button className="bg-[#3c2a21] hover:bg-[#5c4434] text-white px-8 py-6 text-lg">
                Book Your Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
