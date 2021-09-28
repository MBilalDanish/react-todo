import { FETCH_STORIES } from "./types";

export const fetchStories = () => async dispatch => {
    let stories = [];
    let arr = [];
    let promises = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
        .then(res => res.json())
        .then(data => { stories = data });

    promises = await Promise.all(
        stories.slice(100).map((id) => {
            return fetch('https://hacker-news.firebaseio.com/v0/item/' + id + '.json?print=pretty')
                .then(response => response.json())
                .then(data => { arr.push(data) })
        }))
    dispatch({
        type: FETCH_STORIES,
        payload: arr
    })
    console.log(promises);

}

// stories = stories.slice(0, 20);
// const responses =  Promise.all(stories.map((id) => {
//         return fetch('https://hacker-news.firebaseio.com/v0/item/' + id + '.json?print=pretty')
//             .then(response => response.json())
//             .then(data => {
//                 arr.push(data)
//                 console.log(data)
//             });
//     })
// }