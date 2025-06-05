import React from "react";

function ContactUs({ onLogout, user }) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Contact Us</h2>
      <p>Welcome, {user}!</p>
      <form className="mt-4">
        <input className="block border p-2 mb-2 w-full" placeholder="Your Name" />
        <input className="block border p-2 mb-2 w-full" placeholder="Your Email" />
        <textarea className="block border p-2 mb-2 w-full" placeholder="Your Message"></textarea>
        <button type="submit" className="bg-green-500 text-white px-4 py-2">Send</button>
      </form>
      <button onClick={onLogout} className="mt-4 bg-red-500 text-white px-4 py-2">
        Logout
      </button>
    </div>
  );
}

export default ContactUs;
