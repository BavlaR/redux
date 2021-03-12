import { WEATHER_DATA_RECIEVED } from './weather.actions';

export default (state = null, action) => {
   switch (action.type) {
      case WEATHER_DATA_RECIEVED:
         return action.payload;
      default:
         return state;
   }
};
