/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const ListBooks = (props) => {
  const [books, setBooks] = useState(null);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3004/books")
      .then((resBook) => {
        console.log("resBook", resBook);
        setBooks(resBook.data);
        axios
        .get("http://localhost:3004/categories")
        .then((resCat) => {
          setTimeout(() => {
           setCategories(resCat.data);
          }, 1000)

          
          })
          .catch((err) => console.log("categories err", err));
      })
      .catch((err) => console.log("books err", err));
  }, []);
  if (books === null || categories === null) {
    return (
     <Loading />
    );
  }

  return (
    <div className="container my-5">
      <div className="my-4 mx-4 d-flex justify-content-end" >
        <Link to="/add-book" className="btn btn-primary">Kitap Ekle</Link>
      </div>
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
          <tbody>
            {books.map((book) => {
              const category = categories.find(
                (cat) => cat.id === book.categoryId
                );
              return (
                <tr>
                  <td>{book?.name}</td>
                  <td>{book?.author}</td>
                  <td>{category?.name}</td>
                  <td>{book.isbn}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListBooks;
