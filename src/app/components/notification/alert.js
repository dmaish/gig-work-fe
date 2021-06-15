import alertify from 'alertifyjs';

export const errorAlert = (message) => {

    alertify.set('notifier','position', 'top-right');
    return alertify.error(message);
}

export const successAlert = (message) => {

    alertify.set('notifier','position', 'top-right');
    return alertify.successAlert(message);
}