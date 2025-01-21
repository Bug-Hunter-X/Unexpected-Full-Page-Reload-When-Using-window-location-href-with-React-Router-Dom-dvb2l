```javascript
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... other routes ... */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => { navigate('/about'); }}>Go to About</button>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}

export default App;
```