import { ISearchFrom } from '../../../pages/Layout/Header/Header';

export interface IOption {
  value: string;
  label: string;
}

export interface ISelectProps {
  selected: IOption;
  options: IOption[];
  placeholder?: string;
  status?: 'default' | 'invalid';
  onChange?: (selected: IOption['value']) => void;
  queryArgs: ISearchFrom;
  setQueryArgs: ({}: ISearchFrom) => void;
}
