import * as React from 'react';
import Form from 'react-jsonschema-form';

import * as api from '../../api/apiRequests';
import { fetchCtorParamsSuccess } from '../../app/common/ctor-card/CtorsActions';
import { clickTypes } from '../../constants/constants';
import { sendClickEvent } from '../../helpers/statictics';
import store from '../../store/store';
import Alert from '../common/Alert';
import Loader from '../common/loader/Loader';
import Button from '../ui-kit/button/Button';
import Title from '../ui-kit/title/Title';

import './CtorAdd.less';


interface ICtorAddProps {
  match: any;
  formData: any;
  fetchStatus: any;
  fetchErrorMessage: any;
}

interface ICtorAddState {
  error: any;
  message: any;
}

class CtorAdd extends React.Component<ICtorAddProps, ICtorAddState> {
  public id: any;

  constructor(props) {
    super(props);

    this.state = {
      error: null,
      message: null,
    };

    this.id = this.props.match && this.props.match.params ? this.props.match.params.id : null;

    this.submit = this.submit.bind(this);
  }

  public componentWillMount() {
    if (this.id) {
      api.getConstructorParams(this.id, null);
    }
  }

  public componentDidMount() {
    window.Intercom('update');
  }

  public submit({ formData }) {
    sendClickEvent(clickTypes.UPLOAD_ATTEMPT);

    // save form field after error
    store.dispatch(fetchCtorParamsSuccess(this.id, formData));

    // clean alerts before new submit
    if (this.state.message) {
      this.setState({ message: null });
    }

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
    const { formData, fetchStatus, fetchErrorMessage } = this.props;
    const { message, error } = this.state;

    if (this.id) {
      if (fetchStatus === 'request') {
        return <Loader text="Loading constructor data" size={100} />;
      }

      if (fetchStatus === 'error') {
        return <Alert>Constructor data not loaded: {fetchErrorMessage}</Alert>;
      }
    }

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
      <main className="page-main page-main--contracts ctor-add">
        <section className="block">
          <Title type="big" className="ctor-add-title">
            {this.id ? 'Update the' : 'Add a'} smart contract
            </Title>

          <Form
            schema={formSchema}
            formData={formData ? formData : ''}
            uiSchema={uiSchema}
            onSubmit={this.submit}
            showErrorList={false}>
            <div className="block__wrapper">
              <Button kind="large" type="submit">
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
