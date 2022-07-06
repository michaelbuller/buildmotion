import { inject, InjectFlags } from '@angular/core';
import { ServiceBase } from './service-base';
export class SingletonServiceBase extends ServiceBase {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(type, loggingService, serviceName, serviceContext) {
        super(serviceName, loggingService, serviceContext);
        // eslint-disable-next-line no-bitwise
        const parent = inject(type, InjectFlags.Optional | InjectFlags.SkipSelf);
        if (parent) {
            throw Error(`Cannot create multiple instances of provider: [${type}]`);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xldG9uLXNlcnZpY2UtYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnMvZm91bmRhdGlvbi9zcmMvbGliL3NpbmdsZXRvbi1zZXJ2aWNlLWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFRLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSTdDLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxXQUFXO0lBQ25ELDhEQUE4RDtJQUM5RCxZQUFZLElBQWUsRUFBRSxjQUE4QixFQUFFLFdBQW1CLEVBQUUsY0FBOEI7UUFDOUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDbkQsc0NBQXNDO1FBQ3RDLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekUsSUFBSSxNQUFNLEVBQUU7WUFDVixNQUFNLEtBQUssQ0FBQyxrREFBa0QsSUFBSSxHQUFHLENBQUMsQ0FBQztTQUN4RTtJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGUsIGluamVjdCwgSW5qZWN0RmxhZ3MgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlcnZpY2VCYXNlIH0gZnJvbSAnLi9zZXJ2aWNlLWJhc2UnO1xuaW1wb3J0IHsgTG9nZ2luZ1NlcnZpY2UgfSBmcm9tICdAYnVpbGRtb3Rpb24vbG9nZ2luZyc7XG5pbXBvcnQgeyBTZXJ2aWNlQ29udGV4dCB9IGZyb20gJy4vbW9kZWxzL1NlcnZpY2VDb250ZXh0JztcblxuZXhwb3J0IGNsYXNzIFNpbmdsZXRvblNlcnZpY2VCYXNlIGV4dGVuZHMgU2VydmljZUJhc2Uge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICBjb25zdHJ1Y3Rvcih0eXBlOiBUeXBlPGFueT4sIGxvZ2dpbmdTZXJ2aWNlOiBMb2dnaW5nU2VydmljZSwgc2VydmljZU5hbWU6IHN0cmluZywgc2VydmljZUNvbnRleHQ6IFNlcnZpY2VDb250ZXh0KSB7XG4gICAgc3VwZXIoc2VydmljZU5hbWUsIGxvZ2dpbmdTZXJ2aWNlLCBzZXJ2aWNlQ29udGV4dCk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcbiAgICBjb25zdCBwYXJlbnQgPSBpbmplY3QodHlwZSwgSW5qZWN0RmxhZ3MuT3B0aW9uYWwgfCBJbmplY3RGbGFncy5Ta2lwU2VsZik7XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgdGhyb3cgRXJyb3IoYENhbm5vdCBjcmVhdGUgbXVsdGlwbGUgaW5zdGFuY2VzIG9mIHByb3ZpZGVyOiBbJHt0eXBlfV1gKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==