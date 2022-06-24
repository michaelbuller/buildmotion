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
//# sourceMappingURL=app-config.mock.js.map