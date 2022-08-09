import React from "react";
import { Footer } from "../../components";
import classes from "./about.module.scss";

const AboutPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.about}>
        <div className={classes.section}>
          <h1>
            <b>thanks for calling.</b>
          </h1>
          <div className={classes.content}>
            <p>
              My name is Kristin Au (pronounced /ou/). I've designed software
              products for a range of companies including{" "}
              <a href="https://www.watershed.com/">Watershed</a>,{" "}
              <a href="https://www.slack.com/">Slack</a>,{" "}
              <a href="https://www.quora.com/">Quora</a>,{" "}
              <a href="https://www.shift4.com/sports-entertainment">
                VenueNext
              </a>
              , and <a href="https://www.disney.co.jp/">The Walt Disney Co.</a>
            </p>
            <p>I'm currently open to short-term projects.</p>
            <p>
              <a
                href="mailto:hello@kristinau.com"
                data-tip="hello@kristinau.com"
              >
                Email me
              </a>{" "}
              to learn more about what I can do to help your business.
            </p>
          </div>
        </div>

        <div className={classes.section}>
          <h2>design musings</h2>
          <div className={classes.content}>
            <div className={classes.literature}>
              <p>
                <a
                  href="https://slack.design/articles/communication-as-a-design-problem/"
                  target="_blank"
                >
                  Communication as a design problem
                </a>
              </p>
              <p className={classes.caption}>Slack Design Blog, 2020</p>
            </div>
            <div className={classes.literature}>
              <p>
                <a
                  href="https://slack.design/articles/how-we-layered-product-principles-to-refresh-slack-notifications/"
                  target="_blank"
                >
                  How we layered product principles to refresh Slack
                  notifications
                </a>
              </p>
              <p className={classes.caption}>Slack Design Blog, 2021</p>
            </div>
            <div className={classes.literature}>
              <p>
                <a
                  href="https://slack.design/articles/hey-slack-design-how-much-if-any-code-should-i-learn/"
                  target="_blank"
                >
                  How much, if any, code should I learn?
                </a>
              </p>
              <p className={classes.caption}>Hey Slack Design, 2021 </p>
            </div>
          </div>
        </div>

        <div className={classes.section}>
          <h2>my life story</h2>
          <div className={classes.eventContent}>
            <div className={classes.lifeEvent}>
              {" "}
              <p>🌱</p>
              <p>
                I stumbled into multi-disciplinary design while studying{" "}
                <a href="https://architecture.mit.edu/discipline/computation">
                  {" "}
                  Architecture at MIT
                </a>
                .
              </p>
            </div>

            <div className={classes.lifeEvent}>
              {" "}
              <p>🌿</p>
              <p>
                After graduating, I moved to Tokyo to design sparkly mobile
                apps, learn Japanese, and eat ramen.
              </p>
            </div>

            <div className={classes.lifeEvent}>
              <p>🪴</p>
              <p>
                I developed a hankering for tech, cioppino, and house plants and
                moved to San Francisco.
              </p>
            </div>

            <div className={classes.lifeEvent}>
              <p>🌳 </p>
              <p>
                Now fully settled into the Bay Area, I pursue my ever-evolving
                crafting hobbies and lifelong pursuit to become a polyglot.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
