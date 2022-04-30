import { Link } from "react-router-dom";
import DarkMode from "../layout/DarkMode";

const Header = () => {
  return (
    <div className="w-full h-10 bg-gray-600 flex justify-around items-center">
      <Link to="/">홈</Link>
      <Link to="/login">로그인하기</Link>
      <Link to="/drag">드래그 테스트</Link>
      <DarkMode />
    </div>
  );
};
export default Header;
