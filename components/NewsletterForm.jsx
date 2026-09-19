"use client";

import React, { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cleanEmail = email.trim();
    if (!cleanEmail) return;

    setStatus("loading");
    setFeedback("Subscribing...");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: cleanEmail, source: "footer_form" }),
      });

      const json = await res.json();
      if (res.ok && json.success) {
        setStatus("success");
        setFeedback("Subscribed ✓");
        setEmail("");
        setTimeout(() => {
          setStatus("idle");
          setFeedback("");
        }, 4000);
      } else {
        setStatus("error");
        setFeedback(json.error?.message || "Subscription failed");
        setTimeout(() => {
          setStatus("idle");
          setFeedback("");
        }, 3000);
      }
    } catch {
      setStatus("error");
      setFeedback("Network error");
      setTimeout(() => {
        setStatus("idle");
        setFeedback("");
      }, 3000);
    }
  };

  const buttonText =
    status === "loading"
      ? "Subscribing..."
      : status === "success"
        ? "Subscribed ✓"
        : status === "error"
          ? feedback || "Error"
          : "Subscribe";

  return (
    <form
      onSubmit={handleSubmit}
      className="spartan-4474yi"
      data-border="true"
      style={{ "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0.2)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(255, 255, 255, 0.2)", borderRadius: "17px", opacity: "1" }}
    >
      <label className="spartan-l98nli" style={{ opacity: "1" }}>
        <div
          className="spartan-form-text-input spartan-form-input-wrapper spartan-t80cze"
          style={{ "--spartan-input-border-radius-bottom-left": "10px", "--spartan-input-border-radius-bottom-right": "10px", "--spartan-input-border-radius-top-left": "10px", "--spartan-input-border-radius-top-right": "10px", "--spartan-input-font-color": "rgb(255, 255, 255)", "--spartan-input-icon-mask-image": "none", "--spartan-input-placeholder-color": "rgba(255, 255, 255, 0.4)", opacity: "1" }}
        >
          <input
            type="email"
            required
            name="Email"
            placeholder="jane@company.com"
            className="spartan-form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
          />
        </div>
      </label>
      <div className="spartan-ypbvzg-container" style={{ opacity: "1" }}>
        <button
          type="submit"
          disabled={status === "loading"}
          className="spartan-02foy spartan-PrkU3 spartan-vropfs spartan-v-3o28b2"
          data-reset="button"
          style={{ width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", opacity: status === "loading" ? 0.7 : 1, cursor: status === "loading" ? "default" : "pointer" }}
        >
          <div
            className="spartan-10u5ff9"
            data-border="true"
            style={{ "--border-bottom-width": "1px", "--border-color": "rgba(26, 26, 26, 0.1)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgb(255, 255, 255)", borderRadius: "12px", opacity: "1" }}
          >
            <div
              className="spartan-19v2iap"
              style={{ backgroundColor: "rgb(31, 31, 31)", borderRadius: "10px", opacity: "1" }}
            >
              <div
                className="spartan-10e1vo5-container"
                style={{ filter: "contrast(2) invert(1)", opacity: "1" }}
              >
                <div
                  className="spartan-B37bi spartan-935gnt spartan-v-12p9kw7"
                  style={{ height: "100%", width: "100%", opacity: "1" }}
                >
                  <div
                    className="spartan-10351p9"
                    aria-hidden="true"
                    style={{ imageRendering: "pixelated", flexShrink: "0", opacity: "1" }}
                  >
                    <div
                      className="svgContainer"
                      style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}
                    >
                      <svg
                        style={{ width: "100%", height: "100%", overflow: "visible" }}
                        preserveAspectRatio="none"
                        width="100%"
                        height="100%"
                      >
                        <use href="#svg751288301_9575"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="spartan-1h0tzw" style={{ borderRadius: "14px", opacity: "1" }}>
              <div className="spartan-1jrdess" style={{ transform: "none", opacity: "1" }}>
                <p
                  className="spartan-text spartan-styles-preset-g3iomj"
                  style={{ color: "rgb(26, 26, 26)", whiteSpace: "nowrap" }}
                >
                  {buttonText}
                </p>
              </div>
            </div>
          </div>
        </button>
      </div>
    </form>
  );
}
