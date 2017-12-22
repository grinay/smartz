import re


class Constructor(object):

    def get_params(self):

        res = {
            "name": {
                'type': 'string',
                'title': "Name",
                'desc': 'Token name (3..100 characters, letters and space only)'
            },
            "symbol": {
                'type': 'string',
                'title': "Symbol",
                'desc': 'Token ticker (3..10 characters, letters only)'
            },

            "is_burnable": {
                'type': 'int',
                'title': "Is burnable",
                'desc': 'is token holders can burn their tokens'
            },


            "date_start": {
                'type': 'datetime',
                'title': "Date start",
                'desc': 'Ico date start'
            },
            "date_end": {
                'type': 'datetime',
                'title': "Date end",
                'desc': 'Ico end date'
            },
            "rate": {
                'type': 'int',
                'title': "Rate",
                'desc': 'Tokens for 1 ether'
            },
            "hard_cap": {
                'type': 'int',
                'title': "Hard cap",
                'desc': 'Hard cap in ether (1..1000000)'
            },
            "funds_address": {
                'type': 'address',
                'title': "Funds address",
                'desc': 'All collected funds will be transferred to this address'
            },
        }


        return res

    def construct(self, fields):
        errors = {}
        #todo universal validation
        required = ["name", "symbol", "is_burnable", "date_start", "date_end", "rate", "hard_cap", "funds_address"]
        for param in required:
            if not param in fields:
                errors[param] = 'Field is required'



        if "name" in fields:
            try:
                name = str(fields["name"])
            except Exception:
                name = ''
            if len(name) < 3 or len(name) > 100 or not re.findall('^[a-zA-Z ]+$', name):
                errors["name"] = 'Name must be string with length from 3 to 100 symbols. Only letters and spaces are allowed'

        if "symbol" in fields:
            try:
                symbol = str(fields["symbol"]).upper()
            except Exception:
                symbol = ''
            if len(symbol) < 3 or len(symbol) > 10 or not re.findall('^[A-Z]+$', symbol):
                errors["symbol"] = 'Symbol must be string with length from 3 to 10 symbols. Only letters are allowed'

        if "is_burnable" in fields:
            try:
                is_burnable = int(fields["is_burnable"])
            except Exception:
                is_burnable = -1
            if is_burnable not in [0, 1]:
                errors["is_burnable"] = 'Is burnable must be 1 or 0'

        #timestamp from front
        if "date_start" in fields:
            try:
                date_start = int(fields["date_start"])
            except Exception:
                date_start = -1
            if date_start < 1000 or date_start > 1913437946:
                errors["date_start"] = 'Insert correct date'
        if "date_end" in fields:
            try:
                date_end = int(fields["date_end"])
            except Exception:
                date_end = -1
            if date_end < 1000 or date_end > 1913437946:
                errors["date_end"] = 'Insert correct date'


        if "rate" in fields:
            try:
                rate = int(fields["rate"])
            except:
                rate = -1
            if rate < 1 or rate > 100000:
                errors["rate"] = 'Rate must be int from 1 to 100000'

        if "hard_cap" in fields:
            try:
                hard_cap = int(fields["hard_cap"])
            except:
                hard_cap = -1
            if hard_cap < 1 or hard_cap > 1000000:
                errors["hard_cap"] = 'Hard cap  must be int from 1 to 1000000'

        if "funds_address" in fields:
            try:
                funds_address = str(fields["funds_address"])
            except Exception:
                funds_address = ''
            if not re.findall('^0x[0-9a-fA-F]{40}$', funds_address):
                errors["funds_address"] = 'Address is invalid'


        if errors != {}:
            return {
                "result": "error",
                "errors": errors
            }

        code_is_burnable = ", BurnableToken"

        source = self.template\
            .replace('%name%', name) \
            .replace('%symbol%', symbol) \
            .replace('%code_is_burnable%', str(code_is_burnable))\
            .replace('%date_start%', str(date_start))\
            .replace('%date_end%', str(date_end))\
            .replace('%hard_cap%', str(hard_cap))\
            .replace('%rate%', str(rate))\
            .replace('%funds_address%', str(funds_address))



        return source, "ICO"

    # language=Solidity
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

/**
 * @title Burnable Token
 * @dev Token that can be irreversibly burned (destroyed).
 */
contract BurnableToken is BasicToken {

    event Burn(address indexed burner, uint256 value);

    /**
     * @dev Burns a specific amount of tokens.
     * @param _value The amount of token to be burned.
     */
    function burn(uint256 _value) public {
        require(_value <= balances[msg.sender]);
        // no need to require value <= totalSupply, since that would imply the
        // sender's balance is greater than the totalSupply, which *should* be an assertion failure

        address burner = msg.sender;
        balances[burner] = balances[burner].sub(_value);
        totalSupply = totalSupply.sub(_value);
        Burn(burner, _value);
    }
}

contract Token is MintableToken %code_is_burnable%
{
    string public constant name = '%name%';
    string public constant symbol = '%symbol%';
    uint8 public constant decimals = 18;

    function Token() public {
  
    }
    

}

contract ICO is Ownable
{
    using SafeMath for uint256;

    Token public token;
    uint256 public collected;
    uint256 public date_start = %date_start%;
    uint256 public date_end = %date_end%;
    uint256 public hard_cap = %hard_cap% ether;
    uint256 public rate = %rate%;
    address public funds_address = %funds_address%;
    
    function ICO() public {
        token = new Token();
    }
    
    function () public payable {
        require(now >= date_start && now <= date_end && collected.add(msg.value)<hard_cap);
        token.mint(msg.sender, msg.value.mul(rate));
        funds_address.transfer(msg.value);
        collected = collected.add(msg.value);
    
    }

}
    
    
    """
