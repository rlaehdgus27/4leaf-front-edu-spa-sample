import React, { useState } from "react";

// json 데이터 집합
// var str = "안녕하세요";
// hoisting[호이스팅]

// state [스테이트]
// 1. 기본적으로 리엑트가 가지고 있는 데이터 저장공간
// 2. 저장된 값이 변경되면, 화면이 변경된 값을 감지해서 사용자에게 다시 보여준다.
// 3. 스테이트는 무조건 set함수를 통해서만 제어가 가능하다.

const App = () => {
  //스테이트 생성 [리엑트 훅스 방식]
  const [value, setValue] = useState("눌러바");
  const [currentTab, setCurrentTab] = useState(0);

  const changeHandler = () => {
    setValue("눌렸다");

    console.log(value);
  };

  const changeTab = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div>
      <button onClick={changeHandler}>{value}</button>

      <section className="tabArea">
        <div className="tabArea__tabs">
          <div
            className={currentTab === 0 ? `active` : ``}
            onClick={() => changeTab(0)}
          >
            TAB - 1
          </div>
          <div
            className={currentTab === 1 ? `active` : ``}
            onClick={() => changeTab(1)}
          >
            TAB - 2
          </div>
          <div
            className={currentTab === 2 ? `active` : ``}
            onClick={() => changeTab(2)}
          >
            TAB - 3
          </div>
        </div>

        <div className="tabArea__content">
          {currentTab === 0 && `첫번쨰 탭을 선택하셧습니다`}
          {currentTab === 1 && `두번쨰 탭을 선택하셧습니다`}
          {currentTab === 2 && `세번쨰 탭을 선택하셧습니다`}
        </div>
      </section>
    </div>
  );
};

export default App;
