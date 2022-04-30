import { useMutation, useQuery } from "react-query";
import { instance } from "../servers/axios";
import axios from "axios";

export const useTestServe = () => {
  return useQuery("getTest", () => {
    return axios.get("http://localhost:4000/user");
  });
};

export const useGetPost = () => {
  return useQuery(
    "getPosts",
    () => {
      return instance.get("/api/posts");
    },
    {
      select: (data) => {
        const result = data?.data.slice(0, 5).map((data) => {
          return data;
        });
        return result;
      },
    }
  );
};

export const useAddPost = () => {
  return useMutation(async (post) => {
    try {
      await instance.post("/api/posts", post);
    } catch (err) {
      console.log(err.response);
    }
  });
};
