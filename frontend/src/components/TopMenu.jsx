import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchGamesList } from '../actions/gamesActions';

import { makeStyles } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import withStyles from "@material-ui/core/styles/withStyles";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

// function TopMenu() {
//
//
// }

class TopMenu extends React.Component{
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        this.props.getGames();
    }

    render() {
        const { games, classes } = this.props;
        console.log('Render', games);
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Home
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        games: state.games
    };
}

const mapDispatchToProps = {
    getGames: fetchGamesList
};



export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(useStyles))(TopMenu);
