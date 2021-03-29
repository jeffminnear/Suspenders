import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, Container } from '@material-ui/core';

import themes from './theme';
import Nav from './components/Nav';
import Image from './components/Image';

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
                    <div
                        style={{
                            position: 'absolute',
                            left: '400px',
                            top: '20%',
                        }}
                    >
                        <Image />
                    </div>
                </Container>
            </ThemeProvider>
        )
    }
}

ReactDOM.render(<App appName={'Suspenders'} themes={themes} />, document.querySelector('#root'));