import { useState } from 'react';
import 'animate.css';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
  // Dummy data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: '5 Tips for Buying Your First Home',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero sed tellus tristique, ac tincidunt odio auctor. Nulla facilisi. Sed euismod purus quis nisi consequat fermentum.',
      image: 'https://i.ibb.co/kMbXBgy/roam-in-color-z3-QZ6gj-GRt4-unsplash.jpg',
    },
    {
      id: 2,
      title: 'Top Trends in Real Estate for 2024',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero sed tellus tristique, ac tincidunt odio auctor. Nulla facilisi. Sed euismod purus quis nisi consequat fermentum.',
      image: 'https://i.ibb.co/PZ8vy5L/douglas-sheppard-9r-Yf-G8s-WRVo-unsplash.jpg',
    },
    {
      id: 3,
      title: 'How to Stage Your Home for a Quick Sale',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero sed tellus tristique, ac tincidunt odio auctor. Nulla facilisi. Sed euismod purus quis nisi consequat fermentum.',
      image: 'https://i.ibb.co/yVCb4mf/brian-babb-Xbw-Hrt87m-Q0-unsplash.jpg',
    },
  ];

  // State to track hovered post
  const [hoveredPost, setHoveredPost] = useState(null);

  return (
    <div className="container mx-auto py-8 ">
      <Helmet>
        <title>Maple Ridge || Blog</title>
      </Helmet>
      <Navbar />
      <h1 className="text-3xl font-bold mb-4 my-10 text-orange-700">Real Estate Blog</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className={`bg-white rounded-lg shadow-md p-6 mb-20 animate__animated ${hoveredPost === post.id ? 'animate__zoomIn' : ''}`}
            style={{ transform: `scale(${hoveredPost === post.id ? '1.05' : '1'})`, transition: 'transform 0.3s ease-in-out' }}
            onMouseEnter={() => setHoveredPost(post.id)}
            onMouseLeave={() => setHoveredPost(null)}
          >
            <img src={post.image} alt={post.title} className="w-full h-40 object-cover mb-4 rounded-lg" />
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.content}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
