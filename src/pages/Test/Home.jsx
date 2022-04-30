import React from "react";
import { useForm } from "react-hook-form";
import { useAddPost, useGetPost, useTestServe } from "../../api/Query";

const Home = () => {
  const { mutateAsync } = useAddPost();
  const { register, handleSubmit } = useForm();
  const { data } = useTestServe();
  console.log(data);
  const { data: test } = useGetPost();
  console.log(test);
  const onValid = (data) => {
    /* input data */
    mutateAsync();
  };
  return (
    <React.Fragment>
      <div>홈페이지 페이지 가져오기</div>
      <hr />
      <div>내용 등록하기</div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("text", {
            minLength: 2,
          })}
        />
        <button>작성</button>
      </form>
      m
    </React.Fragment>
  );
};

export default Home;
