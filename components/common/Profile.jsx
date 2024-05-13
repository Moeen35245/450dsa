import { useState, useEffect } from "react";

function Profile() {
  const [data, setData] = useState(null);
  const [solvedQuestions,setSolvedQuestions]=useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  // useEffect(() => {
  //   fetch(`/api/getUserData`)
  //     .then((response) => response.json())
  //     .then((actualData) => {
  //       setData(actualData);
  //       setError(null);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //       setError(err.message);
  //       setData(null);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    if (localStorage.getItem("questionData")) {
     let solvedQuestions=JSON.parse(localStorage.getItem("questionData"));
      setData(solvedQuestions);
      setSolvedQuestions(solvedQuestions.length);
    }
  }, []);

  // if (data) {
  //   // console.log(data.queList);
  //   let { queList } = data;
  //   Object.values(queList).forEach((key) => {
  //     solvedQuestions += key.length;
  //   });
  // }

  if (loading)
    return (
      <div className="flex justify-center items-center mt-28">
        <div className="loading-big"></div>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center max-[500px] mx-auto items-center mt-28">
        <h1 className="text-3xl sm:text-5xl text-slate-700 font-bold">
          {error && "You are not logged in"}
        </h1>
      </div>
    );

  return (
    <div className="max-w-[900px] mx-auto">
      <h1 className="text-3xl sm:text-5xl text-slate-700 text-center mb-4">
        Score
      </h1>
      <div className="score max-w-[300px] mx-auto">
        <div className="text-center bg-lightGreen text-darkGreen rounded-xl p-5 mb-4">
          <p className="text-3xl">Solved</p>
          <h2 className="text-7xl">{solvedQuestions}</h2>
        </div>
        <div className="text-center bg-lightRed text-darkRed rounded-xl p-5">
          <p className="text-3xl">Remaning</p>
          <h2 className="text-7xl font-bold">{448 - solvedQuestions}</h2>
        </div>
      </div>
    </div>
  );
}

export default Profile;
