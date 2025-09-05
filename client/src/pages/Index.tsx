import React from "react";
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Services from "@/src/components/Services";
import Testimonials from "@/src/components/Testimonials";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";

export default function Index() {
  return (
    <div id="home" className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <section
          id="about"
          className="py-20"
          style={{ backgroundColor: "#f1f1f3" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-2xl p-16 text-center">
              <h2 className="text-4xl font-bold font-work-sans text-gray-900 mb-8">
                About Sam
              </h2>
              <p className="text-lg font-work-sans text-gray-700 leading-relaxed max-w-4xl mx-auto">
                I'm Sam, your AI-powered receptionist built to help businesses
                never miss a customer again. From answering calls to booking
                appointments and qualifying leads, I handle the busy work so you
                can focus on what truly matters — growing your business. With
                smart automation, natural voice conversations, and 24/7
                availability, I bring professionalism, consistency, and
                efficiency to every customer interaction.
              </p>
            </div>
          </div>
        </section>
        <Services />
        <Testimonials />
        <section
          id="demo"
          className="min-h-screen flex items-center justify-center bg-purple-600"
        >
          <div className="w-full mx-auto px-8 text-center max-w-4xl">
            <div className="text-5xl font-bold leading-[48px] mb-6 text-white">
              Try Sam in Action
            </div>
            <div className="text-purple-200 text-xl leading-[32.5px] max-w-3xl mx-auto mb-10">
              See how Sam handles real conversations just like a human
              receptionist. From answering calls to booking appointments, this
              quick demo shows you how effortless customer interactions can be
              with AI.
            </div>
            <a href="/demo">
              <button className="inline-flex items-center bg-white text-purple-600 text-lg font-semibold gap-2 px-8 py-4 rounded-lg shadow-lg transition-all duration-200 hover:bg-gray-50">
                Demo
              </button>
            </a>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
