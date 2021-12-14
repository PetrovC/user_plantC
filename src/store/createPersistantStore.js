import compose from 'redux';
import persistState from 'redux-localstorage';
import persistSlicer from 'redux-localstorage-slicer';

const createPersistentStore = compose(
    persistState(null, {
        slicer : persistSlicer()
    })
    
)