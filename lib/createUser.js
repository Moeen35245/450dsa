export const createUser = async (email, password) => {
  const response = await fetch("/api/auth/signUp", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response);
  const data = await response.json();
  console.log(data);
  if (!response.ok) {
    throw new Error(data.message || "something went wrong");
  }
  return data;
};
