export const data = [
  {
    id: 1234,
    name: 'Température Bureau',
    type: 'TEMPERATURE',
    data: {
      values: [23, 23, 22, 21, 23, 23, 23, 25, 25],
      labels: [
        '2016-10-19T08:00:00.000Z',
        '2016-10-19T09:00:00.000Z',
        '2016-10-19T10:00:00.000Z',
        '2016-10-19T11:00:00.000Z',
        '2016-10-19T12:00:00.000Z',
        '2016-10-19T13:00:00.000Z',
        '2016-10-19T14:00:00.000Z',
        '2016-10-19T15:00:00.000Z',
        '2016-10-19T16:00:00.000Z',
      ],
    },
  },
  {
    id: 10245,
    name: 'Porte du Garage',
    type: 'OPEN_CLOSE',
    data: {
      value: 0,
    },
  },
  {
    id: 2222,
    name: 'Ventilateur Ordinateur Bureau',
    type: 'POSITIVE_NUMBER',
    data: {
      values: [1073, 1800, 2299],
      labels: [
        '2016-10-19T10:00:00.000Z',
        '2016-10-19T10:05:00.000Z',
        '2016-10-19T10:10:00.000Z',
      ],
    },
  },
  {
    id: 2222,
    name: 'Ventilateur Salle principale',
    type: 'POSITIVE_NUMBER',
    data: {
      values: [1073, 1800, 2299, 2176, 1899, 1400],
      labels: [
        '2016-10-19T10:00:00.000Z',
        '2016-10-19T10:05:00.000Z',
        '2016-10-19T10:10:00.000Z',
        '2016-10-19T10:15:00.000Z',
        '2016-10-19T10:20:00.000Z',
        '2016-10-19T10:25:00.000Z',
      ],
    },
  },
];

export const invalidData = [
  {
    id: 1234,
    name: 'Température Bureau',
    type: 'TEMPERATURE',
    data: {
      values: [23, 23, 22, 21, 23, 23, 23, 25, 25],
      labels: [
        '2016-10-19T08:00:00.000Z',
        '2016-10-19T09:00:00.000Z',
        '2016-10-19T10:00:00.000Z',
        '2016-10-19T11:00:00.000Z',
        '2016-10-19T12:00:00.000Z',
        '2016-10-19T13:00:00.000Z',
        '2016-10-19T14:00:00.000Z',
        '2016-10-19T15:00:00.000Z',
        '2016-10-19T16:00:00.000Z',
      ],
    },
  },
  {
    id: 10245,
    name: 'Porte du Garage',
    type: 'OPEN_CLOSE',
    data: {
      value: 0,
    },
  },
  {
    id: 2222,
    name: 'Ventilateur Ordinateur Bureau',
    type: 'POSITIVE_NUMBER',
    data: {
      values: [1073, 1800, 2299],
      labels: [
        '2016-10-19T10:00:00.000Z',
        '2016-10-19T10:05:00.000Z',
        '2016-10-19T10:10:00.000Z',
      ],
    },
  },
  {
    id: 2222,
    name: 'Chaleur moteur de la voiture',
    type: 'MECHANIC',
    data: {
      values: [1073, 1800, 2299, 2176, 1899, 1400],
      labels: [
        '2016-10-19T10:00:00.000Z',
        '2016-10-19T10:05:00.000Z',
        '2016-10-19T10:10:00.000Z',
        '2016-10-19T10:15:00.000Z',
        '2016-10-19T10:20:00.000Z',
        '2016-10-19T10:25:00.000Z',
      ],
    },
  },
];
