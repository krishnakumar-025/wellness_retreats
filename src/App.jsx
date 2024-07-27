import "./App.css";
import Retreats from "./component/Retreats";
import FilterContent from "./component/FilterContent";
import HeaderView from "./component/HeaderView";
import Navigation from "./component/Navigation";
import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl = "https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats";

function App() {
  const [filterValue, setFilterValue] = useState({
    location: "",
    // date: "",
    search: "",
    filter: "",
    page: 1,
    limit: 3,
  });
  const [retreats, setRetreats] = useState([]);

  const getRetreats = async () => {
    try {
      const { filter, limit, location, page, search } = filterValue;
      let url = new URL(baseUrl);
      location && url.searchParams.set("location", location);
      search && url.searchParams.set("search", search);
      filter && url.searchParams.set("filter", filter);
      url.searchParams.set("page", page);
      url.searchParams.set("limit", limit);
      const response = await axios.get(url.href);
      setRetreats(response.data);
    } catch (error) {
      console.log("Error While fetchng : ", error);
    }
  };

  useEffect(() => {
    getRetreats();
  }, [filterValue]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Wellness Retreats</p>
      </header>
      <section className="MainContent">
        <HeaderView />
        <FilterContent
          setFilterValue={setFilterValue}
          filterValue={filterValue}
        />
        <Retreats retreats={retreats} />
        <Navigation setFilterValue={setFilterValue} />
      </section>
    </div>
  );
}

export default App;
