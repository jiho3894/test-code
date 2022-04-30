import { Link } from "react-router-dom";

const Document = () => {
  return (
    <div className="w-full h-[calc(100vh-2.5rem)] bg-slate-300 flex justify-between absolute bottom-0">
      <div className="w-72 h-full bg-orange-300 flex justify-between items-start">
        <span>문서목록</span>
        <nav className="w-8 h-8 bg-white">
          <Link to="/tool/1/addDocs">추가</Link>
        </nav>
      </div>
    </div>
  );
};

export default Document;
