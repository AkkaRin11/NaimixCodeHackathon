import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Welcome from './Welcome';

export default function App() {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsVisible(false); 
    } else {
      navigate('/'); 
    }
  }, [navigate]); 

  return (
    <div className="App">
      {isVisible ? <Welcome onAuthSuccess={() => setIsVisible(false)} /> : <h1>4g чипсы</h1>}
    </div>
  );
}
