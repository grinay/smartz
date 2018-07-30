export interface IFunction {
  constant: boolean;
  description: string;
  inputs: any;
  name: string;
  outputs: any;
  payable: boolean;
  title: string;
  icon: {
    pack: string;
    name: string | null;
  };
  type?: string;
  payable_details: any;
}

export interface IDapp {
  abi: any;
  address: string;
  bin: string;
  blockchain: string;
  compiler_optimization: boolean;
  compiler_version: string;
  constructor: object;
  constructor_id: string;
  contract_name: string;
  ctor: object;
  dashboard_functions: string[];
  funcResults: any;
  functions: IFunction[];
  id: any;
  network_id: any;
  price: number;
  requests: any[];
  source: string;
  title: string;
  transactions: any;
  user_id: any;
}
