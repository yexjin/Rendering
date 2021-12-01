import * as reducer from '../../modules/reducer/pamphlets';

const usePamphlets = () => {
    return {
        createPamphletApi: reducer.createPamphletApi,
    }
}

export default usePamphlets;