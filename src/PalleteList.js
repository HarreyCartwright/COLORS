import React, { Component } from 'react'
import { Link } from "react-router-dom"
import MiniPallete from './MiniPallete';
import { withStyles } from '@material-ui/styles'

const styles = {
    root: {
        backgroundColor: "blue",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"

    },

    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap"
    },

    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "#fff"
    },

    palletes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%"
    },

}

class PalleteList extends Component {
    constructor(props) {
        super(props)
        this.goToPallete = this.goToPallete.bind(this)
    }
    goToPallete(id) {
        this.props.history.push(`/palette/${id}`)
    }
    render() {
        const { palletes, classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                    </nav>
                    <div className={classes.palletes}>
                        {
                            palletes.map(p => (
                                <MiniPallete {...p} handleClick={() => this.goToPallete(p.id)} />
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default withStyles(styles)(PalleteList)