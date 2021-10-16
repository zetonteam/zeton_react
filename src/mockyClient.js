export const mockyClient = (url) => {
  return {
    data: [
      {
        pk: 1,
        email: 'wojtek-zeton@mailinator.com',
        username: 'wojtek',
        first_name: 'Wojtek',
        last_name: '',
        total_points: 250,
      },
      {
        pk: 2,
        email: 'kuba-zeton@mailinator.com',
        username: 'kuba',
        first_name: 'Kuba',
        last_name: '',
        total_points: 120,
      },
    ],
  };
};

export const data = [
  { id: 1, text: 'Paczka czipsów', points: 5 },
  { id: 2, text: 'Wyjście do kina', points: 20 },
  { id: 3, text: 'Godzina gry komputerowej', points: 10 },
];

export const tasksData = [
  { id: 1, name: 'Sprzątnięcie biurka', value: 5 },
  { id: 2, name: 'Odkurzenie mieszkania', value: 20 },
  { id: 3, name: 'Wyrzucenie śmieci', value: 10 },
];
