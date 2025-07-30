import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function ProjectSlider({ project }) {
  const slides = [];
  if (project.image) slides.push(project.image);
  if (project.video) slides.push(project.video);

  return (
    <Swiper navigation modules={[Navigation]} className="rounded-lg mb-4">
      {slides.length > 0 ? (
        slides.map((src, index) =>
          src.endsWith(".mp4") ? (
            <SwiperSlide key={index}>
              <video controls className="w-full rounded-lg max-h-96">
                <source src={src} type="video/mp4" />
              </video>
            </SwiperSlide>
          ) : (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={project.title}
                className="w-full rounded-lg max-h-96 object-cover"
                onError={(e) =>
                  (e.target.src =
                    "https://placehold.co/600x400?text=Image+Not+Available")
                }
              />
            </SwiperSlide>
          )
        )
      ) : (
        <SwiperSlide>
          <div className="bg-gray-200 text-center p-10 rounded-lg">
            <span className="text-gray-600">No Media Available</span>
          </div>
        </SwiperSlide>
      )}
    </Swiper>
  );
}
