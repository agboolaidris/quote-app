import {SvgProps} from 'react-native-svg';
import CategoryIcon from '../icons/category';
import HomeIcon from '../icons/home';
import UserGroupIcon from '../icons/userGroup';
import {RootTabParams} from '../navigations/type';
import AuthorsScreen from '../screens/authors';
import CategoriesScreen from '../screens/categories';
import HomeScreen from '../screens/home';

interface Props {
  route: keyof RootTabParams;
  Icon: (props: SvgProps) => JSX.Element;
  label: string;
  screen: (props: SvgProps) => JSX.Element;
}
export const butomTabData: Props[] = [
  {
    label: 'Home',
    Icon: HomeIcon,
    route: 'home',
    screen: HomeScreen,
  },
  {
    label: 'Category',
    Icon: CategoryIcon,
    route: 'categoriesStack',
    screen: CategoriesScreen,
  },
  {
    label: 'Author',
    Icon: UserGroupIcon,
    route: 'authorsStack',
    screen: AuthorsScreen,
  },
];
