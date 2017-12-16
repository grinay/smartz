
class Constructor(object):

    def get_params(self):
        return {
            'hard_cap': {
                'type': 'int',
                'name': 'Mard cap',
                'desc': 'Maximum funds'
            }
        }

    def construct(self, fields):
        if 'hard_cap' not in fields:
            return {
                "result": "error",
                "errors": {
                    'hard_cap': 'Hard cap error 1'
                }
            }


        return [
            """
                pragma solidity ^0.4.18;
                
                contract A {
                    event Log(string msg);
                
                    function A() public {
                    
                    }
                    
                    function logthis(string msg) {
                        Log(msg);
                    }
                }
            """,
            'A'
        ]

