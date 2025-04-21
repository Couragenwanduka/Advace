"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "../../components/page-header";

export default function ContactUs() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          firstname: formData.get("firstname"),
          lastname: formData.get("lastname"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <>
      <div className="bg-black min-h-screen">
        <div className="py-8">
          <PageHeader
            pageTitle="Contact Us"
            link="/contact-us"
            linkTitle="Contact Us"
          />

          <section className="bg-black">
            <div className="container mx-auto px-4">
              <div className="text-center">
                <p className="text-[#E63946] text-lg tracking-[0.2em] mb-4">
                  Send us an Email Today
                </p>
                <h3 className="text-white text-[42px] font-semibold mb-8">
                  We are happy to discuss your portfolio & answer any question
                </h3>
              </div>

              <div className="flex flex-col md:flex-row gap-8 mt-16">
                <div className="w-full md:w-1/2">
                  <form
                    id="contact-us"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 "
                  >
                    <label className="form-label">Full Name</label>
                    <div className="flex gap-4">
                      <input
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                        className="w-full p-3 bg-transparent border border-white/16 rounded-lg text-white"
                        required
                      />
                      <input
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                        className="w-full p-3 bg-transparent border border-white/16 rounded-lg text-white"
                        required
                      />
                    </div>

                    <label className="">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full p-3 bg-transparent border border-white/16 rounded-lg text-white"
                      required
                    />
                    <label className="">Message</label>
                    <textarea
                      name="message"
                      placeholder="Jot us a note and we’ll get back to you as quickly as possible"
                      className="w-full p-3 bg-transparent border border-white/16 rounded-lg text-white"
                      rows={6}
                      required
                    />
                    <button
                      type="submit"
                      className="w-full p-3 bg-[#E63946] text-white rounded-lg"
                    >
                      Submit
                    </button>
                  </form>
                  {formStatus === "success" && (
                    <p className="mt-4 text-green-500">
                      Message sent successfully!
                    </p>
                  )}
                  {formStatus === "error" && (
                    <p className="mt-4 text-red-500">
                      Failed to send message. Please try again.
                    </p>
                  )}
                </div>

                <div className="w-full md:w-1/2">
                  <div className="p-8 border border-white/16 rounded-lg">
                    <div className="flex flex-col gap-8">
                      <div className="flex items-center gap-4">
                        <Image
                          src="/images/location.svg"
                          alt="Location"
                          width={24}
                          height={24}
                        />
                        <div>
                          <p className="text-white font-bold">Address:</p>
                          <p className="text-white/50">
                            130 Buckingham Palace Rd, London SW1W 9SA, UK
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Image
                          src="/images/call.svg"
                          alt="Phone"
                          width={24}
                          height={24}
                        />
                        <div>
                          <p className="text-white font-bold">Phone:</p>
                          <a
                            href="tel:+447441393510"
                            className="text-white/50 hover:underline"
                          >
                            +44 74142 69127
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Image
                          src="/images/location.svg"
                          alt="Hours"
                          width={24}
                          height={24}
                        />
                        <div>
                          <p className="text-white font-bold">We are open:</p>
                          <p className="text-white/50">
                            Monday - Saturday: 9:00 AM - 6:00 PM
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Image
                          src="/images/send_mail.svg"
                          alt="Email"
                          width={24}
                          height={24}
                        />
                        <div>
                          <p className="text-white font-bold">Email:</p>
                          <a
                            href="mailto:@advantawwealth.com"
                            className="text-white/50 hover:underline"
                          >
                            Support @advantawwealth.co
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="flex justify-center my-16">
            <hr className="w-full border-white/16" />
          </div>

          <section className="bg-black">
            <div className="container mx-auto px-4">
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <h3 className="text-white text-[42px] font-semibold">
                    Find us on map
                  </h3>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/location.svg"
                      alt="Location"
                      width={24}
                      height={24}
                    />
                    <p className="text-white/50">
                      130 Buckingham Palace Rd, London SW1W 9SA, UK
                    </p>
                  </div>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.059259618625!2d-0.15180806921857512!3d51.493780014488586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760518a84e2d2b%3A0x43fc3b20360af680!2s130%20Buckingham%20Palace%20Rd%2C%20London%20SW1W%209SA%2C%20UK!5e0!3m2!1sen!2sng!4v1673846652250!5m2!1sen!2sng"
                  className="w-full h-[526px] border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
