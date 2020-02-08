import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './NavBar.css'
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { format: "hex", open: false }
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this)
    }

    handleFormatChange(e) {
        this.setState({ format: e.target.value, open: true });
        this.props.handleChange(e.target.value)
    }

    closeSnackbar() {
        this.setState({
            open: false
        })
    }

    render() {
        const { level, changeLevel } = this.props;
        const { format } = this.state;
        return (
            <nav className="navBar">
                <div className="logo">
                    <Link className="logo-text" to="/">Colors</Link>
                </div>
                <div className="slider-container">
                    <div className="slider">
                        <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
                    </div>
                    <span>Level: {level}</span>
                </div>
                <div className="select-container">
                    <Select value={format} onChange={this.handleFormatChange}>
                        <MenuItem value="hex">Hex-#fff</MenuItem>
                        <MenuItem value="rgb">Rgb-(255,255,255)</MenuItem>
                        <MenuItem value="rgba">Rgba-(255,255,255, 1.0)</MenuItem>
                    </Select>
                    <Snackbar
                        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                        open={this.state.open}
                        autoHideDuration={3000}
                        onClose={this.closeSnackbar}
                        message={<span id="message-id">Format Changed to {format.toUpperCase()}</span>}
                        ContentProps={{
                            "aria-describedly": "message-id"
                        }}
                        action={[
                            <IconButton onClick={this.closeSnackbar} color="inherit" key="close" aria-label="close">
                                <CloseIcon />
                            </IconButton>
                        ]}
                    />
                </div>
            </nav >
        )
    }
}

export default NavBar