// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/HomePage/reducer'),
          System.import('containers/HomePage/sagas'),
          System.import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('home', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/quote-request(/:categorySlug)(/:placeName)',
      name: 'quoteRequest',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/QuoteRequest/reducer'),
          System.import('containers/QuoteRequest/sagas'),
          System.import('containers/QuoteRequest'),

          System.import('containers/Questions/reducer'),
          System.import('containers/Questions/sagas'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([quoteReducer, quoteSagas, component, questionsReducer, questionsSagas]) => {
          injectReducer('quoteRequest', quoteReducer.default);
          injectSagas(quoteSagas.default);

          injectReducer('questions', questionsReducer.default);
          injectSagas(questionsSagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/terms',
      name: 'terms',
      getComponent(location, cb) {
        System.import('components/Terms')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
      indexRoute: {
        getComponent(location, cb) {
          System.import('components/Terms/User')
            .then(loadModule(cb))
            .catch(errorLoading);
        },
      },
      childRoutes: [
        {
          path: 'lawyers',
          name: 'lawyersTerms',
          getComponent(location, cb) {
            System.import('components/Terms/Lawyer')
              .then(loadModule(cb))
              .catch(errorLoading);
          },
        },
        {
          path: 'users',
          name: 'usersTerms',
          getComponent(location, cb) {
            System.import('components/Terms/User')
              .then(loadModule(cb))
              .catch(errorLoading);
          },
        },
        {
          path: 'compliance',
          name: 'compliance',
          getComponent(location, cb) {
            System.import('components/Terms/Compliance')
              .then(loadModule(cb))
              .catch(errorLoading);
          },
        },
        {
          path: 'privacy-policy',
          name: 'privacyPolicy',
          getComponent(location, cb) {
            System.import('components/Terms/PrivacyPolicy')
              .then(loadModule(cb))
              .catch(errorLoading);
          },
        },
      ],
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
