import {HometackParams} from '../screens/home';

export type AuthorsStackParams = {
  authories: undefined;
  author: {
    id: string;
  };
};

export type CategoriestackParams = {
  categories: undefined;
  category: {
    id: string;
  };
};

export type RootTabParams = {
  homeStack: HometackParams;
  categoriesStack: CategoriestackParams;
  authorsStack: AuthorsStackParams;
};
