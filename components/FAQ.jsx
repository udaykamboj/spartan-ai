"use client";
import React, { useState } from "react";
import Insights from "@/components/Insights";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <section className="spartan-1lgli9y">
        <div className="spartan-1awoy5q">
          <div className="spartan-1lo70xe">
            <div className="spartan-dhgyfx">
              <div className="spartan-mwtr59">
                <div className="spartan-10xjlaa">
                  <div
                    className="spartan-cq5xb8"
                    style={{ willChange: "transform", opacity: "1", transform: "none" }}
                  >
                    <div className="spartan-18a5q2a" data-border="true"></div>
                    <div className="spartan-9szvzp"></div>
                    <div
                      className="spartan-191vpqu"
                      style={{ transform: "none" }}
                    >
                      <p
                        className="spartan-text spartan-styles-preset-1kttsz8"
                        style={{ color: "rgb(26, 26, 26)" }}
                      >
                        COMMON QUERIES
                      </p>
                    </div>
                  </div>
                  <div
                    className="spartan-mkk00w"
                    style={{ willChange: "transform", opacity: "1", transform: "none" }}
                  >
                    <p
                      className="spartan-text spartan-styles-preset-ull0yy"
                      style={{ color: "rgb(26, 26, 26)" }}
                    >
                      Find answers to technical specifications, deployment timelines, and our data
                      security protocols.
                    </p>
                  </div>
                </div>
                <div className="spartan-1iw3dnh">
                  <div
                    className="spartan-1h875kl"
                    style={{ willChange: "transform", opacity: "1", transform: "none" }}
                  >
                    <h2
                      className="spartan-text spartan-styles-preset-6s66nj"
                      style={{ color: "rgb(26, 26, 26)" }}
                    >
                      Everything you need to know about our AI.
                    </h2>
                  </div>
                  <div className="ssr-variant">
                    <div
                      className="spartan-yrkiv0-container"
                      style={{ willChange: "transform", opacity: "1", transform: "none" }}
                    >
                      <a
                        className="spartan-vm9ze spartan-Za4l6 spartan-PrkU3 spartan-1wpq3gf spartan-v-1wpq3gf spartan-1ygsj5w"
                        href="/contact"
                        style={{ "--border-bottom-width": "0px", "--border-color": "rgba(0, 0, 0, 0)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", backgroundColor: "rgb(31, 31, 31)", width: "100%", borderRadius: "16px", opacity: "1" }}
                      >
                        <div
                          className="spartan-1emdssz"
                          style={{ backgroundColor: "rgb(255, 255, 255)", borderRadius: "14px", opacity: "1" }}
                        >
                          <div
                            className="spartan-x5l8-container"
                            style={{ filter: "none", opacity: "1" }}
                          >
                            <div
                              className="spartan-B37bi spartan-935gnt spartan-v-935gnt"
                              style={{ opacity: "1" }}
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
                        <div
                          className="spartan-yk1t5j"
                          style={{ borderRadius: "14px", opacity: "1" }}
                        >
                          <div
                            className="spartan-1xuhufw"
                            style={{ transform: "none", opacity: "1" }}
                          >
                            <p
                              className="spartan-text spartan-styles-preset-vad88t"
                              style={{ color: "rgb(255, 255, 255)" }}
                            >
                              Contact Support
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="spartan-hrjoao">
                <div className="ssr-variant">
                  <div
                    className="spartan-g4pdb9-container"
                    style={{ willChange: "transform", opacity: "1", transform: "none" }}
                  >
                    <div
                      className="spartan-4z0cW spartan-sdin9b spartan-v-sdin9b"
                      style={{ width: "100%", opacity: "1" }}
                    >
                      {[
                        {
                          containerClass: "spartan-hqme98-container",
                          q: "How do you ensure our data remains secure?",
                          a: "We utilize SOC2-compliant local vector databases and on-premise LLM hosting to ensure your proprietary data never leaves your infrastructure.",
                        },
                        {
                          containerClass: "spartan-6gbuax-container",
                          q: "What is the typical deployment timeline?",
                          a: "Initial neural audits take 1 week, followed by a 4-week rapid prototyping phase before full-scale production deployment.",
                        },
                        {
                          containerClass: "spartan-hgpmcr-container",
                          q: "Can we integrate with our existing CRM?",
                          a: "Yes, our cognitive pipelines are built with native API connectors for Salesforce, HubSpot, and custom enterprise ERP systems.",
                        },
                        {
                          containerClass: "spartan-119rsvg-container",
                          q: "Do you provide model fine-tuning?",
                          a: "Absolutely. We offer bespoke fine-tuning services to align open-source models (like Llama 3) with your specific industry terminology and logic.",
                        },
                        {
                          containerClass: "spartan-ulg0tb-container",
                          q: "How do you calculate ROI for automation?",
                          a: "We track operational velocity metrics, measuring hours saved and accuracy gains against your previous baseline manual workflows.",
                        },
                        {
                          containerClass: "spartan-b7f2cn-container",
                          q: "Do we own the custom code you build?",
                          a: "Yes. All custom neural architectures and integration code developed for your firm are 100% owned by you upon project completion.",
                        },
                        {
                          containerClass: "spartan-3dksz-container",
                          q: "What models do you specialize in?",
                          a: "We are model-agnostic, specializing in OpenAI, Anthropic, and Mistral, as well as local deployments of high-performance open-source LLMs.",
                        },
                      ].map((item, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                          <div key={idx} className={item.containerClass} style={{ opacity: "1" }}>
                            <div
                              className={`spartan-hYikM spartan-Cp3im spartan-jAxV0 spartan-1ixyqmp ${isOpen ? "spartan-v-p76wqw" : "spartan-v-1ixyqmp"}`}
                              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                              tabIndex={0}
                              style={{ width: "100%", opacity: "1", cursor: "pointer" }}
                            >
                              <div
                                className="spartan-1z04rk"
                                style={{
                                  backgroundColor: "rgb(26, 26, 26)",
                                  borderRadius: "20px",
                                  boxShadow: "rgba(0, 0, 0, 0) 0px 8px 13px 3px",
                                  transform: "none",
                                  opacity: "1",
                                }}
                              >
                                <div className="spartan-176g870" style={{ opacity: "1" }}>
                                  <div className="spartan-1x2yv4" style={{ opacity: "0.9", transform: "none" }}>
                                    <h4
                                      className="spartan-text spartan-styles-preset-1lvxtxq"
                                      style={{ color: "rgb(255, 255, 255)" }}
                                    >
                                      {item.q}
                                    </h4>
                                  </div>
                                  <div
                                    className="spartan-1fx0bz9-container"
                                    style={{
                                      transform: isOpen ? "none" : "rotate(45deg)",
                                      opacity: "1",
                                      transition: "transform 0.2s cubic-bezier(0.81, 0.01, 0.48, 0.99)",
                                    }}
                                  >
                                    <div style={{ display: "contents" }}>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 256 256"
                                        focusable="false"
                                        color="rgb(255, 255, 255)"
                                        style={{ width: "100%", height: "100%", overflow: "visible" }}
                                      >
                                        <g color="rgb(255, 255, 255)" weight="bold">
                                          <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path>
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                {isOpen && (
                                  <div className="spartan-gvm7ja spartan-faq-answer" style={{ opacity: "1" }}>
                                    <div className="spartan-17q3i51" style={{ transform: "none", opacity: "1" }}>
                                      <p
                                        className="spartan-text spartan-styles-preset-ull0yy"
                                        style={{ color: "rgba(255, 255, 255, 0.8)" }}
                                      >
                                        {item.a}
                                      </p>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="spartan-7g7zfn">
            <div className="spartan-vk47v8">
              <div className="spartan-1h1hczv" style={{ display: "flex", position: "relative" }}>
                <ul
                  className="spartan-ticker spartan-ticker-text"
                  style={{ display: "flex", position: "relative", listStyleType: "none", padding: "0px", margin: "0px", justifyContent: "flex-start", flexDirection: "row", gap: "60px", opacity: "1", alignItems: "center", width: "100%", height: "100%", maxHeight: "100%", maxWidth: "100%", transform: "none" }}
                >
                  <li
                    className="ticker-item"
                    aria-hidden="false"
                    aria-posinset="1"
                    aria-setsize="2"
                    style={{ flexGrow: "0", flexShrink: "0", position: "relative", height: "fit-content", width: "fit-content", transform: "none" }}
                  >
                    <div
                      className="spartan-15dsys9"
                      style={{ transform: "none" }}
                    >
                      <h2
                        className="spartan-text spartan-styles-preset-1e3vt5c"
                        style={{ color: "rgb(26, 26, 26)" }}
                      >
                        Insights
                      </h2>
                    </div>
                  </li>
                  <li
                    className="ticker-item"
                    aria-hidden="false"
                    aria-posinset="2"
                    aria-setsize="2"
                    style={{ flexGrow: "0", flexShrink: "0", position: "relative", height: "fit-content", width: "fit-content", transform: "none" }}
                  >
                    <div className="spartan-1fdx726" style={{ opacity: "1", transform: "none" }}>
                      <div
                        className="spartan-1njcxv8"
                        aria-hidden="true"
                        style={{ imageRendering: "pixelated", flexShrink: "0" }}
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
                            <use href="#svg1041559296_1307"></use>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    className="clone-item"
                    aria-hidden="true"
                    aria-posinset="1"
                    aria-setsize="2"
                    style={{ flexGrow: "0", flexShrink: "0", position: "relative", height: "fit-content", width: "fit-content", transform: "none" }}
                  >
                    <div
                      className="spartan-15dsys9"
                      style={{ transform: "none" }}
                    >
                      <h2
                        className="spartan-text spartan-styles-preset-1e3vt5c"
                        style={{ color: "rgb(26, 26, 26)" }}
                      >
                        Insights
                      </h2>
                    </div>
                  </li>
                  <li
                    className="clone-item"
                    aria-hidden="true"
                    aria-posinset="2"
                    aria-setsize="2"
                    style={{ flexGrow: "0", flexShrink: "0", position: "relative", height: "fit-content", width: "fit-content", transform: "none" }}
                  >
                    <div className="spartan-1fdx726" style={{ opacity: "1", transform: "none" }}>
                      <div
                        className="spartan-1njcxv8"
                        aria-hidden="true"
                        style={{ imageRendering: "pixelated", flexShrink: "0" }}
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
                            <use href="#svg1041559296_1307"></use>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    className="clone-item"
                    aria-hidden="true"
                    aria-posinset="1"
                    aria-setsize="2"
                    style={{ flexGrow: "0", flexShrink: "0", position: "relative", height: "fit-content", width: "fit-content", transform: "none" }}
                  >
                    <div
                      className="spartan-15dsys9"
                      style={{ transform: "none" }}
                    >
                      <h2
                        className="spartan-text spartan-styles-preset-1e3vt5c"
                        style={{ color: "rgb(26, 26, 26)" }}
                      >
                        Insights
                      </h2>
                    </div>
                  </li>
                  <li
                    className="clone-item"
                    aria-hidden="true"
                    aria-posinset="2"
                    aria-setsize="2"
                    style={{ flexGrow: "0", flexShrink: "0", position: "relative", height: "fit-content", width: "fit-content", transform: "none" }}
                  >
                    <div className="spartan-1fdx726" style={{ opacity: "1", transform: "none" }}>
                      <div
                        className="spartan-1njcxv8"
                        aria-hidden="true"
                        style={{ imageRendering: "pixelated", flexShrink: "0" }}
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
                            <use href="#svg1041559296_1307"></use>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>{" "}
              <div className="spartan-fyjvje">
                <div className="spartan-1xp9iiv hidden-aak1h0 hidden-1gwjcs2"></div>
                <div className="spartan-ch4so2">
                  <div
                    className="spartan-cf5tb6"
                    style={{ transform: "none" }}
                  >
                    <p
                      className="spartan-text spartan-styles-preset-ull0yy"
                      style={{ color: "rgb(26, 26, 26)" }}
                    >
                      A curated repository of technical frameworks, model benchmarks, and strategic
                      guides for leaders navigating the integration of custom neural architectures.
                    </p>
                  </div>
                  <div className="ssr-variant">
                    <div className="spartan-dqb4l3-container">
                      <a
                        className="spartan-vm9ze spartan-Za4l6 spartan-PrkU3 spartan-1wpq3gf spartan-v-1wpq3gf spartan-1ygsj5w"
                        href="/articles"
                        style={{ "--border-bottom-width": "0px", "--border-color": "rgba(0, 0, 0, 0)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", backgroundColor: "rgb(31, 31, 31)", width: "100%", borderRadius: "16px", opacity: "1" }}
                      >
                        <div
                          className="spartan-1emdssz"
                          style={{ backgroundColor: "rgb(255, 255, 255)", borderRadius: "14px", opacity: "1" }}
                        >
                          <div
                            className="spartan-x5l8-container"
                            style={{ filter: "none", opacity: "1" }}
                          >
                            <div
                              className="spartan-B37bi spartan-935gnt spartan-v-935gnt"
                              style={{ opacity: "1" }}
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
                        <div
                          className="spartan-yk1t5j"
                          style={{ borderRadius: "14px", opacity: "1" }}
                        >
                          <div
                            className="spartan-1xuhufw"
                            style={{ transform: "none", opacity: "1" }}
                          >
                            <p
                              className="spartan-text spartan-styles-preset-vad88t"
                              style={{ color: "rgb(255, 255, 255)" }}
                            >
                              All articles
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Insights />
          </div>
        </div>
      </section>
    </>
  );
}

