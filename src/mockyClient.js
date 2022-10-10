export const mockyClient = (url) => {
  return {
    data: [
      {
        pk: 1,
        email: "wojtek-zeton@mailinator.com",
        username: "wojtek",
        first_name: "Wojtek",
        last_name: "",
        total_points: 250,
      },
      {
        pk: 2,
        email: "kuba-zeton@mailinator.com",
        username: "kuba",
        first_name: "Kuba",
        last_name: "",
        total_points: 120,
      },
    ],
  };
};

export const data = [
  { id: 1, name: "Paczka czipsów", value: 5, student: 1 },
  { id: 2, name: "Wyjście do kina", value: 20, student: 1 },
  { id: 3, name: "Godzina gry komputerowej", value: 10, student: 2 },
 
];

export const tasksData = [
  { id: 1, name: "Sprzątnięcie biurka", value: 5, student: 2 },
  { id: 2, name: "Odkurzenie mieszkania", value: 20, student: 1 },
  { id: 3, name: "Wyrzucenie śmieci", value: 10, student: 2 },
];
