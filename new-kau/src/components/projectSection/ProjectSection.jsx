import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import {
  FaCaretLeft as IconLeft,
  FaCaretRight as IconRight,
} from "react-icons/fa";
import ReactDom from "react-dom";
import ReactMarkdown from "react-markdown";
import classes from "./projectSection.module.scss";

const ProjectSection = ({ section }) => {
  return (
    <div className={classes.container}>
      {/* this is a section if there is a title */}
      <div className={(section.title || section.subtitle) && classes.section}>
        {section.caption && (
          <p className={classes.titleCaption}>{section.caption}</p>
        )}
        {section.title && <h2>{section.title}</h2>}
        {section.subtitle && <h3>{section.subtitle}</h3>}

        {/* there can be paragraphs only */}
        {section.content && (
          <div className={classes.content}>
            {section.content.map((item, index) => (
              <ReactMarkdown>{item}</ReactMarkdown>
            ))}
          </div>
        )}

        {/* there can be images only */}
        {section.imgs && (
          <div className={classes.imageContainer}>
            <div className={classes[section.imgClass]}>
              <div className={classes.images}>
                {section.isBeforeAfter ? (
                  <ReactCompareSlider
                    className={classes.slider}
                    handle={
                      <div className={classes.handle}>
                        <div class={classes.handleLine}></div>
                        <button>
                          <IconLeft className={classes.handleIcon} />
                          <IconRight className={classes.handleIcon} />
                        </button>
                        <div class={classes.handleLine}></div>
                      </div>
                    }
                    itemOne={
                      <ReactCompareSliderImage
                        src={require("../../assets" + section.imgs[0])}
                        alt={section.alts[0]}
                      />
                    }
                    itemTwo={
                      <ReactCompareSliderImage
                        src={require("../../assets" + section.imgs[1])}
                        alt={section.alts[1]}
                      />
                    }
                  />
                ) : (
                  section.imgs.map((item, index) => (
                    <img
                      src={require("../../assets" + item)}
                      alt={section.alts[index]}
                    />
                  ))
                )}
              </div>
            </div>
            {section.imgCaption && (
              <p className={classes.imageCaption}>{section.imgCaption}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectSection;
