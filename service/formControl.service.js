const BaseUri = "http://localhost:8585";
export const GetForm = async () => {
  return await fetch(`${BaseUri}/`)
    .then((res) => res.json())
    .then((jsonRes) => {
      return jsonRes;
    })
    .catch((err) => {
      return err;
    });
};

export const PostForm = async (data) => {
  return await fetch(`${BaseUri}/`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((jsonRes) => {
      return jsonRes;
    })
    .catch((err) => {
      return err;
    });
};
