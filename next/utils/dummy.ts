export const dummyChatList = [
  {
    id: 1,
    name: "John Doe",
    lastMessage: "Hello there!",
    lastMessageTime: "12:00 PM",
    unreadCount: 2,
    sex: "Male",
    status: "Online",
  },
  {
    id: 2,
    name: "Jane Doe",
    lastMessage: "Hi!",
    lastMessageTime: "11:00 AM",
    unreadCount: 1,
    sex: "Female",
    status: "Offline",
  },
  {
    id: 3,
    name: "John Smith",
    lastMessage: "Hey!",
    lastMessageTime: "10:00 AM",
    unreadCount: 0,
    sex: "Male",
    status: "Online",
  },
  {
    id: 4,
    name: "Jane Smith",
    lastMessage: "Hello!",
    lastMessageTime: "9:00 AM",
    unreadCount: 0,
    sex: "N/A",
    status: "Offline",
  },
];

export const dummyConvoData = [
  {
    id: 1,
    name: "John Doe",
    status: "Online",
    sex: "Male",
    messages: [
      {
        message: "Hello there!",
        time: `2024-04-30T12:00:00`,
        sender: "John Doe",
      },
      {
        message: "Hello there!!!",
        time: `2024-04-30T12:00:00`,
        sender: "John Doe",
      },
      {
        message: "Hi!",
        time: `2024-04-30T12:01:00`,
        sender: "You",
      },
      {
        message: "How are you?",
        time: `2024-04-30T12:02:00`,
        sender: "You",
      },
      {
        message: "I'm good, thanks!",
        time: `2024-04-30T13:00:00`,
        sender: "John Doe",
      },
    ],
  },
  {
    id: 2,
    name: "Jane Doe",
    status: "Offline",
    sex: "Female",
    messages: [
      {
        message: "Hi!",
        time: `2024-04-30T11:00:00`,
        sender: "Jane Doe",
      },
      {
        message: "Hello!",
        time: `2024-04-30T11:01:00`,
        sender: "You",
      },
      {
        message: "How are you?",
        time: `2024-04-30T11:02:00`,
        sender: "You",
      },
      {
        message: "I'm good, thanks!",
        time: `2024-04-30T11:03:00`,
        sender: "Jane Doe",
      },
    ],
  },
  {
    id: 3,
    name: "John Smith",
    status: "Online",
    sex: "Male",
    messages: [
      {
        message: "Hey!",
        time: `2024-04-30T10:00:00`,
        sender: "John Smith",
      },
      {
        message: "Hi!",
        time: `2024-04-30T10:01:00`,
        sender: "You",
      },
      {
        message: "How are you?",
        time: `2024-04-30T10:02:00`,
        sender: "You",
      },
      {
        message: "I'm good, thanks!",
        time: `2024-04-30T10:03:00`,
        sender: "John Smith",
      },
    ],
  },
  {
    id: 4,
    name: "Jane Smith",
    status: "Offline",
    sex: "N/A",
    messages: [
      {
        message: "Hello!",
        time: `2024-04-30T09:00:00`,
        sender: "Jane Smith",
      },
      {
        message: "Hi!",
        time: `2024-04-30T09:01:00`,
        sender: "You",
      },
      {
        message: "How are you?",
        time: `2024-04-30T09:02:00`,
        sender: "You",
      },
      {
        message: "I'm good, thanks!",
        time: `2024-04-30T09:03:00`,
        sender: "Jane Smith",
      },
    ],
  },
];
