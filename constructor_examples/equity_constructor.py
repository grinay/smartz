
class Constructor(object):

    def get_params(self):
        json_schema = {
            "type": "object",
            "required": ["name", "symbol", "shareholders"],
            "additionalProperties": False,

            "properties": {
                "name": {
                    "title": "Name of token",
                    "description": "Name of shares token (shares token is ERC20 compatible): "
                                   "3..100 characters, letters and spaces only",
                    "type": "string",
                    "minLength": 3,
                    "maxLength": 100,
                    "pattern": "^[a-zA-Z ]+$"
                },

                "symbol": {
                    "title": "Token Symbol",
                    "description": "Ticker of shares token (shares token is ERC20 compatible): "
                                   "2..10 characters, capital letters only",
                    "type": "string",
                    "minLength": 2,
                    "maxLength": 10,
                    "pattern": "^[A-Z]+$"
                },

                #todo
                # "allow_third_party_users": {
                #     'type': 'int',
                #     'title': "Allow third-party users",
                #     'desc': 'Is transfer of shares is allowed to non-founders'
                # }

                "shareholders": {
                    "title": "Shareholders",
                    "type": "array",
                    "minItems": 1,
                    "maxItems": 100,
                    "items": {
                        "title": "Shareholder information",
                        "type": "object",
                        "required": ["address", "fullname", "shares"],
                        "additionalProperties": False,

                        "properties": {
                            "address": {
                                "title": "Address",
                                "description": "Ethereum address which holds shares",
                                "$ref": "#/definitions/address"
                            },

                            "fullname": {
                                "title": "Full name",
                                "description": "Latin letters, 3..100 symbols",
                                "type": "string",
                                "minLength": 3,
                                "maxLength": 100,
                                "pattern": "^[a-zA-Z ]+$"
                            },

                            "shares": {
                                "title": "Shares in possession",
                                "type": "integer",
                                "minimum": 1,
                                "maximum": 1000000000
                            }
                        }
                    }
                }
            }
        }

        return {
            "schema": json_schema
        }

    def construct(self, fields):
        shareholders_code = ''
        total_shares = 0
        for s in fields['shareholders']:
            addr, fullname, shares = s['address'], s['fullname'], s['shares']
            total_shares += shares
            shareholders_code += """
        addShareholder(address({addr}), "{fullname}", {shares});
            """.format(
                addr=addr,
                fullname=fullname,
                shares=shares
            )


        source = self.__class__._TEMPLATE\
            .replace('%name%', fields['name']) \
            .replace('%symbol%', fields['symbol']) \
            .replace('%total%', str(total_shares))\
            .replace('%shareholders_code%', shareholders_code)

        return source, "EquityToken"




    _TEMPLATE = """
pragma solidity ^0.4.18;


/**
 * @title SafeMath
 * @dev Math operations with safety checks that throw on error
 */
library SafeMath {
  function mul(uint256 a, uint256 b) internal pure returns (uint256) {
    if (a == 0) {
      return 0;
    }
    uint256 c = a * b;
    assert(c / a == b);
    return c;
  }

  function div(uint256 a, uint256 b) internal pure returns (uint256) {
    // assert(b > 0); // Solidity automatically throws when dividing by 0
    uint256 c = a / b;
    // assert(a == b * c + a % b); // There is no case in which this doesn't hold
    return c;
  }

  function sub(uint256 a, uint256 b) internal pure returns (uint256) {
    assert(b <= a);
    return a - b;
  }

  function add(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a + b;
    assert(c >= a);
    return c;
  }
}


/**
 * @title ERC20Basic
 * @dev Simpler version of ERC20 interface
 * @dev see https://github.com/ethereum/EIPs/issues/179
 */
contract ERC20Basic {
  uint256 public totalSupply;
  function balanceOf(address who) public view returns (uint256);
  function transfer(address to, uint256 value) public returns (bool);
  event Transfer(address indexed from, address indexed to, uint256 value);
}

/**
 * @title ERC20 interface
 * @dev see https://github.com/ethereum/EIPs/issues/20
 */
contract ERC20 is ERC20Basic {
  function allowance(address owner, address spender) public view returns (uint256);
  function transferFrom(address from, address to, uint256 value) public returns (bool);
  function approve(address spender, uint256 value) public returns (bool);
  event Approval(address indexed owner, address indexed spender, uint256 value);
}

/**
 * @title Basic token
 * @dev Basic version of StandardToken, with no allowances.
 */
contract BasicToken is ERC20Basic {
  using SafeMath for uint256;

  mapping(address => uint256) balances;

  /**
  * @dev transfer token for a specified address
  * @param _to The address to transfer to.
  * @param _value The amount to be transferred.
  */
  function transfer(address _to, uint256 _value) public returns (bool) {
    require(_to != address(0));
    require(_value <= balances[msg.sender]);

    // SafeMath.sub will throw if there is not enough balance.
    balances[msg.sender] = balances[msg.sender].sub(_value);
    balances[_to] = balances[_to].add(_value);
    Transfer(msg.sender, _to, _value);
    return true;
  }

  /**
  * @dev Gets the balance of the specified address.
  * @param _owner The address to query the the balance of.
  * @return An uint256 representing the amount owned by the passed address.
  */
  function balanceOf(address _owner) public view returns (uint256 balance) {
    return balances[_owner];
  }

}

/**
 * @title Standard ERC20 token
 *
 * @dev Implementation of the basic standard token.
 * @dev https://github.com/ethereum/EIPs/issues/20
 * @dev Based on code by FirstBlood: https://github.com/Firstbloodio/token/blob/master/smart_contract/FirstBloodToken.sol
 */
contract StandardToken is ERC20, BasicToken {

  mapping (address => mapping (address => uint256)) internal allowed;


  /**
   * @dev Transfer tokens from one address to another
   * @param _from address The address which you want to send tokens from
   * @param _to address The address which you want to transfer to
   * @param _value uint256 the amount of tokens to be transferred
   */
  function transferFrom(address _from, address _to, uint256 _value) public returns (bool) {
    require(_to != address(0));
    require(_value <= balances[_from]);
    require(_value <= allowed[_from][msg.sender]);

    balances[_from] = balances[_from].sub(_value);
    balances[_to] = balances[_to].add(_value);
    allowed[_from][msg.sender] = allowed[_from][msg.sender].sub(_value);
    Transfer(_from, _to, _value);
    return true;
  }

  /**
   * @dev Approve the passed address to spend the specified amount of tokens on behalf of msg.sender.
   *
   * Beware that changing an allowance with this method brings the risk that someone may use both the old
   * and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this
   * race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards:
   * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
   * @param _spender The address which will spend the funds.
   * @param _value The amount of tokens to be spent.
   */
  function approve(address _spender, uint256 _value) public returns (bool) {
    allowed[msg.sender][_spender] = _value;
    Approval(msg.sender, _spender, _value);
    return true;
  }

  /**
   * @dev Function to check the amount of tokens that an owner allowed to a spender.
   * @param _owner address The address which owns the funds.
   * @param _spender address The address which will spend the funds.
   * @return A uint256 specifying the amount of tokens still available for the spender.
   */
  function allowance(address _owner, address _spender) public view returns (uint256) {
    return allowed[_owner][_spender];
  }

  /**
   * approve should be called when allowed[_spender] == 0. To increment
   * allowed value is better to use this function to avoid 2 calls (and wait until
   * the first transaction is mined)
   * From MonolithDAO Token.sol
   */
  function increaseApproval(address _spender, uint _addedValue) public returns (bool) {
    allowed[msg.sender][_spender] = allowed[msg.sender][_spender].add(_addedValue);
    Approval(msg.sender, _spender, allowed[msg.sender][_spender]);
    return true;
  }

  function decreaseApproval(address _spender, uint _subtractedValue) public returns (bool) {
    uint oldValue = allowed[msg.sender][_spender];
    if (_subtractedValue > oldValue) {
      allowed[msg.sender][_spender] = 0;
    } else {
      allowed[msg.sender][_spender] = oldValue.sub(_subtractedValue);
    }
    Approval(msg.sender, _spender, allowed[msg.sender][_spender]);
    return true;
  }

}

contract EquityToken is StandardToken
{
    string public constant name = '%name%';
    string public constant symbol = '%symbol%';
    uint8 public constant decimals = 0;
    
    mapping (address => string) public shareholders_names;
    address[] public shareholders;

    function EquityToken() public payable {
        totalSupply = totalSupply.add(%total%);
   
%shareholders_code%

        %payment_code%
    }
    
    function addShareholder(address addr, string fullname, uint256 shares) public {
        shareholders.push(addr);
        shareholders_names[addr] = fullname;
        balances[addr] = shares;
        Transfer(address(0), addr, shares);
    }

}
    
    
    """

 #   {shareholders_code}