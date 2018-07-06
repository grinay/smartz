import React, { PureComponent } from 'react';
import Form from 'react-jsonschema-form';

import * as api from '../../../api/apiRequests';
import FormWidgets from '../../common/form-widgets/FormWidgets';
import { sendOpenDappEvent } from '../../../helpers/statictics';

class DeployStep1 extends PureComponent {
  componentDidMount() {
    const { errors, ctor } = this.props;

    if (!errors) {
      sendOpenDappEvent(ctor.id);
    }
  }

  submit({ formData }) {
    this.formDataSaved = formData;

    const { deployId, ctor } = this.props;

    const formDataOrigin = Object.assign({}, { ...formData });

    const title = formData.dapp_title;
    delete formData.dapp_title;

    const data = {
      dapp_title: title,
      fields: formData
    };

    api.sendFormDataDeployStep1(ctor.id, deployId, data, formDataOrigin);
  }

  render() {
    const { ctor, formData } = this.props;

    // Add dapp name field in the form beginning
    if (ctor && ctor.schema && (!ctor.schema.properties || !ctor.schema.properties.dapp_title)) {
      if (!('properties' in ctor.schema)) {
        ctor.schema.properties = {};
      }
      ctor.schema.properties.dapp_title = {
        title: 'Dapp name',
        type: 'string',
        description:
          'Name of dapp which you are now configuring and deploying. Will be used only in Smartz interfaces. Any string from 3 to 100 symbols',
        minLength: 3,
        maxLength: 100
      };

      if (!('required' in ctor.schema)) {
        ctor.schema.required = [];
      }
      ctor.schema.required.push('dapp_title');

      if (ctor.ui_schema && 'ui:order' in ctor.ui_schema) {
        ctor.ui_schema['ui:order'].unshift('dapp_title');
      } else {
        if (!ctor.ui_schema) ctor.ui_schema = {};

        ctor.ui_schema['ui:order'] = Object.keys(ctor.schema.properties);
        ctor.ui_schema['ui:order'].unshift(ctor.ui_schema['ui:order'].pop());
      }
    }

    return (
      <Form
        schema={ctor.schema}
        uiSchema={ctor.ui_schema}
        widgets={FormWidgets}
        formData={formData}
        onSubmit={this.submit.bind(this)}
        onChange={(e) => (this.formDataSaved = e.formData)}
        onError={(e) => console.warn('I have', e.length, 'errors to fix', e)}
        showErrorList={false}
        id="deploy-form"
        autocomplete="off">
        <div className="block__wrapper" style={{ marginBottom: '40px' }}>
          <button className="button block__button" type="submit" name="form-submit">
            Proceed
          </button>
        </div>
      </Form>
    );
  }
}

export default DeployStep1;
