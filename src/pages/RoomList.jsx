import { useNavigate } from "react-router-dom";

const RoomMake = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/tool/1");
  };
  return (
    <div className="w-full h-[calc(100vh-2.5rem)] bg-slate-300 flex flex-col items-center justify-center absolute bottom-0">
      <div className="w-full bg-red-400 flex flex-col items-center">
        <div className=" w-[80%] h-8 bg-amber-300 flex justify-end">
          <nav className="space-x-4">
            <button>방 생성</button>
            <button>방 입장</button>
          </nav>
        </div>
        <div className="w-[80%] bg-slate-600 grid grid-cols-3 gap-4">
          <div onClick={onClick} className="w-[300px] h-[300px] bg-slate-400">
            <section>1</section>
          </div>
          <div className="w-[300px] h-[300px] bg-slate-200">
            <section>2</section>
          </div>
          <div className="w-[300px] h-[300px] bg-slate-200">
            <section>3</section>
          </div>
          <div className="w-[300px] h-[300px] bg-slate-200">
            <section>4</section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomMake;
