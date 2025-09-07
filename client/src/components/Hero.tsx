import React from "react";

export default function Hero() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* MOBILE LAYOUT: Force display on small screens */}
        <div className="force-mobile-layout">
          <div className="text-center">
            {/* 1. Heading First */}
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
              HELLO
              <br />
              EVERYONE
            </h1>
            {/* 2. Description Second */}
            <div className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg mx-auto">
              Never miss a customer call again. Our AI receptionist answers
              calls, books appointments, qualifies leads, and provides instant
              support — all in a natural human-like voice. From scheduling to
              sales, it works around the clock so your business can focus on
              growth.
            </div>
            {/* 3. Video Third */}
            <div className="relative w-full max-w-xs sm:max-w-sm mx-auto aspect-square mb-8">
              <video
                id="heroVideoMobile"
                src="/sam.mov"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
                playsInline
                controls={false}
              />
            </div>
            {/* 4. Button Fourth (Last) */}
            <button
              onClick={() => {
                const vid = document.getElementById(
                  "heroVideoMobile",
                ) as HTMLVideoElement | null;
                if (vid) {
                  vid.muted = false;
                  vid.loop = false;
                  vid.currentTime = 0;
                  vid.play();
                }
              }}
              className="inline-block bg-purple-600 text-white text-lg font-semibold leading-7 px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-lg transition-all duration-200 hover:bg-purple-700"
            >
              Say Hello
            </button>
          </div>
        </div>

        {/* DESKTOP LAYOUT: Show on large screens */}
        <div className="force-desktop-layout">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <div className="relative w-96 h-96 mx-auto">
                <video
                  id="heroVideo"
                  src="/sam.mov"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                  playsInline
                  controls={false}
                />
              </div>
            </div>
            <div className="order-2 text-left">
              <h1 className="text-6xl font-bold text-gray-900 leading-[60px] mb-6">
                HELLO
                <br />
                EVERYONE
              </h1>
              <div className="text-gray-600 text-xl leading-7 mb-8 max-w-lg">
                Never miss a customer call again. Our AI receptionist answers
                calls, books appointments, qualifies leads, and provides instant
                support — all in a natural human-like voice. From scheduling to
                sales, it works around the clock so your business can focus on
                growth.
              </div>
              <button
                onClick={() => {
                  const vid = document.getElementById(
                    "heroVideo",
                  ) as HTMLVideoElement | null;
                  if (vid) {
                    vid.muted = false;
                    vid.loop = false;
                    vid.currentTime = 0;
                    vid.play();
                  }
                }}
                className="inline-block bg-purple-600 text-white text-lg font-semibold leading-7 px-8 py-4 rounded-lg shadow-lg transition-all duration-200 hover:bg-purple-700"
              >
                Say Hello
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
