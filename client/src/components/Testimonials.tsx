import React from "react";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-gray-900">
            Testimonials That
            <br />
            Speak to My Results
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-purple-200 rounded-2xl sm:rounded-3xl relative p-6 sm:p-8 lg:p-12">
            <div className="absolute top-4 right-4 sm:top-8 sm:right-8">
              <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-purple-300" />
            </div>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
              <div className="flex justify-center sm:block">
                <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-purple-300 rounded-full">
                  <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-purple-400 rounded-full">
                    <div className="text-lg sm:text-xl font-bold text-purple-700">FS</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <div className="mb-4 sm:mb-6">
                  <div className="text-lg sm:text-xl font-bold leading-7 mb-2 text-gray-900">
                    Fawzi Sayed
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <div className="text-gray-600 font-medium ml-2">5.0</div>
                  </div>
                </div>
                <div className="text-lg sm:text-xl leading-relaxed text-gray-700">
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
