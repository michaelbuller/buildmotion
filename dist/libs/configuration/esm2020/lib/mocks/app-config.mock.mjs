import { AppEnvironment } from '../config/app-environment.enum';
export const AppConfigMock = {
    apiConfig: {
        apiURL: 'http://localhost:3333/api',
        baseUrl: 'https://api.buildmotion.io/',
        csrf: 'https://api-dev.buildmotion.io/auth2/csrf',
        health: 'https://api.buildmotion-ui.net/v1/dev/health',
        version: 'https://api-dev.buildmotion.io/version',
    },
    dataDogConfig: {
        logs: {
            clientToken: 'MOCK-TOKEN-HERE',
            forwardErrorsToLogs: false,
            sampleRate: 100,
            site: 'datadoghq.com'
        },
        realUserMonitoring: {
            applicationId: 'BEEF-TACO-CORN-GOOD-CORN',
            clientToken: 'pubCORNBEEFISGOOD0fbc',
            site: 'datadoghq.com',
            service: 'buildmotion360nonprod',
            env: 'non-prod',
            version: '42.0.0',
            sampleRate: 100,
            trackInteractions: true
        }
    },
    loggingConfig: {
        applicationName: 'buildmotion',
        isProduction: false,
    },
    errorHandlingConfig: {
        applicationName: 'buildmotion',
        includeDefaultErrorHandling: true,
    },
    webConfig: {
        applicationName: 'buildmotion',
        blogURL: 'https://www.medium.com/@angularlicious',
        companyEffectiveDate: new Date(2020, 10, 1),
        companyName: 'buildmotion',
        defaultPageSize: 25,
        email: 'info@buildmotion.io',
        googleTagManagerId: 'GTM-12341234',
        keywordValidationInMilliseconds: 750,
        pageSizeOptions: [25, 50, 100],
        reloadDelayAfterNoticeInMinutes: 0,
        reloadDelayInMinutes: 1439,
        reloadNoticeDisplayInSeconds: 30,
        social: {
            instagram: {
                name: '',
                URL: '',
            },
            twitter: { name: '', URL: '' },
        },
        version: '42.42.42',
        website: 'buildmotion.io',
    },
    version: {
        environment: AppEnvironment.local,
        displayNotification: true,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWNvbmZpZy5tb2NrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb25maWd1cmF0aW9uL3NyYy9saWIvbW9ja3MvYXBwLWNvbmZpZy5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUdoRSxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQW1CO0lBQzNDLFNBQVMsRUFBRTtRQUNULE1BQU0sRUFBRSwyQkFBMkI7UUFDbkMsT0FBTyxFQUFFLDZCQUE2QjtRQUN0QyxJQUFJLEVBQUUsMkNBQTJDO1FBQ2pELE1BQU0sRUFBRSw4Q0FBOEM7UUFDdEQsT0FBTyxFQUFFLHdDQUF3QztLQUNsRDtJQUNELGFBQWEsRUFBRTtRQUNiLElBQUksRUFBRTtZQUNKLFdBQVcsRUFBRSxpQkFBaUI7WUFDOUIsbUJBQW1CLEVBQUUsS0FBSztZQUMxQixVQUFVLEVBQUUsR0FBRztZQUNmLElBQUksRUFBRSxlQUFlO1NBQ3RCO1FBQ0Qsa0JBQWtCLEVBQUU7WUFDbEIsYUFBYSxFQUFFLDBCQUEwQjtZQUN6QyxXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLElBQUksRUFBRSxlQUFlO1lBQ3JCLE9BQU8sRUFBRSx1QkFBdUI7WUFDaEMsR0FBRyxFQUFFLFVBQVU7WUFDZixPQUFPLEVBQUUsUUFBUTtZQUNqQixVQUFVLEVBQUUsR0FBRztZQUNmLGlCQUFpQixFQUFFLElBQUk7U0FDeEI7S0FDRjtJQUNELGFBQWEsRUFBRTtRQUNiLGVBQWUsRUFBRSxhQUFhO1FBQzlCLFlBQVksRUFBRSxLQUFLO0tBQ3BCO0lBQ0QsbUJBQW1CLEVBQUU7UUFDbkIsZUFBZSxFQUFFLGFBQWE7UUFDOUIsMkJBQTJCLEVBQUUsSUFBSTtLQUNsQztJQUNELFNBQVMsRUFBRTtRQUNULGVBQWUsRUFBRSxhQUFhO1FBQzlCLE9BQU8sRUFBRSx3Q0FBd0M7UUFDakQsb0JBQW9CLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDM0MsV0FBVyxFQUFFLGFBQWE7UUFDMUIsZUFBZSxFQUFFLEVBQUU7UUFDbkIsS0FBSyxFQUFFLHFCQUFxQjtRQUM1QixrQkFBa0IsRUFBRSxjQUFjO1FBQ2xDLCtCQUErQixFQUFFLEdBQUc7UUFDcEMsZUFBZSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7UUFDOUIsK0JBQStCLEVBQUUsQ0FBQztRQUNsQyxvQkFBb0IsRUFBRSxJQUFJO1FBQzFCLDRCQUE0QixFQUFFLEVBQUU7UUFDaEMsTUFBTSxFQUFFO1lBQ04sU0FBUyxFQUFFO2dCQUNULElBQUksRUFBRSxFQUFFO2dCQUNSLEdBQUcsRUFBRSxFQUFFO2FBQ1I7WUFDRCxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUU7U0FDL0I7UUFDRCxPQUFPLEVBQUUsVUFBVTtRQUNuQixPQUFPLEVBQUUsZ0JBQWdCO0tBQzFCO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsV0FBVyxFQUFFLGNBQWMsQ0FBQyxLQUFLO1FBQ2pDLG1CQUFtQixFQUFFLElBQUk7S0FDMUI7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwRW52aXJvbm1lbnQgfSBmcm9tICcuLi9jb25maWcvYXBwLWVudmlyb25tZW50LmVudW0nO1xuaW1wb3J0IHsgSUNvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9pLWNvbmZpZ3VyYXRpb24nO1xuXG5leHBvcnQgY29uc3QgQXBwQ29uZmlnTW9jazogSUNvbmZpZ3VyYXRpb24gPSB7XG4gIGFwaUNvbmZpZzoge1xuICAgIGFwaVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMzMy9hcGknLFxuICAgIGJhc2VVcmw6ICdodHRwczovL2FwaS5idWlsZG1vdGlvbi5pby8nLFxuICAgIGNzcmY6ICdodHRwczovL2FwaS1kZXYuYnVpbGRtb3Rpb24uaW8vYXV0aDIvY3NyZicsXG4gICAgaGVhbHRoOiAnaHR0cHM6Ly9hcGkuYnVpbGRtb3Rpb24tdWkubmV0L3YxL2Rldi9oZWFsdGgnLFxuICAgIHZlcnNpb246ICdodHRwczovL2FwaS1kZXYuYnVpbGRtb3Rpb24uaW8vdmVyc2lvbicsXG4gIH0sXG4gIGRhdGFEb2dDb25maWc6IHtcbiAgICBsb2dzOiB7XG4gICAgICBjbGllbnRUb2tlbjogJ01PQ0stVE9LRU4tSEVSRScsXG4gICAgICBmb3J3YXJkRXJyb3JzVG9Mb2dzOiBmYWxzZSxcbiAgICAgIHNhbXBsZVJhdGU6IDEwMCxcbiAgICAgIHNpdGU6ICdkYXRhZG9naHEuY29tJ1xuICAgIH0sXG4gICAgcmVhbFVzZXJNb25pdG9yaW5nOiB7XG4gICAgICBhcHBsaWNhdGlvbklkOiAnQkVFRi1UQUNPLUNPUk4tR09PRC1DT1JOJyxcbiAgICAgIGNsaWVudFRva2VuOiAncHViQ09STkJFRUZJU0dPT0QwZmJjJyxcbiAgICAgIHNpdGU6ICdkYXRhZG9naHEuY29tJyxcbiAgICAgIHNlcnZpY2U6ICdidWlsZG1vdGlvbjM2MG5vbnByb2QnLFxuICAgICAgZW52OiAnbm9uLXByb2QnLFxuICAgICAgdmVyc2lvbjogJzQyLjAuMCcsXG4gICAgICBzYW1wbGVSYXRlOiAxMDAsXG4gICAgICB0cmFja0ludGVyYWN0aW9uczogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgbG9nZ2luZ0NvbmZpZzoge1xuICAgIGFwcGxpY2F0aW9uTmFtZTogJ2J1aWxkbW90aW9uJyxcbiAgICBpc1Byb2R1Y3Rpb246IGZhbHNlLFxuICB9LFxuICBlcnJvckhhbmRsaW5nQ29uZmlnOiB7XG4gICAgYXBwbGljYXRpb25OYW1lOiAnYnVpbGRtb3Rpb24nLFxuICAgIGluY2x1ZGVEZWZhdWx0RXJyb3JIYW5kbGluZzogdHJ1ZSxcbiAgfSxcbiAgd2ViQ29uZmlnOiB7XG4gICAgYXBwbGljYXRpb25OYW1lOiAnYnVpbGRtb3Rpb24nLFxuICAgIGJsb2dVUkw6ICdodHRwczovL3d3dy5tZWRpdW0uY29tL0Bhbmd1bGFybGljaW91cycsXG4gICAgY29tcGFueUVmZmVjdGl2ZURhdGU6IG5ldyBEYXRlKDIwMjAsIDEwLCAxKSxcbiAgICBjb21wYW55TmFtZTogJ2J1aWxkbW90aW9uJyxcbiAgICBkZWZhdWx0UGFnZVNpemU6IDI1LFxuICAgIGVtYWlsOiAnaW5mb0BidWlsZG1vdGlvbi5pbycsXG4gICAgZ29vZ2xlVGFnTWFuYWdlcklkOiAnR1RNLTEyMzQxMjM0JyxcbiAgICBrZXl3b3JkVmFsaWRhdGlvbkluTWlsbGlzZWNvbmRzOiA3NTAsXG4gICAgcGFnZVNpemVPcHRpb25zOiBbMjUsIDUwLCAxMDBdLFxuICAgIHJlbG9hZERlbGF5QWZ0ZXJOb3RpY2VJbk1pbnV0ZXM6IDAsXG4gICAgcmVsb2FkRGVsYXlJbk1pbnV0ZXM6IDE0MzksXG4gICAgcmVsb2FkTm90aWNlRGlzcGxheUluU2Vjb25kczogMzAsXG4gICAgc29jaWFsOiB7XG4gICAgICBpbnN0YWdyYW06IHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIFVSTDogJycsXG4gICAgICB9LFxuICAgICAgdHdpdHRlcjogeyBuYW1lOiAnJywgVVJMOiAnJyB9LFxuICAgIH0sXG4gICAgdmVyc2lvbjogJzQyLjQyLjQyJyxcbiAgICB3ZWJzaXRlOiAnYnVpbGRtb3Rpb24uaW8nLFxuICB9LFxuICB2ZXJzaW9uOiB7XG4gICAgZW52aXJvbm1lbnQ6IEFwcEVudmlyb25tZW50LmxvY2FsLFxuICAgIGRpc3BsYXlOb3RpZmljYXRpb246IHRydWUsXG4gIH0sXG59O1xuIl19