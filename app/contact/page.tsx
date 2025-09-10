"use client"

import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import Navbar from "@/components/ui/navigation-menu"

export default function ContactPage() {
  return (
    <>
      {/* Navbar at the top */}
      <Navbar />

      <section className="min-h-screen bg-gray-50 py-20 px-6">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600">
            Have a question or need help? Our locksmith team is available 24/7. 
            Reach out anytime for fast, friendly support.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <Phone className="h-10 w-10 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-semibold text-lg">Phone</h3>
            <p className="text-gray-600">Call us anytime</p>
            <a
              href="tel:0414713777"
              className="text-yellow-600 font-bold mt-2 inline-block"
            >
              0414 713 777
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <Mail className="h-10 w-10 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="text-gray-600">Send us a message</p>
            <a
              href="mailto:info@locksmith.com"
              className="text-yellow-600 font-bold mt-2 inline-block"
            >
              info@locksmith.com
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <MapPin className="h-10 w-10 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-semibold text-lg">Location</h3>
            <p className="text-gray-600">Sydney, Australia</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <Clock className="h-10 w-10 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-semibold text-lg">Hours</h3>
            <p className="text-gray-600">24/7 Emergency Service</p>
          </div>
        </div>

        {/* Contact Form + Map */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition"
              >
                <Send className="h-5 w-5" /> Send Message
              </button>
            </form>
          </div>

          {/* Google Map Embed */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.712913718305!2d151.2073213154988!3d-33.86881998065705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3d3d7fefed%3A0x5045675218cee40!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2s!4v1694378866113!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  )
}
