import React, { useEffect, useState} from "react";
import axios from "axios";

const ListBooks = (props) => {

  const [books, setBooks] = useState(null)

  useEffect (()=> {
  axios.get ("http://localhost:3004/books")
  .then((res) => {
  console.log(res);
  }) 
  .catch((err)=> { console.log(err)});
  // eslint-disable-next-line no-undef
  setBooks(res.data);
  },[]);
  if(books === null) {
     return(
     <div>
      <h1>Loading...</h1>
     </div>
    )
         }
    
  
  return (
    <div className="container my-5">
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Kitap Adi</th>
              <th scope="col">Yazar Adi</th>
              <th scope="col">Kategori</th>
              <th className="text-end" scope="col">
                ISBN{" "}
              </th>
            </tr>
          </thead>
          <tbody>{
            books.map
            }
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
   
    >
  </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListBooks;
