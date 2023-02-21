import axios from "axios";
import { useEffect, useState } from "react";

export const GetBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBooks = {
      method: 'GET',
      url: 'https://ajith-holy-bible.p.rapidapi.com/GetBooks',
      headers: {
      'X-RapidAPI-Key': '0e0b03802dmsh0ff85f33cd9c03cp167843jsne657c6b58de7',
      'X-RapidAPI-Host': 'ajith-holy-bible.p.rapidapi.com'
      }
    };
    axios.request(getBooks)
      .then(function (response) {
        setBooks(response.data);
        setLoading(false);
        console.log(response.data);
      }).catch(function (error) {
        setError(error);
        setLoading(false);
        console.error(error);
      });
  }, []);
  return { books, error, loading };
};



export const GetChapters = () => {
  const [chapter, setChapter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
  const chapters = {
    method: 'GET',
    url: 'https://ajith-holy-bible.p.rapidapi.com/GetChapter',
    params: {Book: 'Luke', chapter: '8'},
    headers: {
      'X-RapidAPI-Key': '0e0b03802dmsh0ff85f33cd9c03cp167843jsne657c6b58de7',
      'X-RapidAPI-Host': 'ajith-holy-bible.p.rapidapi.com'
    }
  }

    axios.request(chapters)
      .then(function (response) {
        setChapter(response.data);
        setLoading(false);
        console.log(response.data);
      }).catch(function (error) {
        setError(error);
        setLoading(false);
        console.error(error);
    });
  }, []);
  return { chapter, error, loading}
};



export const GetVerses = () => {
  const [verse, setVerse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const verses = {
      method: 'GET',
      url: 'https://ajith-holy-bible.p.rapidapi.com/GetVerses',
      params: {Book: 'Genesis', chapter: '1', VerseFrom: '5', VerseTo: '8'},
      headers: {
        'X-RapidAPI-Key': '0e0b03802dmsh0ff85f33cd9c03cp167843jsne657c6b58de7',
        'X-RapidAPI-Host': 'ajith-holy-bible.p.rapidapi.com'
      }
    }
    axios.request(verses)
    .then(function (response) {
      setVerse(response.data);
      setLoading(false);
      console.log(response.data);
    }).catch(function (error) {
      setError(error);
      setLoading(false);
      console.error(error);
    });
  }, []);
  return { verse, error, loading };
};
