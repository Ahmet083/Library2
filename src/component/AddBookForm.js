import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";

const AddBookForm = () => {
  const [categories, setCategories] = useState(null);
  const [bookname, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [category, setCategory] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3004/categories")
      .then((res) => {
        console.log("Categories");
        setCategories(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (bookname === "" || author === "" || category === "") {
      alert("Yazar, Kitap veya Kategori Bos Birakilamaz");
    }
    const newBook = {
        id: new Date().getTime(),       
        name: bookname,
        author: author,
        isbn: isbn,
        categoryId: category
    }  
    console.log("newBook", newBook);
   axios.post("http://localhost:3004/books")
   .then((res)=> {
    console.log(res);
   })
   .catch((err) => console.log(err))
  };

  if (categories == null) {
    return <Loading />;
  }
  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit}>
        <div className="row my-4">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Kitap Adi"
              value={bookname}
              onChange={(event) => setBookName(event.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Yazar Adi"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
          </div>
        </div>
        <div className="row my-4">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="ISBN"
              value={isbn}
              onChange={(event) => setIsbn(event.target.value)}
            />
          </div>
          <div className="col">
            <select
              className="form-control"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option selected>Kategori</option>
              {categories.map((cat) => {
                return <option value={cat.id}>{cat.name}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary w-50">
            Ekle
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;
