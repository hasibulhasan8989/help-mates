import React from 'react';

const Extra = () => {
    return (
        <div>
            <section className="bg-white py-16 px-4 text-center">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-pink-600 mb-4">Why Volunteer With Us?</h2>
    <p className="text-gray-600 mb-10">
      Volunteering is more than just helping others — it's about building skills, growing connections, and making real change.
    </p>
    <div className="grid gap-6 md:grid-cols-3 text-left">
      <div className="bg-pink-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Make an Impact</h3>
        <p className="text-gray-600">Every hour you contribute changes lives and strengthens communities.</p>
      </div>
      <div className="bg-pink-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Grow Your Skills</h3>
        <p className="text-gray-600">Gain leadership, teamwork, and real-world experience.</p>
      </div>
      <div className="bg-pink-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Connect & Network</h3>
        <p className="text-gray-600">Meet like-minded individuals and expand your professional and social circle.</p>
      </div>
    </div>
  </div>
</section>
<section className="bg-gray-100 py-16 px-4">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-pink-600 mb-8">Upcoming Volunteer Events</h2>
    <div className="grid gap-6 md:grid-cols-3">
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Beach Cleanup Drive</h3>
        <p className="text-gray-500 mb-2">📅 July 25, 2025 | 📍 Cox's Bazar</p>
        <p className="text-gray-600">Join hands to remove plastic waste and save marine life.</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Food Distribution</h3>
        <p className="text-gray-500 mb-2">📅 August 10, 2025 | 📍 Dhaka City</p>
        <p className="text-gray-600">Help serve meals to the underprivileged families.</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Tree Plantation</h3>
        <p className="text-gray-500 mb-2">📅 August 22, 2025 | 📍 Savar, Dhaka</p>
        <p className="text-gray-600">Plant trees and contribute to a greener future.</p>
      </div>
    </div>
  </div>
</section>


        </div>
    );
};

export default Extra;