import re


class Constructor(object):

    def get_params(self):

        res = {
            "name": {
                'type': 'string',
                'name': "Name",
                'desc': 'Name of share (since shares is ERC20 compatible tokens)'
            },
            "abbr": {
                'type': 'string',
                'name': "Decimal",
                'desc': 'Ticker of share (since shares is ERC20 compatible tokens)'
            },
            "date_from": {
                'type': 'date',
                'name': "Date from",
                'desc': 'Ico date from timestamp'
            },
            "date_to": {
                'type': 'date',
                'name': "Date to",
                'desc': 'Ico date to timestamp'
            },
            "rate": {
                'type': 'int',
                'name': "Rate",
                'desc': 'Tokens for 1 ether'
            },
            "hard_cap": {
                'type': 'int',
                'name': "Hard cap",
                'desc': 'In ether'
            },
        }


        return res

    def construct(self, fields):
        errors = {}

        required = ["name", "abbr", "date_from", "date_to", "hard_cap"]
        for param in required:
            if not param in fields:
                errors[param] = 'Field is required'

        if "name" in fields:
            name = fields["name"]
            if not isinstance(name, str) or len(name) < 3 or len(name) > 100 or not re.findall('^[a-zA-Z ]+$', name):
                errors["name"] = 'Name must be string with length from 3 to 100 symbols. Only letters and spaces are allowed'

        if "abbr" in fields:
            abbr = fields["abbr"]
            if not isinstance(abbr, str) or len(abbr) < 3 or len(abbr) > 5 or not re.findall('^[A-Z]+$', abbr):
                errors["name"] = 'Abbr must be string with length from 3 to 5 symbols. Only UPPERCASE letters are allowed'

        if "date_from" in fields:
            date_from = fields["date_from"]
            if not isinstance(date_from, int) or date_from < 1000 or date_from > 1913437946:
                errors[date_from] = 'Date from must be int from 1000 to 1913437946'

        if "date_to" in fields:
            date_to = fields["date_to"]
            if not isinstance(date_to, int) or date_to < 1000 or date_to > 1913437946:
                errors[date_to] = 'Date to must be int from 1000 to 1913437946'

        if "hard_cap" in fields:
            hard_cap = fields["hard_cap"]
            if not isinstance(hard_cap, int) or hard_cap < 10 or hard_cap > 1000000:
                errors[hard_cap] = 'Hard cap  must be int from 10 to 1000000'

        if "rate" in fields:
            rate = fields["rate"]
            if not isinstance(rate, int) or rate < 1 or rate > 100000:
                errors[rate] = 'Rate  must be int from 1 to 100000'

        if errors != {}:
            return {
                "result": "error",
                "errors": errors
            }

        source = self.template\
            .replace('%name%', name) \
            .replace('%abbr%', abbr) \
            .replace('%date_from%', str(date_from))\
            .replace('%date_to%', str(date_to))\
            .replace('%hard_cap%', str(hard_cap))\
            .replace('%rate%', str(rate))

        return source, "ICO"




    template = """
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

/**
 * @title Ownable
 * @dev The Ownable contract has an owner address, and provides basic authorization control
 * functions, this simplifies the implementation of "user permissions".
 */
contract Ownable {
  address public owner;


  event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);


  /**
   * @dev The Ownable constructor sets the original `owner` of the contract to the sender
   * account.
   */
  function Ownable() public {
    owner = msg.sender;
  }


  /**
   * @dev Throws if called by any account other than the owner.
   */
  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }


  /**
   * @dev Allows the current owner to transfer control of the contract to a newOwner.
   * @param newOwner The address to transfer ownership to.
   */
  function transferOwnership(address newOwner) public onlyOwner {
    require(newOwner != address(0));
    OwnershipTransferred(owner, newOwner);
    owner = newOwner;
  }

}


/**
 * @title Mintable token
 * @dev Simple ERC20 Token example, with mintable token creation
 * @dev Issue: * https://github.com/OpenZeppelin/zeppelin-solidity/issues/120
 * Based on code by TokenMarketNet: https://github.com/TokenMarketNet/ico/blob/master/contracts/MintableToken.sol
 */

contract MintableToken is StandardToken, Ownable {
  event Mint(address indexed to, uint256 amount);
  event MintFinished();

  bool public mintingFinished = false;


  modifier canMint() {
    require(!mintingFinished);
    _;
  }

  /**
   * @dev Function to mint tokens
   * @param _to The address that will receive the minted tokens.
   * @param _amount The amount of tokens to mint.
   * @return A boolean that indicates if the operation was successful.
   */
  function mint(address _to, uint256 _amount) onlyOwner canMint public returns (bool) {
    totalSupply = totalSupply.add(_amount);
    balances[_to] = balances[_to].add(_amount);
    Mint(_to, _amount);
    Transfer(address(0), _to, _amount);
    return true;
  }

  /**
   * @dev Function to stop minting new tokens.
   * @return True if the operation was successful.
   */
  function finishMinting() onlyOwner canMint public returns (bool) {
    mintingFinished = true;
    MintFinished();
    return true;
  }
}

contract Token is MintableToken
{
    string public constant name = '%name%';
    string public constant symbol = '%abbr%';
    uint8 public constant decimals = 18;

    function Token() public {
  
    }
    

}

contract ICO is Ownable
{
    using SafeMath for uint256;

    Token public token;
    uint256 public collected;
    uint256 public date_start = %date_from%;
    uint256 public date_end = %date_to%;
    uint256 public hard_cap = %hard_cap% ether;
    uint256 public rate = %rate%;
    
    function ICO() public {
        token = new Token();
    }
    
    function () public payable {
        require(now >= date_start || now <= date_end || collected.add(msg.value)<hard_cap);
        token.mint(msg.sender, msg.value.mul(rate));
        owner.transfer(msg.value);
        collected = collected.add(msg.value);
    
    }

}
    
    
    """

 #   {shareholders_code}