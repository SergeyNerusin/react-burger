import PropTypes from 'prop-types';

export type TIngredientsType = {
  '_id': string;
  'name': string;
  'type': 'bun' | 'sauce' | 'main';
  'proteins': number;
  'fat': number;
  'carbohydrates': number;
  'calories': number;
  'price': number;
  'image': string;
  'image_mobile': string;
  'image_large': string;
  '__v': number;
};


export type Tlocation = {
  hash: string;
  key:  string;
  pathname: string;
  search: string;
  state?: object; 
  background?: object;
  from?: string;

}