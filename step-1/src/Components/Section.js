import React from "react";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";

const Section = ({ isNormal }) => {
  return (
    <div className="Section">
      {isNormal ? (
        <>
          <Flip>
            <div className="Section__img img1"></div>
          </Flip>
          <div className="Section__text">
            <ul>
              <Fade right delay={0}>
                <li>사진 설명 설명 설명</li>
              </Fade>
              <Fade right delay={100}>
                <li>사진 설명 설명 설명</li>
              </Fade>
              <Fade right delay={200}>
                <li>사진 설명 설명 설명</li>
              </Fade>
              <Fade right delay={300}>
                <li>사진 설명 설명 설명</li>
              </Fade>
              <Fade right delay={400}>
                <li>사진 설명 설명 설명</li>
              </Fade>
            </ul>
          </div>
        </>
      ) : (
        <>
          <div className="Section__text">
            <ul>
              <Fade left delay={500}>
                <li>사진 설명 설명 설명</li>
              </Fade>
              <Fade left delay={600}>
                <li>사진 설명 설명 설명</li>
              </Fade>
              <Fade left delay={700}>
                <li>사진 설명 설명 설명</li>
              </Fade>
              <Fade left delay={800}>
                <li>사진 설명 설명 설명</li>
              </Fade>
              <Fade left delay={900}>
                <li>사진 설명 설명 설명</li>
              </Fade>
            </ul>
          </div>
          <Flip delay={500}>
            <div className="Section__img img2"></div>
          </Flip>
        </>
      )}
    </div>
  );
};

export default Section;
