export const ORDER_DIRECTION = {
  asc: 'ASC',
  desc: 'DESC',
} as const;

export type OrderDirection =
  (typeof ORDER_DIRECTION)[keyof typeof ORDER_DIRECTION];

export interface PageResult<T> {
  cursor?: number;
  pageSize: number;
  result: T[];
}
