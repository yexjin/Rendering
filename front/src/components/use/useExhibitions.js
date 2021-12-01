import * as reducer from '../../modules/reducer/exhibitions';

const useExhibitions = () => {
    return {
        createExhibitionApi: reducer.createExhibitionApi,
    }
}

export default useExhibitions;