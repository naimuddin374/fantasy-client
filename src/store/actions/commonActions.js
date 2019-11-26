import History from '../../components/History'

// Change page from inner search component
export const changePage = link => dispatch => {
    History.push(`/${link}`)
    dispatch(History.push(`/${link}`))
}
