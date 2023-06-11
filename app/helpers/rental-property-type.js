// import { helper } from '@ember/component/helper';

// export function rentalPropertyType(params/*, hash*/) {
//   return params;
// }

// Import
import Ember from 'ember';
// Destruct
const { Helper: { helper } } = Ember;

const communityPropertyTypes = [
  'Condo','Townhouse','Apartment'
];

export function rentalPropertyType([propertyType]) {
  if (communityPropertyTypes.includes(propertyType)) {
    console.log(propertyType);
    return 'Community';
  } 
  console.log(propertyType);
  return 'Standalone';
}

export default helper(rentalPropertyType);
