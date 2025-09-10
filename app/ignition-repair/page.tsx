"use client"

import { Wrench, Shield, Clock, CheckCircle, Star, Phone } from "lucide-react"
import Navbar from "@/components/ui/navigation-menu"

export default function IgnitionRepairPage() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-green-700 via-emerald-700 to-green-900 text-white flex items-center min-h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Ignition Repair Services
              <span className="block bg-gradient-to-r from-yellow-400 to-green-300 bg-clip-text text-transparent">
                Fast, Reliable & Affordable
              </span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto lg:mx-0">
              Struggling with ignition problems? Our skilled locksmiths repair and replace ignitions for all makes and models—ensuring you’re back on the road quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="tel:+0414 713 777"
                className="bg-yellow-400 text-green-900 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-yellow-300 transition-all flex items-center gap-2"
              >
                <Phone className="h-5 w-5" /> Call 0414 713 777
              </a>
              <a
                href="/contact"
                className="bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg border border-white/30 hover:bg-white/30 transition-all"
              >
                Request Free Quote
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="/IgnitionRepair.jpg"
              alt="Ignition Repair"
              className="rounded-3xl shadow-2xl w-full max-w-md object-cover border-4 border-white/20"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Why Choose Our Ignition Repair?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <Clock className="h-10 w-10 text-green-600" />,
                title: "Fast Response",
                desc: "Our team arrives within 30 minutes, anywhere in Sydney.",
              },
              {
                icon: <Shield className="h-10 w-10 text-green-600" />,
                title: "No Damage Guarantee",
                desc: "Safe, professional ignition repair without harming your vehicle.",
              },
              {
                icon: <Wrench className="h-10 w-10 text-green-600" />,
                title: "All Makes & Models",
                desc: "We handle ignition systems for cars, vans, and trucks.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Our Ignition Repair Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Diagnosis", desc: "We quickly assess the ignition issue." },
              { step: "2", title: "Repair / Replace", desc: "Fixing the ignition or installing new parts." },
              { step: "3", title: "Testing", desc: "We test thoroughly for smooth ignition start." },
              { step: "4", title: "Drive Away", desc: "You’re back on the road—safe and sound!" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/10 rounded-xl border border-white/20 shadow-lg"
              >
                <div className="text-3xl font-bold mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                name: "David R.",
                text: "My ignition failed late at night. The locksmith arrived in 20 minutes and fixed it on the spot. Highly recommended!",
              },
              {
                name: "Sarah W.",
                text: "Affordable and professional service. They repaired my ignition without replacing the whole unit. Saved me a lot!",
              },
            ].map((t, idx) => (
              <div key={idx} className="p-8 bg-gray-50 rounded-2xl shadow-lg">
                <div className="flex justify-center mb-4 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">“{t.text}”</p>
                <div className="font-semibold text-green-700">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-green-700 to-emerald-700 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Need Immediate Ignition Repair?</h2>
        <p className="text-lg text-gray-100 mb-8">
          Call our experts now for fast, damage-free ignition repair anywhere in Sydney.
        </p>
        <a
          href="tel:+61280000000"
          className="bg-yellow-400 text-green-900 px-10 py-5 rounded-xl font-bold text-xl shadow-lg hover:bg-yellow-300 transition-all inline-flex items-center gap-2"
        >
          <Phone className="h-6 w-6" /> Call Now
        </a>
      </section>
    </>
  )
}
