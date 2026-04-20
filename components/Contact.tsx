"use client";

import { useState } from "react";
import { Users, User, Mail, Building2, FileText, Send } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!formState.name || !formState.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 icon-pill bg-base-content text-white mb-6">
            <Users className="w-3.5 h-3.5" />
            <span>Project</span>
          </div>

          <h2 className="font-serif text-5xl sm:text-6xl font-normal leading-[1.1] text-base-content mb-4">
            Start Your Project
          </h2>

          <p className="text-base-content/50 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
            Have an idea to bring to life? Let&apos;s discuss your project and how we can help.
          </p>
        </div>

        {/* Form card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl border border-base-300/50 shadow-xl overflow-hidden">
            {/* Traffic lights */}
            <div className="flex items-center gap-1.5 px-5 py-4 border-b border-gray-100">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
            </div>

            {submitted ? (
              <div className="p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-7 h-7 text-green-500" />
                </div>
                <h3 className="font-serif text-2xl text-base-content mb-2">
                  Message Sent!
                </h3>
                <p className="text-base-content/50 text-sm">
                  Thanks {formState.name.split(" ")[0]}! We&apos;ll be in touch shortly.
                </p>
              </div>
            ) : (
              <div className="p-6 sm:p-8 space-y-5">
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label py-1">
                      <span className="label-text font-medium text-base-content text-sm">
                        Full Name
                      </span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-base-content/30" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={formState.name}
                        onChange={handleChange}
                        className="input input-bordered w-full pl-9 bg-base-200/40 border-base-300 focus:outline-none focus:border-base-content/40 rounded-xl text-sm"
                      />
                    </div>
                  </div>

                  <div className="form-control">
                    <label className="label py-1">
                      <span className="label-text font-medium text-base-content text-sm">
                        Email
                      </span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-base-content/30" />
                      <input
                        type="email"
                        name="email"
                        placeholder="johndoe@mail.com"
                        value={formState.email}
                        onChange={handleChange}
                        className="input input-bordered w-full pl-9 bg-base-200/40 border-base-300 focus:outline-none focus:border-base-content/40 rounded-xl text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Company */}
                <div className="form-control">
                  <label className="label py-1">
                    <span className="label-text font-medium text-base-content text-sm">
                      Company
                    </span>
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-base-content/30" />
                    <input
                      type="text"
                      name="company"
                      placeholder="Your Company (Optional)"
                      value={formState.company}
                      onChange={handleChange}
                      className="input input-bordered w-full pl-9 bg-base-200/40 border-base-300 focus:outline-none focus:border-base-content/40 rounded-xl text-sm"
                    />
                  </div>
                </div>

                {/* Project details */}
                <div className="form-control">
                  <label className="label py-1">
                    <span className="label-text font-medium text-base-content text-sm">
                      Project details
                    </span>
                  </label>
                  <textarea
                    name="details"
                    placeholder="Tell us about your project, goals, and requirements..."
                    value={formState.details}
                    onChange={handleChange}
                    rows={5}
                    className="textarea textarea-bordered w-full bg-base-200/40 border-base-300 focus:outline-none focus:border-base-content/40 rounded-xl text-sm resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  className="btn w-full bg-base-content text-white border-none hover:bg-base-content/85 rounded-xl font-medium"
                >
                  Send Message
                  <Send className="w-4 h-4 ml-1" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
