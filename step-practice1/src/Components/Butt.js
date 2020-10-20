import React, { useState } from "react";
import Section from "./Section";

const Butt = () => {
  const [value, setValue] = useState(0);
  const [currentTab, setCurrentTab] = useState(0);

  const changeHandler = () => {
    setValue(0);
  };

  const changeTab = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div>
      <section className="tabArea">
        <div className="tabArea__tabs">
          <div
            className={currentTab === 0 ? `active` : ``}
            onClick={() => changeTab(0)}
          >
            삼겹살
          </div>
          <div
            className={currentTab === 1 ? `active` : ``}
            onClick={() => changeTab(1)}
          >
            취킨
          </div>
          <div
            className={currentTab === 2 ? `active` : ``}
            onClick={() => changeTab(2)}
          >
            킴치찌개
          </div>
        </div>

        <div className="tabArea__content">
          {currentTab === 0 && <Section isNormal1={true} />}
          {currentTab === 1 && <Section isNormal2={true} />}
          {currentTab === 2 && <Section isNormal3={true} />}
        </div>
      </section>
    </div>
  );
};

export default Butt;
