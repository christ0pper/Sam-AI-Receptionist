import React from "react";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-white">
      <div className="w-full mx-auto px-8">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold leading-[48px] mb-4 text-gray-900">
            Testimonials That
            <br />
            Speak to My Results
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-purple-200 rounded-3xl relative p-12">
            <div className="absolute top-8 right-8">
              <Quote className="w-12 h-12 text-purple-300" />
            </div>
            <div className="flex gap-8">
              <div>
                <div className="flex items-center justify-center w-20 h-20 bg-purple-300 rounded-full">
                  <div className="flex items-center justify-center w-16 h-16 bg-purple-400 rounded-full">
                    <div className="text-xl font-bold text-purple-700">FS</div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-6">
                  <div className="text-xl font-bold leading-7 mb-2 text-gray-900">
                    Fawzi Sayed
                  </div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <div className="text-gray-600 font-medium ml-2">5.0</div>
                  </div>
                </div>
                <div className="text-xl leading-7 text-gray-700">
                  "Since we started using Sam, we haven't missed a single client
                  call or inquiry. Our customers love the quick response and
                  professional tone - it's like having a professional
                  receptionist on duty 24/7 - but smarter and more affordable."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
