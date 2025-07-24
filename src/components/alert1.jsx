import React, { useState } from "react";

const alert1= () => {
  const [adminTime, setAdminTime] = useState("");
  const [message, setMessage] = useState("");

  const handleBooking = () => {
    if (adminTime.trim()) {
      setMessage(`Appointment booked for ${adminTime}`);
    } else {
      setMessage("Please enter a valid time slot.");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Admin Slot Booking</h2>

      <input
        type="text"
        placeholder="Enter slot time"
        value={adminTime}
        onChange={(e) => setAdminTime(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />

      <button
        onClick={handleBooking}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Book Slot
      </button>

      {message && <p className="mt-4 text-blue-700">{message}</p>}
    </div>
  );
};

export default AdminSlotBooking;
