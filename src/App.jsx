import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
import Cards from "./componenets/cards";
import { Container } from "react-bootstrap";
import History from "./componenets/history";
import HistoryList from "./componenets/history";
function App() {
  const [inputs, setInputs] = useState({
    url: "",
    format: "",
    no_ads: "",
    no_cookie_banners: "",
    width: "",
    height: "",
  });

  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [copyright, setCopyright] = useState("");
  const [title, setTitle] = useState("");
  const [banned, setbanned] = useState([]);
  const [response, Setresponse] = useState([]);

  const list = (res) => {
    let newvalue = {
      title: res.breeds[0].alt_names,
      img: res.url,
    };
    Setresponse((prev) => [...prev, newvalue]);
  };
  const [count, setCount] = useState(0);
  const makeQuery = () => {
    let wait_until = "network_idle";
    let response_type = "json";
    let fail_on_status = "400%2C404%2C500-511";
    let url_starter = "https://";
    let fullURL = url_starter + inputs.url;
    let access = "c68f5f0ffa0f4b00a52c6b30fe8f9b3a";

    let query = `https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=1&api_key=${ACCESS_KEY}`;
    callAPI(query).catch(console.error);
  };

  const bannedSelection = (e) => {
    const value = e.target.value;
    console.log(e.target.value);
    setbanned((prev) => [...prev, value]);
    console.log("bannes" + banned);
  };

  const callAPI = async (query) => {
    const response = await fetch(query);
    const json = await response.json();
 
    if (json == null)
      alert("Oops! Something went wrong with that query, let's try again!");
    else {

      if(banned.includes(json[0].breeds[0].origin) ||banned.includes(json[0].breeds[0].alt_names)||banned.includes(json[0].breeds[0].life_span) ||json[0].breeds[0].alt_names == '' ){
        console.log("tru rfj  jfk ")
        callAPI(query).catch(console.error);
      }
      else{
        setImage(json[0].url);
        setCopyright(json[0].breeds[0].alt_names);
        setTitle(json[0].breeds[0].origin);
        setDate(json[0].breeds[0].life_span);
        // setCurrentImage(json.url);
        // setPrevImages((images) => [...images, json.url]);
        // reset();
        list(json[0]);
      }
   
    }
  };

  return (
    <div className="app">
      <div className="feature">
        <h1>Cats </h1>
        <h2>Click on the discover button  </h2>

        <div className="api">
          <Cards
            bannedSelection={bannedSelection}
            img={image}
            date={date}
            copyright={copyright}
            title={title}
          />
          <button className="submit" onClick={makeQuery}> discover</button>
        </div>
        <div></div>
      </div>
      <div className="bannlist">
 
     <h3> Banned</h3>  
      {banned.map((item) => {
    
          return <button > {item}</button>
          
        })}


      </div>
      <div className="history">
 
        <h3> History </h3> 
        {response.map((item) => {
  
          return <HistoryList title = {item.title} image = {item.img}/>
          
        })}
      
      </div>
    </div>
  );
}

export default App;
