const demoMessages = () => [
  {
    id: 0,
    primary: "Welcome to Rucio!",
    secondary: "This is the notifications panel",
    server: "rucio-dev-server",
    type: "message",
    read: false,
  },
  {
    id: 1,
    primary: "Setup Complete",
    secondary: "You can start using the app",
    server: "rucio-atlas",
    type: "alert",
    status: "success",
    read: false,
  },
  {
    id: 2,
    primary: "Authentication Failed",
    secondary: "Check your connection",
    server: "rucio-atlas",
    type: "alert",
    status: "failed",
    read: false,
  },
];

export default demoMessages;
