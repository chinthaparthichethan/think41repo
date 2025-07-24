import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Date1 = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState("");

  const slots = [
    "09:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 01:00 PM",
    "02:00 PM - 03:00 PM",
    "03:00 PM - 04:00 PM",
    "04:00 PM - 05:00 PM",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedDate && selectedSlot) {
      alert(`Slot booked on ${selectedDate.toDateString()} at ${selectedSlot}`);
    } else {
      alert("Please select both date and time slot.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Book a Slot</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Select Date:</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            className="w-full p-2 border rounded"
            placeholderText="Click to select a date"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Select Time Slot:</label>
          <select
            value={selectedSlot}
            onChange={(e) => setSelectedSlot(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">-- Choose a slot --</option>
            {slots.map((slot, index) => (
              <option key={index} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Book Slot
        </button>
      </form>
    </div>
  );
};

export default SlotBooking;
