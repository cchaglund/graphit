import React from 'react';
import Home from './views/Home';
import GraphOverview from './views/GraphOverview';
import styled from '@emotion/styled';
// import logo from './logo.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Nav = styled.nav`
    width: 100vw;
    height: 3rem;
    padding: 2rem;
    display: flex;
`;

const StyleWrapper = styled.div`
    background-color: #383838;
    height: 100vh;
    width: 100vw;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`;

function App() {
    return (
        <StyleWrapper>
            <Router>
                <Nav>
                    <StyledLink to="/">Home</StyledLink>
                    <StyledLink to="/graph">Graph</StyledLink>
                </Nav>
                <main>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/graph">
                            <GraphOverview />
                        </Route>
                    </Switch>
                </main>
            </Router>
        </StyleWrapper>
    );
}

export default App;
