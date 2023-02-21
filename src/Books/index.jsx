import React from "react";
import { GetBooks, GetChapters, GetVerses } from "../services/useFetch";
import "./style.css";

export default function Books() {
  const { books } = GetBooks();
  const { chapter } = GetChapters();
  const { verse, loading } = GetVerses();

  return (
    <section className="booksWrap">
          <h3>Search Scriptures</h3>
        <form className="searchWrap">
          <div className="searchScripture_wrap">
            <div className="searchScripture">
              <label htmlFor="book">Book</label>
              <input type="search" name="book" className="searchField" />
            </div>
            <div className="searchScripture">
              <label htmlFor="chapter">Chapter</label>
              <input type="search" name="chapter" className="searchField" />
            </div>
          </div>
          <div className="searchScripture_wrap">
            <div className="searchScripture">
              <label htmlFor="verse">From Verse</label>
              <input type="search" name="verse" className="searchField" />
            </div>
            <div className="searchScripture">
              <label htmlFor="verse">To Verse</label>
              <input type="search" name="verse" className="searchField" />
            </div>
          </div>
        </form>

        <div className="displayScriptures">
          {
            loading ? (
              <div className="loading">
                <h2>Loading...</h2>
              </div>
            ) : (
          <div className="scripture">
              <h4 className="scriptureHead">
                {verse.Book} : {verse.Chapter} {verse.VerseFrom} - {verse.VerseTo}
              </h4>
                <p className="scriptureText">
                  "{verse.Output}"
                </p>
          </div>
            )
          }
        </div>

    </section>
  );
}