import { useEffect, useRef, useState } from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import profile from "../../data/profile";
import "./Contact.css";

export default function Contact() {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 },
    );
    const els = sectionRef.current?.querySelectorAll(".fade-in");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="contact section" ref={sectionRef}>
      <div className="container">
        <div className="section-header fade-in">
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Let&apos;s Work Together</h2>
          <p className="section-subtitle">
            Interested in cloud architecture, DevOps consulting, or platform
            engineering? Let&apos;s talk.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__info fade-in">
            <ProfileCard profile={profile} context="web" />
          </div>
        </div>
      </div>
    </section>
  );
}
