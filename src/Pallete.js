import React, { Component } from 'react'
import NavBar from './NavBar'
import ColorBox from './ColorBox'
import './Pallete.css'


class Pallete extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 500, format: "hex" };
        this.changeLevel = this.changeLevel.bind(this)
        this.changeFormat = this.changeFormat.bind(this)
    }

    changeLevel(newLevel) {
        this.setState({
            level: newLevel
        })
    }
    changeFormat(val) {
        this.setState({ format: val })
    }

    render() {
        const { colors } = this.props.pallete;
        const { level, format } = this.state;
        const colorBoxes = colors[level].map((color, index) => (
            <ColorBox key={index} background={color[this.state.format]} name={color.name} />
        ))
        return (
            <div className="Pallete">
                {/* Navbar */}
                <NavBar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} />
                <div className="Pallete-colors">
                    {colorBoxes}
                </div>
                {/* footer */}
            </div>
        )
    }
}

export default Pallete