import React from 'react';

interface Props {
    render: (point: {
        x: number | null,
        y: number | null
    }) => React.ReactElement<HTMLDivElement>
}
interface State {
     x: number | null,
     y: number | null
}
class MousePoint extends React.Component<Props, State> {
    constructor(props: Props) {
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