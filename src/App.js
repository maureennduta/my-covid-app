import './App.css';
import { useState } from 'react';
import {
  HeaderContainer,
  Header,
  SkipToContent,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from 'carbon-components-react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Reports } from './Components/Reports/reports';
import { Register } from './Components/Register/register';
import { Symptoms } from './Components/Symptoms/symptoms';
import { Home } from './Components/Home/home';

function App() {
  const [sidebar, setSidebar] = useState(false);

  const onClickSideNavClosed = () => {
    if (sidebar === true) {
      setSidebar(false);
    } else {
      setSidebar(true);
    }
  };

  return (
    <div className="App">
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <>
            <Header aria-label="Side Menu" className="navbar">
              <SkipToContent />
              <HeaderMenuButton
                aria-label="Open menu"
                onClick={onClickSideNavClosed}
                isActive={isSideNavExpanded}
              />
              <HeaderName href="/" prefix="COVID">
                19
              </HeaderName>
              <HeaderNavigation aria-label="COVID-19">
                <>
                  <HeaderMenuItem href="/">Home</HeaderMenuItem>
                  <HeaderMenuItem href="/Register">Register New COVID Patients</HeaderMenuItem>
                  <HeaderMenuItem href="/Symptoms">Record New Symptoms</HeaderMenuItem>
                  <HeaderMenuItem href="/Reports">View Reports</HeaderMenuItem>

                </>
              </HeaderNavigation>
              <HeaderGlobalBar>
                <HeaderGlobalAction
                  id="logout"
                  aria-label="Log Out"
                  onClick={() => {
                    sessionStorage.clear();
                  }}
                >
                </HeaderGlobalAction>
              </HeaderGlobalBar>
            </Header>
          </>
        )}
      />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Reports" component={Reports} />
          <Route path="/Register" component={Register} />
          <Route path="/Symptoms" component={Symptoms} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
