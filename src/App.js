// import star from './star.png';
// import './App.css';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={star} className="App-logo" alt="star" />
//         <p>오늘 뭐 해야하지?</p>
//       </header>
//       <Footer />
//     </div>
//   );
// }

// export default App;
import logo from './logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';
import './App.css';
import styled from 'styled-components';

const ChangeValuebutton = styled.button`
  display: : inline-flex;

  justify-content: center;
  align-items: center;
  background-color: #61dafb;
  font-size: 36px;
  border: 0;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  margin: 1rem;
`;

const ButtonWrapper = styled.div`
  margin: 1rem;
`;

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>{count}</span>
        <ButtonWrapper>
          <ChangeValuebutton
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            +
          </ChangeValuebutton>
        </ButtonWrapper>
        <ChangeValuebutton
          aria-label="decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </ChangeValuebutton>
      </header>
    </div>
  );
}

export default App;
