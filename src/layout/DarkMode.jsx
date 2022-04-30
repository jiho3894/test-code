import { useRecoilState } from "recoil";
import { themeState } from "../recoil/Atoms";

const DarkMode = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  /* 다크 모드 토글 tailwind Dark class 사용 */
  const clickDark = () => {
    return theme === "2" ? setTheme("1") : setTheme("2");
  };
  return <button onClick={clickDark}>다크모드 {theme}</button>;
};

export default DarkMode;
