import history from "../history";
//IceBranch
const Util = {
  login: async (email, password) => {
    const URL = `http://${process.env.SERVERIP}:8000/login`;
    const response = await fetch(URL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });
    console.log(response.status);
    if (response.status == 500) return response.json();
    if (response.status == 200) return response.json();
  },
  createCourse: async (
    courseName,
    dayAndStartTime,
    dayAndEndTime,
    startDate,
    endDate,
    token,
    totalAmountOfStudent,
    description,
    courseFee,
    category
  ) => {
    const URL = `http://${process.env.SERVERIP}:8000/courses?token=${token}`;
    const amountOfStudent = totalAmountOfStudent;
    const response = await fetch(URL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        courseName,
        dayAndStartTime,
        dayAndEndTime,
        startDate,
        endDate,
        amountOfStudent,
        totalAmountOfStudent,
        description,
        courseFee,
        category
      })
    });
    console.log(response.status);
    if (response.status == 400) return { error: true };
    if (response.status == 201) return response.json();
  },
  editCourse: async (
    _id,
    courseName,
    dayAndStartTime,
    dayAndEndTime,
    startDate,
    endDate,
    token,
    totalAmountOfStudent,
    description,
    courseFee,
    category
  ) => {
    const URL = `http://${process.env.SERVERIP}:8000/courses?token=${token}`;
    const amountOfStudent = totalAmountOfStudent;
    const response = await fetch(URL, {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        _id,
        courseName,
        dayAndStartTime,
        dayAndEndTime,
        startDate,
        endDate,
        amountOfStudent,
        totalAmountOfStudent,
        description,
        courseFee,
        category
      })
    });
    console.log(response.status);
    if (response.status == 400) return { error: true };
    if (response.status == 201) return response.json();
  },
  //want del course
  uploadImage: async (data) => {
    const URL = `http://${
      process.env.SERVERIP
    }:8000/file/images/user/upload?token=${localStorage.getItem("token")}`;
    const response = await fetch(URL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      body: data
    });
    console.log(response);
    if (response.status == 500) return { error: true };
    if (response.status == 201) return response.json();
  },
  createComment: async (courseId, topic, text, star) => {
    const URL = `http://${
      process.env.SERVERIP
    }:8000/comment?token=${localStorage.getItem("token")}`;
    console.log(URL);
    const response = await fetch(URL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        courseId,
        topic,
        text,
        star
      })
    });

    if (response.status == 400) return response.json();
    if (response.status == 201) return { err: false };
  },
  editComment: async (courseId, topic, text, star) => {
    const URL = `http://${
      process.env.SERVERIP
    }:8000/comment?token=${localStorage.getItem("token")}`;
    const response = await fetch(URL, {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        courseId,
        topic,
        text,
        star
      })
    });
    if (response.status == 400) return response.json();
    if (response.status == 201) return { err: false };
  },
  getComment: async (courseId) => {
    const URL = `http://${
      process.env.SERVERIP
    }:8000/comment?courseId=${courseId}&token=${localStorage.getItem("token")}`;
    const response = await fetch(URL, {
      method: "GET",
      mode: "cors"
    });
    if (response.status == 404) return { error: true };
    if (response.status == 200) return response.json();
  },
  deleteComment: async (courseId) => {
    const URL = `http://${
      process.env.SERVERIP
    }:8000/comment?courseId=${courseId}&token=${localStorage.getItem("token")}`;
    const response = await fetch(URL, {
      method: "delete",
      mode: "cors"
    });
    if (response.status == 400) return { error: true };
    if (response.status == 201) return { error: false };
  },
  getMyComment: async (courseId) => {
    const URL = `http://${
      process.env.SERVERIP
    }:8000/comment/myComment?courseId=${courseId}&token=${localStorage.getItem(
      "token"
    )}`;
    const response = await fetch(URL, {
      method: "GET",
      mode: "cors"
    });
    if (response.status == 404) return { error: true };
    if (response.status == 200) return response.json();
  }
};
export default Util;
