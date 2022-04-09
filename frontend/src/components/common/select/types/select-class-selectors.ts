import { components } from 'react-select';

export interface SelectClassSelectors {
  ClearIndicator: (props: Parameters<typeof components.ClearIndicator>[0]) => string;
  Control: (props: Parameters<typeof components.Control>[0]) => string;
  DropdownIndicator: (props: Parameters<typeof components.DropdownIndicator>[0]) => string;
  DownChevron: (props: Parameters<typeof components.DownChevron>[0]) => string;
  CrossIcon: (props: Parameters<typeof components.CrossIcon>[0]) => string;
  Group: (props: Parameters<typeof components.Group>[0]) => string;
  GroupHeading: (props: Parameters<typeof components.GroupHeading>[0]) => string;
  IndicatorsContainer: (props: Parameters<typeof components.IndicatorsContainer>[0]) => string;
  IndicatorSeparator: (props: Parameters<typeof components.IndicatorSeparator>[0]) => string;
  Input: (props: Parameters<typeof components.Input>[0]) => string;
  LoadingIndicator: (props: Parameters<typeof components.LoadingIndicator>[0]) => string;
  Menu: (props: Parameters<typeof components.Menu>[0]) => string;
  MenuList: (props: Parameters<typeof components.MenuList>[0]) => string;
  LoadingMessage:(props: Parameters<typeof components.LoadingMessage>[0]) => string;
  NoOptionsMessage:(props: Parameters<typeof components.NoOptionsMessage>[0]) => string;
  MultiValue: (props: Parameters<typeof components.MultiValue>[0]) => string;
  MultiValueContainer: (props: Parameters<typeof components.MultiValueContainer>[0]) => string;
  MultiValueLabel: (props: Parameters<typeof components.MultiValueLabel>[0]) => string;
  MultiValueRemove: (props: Parameters<typeof components.MultiValueRemove>[0]) => string;
  Option: (props: Parameters<typeof components.Option>[0]) => string;
  Placeholder: (props: Parameters<typeof components.Placeholder>[0]) => string;
  SelectContainer: (props: Parameters<typeof components.SelectContainer>[0]) => string;
  SingleValue: (props: Parameters<typeof components.SingleValue>[0]) => string;
  ValueContainer: (props: Parameters<typeof components.ValueContainer>[0]) => string;
}