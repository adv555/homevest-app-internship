import { colors } from "config/config";
import { StylesConfig } from "react-select";

type ControlStylesFunction = NonNullable<StylesConfig['control']>;
type GetBorderColorFunction = (...args: Parameters<ControlStylesFunction>) => string;

const getControlBorderColor: GetBorderColorFunction = (styles, props) => {
  if (props.menuIsOpen) {
    return colors.green;
  }

  if (props.hasValue) {
    return colors["light-blue"];
  }

  return colors.grey;
}

const getHoverControlBorderColor: GetBorderColorFunction = (styles, props) => {
  if (!props.menuIsOpen) {
    return colors["light-blue"];
  }

  return colors.green;
}

export const styles: StylesConfig = {
  control: (styles, props) => ({
    ...styles,
    width: '256px',
    height: '34px',
    margin: 0,
    padding: 0,
    border: `1px solid ${getControlBorderColor(styles, props)}`,
    borderRadius: '4px',
    boxShadow: 'none',
    stroke: getControlBorderColor(styles, props),

    ':hover': {
      borderColor: getHoverControlBorderColor(styles, props),
      stroke: colors["light-blue"],
    },

    ':active': {
      backgroundColor: colors["light-blue"],
      stroke: colors.white,
    }
  }),

  placeholder: (styles) => ({
    ...styles,
    color: colors["light-grey"],
  }),

  dropdownIndicator: (styles) => ({
    ...styles,

  }),

  menu: (styles) => ({
    ...styles,
    width: '250px',
    paddingTop: '10px',
    paddingBottom: '10px',
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),

  option: (styles, props) => ({
    ...styles,
    backgroundColor: `${props.isSelected ? colors["light-grey-2"] : 'transparent'}`,
    color: colors.black,
    height: '30px',
    width: '234px',
    borderRadius: '4px',
    margin: '0px 8px 0px 8px',
    padding: '8px 4px 8px 4px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',

    ':active': {
      backgroundColor: 'transparent',
    }
  }),

  singleValue: (style, props) => ({
    ...style,
    color: `${props.selectProps.menuIsOpen ? colors["light-grey"] : colors.green}`,

    ':active': {
      color: colors.white,
    }
  })
}