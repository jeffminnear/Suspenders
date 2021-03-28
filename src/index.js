import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, Container } from '@material-ui/core';

import themes from './theme';
import Nav from './components/Nav';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: props.themes.Mist,
        }

        this.setTheme = this.setTheme.bind(this);
    }

    setTheme(selectedTheme) {
        this.setState({ theme: selectedTheme });
    }

    render() {
        return (
            <ThemeProvider theme={this.state.theme}>
                <Container>
                    <Nav
                        appName={this.props.appName}
                        theme={this.state.theme}
                        themes={this.props.themes}
                        setTheme={this.setTheme}
                    />
                </Container>
            </ThemeProvider>
        )
    }
}

ReactDOM.render(<App appName={'React Material'} themes={themes} />, document.querySelector('#root'));