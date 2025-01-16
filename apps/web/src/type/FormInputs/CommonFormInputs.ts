import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

export interface CommonInputProps {
  id: string;
  label: string;
  placeholder: string;
  inputRef?: any;
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  disabled?: boolean;
  helperText?: string;
  iconPlacement?: IconPlacementType;
  icon?: string;
  iconOnClick?: () => void;
  type?: string;
  isMandatory?: boolean;
  background?: string;
  defaultValue?: string;
}

export interface CustomDateInputProps extends CommonInputProps {
  onChange: (date: Date | null) => void;
  value?: any;
  minDate?: any;
  maxDate?: any;
  dateFormat?: string;
}

export interface CustomSelectProps extends CommonInputProps {
  options: OptionType[] | undefined;
  customOnChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface OptionType {
  text: string;
  value: string | number;
}

export enum IconPlacementType {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export enum InputType {
  TEXT = 'text',
  DATE = 'date',
  NUMBER = 'number',
  PASSWORD = 'password',
  NUM_TEXT = 'num_text',
  SELECT = 'select',
  TEXT_AREA = 'text_area',
}

export enum VariantType {
  CONTAINED = 'CONTAINED',
  OUTLINED = 'OUTLINED',
  OUTLINED_GREEN = 'OUTLINED_GREEN',
  OUTLINED_BLACK = 'OUTLINED_BLACK',
}

export enum SizeType {
  DEFAULT = 'DEFAULT',
  FULL = 'FULL',
}

export enum ButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit',
}
