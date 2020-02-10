import React, { Component } from 'react'
import { Link } from "react-router-dom"
import MiniPallete from './MiniPallete';
class PalleteList extends Component {
    render() {
        const { palletes } = this.props;
        return (
            <div>
                <MiniPallete />
                {palletes.map(p => (
                    <MiniPallete {...p} />
                ))}
            </div>
        )
    }
}
export default PalleteList