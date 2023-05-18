import produceData from '../mockData/produce.json';

const POPULATE = 'produce/POPULATE';

export const populateProduce = produce => {
    return {
      type: POPULATE,
      produce: produceData
    }
  }

export default function produceReducer(state = {}, action) {

    let newState = {}
    
    switch (action.type) {
        case POPULATE:
            action.produce.forEach(item => {
                newState[item.id] = item
            });
            return newState
        default:
            return state
    }
}