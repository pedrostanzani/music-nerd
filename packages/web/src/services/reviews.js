import axios from 'axios';

const baseUrl = 'http://localhost:3001/';

const getReviews = () => {
  const url = `${baseUrl}api/reviews/`
  const request = axios.get(url);
  return request.then(response => response.data);
}

export default getReviews;