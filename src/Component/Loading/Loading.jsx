import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./loading.css";
export const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const history = useNavigate();

  useEffect(() => {
    // Set a minimum time for the loading page to display (2 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // Redirect to the home page when the loading state changes to false
  useEffect(() => {
    if (!isLoading) {
      history('/home');
    }
  }, [isLoading, history]);

  return (
  
    <div className="landing-page">
    <img src="/Image/AZ_Landing_Logo.png" alt="not found"></img>

    </div>
  );
};


