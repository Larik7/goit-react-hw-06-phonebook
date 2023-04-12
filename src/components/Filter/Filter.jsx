import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "redux/FilterSlice";
import { getFilter } from "redux/selectors"

export const Filter = () => {
    const filterQuery = useSelector(getFilter);
    const dispatch = useDispatch();

    const onFilterChange = event => dispatch(setFilter(event.currentTarget.value));

    return (
        <div>
            <label>
                <p>Find contacts by name</p>
                <input type="text" value={filterQuery} onChange={onFilterChange} />
            </label>
        </div>
    )
}
