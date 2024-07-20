import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';


function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/register'); 
  };

  return (
   
    <>
      <div className="flex min-h-[100dvh] flex-col">
    
        <main className="flex-1">
          <section className="bg-primary text-primary-foreground py-12 md:py-20 lg:py-28">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div>
                  <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
                    Effortlessly Resolve Complaints Online
                  </h1>
                  <p className="mb-8 text-lg md:text-xl">
                  Effective complaint management is the cornerstone of customer satisfaction, turning issues into opportunities for growth and improvement.
                  </p>
                </div>
                <div>
                  <img src="/src/components/logo.png" alt="management Image" className="rounded-xl" />
                </div>
              </div>
            </div>
          </section>
          <div className="bg-blue-100 min-h-screen flex flex-col items-center justify-center">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold">Our Services</h2>
              <ul className="list-none mt-4 space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-blue-500">➤</span>
                  <span>User-friendly Complaint Submission Interface</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-500">➤</span>
                  <span>Seamless Integration with Existing Systems</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-500">➤</span>
                  <span>Powerful Analytics and Reporting</span>
                </li>
              </ul>
              <button
                onClick={handleClick}
                className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Get Started
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="text-green-600 text-4xl mb-2">⚙️</div>
                <h3 className="text-xl font-bold">Quick Registration Process</h3>
                <p className="text-gray-600">Comprehensive complaint management software solutions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="text-yellow-600 text-4xl mb-2">📨</div>
                <h3 className="text-xl font-bold">System Integration</h3>
                <p className="text-gray-600">Easy integration with your systems.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="text-blue-600 text-4xl mb-2">💡</div>
                <h3 className="text-xl font-bold">Analytics Insights</h3>
                <p className="text-gray-600">Detailed analytics for better insights.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="text-red-600 text-4xl mb-2">📞</div>
                <h3 className="text-xl font-bold">Customer Service</h3>
                <p className="text-gray-600">Detailed analytics for better insights.</p>
              </div>
            </div>
          </div>
          <div className="bg-indigo-100 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold font-serif">Key Benefits</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="text-teal-600 text-6xl mb-4">⚙️</div>
                <h3 className="text-2xl font-bold font-sans">Quick Registration</h3>
                <p className="text-gray-700">Save time with quick registration.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-teal-600 text-6xl mb-4">💡</div>
                <h3 className="text-2xl font-bold font-sans">Complaint Tracking</h3>
                <p className="text-gray-700">Monitor each step of complaint.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-teal-600 text-6xl mb-4">✔️</div>
                <h3 className="text-2xl font-bold font-sans">Advanced Analytics</h3>
                <p className="text-gray-700">Integrated analytics for insights.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-teal-600 text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold font-sans">Real-time Tracking</h3>
                <p className="text-gray-700">Track real-time progress seamlessly.</p>
              </div>
            </div>
            <div className="bg-blue-100 min-h-screen flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        <div className="image-container">
          <img src="/src/modules/common/image.jpg" alt="Analytics" className="image" />
        </div>
        <div className="text-container">
          <h1 className="text-3xl font-bold mb-4">Innovative Complaint Tracking and Insights Platform</h1>
          <p className="text-gray-700 mb-8">Real-time tracking and insightful analytics.</p>
          <div className="stats grid grid-cols-3 gap-4">
            <div className="stat bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <h2 className="text-4xl text-blue-600">50+</h2>
              <p className="text-gray-600">Clients Served</p>
            </div>
            <div className="stat bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <h2 className="text-4xl text-blue-600">95%</h2>
              <p className="text-gray-600">Satisfied Customers</p>
            </div>
            <div className="stat bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <h2 className="text-4xl text-blue-600">1800+</h2>
              <p className="text-gray-600">Issues Resolved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-black text-white py-4  left-0 w-full text-center">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Complaint Management</h2>
        <p className="mt-2">Efficient complaint management with tracking and resolution.</p>
        <div className="flex space-x-4 mt-4 justify-center">
          <a href="https://www.instagram.com" className="text-gray-600">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a href="https://www.facebook.com" className="text-gray-600">
            <i className="fab fa-facebook text-2xl"></i>
          </a>
          <a href="https://www.linkedin.com" className="text-gray-600">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
        </div>
        <footer className="mt-8">
          © all rights reserved. Created by MREN team
        </footer>

    </div>
    </div>
          </div>
        </main>
    </div>
    </>
  );
}

export default Home;
