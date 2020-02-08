import React, { Component } from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './NavBar.css'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { format: "hex" }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            format: e.target.value
        });
        this.props.handleChange(e.target.value)
    }

    render() {
        const { level, changeLevel, handleChange } = this.props;
        const { format } = this.state;
        return (
            <nav className="navBar">
                <div className="logo">
                    <a href="#">colors</a>
                </div>
                <div className="slider-container">
                    <div className="slider">
                        <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
                    </div>
                    <span>Level: {level}</span>
                </div>
                <div className="select-container">
                    <Select value={format} onChange={this.handleChange}>
                        <MenuItem value="hex">Hex-#fff</MenuItem>
                        <MenuItem value="rgb">Rgb-(255,255,255)</MenuItem>
                        <MenuItem value="rgba">Rgba-(255,255,255, 1.0)</MenuItem>
                    </Select>
                </div>
            </nav>
        )
    }
}

export default NavBar