import { InputField } from './InputField'
import { InputFieldSubject } from './InputFieldSubject'
import { Provider } from 'react-redux'
import { counterReducer } from './store'
import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { debounceTime, filter, mapTo } from 'rxjs/operators'
import { ObsComponent } from './ObsComponent'

const addEpic = (action$) => action$
    .pipe(
        filter(action => action.type === 'E_ADD'),
        debounceTime(500),
        mapTo({type: 'ADD'})
    )
const subEpic = (action$) => action$
    .pipe(
        filter(action => action.type === 'E_SUB'),
        debounceTime(500),
        mapTo({type: 'SUB'})
    )

const epicMiddleware = createEpicMiddleware();
const store = createStore(counterReducer, applyMiddleware(epicMiddleware))
epicMiddleware.run(
    combineEpics(addEpic, subEpic)
);


function App() {
  return (
      <Provider store={store}>
    <div>
        <InputField/>
        <InputFieldSubject/>
        <ObsComponent/>
    </div>
      </Provider>
  );
}

export default App;
