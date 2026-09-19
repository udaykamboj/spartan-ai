import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Works from "@/components/Works";
import Capabilities from "@/components/Capabilities";
import Process from "@/components/Process";
import Collective from "@/components/Collective";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div id="main">
      <style
        dangerouslySetInnerHTML={{
          __html: ":root body { background: rgb(255, 255, 255); }",
        }}
      />
      <div
        className="spartan-Z8hVM spartan-u3qn7x"
        style={{ minHeight: "100vh", width: "auto" }}
      >
        {/* Background gradient mask container */}
        <div className="spartan-1g21kgg-container">
          <div style={{ position: "absolute", inset: "0", overflow: "hidden" }}>
            <div
              style={{
                opacity: "1",
                position: "absolute",
                inset: "0",
                zIndex: "1",
                maskImage:
                  "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%)",
                WebkitMaskImage:
                  "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%)",
                borderRadius: "0px",
                pointerEvents: "none",
                backdropFilter: "blur(0.0390625px)",
              }}
            />
            <div
              style={{
                opacity: "1",
                position: "absolute",
                inset: "0",
                zIndex: "2",
                maskImage:
                  "linear-gradient(to top, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%)",
                WebkitMaskImage:
                  "linear-gradient(to top, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%)",
                borderRadius: "0px",
                pointerEvents: "none",
                backdropFilter: "blur(0.078125px)",
              }}
            />
            <div
              style={{
                opacity: "1",
                position: "absolute",
                inset: "0",
                zIndex: "3",
                maskImage:
                  "linear-gradient(to top, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%)",
                WebkitMaskImage:
                  "linear-gradient(to top, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%)",
                borderRadius: "0px",
                pointerEvents: "none",
                backdropFilter: "blur(0.15625px)",
              }}
            />
            <div
              style={{
                opacity: "1",
                position: "absolute",
                inset: "0",
                zIndex: "4",
                maskImage:
                  "linear-gradient(to top, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%)",
                WebkitMaskImage:
                  "linear-gradient(to top, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%)",
                borderRadius: "0px",
                pointerEvents: "none",
                backdropFilter: "blur(0.3125px)",
              }}
            />
            <div
              style={{
                opacity: "1",
                position: "absolute",
                inset: "0",
                zIndex: "5",
                maskImage:
                  "linear-gradient(to top, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%)",
                WebkitMaskImage:
                  "linear-gradient(to top, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%)",
                borderRadius: "0px",
                pointerEvents: "none",
                backdropFilter: "blur(0.625px)",
              }}
            />
            <div
              style={{
                opacity: "1",
                position: "absolute",
                inset: "0",
                zIndex: "6",
                maskImage:
                  "linear-gradient(to top, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)",
                WebkitMaskImage:
                  "linear-gradient(to top, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)",
                borderRadius: "0px",
                pointerEvents: "none",
                backdropFilter: "blur(1.25px)",
              }}
            />
            <div
              style={{
                opacity: "1",
                position: "absolute",
                inset: "0",
                zIndex: "7",
                maskImage:
                  "linear-gradient(to top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%)",
                WebkitMaskImage:
                  "linear-gradient(to top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%)",
                borderRadius: "0px",
                pointerEvents: "none",
                backdropFilter: "blur(2.5px)",
              }}
            />
            <div
              style={{
                opacity: "1",
                position: "absolute",
                inset: "0",
                zIndex: "8",
                maskImage:
                  "linear-gradient(to top, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%)",
                WebkitMaskImage:
                  "linear-gradient(to top, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%)",
                borderRadius: "0px",
                pointerEvents: "none",
                backdropFilter: "blur(5px)",
              }}
            />
          </div>
        </div>

        {/* Root Sections Container */}
        <div
          className="spartan-9af1X spartan-7XoMN spartan-jAxV0 spartan-PrkU3 spartan-IWlkI spartan-b2MlG spartan-AgHK2 spartan-NLzyp spartan-go6t0 spartan-4sYUk spartan-8UAai spartan-PrPno spartan-lyRtL spartan-72rtr7"
          style={{ minHeight: "100vh", width: "auto", display: "contents" }}
        >
          <Hero />
          <Metrics />
          <Works />
          <Capabilities />
          <Process />
          <Collective />
          <Pricing />
          <FAQ />
          {/* Floating Buy Template Banner - 9th child of spartan-9af1X matching reference */}
          <div
            className="spartan-qj62i1-container"
            data-spartan-appear-id="qj62i1"
            id="qj62i1"
            style={{ opacity: 1, transform: "none", willChange: "transform" }}
          >
            <div
              className="spartan-JvCnh spartan-Qm68c spartan-x93q62 spartan-v-x93q62"
              data-border="true"
              data-spartan-name="Variant 1"
              data-highlight="true"
              tabIndex={0}
              style={{
                "--border-bottom-width": "1px",
                "--border-color": "rgba(22, 22, 22, 0.1)",
                "--border-left-width": "1px",
                "--border-right-width": "1px",
                "--border-style": "solid",
                "--border-top-width": "1px",
                backgroundColor: "rgb(224, 224, 224)",
                width: "100%",
                borderRadius: "14px",
                opacity: 1,
              }}
            >
              <div className="spartan-4xciem" style={{ opacity: 1 }}>
                <div className="spartan-5cq0n9" style={{ borderRadius: "10px", opacity: 1 }}>
                  <div
                    style={{ position: "absolute", borderRadius: "inherit", top: 0, right: 0, bottom: 0, left: 0 }}
                  >
                    <img
                      decoding="auto"
                      width={1600}
                      height={1200}
                      src="https://framerusercontent.com/images/kTrlBtbYEhj5t3kiNx7FPJ2asdI.png?width=1600&height=1200"
                      alt=""
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        borderRadius: "inherit",
                        objectPosition: "center",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
                <div className="spartan-6u53m6" style={{ borderRadius: "10px", opacity: 1 }}>
                  <div
                    style={{ position: "absolute", borderRadius: "inherit", top: 0, right: 0, bottom: 0, left: 0 }}
                  >
                    <img
                      decoding="auto"
                      width={1600}
                      height={1200}
                      src="https://framerusercontent.com/images/a8YZ5Hb58fP2ODvU1kud7JYuD4s.png?width=1600&height=1200"
                      alt=""
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        borderRadius: "inherit",
                        objectPosition: "center",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="spartan-chxci8" style={{ opacity: 1 }}>
                <div className="spartan-y5ca68" style={{ opacity: 1 }}>
                  <div className="spartan-6a71e7" style={{ opacity: 1 }}>
                    <div className="spartan-j8y34r" style={{ transform: "none", opacity: 1 }}>
                      <h4
                        dir="auto"
                        className="spartan-text"
                        style={{
                          fontFamily: '"PP Editorial New Regular", "PP Editorial New Regular Placeholder", sans-serif',
                          fontSize: "14px",
                          lineHeight: "1.3em",
                        }}
                      >
                        Buy Spartan AI Template
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="spartan-8754h" style={{ opacity: 1 }}>
                  <div className="spartan-r78s39" style={{ opacity: 0.6, transform: "none" }}>
                    <p
                      dir="auto"
                      className="spartan-text"
                      style={{
                        fontFamily: '"Geist Mono", monospace',
                        fontSize: "12px",
                        fontWeight: 500,
                        letterSpacing: "-0.01em",
                        lineHeight: "1.3em",
                        textAlign: "left",
                        color: "rgb(61, 61, 61)",
                      }}
                    >
                      from
                    </p>
                  </div>
                  <div className="spartan-1cc0qmk" style={{ transform: "none", opacity: 1 }}>
                    <p
                      className="spartan-text spartan-styles-preset-19zidic"
                      dir="auto"
                      style={{ textAlign: "left" }}
                    >
                      $129
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="overlay"></div>
        <div className="spartan-5yo3s5"></div>
        <Footer />
        <Navbar />
        <div className="spartan-uug7ug" data-spartan-name="Spacer"></div>
      </div>
    </div>
  );
}
