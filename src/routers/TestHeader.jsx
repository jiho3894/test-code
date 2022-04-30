import { Link } from "react-router-dom";
import DarkMode from "../layout/DarkMode";

const Header = () => {
  return (
    <div className="w-full h-10 bg-gray-600 flex justify-around items-center">
      <Link to="/">와이어 틀</Link>
      <Link to="/test">테스트 홈</Link>
      <Link to="/test/login">로그인하기</Link>
      <Link to="/test/drag">드래그 테스트</Link>
      <DarkMode />
    </div>
  );
};
export default Header;
