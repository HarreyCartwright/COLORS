import React from 'react'
import { withStyles } from '@material-ui/styles'

const styles = {
    main: {
        backgroundColor: "purple",
        border: "3px solid teal",
    }
}

function MiniPallete(props) {
    const { classes } = props;
    return (
        < div className={classes.main}>
            <h1>MiniPallete</h1>
        </div >
    )
}

export default withStyles(styles)(MiniPallete);