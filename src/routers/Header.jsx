import React from "react";
import { Link, useLocation } from "react-router-dom";
import Chat from "../Components/Chat";

const Header = () => {
  const location = useLocation();
  return (
    <React.Fragment>
      {location.pathname.includes("tool") ? (
        <React.Fragment>
          <div className="w-full h-10 bg-yellow-200 flex justify-between items-center">
            <Link to="/">로고</Link>
            <nav className="w-[30%] flex justify-around">
              <Link to="/tool/1">메인</Link>
              <Link to="/tool/1/document">문서</Link>
              <Link to="/tool/1/board">보드</Link>
            </nav>
            <nav className="w-72 flex justify-around">
              <Link to="/profile">내 정보</Link>
              <Link to="/login">로그인하기</Link>
            </nav>
          </div>
          <div className="w-full flex justify-end">
            <Chat />
          </div>
        </React.Fragment>
      ) : (
        <div className="w-full h-10 bg-yellow-200 flex justify-between items-center">
          <Link to="/">로고</Link>
          <nav className="w-72 flex justify-around">
            <Link to="/profile">내 정보</Link>
            <Link to="/login">로그인하기</Link>
          </nav>
        </div>
      )}
    </React.Fragment>
  );
};
export default Header;
