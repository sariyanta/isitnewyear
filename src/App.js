import './App.scss';

let newYear = '1 0'
let todaysDate = new Date();

let thisDate = todaysDate.getDate().toLocaleString() + ' ' + todaysDate.getMonth().toLocaleString()


function App() {
  let isNewYear = newYear === thisDate;
  console.log(isNewYear)
  if (isNewYear){
    return (
      <div className='vh-100 d-flex justify-content-center align-items-center'>
        <h1 className='fs-1 font-bold'>YES</h1>
      </div>
    );
  } else {
    return (
      <div className='vh-100 d-flex justify-content-center align-items-center'>
        <h1 className='fs-1 fw-bold'>NO</h1>
      </div>
    );
  }
}

export default App;
