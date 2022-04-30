import { KAKAO_AUTH_URL } from "../../api/OAuth";
import KakaoImg from "../../images/kakao_login_medium_wide.png";

import DaumPostcode from "react-daum-postcode";
import { useState } from "react";

const TestLogin = () => {
  const [home, setHome] = useState(false);
  const [text, setText] = useState("주소결과 text");
  const onClick = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  const onHome = () => {
    setHome((prev) => !prev);
  };
  const onComplete = (data) => {
    setText(data.query);
    console.log(data);
  };
  return (
    <div>
      <div onClick={onClick}>
        <img src={KakaoImg} alt="카카오계정 로그인" />
      </div>
      <button onClick={onHome} className="bg-yellow-400 w-14 f-14">
        주소 검색
      </button>
      {home ? (
        <div>
          <DaumPostcode onComplete={onComplete} />
        </div>
      ) : (
        "주소창 없을때"
      )}
      <div>주소결과 : {text}</div>
    </div>
  );
};

export default TestLogin;
