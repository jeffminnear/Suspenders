import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export default class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            anchorEl: null,
        }

        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.handleMenuClose = this.handleMenuClose.bind(this);
        this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
    }

    handleMenuClick(event) {
        this.setState({ anchorEl: event.currentTarget });
    }

    handleMenuClose() {
        this.setState({ anchorEl: null });
    }

    handleMenuItemClick(selectedTheme) {
        this.props.setTheme(selectedTheme);
        this.handleMenuClose();
    }

    render() {
        const { theme, themes, appName } = this.props;
        const { anchorEl } = this.state;

        return (
            <AppBar position="static" color="primary">
                <Toolbar>
                    <IconButton onClick={this.handleMenuClick}>
                        <MenuIcon style={{ color: theme.palette.text.primary }} />
                    </IconButton>

                    <Menu
                        id="theme-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={this.handleMenuClose}
                    >
                        {
                            Object.entries(themes).map(([key, value]) => {
                                return (
                                    <MenuItem
                                        style={{ color: theme.palette.text.secondary }}
                                        onClick={() => this.handleMenuItemClick(value)}
                                        key={key}
                                    >
                                        {key}
                                    </MenuItem>
                                )
                            })
                        }
                    </Menu>
        
                    <Typography variant="h6" color="textPrimary">
                        { appName }
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}