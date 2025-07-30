import React from "react";

export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      {subtitle && <p className="text-gray-500 mt-2">{subtitle}</p>}
      <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
    </div>
  );
}
