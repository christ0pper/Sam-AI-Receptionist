import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Send, Mail } from "lucide-react";
import MobileNav from "@/components/MobileNav";

export default function Demo() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);

    // Send email to admin
    emailjs
      .sendForm(
        "service_enqs80t", // Your EmailJS service ID
        "template_av78by6", // Admin template ID
        formRef.current,
        "HH42T4BCWoV91DfpP", // Public key
      )
      .then(
        () => console.log("Admin email sent successfully"),
        (error) => console.error("Failed to send admin email:", error.text),
      );

    // Send auto-reply to user
    emailjs
      .sendForm(
        "service_enqs80t",
        "template_0cmfsu6", // Auto-reply template ID
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
    <div className="min-h-screen bg-background">
      {/* Header/Navbar */}
      <header className="w-full bg-white border-b sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center">
              <div
                className="w-16 h-12 sm:w-20 sm:h-14 bg-primary rounded-lg flex items-center justify-center"
                style={{
                  backgroundImage: "url(/logo.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className="text-gray-700 hover:text-primary font-work-sans font-medium"
              >
                Home
              </a>
              <a
                href="/#about"
                className="text-gray-700 hover:text-primary font-work-sans font-medium"
              >
                About
              </a>
              <a
                href="/#services"
                className="text-gray-700 hover:text-primary font-work-sans font-medium"
              >
                Services
              </a>
              <a
                href="#demo"
                className="text-gray-700 hover:text-primary font-work-sans font-medium"
              >
                Demo
              </a>
              <a
                href="#contact"
                className="bg-primary hover:bg-primary/90 text-white font-work-sans font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Contact
              </a>
            </nav>
            <MobileNav currentPage="demo" />
          </div>
        </div>
      </header>

      {/* Demo Video Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white-600 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 sm:mb-8">
            Demo in Action
          </h1>
          <p className="text-black-200 text-lg sm:text-xl max-w-3xl mx-auto mb-8 sm:mb-10">
            Watch how Sam handles real conversations just like a human
            receptionist.
          </p>
          <div className="max-w-5xl mx-auto">
            <video
              src="/call.mov"
              className="w-full rounded-2xl sm:rounded-3xl shadow-2xl"
              controls
            />
          </div>
        </div>
      </section>
      {/* About Section */}
      <section
        id="about"
        className="py-12 sm:py-16 lg:py-20"
        style={{ backgroundColor: "#f1f1f3" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-12 lg:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-work-sans text-gray-900 mb-6 sm:mb-8">
              What I can help you with
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 text-left">
              <div className="p-4 sm:p-6 bg-gray-50 rounded-xl sm:rounded-2xl shadow">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  📞 Answer Calls 24/7
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Never send a customer to voicemail again—I'm always available,
                  day or night.
                </p>
              </div>
              <div className="p-4 sm:p-6 bg-gray-50 rounded-xl sm:rounded-2xl shadow">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  🤝 Natural Conversations
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  I greet callers, answer questions, and keep the interaction
                  human-like and engaging.
                </p>
              </div>
              <div className="p-4 sm:p-6 bg-gray-50 rounded-xl sm:rounded-2xl shadow">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  📅 Book Appointments
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Collects customer details and availability, then helps lock in
                  appointments with ease.
                </p>
              </div>
              <div className="p-4 sm:p-6 bg-gray-50 rounded-xl sm:rounded-2xl shadow">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  🎯 Qualify Leads
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Asks the right questions to separate serious buyers from
                  casual inquiries.
                </p>
              </div>
              <div className="p-4 sm:p-6 bg-gray-50 rounded-xl sm:rounded-2xl shadow">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  🗂️ Update CRM
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Automatically saves caller info, preferences, and notes
                  directly into your system.
                </p>
              </div>
              <div className="p-4 sm:p-6 bg-gray-50 rounded-xl sm:rounded-2xl shadow">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  📲 Route to a Human
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Transfers calls to the right team member whenever human
                  support is needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
            Get in Touch
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Contact Info */}
            <div>
              <div className="mb-6 sm:mb-8 text-gray-700 text-base sm:text-lg">
                Have questions or ready to get Sam into your business? Feel free
                to reach out and we'll respond promptly.
              </div>
              <div className="flex items-center gap-4 mt-6 sm:mt-8">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-200 rounded-lg">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="text-gray-600 text-sm sm:text-base">Email us at</div>
                  <a
                    href="mailto:phoryn.ai.assistant@gmail.com"
                    className="text-purple-600 font-semibold text-sm sm:text-base break-all"
                  >
                    phoryn.ai.assistant@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8">
              <form ref={formRef} onSubmit={sendEmail}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name*"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors duration-150"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email*"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors duration-150"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
                  <input
                    type="tel"
                    name="number"
                    placeholder="Phone Number"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors duration-150"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject*"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors duration-150"
                  />
                </div>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Message*"
                  required
                  className="w-full mt-4 sm:mt-6 border border-gray-300 rounded-lg px-4 py-3 resize-none focus:border-purple-500 focus:outline-none transition-colors duration-150"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className={`inline-flex items-center justify-center bg-purple-600 text-white text-base sm:text-lg font-semibold gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-lg mt-4 sm:mt-6 w-full hover:bg-purple-700 transition-all duration-200 ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {loading ? "Sending..." : "Submit"}{" "}
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-8 sm:py-12 text-white"
        style={{ backgroundColor: "rgba(147, 51, 234, 1)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="flex items-center">
              <div
                className="w-12 h-8 sm:w-14 sm:h-10 bg-purple-600 rounded-lg"
                style={{
                  backgroundImage: "url(/logo1.png)",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
              <a href="/" className="hover:text-gray-200 text-sm font-medium">
                Home
              </a>
              <a
                href="/#about"
                className="hover:text-gray-200 text-sm font-medium"
              >
                About
              </a>
              <a
                href="/#services"
                className="hover:text-gray-200 text-sm font-medium"
              >
                Services
              </a>
              <a href="/demo" className="hover:text-gray-200 text-sm font-medium">
                Demo
              </a>
              <a
                href="#contact"
                className="hover:text-gray-200 text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {modalMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl max-w-sm w-full text-center">
            <p className="text-gray-900 text-base sm:text-lg mb-6">{modalMessage}</p>
            <button
              onClick={() => setModalMessage(null)}
              className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-700 transition-all duration-200"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
