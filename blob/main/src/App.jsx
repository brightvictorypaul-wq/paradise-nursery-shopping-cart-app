import React, { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

/**
 * Main Application Component
 * Manages the navigation state between the Landing Page and the Product Listing.
 */
function App() {
  
  // State to track if the user has clicked "Get Started"
  // false: Shows Landing Page | true: Shows Product List
  const [showProductList, setShowProductList] = useState(false);

  /**
   * Event handler for the "Get Started" button.
   * Triggers the transition to the product listing view.
   */
  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {/* Landing Page Section: 
        Uses a conditional class 'fade-out' to handle the transition animation 
        when showProductList becomes true.
      */}
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
          <div className="landing_content">
            <h1>Welcome To Paradise Nursery</h1>
            <div className="divider"></div>
            <p>Where Green Meets Serenity</p>
            
            {/* Requirement: 'Get Started' button linked to handleGetStartedClick */}
            <button className="get-started-button" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>

          {/* Modular Component: About Us section */}
          <div className="aboutus_container">
            <AboutUs />
          </div>
        </div>
      </div>

      {/* Product List Section: 
        Visible only when showProductList is true. 
        Using conditional rendering {showProductList && ...} is a best practice for efficiency.
      */}
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        {showProductList && <ProductList />}
      </div>
    </div>
  );
}

export default App;
