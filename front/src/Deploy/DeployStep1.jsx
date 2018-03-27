import React, {Component} from 'react';
import Form from 'react-jsonschema-form';

import api from 'helpers/api';
import FormWidgets from 'common/FormWidgets';

class DeployStep1 extends Component {
  submit({formData}) {
    const {
      deployId, ctor, auth,
      constructRequest, constructError, constructSuccess
    } = this.props;

    constructRequest(deployId);

    const instTitle = formData.instance_title;
    delete formData.instance_title;
    api(auth).post(`/constructor/${ctor.ctor_id}/construct`, {
      instance_title: instTitle,
      fields: formData
    })

    .then(response => {
      const {data} = response;

      if (data.error || data.result === 'error') {
        constructError(deployId, data.error || data.errors);

      } else {
        constructSuccess(deployId, data);
      }
    })

    .catch(error => {
      console.log(error);
      constructError(deployId, error);
    });
  }

  render() {
    const {ctor} = this.props;

    // Add instance name field in the form beginning
    if (ctor && ctor.schema && !ctor.schema.properties.instance_title) {
      ctor.schema.properties.instance_title = {
        title: "Instance name",
        type: "string",
        description: "Name of smart contract instance you are now configuring and deploying (any string of 3..100 chars)",
        minLength: 3,
        maxLength: 100
      };
      ctor.schema.required.push("instance_title");

      if (ctor.ui_schema && ("ui:order" in ctor.ui_schema)) {
        ctor.ui_schema["ui:order"].unshift("instance_title");

      } else {
        if (!ctor.ui_schema)
          ctor.ui_schema = {};

        ctor.ui_schema["ui:order"] = Object.keys(ctor.schema.properties);
        ctor.ui_schema["ui:order"].unshift(ctor.ui_schema["ui:order"].pop())
      }
    }

    return (
      <Form schema={ctor.schema}
        uiSchema={ctor.ui_schema}
        widgets={FormWidgets}
        onSubmit={this.submit.bind(this)}
        onError={(e) => console.log("I have", e.length, "errors to fix")}
        showErrorList={false}
        id="deploy-form"
        autocomplete="off">
        <div className="block__wrapper" style={{marginBottom: '40px'}}>
          <button className="button block__button" type="submit" name="form-submit">
            Proceed
          </button>
        </div>
      </Form>
    );
  }
}

export default DeployStep1;
