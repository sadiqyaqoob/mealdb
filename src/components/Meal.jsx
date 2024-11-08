import React, { useEffect, useState } from "react";

const Meal = () => {
  const [mealdata, setmealdata] = useState([]);
  const [area, setArea] = useState("indian");
  const [inputdata, setinputdata] = useState('');

  useEffect(() => {
    const fetchdatafromApi = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      );
      const data = await api.json();
      console.log(data.meals);
      setmealdata(data.meals);
    };
    fetchdatafromApi();
  }, [area]);

  const submithandler = async(e) =>{
    e.preventDefault()
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputdata}`
      );
      const data = await api.json();
      setmealdata(data.meals)
     console.log("search data=",data.meals);
  }

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "2rem",
            maxWidth: "1200px",
            margin: "  20px auto",
          }}
        >
          <div style={{ display: "flex", gap: "20px" }}>
            <button
              onClick={() => setArea("Indian")}
              type="button"
              className="btn btn-outline-primary"
            >
              Indian
            </button>
            <button
              onClick={() => setArea("Canadian")}
              type="button"
              className="btn btn-outline-secondary"
            >
              Canadian
            </button>
            <button
              onClick={() => setArea("American")}
              type="button"
              className="btn btn-outline-success"
            >
              American
            </button>
            <button
              onClick={() => setArea("Thai")}
              type="button"
              className="btn btn-outline-danger"
            >
              Thai
            </button>
            <button
              onClick={() => setArea("British")}
              type="button"
              className="btn btn-outline-warning"
            >
              British
            </button>
            <button
              onClick={() => setArea("Russia")}
              type="button"
              className="btn btn-outline-info"
            >
              Russian
            </button>
          </div>
        </div>

        <form
          onSubmit={submithandler}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <input onChange={(e) => setinputdata(e.target.value)} type="text" />
        </form>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "2rem",
              maxWidth: "1200px",
              margin: "auto",
              textAlign: "center",
            }}
          >
            {mealdata.map((data) => (
              <div key={data.idMeal}>
                <img
                  src={data.strMealThumb}
                  alt=""
                  style={{
                    width: "220px",
                    borderRadius: "10px",
                    border: "2px solid blue",
                  }}
                />

                <div>
                  <h5>{data.strMeal}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Meal;
