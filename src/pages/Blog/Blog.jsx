import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';

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

  return (
    <div className="container mx-auto py-8 ">
        <Navbar></Navbar>
      <h1 className="text-3xl font-bold mb-4 my-10 text-orange-700">Real Estate Blog</h1>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {blogPosts.map((post) => (
          <SwiperSlide key={post.id}>
            <div className="bg-white rounded-lg shadow-md p-6 mb-20">
              <img src={post.image} alt={post.title} className="w-full h-40 object-cover mb-4 rounded-lg" />
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.content}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Footer></Footer>
    </div>
  );
};

export default Blog;
