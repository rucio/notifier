const notification = [];

function notificationReducer(state = notification, action) {
  switch (action.type) {
    case "ADD":
      const newNotification = [...state];
      newNotification.push({
        id: action.id,
        primary: action.primary,
        secondary: action.secondary,
        server: action.server,
        type: action.nType,
        read: false,
      });
      console.log(newNotification);
      return newNotification;

    case "DELETE":
      const newNotificationState = [...state];
      newNotificationState[action.index].read = true;
      newNotificationState.splice(action.id, 1);
      console.log(newNotificationState);
      return newNotificationState;

    case "DELETE_ALL":
      return [];

    default:
      return state;
  }
}

export default notificationReducer;
