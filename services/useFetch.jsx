import axios from "axios";

const useFetch = {
  method: 'GET',
  url: 'https://ajith-holy-bible.p.rapidapi.com/GetBooks',
  headers: {
    'X-RapidAPI-Key': '0e0b03802dmsh0ff85f33cd9c03cp167843jsne657c6b58de7',
    'X-RapidAPI-Host': 'ajith-holy-bible.p.rapidapi.com'
  }
};

axios.request(useFetch).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
