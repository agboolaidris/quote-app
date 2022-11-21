import {CategoryStackParams} from '../screens/categories';
import {HometackParams} from '../screens/home';

export type AuthorsStackParams = {
  authories: undefined;
  author: {
    id: string;
  };
};

export type RootTabParams = {
  homeStack: HometackParams;
  categoriesStack: CategoryStackParams;
  authorsStack: AuthorsStackParams;
};
