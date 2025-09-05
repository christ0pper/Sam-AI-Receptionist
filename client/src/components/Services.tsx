import React from "react";
import { Phone, Calendar, User, Bell } from "lucide-react";

const services = [
  {
    icon: Phone,
    title: "24/7 Support",
    desc: "Picks up calls anytime, answers FAQs, and provides information instantly.",
  },
  {
    icon: Calendar,
    title: "Appointment Booking",
    desc: "Checks calendars, books slots, and sends confirmations automatically.",
  },
  {
    icon: User,
    title: "Lead Qualification",
    desc: "Collects customer details, qualifies leads, and updates your CRM.",
  },
  {
    icon: Bell,
    title: "Follow-Ups",
    desc: "Sends reminders, follow-up messages, or alerts to customers and your team.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 flex flex-col justify-center h-full">
            <h2 className="text-5xl font-bold font-work-sans text-gray-900">
              Services
            </h2>
            <p className="text-lg font-work-sans text-gray-700 leading-relaxed">
              Sam offers a complete receptionist solution for your business.
              From answering customer calls 24/7 to ensuring no inquiry goes
              unheard, Sam takes care of your communication needs. He can book
              and manage appointments in real time, making scheduling effortless
              for both you and your clients. Sam also qualifies leads by
              capturing essential details and syncing them directly into your
              CRM. To keep customers engaged, he sends smart reminders and
              follow-ups, ensuring no opportunity is missed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map(({ icon: Icon, title, desc }, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 bg-purple-600">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold font-work-sans text-gray-900 mb-3">
                  {title}
                </h3>
                <p className="text-gray-700 font-work-sans">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
