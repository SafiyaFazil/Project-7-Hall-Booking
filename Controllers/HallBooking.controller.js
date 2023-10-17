const room = {
  NumberOfSeatsAvailable: 100,
  AminitiesInRoom: "A/C or Non A/C, Attached Bathroom, Fan, Tv",
  PriceForOneHour: 1000,
};

const roomStatusData = [
  {
    Room_Name: "ABC Hall",
    Room_ID: 101,
    Booked_Stauts: "Booked",
    Customer_Name: "Safiya",
    Booked_Date: "01/10/2023",
    Entry_Time: "10AM",
    Exit_Time: "12PM",
  },
  {
    Room_Name: "ABC Hall",
    Room_ID: 101,
    Booked_Stauts: "Booked",
    Customer_Name: "Jesima",
    Booked_Date: "01/10/2023",
    Entry_Time: "2PM",
    Exit_Time: "4PM",
  },
  {
    Room_Name: "ABC Hall",
    Room_ID: 102,
    Booked_Stauts: "Booked",
    Customer_Name: "Fazil",
    Booked_Date: "02/10/2023",
    Entry_Time: "10AM",
    Exit_Time: "12PM",
  },
  {
    Room_Name: "ABC Hall",
    Room_ID: 103,
    Booked_Stauts: "Booked",
    Customer_Name: "Fahiz",
    Booked_Date: "02/10/2023",
    Entry_Time: "2PM",
    Exit_Time: "4PM",
  },
  {
    Room_Name: "ABC Hall",
    Room_ID: 104,
    Booked_Stauts: "Booked",
    Customer_Name: "Siraj",
    Booked_Date: "03/10/2023",
    Entry_Time: "10AM",
    Exit_Time: "12PM",
  },
  {
    Room_Name: "ABC Hall",
    Room_ID: 105,
    Booked_Stauts: "Non-Booked",
  },
];

// 1. Creating a Room
export const getRoomDetail = (req, res) => {
  const availableRoom = roomStatusData.map((data) => ({
    Room_Name: data.Room_Name,
    Room_ID: data.Room_ID,
    Booked_Stauts: data.Booked_Stauts,
  }));
  res.status(200).json({ roomData: room, availableRoom: availableRoom });
};

// 2. Booking a Rooom
export const hallBooking = (req, res) => {
  const newDetail = req.body;
  const newCusDetail = roomStatusData.find(
    (data) =>
      data.Booked_Date == newDetail.Booked_Date &&
      data.Entry_Time == newDetail.Entry_Time &&
      data.Exit_Time == newDetail.Exit_Time
  );
  if (!newCusDetail) {
    roomStatusData.push(newDetail);
    return res.status(200).json({ Message: " Room Booked", data: newDetail });
  }

  res.status(200).json({
    Message: "Sorry... There is no available rooms in particular date and time",
  });
};

// 3. List all rooms with booked data
export const getRoomStatusDetail = (req, res) => {
  const bookedStatus = roomStatusData.filter(
    (data) => data.Booked_Stauts === "Booked"
  );
  const roomDetail = bookedStatus.map((roomData) => ({
    Customer_Name: roomData.Customer_Name,
    Room_Name: roomData.Room_Name,
    Booked_Stauts: roomData.Booked_Stauts,
    Date: roomData.Booked_Date,
    Entry_Time: roomData.Entry_Time,
    Exit_Time: roomData.Exit_Time,
  }));
  return res.status(200).json({ RoomData: roomDetail });
  return res.status(500).send("Error");
};

// 4. List all customer with booked data
export const getCustomerDetail = (req, res) => {
  const bookedStatus = roomStatusData.filter(
    (data) => data.Booked_Stauts === "Booked"
  );
  const customerDetail = bookedStatus.map((cusData) => ({
    Customer_Name: cusData.Customer_Name,
    Room_Name: cusData.Room_Name,
    Date: cusData.Booked_Date,
    Entry_Time: cusData.Entry_Time,
    Exit_Time: cusData.Exit_Time,
  }));
  return res.status(200).json({ customerData: customerDetail });
  return res.status(500).send("Error");
};

// 5. List how many times a customer has booked the room
export const getHowManyTimesBooked = (req, res) => {
  const bookedStatus = roomStatusData.filter(
    (data) => data.Booked_Stauts === "Booked"
  );
  res.status(200).json({ bookedData: bookedStatus });
};
