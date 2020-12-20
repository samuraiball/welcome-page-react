import {BlogStatistics} from "../../components/state/BlogsState";
import {BlogsStatisticsAction} from "./actions/BlogsAction";

const BlogStatisticsReducer = (data: BlogStatistics, action: BlogsStatisticsAction): BlogStatistics => {
    switch (action.type) {
        case 'fetchStatistics':
            return {
                data: action.payload.categoryStatistics.map(d => {
                    return {
                        title: d.name,
                        value: d.number
                    }
                })
            }
    }
}

export default BlogStatisticsReducer
