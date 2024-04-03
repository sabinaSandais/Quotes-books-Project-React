import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
 // async function fetchData(){
  //   const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=animals&key=AIzaSyD37gIxUgtB-cmboY4p1FEZ6Yd9mvFx7BA');
  //   const data = await response.json();
  //   console.log(data.items);
  // }