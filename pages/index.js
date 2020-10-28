import Typist from "react-typist";
import React, { useState, useRef, useEffect } from "react";
import Layout from "../components/layout";
import moment from "moment";

export default function Home() {
  const [moreInfo, setMoreInfo] = useState(false);
  const [myAge, setMyAge] = useState(false);
  const scrollDivRef = useRef(null);

  useEffect(() => {
    const age = moment("19990421", "YYYYMMDD").fromNow();
    const newAge = age.substring(0, age.lastIndexOf(" "));
    setMyAge(newAge);
  }, []);

  const showMoreInfo = () => {
    setMoreInfo(true);

    setTimeout(
      () =>
        scrollDivRef?.current?.scrollIntoView({
          behavior: "smooth"
        }),
      500
    );
    setTimeout(
      () =>
        scrollDivRef?.current?.scrollIntoView({
          behavior: "smooth"
        }),
      1000
    );
    setTimeout(
      () =>
        scrollDivRef?.current?.scrollIntoView({
          behavior: "smooth"
        }),
      1500
    );
    setTimeout(
      () =>
        scrollDivRef?.current?.scrollIntoView({
          behavior: "smooth"
        }),
      2000
    );
    setTimeout(
      () =>
        scrollDivRef?.current?.scrollIntoView({
          behavior: "smooth"
        }),
      2500
    );
    setTimeout(
      () =>
        scrollDivRef?.current?.scrollIntoView({
          behavior: "smooth"
        }),
      3000
    );
    setTimeout(
      () =>
        scrollDivRef?.current?.scrollIntoView({
          behavior: "smooth"
        }),
      3500
    );
    setTimeout(
      () =>
        scrollDivRef?.current?.scrollIntoView({
          behavior: "smooth"
        }),
      4000
    );
    setTimeout(
      () =>
        scrollDivRef?.current?.scrollIntoView({
          behavior: "smooth"
        }),
      4500
    );
    setTimeout(
      () =>
        scrollDivRef?.current?.scrollIntoView({
          behavior: "smooth"
        }),
      5000
    );
    setTimeout(
      () =>
        scrollDivRef?.current?.scrollIntoView({
          behavior: "smooth"
        }),
      5500
    );
    setTimeout(
      () =>
        scrollDivRef?.current?.scrollIntoView({
          behavior: "smooth"
        }),
      6000
    );
    setTimeout(
      () =>
        scrollDivRef?.current?.scrollIntoView({
          behavior: "smooth"
        }),
      6500
    );
    setTimeout(
      () =>
        scrollDivRef?.current?.scrollIntoView({
          behavior: "smooth"
        }),
      7000
    );
    setTimeout(
      () =>
        scrollDivRef?.current?.scrollIntoView({
          behavior: "smooth"
        }),
      7500
    );
    setTimeout(
      () =>
        scrollDivRef?.current?.scrollIntoView({
          behavior: "smooth"
        }),
      8000
    );
    setTimeout(
      () =>
        scrollDivRef?.current?.scrollIntoView({
          behavior: "smooth"
        }),
      8500
    );
    setTimeout(
      () =>
        scrollDivRef?.current?.scrollIntoView({
          behavior: "smooth"
        }),
      9000
    );
    setTimeout(
      () =>
        scrollDivRef?.current?.scrollIntoView({
          behavior: "smooth"
        }),
      9500
    );
    setTimeout(
      () =>
        scrollDivRef?.current?.scrollIntoView({
          behavior: "smooth"
        }),
      10000
    );
    setTimeout(
      () =>
        scrollDivRef?.current?.scrollIntoView({
          behavior: "smooth"
        }),
      10500
    );
    setTimeout(
      () =>
        scrollDivRef?.current?.scrollIntoView({
          behavior: "smooth"
        }),
      11000
    );
    setTimeout(
      () =>
        scrollDivRef?.current?.scrollIntoView({
          behavior: "smooth"
        }),
      11500
    );
    setTimeout(
      () =>
        scrollDivRef?.current?.scrollIntoView({
          behavior: "smooth"
        }),
      12000
    );
    setTimeout(
      () =>
        scrollDivRef?.current?.scrollIntoView({
          behavior: "smooth"
        }),
      12500
    );
    setTimeout(
      () =>
        scrollDivRef?.current?.scrollIntoView({
          behavior: "smooth"
        }),
      13000
    );
    setTimeout(
      () =>
        scrollDivRef?.current?.scrollIntoView({
          behavior: "smooth"
        }),
      13500
    );
  };
  return (
    <Layout pageTitle="Eva Denys" description="A portfolio">
      <div className="mt-5 container animate__animated animate__fadeIn">
        <style jsx global>{`
          @media only screen and (min-width: 0px) {
            body {
              background-color: #151515;
              background-image: url("/images/me-sm.svg"),
                radial-gradient(circle at bottom right, #2c2c2c, #0c0c0c);
              background-attachment: fixed;
              background-position: bottom, center;
              background-repeat: no-repeat;

              color: #f8f8ff;
            }
          }
          @media only screen and (min-width: 720px) {
            body {
              background-color: #151515;
              background-image: radial-gradient(
                circle at bottom right,
                #2c2c2c,
                #0c0c0c
              );
              background-attachment: fixed;

              background-repeat: no-repeat;

              color: #f8f8ff;
            }

            body {
              overflow: hidden;
            }
          }
        `}</style>

        <h1 className="text-w-title">
          Hello, I am a{" "}
          <span className="highlights bold">Creative Developer</span>.
        </h1>

        <img
          className="img-me img-fluid"
          src="/images/me.svg"
          alt="/images/me.svg"
        />
        <div className="mt-5 information-text">
          <div>
            <Typist
              cursor={{
                show: false
              }}
            >
              <Typist.Delay ms={1250} />
              <div>
                <h2> > introduction </h2>

                <Typist.Delay ms={500} />
                <p className="text-w-intro">
                  Hello, my name is Eva Denys. And I am a{" "}
                  <span className="highlights thick">Creative Developer</span>,{" "}
                  <em className="highlights">UI & UX Designer</em> &{" "}
                  <span className="highlights dottedUnderline">Researcher</span>
                  .
                </p>
              </div>
              <div className="mt-4">
                <h2>> graduate</h2>
                <Typist.Delay ms={500} />
                <div className="text-w-grad">
                  <p className="highlights mb-2">
                    PBA Digital Design & Development
                  </p>
                  <p>@ Howest University of Applied Sciences</p>
                </div>
              </div>
              <div className="mt-4">
                <h2>> contact</h2>
                <Typist.Delay ms={500} />
                <a href="mailto: evadenys@hotmail.com">evadenys@hotmail.com</a>
                <p>
                  <a href="/CV_EvaDenys.pdf" download>
                    <u>my resume</u>
                  </a>
                </p>
              </div>
              <div className="mt-4">
                <h2 className="text-w-more">
                  > would you like to know more?{" "}
                  <em className="text-w-more-y">
                    (type <span className="highlights">y</span>)
                  </em>
                </h2>
                <input
                  type="text"
                  autoFocus
                  className="text-w-more-y-input"
                  onChange={e =>
                    e.currentTarget.value.toLocaleLowerCase() === "y" &&
                    showMoreInfo()
                  }
                ></input>
                <p className="text-w-more-button">
                  Click on{" "}
                  <em
                    onClick={() => {
                      showMoreInfo();
                    }}
                    className="highlights"
                  >
                    <u>Yes</u>
                  </em>
                </p>
              </div>
            </Typist>

            {moreInfo && (
              <Typist
                cursor={{
                  show: false
                }}
              >
                <div className="mt-4">
                  <h2>> age & origin</h2>
                  <p>{myAge} old </p>
                  <p>Belgium, Deinze 9850</p>
                </div>
                <div className="mt-4">
                  <h2>> hobbies</h2>
                  <p>running</p>
                  <p>drawing</p>
                  <p>coding</p>
                  <p>dogs&cats</p>
                  <p>going out with friends</p>
                  <p>listening to music</p>
                  <p>watching series</p>
                  <p>...</p>
                </div>
                <div className="mt-4 mb-4">
                  <h2>> professional social medias</h2>
                  <div className="d-flex flex-column">
                    <p className="pb-3 pt-3">
                      <a href="https://github.com/EvaDenys99" target="blank">
                        Github
                      </a>
                    </p>
                    <p className="pb-3">
                      <a
                        href="https://www.linkedin.com/in/eva-denys/"
                        target="blank"
                        className="pb-3"
                      >
                        Linkedin
                      </a>
                    </p>
                    <p className="pb-3" id="lastitem">
                      <a
                        href="https://www.behance.net/_eva_denys_"
                        target="blank"
                      >
                        Behance
                      </a>
                    </p>
                  </div>
                </div>
              </Typist>
            )}
            <div ref={scrollDivRef} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
