
from smartz.api.constructor_engine import ConstructorInstance
from smartz.eth.contracts import merge_function_titles2specs, make_generic_function_spec


class Constructor(ConstructorInstance):

    def get_version(self):
        return {
            "result": "success",
            "version": 1
        }


    def get_params(self):
        json_schema = {
            "type": "object",
            "required": ["file"],

            "properties": {
                "file": {
                    "title": "File",
                    "description": "Hash of file",
                    "$ref": "#/definitions/fileHash"
                },
            }
        }

        ui_schema = {
            # "file": {
            #     "ui:widget": "fileHash"
            # }
        }

        return {
            "result": "success",
            "schema": json_schema,
            "ui_schema": ui_schema
        }

    def construct(self, fields):
        source = self.__class__._TEMPLATE \
            .replace('%file%', fields['file'])

        return {
            'result': "success",
            'source': source,
            'contract_name': "TestContract"
        }

    def post_construct(self, fields, abi_array):

        function_titles = {
            'hash': {
                'title': 'File hash',
            },

        }

        return {
            "result": "success",
            'function_specs': function_titles,
            'dashboard_functions': ['file']
        }


    # language=Solidity
    _TEMPLATE = """
pragma solidity ^0.4.18;


contract TestContract 
{
    uint public version = 1;
    bytes32 public constant hash = %file%;

    function TestContract() public payable {
    
    }

}


    """
