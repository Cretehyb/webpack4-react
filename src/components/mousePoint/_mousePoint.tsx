interface RenderPointsProps {
    point: {
        x: number | null;
        y: number | null;
    };
}

const RenderPoint: React.SFC<RenderPointsProps> = (props) => {
    const { point } = props;
    return (
        <div> current posiont of x is {point.x} y is {point.y} </div>
    )
}

export default RenderPoint