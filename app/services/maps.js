import Ember from 'ember';
import MapUtil from '../utils/google-maps';

const {
  Service,
  get,
  set,
  Object
} = Ember;

export default Service.extend({

  init() {
    if (!get(this, 'cachedMaps')) {
      set(this, 'cachedMaps', Object.create());
    }
    if (!get(this, 'mapUtil')) {
      set(this, 'mapUtil', MapUtil.create());
    }
  },

  getMapElement(location) {
    let camelizedLocation = location.camelize();
    let element = get(this, `cachedMaps.${camelizedLocation}`);
    if (!element) {
      element = this.createMapElement();
      get(this, 'mapUtil').createMap(element, location);
      set(this, `cachedMaps.${camelizedLocation}`, element);
    }
    return element;
  },

  createMapElement() {
    let element = document.createElement('div');
    element.className = 'map';
    return element;
  }

});