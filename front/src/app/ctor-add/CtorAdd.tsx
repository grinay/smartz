import * as React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-jsonschema-form';

import * as api from '../../api/apiRequests';
import { clickTypes } from '../../constants/constants';
import { sendClickEvent } from '../../helpers/statictics';
import Alert from '../common/Alert';


interface ICtorAddProps {
  match: any;
}

interface ICtorAddState {
  formData: any;
  error: any;
  message: any;
}

class CtorAdd extends React.Component<ICtorAddProps, ICtorAddState> {
  public id: any;

  constructor(props) {
    super(props);

    this.state = {
      formData: null,
      error: null,
      message: null,
    };

    this.id = this.props.match && this.props.match.params ? this.props.match.params.id : null;

    this.submit = this.submit.bind(this);
  }

  public componentDidMount() {
    window.Intercom('update');
  }

  public submit({ formData }) {
    sendClickEvent(clickTypes.UPLOAD_ATTEMPT);
    // save form field after error
    this.setState({ formData });

    // clean error msgs
    if (this.state.error) {
      this.setState({ error: null });
    }

    const data = { ...formData, constructor_id: this.id };

    api
      .addCtor(data)
      .then((response) => {
        if (response.data.error) {
          this.setState({ error: response.data.error });
        } else {
          sendClickEvent(clickTypes.UPLOAD_SUCCESS);

          this.setState({ message: `Contract "${data.name}" uploaded.` });
        }
      })
      .catch((error) => this.setState({ error }));
  }

  public render() {
    const { message, error, formData } = this.state;

    const formSchema = {
      type: 'object',
      required: ['name', 'description', 'price', 'ctor_file'],
      additionalProperties: false,
      properties: {
        name: {
          title: 'Public name of the smart contract (3..100 chars)',
          type: 'string',
          minLength: 3,
          maxLength: 100,
          pattern: '^[a-zA-Z0-9_ -]+$',
        },
        ctor_file: {
          title: 'Smart contract .py file',
          type: 'string',
          format: 'data-url',
        },
        description: {
          title: 'Description of the smart contract (3..300 chars)',
          type: 'string',
          minLength: 3,
          maxLength: 300,
        },
        payment_address: {
          title: 'Address',
          description: 'Payment for contract deploy will be sent to this address',
          type: 'string',
          pattern: '^0x[0-9a-fA-F]{40}$',
        },
        price: {
          title: 'Price of deploy (in ETH or EOS)',
          description: '0 = free contract',
          type: 'number',
          minimum: 0,
          maximum: 1000000,
          default: 0.1,
        },
      },
    };

    const uiSchema = {
      name: {
        'ui:placeholder': 'My ever best contract',
      },
      description: {
        'ui:widget': 'textarea',
        'ui:placeholder': 'Some sentences about contract purposes and functions',
      },
    };

    return (
      <main className="page-main page-main--contracts">
        <section className="block">
          <h2 className="block__header">{this.id ? 'Update the' : 'Add a'} smart contract</h2>

          <Form
            schema={formSchema}
            formData={formData ? formData : ''}
            uiSchema={uiSchema}
            onSubmit={this.submit}
            showErrorList={false}>
            <div className="block__wrapper" style={{ marginBottom: '40px' }}>
              <Button bsStyle="primary" className="button block__button" type="submit">
                {this.id ? 'Update' : 'Submit'} the contract
              </Button>
            </div>
          </Form>

          <br />

          {message && (
            <Alert color="green">
              <p>{message}</p>
            </Alert>
          )}

          {error && (
            <Alert>
              <p>{error}</p>
            </Alert>
          )}
        </section>
      </main>
    );
  }
}

export default CtorAdd;
