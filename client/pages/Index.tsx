import { Button } from "@/components/ui/button";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import MobileNav from "@/components/MobileNav";
import {
  Phone,
  Calendar,
  User,
  Bell,
  Star,
  Send,
  ArrowRight,
  Mail,
  Quote,
} from "lucide-react";

export default function Index() {
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
    <div id="home" className="min-h-screen bg-background">
      {/* Header */}
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
                href="#home"
                className="text-gray-700 hover:text-primary font-work-sans font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-primary font-work-sans font-medium"
              >
                About
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-primary font-work-sans font-medium"
              >
                Services
              </a>
              <a
                href="/demo"
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
            <MobileNav currentPage="home" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto">
                <video
                  id="heroVideo"
                  src="/sam.mov"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                  playsInline
                  controls={false}
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                HELLO
                <br />
                EVERYONE
              </h1>
              <div className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
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
                className="inline-block bg-purple-600 text-white text-lg font-semibold leading-7 px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-lg transition-all duration-200 hover:bg-purple-700"
              >
                Say Hello
              </button>
            </div>
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
          <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-12 lg:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-work-sans text-gray-900 mb-6 sm:mb-8">
              About Sam
            </h2>
            <p className="text-base sm:text-lg font-work-sans text-gray-700 leading-relaxed max-w-4xl mx-auto">
              I'm Sam, your AI-powered receptionist built to help businesses
              never miss a customer again. From answering calls to booking
              appointments and qualifying leads, I handle the busy work so you
              can focus on what truly matters — growing your business. With
              smart automation, natural voice conversations, and 24/7
              availability, I bring professionalism, consistency, and efficiency
              to every customer interaction.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div className="space-y-6 flex flex-col justify-center h-full">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-work-sans text-gray-900">
                Services
              </h2>
              <p className="text-base sm:text-lg font-work-sans text-gray-700 leading-relaxed">
                Sam offers a complete receptionist solution for your business.
                From answering customer calls 24/7 to ensuring no inquiry goes
                unheard, Sam takes care of your communication needs. He can book
                and manage appointments in real time, making scheduling
                effortless for both you and your clients. Sam also qualifies
                leads by capturing essential details and syncing them directly
                into your CRM. To keep customers engaged, he sends smart
                reminders and follow-ups, ensuring no opportunity is missed.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
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
              ].map(({ icon: Icon, title, desc }, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-4 sm:mb-6 bg-purple-600">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-work-sans text-gray-900 mb-2 sm:mb-3">
                    {title}
                  </h3>
                  <p className="text-gray-700 font-work-sans text-sm sm:text-base">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
            <div className="bg-purple-200 rounded-3xl relative p-6 sm:p-8 lg:p-12">
              <div className="absolute top-4 right-4 sm:top-8 sm:right-8">
                <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-purple-300" />
              </div>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                <div className="flex justify-center sm:block">
                  <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-purple-300 rounded-full">
                    <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-purple-400 rounded-full">
                      <div className="text-lg sm:text-xl font-bold text-purple-700">
                        FS
                      </div>
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
                    "Since we started using Sam, we haven't missed a single
                    client call or inquiry. Our customers love the quick
                    response and professional tone - it's like having a
                    professional receptionist on duty 24/7 - but smarter and
                    more affordable."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section
        id="demo"
        className="min-h-screen flex items-center justify-center bg-purple-600 py-12 sm:py-16 lg:py-20"
      >
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">
            Try Sam in Action
          </div>
          <div className="text-purple-200 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10">
            See how Sam handles real conversations just like a human
            receptionist. From answering calls to booking appointments, this
            quick demo shows you how effortless customer interactions can be
            with AI.
          </div>
          <a href="/demo">
            <button className="inline-flex items-center bg-white text-purple-600 text-lg font-semibold gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-lg transition-all duration-200 hover:bg-gray-50">
              Demo
              <ArrowRight className="w-5 h-5" />
            </button>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16 text-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-gray-900">
              Get in Touch
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Left contact info */}
            <div>
              <div className="mb-8">
                <div className="text-xl sm:text-2xl font-bold leading-8 mb-6 text-gray-900">
                  Have questions or ready to get Sam into your business?
                </div>
                <div className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                  Feel free to contact us and we'll get back to you. Whether you
                  have questions, need support, or want to see how Sam can
                  specifically help your business grow, we're here to help every
                  step of the way.
                </div>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-200 rounded-lg">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="text-gray-600">Email us at</div>
                  <a
                    href="mailto:phoryn.ai.assistant@gmail.com"
                    className="text-purple-600 font-semibold break-all"
                  >
                    phoryn.ai.assistant@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right contact form */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <form ref={formRef} onSubmit={sendEmail}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6">
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
                  className={`inline-flex items-center justify-center bg-purple-600 text-white text-lg font-semibold gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-lg mt-6 w-full transition-all duration-200 hover:bg-purple-700 ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {loading ? "Sending..." : "Submit"}{" "}
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="text-white py-8 sm:py-12"
        style={{ backgroundColor: "rgba(147, 51, 234, 1)" }}
      >
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="flex items-center">
              <button className="flex items-center bg-transparent border-none">
                <div
                  className="flex items-center justify-center w-12 h-8 sm:w-14 sm:h-10 bg-purple-600 rounded-lg transition-all duration-150"
                  style={{
                    backgroundImage: "url(/logo1.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                />
              </button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
              <a
                href="#home"
                className="text-white-300 hover:text-white text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white-300 hover:text-white text-sm font-medium"
              >
                About
              </a>
              <a
                href="#services"
                className="text-white-300 hover:text-white text-sm font-medium"
              >
                Services
              </a>
              <a
                href="#demo"
                className="text-white-300 hover:text-white text-sm font-medium"
              >
                Demo
              </a>
              <a
                href="#contact"
                className="text-white-300 hover:text-white text-sm font-medium"
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
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl max-w-sm w-full text-center">
            <p className="text-gray-900 text-base sm:text-lg mb-6">{modalMessage}</p>
            <button
              onClick={() => setModalMessage(null)}
              className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition-all duration-200"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
