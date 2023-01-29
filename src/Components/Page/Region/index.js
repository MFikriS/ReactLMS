import axios from "axios";
import { useState, useEffect } from "react";


const Region = () => {
   
  
    const [ data, setData ] = useState([{}]);
    const [ filteredData, setFilteredData ] = useState([{}]);
    const [ search, setSearch ] = useState("");
    const [ previous, setPrevious ] = useState("");
    const [ next, setNext ] = useState("");
    const [ url, setUrl ] = useState("http://localhost:8088/api/user-management/all");
  
    useEffect(() => {
      if(search !== "") {
        setFilteredData(data.filter(x => x.name === search));
      }
      else {
        setFilteredData(data);
        console.log(data);
      }
    }, [search]);
  
    useEffect(() => {
      axios.get(url)
        .then(function(response) {
          // setPrevious(response.data.previous);
          // console.log(previous);
          // setNext(response.data.next);
          // console.log(next);
          setData(response.data.text());
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [url]);

    return (
    <div className="App">
        <header className="App-header">
            <input onChange={(e) => setSearch(e.target.value)} />
            <table>
            <thead>
                <tr>
                  <th>ID</th> 
                <th>NAME</th>
                <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {filteredData.map((x,i) => {
                return (
                    <tr key={x.id}>
                      <td>{x.id}</td>
                    <td>{x.name}</td>
                    <td>{x.description}</td>
                    </tr>
                )
                })}
            </tbody>
            </table>
            <button onClick={() => setUrl(previous)}>Previous</button>
            <button onClick={() => setUrl(next)}>Next</button>
        </header>
    </div>
    )
}

export default Region;