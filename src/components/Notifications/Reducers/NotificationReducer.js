import { doNotify } from "../NativeNotifications/AlertNotification";

const notification = JSON.parse(localStorage.getItem('notifications'))

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
        status: action.status,
        read: false,
      });
      console.log(newNotification);
      doNotify(action.primary)
      localStorage.setItem('notifications', JSON.stringify(newNotification))
      return newNotification;

    case "DELETE":
      const newNotificationState = [...state];
      newNotificationState[action.index].read = true;
      newNotificationState.splice(action.id, 1);
      console.log(newNotificationState);
      localStorage.setItem('notifications', JSON.stringify(newNotificationState))
      return newNotificationState;

    case "DELETE_ALL":
      localStorage.setItem("notifications", JSON.stringify([]));
      const emptyNotificationState = []
      return emptyNotificationState

    default:
      return state;
  }
}

export default notificationReducer;
