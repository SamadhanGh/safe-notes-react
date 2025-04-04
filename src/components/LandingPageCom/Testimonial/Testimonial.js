import React from "react";
import TestimonialItem from "./TestimonialItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    title: "Safe Notes",
    text: "This app helped me stay organized with my notes and ideas. Clean UI and super secure!",
    name: "Sam",
    status: "Developer",
    imgurl: "https://i.pravatar.cc/150?img=3",
  },
  {
    title: "Love the UI!",
    text: "The interface is smooth and intuitive. Really love the color palette and animations.",
    name: "Priya",
    status: "Designer",
    imgurl: "https://i.pravatar.cc/150?img=5",
  },
  {
    title: "Highly Recommend",
    text: "Using this every day now. It’s fast, simple, and really does the job well!",
    name: "Ayush",
    status: "Student",
    imgurl: "https://i.pravatar.cc/150?img=7",
  },
];

const Testimonial = () => {
  return (
    <section className="py-12 px-5 md:px-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Users Say</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <TestimonialItem {...t} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
