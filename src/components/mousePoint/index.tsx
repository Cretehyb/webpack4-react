import React from 'react'
import MousePoint from './mousePoint'
import RenderPoint from './_mousePoint'

class MousePoints extends React.Component {
    render() {
        return (
            <div>
                <MousePoint
                    render={(points: { x: number | null; y: number | null }) => {
                        return <RenderPoint point={points} />;
                    }}
                />
            </div>
        )
    }
}
export default MousePoints