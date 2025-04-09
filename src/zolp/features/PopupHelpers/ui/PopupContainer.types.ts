export type PopupPositioningVertical = 'center' | 'top' | 'bottom';
export type PopupPositioningHorizontal =
  | 'center'
  | 'right'
  | 'right-out'
  | 'left'
  | 'left-out';

export interface PopupPositioning {
  vertical?: PopupPositioningVertical;
  horizontal?: PopupPositioningHorizontal;
}
