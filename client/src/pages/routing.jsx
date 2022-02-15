import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "react-query";

import { Layout } from 'ui';
import { WalletPage } from 'pages/Wallet.page';
import { BudgetPage } from './Budget.page';
import { NoMatchPage } from './NoMatch.page';

const routing = [
  {
    path: '/budget',
    component: BudgetPage,
    linkText: 'Budżet',
    menuOrder: 2,
  },
  {
    path: '/',
    component: WalletPage,
    linkText: 'Portfel',
    menuOrder: 1,
  },
  {
    path: '*',
    component: NoMatchPage,
    linkText: null,
  },
];

const queryClient = new QueryClient();

const Routing = () => (
  <QueryClientProvider client={queryClient}>
  <Router>    
      <Layout routing={routing}>
        <Switch>
          {routing.map((config) => (
            <Route
              key={config.path}
              path={config.path}
              component={config.component}
            />
          ))}
        </Switch>
      </Layout>   
  </Router>
  </QueryClientProvider>
);
export default Routing;
