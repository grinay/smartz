
from smartz.api.constructor_engine import ConstructorInstance


class Constructor(ConstructorInstance):

    def get_version(self):
        return {
            "result": "success",
            "blockchain": "eos",
            "version": 2
        }

    def get_params(self):
        json_schema = {
            "type": "object",
            "required": [
                "ticker", "decimals"
            ],
            "additionalProperties": False,

            "properties": {
                "ticker": {
                    "title": "Token ticker",
                    "description": "Only symbols (with length 3-10)",
                    "type": "string",
                    "minLength": 3,
                    "maxLength": 7,
                    "pattern": "^[A-Za-z][a-zA-Z0-9]+$"
                },

                "decimals": {
                    "title": "Decimals",
                    "description": "Decimals",
                    "type": "integer",
                    "min": 1,
                    "max": 8
                },

                "owner": {
                    "title": "Owner",
                    "description": "Account of token owner (12 symbols)",
                    "type": "string",
                    "minLength": 12,
                    "maxLength": 12,
                    "pattern": "^[A-Za-z][a-zA-Z0-9]+$"
                },

            }
        }

        ui_schema = {}

        return {
            "result": "success",
            "schema": json_schema,
            "ui_schema": ui_schema
        }

    def construct(self, fields):
        source = self.__class__._TEMPLATE \
            .replace('%decimals%', str(fields['decimals'])) \
            .replace('%ticker%', fields['ticker']) \
            .replace('%owner_account%', fields['owner'])

        return {
            "result": "success",
            'source': source,
            'contract_name': "simpletoken"
        }

    def post_construct(self, fields, abi_array):

        function_titles = {
            'transfer': {
                'title': 'Transfer',
                'description': 'Transfer tokens',
                'inputs': [
                    {'title': 'From'},
                    {'title': 'To'},
                    {'title': 'Quantity'}
                ]
            },

            'issue': {
                'title': 'Issue',
                'description': 'Issue new tokens',
                'inputs': [
                    {'title': 'To'},
                    {'title': 'Quantity'}
                ]
            },

            'totalSupply': {
                'title': 'Total supply',
            },
        }

        return {
            "result": "success",
            'function_specs': function_titles,
            'dashboard_functions': ['totalSupply']
        }


    # language=Solidity
    _TEMPLATE = """
#include <eosiolib/eosio.hpp>
#include <eosiolib/asset.hpp>

static constexpr uint64_t token_symbol = S(%decimals%, %ticker%); // precision, symbol

using eosio::asset;

class simpletoken : public eosio::contract {
   public:
      simpletoken(account_name self )
      :contract(self /*"%owner_account%"*/),_accounts( _self, _self){}

      // @abi action
      void transfer( account_name from, account_name to, asset quantity ) {
         require_auth( from );
         eosio_assert( quantity.symbol == token_symbol, "wrong symbol" );

         const auto& fromacnt = _accounts.get( from );
         eosio_assert( fromacnt.balance >= quantity, "overdrawn balance" );
         _accounts.modify( fromacnt, from, [&]( auto& a ){ a.balance -= quantity; } );

         add_balance( from, to, quantity );
      }

      // @abi action
      void issue( account_name to, asset quantity ) {
         require_auth( _self );
         eosio_assert( quantity.symbol == token_symbol, "wrong symbol" );

         add_balance( _self, to, quantity );
         _totalSupply += quantity;
      }
      
      // @abi action
      asset totalSupply() {
        return _totalSupply;
      }

   private:
      // @abi table
      struct account {
         account_name owner;
         eosio::asset balance;

         uint64_t primary_key()const { return owner; }
      };

      eosio::multi_index<N(account), account> _accounts;
      asset _totalSupply;

      void add_balance( account_name payer, account_name to, asset q ) {
         auto toitr = _accounts.find( to );
         if( toitr == _accounts.end() ) {
           _accounts.emplace( payer, [&]( auto& a ) {
              a.owner = to;
              a.balance = q;
           });
         } else {
           _accounts.modify( toitr, 0, [&]( auto& a ) {
              a.balance += q;
              eosio_assert( a.balance >= q, "overflow detected" );
           });
         }
      }
};

EOSIO_ABI( simpletoken, (transfer)(issue)/*(totalSupply)*/ )

    """
