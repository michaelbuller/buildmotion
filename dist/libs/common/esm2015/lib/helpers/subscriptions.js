export function removeSubscriptions(subscriptions) {
    if (subscriptions) {
        subscriptions.forEach((subscription) => {
            if (subscription != null) {
                subscription.unsubscribe();
            }
        });
    }
}
//# sourceMappingURL=subscriptions.js.map