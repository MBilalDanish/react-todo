import withCounter from "./withCounter"
const CountClicks = (props) => {
    const {count, incrementCount} = props;
    return (
        <div onMouseOver={incrementCount} className="noselect">
            Total Hovers on me are: -- {count}
        </div>
    )
}

export default withCounter(CountClicks)
