import React, { useState } from "react";
import { ORGANISATION_INFO } from "../data/contentData";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { ConsultationFormData } from "../types";
import { ref, push } from "firebase/database";
import { database } from "../firebase";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    parentName: "",
    email: "",
    phone: "",
    childAge: "",
    areaOfSupport: "Speech & Communication",
    preferredService: "Individualized Therapy",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Form validation
    if (!formData.parentName.trim()) {
      setErrorMessage("Please enter your parent/guardian name.");
      return;
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!formData.phone.trim()) {
      setErrorMessage("Please enter your Phone or WhatsApp number.");
      return;
    }

    setLoading(true);

    try {
      const bookingsRef = ref(database, "bookings");

      await push(bookingsRef, {
        parentName: formData.parentName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        childAge: formData.childAge.trim(),
        areaOfSupport: formData.areaOfSupport,
        preferredService: formData.preferredService,
        message: formData.message.trim(),
        status: "pending",
        createdAt: new Date().toISOString(),
      });

      setLoading(false);
      setSuccess(true);

      setFormData({
        parentName: "",
        email: "",
        phone: "",
        childAge: "",
        areaOfSupport: "Speech & Communication",
        preferredService: "Individualized Therapy",
        message: "",
      });
    } catch (err) {
      console.error("Booking submission failed:", err);

      setLoading(false);

      setErrorMessage(
        "We could not submit your request. Please try again or contact us directly.",
      );
    }
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-white border-t border-[#E6DFD5]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#4A6B5D] bg-[#EEF3F0] px-3 py-1 rounded-full">
                Get In Touch
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#222623]">
                Start Your Family's Journey With Us
              </h2>

              <p className="text-base text-[#4B5563] leading-relaxed">
                We welcome your questions and enquiries. Reach out to discuss
                how NeuroGrowth Hub can tailor a support framework for your
                child.
              </p>
            </div>

            {/* CONTACT DETAILS */}
            <div className="space-y-4">
              {/* PHONE */}
              <a
                href={`tel:${ORGANISATION_INFO.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD5] hover:border-[#4A6B5D]/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EEF3F0] text-[#4A6B5D] flex items-center justify-center shrink-0 group-hover:bg-[#4A6B5D] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-[#6B7280]">
                    Phone Direct
                  </p>

                  <p className="text-base font-bold text-[#222623]">
                    {ORGANISATION_INFO.phone}
                  </p>
                </div>
              </a>

              {/* WHATSAPP */}
              <a
                href={`https://wa.me/${ORGANISATION_INFO.whatsapp.replace(
                  /[^0-9]/g,
                  "",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD5] hover:border-[#4A6B5D]/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-[#6B7280]">
                    WhatsApp Instant Message
                  </p>

                  <p className="text-base font-bold text-[#222623]">
                    {ORGANISATION_INFO.whatsapp}
                  </p>
                </div>
              </a>

              {/* EMAIL */}
              <a
                href={`mailto:${ORGANISATION_INFO.email}`}
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD5] hover:border-[#4A6B5D]/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FAEEEA] text-[#C86D51] flex items-center justify-center shrink-0 group-hover:bg-[#C86D51] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-[#6B7280]">
                    Email Us
                  </p>

                  <p className="text-base font-bold text-[#222623]">
                    {ORGANISATION_INFO.email}
                  </p>
                </div>
              </a>

              {/* LOCATION */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD5]">
                <div className="w-10 h-10 rounded-xl bg-[#FFF8EB] text-[#C5A059] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-[#6B7280]">
                    Center Location
                  </p>

                  <p className="text-sm font-semibold text-[#222623]">
                    {ORGANISATION_INFO.location}
                  </p>

                  <p className="text-xs text-[#6B7280] pt-0.5">
                    {ORGANISATION_INFO.workingHours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - FORM */}
          <div className="lg:col-span-7 bg-[#FAF8F5] p-8 sm:p-10 rounded-3xl border border-[#E6DFD5] shadow-xs">
            <div className="mb-6 space-y-1">
              <h3 className="font-serif text-2xl font-bold text-[#222623]">
                Consultation Enquiry Form
              </h3>

              <p className="text-xs text-[#6B7280]">
                Fill in your details below and a specialist will contact you
                within 24 business hours.
              </p>
            </div>

            {success ? (
              <div className="p-8 rounded-2xl bg-[#EEF3F0] border border-[#4A6B5D]/30 text-center space-y-4 my-6">
                <div className="w-12 h-12 rounded-full bg-[#4A6B5D] text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>

                <h4 className="font-serif text-2xl font-bold text-[#222623]">
                  Thank You for Reaching Out!
                </h4>

                <p className="text-sm text-[#31493F]">
                  Your consultation enquiry has been received. Our clinical
                  coordinator will contact you shortly via email or phone.
                </p>

                <button
                  type="button"
                  onClick={() => setSuccess(false)}
                  className="px-5 py-2 rounded-xl bg-[#4A6B5D] text-white text-xs font-semibold hover:bg-[#31493F]"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* ERROR */}
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* PARENT NAME */}
                <div>
                  <label
                    htmlFor="parentName"
                    className="block text-xs font-semibold text-[#222623] mb-1"
                  >
                    Parent / Guardian Full Name{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    placeholder="e.g. Eleanor Vance"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#E6DFD5] bg-white text-sm text-[#222623] focus:border-[#4A6B5D] focus:ring-1 focus:ring-[#4A6B5D] transition-all"
                  />
                </div>

                {/* EMAIL + PHONE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-[#222623] mb-1"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. eleanor@example.com"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[#E6DFD5] bg-white text-sm text-[#222623] focus:border-[#4A6B5D] transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold text-[#222623] mb-1"
                    >
                      Phone / WhatsApp <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +234 801 234 5678"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[#E6DFD5] bg-white text-sm text-[#222623] focus:border-[#4A6B5D] transition-all"
                    />
                  </div>
                </div>

                {/* CHILD AGE + SUPPORT */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="childAge"
                      className="block text-xs font-semibold text-[#222623] mb-1"
                    >
                      Child's Age / Grade
                    </label>

                    <input
                      type="text"
                      id="childAge"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleChange}
                      placeholder="e.g. 5 years old / Kindergarten"
                      className="w-full px-4 py-3 rounded-xl border border-[#E6DFD5] bg-white text-sm text-[#222623] focus:border-[#4A6B5D] transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="areaOfSupport"
                      className="block text-xs font-semibold text-[#222623] mb-1"
                    >
                      Primary Area of Support
                    </label>

                    <select
                      id="areaOfSupport"
                      name="areaOfSupport"
                      value={formData.areaOfSupport}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E6DFD5] bg-white text-sm text-[#222623] focus:border-[#4A6B5D] transition-all"
                    >
                      <option value="Speech & Communication">
                        Speech & Communication
                      </option>

                      <option value="Behavioural Support">
                        Behavioural Support
                      </option>

                      <option value="Academic Support">Academic Support</option>

                      <option value="Early Childhood Development">
                        Early Childhood Development
                      </option>

                      <option value="Parent Guidance">Parent Guidance</option>

                      <option value="Individualized Therapy">
                        Individualized 1:1 Therapy
                      </option>
                    </select>
                  </div>
                </div>

                {/* PREFERRED SERVICE */}
                <div>
                  <label
                    htmlFor="preferredService"
                    className="block text-xs font-semibold text-[#222623] mb-1"
                  >
                    Preferred Service Mode
                  </label>

                  <select
                    id="preferredService"
                    name="preferredService"
                    value={formData.preferredService}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#E6DFD5] bg-white text-sm text-[#222623] focus:border-[#4A6B5D] transition-all"
                  >
                    <option value="Individualized Therapy">
                      In-Person One-to-One Session
                    </option>

                    <option value="Parent Guidance">
                      Parent Consultation / Coaching
                    </option>

                    <option value="Comprehensive Assessment">
                      Initial Developmental Assessment
                    </option>

                    <option value="School Alignment">
                      School & Educator Support
                    </option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-[#222623] mb-1"
                  >
                    How can we help? (Brief details or goals)
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us a little about your child's goals or any specific areas you would like to focus on..."
                    className="w-full px-4 py-3 rounded-xl border border-[#E6DFD5] bg-white text-sm text-[#222623] focus:border-[#4A6B5D] transition-all resize-none"
                  />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#4A6B5D] text-white text-sm font-semibold hover:bg-[#31493F] transition-all shadow-xs disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Consultation Request</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-[#6B7280] text-center pt-1">
                  We respect your privacy. Information shared is confidential
                  and used solely for care coordination.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
