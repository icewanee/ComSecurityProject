const Util = {
  login: async (username, password) => {
    const URL = "http://localhost:8000/api/login";
    const response = await fetch(URL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    // console.log(response.json());
    if (response.status === 500) return response.json();
    if (response.status === 200) return response.json();
  },
  getPost: async () => {
    const URL = `http://localhost:8000/api/auth/post`;
    const response = await fetch(URL, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    if (response.status === 404) return { error: true };
    if (response.status === 200) return response.json();
  },
  createPost: async (title) => {
    const URL = `http://localhost:8000/api/auth/post`;
    const response = await fetch(URL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
      }),
    });
    if (response.status === 400) return { error: true };
    if (response.status === 201) return response.json();
  },
  editPost: async (_id, title) => {
    const URL = `http://localhost:8000/api/auth/post/${_id}`;
    const response = await fetch(URL, {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
      }),
    });
    if (response.status === 400) return { error: true };
    if (response.status === 201) return response.json();
  },
  deletePost: async (postID) => {
    const URL = `http://localhost:8000/api/auth/post/${postID}`;
    const response = await fetch(URL, {
      method: "delete",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      mode: "cors",
    });
    if (response.status === 400) return { error: true };
    if (response.status === 200) return response.json();
  },
  createComment: async (post_id, text) => {
    const URL = `http://localhost:8000/api/auth/comment`;
    console.log(URL);
    const response = await fetch(URL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        post_id,
      }),
    });

    if (response.status === 201) return response.json();
    if (response.status === 400) return { err: false };
  },
  editComment: async (id, text) => {
    const URL = `http://localhost:8000/api/auth/comment`;
    const response = await fetch(URL, {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        id,
      }),
    });
    if (response.status === 200) return response.json();
    else return { err: false };
  },
  getComment: async (postID) => {
    const URL = `http://localhost:8000/api/auth/comment/${postID}`;
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      mode: "cors",
    });
    if (response.status === 404) return { error: true };
    if (response.status === 200) return response.json();
  },
};

export default Util;
