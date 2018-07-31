import { IFunction } from './entities/dapp';


export function getUiSchemaFromFunc(func: IFunction) {
  let uiSchema = {
    items: [],
  };

  if (func.inputs && func.inputs.items) {
    for (let input of func.inputs.items) {
      let item = {};

      if (typeof input === 'object' && 'ui:widget' in input) {
        item = {
          'ui:widget': input['ui:widget'],
        };

        if ('ui:options' in input) {
          item['ui:options'] = input['ui:options'];
        }
      }
      uiSchema.items.push(item);
    }
  }

  return uiSchema;
}
