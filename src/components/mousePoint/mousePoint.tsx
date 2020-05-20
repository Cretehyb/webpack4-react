import React from 'react';

interface _props {
    render: (point: {
        x: number | null,
        y: number | null
    }) => React.ReactElement<HTMLDivElement>
}
interface _state {
    readonly x: number | null,
    readonly y: number | null
}
class MousePoint extends React.Component<_props, _state> {
    constructor(props: _props) {
        super(props);
        this.state = {
            x: null,
            y: null
        }
    }

    move = (e: any) => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }

    render() {
        return (
            <div style={{ height: '1000px' }} onMouseMove={this.move}>
                {this.props.render({
                    x: this.state.x,
                    y: this.state.y
                })}
            </div>
        )
    }
}

export default MousePoint