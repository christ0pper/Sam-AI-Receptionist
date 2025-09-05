import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Send } from "lucide-react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);

    emailjs
      .sendForm(
        "service_enqs80t",
        "template_av78by6",
        formRef.current,
        "HH42T4BCWoV91DfpP",
      )
      .then(
        () => console.log("Admin email sent successfully"),
        (error) => console.error("Failed to send admin email:", error.text),
      );

    emailjs
      .sendForm(
        "service_enqs80t",
        "template_0cmfsu6",
        formRef.current,
        "HH42T4BCWoV91DfpP",
      )
      .then(
        () => {
          setModalMessage(
            "Message sent successfully! We'll get back to you soon.",
          );
          formRef.current?.reset();
          setLoading(false);
        },
        () => {
          setModalMessage("Failed to send message. Please try again later.");
          setLoading(false);
        },
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="w-full mx-auto px-8">
        <div className="mb-16 text-center">
          <div className="text-5xl font-bold leading-[48px] mb-6 text-gray-900">
            Get in Touch
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="mb-8">
              <div className="text-2xl font-bold leading-8 mb-6 text-gray-900">
                Have questions or ready to get Sam into your business?
              </div>
              <div className="text-gray-600 text-lg leading-[29px] mb-8">
                Feel free to contact us and we'll get back to you. Whether you
                have questions, need support, or want to see how Sam can
                specifically help your business grow, we're here to help every
                step of the way.
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-200 rounded-lg">
                <svg className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="text-gray-600">Email us at</div>
                <a
                  href="mailto:phoryn.ai.assistant@gmail.com"
                  className="text-purple-600 font-semibold"
                >
                  phoryn.ai.assistant@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form ref={formRef} onSubmit={sendEmail}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors duration-150"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors duration-150"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="number"
                    placeholder="+1 (234) 567-8900"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors duration-150"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Subject*
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="How can we help?"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors duration-150"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Message*
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your business and how Sam can help..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:border-purple-500 focus:outline-none transition-colors duration-150"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`inline-flex items-center justify-center bg-purple-600 text-white text-lg font-semibold gap-2 px-8 py-4 rounded-lg shadow-lg mt-6 w-full transition-all duration-200 hover:bg-purple-700 ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {loading ? "Sending..." : "Submit"} <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-sm w-full text-center">
            <p className="text-gray-900 text-lg mb-6">{modalMessage}</p>
            <button
              onClick={() => setModalMessage(null)}
              className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition-all duration-200"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
