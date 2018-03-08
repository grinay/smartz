import React, {Component} from 'react';
import {Panel, Button} from 'react-bootstrap';
import Form from 'react-jsonschema-form';

import api from 'helpers/api';
import FormWidgets from 'common/FormWidgets';

class DeployStep1 extends Component {
  submit({formData}) {
    const {ctor, auth} = this.props;
    const {constructRequest, constructErrors, constructSuccess} = this.props;

    constructRequest();

    const instTitle = formData.instance_title;
    delete formData.instance_title;
    api(auth).post(`/construct`, {
      ctor_id: ctor.ctor_id,
      instance_title: instTitle,
      fields: formData
    })

    .then(response => {
      if (response.data.result === 'error') {
        constructErrors(response.data.errors);
      } else {
        constructSuccess(response.data);
      }
    })

    .catch(error => console.log(error));
  }

  render() {
    const {ctor, errors} = this.props;

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
      <Panel header="Deploy step 1 of 2: customize your contract">
        <Form schema={ctor.schema}
          uiSchema={ctor.ui_schema}
          widgets={FormWidgets}
          onSubmit={this.submit.bind(this)}
          onError={(e) => console.log("I have", e.length, "errors to fix")}
          showErrorList={false}>
          <div>
            <Button bsStyle="success"
              className="btn-margin"
              type="submit">
              Proceed to step 2
            </Button>
            {errors &&
              // TODO: нормальная обработка ошибок с бека
              <div className="alert alert-danger" role="alert">
                {Object.keys(errors).forEach((errName) => (
                  <p key={errName}>{errors[errName]}</p>
                ))}
              </div>
            }
          </div>
        </Form>
      </Panel>
    );
  }
}

export default DeployStep1;
