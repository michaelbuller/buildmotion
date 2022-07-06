export function removeSubscriptions(subscriptions) {
    if (subscriptions) {
        subscriptions.forEach((subscription) => {
            if (subscription != null) {
                subscription.unsubscribe();
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaXB0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tbW9uL3NyYy9saWIvaGVscGVycy9zdWJzY3JpcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxhQUE2QjtJQUMvRCxJQUFJLGFBQWEsRUFBRTtRQUNqQixhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBMEIsRUFBUSxFQUFFO1lBQ3pELElBQUksWUFBWSxJQUFJLElBQUksRUFBRTtnQkFDeEIsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQzVCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7S0FDSjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVN1YnNjcmlwdGlvbnMoc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10pIHtcbiAgaWYgKHN1YnNjcmlwdGlvbnMpIHtcbiAgICBzdWJzY3JpcHRpb25zLmZvckVhY2goKHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uKTogdm9pZCA9PiB7XG4gICAgICBpZiAoc3Vic2NyaXB0aW9uICE9IG51bGwpIHtcbiAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==