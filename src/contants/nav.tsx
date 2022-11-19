import {SvgProps} from 'react-native-svg';
import HomeIcon from '../icons/home';
import {RootTabParams} from '../navigations/type';
interface Props {
  route: keyof RootTabParams;
  Icon: (props: SvgProps) => JSX.Element;
  label: string;
}
export const butomTabData: Props[] = [
  {
    label: 'Home',
    Icon: HomeIcon,
    route: 'home',
  },
  {
    label: 'Category',
    Icon: HomeIcon,
    route: 'categoriesStack',
  },
  {
    label: 'Author',
    Icon: HomeIcon,
    route: 'authorsStack',
  },
];
