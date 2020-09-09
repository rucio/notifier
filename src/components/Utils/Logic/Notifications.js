/**
 * Creates a Notification Store for persisting Notification State in LocalStorage.
 */
export function createNotificationStore() {
  if (!localStorage.getItem("notifications"))
    localStorage.setItem("notifications", JSON.stringify([]));
}
