export interface TableObj {
  columns: ColumnsObj[];
  data: any[];
}

export interface ColumnsObj {
  type?: string;
  field: string;
  label: string;
  width?: number;
  align?: string;
  key?: string;
  render?: any;
  slot?: string;
  children?: Array<ColumnsObj>;
}

export interface SearchObj {
  type: string;
  value: string;
  field: string;
  label: string;
}

export interface ParamsObj {
  [prop: string]: string | number
}