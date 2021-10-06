import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchStories } from "../actions/storiesAction";
import { LinearProgress, makeStyles } from "@material-ui/core";
import Story from "./Story";
import { Pagination } from "@material-ui/lab";

const Stories = (props) => {
    useEffect(() => {
        props.fetchStories();
        setNoOfPages(10);

    }, []);
    const useStyles = makeStyles(theme => ({
        root: {
            width: "100%",
            backgroundColor: theme.palette.background.paper
        },
        item: {
            padding: theme.spacing(1.2)
        },
        avatar: { marginRight: theme.spacing(5) },
        paginator: {
            justifyContent: "center",
            padding: "10px"
        }
    }));
    const itemsPerPage = 10;
    const classes = useStyles();

    const [page, setPage] = useState(1);
    const [noOfPages, setNoOfPages] = useState(
        Math.ceil(props.stories.length / itemsPerPage)
    );
    const handleChange = (event, value) => {
        setPage(value)
    };
    return (
        <div className="stories">
            {props.stories.length ?
                <div><div className="height-90">{props.stories.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((item, index) => (
                    <Story  item={item} key={index} />
                ))}</div>
                    <div className="height-10">
                        <Pagination
                            count={noOfPages}
                            page={page}
                            onChange={handleChange}
                            defaultPage={1}
                            color="primary"
                            size="large"
                            showFirstButton
                            showLastButton
                            classes={{ ul: classes.paginator }} />
                    </div></div>

                :
                <div><LinearProgress /></div>

            }
            {
                // <Pagination onpage onPageChange={console.log("Oage")} count={props.stories.length} shape="rounded" />

            }
        </div>
    )
}

const mapStateToProps = state => ({
    stories: state.stories.items
})

export default connect(mapStateToProps, { fetchStories })(Stories);
