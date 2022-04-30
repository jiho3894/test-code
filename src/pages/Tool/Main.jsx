import Chat from "../../Components/Chat";
import TeamList from "../../Components/TeamList";

const Main = () => {
  return (
    <div className="w-full h-[calc(100vh-2.5rem)] bg-slate-300 flex justify-between absolute bottom-0">
      <TeamList />
      <div className="w-[calc(100%-36rem)]">
        <div>?????????????????????</div>
      </div>
      <Chat />
    </div>
  );
};

export default Main;
