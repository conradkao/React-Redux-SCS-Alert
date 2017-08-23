export const selectAlert = (alert) => {
    console.log("You clicked on alert: ", alert.id);
    return {
        type: 'ALERT_SELECTED',
        payload: alert
    }
};
