import { MainRoutesParamList } from '../routes/main.routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthRoutesParamList, MainRoutesParamList {}
  }
}
