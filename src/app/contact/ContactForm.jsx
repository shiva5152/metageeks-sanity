"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { sendContactForm } from "@/lib/api";

const schema = Yup.object().shape({
  name: Yup.string().required().min(6).label("name"),
  phone: Yup.string().required().min(10).label("phone"),
  email: Yup.string().email().required().label("email"),
  subject: Yup.string().required().min(10).label("subject"),
  message: Yup.string().required().min(50).label("message"),
});

const ContactForm = ({ style }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (data) => {
    setLoading(true);
    await sendContactForm(data);
    setLoading(false);
    reset();
  };

  return (
    <div
      style={style}
      className="col-lg-7 wow animate fadeInUp"
      data-wow-delay="200ms"
      data-wow-duration="1500ms"
    >
      <div className="contact-form-wrap">
        <div className="contact-form-area">
          <h3>Your Success Starts Here!</h3>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="row">
              <div className="col-lg-6 mb-16">
                <div className="form-inner">
                  <label>Name</label>
                  <input
                    type="text"
                    {...register("name")}
                    placeholder="Full Name"
                  />
                  <p style={{ color: "#f56565" }}>{errors.name?.message}</p>
                </div>
              </div>

              <div className="col-lg-6 mb-16">
                <div className="form-inner">
                  <label>Phone *</label>
                  <input
                    type="text"
                    {...register("phone")}
                    placeholder="+91 9XXXXXXX56"
                  />
                </div>
                <p style={{ color: "#f56565" }}>{errors.phone?.message}</p>
              </div>
              <div className="col-lg-6 mb-16">
                <div className="form-inner">
                  <label> Email *</label>
                  <input
                    {...register("email")}
                    placeholder="abc@gmail.com"
                    type="email"
                  />
                  <p style={{ color: "#f56565" }}>{errors.email?.message}</p>
                </div>
              </div>
              <div className="col-lg-6 mb-16">
                <div className="form-inner">
                  <label>Subject *</label>
                  <input
                    placeholder="Write you subject in detail"
                    {...register("subject")}
                    type="text"
                  />
                  <p style={{ color: "#f56565" }}>{errors.subject?.message}</p>
                </div>
              </div>
              <div className="col-lg-12 mb-30">
                <div className="form-inner">
                  <label>Message *</label>
                  <textarea {...register("message")} defaultValue={""} />
                  <p style={{ color: "#f56565" }}>{errors.message?.message}</p>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-inner">
                  <button
                    className="primary-btn2"
                    type="submit"
                    data-text="Submit Now"
                  >
                    <span>{!loading ? "Submit Now" : "Submitting..."}</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
