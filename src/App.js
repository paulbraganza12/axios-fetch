import "./App.css";
import useFetch from "./useFetch";

function App() {
  const { data } = useFetch("https://images-api.nasa.gov/search?q=moon");

  const imageArray = data?.items
    ?.map((item) => item.links?.map((item) => item.href))
    .flat();
  return (
    <div className="App">
      {imageArray.map((item, index) => {
        return <img src={item} alt="image-moon" key={index} />;
      })}
    </div>
  );
}

export default App;
