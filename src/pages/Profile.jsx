import React from "react";
import { useForm } from "react-hook-form";

const Profile = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <React.Fragment>
      <div className="w-full h-[calc(100vh-2.5rem)] bg-slate-300 flex flex-col items-center justify-center absolute bottom-0">
        <div className="w-96 h-[500px] bg-slate-400 p-4 flex flex-col justify-center items-center">
          <h1>내 정보</h1>
          <img src="" alt="" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="닉네임 변경" {...register("nickName")} />
            {/* <input {...register("")}/> */}
            <button type="submit">변경</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
