import React, { Component, Suspense } from 'react';
import * as RouterDom from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from './_nav';
import navigationExample from '../../../modules/example/_nav';
// routes config
import { RouterContainer } from '../../../config';

const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component<any, any> {
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e: any) {
    e.preventDefault();
    this.props.history.push('/login');
  }

  render() {
    let navData = null;
    const checkRoute = this.props.location.pathname.match(/\/example/gm);
    if (checkRoute !== null) {
      navData = navigationExample;
    } else {
      navData = navigation;
    }

    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <DefaultHeader onLogout={(e: any) => this.signOut(e)} />
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense fallback={this.loading()}>
              <AppSidebarNav navConfig={navData} {...this.props} router={RouterDom} />
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={RouterContainer} router={RouterDom} />
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <RouterDom.Switch>
                  {RouterContainer.map((route, idx) => (route.component ? (
                    <RouterDom.Route
                      key={idx} // eslint-disable-line
                      path={route.path}
                      // exact={route.exact}
                      name={route.name}
                      render={(props: any) => (
                        <route.component {...props} />
                      )}
                    />
                  ) : (null)))}
                  <RouterDom.Redirect from="/" to="/dashboard" />
                </RouterDom.Switch>
              </Suspense>
            </Container>
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside />
            </Suspense>
          </AppAside>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
