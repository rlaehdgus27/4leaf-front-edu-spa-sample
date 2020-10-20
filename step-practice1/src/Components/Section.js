import React from "react";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

const Section = ({ isNormal1, isNormal2, isNormal3 }) => {
  return (
    <div className="Section">
      {isNormal1 && (
        <div>
          <div className="section1">
            <Bounce left delay={0}>
              <div className="Section__img"></div>
            </Bounce>
            <div className="Section__text">
              <ul>
                <Fade right delay={0}>
                  <li>회식으로 적격!</li>
                </Fade>
                <Fade right delay={100}>
                  <li>소주안주로 적격!</li>
                </Fade>
                <Fade right delay={200}>
                  <li>존맛탱구리!</li>
                </Fade>
              </ul>
            </div>
          </div>
          <div className="section1 section1-1">
            <div className="Section__text">
              <ul>
                <Fade right delay={0}>
                  <li>둘이 먹다 하나 죽어도 모르는 맛!</li>
                </Fade>
                <Fade right delay={100}>
                  <li>어디서 먹어도 질리지 않는 맛!</li>
                </Fade>
                <Fade right delay={200}>
                  <li>대표님 삼겹살 ㄱㄱ?</li>
                </Fade>
              </ul>
            </div>
            <Bounce left delay={0}>
              <div className="Section__img"></div>
            </Bounce>
          </div>
        </div>
      )}
      {isNormal2 && (
        <div className="section2">
          <Bounce left delay={0}>
            <div className="Section__img"></div>
          </Bounce>
          <div className="Section__text">
            <ul>
              <Fade right delay={0}>
                <li>야식으로는 따라올자가 없다!</li>
              </Fade>
              <Fade right delay={100}>
                <li>맥주의 친구!</li>
              </Fade>
              <Fade right delay={200}>
                <li>물론 콜라도 친구!</li>
              </Fade>
              <Fade right delay={300}>
                <li>치킨은 역시 양념반 후라이드반!</li>
              </Fade>
              <Fade right delay={400}>
                <li>
                  <a href="tel:050713638810">0507-1363-8810</a>
                </li>
              </Fade>
            </ul>
          </div>
        </div>
      )}
      {isNormal3 && (
        <div className="section3">
          <Bounce left delay={0}>
            <div className="Section__img"></div>
          </Bounce>
          <div className="Section__text">
            <ul>
              <Fade right delay={0}>
                <li>국민 대표 찌개!</li>
              </Fade>
              <Fade right delay={100}>
                <li>김치찌개는 역시 고기 많이!</li>
              </Fade>
              <Fade right delay={200}>
                <li>한국인의 밥!</li>
              </Fade>
              <Fade right delay={300}>
                <li>추운겨울에 뜨끈한 김치찌개 한그릇 뚝딱!</li>
              </Fade>
              <Fade right delay={400}>
                <li>얼른 먹으러 가세요!</li>
              </Fade>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Section;
