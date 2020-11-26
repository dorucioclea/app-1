const taskBoardData = {
  lanes: [
    {
      id: 'PLANNED',
      title: 'Planned Tasks',
      color: '#2096f3',
      label: '20/70',
      cards: [
        {
          id: 'Milk',
          title: 'Buy milk',
          label: '15 mins',
          cardStyle: {
            margin: 'auto',
            marginBottom: 5
          },
          description: '2 Gallons of milk at the Deli store',
          tags: [
            { title: 'Error', color: 'white', bgcolor: '#F44336' },
            { title: 'Warning', color: 'white', bgcolor: '#FF9800' },
          ]
        },
        {
          id: 'Plan2',
          title: 'Dispose Garbage',
          label: '10 mins',
          cardStyle: {
            margin: 'auto',
            marginBottom: 5
          },
          description: 'Sort out recyclable and waste as needed',
          tags: [
            { title: 'Info', color: 'white', bgcolor: '#0288D1' },
            { title: 'Success', color: 'white', bgcolor: '#388E3C' },
          ]
        },
        {
          id: 'Plan3',
          title: 'Write Blog',
          label: '30 mins',
          cardStyle: {
            margin: 'auto',
            marginBottom: 5
          },
          description: 'Can AI make memes?',
          tags: [
            { title: 'Warning', color: 'white', bgcolor: '#FF9800' },
          ]
        },
        {
          id: 'Plan4',
          title: 'Pay Rent',
          label: '5 mins',
          cardStyle: {
            margin: 'auto',
            marginBottom: 5
          },
          description: 'Transfer to bank account',
          tags: [
            { title: 'Error', color: 'white', bgcolor: '#F44336' },
            { title: 'Warning', color: 'white', bgcolor: '#FF9800' },
            { title: 'Success', color: 'white', bgcolor: '#388E3C' },
          ]
        }
      ]
    },
    {
      id: 'WIP',
      title: 'Work In Progress',
      color: '#AB47BC',
      label: '10/20',
      cards: [
        {
          id: 'Wip1',
          title: 'Clean House',
          label: '30 mins',
          cardStyle: {
            margin: 'auto',
            marginBottom: 5
          },
          description: 'Soap wash and polish floor. Polish windows and doors. Scrap all broken glasses',
          tags: [
            { title: 'Error', color: 'white', bgcolor: '#F44336' },
            { title: 'Success', color: 'white', bgcolor: '#388E3C' },
          ]
        },
        {
          id: 'Archived1',
          title: 'Go Trekking',
          label: '300 mins',
          cardStyle: {
            margin: 'auto',
            marginBottom: 5
          },
          description: 'Completed 10km on cycle',
          tags: [
            { title: 'Info', color: 'white', bgcolor: '#0288D1' },
            { title: 'Error', color: 'white', bgcolor: '#F44336' },
            { title: 'Warning', color: 'white', bgcolor: '#FF9800' },
            { title: 'Success', color: 'white', bgcolor: '#388E3C' },
            { title: 'Info', color: 'white', bgcolor: '#0288D1' },
            { title: 'Error', color: 'white', bgcolor: '#F44336' },
            { title: 'Warning', color: 'white', bgcolor: '#FF9800' },
            { title: 'Success', color: 'white', bgcolor: '#388E3C' },
          ]
        }
      ]
    },
    {
      id: 'BLOCKED',
      title: 'Blocked',
      color: '#EC407A',
      label: '0/0',
      cards: [
        {
          id: 'Repeat1',
          title: 'Morning Jog',
          label: '30 mins',
          cardStyle: {
            margin: 'auto',
            marginBottom: 5
          },
          description: 'Track using fitbit',
          tags: [
            { title: 'Error', color: 'white', bgcolor: '#F44336' },
          ]
        }
      ]
    },
    {
      id: 'COMPLETED',
      title: 'Completed',
      color: '#43A047',
      label: '2/5',
      cards: [
        {
          id: 'Completed1',
          title: 'Practice Meditation',
          label: '15 mins',
          cardStyle: {
            margin: 'auto',
            marginBottom: 5
          },
          description: 'Use Headspace app'
        },
        {
          id: 'Completed2',
          title: 'Maintain Daily Journal',
          label: '15 mins',
          cardStyle: {
            margin: 'auto',
            marginBottom: 5
          },
          description: 'Use Spreadsheet for now'
        },
        {
          id: 'Archived1',
          title: 'Go Trekking',
          label: '300 mins',
          cardStyle: {
            margin: 'auto',
            marginBottom: 5
          },
          description: 'Completed 10km on cycle',
          tags: [
            { title: 'Info', color: 'white', bgcolor: '#0288D1' },
            { title: 'Warning', color: 'white', bgcolor: '#FF9800' },
          ]
        }
      ]
    },
    {
      id: 'ARCHIVED',
      title: 'Archived2',
      color: '#FF5722',
      label: '1/1',
      cards: [
        {
          id: 'Archived1',
          title: 'Go Trekking',
          label: '300 mins',
          cardStyle: {
            margin: 'auto',
            marginBottom: 5
          },
          description: 'Completed 10km on cycle',
          tags: [
            { title: 'Info', color: 'white', bgcolor: '#0288D1' },
          ]
        }
      ]
    },
  ]
};

export default taskBoardData;
