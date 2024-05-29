/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Session = () => {
  const [coaches, setCoaches] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/coach/allCoach")
      .then((res) => res.json())
      .then((data) => {
        setCoaches(data.coachs);
      });
  }, []);
  return (
    <div className="pt-24">
      <h1 className="anton text-5xl text-center">
        Book a Session with your favourite coach
      </h1>
      <div className="w-full grid sm:grid-cols-4 gap-10 sm:px-10 py-24">
        {coaches?.map((data, i) => (
          <div
            key={data._id}
            className="w-full h-[600px] flex flex-col items-center justify-center text-white"
            style={{
              backgroundImage: `url(${data.photo})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="w-full h-full flex flex-col items-center justify-center sm:opacity-0 opacity-100 gap-2 card-prop">
              <h1 className="anton text-3xl">Name : <span>{data.firstName} {data.lastName}</span></h1>
              <div className="flex items-center gap-5 anton text-xl">
                <h1>Age : {data.age}</h1>
                <h1>Height : {data.hight} cm</h1>
              </div>
              <h1 className="anton text-xl">Gender : {data.gender}</h1>
              <h1 className="anton text-xl">Phone : {data.phone}</h1>
              <div className="w-full flex items-center justify-center py-3">
                <Link
                  to={`/session/${data._id}`}
                  className="px-5 py-2 bg-white text-black rounded-md font-medium"
                >
                  Book a Session
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Session;
