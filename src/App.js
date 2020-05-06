import React from 'react';
import Home from './views/Home';
import GraphOverview from './views/GraphOverview';
import styled from '@emotion/styled';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const StyledMain = styled.div`
    width: 100%;
    display: flex;
`;

const Nav = styled.nav`
    height: 3rem;
    padding: 0.5rem 2rem;
    display: flex;
`;

const StyleWrapper = styled.div`
    height: 100vh;
    width: 100%;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

function App() {
    return (
        <Router>
            <StyleWrapper>
                <Nav>
                    <StyledLink to="/">
                        <h2>Graph-it</h2>
                    </StyledLink>
                </Nav>
                <StyledMain>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/graph">
                            <GraphOverview />
                        </Route>
                    </Switch>
                </StyledMain>
            </StyleWrapper>
        </Router>
        
    );
}

export default App;
