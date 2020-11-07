import history from "../history";

const Util = {
  login: async (email, password) => {
    const URL = "http://localhost:8000/login";
    const response = await fetch(URL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    console.log(response.status);
    if (response.status == 500) return response.json();
    if (response.status == 200) return response.json();
  },
  // getPost: async () => {
  //   const URL = `http://localhost:8000/home?token=${token}`;
  //   const response = await fetch(URL, {
  //     method: "GET",
  //     mode: "cors",
  //   });
  //   if (response.status == 404) return { error: true };
  //   if (response.status == 200) return response.json();
  // },
  // createPost: async (
  //   topic,
  // ) => {
  //   const URL = `http://localhost:8000/home?token=${token}`;
  //   const response = await fetch(URL, {
  //     method: "POST",
  //     mode: "cors",
  //     cache: "no-cache",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       topic,
  //       datail,
  //     }),
  //   });
  //   console.log(response.status);
  //   if (response.status == 400) return { error: true };
  //   if (response.status == 201) return response.json();
  // },
  // editPost: async (
  //   _id,
  //   topic,
  // ) => {
  //   const URL = `http://localhost:8000/home?token=${token}`;
  //   const response = await fetch(URL, {
  //     method: "PUT",
  //     mode: "cors",
  //     cache: "no-cache",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       _id,
  //       topic,
  //       datail,
  //     }),
  //   });
  //   console.log(response.status);
  //   if (response.status == 400) return { error: true };
  //   if (response.status == 201) return response.json();
  // },
  // deletePost: async (postID) => {
  //   const URL = `http://localhost:8000/home?postId=${postID}&token=${localStorage.getItem("token")}`;
  //   const response = await fetch(URL, {
  //     method: "delete",
  //     mode: "cors",
  //   });
  //   if (response.status == 400) return { error: true };
  //   if (response.status == 201) return { error: false };
  // },
  // createComment: async (postID, text) => {
  //   const URL = `http://localhost:8000/comment?token=${localStorage.getItem("token")}`;
  //   console.log(URL);
  //   const response = await fetch(URL, {
  //     method: "POST",
  //     mode: "cors",
  //     cache: "no-cache",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       postID,
  //       text,
  //     }),
  //   });

  //   if (response.status == 400) return response.json();
  //   if (response.status == 201) return { err: false };
  // },
  // editComment: async (postID, commentID, text) => {
  //   const URL = `http://localhost:8000/comment?token=${localStorage.getItem("token")}`;
  //   const response = await fetch(URL, {
  //     method: "PUT",
  //     mode: "cors",
  //     cache: "no-cache",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       postID, 
  //       commentID, 
  //       text,
  //     }),
  //   });
  //   if (response.status == 400) return response.json();
  //   if (response.status == 201) return { err: false };
  // },
  // getComment: async (postID) => {
  //   const URL = `http://localhost:8000/comment?postID=${postID}&token=${localStorage.getItem("token")}`;
  //   const response = await fetch(URL, {
  //     method: "GET",
  //     mode: "cors",
  //   });
  //   if (response.status == 404) return { error: true };
  //   if (response.status == 200) return response.json();
  // },
};

export default Util;