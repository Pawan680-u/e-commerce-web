import React from 'react'
import './App.css'

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>E-Commerce Store</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <main className="products">
        <div className="card">
          <img src="https://via.placeholder.com/200" alt="Product 1" />
          <h3>Product 1</h3>
          <p>$20</p>
          <button>Add to Cart</button>
        </div>

        <div className="card">
          <img src="https://via.placeholder.com/200" alt="Product 2" />
          <h3>Product 2</h3>
          <p>$35</p>
          <button>Add to Cart</button>
        </div>

        <div className="card">
          <img src="https://via.placeholder.com/200" alt="Product 3" />
          <h3>Product 3</h3>
          <p>$50</p>
          <button>Add to Cart</button>
        </div>
      </main>

      <footer className="footer">
        <p>© 2025 E-Commerce Store. All Rights Reserved.</p>
      </footer>
    </div>
  )
}
