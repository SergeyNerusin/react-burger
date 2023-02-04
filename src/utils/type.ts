
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

export type TIngrediensConstructor = TIngredientsType & { 
  keyId: string 
};

export type Tlocation = {
  hash: string;
  key:  string;
  pathname: string;
  search: string;
  from: string;
  background: {
     hash: string;
     key:  string;
     pathname: string;
     search: string;
     state: null;
    }; 
  }


export type TIngredient = TIngredientsType & {
 'things': number;
};

export type TOrder = {
  createdAt: string;
  ingredients: Array<string>;
  name: string;
  number: number;
  status: string; 
  updatedAt: string; 
  _id:string; 
};

export type TObject = {
  [name:string ]:number 
}