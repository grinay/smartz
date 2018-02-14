import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import Form from 'react-jsonschema-form';

import {processControlForm, processResult, getNetworkEtherscanAddress} from 'Eth/Eth';
import FormWidgets from 'FormWidgets/FormWidgets';
import Spinner from 'Spinner/Spinner';

if (window.Web3) {
  var w3 = new window.Web3(window.web3.currentProvider);
}

class FunctionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submit({formData}) {
    const {func} = this.props;
    const {abi, address} = this.props.instance;
    // TODO: special processing of ask functions results
    processControlForm(abi, func, formData, address,
                      (error, result) => {
      if (!error) {
        // console.log(result);
        if (typeof result === 'string') { // String means transaction hash
          this.setState({
            tx: result,
            spinner: true
          });
          this.getReceipt(result);

        } else { // Not string means array means some data
          this.setState({value: processResult(result)});
        }

      } else {
        console.error(error);
      }
    });
  }

  getReceipt(tx) {
    w3.eth.getTransactionReceipt(tx, (err, receipt) => {
      if (null == receipt)
        window.setTimeout(() => {this.getReceipt(tx)}, 500);
      else {
        // console.log(receipt);
        this.setState({
          receipt: receipt,
          spinner: false
        });
        this.props.refresh();
      }
    });
  }

  render() {
    const {func, instance} = this.props;
    const {tx, spinner} = this.state;
    const value = this.state.value || func.value;

    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{func.name}</h4>

          <p className="card-text">
            {func.description &&
              <span className="desc">{func.description}</span>
            }
            {!func.description &&
              <span className="no-desc">No description provided by contract developer :(</span>
            }
          </p>

          {typeof value !== 'undefined' &&
            <div className="func-value">{value.toString()}</div>
          }

          {tx &&
            <div className="tx">
              {spinner &&
                <span>Wait for transaction to be mined:&ensp;</span>
              }
              {!spinner &&
                <span>Transaction mined:&ensp;</span>
              }
              <a href={`${getNetworkEtherscanAddress(instance.network_id)}/tx/${tx}`}>
                {tx}
              </a>
              {spinner &&
                <Spinner text="This can take up to minute..." alt="Spinner" />
              }
            </div>
          }

          {(!func.constant || func.inputs.minItems !== 0) &&
            <Form schema={func.inputs}
              widgets={FormWidgets}
              onSubmit={this.submit.bind(this)}
              onError={(e) => console.log("I have", e.length, "errors to fix")}
              showErrorList={false}>

              <div className="submit-button">
                <Button bsStyle="success" bsSize="xsmall"
                  className="btn-margin"
                  type="submit">
                  Send transaction
                </Button>
              </div>
            </Form>
          }
        </div>
      </div>
    );
  }
}

export default FunctionCard;
