import React, { useState } from "react";
import { X, Send, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { SERVICES_DATA } from "../data/contentData";
import { ref, push } from "firebase/database";
import { database } from "../firebase";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
}) => {
  if (!isOpen) return null;

  const defaultService =
    SERVICES_DATA.find((s) => s.id === preselectedServiceId)?.title ||
    "Speech & Communication";

  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    childAge: "",
    areaOfSupport: defaultService,
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const bookingsRef = ref(database, "bookings");

      await push(bookingsRef, {
        parentName: formData.parentName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        childAge: formData.childAge.trim(),
        areaOfSupport: formData.areaOfSupport,
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
        areaOfSupport: defaultService,
        message: "",
      });
    } catch (error) {
      console.error("Firebase booking failed:", error);

      setLoading(false);

      alert("We could not submit your consultation request. Please try again.");
    }
  };

  const handleClose = () => {
    setSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E6DFD5] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#6B7280] hover:bg-[#F5EFE6] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="mb-6 space-y-1 pr-8">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#4A6B5D] bg-[#EEF3F0] px-2.5 py-0.5 rounded-full">
            <Sparkles className="w-3 h-3" />
            Book a Consultation
          </div>

          <h3 className="font-serif text-2xl font-bold text-[#222623]">
            Personalized Care Consultation
          </h3>

          <p className="text-xs text-[#6B7280]">
            Share your child's developmental goals and our team will get in
            touch.
          </p>
        </div>

        {success ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#4A6B5D] text-white flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <h4 className="font-serif text-xl font-bold text-[#222623]">
              Consultation Request Received
            </h4>

            <p className="text-sm text-[#4B5563]">
              Thank you! Our care coordinator will reach out to you within 24
              hours to schedule your consultation.
            </p>

            <button
              onClick={handleClose}
              className="px-6 py-2.5 rounded-xl bg-[#4A6B5D] text-white text-xs font-semibold hover:bg-[#31493F]"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Parent / Guardian */}
            <div>
              <label className="block text-xs font-semibold text-[#222623] mb-1">
                Parent / Guardian Name *
              </label>

              <input
                type="text"
                required
                value={formData.parentName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    parentName: e.target.value,
                  })
                }
                placeholder="Your full name"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6DFD5] text-sm text-[#222623] focus:border-[#4A6B5D]"
              />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#222623] mb-1">
                  Email *
                </label>

                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  placeholder="name@domain.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6DFD5] text-sm text-[#222623] focus:border-[#4A6B5D]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#222623] mb-1">
                  Phone / WhatsApp *
                </label>

                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                    })
                  }
                  placeholder="Phone number"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6DFD5] text-sm text-[#222623] focus:border-[#4A6B5D]"
                />
              </div>
            </div>

            {/* Child Age + Area */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#222623] mb-1">
                  Child's Age
                </label>

                <input
                  type="text"
                  value={formData.childAge}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      childAge: e.target.value,
                    })
                  }
                  placeholder="e.g. 4 years old"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6DFD5] text-sm text-[#222623] focus:border-[#4A6B5D]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#222623] mb-1">
                  Primary Area
                </label>

                <select
                  value={formData.areaOfSupport}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      areaOfSupport: e.target.value,
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6DFD5] text-sm text-[#222623] focus:border-[#4A6B5D]"
                >
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold text-[#222623] mb-1">
                Message / Notes
              </label>

              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                placeholder="Any specific goals or questions you have..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6DFD5] text-sm text-[#222623] focus:border-[#4A6B5D] resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#4A6B5D] text-white text-sm font-semibold hover:bg-[#31493F] transition-all shadow-xs disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Request</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
