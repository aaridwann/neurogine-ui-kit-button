const VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  DANGER: 'danger',
} as const;

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const TYPE = {
  OUTLINE: 'outline',
  SOLID: 'solid',
};

const BORDER_RADIUS = {
  SMALL: 4,
  MEDIUM: 8,
  LARGE: 12,
};

const PADDING_HORIZONTAL = {
  SMALL: 8,
  MEDIUM: 12,
  LARGE: 16,
};

const PADDING_VERTICAL = {
  SMALL: 4,
  MEDIUM: 8,
  LARGE: 12,
};

const COLOR = {
  PRIMARY: '#007bff',
  SECONDARY: '#6c757d',
  DANGER: '#dc3545',
  LOADING: '#007bff',

};

export default { VARIANT, SIZE, TYPE, BORDER_RADIUS, PADDING_HORIZONTAL, PADDING_VERTICAL, COLOR };