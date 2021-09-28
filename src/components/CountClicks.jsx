import withCounter from "./withCounter"
const CountClicks = (props) => {
    const {count, incrementCount} = props;
    return (
        <div onClick={incrementCount} className="noselect">
            Total Clicks on me are: -- {count}
        </div>
    )
}

export default withCounter(CountClicks)
