import React, { Component } from 'react'
import { Link } from "react-router-dom"
class PalleteList extends Component {
    render() {
        const { palletes } = this.props;
        return (
            <div>
                {palletes.map(p => (
                    <Link to={`/palette/${p.id}`}>{p.paletteName}</Link>
                ))}
            </div>
        )
    }
}
export default PalleteList