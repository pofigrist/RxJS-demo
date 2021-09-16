import { useDispatch, useSelector } from 'react-redux'

export const ObsComponent = () => {
    const dispatch = useDispatch()
    const value = useSelector((state) => state.value)

    return <div>
        <h2>ObsComponent</h2>
        <h3>{value}</h3>
        <button onClick={() => dispatch({type: 'E_ADD'})}>add</button>
        <button onClick={() => dispatch({type: 'E_SUB'})}>sub</button>
    </div>
}