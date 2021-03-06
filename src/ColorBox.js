import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css'
import { Link } from 'react-router-dom'

class ColorBox extends Component {
    constructor(props) {
        super(props)
        this.state = { copied: false };
        this.changeCopyState = this.changeCopyState.bind(this)
    }

    changeCopyState() {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1500)
        })
    }

    render() {
        const { name, background, paletteId, id } = this.props;
        const { copied } = this.state;
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div className="ColorBox" style={{ background }}>
                    <div style={{ background }} className={`copy-overlay ${copied && 'show'}`}></div>
                    <div className={`copy-msg ${copied && 'show'}`}>
                        <h1>copied!</h1>
                        <p>{background}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span className="name">{name}</span>
                        </div>
                        <button className="copy-button">Copy</button>
                        <Link to={`/palette/${paletteId}/${id}`}>
                            <span className="see-more">more</span>
                        </Link>
                    </div>
                </div>
            </CopyToClipboard>
        )
    }
}

export default ColorBox