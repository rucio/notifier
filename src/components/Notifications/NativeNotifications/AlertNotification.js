export function doNotify(message) {
    Notification.requestPermission().then(() => {
        new window.Notification('Rucio Notifier', {
            'body': message,
            'icon': 'electorn-logo=2.png'
        });
    });
}