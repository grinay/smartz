export const r = `(module
    (type $FUNCSIG$vijj(func(param i32 i64 i64)))
    (type $FUNCSIG$vijiii(func(param i32 i64 i32 i32 i32)))
    (type $FUNCSIG$viji(func(param i32 i64 i32)))
    (type $FUNCSIG$v(func))
    (type $FUNCSIG$vjj(func(param i64 i64)))
    (type $FUNCSIG$vi(func(param i32)))
    (type $FUNCSIG$i(func(result i32)))
    (type $FUNCSIG$iii(func(param i32 i32)(result i32)))
    (type $FUNCSIG$vii(func(param i32 i32)))
    (type $FUNCSIG$iiii(func(param i32 i32 i32)(result i32)))
    (type $FUNCSIG$ijjjj(func(param i64 i64 i64 i64)(result i32)))
    (type $FUNCSIG$j(func(result i64)))
    (type $FUNCSIG$ijjjjii(func(param i64 i64 i64 i64 i32 i32)(result i32)))
    (type $FUNCSIG$ijjj(func(param i64 i64 i64)(result i32)))
    (type $FUNCSIG$vijii(func(param i32 i64 i32 i32)))
    (type $FUNCSIG$vj(func(param i64)))
    (import "env" "abort"(func $abort))
(import "env" "action_data_size"(func $action_data_size(result i32)))
(import "env" "current_receiver"(func $current_receiver(result i64)))
(import "env" "db_end_i64"(func $db_end_i64(param i64 i64 i64)(result i32)))
(import "env" "db_find_i64"(func $db_find_i64(param i64 i64 i64 i64)(result i32)))
(import "env" "db_get_i64"(func $db_get_i64(param i32 i32 i32)(result i32)))
(import "env" "db_lowerbound_i64"(func $db_lowerbound_i64(param i64 i64 i64 i64)(result i32)))
(import "env" "db_previous_i64"(func $db_previous_i64(param i32 i32)(result i32)))
(import "env" "db_store_i64"(func $db_store_i64(param i64 i64 i64 i64 i32 i32)(result i32)))
(import "env" "db_update_i64"(func $db_update_i64(param i32 i64 i32 i32)))
(import "env" "eosio_assert"(func $eosio_assert(param i32 i32)))
(import "env" "eosio_exit"(func $eosio_exit(param i32)))
(import "env" "memcpy"(func $memcpy(param i32 i32 i32)(result i32)))
(import "env" "memmove"(func $memmove(param i32 i32 i32)(result i32)))
(import "env" "read_action_data"(func $read_action_data(param i32 i32)(result i32)))
(import "env" "require_auth"(func $require_auth(param i64)))
(import "env" "require_auth2"(func $require_auth2(param i64 i64)))
(table 4 4 anyfunc)
(elem(i32.const 0) $__wasm_nullptr $_ZN5slant8addtopicEN5eosio4nameENSt3__112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE $_ZN5slant11removetopicEN5eosio4nameEy $_ZN5slant8castvoteEyNSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEhS6_)
(memory $0 1)
(data(i32.const 4) "\\c0c\\00\\00")
(data(i32.const 16) "read\\00")
(data(i32.const 32) "get\\00")
(data(i32.const 48) "object passed to iterator_to is not in multi_index\\00")
(data(i32.const 112) "Invalid topic id\\00")
(data(i32.const 144) "cannot pass end iterator to modify\\00")
(data(i32.const 192) "cannot create objects in table of another contract\\00")
(data(i32.const 256) "write\\00")
(data(i32.const 272) "next primary key in table is at autoincrement limit\\00")
(data(i32.const 336) "cannot decrement end iterator when the table is empty\\00")
(data(i32.const 400) "cannot decrement iterator at beginning of table\\00")
(data(i32.const 448) "error reading iterator\\00")
(data(i32.const 480) "object passed to modify is not in multi_index\\00")
(data(i32.const 528) "cannot modify objects in table of another contract\\00")
(data(i32.const 592) "updater cannot change primary key when modifying an object\\00")
(data(i32.const 9056) "malloc_from_freed was designed to only be called after _heap was completely allocated\\00")
(export "memory"(memory $0))
(export "_ZeqRK11checksum256S1_"(func $_ZeqRK11checksum256S1_))
(export "_ZN5eosio12require_authERKNS_16permission_levelE"(func $_ZN5eosio12require_authERKNS_16permission_levelE))
(export "apply"(func $apply))
(export "memcmp"(func $memcmp))
(export "malloc"(func $malloc))
(export "free"(func $free))
(func $_ZeqRK11checksum256S1_(param $0 i32)(param $1 i32)(result i32)
    (i32.eqz
        (call $memcmp
            (get_local $0)
            (get_local $1)
            (i32.const 32)
        )
    )
 )
(func $_ZN5eosio12require_authERKNS_16permission_levelE(param $0 i32)
    (call $require_auth2
        (i64.load
            (get_local $0)
        )
        (i64.load offset = 8
            (get_local $0)
        )
    )
 )
(func $apply(param $0 i64)(param $1 i64)(param $2 i64)
    (local $3 i32)
    (i32.store offset = 4
        (i32.const 0)
        (tee_local $3
            (i32.sub
                (i32.load offset = 4
                    (i32.const 0)
                )
                (i32.const 144)
            )
        )
    )
    (block $label$0
        (block $label$1
            (br_if $label$1
                (i64.ne
                    (get_local $1)
                    (get_local $0)
                )
            )
            (i64.store
                (i32.add
                    (get_local $3)
                    (i32.const 72)
                )
                (get_local $1)
            )
            (i64.store
                (i32.add
                    (get_local $3)
                    (i32.const 80)
                )
                (i64.const - 1)
            )
            (i64.store
                (i32.add
                    (get_local $3)
                    (i32.const 88)
                )
                (i64.const 0)
            )
            (i32.store
                (i32.add
                    (get_local $3)
                    (i32.const 96)
                )
                (i32.const 0)
            )
            (i64.store offset = 64
                (get_local $3)
                (get_local $1)
            )
            (i64.store offset = 56
                (get_local $3)
                (get_local $1)
            )
            (i64.store offset = 104
                (get_local $3)
                (get_local $1)
            )
            (i64.store
                (i32.add
                    (get_local $3)
                    (i32.const 112)
                )
                (get_local $1)
            )
            (i64.store
                (i32.add
                    (get_local $3)
                    (i32.const 120)
                )
                (i64.const - 1)
            )
            (i32.store
                (i32.add
                    (get_local $3)
                    (i32.const 128)
                )
                (i32.const 0)
            )
            (i32.store
                (i32.add
                    (get_local $3)
                    (i32.const 132)
                )
                (i32.const 0)
            )
            (i32.store
                (i32.add
                    (get_local $3)
                    (i32.const 136)
                )
                (i32.const 0)
            )
            (block $label$2
                (block $label$3
                    (block $label$4
                        (br_if $label$4
                            (i64.eq
                                (get_local $2)
                                (i64.const - 4997502813779292160)
                            )
                        )
                        (br_if $label$3
                            (i64.eq
                                (get_local $2)
                                (i64.const 4733738213611405312)
                            )
                        )
                        (br_if $label$0
                            (i64.ne
                                (get_local $2)
                                (i64.const 3626411818181722112)
                            )
                        )
                        (i32.store offset = 52
                            (get_local $3)
                            (i32.const 0)
                        )
                        (i32.store offset = 48
                            (get_local $3)
                            (i32.const 1)
                        )
                        (i64.store offset = 8 align = 4
                            (get_local $3)
                            (i64.load offset = 48
                                (get_local $3)
                            )
                        )
                        (drop
                            (call $_ZN5eosio14execute_actionI5slantS1_JNS_4nameENSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEEEEbPT_MT0_FvDpT1_E
                                (i32.add
                                    (get_local $3)
                                    (i32.const 56)
                                )
                                (i32.add
                                    (get_local $3)
                                    (i32.const 8)
                                )
                            )
                        )
                        (br $label$2)
                    )
                    (i32.store offset = 44
                        (get_local $3)
                        (i32.const 0)
                    )
                    (i32.store offset = 40
                        (get_local $3)
                        (i32.const 2)
                    )
                    (i64.store offset = 16 align = 4
                        (get_local $3)
                        (i64.load offset = 40
                            (get_local $3)
                        )
                    )
                    (drop
                        (call $_ZN5eosio14execute_actionI5slantS1_JNS_4nameEyEEEbPT_MT0_FvDpT1_E
                            (i32.add
                                (get_local $3)
                                (i32.const 56)
                            )
                            (i32.add
                                (get_local $3)
                                (i32.const 16)
                            )
                        )
                    )
                    (br $label$2)
                )
                (i32.store offset = 36
                    (get_local $3)
                    (i32.const 0)
                )
                (i32.store offset = 32
                    (get_local $3)
                    (i32.const 3)
                )
                (i64.store offset = 24 align = 4
                    (get_local $3)
                    (i64.load offset = 32
                        (get_local $3)
                    )
                )
                (drop
                    (call $_ZN5eosio14execute_actionI5slantS1_JyNSt3__112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEhS8_EEEbPT_MT0_FvDpT1_E
                        (i32.add
                            (get_local $3)
                            (i32.const 56)
                        )
                        (i32.add
                            (get_local $3)
                            (i32.const 24)
                        )
                    )
                )
            )
            (drop
                (call $_ZN5slantD2Ev
                    (i32.add
                        (get_local $3)
                        (i32.const 56)
                    )
                )
            )
        )
        (i32.store offset = 4
            (i32.const 0)
            (i32.add
                (get_local $3)
                (i32.const 144)
            )
        )
        (return)
  )
(call $eosio_exit
    (i32.const 0)
  )
(unreachable)
 )
(func $_ZN5slant8addtopicEN5eosio4nameENSt3__112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE(type $FUNCSIG$viji)(param $0 i32)(param $1 i64)(param $2 i32)
    (local $3 i64)
    (local $4 i32)
    (i32.store offset = 4
        (i32.const 0)
        (tee_local $4
            (i32.sub
                (i32.load offset = 4
                    (i32.const 0)
                )
                (i32.const 16)
            )
        )
    )
    (call $require_auth
        (i64.load
            (get_local $0)
        )
    )
    (set_local $3
        (i64.load
            (get_local $0)
        )
    )
    (i32.store offset = 4
        (get_local $4)
        (get_local $2)
    )
    (i32.store
        (get_local $4)
        (get_local $0)
    )
    (call $_ZN5eosio11multi_indexILy14783879415448207360EN5slant5topicEJEE7emplaceIZNS1_8addtopicENS_4nameENSt3__112basic_stringIcNS6_11char_traitsIcEENS6_9allocatorIcEEEEEUlRT_E_EENS3_14const_iteratorEyOSD_
        (i32.add
            (get_local $4)
            (i32.const 8)
        )
        (i32.add
            (get_local $0)
            (i32.const 8)
        )
        (get_local $3)
        (get_local $4)
    )
    (i32.store offset = 4
        (i32.const 0)
        (i32.add
            (get_local $4)
            (i32.const 16)
        )
    )
 )
(func $_ZN5eosio14execute_actionI5slantS1_JNS_4nameENSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEEEEbPT_MT0_FvDpT1_E(param $0 i32)(param $1 i32)(result i32)
    (local $2 i32)
    (local $3 i32)
    (i32.store offset = 4
        (i32.const 0)
        (tee_local $3
            (i32.sub
                (i32.load offset = 4
                    (i32.const 0)
                )
                (i32.const 64)
            )
        )
    )
    (i32.store offset = 44
        (tee_local $2
            (get_local $3)
        )
        (get_local $0)
    )
    (i32.store offset = 32
        (get_local $2)
        (i32.load
            (get_local $1)
        )
    )
    (i32.store offset = 36
        (get_local $2)
        (i32.load offset = 4
            (get_local $1)
        )
    )
    (block $label$0
        (block $label$1
            (br_if $label$1
                (i32.lt_u
                    (tee_local $0
                        (call $action_data_size)
                    )
                    (i32.const 513)
                )
            )
            (set_local $1
                (call $malloc
                    (get_local $0)
                )
            )
            (br $label$0)
        )
        (i32.store offset = 4
            (i32.const 0)
            (tee_local $1
                (i32.sub
                    (get_local $3)
                    (i32.and
                        (i32.add
                            (get_local $0)
                            (i32.const 15)
                        )
                        (i32.const - 16)
                    )
                )
            )
        )
    )
    (drop
        (call $read_action_data
            (get_local $1)
            (get_local $0)
        )
    )
    (i32.store
        (i32.add
            (get_local $2)
            (i32.const 24)
        )
        (i32.const 0)
    )
    (i64.store offset = 8
        (get_local $2)
        (i64.const 0)
    )
    (i64.store offset = 16
        (get_local $2)
        (i64.const 0)
    )
    (i32.store offset = 56
        (get_local $2)
        (i32.add
            (get_local $1)
            (get_local $0)
        )
    )
    (i32.store offset = 48
        (get_local $2)
        (get_local $1)
    )
    (call $eosio_assert
        (i32.gt_u
            (get_local $0)
            (i32.const 7)
        )
        (i32.const 16)
    )
    (drop
        (call $memcpy
            (i32.add
                (get_local $2)
                (i32.const 8)
            )
            (get_local $1)
            (i32.const 8)
        )
    )
    (i32.store offset = 52
        (get_local $2)
        (i32.add
            (get_local $1)
            (i32.const 8)
        )
    )
    (drop
        (call $_ZN5eosiorsINS_10datastreamIPKcEEEERT_S6_RNSt3__112basic_stringIcNS7_11char_traitsIcEENS7_9allocatorIcEEEE
            (i32.add
                (get_local $2)
                (i32.const 48)
            )
            (i32.add
                (i32.add
                    (get_local $2)
                    (i32.const 8)
                )
                (i32.const 8)
            )
        )
    )
    (block $label$2
        (br_if $label$2
            (i32.lt_u
                (get_local $0)
                (i32.const 513)
            )
        )
        (call $free
            (get_local $1)
        )
    )
    (i32.store offset = 52
        (get_local $2)
        (i32.add
            (get_local $2)
            (i32.const 32)
        )
    )
    (i32.store offset = 48
        (get_local $2)
        (i32.add
            (get_local $2)
            (i32.const 44)
        )
    )
    (call $_ZN5boost4mp116detail16tuple_apply_implIRZN5eosio14execute_actionI5slantS5_JNS3_4nameENSt3__112basic_stringIcNS7_11char_traitsIcEENS7_9allocatorIcEEEEEEEbPT_MT0_FvDpT1_EEUlDpT_E_RNS7_5tupleIJS6_SD_EEEJLj0ELj1EEEEDTclclsr3stdE7forwardISE_Efp_Espclsr3stdE3getIXT1_EEclsr3stdE7forwardISG_Efp0_EEEEOSE_OSG_NS0_16integer_sequenceIjJXspT1_EEEE
        (i32.add
            (get_local $2)
            (i32.const 48)
        )
        (i32.add
            (get_local $2)
            (i32.const 8)
        )
    )
    (block $label$3
        (br_if $label$3
            (i32.eqz
                (i32.and
                    (i32.load8_u offset = 16
                        (get_local $2)
                    )
                    (i32.const 1)
                )
            )
        )
        (call $_ZdlPv
            (i32.load
                (i32.add
                    (get_local $2)
                    (i32.const 24)
                )
            )
        )
    )
    (i32.store offset = 4
        (i32.const 0)
        (i32.add
            (get_local $2)
            (i32.const 64)
        )
    )
    (i32.const 1)
 )
(func $_ZN5slant11removetopicEN5eosio4nameEy(type $FUNCSIG$vijj)(param $0 i32)(param $1 i64)(param $2 i64)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (i32.store offset = 4
        (i32.const 0)
        (tee_local $8
            (i32.sub
                (i32.load offset = 4
                    (i32.const 0)
                )
                (i32.const 16)
            )
        )
    )
    (call $require_auth
        (i64.load
            (get_local $0)
        )
    )
    (block $label$0
        (br_if $label$0
            (i32.eq
                (tee_local $7
                    (i32.load
                        (i32.add
                            (get_local $0)
                            (i32.const 36)
                        )
                    )
                )
                (tee_local $3
                    (i32.load
                        (i32.add
                            (get_local $0)
                            (i32.const 32)
                        )
                    )
                )
            )
        )
        (set_local $6
            (i32.add
                (get_local $7)
                (i32.const - 24)
            )
        )
        (set_local $4
            (i32.sub
                (i32.const 0)
                (get_local $3)
            )
        )
        (loop $label$1
            (br_if $label$0
                (i64.eq
                    (i64.load
                        (i32.load
                            (get_local $6)
                        )
                    )
                    (get_local $2)
                )
            )
            (set_local $7
                (get_local $6)
            )
            (set_local $6
                (tee_local $5
                    (i32.add
                        (get_local $6)
                        (i32.const - 24)
                    )
                )
            )
            (br_if $label$1
                (i32.ne
                    (i32.add
                        (get_local $5)
                        (get_local $4)
                    )
                    (i32.const - 24)
                )
            )
        )
    )
    (set_local $5
        (i32.add
            (get_local $0)
            (i32.const 8)
        )
    )
    (block $label$2
        (block $label$3
            (br_if $label$3
                (i32.eq
                    (get_local $7)
                    (get_local $3)
                )
            )
            (call $eosio_assert
                (i32.eq
                    (i32.load
                        (i32.add
                            (tee_local $6
                                (i32.load
                                    (i32.add
                                        (get_local $7)
                                        (i32.const - 24)
                                    )
                                )
                            )
                            (i32.const 44)
                        )
                    )
                    (get_local $5)
                )
                (i32.const 48)
            )
            (br $label$2)
        )
        (set_local $6
            (i32.const 0)
        )
        (br_if $label$2
            (i32.lt_s
                (tee_local $7
                    (call $db_find_i64
                        (i64.load
                            (i32.add
                                (get_local $0)
                                (i32.const 8)
                            )
                        )
                        (i64.load
                            (i32.add
                                (get_local $0)
                                (i32.const 16)
                            )
                        )
                        (i64.const - 3662864658261344256)
                        (get_local $2)
                    )
                )
                (i32.const 0)
            )
        )
        (call $eosio_assert
            (i32.eq
                (i32.load offset = 44
                    (tee_local $6
                        (call $_ZNK5eosio11multi_indexILy14783879415448207360EN5slant5topicEJEE31load_object_by_primary_iteratorEl
                            (get_local $5)
                            (get_local $7)
                        )
                    )
                )
                (get_local $5)
            )
            (i32.const 48)
        )
    )
    (call $eosio_assert
        (tee_local $7
            (i32.ne
                (get_local $6)
                (i32.const 0)
            )
        )
        (i32.const 112)
    )
    (call $eosio_assert
        (get_local $7)
        (i32.const 144)
    )
    (call $_ZN5eosio11multi_indexILy14783879415448207360EN5slant5topicEJEE6modifyIZNS1_11removetopicENS_4nameEyEUlRT_E_EEvRKS2_yOS6_
        (get_local $5)
        (get_local $6)
        (i64.const 0)
        (i32.add
            (get_local $8)
            (i32.const 8)
        )
    )
    (i32.store offset = 4
        (i32.const 0)
        (i32.add
            (get_local $8)
            (i32.const 16)
        )
    )
 )
(func $_ZN5eosio14execute_actionI5slantS1_JNS_4nameEyEEEbPT_MT0_FvDpT1_E(param $0 i32)(param $1 i32)(result i32)
    (local $2 i32)
    (local $3 i64)
    (local $4 i64)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (set_local $8
        (tee_local $6
            (i32.sub
                (i32.load offset = 4
                    (i32.const 0)
                )
                (i32.const 16)
            )
        )
    )
    (i32.store offset = 4
        (i32.const 0)
        (get_local $6)
    )
    (set_local $2
        (i32.load offset = 4
            (get_local $1)
        )
    )
    (set_local $7
        (i32.load
            (get_local $1)
        )
    )
    (block $label$0
        (block $label$1
            (br_if $label$1
                (i32.lt_u
                    (tee_local $1
                        (call $action_data_size)
                    )
                    (i32.const 513)
                )
            )
            (set_local $6
                (call $malloc
                    (get_local $1)
                )
            )
            (br $label$0)
        )
        (i32.store offset = 4
            (i32.const 0)
            (tee_local $6
                (i32.sub
                    (get_local $6)
                    (i32.and
                        (i32.add
                            (get_local $1)
                            (i32.const 15)
                        )
                        (i32.const - 16)
                    )
                )
            )
        )
    )
    (drop
        (call $read_action_data
            (get_local $6)
            (get_local $1)
        )
    )
    (i64.store offset = 8
        (get_local $8)
        (i64.const 0)
    )
    (i64.store
        (get_local $8)
        (i64.const 0)
    )
    (call $eosio_assert
        (i32.gt_u
            (get_local $1)
            (i32.const 7)
        )
        (i32.const 16)
    )
    (drop
        (call $memcpy
            (get_local $8)
            (get_local $6)
            (i32.const 8)
        )
    )
    (call $eosio_assert
        (i32.ne
            (i32.and
                (get_local $1)
                (i32.const - 8)
            )
            (i32.const 8)
        )
        (i32.const 16)
    )
    (drop
        (call $memcpy
            (tee_local $5
                (i32.add
                    (get_local $8)
                    (i32.const 8)
                )
            )
            (i32.add
                (get_local $6)
                (i32.const 8)
            )
            (i32.const 8)
        )
    )
    (block $label$2
        (br_if $label$2
            (i32.lt_u
                (get_local $1)
                (i32.const 513)
            )
        )
        (call $free
            (get_local $6)
        )
    )
    (set_local $1
        (i32.add
            (get_local $0)
            (i32.shr_s
                (get_local $2)
                (i32.const 1)
            )
        )
    )
    (set_local $4
        (i64.load
            (get_local $5)
        )
    )
    (set_local $3
        (i64.load
            (get_local $8)
        )
    )
    (block $label$3
        (br_if $label$3
            (i32.eqz
                (i32.and
                    (get_local $2)
                    (i32.const 1)
                )
            )
        )
        (set_local $7
            (i32.load
                (i32.add
                    (i32.load
                        (get_local $1)
                    )
                    (get_local $7)
                )
            )
        )
    )
    (call_indirect $FUNCSIG$vijj
        (get_local $1)
        (get_local $3)
        (get_local $4)
        (get_local $7)
    )
    (i32.store offset = 4
        (i32.const 0)
        (i32.add
            (get_local $8)
            (i32.const 16)
        )
    )
    (i32.const 1)
 )
(func $_ZN5slant8castvoteEyNSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEhS6_(type $FUNCSIG$vijiii)(param $0 i32)(param $1 i64)(param $2 i32)(param $3 i32)(param $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (local $9 i32)
    (i32.store offset = 4
        (i32.const 0)
        (tee_local $9
            (i32.sub
                (i32.load offset = 4
                    (i32.const 0)
                )
                (i32.const 48)
            )
        )
    )
    (i64.store offset = 40
        (get_local $9)
        (get_local $1)
    )
    (i32.store8 offset = 39
        (get_local $9)
        (get_local $3)
    )
    (block $label$0
        (br_if $label$0
            (i32.eq
                (tee_local $8
                    (i32.load
                        (i32.add
                            (get_local $0)
                            (i32.const 36)
                        )
                    )
                )
                (tee_local $5
                    (i32.load
                        (i32.add
                            (get_local $0)
                            (i32.const 32)
                        )
                    )
                )
            )
        )
        (set_local $3
            (i32.add
                (get_local $8)
                (i32.const - 24)
            )
        )
        (set_local $6
            (i32.sub
                (i32.const 0)
                (get_local $5)
            )
        )
        (loop $label$1
            (br_if $label$0
                (i64.eq
                    (i64.load
                        (i32.load
                            (get_local $3)
                        )
                    )
                    (get_local $1)
                )
            )
            (set_local $8
                (get_local $3)
            )
            (set_local $3
                (tee_local $7
                    (i32.add
                        (get_local $3)
                        (i32.const - 24)
                    )
                )
            )
            (br_if $label$1
                (i32.ne
                    (i32.add
                        (get_local $7)
                        (get_local $6)
                    )
                    (i32.const - 24)
                )
            )
        )
    )
    (set_local $7
        (i32.add
            (get_local $0)
            (i32.const 8)
        )
    )
    (block $label$2
        (block $label$3
            (br_if $label$3
                (i32.eq
                    (get_local $8)
                    (get_local $5)
                )
            )
            (call $eosio_assert
                (i32.eq
                    (i32.load
                        (i32.add
                            (tee_local $3
                                (i32.load
                                    (i32.add
                                        (get_local $8)
                                        (i32.const - 24)
                                    )
                                )
                            )
                            (i32.const 44)
                        )
                    )
                    (get_local $7)
                )
                (i32.const 48)
            )
            (br $label$2)
        )
        (set_local $3
            (i32.const 0)
        )
        (br_if $label$2
            (i32.lt_s
                (tee_local $8
                    (call $db_find_i64
                        (i64.load
                            (i32.add
                                (get_local $0)
                                (i32.const 8)
                            )
                        )
                        (i64.load
                            (i32.add
                                (get_local $0)
                                (i32.const 16)
                            )
                        )
                        (i64.const - 3662864658261344256)
                        (get_local $1)
                    )
                )
                (i32.const 0)
            )
        )
        (call $eosio_assert
            (i32.eq
                (i32.load offset = 44
                    (tee_local $3
                        (call $_ZNK5eosio11multi_indexILy14783879415448207360EN5slant5topicEJEE31load_object_by_primary_iteratorEl
                            (get_local $7)
                            (get_local $8)
                        )
                    )
                )
                (get_local $7)
            )
            (i32.const 48)
        )
    )
    (call $eosio_assert
        (tee_local $8
            (i32.ne
                (get_local $3)
                (i32.const 0)
            )
        )
        (i32.const 112)
    )
    (i32.store
        (get_local $9)
        (i32.add
            (get_local $9)
            (i32.const 39)
        )
    )
    (call $eosio_assert
        (get_local $8)
        (i32.const 144)
    )
    (call $_ZN5eosio11multi_indexILy14783879415448207360EN5slant5topicEJEE6modifyIZNS1_8castvoteEyNSt3__112basic_stringIcNS5_11char_traitsIcEENS5_9allocatorIcEEEEhSB_EUlRT_E_EEvRKS2_yOSC_
        (get_local $7)
        (get_local $3)
        (i64.const 0)
        (get_local $9)
    )
    (set_local $1
        (i64.load
            (get_local $0)
        )
    )
    (i32.store
        (get_local $9)
        (get_local $0)
    )
    (i32.store offset = 8
        (get_local $9)
        (get_local $2)
    )
    (i32.store offset = 16
        (get_local $9)
        (get_local $4)
    )
    (i32.store offset = 4
        (get_local $9)
        (i32.add
            (get_local $9)
            (i32.const 40)
        )
    )
    (i32.store offset = 12
        (get_local $9)
        (i32.add
            (get_local $9)
            (i32.const 39)
        )
    )
    (call $_ZN5eosio11multi_indexILy15938977953078050816EN5slant4voteEJEE7emplaceIZNS1_8castvoteEyNSt3__112basic_stringIcNS5_11char_traitsIcEENS5_9allocatorIcEEEEhSB_EUlRT_E0_EENS3_14const_iteratorEyOSC_
        (i32.add
            (get_local $9)
            (i32.const 24)
        )
        (i32.add
            (get_local $0)
            (i32.const 48)
        )
        (get_local $1)
        (get_local $9)
    )
    (i32.store offset = 4
        (i32.const 0)
        (i32.add
            (get_local $9)
            (i32.const 48)
        )
    )
 )
(func $_ZN5eosio14execute_actionI5slantS1_JyNSt3__112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEhS8_EEEbPT_MT0_FvDpT1_E(param $0 i32)(param $1 i32)(result i32)
    (local $2 i32)
    (local $3 i32)
    (i32.store offset = 4
        (i32.const 0)
        (tee_local $3
            (i32.sub
                (i32.load offset = 4
                    (i32.const 0)
                )
                (i32.const 80)
            )
        )
    )
    (i32.store offset = 60
        (tee_local $2
            (get_local $3)
        )
        (get_local $0)
    )
    (i32.store offset = 48
        (get_local $2)
        (i32.load
            (get_local $1)
        )
    )
    (i32.store offset = 52
        (get_local $2)
        (i32.load offset = 4
            (get_local $1)
        )
    )
    (block $label$0
        (block $label$1
            (br_if $label$1
                (i32.lt_u
                    (tee_local $0
                        (call $action_data_size)
                    )
                    (i32.const 513)
                )
            )
            (set_local $1
                (call $malloc
                    (get_local $0)
                )
            )
            (br $label$0)
        )
        (i32.store offset = 4
            (i32.const 0)
            (tee_local $1
                (i32.sub
                    (get_local $3)
                    (i32.and
                        (i32.add
                            (get_local $0)
                            (i32.const 15)
                        )
                        (i32.const - 16)
                    )
                )
            )
        )
    )
    (drop
        (call $read_action_data
            (get_local $1)
            (get_local $0)
        )
    )
    (i32.store
        (i32.add
            (get_local $2)
            (i32.const 24)
        )
        (i32.const 0)
    )
    (i32.store
        (i32.add
            (get_local $2)
            (i32.const 36)
        )
        (i32.const 0)
    )
    (i64.store offset = 8
        (get_local $2)
        (i64.const 0)
    )
    (i64.store offset = 16
        (get_local $2)
        (i64.const 0)
    )
    (i32.store8 offset = 28
        (get_local $2)
        (i32.const 0)
    )
    (i32.store offset = 32
        (get_local $2)
        (i32.const 0)
    )
    (i32.store
        (i32.add
            (get_local $2)
            (i32.const 40)
        )
        (i32.const 0)
    )
    (i32.store offset = 72
        (get_local $2)
        (i32.add
            (get_local $1)
            (get_local $0)
        )
    )
    (i32.store offset = 64
        (get_local $2)
        (get_local $1)
    )
    (call $eosio_assert
        (i32.gt_u
            (get_local $0)
            (i32.const 7)
        )
        (i32.const 16)
    )
    (drop
        (call $memcpy
            (i32.add
                (get_local $2)
                (i32.const 8)
            )
            (get_local $1)
            (i32.const 8)
        )
    )
    (i32.store offset = 68
        (get_local $2)
        (i32.add
            (get_local $1)
            (i32.const 8)
        )
    )
    (drop
        (call $_ZN5eosiorsINS_10datastreamIPKcEEEERT_S6_RNSt3__112basic_stringIcNS7_11char_traitsIcEENS7_9allocatorIcEEEE
            (i32.add
                (get_local $2)
                (i32.const 64)
            )
            (i32.add
                (i32.add
                    (get_local $2)
                    (i32.const 8)
                )
                (i32.const 8)
            )
        )
    )
    (call $eosio_assert
        (i32.ne
            (i32.load offset = 72
                (get_local $2)
            )
            (i32.load offset = 68
                (get_local $2)
            )
        )
        (i32.const 16)
    )
    (drop
        (call $memcpy
            (i32.add
                (get_local $2)
                (i32.const 28)
            )
            (i32.load offset = 68
                (get_local $2)
            )
            (i32.const 1)
        )
    )
    (i32.store offset = 68
        (get_local $2)
        (i32.add
            (i32.load offset = 68
                (get_local $2)
            )
            (i32.const 1)
        )
    )
    (drop
        (call $_ZN5eosiorsINS_10datastreamIPKcEEEERT_S6_RNSt3__112basic_stringIcNS7_11char_traitsIcEENS7_9allocatorIcEEEE
            (i32.add
                (get_local $2)
                (i32.const 64)
            )
            (i32.add
                (get_local $2)
                (i32.const 32)
            )
        )
    )
    (block $label$2
        (br_if $label$2
            (i32.lt_u
                (get_local $0)
                (i32.const 513)
            )
        )
        (call $free
            (get_local $1)
        )
    )
    (i32.store offset = 68
        (get_local $2)
        (i32.add
            (get_local $2)
            (i32.const 48)
        )
    )
    (i32.store offset = 64
        (get_local $2)
        (i32.add
            (get_local $2)
            (i32.const 60)
        )
    )
    (call $_ZN5boost4mp116detail16tuple_apply_implIRZN5eosio14execute_actionI5slantS5_JyNSt3__112basic_stringIcNS6_11char_traitsIcEENS6_9allocatorIcEEEEhSC_EEEbPT_MT0_FvDpT1_EEUlDpT_E_RNS6_5tupleIJySC_hSC_EEEJLj0ELj1ELj2ELj3EEEEDTclclsr3stdE7forwardISD_Efp_Espclsr3stdE3getIXT1_EEclsr3stdE7forwardISF_Efp0_EEEEOSD_OSF_NS0_16integer_sequenceIjJXspT1_EEEE
        (i32.add
            (get_local $2)
            (i32.const 64)
        )
        (i32.add
            (get_local $2)
            (i32.const 8)
        )
    )
    (block $label$3
        (br_if $label$3
            (i32.eqz
                (i32.and
                    (i32.load8_u offset = 32
                        (get_local $2)
                    )
                    (i32.const 1)
                )
            )
        )
        (call $_ZdlPv
            (i32.load
                (i32.add
                    (get_local $2)
                    (i32.const 40)
                )
            )
        )
    )
    (block $label$4
        (br_if $label$4
            (i32.eqz
                (i32.and
                    (i32.load8_u offset = 16
                        (get_local $2)
                    )
                    (i32.const 1)
                )
            )
        )
        (call $_ZdlPv
            (i32.load
                (i32.add
                    (get_local $2)
                    (i32.const 24)
                )
            )
        )
    )
    (i32.store offset = 4
        (i32.const 0)
        (i32.add
            (get_local $2)
            (i32.const 80)
        )
    )
    (i32.const 1)
 )
(func $_ZN5slantD2Ev(param $0 i32)(result i32)
    (local $1 i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (block $label$0
        (br_if $label$0
            (i32.eqz
                (tee_local $1
                    (i32.load
                        (i32.add
                            (get_local $0)
                            (i32.const 72)
                        )
                    )
                )
            )
        )
        (block $label$1
            (block $label$2
                (br_if $label$2
                    (i32.eq
                        (tee_local $4
                            (i32.load
                                (tee_local $3
                                    (i32.add
                                        (get_local $0)
                                        (i32.const 76)
                                    )
                                )
                            )
                        )
                        (get_local $1)
                    )
                )
                (loop $label$3
                    (set_local $2
                        (i32.load
                            (tee_local $4
                                (i32.add
                                    (get_local $4)
                                    (i32.const - 24)
                                )
                            )
                        )
                    )
                    (i32.store
                        (get_local $4)
                        (i32.const 0)
                    )
                    (block $label$4
                        (br_if $label$4
                            (i32.eqz
                                (get_local $2)
                            )
                        )
                        (block $label$5
                            (br_if $label$5
                                (i32.eqz
                                    (i32.and
                                        (i32.load8_u offset = 32
                                            (get_local $2)
                                        )
                                        (i32.const 1)
                                    )
                                )
                            )
                            (call $_ZdlPv
                                (i32.load
                                    (i32.add
                                        (get_local $2)
                                        (i32.const 40)
                                    )
                                )
                            )
                        )
                        (block $label$6
                            (br_if $label$6
                                (i32.eqz
                                    (i32.and
                                        (i32.load8_u offset = 16
                                            (get_local $2)
                                        )
                                        (i32.const 1)
                                    )
                                )
                            )
                            (call $_ZdlPv
                                (i32.load
                                    (i32.add
                                        (get_local $2)
                                        (i32.const 24)
                                    )
                                )
                            )
                        )
                        (call $_ZdlPv
                            (get_local $2)
                        )
                    )
                    (br_if $label$3
                        (i32.ne
                            (get_local $1)
                            (get_local $4)
                        )
                    )
                )
                (set_local $2
                    (i32.load
                        (i32.add
                            (get_local $0)
                            (i32.const 72)
                        )
                    )
                )
                (br $label$1)
            )
            (set_local $2
                (get_local $1)
            )
        )
        (i32.store
            (get_local $3)
            (get_local $1)
        )
        (call $_ZdlPv
            (get_local $2)
        )
    )
    (block $label$7
        (br_if $label$7
            (i32.eqz
                (tee_local $1
                    (i32.load
                        (i32.add
                            (get_local $0)
                            (i32.const 32)
                        )
                    )
                )
            )
        )
        (block $label$8
            (block $label$9
                (br_if $label$9
                    (i32.eq
                        (tee_local $2
                            (i32.load
                                (tee_local $3
                                    (i32.add
                                        (get_local $0)
                                        (i32.const 36)
                                    )
                                )
                            )
                        )
                        (get_local $1)
                    )
                )
                (loop $label$10
                    (set_local $4
                        (i32.load
                            (tee_local $2
                                (i32.add
                                    (get_local $2)
                                    (i32.const - 24)
                                )
                            )
                        )
                    )
                    (i32.store
                        (get_local $2)
                        (i32.const 0)
                    )
                    (block $label$11
                        (br_if $label$11
                            (i32.eqz
                                (get_local $4)
                            )
                        )
                        (block $label$12
                            (br_if $label$12
                                (i32.eqz
                                    (i32.and
                                        (i32.load8_u offset = 8
                                            (get_local $4)
                                        )
                                        (i32.const 1)
                                    )
                                )
                            )
                            (call $_ZdlPv
                                (i32.load
                                    (i32.add
                                        (get_local $4)
                                        (i32.const 16)
                                    )
                                )
                            )
                        )
                        (call $_ZdlPv
                            (get_local $4)
                        )
                    )
                    (br_if $label$10
                        (i32.ne
                            (get_local $1)
                            (get_local $2)
                        )
                    )
                )
                (set_local $2
                    (i32.load
                        (i32.add
                            (get_local $0)
                            (i32.const 32)
                        )
                    )
                )
                (br $label$8)
            )
            (set_local $2
                (get_local $1)
            )
        )
        (i32.store
            (get_local $3)
            (get_local $1)
        )
        (call $_ZdlPv
            (get_local $2)
        )
    )
    (get_local $0)
 )
(func $_ZN5eosiorsINS_10datastreamIPKcEEEERT_S6_RNSt3__112basic_stringIcNS7_11char_traitsIcEENS7_9allocatorIcEEEE(param $0 i32)(param $1 i32)(result i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (i32.store offset = 4
        (i32.const 0)
        (tee_local $7
            (i32.sub
                (i32.load offset = 4
                    (i32.const 0)
                )
                (i32.const 32)
            )
        )
    )
    (i32.store offset = 24
        (get_local $7)
        (i32.const 0)
    )
    (i64.store offset = 16
        (get_local $7)
        (i64.const 0)
    )
    (drop
        (call $_ZN5eosiorsINS_10datastreamIPKcEEEERT_S6_RNSt3__16vectorIcNS7_9allocatorIcEEEE
            (get_local $0)
            (i32.add
                (get_local $7)
                (i32.const 16)
            )
        )
    )
    (block $label$0
        (block $label$1
            (block $label$2
                (block $label$3
                    (block $label$4
                        (block $label$5
                            (block $label$6
                                (block $label$7
                                    (block $label$8
                                        (br_if $label$8
                                            (i32.ne
                                                (tee_local $5
                                                    (i32.load offset = 20
                                                        (get_local $7)
                                                    )
                                                )
                                                (tee_local $4
                                                    (i32.load offset = 16
                                                        (get_local $7)
                                                    )
                                                )
                                            )
                                        )
                                        (br_if $label$7
                                            (i32.and
                                                (i32.load8_u
                                                    (get_local $1)
                                                )
                                                (i32.const 1)
                                            )
                                        )
                                        (i32.store16
                                            (get_local $1)
                                            (i32.const 0)
                                        )
                                        (set_local $4
                                            (i32.add
                                                (get_local $1)
                                                (i32.const 8)
                                            )
                                        )
                                        (br $label$6)
                                    )
                                    (i32.store
                                        (i32.add
                                            (get_local $7)
                                            (i32.const 8)
                                        )
                                        (i32.const 0)
                                    )
                                    (i64.store
                                        (get_local $7)
                                        (i64.const 0)
                                    )
                                    (br_if $label$0
                                        (i32.ge_u
                                            (tee_local $2
                                                (i32.sub
                                                    (get_local $5)
                                                    (get_local $4)
                                                )
                                            )
                                            (i32.const - 16)
                                        )
                                    )
                                    (br_if $label$5
                                        (i32.ge_u
                                            (get_local $2)
                                            (i32.const 11)
                                        )
                                    )
                                    (i32.store8
                                        (get_local $7)
                                        (i32.shl
                                            (get_local $2)
                                            (i32.const 1)
                                        )
                                    )
                                    (set_local $6
                                        (i32.or
                                            (get_local $7)
                                            (i32.const 1)
                                        )
                                    )
                                    (br_if $label$4
                                        (get_local $2)
                                    )
                                    (br $label$3)
                                )
                                (i32.store8
                                    (i32.load offset = 8
                                        (get_local $1)
                                    )
                                    (i32.const 0)
                                )
                                (i32.store offset = 4
                                    (get_local $1)
                                    (i32.const 0)
                                )
                                (set_local $4
                                    (i32.add
                                        (get_local $1)
                                        (i32.const 8)
                                    )
                                )
                            )
                            (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEj
                                (get_local $1)
                                (i32.const 0)
                            )
                            (i32.store
                                (get_local $4)
                                (i32.const 0)
                            )
                            (i64.store align = 4
                                (get_local $1)
                                (i64.const 0)
                            )
                            (br_if $label$2
                                (tee_local $4
                                    (i32.load offset = 16
                                        (get_local $7)
                                    )
                                )
                            )
                            (br $label$1)
                        )
                        (set_local $6
                            (call $_Znwj
                                (tee_local $5
                                    (i32.and
                                        (i32.add
                                            (get_local $2)
                                            (i32.const 16)
                                        )
                                        (i32.const - 16)
                                    )
                                )
                            )
                        )
                        (i32.store
                            (get_local $7)
                            (i32.or
                                (get_local $5)
                                (i32.const 1)
                            )
                        )
                        (i32.store offset = 8
                            (get_local $7)
                            (get_local $6)
                        )
                        (i32.store offset = 4
                            (get_local $7)
                            (get_local $2)
                        )
                    )
                    (set_local $3
                        (get_local $2)
                    )
                    (set_local $5
                        (get_local $6)
                    )
                    (loop $label$9
                        (i32.store8
                            (get_local $5)
                            (i32.load8_u
                                (get_local $4)
                            )
                        )
                        (set_local $5
                            (i32.add
                                (get_local $5)
                                (i32.const 1)
                            )
                        )
                        (set_local $4
                            (i32.add
                                (get_local $4)
                                (i32.const 1)
                            )
                        )
                        (br_if $label$9
                            (tee_local $3
                                (i32.add
                                    (get_local $3)
                                    (i32.const - 1)
                                )
                            )
                        )
                    )
                    (set_local $6
                        (i32.add
                            (get_local $6)
                            (get_local $2)
                        )
                    )
                )
                (i32.store8
                    (get_local $6)
                    (i32.const 0)
                )
                (block $label$10
                    (block $label$11
                        (br_if $label$11
                            (i32.and
                                (i32.load8_u
                                    (get_local $1)
                                )
                                (i32.const 1)
                            )
                        )
                        (i32.store16
                            (get_local $1)
                            (i32.const 0)
                        )
                        (br $label$10)
                    )
                    (i32.store8
                        (i32.load offset = 8
                            (get_local $1)
                        )
                        (i32.const 0)
                    )
                    (i32.store offset = 4
                        (get_local $1)
                        (i32.const 0)
                    )
                )
                (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEj
                    (get_local $1)
                    (i32.const 0)
                )
                (i32.store
                    (i32.add
                        (get_local $1)
                        (i32.const 8)
                    )
                    (i32.load
                        (i32.add
                            (get_local $7)
                            (i32.const 8)
                        )
                    )
                )
                (i64.store align = 4
                    (get_local $1)
                    (i64.load
                        (get_local $7)
                    )
                )
                (br_if $label$1
                    (i32.eqz
                        (tee_local $4
                            (i32.load offset = 16
                                (get_local $7)
                            )
                        )
                    )
                )
            )
            (i32.store offset = 20
                (get_local $7)
                (get_local $4)
            )
            (call $_ZdlPv
                (get_local $4)
            )
        )
        (i32.store offset = 4
            (i32.const 0)
            (i32.add
                (get_local $7)
                (i32.const 32)
            )
        )
        (return
(get_local $0)
   )
  )
(call $_ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv
    (get_local $7)
  )
(unreachable)
 )
(func $_ZN5boost4mp116detail16tuple_apply_implIRZN5eosio14execute_actionI5slantS5_JyNSt3__112basic_stringIcNS6_11char_traitsIcEENS6_9allocatorIcEEEEhSC_EEEbPT_MT0_FvDpT1_EEUlDpT_E_RNS6_5tupleIJySC_hSC_EEEJLj0ELj1ELj2ELj3EEEEDTclclsr3stdE7forwardISD_Efp_Espclsr3stdE3getIXT1_EEclsr3stdE7forwardISF_Efp0_EEEEOSD_OSF_NS0_16integer_sequenceIjJXspT1_EEEE(param $0 i32)(param $1 i32)
    (local $2 i64)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (i32.store offset = 4
        (i32.const 0)
        (tee_local $5
            (i32.sub
                (i32.load offset = 4
                    (i32.const 0)
                )
                (i32.const 64)
            )
        )
    )
    (set_local $2
        (i64.load
            (get_local $1)
        )
    )
    (drop
        (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_
            (i32.add
                (get_local $5)
                (i32.const 16)
            )
            (i32.add
                (get_local $1)
                (i32.const 8)
            )
        )
    )
    (set_local $3
        (i32.load8_u offset = 20
            (get_local $1)
        )
    )
    (drop
        (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_
            (get_local $5)
            (i32.add
                (get_local $1)
                (i32.const 24)
            )
        )
    )
    (set_local $0
        (i32.add
            (i32.load
                (i32.load
                    (get_local $0)
                )
            )
            (i32.shr_s
                (tee_local $4
                    (i32.load offset = 4
                        (tee_local $1
                            (i32.load offset = 4
                                (get_local $0)
                            )
                        )
                    )
                )
                (i32.const 1)
            )
        )
    )
    (set_local $1
        (i32.load
            (get_local $1)
        )
    )
    (block $label$0
        (br_if $label$0
            (i32.eqz
                (i32.and
                    (get_local $4)
                    (i32.const 1)
                )
            )
        )
        (set_local $1
            (i32.load
                (i32.add
                    (i32.load
                        (get_local $0)
                    )
                    (get_local $1)
                )
            )
        )
    )
    (drop
        (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_
            (i32.add
                (get_local $5)
                (i32.const 48)
            )
            (i32.add
                (get_local $5)
                (i32.const 16)
            )
        )
    )
    (drop
        (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_
            (i32.add
                (get_local $5)
                (i32.const 32)
            )
            (get_local $5)
        )
    )
    (call_indirect $FUNCSIG$vijiii
        (get_local $0)
        (get_local $2)
        (i32.add
            (get_local $5)
            (i32.const 48)
        )
        (i32.and
            (get_local $3)
            (i32.const 255)
        )
        (i32.add
            (get_local $5)
            (i32.const 32)
        )
        (get_local $1)
    )
    (block $label$1
        (br_if $label$1
            (i32.eqz
                (i32.and
                    (i32.load8_u offset = 32
                        (get_local $5)
                    )
                    (i32.const 1)
                )
            )
        )
        (call $_ZdlPv
            (i32.load offset = 40
                (get_local $5)
            )
        )
    )
    (block $label$2
        (br_if $label$2
            (i32.eqz
                (i32.and
                    (i32.load8_u offset = 48
                        (get_local $5)
                    )
                    (i32.const 1)
                )
            )
        )
        (call $_ZdlPv
            (i32.load offset = 56
                (get_local $5)
            )
        )
    )
    (block $label$3
        (br_if $label$3
            (i32.eqz
                (i32.and
                    (i32.load8_u
                        (get_local $5)
                    )
                    (i32.const 1)
                )
            )
        )
        (call $_ZdlPv
            (i32.load offset = 8
                (get_local $5)
            )
        )
    )
    (block $label$4
        (br_if $label$4
            (i32.eqz
                (i32.and
                    (i32.load8_u offset = 16
                        (get_local $5)
                    )
                    (i32.const 1)
                )
            )
        )
        (call $_ZdlPv
            (i32.load offset = 24
                (get_local $5)
            )
        )
    )
    (i32.store offset = 4
        (i32.const 0)
        (i32.add
            (get_local $5)
            (i32.const 64)
        )
    )
 )
(func $_ZN5eosiorsINS_10datastreamIPKcEEEERT_S6_RNSt3__16vectorIcNS7_9allocatorIcEEEE(param $0 i32)(param $1 i32)(result i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i64)
    (local $7 i32)
    (set_local $5
        (i32.load offset = 4
            (get_local $0)
        )
    )
    (set_local $7
        (i32.const 0)
    )
    (set_local $6
        (i64.const 0)
    )
    (set_local $2
        (i32.add
            (get_local $0)
            (i32.const 8)
        )
    )
    (set_local $3
        (i32.add
            (get_local $0)
            (i32.const 4)
        )
    )
    (loop $label$0
        (call $eosio_assert
            (i32.lt_u
                (get_local $5)
                (i32.load
                    (get_local $2)
                )
            )
            (i32.const 32)
        )
        (set_local $4
            (i32.load8_u
                (tee_local $5
                    (i32.load
                        (get_local $3)
                    )
                )
            )
        )
        (i32.store
            (get_local $3)
            (tee_local $5
                (i32.add
                    (get_local $5)
                    (i32.const 1)
                )
            )
        )
        (set_local $6
            (i64.or
                (i64.extend_u / i32
                    (i32.shl
                        (i32.and
                            (get_local $4)
                            (i32.const 127)
                        )
                        (tee_local $7
                            (i32.and
                                (get_local $7)
                                (i32.const 255)
                            )
                        )
                    )
                )
                (get_local $6)
            )
        )
        (set_local $7
            (i32.add
                (get_local $7)
                (i32.const 7)
            )
        )
        (br_if $label$0
            (i32.shr_u
                (get_local $4)
                (i32.const 7)
            )
        )
    )
    (block $label$1
        (block $label$2
            (br_if $label$2
                (i32.le_u
                    (tee_local $3
                        (i32.wrap / i64
                            (get_local $6)
                        )
                    )
                    (tee_local $2
                        (i32.sub
                            (tee_local $7
                                (i32.load offset = 4
                                    (get_local $1)
                                )
                            )
                            (tee_local $4
                                (i32.load
                                    (get_local $1)
                                )
                            )
                        )
                    )
                )
            )
            (call $_ZNSt3__16vectorIcNS_9allocatorIcEEE8__appendEj
                (get_local $1)
                (i32.sub
                    (get_local $3)
                    (get_local $2)
                )
            )
            (set_local $5
                (i32.load
                    (i32.add
                        (get_local $0)
                        (i32.const 4)
                    )
                )
            )
            (set_local $7
                (i32.load
                    (i32.add
                        (get_local $1)
                        (i32.const 4)
                    )
                )
            )
            (set_local $4
                (i32.load
                    (get_local $1)
                )
            )
            (br $label$1)
        )
        (br_if $label$1
            (i32.ge_u
                (get_local $3)
                (get_local $2)
            )
        )
        (i32.store
            (i32.add
                (get_local $1)
                (i32.const 4)
            )
            (tee_local $7
                (i32.add
                    (get_local $4)
                    (get_local $3)
                )
            )
        )
    )
    (call $eosio_assert
        (i32.ge_u
            (i32.sub
                (i32.load
                    (i32.add
                        (get_local $0)
                        (i32.const 8)
                    )
                )
                (get_local $5)
            )
            (tee_local $5
                (i32.sub
                    (get_local $7)
                    (get_local $4)
                )
            )
        )
        (i32.const 16)
    )
    (drop
        (call $memcpy
            (get_local $4)
            (i32.load
                (tee_local $7
                    (i32.add
                        (get_local $0)
                        (i32.const 4)
                    )
                )
            )
            (get_local $5)
        )
    )
    (i32.store
        (get_local $7)
        (i32.add
            (i32.load
                (get_local $7)
            )
            (get_local $5)
        )
    )
    (get_local $0)
 )
(func $_ZNSt3__16vectorIcNS_9allocatorIcEEE8__appendEj(param $0 i32)(param $1 i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (block $label$0
        (block $label$1
            (block $label$2
                (block $label$3
                    (block $label$4
                        (br_if $label$4
                            (i32.ge_u
                                (i32.sub
                                    (tee_local $2
                                        (i32.load offset = 8
                                            (get_local $0)
                                        )
                                    )
                                    (tee_local $6
                                        (i32.load offset = 4
                                            (get_local $0)
                                        )
                                    )
                                )
                                (get_local $1)
                            )
                        )
                        (br_if $label$2
                            (i32.le_s
                                (tee_local $4
                                    (i32.add
                                        (tee_local $3
                                            (i32.sub
                                                (get_local $6)
                                                (tee_local $5
                                                    (i32.load
                                                        (get_local $0)
                                                    )
                                                )
                                            )
                                        )
                                        (get_local $1)
                                    )
                                )
                                (i32.const - 1)
                            )
                        )
                        (set_local $6
                            (i32.const 2147483647)
                        )
                        (block $label$5
                            (br_if $label$5
                                (i32.gt_u
                                    (tee_local $2
                                        (i32.sub
                                            (get_local $2)
                                            (get_local $5)
                                        )
                                    )
                                    (i32.const 1073741822)
                                )
                            )
                            (br_if $label$3
                                (i32.eqz
                                    (tee_local $6
                                        (select
                                            (get_local $4)
                                            (tee_local $6
                                                (i32.shl
                                                    (get_local $2)
                                                    (i32.const 1)
                                                )
                                            )
                                            (i32.lt_u
                                                (get_local $6)
                                                (get_local $4)
                                            )
                                        )
                                    )
                                )
                            )
                        )
                        (set_local $2
                            (call $_Znwj
                                (get_local $6)
                            )
                        )
                        (br $label$1)
                    )
                    (set_local $0
                        (i32.add
                            (get_local $0)
                            (i32.const 4)
                        )
                    )
                    (loop $label$6
                        (i32.store8
                            (get_local $6)
                            (i32.const 0)
                        )
                        (i32.store
                            (get_local $0)
                            (tee_local $6
                                (i32.add
                                    (i32.load
                                        (get_local $0)
                                    )
                                    (i32.const 1)
                                )
                            )
                        )
                        (br_if $label$6
                            (tee_local $1
                                (i32.add
                                    (get_local $1)
                                    (i32.const - 1)
                                )
                            )
                        )
                        (br $label$0)
                    )
                )
                (set_local $6
                    (i32.const 0)
                )
                (set_local $2
                    (i32.const 0)
                )
                (br $label$1)
            )
            (call $_ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv
                (get_local $0)
            )
            (unreachable)
        )
        (set_local $4
            (i32.add
                (get_local $2)
                (get_local $6)
            )
        )
        (set_local $6
            (tee_local $5
                (i32.add
                    (get_local $2)
                    (get_local $3)
                )
            )
        )
        (loop $label$7
            (i32.store8
                (get_local $6)
                (i32.const 0)
            )
            (set_local $6
                (i32.add
                    (get_local $6)
                    (i32.const 1)
                )
            )
            (br_if $label$7
                (tee_local $1
                    (i32.add
                        (get_local $1)
                        (i32.const - 1)
                    )
                )
            )
        )
        (set_local $5
            (i32.sub
                (get_local $5)
                (tee_local $2
                    (i32.sub
                        (i32.load
                            (tee_local $3
                                (i32.add
                                    (get_local $0)
                                    (i32.const 4)
                                )
                            )
                        )
                        (tee_local $1
                            (i32.load
                                (get_local $0)
                            )
                        )
                    )
                )
            )
        )
        (block $label$8
            (br_if $label$8
                (i32.lt_s
                    (get_local $2)
                    (i32.const 1)
                )
            )
            (drop
                (call $memcpy
                    (get_local $5)
                    (get_local $1)
                    (get_local $2)
                )
            )
            (set_local $1
                (i32.load
                    (get_local $0)
                )
            )
        )
        (i32.store
            (get_local $0)
            (get_local $5)
        )
        (i32.store
            (get_local $3)
            (get_local $6)
        )
        (i32.store
            (i32.add
                (get_local $0)
                (i32.const 8)
            )
            (get_local $4)
        )
        (br_if $label$0
            (i32.eqz
                (get_local $1)
            )
        )
        (call $_ZdlPv
            (get_local $1)
        )
        (return)
  )
 )
(func $_ZNK5eosio11multi_indexILy14783879415448207360EN5slant5topicEJEE31load_object_by_primary_iteratorEl(param $0 i32)(param $1 i32)(result i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i64)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (local $9 i32)
    (set_local $8
        (tee_local $9
            (i32.sub
                (i32.load offset = 4
                    (i32.const 0)
                )
                (i32.const 48)
            )
        )
    )
    (i32.store offset = 4
        (i32.const 0)
        (get_local $9)
    )
    (block $label$0
        (br_if $label$0
            (i32.eq
                (tee_local $7
                    (i32.load
                        (i32.add
                            (get_local $0)
                            (i32.const 28)
                        )
                    )
                )
                (tee_local $2
                    (i32.load offset = 24
                        (get_local $0)
                    )
                )
            )
        )
        (set_local $3
            (i32.sub
                (i32.const 0)
                (get_local $2)
            )
        )
        (set_local $6
            (i32.add
                (get_local $7)
                (i32.const - 24)
            )
        )
        (loop $label$1
            (br_if $label$0
                (i32.eq
                    (i32.load
                        (i32.add
                            (get_local $6)
                            (i32.const 16)
                        )
                    )
                    (get_local $1)
                )
            )
            (set_local $7
                (get_local $6)
            )
            (set_local $6
                (tee_local $4
                    (i32.add
                        (get_local $6)
                        (i32.const - 24)
                    )
                )
            )
            (br_if $label$1
                (i32.ne
                    (i32.add
                        (get_local $4)
                        (get_local $3)
                    )
                    (i32.const - 24)
                )
            )
        )
    )
    (block $label$2
        (block $label$3
            (br_if $label$3
                (i32.eq
                    (get_local $7)
                    (get_local $2)
                )
            )
            (set_local $6
                (i32.load
                    (i32.add
                        (get_local $7)
                        (i32.const - 24)
                    )
                )
            )
            (br $label$2)
        )
        (call $eosio_assert
            (i32.xor
                (i32.shr_u
                    (tee_local $6
                        (call $db_get_i64
                            (get_local $1)
                            (i32.const 0)
                            (i32.const 0)
                        )
                    )
                    (i32.const 31)
                )
                (i32.const 1)
            )
            (i32.const 448)
        )
        (block $label$4
            (block $label$5
                (br_if $label$5
                    (i32.lt_u
                        (get_local $6)
                        (i32.const 513)
                    )
                )
                (set_local $4
                    (call $malloc
                        (get_local $6)
                    )
                )
                (br $label$4)
            )
            (i32.store offset = 4
                (i32.const 0)
                (tee_local $4
                    (i32.sub
                        (get_local $9)
                        (i32.and
                            (i32.add
                                (get_local $6)
                                (i32.const 15)
                            )
                            (i32.const - 16)
                        )
                    )
                )
            )
        )
        (drop
            (call $db_get_i64
                (get_local $1)
                (get_local $4)
                (get_local $6)
            )
        )
        (i32.store offset = 36
            (get_local $8)
            (get_local $4)
        )
        (i32.store offset = 32
            (get_local $8)
            (get_local $4)
        )
        (i32.store offset = 40
            (get_local $8)
            (i32.add
                (get_local $4)
                (get_local $6)
            )
        )
        (block $label$6
            (br_if $label$6
                (i32.lt_u
                    (get_local $6)
                    (i32.const 513)
                )
            )
            (call $free
                (get_local $4)
            )
        )
        (i32.store offset = 16
            (tee_local $6
                (call $_Znwj
                    (i32.const 56)
                )
            )
            (i32.const 0)
        )
        (i64.store offset = 8 align = 4
            (get_local $6)
            (i64.const 0)
        )
        (i32.store offset = 44
            (get_local $6)
            (get_local $0)
        )
        (drop
            (call $_ZrsIN5eosio10datastreamIPKcEEERT_S6_RN5slant5topicE
                (i32.add
                    (get_local $8)
                    (i32.const 32)
                )
                (get_local $6)
            )
        )
        (i32.store offset = 48
            (get_local $6)
            (get_local $1)
        )
        (i32.store offset = 24
            (get_local $8)
            (get_local $6)
        )
        (i64.store offset = 16
            (get_local $8)
            (tee_local $5
                (i64.load
                    (get_local $6)
                )
            )
        )
        (i32.store offset = 12
            (get_local $8)
            (tee_local $7
                (i32.load offset = 48
                    (get_local $6)
                )
            )
        )
        (block $label$7
            (block $label$8
                (br_if $label$8
                    (i32.ge_u
                        (tee_local $4
                            (i32.load
                                (tee_local $1
                                    (i32.add
                                        (get_local $0)
                                        (i32.const 28)
                                    )
                                )
                            )
                        )
                        (i32.load
                            (i32.add
                                (get_local $0)
                                (i32.const 32)
                            )
                        )
                    )
                )
                (i64.store offset = 8
                    (get_local $4)
                    (get_local $5)
                )
                (i32.store offset = 16
                    (get_local $4)
                    (get_local $7)
                )
                (i32.store offset = 24
                    (get_local $8)
                    (i32.const 0)
                )
                (i32.store
                    (get_local $4)
                    (get_local $6)
                )
                (i32.store
                    (get_local $1)
                    (i32.add
                        (get_local $4)
                        (i32.const 24)
                    )
                )
                (br $label$7)
            )
            (call $_ZNSt3__16vectorIN5eosio11multi_indexILy14783879415448207360EN5slant5topicEJEE8item_ptrENS_9allocatorIS6_EEE24__emplace_back_slow_pathIJNS_10unique_ptrINS5_4itemENS_14default_deleteISC_EEEERyRlEEEvDpOT_
                (i32.add
                    (get_local $0)
                    (i32.const 24)
                )
                (i32.add
                    (get_local $8)
                    (i32.const 24)
                )
                (i32.add
                    (get_local $8)
                    (i32.const 16)
                )
                (i32.add
                    (get_local $8)
                    (i32.const 12)
                )
            )
        )
        (set_local $4
            (i32.load offset = 24
                (get_local $8)
            )
        )
        (i32.store offset = 24
            (get_local $8)
            (i32.const 0)
        )
        (br_if $label$2
            (i32.eqz
                (get_local $4)
            )
        )
        (block $label$9
            (br_if $label$9
                (i32.eqz
                    (i32.and
                        (i32.load8_u offset = 8
                            (get_local $4)
                        )
                        (i32.const 1)
                    )
                )
            )
            (call $_ZdlPv
                (i32.load
                    (i32.add
                        (get_local $4)
                        (i32.const 16)
                    )
                )
            )
        )
        (call $_ZdlPv
            (get_local $4)
        )
    )
    (i32.store offset = 4
        (i32.const 0)
        (i32.add
            (get_local $8)
            (i32.const 48)
        )
    )
    (get_local $6)
 )
(func $_ZN5eosio11multi_indexILy14783879415448207360EN5slant5topicEJEE6modifyIZNS1_8castvoteEyNSt3__112basic_stringIcNS5_11char_traitsIcEENS5_9allocatorIcEEEEhSB_EUlRT_E_EEvRKS2_yOSC_(param $0 i32)(param $1 i32)(param $2 i64)(param $3 i32)
    (local $4 i64)
    (local $5 i32)
    (local $6 i64)
    (local $7 i32)
    (local $8 i32)
    (set_local $8
        (tee_local $7
            (i32.sub
                (i32.load offset = 4
                    (i32.const 0)
                )
                (i32.const 16)
            )
        )
    )
    (i32.store offset = 4
        (i32.const 0)
        (get_local $7)
    )
    (call $eosio_assert
        (i32.eq
            (i32.load
                (i32.add
                    (get_local $1)
                    (i32.const 44)
                )
            )
            (get_local $0)
        )
        (i32.const 480)
    )
    (call $eosio_assert
        (i64.eq
            (i64.load
                (get_local $0)
            )
            (call $current_receiver)
        )
        (i32.const 528)
    )
    (i64.store
        (tee_local $3
            (select
                (i32.add
                    (get_local $1)
                    (i32.const 24)
                )
                (i32.add
                    (get_local $1)
                    (i32.const 32)
                )
                (i32.load8_u
                    (i32.load
                        (get_local $3)
                    )
                )
            )
        )
        (i64.add
            (i64.load
                (get_local $3)
            )
            (i64.const 1)
        )
    )
    (set_local $4
        (i64.load
            (get_local $1)
        )
    )
    (call $eosio_assert
        (i32.const 1)
        (i32.const 592)
    )
    (set_local $3
        (i32.add
            (tee_local $5
                (select
                    (i32.load
                        (i32.add
                            (get_local $1)
                            (i32.const 12)
                        )
                    )
                    (i32.shr_u
                        (tee_local $3
                            (i32.load8_u offset = 8
                                (get_local $1)
                            )
                        )
                        (i32.const 1)
                    )
                    (i32.and
                        (get_local $3)
                        (i32.const 1)
                    )
                )
            )
            (i32.const 25)
        )
    )
    (set_local $6
        (i64.extend_u / i32
            (get_local $5)
        )
    )
    (loop $label$0
        (set_local $3
            (i32.add
                (get_local $3)
                (i32.const 1)
            )
        )
        (br_if $label$0
            (i64.ne
                (tee_local $6
                    (i64.shr_u
                        (get_local $6)
                        (i64.const 7)
                    )
                )
                (i64.const 0)
            )
        )
    )
    (block $label$1
        (block $label$2
            (br_if $label$2
                (i32.lt_u
                    (get_local $3)
                    (i32.const 513)
                )
            )
            (set_local $7
                (call $malloc
                    (get_local $3)
                )
            )
            (br $label$1)
        )
        (i32.store offset = 4
            (i32.const 0)
            (tee_local $7
                (i32.sub
                    (get_local $7)
                    (i32.and
                        (i32.add
                            (get_local $3)
                            (i32.const 15)
                        )
                        (i32.const - 16)
                    )
                )
            )
        )
    )
    (i32.store offset = 4
        (get_local $8)
        (get_local $7)
    )
    (i32.store
        (get_local $8)
        (get_local $7)
    )
    (i32.store offset = 8
        (get_local $8)
        (i32.add
            (get_local $7)
            (get_local $3)
        )
    )
    (drop
        (call $_ZlsIN5eosio10datastreamIPcEEERT_S5_RKN5slant5topicE
            (get_local $8)
            (get_local $1)
        )
    )
    (call $db_update_i64
        (i32.load offset = 48
            (get_local $1)
        )
        (get_local $2)
        (get_local $7)
        (get_local $3)
    )
    (block $label$3
        (br_if $label$3
            (i32.lt_u
                (get_local $3)
                (i32.const 513)
            )
        )
        (call $free
            (get_local $7)
        )
    )
    (block $label$4
        (br_if $label$4
            (i64.lt_u
                (get_local $4)
                (i64.load offset = 16
                    (get_local $0)
                )
            )
        )
        (i64.store
            (i32.add
                (get_local $0)
                (i32.const 16)
            )
            (select
                (i64.const - 2)
                (i64.add
                    (get_local $4)
                    (i64.const 1)
                )
                (i64.gt_u
                    (get_local $4)
                    (i64.const - 3)
                )
            )
        )
    )
    (i32.store offset = 4
        (i32.const 0)
        (i32.add
            (get_local $8)
            (i32.const 16)
        )
    )
 )
(func $_ZN5eosio11multi_indexILy15938977953078050816EN5slant4voteEJEE7emplaceIZNS1_8castvoteEyNSt3__112basic_stringIcNS5_11char_traitsIcEENS5_9allocatorIcEEEEhSB_EUlRT_E0_EENS3_14const_iteratorEyOSC_(param $0 i32)(param $1 i32)(param $2 i64)(param $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (i32.store offset = 4
        (i32.const 0)
        (tee_local $7
            (i32.sub
                (i32.load offset = 4
                    (i32.const 0)
                )
                (i32.const 48)
            )
        )
    )
    (i64.store offset = 40
        (get_local $7)
        (get_local $2)
    )
    (call $eosio_assert
        (i64.eq
            (i64.load
                (get_local $1)
            )
            (call $current_receiver)
        )
        (i32.const 192)
    )
    (i32.store offset = 20
        (get_local $7)
        (get_local $3)
    )
    (i32.store offset = 16
        (get_local $7)
        (get_local $1)
    )
    (i32.store offset = 24
        (get_local $7)
        (i32.add
            (get_local $7)
            (i32.const 40)
        )
    )
    (i32.store offset = 24
        (tee_local $3
            (call $_Znwj
                (i32.const 56)
            )
        )
        (i32.const 0)
    )
    (i64.store offset = 16 align = 4
        (get_local $3)
        (i64.const 0)
    )
    (i32.store offset = 32
        (get_local $3)
        (i32.const 0)
    )
    (i32.store offset = 36
        (get_local $3)
        (i32.const 0)
    )
    (i32.store offset = 40
        (get_local $3)
        (i32.const 0)
    )
    (i32.store offset = 44
        (get_local $3)
        (get_local $1)
    )
    (call $_ZZN5eosio11multi_indexILy15938977953078050816EN5slant4voteEJEE7emplaceIZNS1_8castvoteEyNSt3__112basic_stringIcNS5_11char_traitsIcEENS5_9allocatorIcEEEEhSB_EUlRT_E0_EENS3_14const_iteratorEyOSC_ENKUlSD_E_clINS3_4itemEEEDaSD_
        (i32.add
            (get_local $7)
            (i32.const 16)
        )
        (get_local $3)
    )
    (i32.store offset = 32
        (get_local $7)
        (get_local $3)
    )
    (i64.store offset = 16
        (get_local $7)
        (tee_local $2
            (i64.load
                (get_local $3)
            )
        )
    )
    (i32.store offset = 12
        (get_local $7)
        (tee_local $4
            (i32.load offset = 48
                (get_local $3)
            )
        )
    )
    (block $label$0
        (block $label$1
            (br_if $label$1
                (i32.ge_u
                    (tee_local $5
                        (i32.load
                            (tee_local $6
                                (i32.add
                                    (get_local $1)
                                    (i32.const 28)
                                )
                            )
                        )
                    )
                    (i32.load
                        (i32.add
                            (get_local $1)
                            (i32.const 32)
                        )
                    )
                )
            )
            (i64.store offset = 8
                (get_local $5)
                (get_local $2)
            )
            (i32.store offset = 16
                (get_local $5)
                (get_local $4)
            )
            (i32.store offset = 32
                (get_local $7)
                (i32.const 0)
            )
            (i32.store
                (get_local $5)
                (get_local $3)
            )
            (i32.store
                (get_local $6)
                (i32.add
                    (get_local $5)
                    (i32.const 24)
                )
            )
            (br $label$0)
        )
        (call $_ZNSt3__16vectorIN5eosio11multi_indexILy15938977953078050816EN5slant4voteEJEE8item_ptrENS_9allocatorIS6_EEE24__emplace_back_slow_pathIJNS_10unique_ptrINS5_4itemENS_14default_deleteISC_EEEERyRlEEEvDpOT_
            (i32.add
                (get_local $1)
                (i32.const 24)
            )
            (i32.add
                (get_local $7)
                (i32.const 32)
            )
            (i32.add
                (get_local $7)
                (i32.const 16)
            )
            (i32.add
                (get_local $7)
                (i32.const 12)
            )
        )
    )
    (i32.store offset = 4
        (get_local $0)
        (get_local $3)
    )
    (i32.store
        (get_local $0)
        (get_local $1)
    )
    (set_local $3
        (i32.load offset = 32
            (get_local $7)
        )
    )
    (i32.store offset = 32
        (get_local $7)
        (i32.const 0)
    )
    (block $label$2
        (br_if $label$2
            (i32.eqz
                (get_local $3)
            )
        )
        (block $label$3
            (br_if $label$3
                (i32.eqz
                    (i32.and
                        (i32.load8_u offset = 32
                            (get_local $3)
                        )
                        (i32.const 1)
                    )
                )
            )
            (call $_ZdlPv
                (i32.load
                    (i32.add
                        (get_local $3)
                        (i32.const 40)
                    )
                )
            )
        )
        (block $label$4
            (br_if $label$4
                (i32.eqz
                    (i32.and
                        (i32.load8_u offset = 16
                            (get_local $3)
                        )
                        (i32.const 1)
                    )
                )
            )
            (call $_ZdlPv
                (i32.load
                    (i32.add
                        (get_local $3)
                        (i32.const 24)
                    )
                )
            )
        )
        (call $_ZdlPv
            (get_local $3)
        )
    )
    (i32.store offset = 4
        (i32.const 0)
        (i32.add
            (get_local $7)
            (i32.const 48)
        )
    )
 )
(func $_ZZN5eosio11multi_indexILy15938977953078050816EN5slant4voteEJEE7emplaceIZNS1_8castvoteEyNSt3__112basic_stringIcNS5_11char_traitsIcEENS5_9allocatorIcEEEEhSB_EUlRT_E0_EENS3_14const_iteratorEyOSC_ENKUlSD_E_clINS3_4itemEEEDaSD_(param $0 i32)(param $1 i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i64)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (set_local $7
        (tee_local $6
            (i32.sub
                (i32.load offset = 4
                    (i32.const 0)
                )
                (i32.const 16)
            )
        )
    )
    (i32.store offset = 4
        (i32.const 0)
        (get_local $6)
    )
    (set_local $2
        (i32.load
            (get_local $0)
        )
    )
    (call $_ZZN5slant8castvoteEyNSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEhS6_ENKUlRT_E0_clINS_4voteEEEDaS8_
        (i32.load offset = 4
            (get_local $0)
        )
        (get_local $1)
    )
    (set_local $5
        (i32.add
            (tee_local $3
                (select
                    (i32.load
                        (i32.add
                            (get_local $1)
                            (i32.const 20)
                        )
                    )
                    (i32.shr_u
                        (tee_local $5
                            (i32.load8_u offset = 16
                                (get_local $1)
                            )
                        )
                        (i32.const 1)
                    )
                    (i32.and
                        (get_local $5)
                        (i32.const 1)
                    )
                )
            )
            (i32.const 17)
        )
    )
    (set_local $4
        (i64.extend_u / i32
            (get_local $3)
        )
    )
    (loop $label$0
        (set_local $5
            (i32.add
                (get_local $5)
                (i32.const 1)
            )
        )
        (br_if $label$0
            (i64.ne
                (tee_local $4
                    (i64.shr_u
                        (get_local $4)
                        (i64.const 7)
                    )
                )
                (i64.const 0)
            )
        )
    )
    (set_local $5
        (i32.add
            (tee_local $3
                (select
                    (i32.load
                        (i32.add
                            (get_local $1)
                            (i32.const 36)
                        )
                    )
                    (i32.shr_u
                        (tee_local $3
                            (i32.load8_u offset = 32
                                (get_local $1)
                            )
                        )
                        (i32.const 1)
                    )
                    (i32.and
                        (get_local $3)
                        (i32.const 1)
                    )
                )
            )
            (get_local $5)
        )
    )
    (set_local $4
        (i64.extend_u / i32
            (get_local $3)
        )
    )
    (loop $label$1
        (set_local $5
            (i32.add
                (get_local $5)
                (i32.const 1)
            )
        )
        (br_if $label$1
            (i64.ne
                (tee_local $4
                    (i64.shr_u
                        (get_local $4)
                        (i64.const 7)
                    )
                )
                (i64.const 0)
            )
        )
    )
    (block $label$2
        (block $label$3
            (br_if $label$3
                (i32.lt_u
                    (get_local $5)
                    (i32.const 513)
                )
            )
            (set_local $6
                (call $malloc
                    (get_local $5)
                )
            )
            (br $label$2)
        )
        (i32.store offset = 4
            (i32.const 0)
            (tee_local $6
                (i32.sub
                    (get_local $6)
                    (i32.and
                        (i32.add
                            (get_local $5)
                            (i32.const 15)
                        )
                        (i32.const - 16)
                    )
                )
            )
        )
    )
    (i32.store offset = 4
        (get_local $7)
        (get_local $6)
    )
    (i32.store
        (get_local $7)
        (get_local $6)
    )
    (i32.store offset = 8
        (get_local $7)
        (i32.add
            (get_local $6)
            (get_local $5)
        )
    )
    (drop
        (call $_ZlsIN5eosio10datastreamIPcEEERT_S5_RKN5slant4voteE
            (get_local $7)
            (get_local $1)
        )
    )
    (i32.store offset = 48
        (get_local $1)
        (call $db_store_i64
            (i64.load offset = 8
                (get_local $2)
            )
            (i64.const - 2507766120631500800)
            (i64.load
                (i32.load offset = 8
                    (get_local $0)
                )
            )
            (tee_local $4
                (i64.load
                    (get_local $1)
                )
            )
            (get_local $6)
            (get_local $5)
        )
    )
    (block $label$4
        (br_if $label$4
            (i32.lt_u
                (get_local $5)
                (i32.const 513)
            )
        )
        (call $free
            (get_local $6)
        )
    )
    (block $label$5
        (br_if $label$5
            (i64.lt_u
                (get_local $4)
                (i64.load offset = 16
                    (get_local $2)
                )
            )
        )
        (i64.store
            (i32.add
                (get_local $2)
                (i32.const 16)
            )
            (select
                (i64.const - 2)
                (i64.add
                    (get_local $4)
                    (i64.const 1)
                )
                (i64.gt_u
                    (get_local $4)
                    (i64.const - 3)
                )
            )
        )
    )
    (i32.store offset = 4
        (i32.const 0)
        (i32.add
            (get_local $7)
            (i32.const 16)
        )
    )
 )
(func $_ZNSt3__16vectorIN5eosio11multi_indexILy15938977953078050816EN5slant4voteEJEE8item_ptrENS_9allocatorIS6_EEE24__emplace_back_slow_pathIJNS_10unique_ptrINS5_4itemENS_14default_deleteISC_EEEERyRlEEEvDpOT_(param $0 i32)(param $1 i32)(param $2 i32)(param $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (block $label$0
        (block $label$1
            (br_if $label$1
                (i32.ge_u
                    (tee_local $5
                        (i32.add
                            (tee_local $4
                                (i32.div_s
                                    (i32.sub
                                        (i32.load offset = 4
                                            (get_local $0)
                                        )
                                        (tee_local $6
                                            (i32.load
                                                (get_local $0)
                                            )
                                        )
                                    )
                                    (i32.const 24)
                                )
                            )
                            (i32.const 1)
                        )
                    )
                    (i32.const 178956971)
                )
            )
            (set_local $7
                (i32.const 178956970)
            )
            (block $label$2
                (block $label$3
                    (br_if $label$3
                        (i32.gt_u
                            (tee_local $6
                                (i32.div_s
                                    (i32.sub
                                        (i32.load offset = 8
                                            (get_local $0)
                                        )
                                        (get_local $6)
                                    )
                                    (i32.const 24)
                                )
                            )
                            (i32.const 89478484)
                        )
                    )
                    (br_if $label$2
                        (i32.eqz
                            (tee_local $7
                                (select
                                    (get_local $5)
                                    (tee_local $7
                                        (i32.shl
                                            (get_local $6)
                                            (i32.const 1)
                                        )
                                    )
                                    (i32.lt_u
                                        (get_local $7)
                                        (get_local $5)
                                    )
                                )
                            )
                        )
                    )
                )
                (set_local $6
                    (call $_Znwj
                        (i32.mul
                            (get_local $7)
                            (i32.const 24)
                        )
                    )
                )
                (br $label$0)
            )
            (set_local $7
                (i32.const 0)
            )
            (set_local $6
                (i32.const 0)
            )
            (br $label$0)
        )
        (call $_ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv
            (get_local $0)
        )
        (unreachable)
    )
    (set_local $5
        (i32.load
            (get_local $1)
        )
    )
    (i32.store
        (get_local $1)
        (i32.const 0)
    )
    (i32.store
        (tee_local $1
            (i32.add
                (get_local $6)
                (i32.mul
                    (get_local $4)
                    (i32.const 24)
                )
            )
        )
        (get_local $5)
    )
    (i64.store offset = 8
        (get_local $1)
        (i64.load
            (get_local $2)
        )
    )
    (i32.store offset = 16
        (get_local $1)
        (i32.load
            (get_local $3)
        )
    )
    (set_local $4
        (i32.add
            (get_local $6)
            (i32.mul
                (get_local $7)
                (i32.const 24)
            )
        )
    )
    (set_local $5
        (i32.add
            (get_local $1)
            (i32.const 24)
        )
    )
    (block $label$4
        (block $label$5
            (br_if $label$5
                (i32.eq
                    (tee_local $6
                        (i32.load
                            (i32.add
                                (get_local $0)
                                (i32.const 4)
                            )
                        )
                    )
                    (tee_local $7
                        (i32.load
                            (get_local $0)
                        )
                    )
                )
            )
            (loop $label$6
                (set_local $3
                    (i32.load
                        (tee_local $2
                            (i32.add
                                (get_local $6)
                                (i32.const - 24)
                            )
                        )
                    )
                )
                (i32.store
                    (get_local $2)
                    (i32.const 0)
                )
                (i32.store
                    (i32.add
                        (get_local $1)
                        (i32.const - 24)
                    )
                    (get_local $3)
                )
                (i32.store
                    (i32.add
                        (get_local $1)
                        (i32.const - 8)
                    )
                    (i32.load
                        (i32.add
                            (get_local $6)
                            (i32.const - 8)
                        )
                    )
                )
                (i32.store
                    (i32.add
                        (get_local $1)
                        (i32.const - 12)
                    )
                    (i32.load
                        (i32.add
                            (get_local $6)
                            (i32.const - 12)
                        )
                    )
                )
                (i32.store
                    (i32.add
                        (get_local $1)
                        (i32.const - 16)
                    )
                    (i32.load
                        (i32.add
                            (get_local $6)
                            (i32.const - 16)
                        )
                    )
                )
                (set_local $1
                    (i32.add
                        (get_local $1)
                        (i32.const - 24)
                    )
                )
                (set_local $6
                    (get_local $2)
                )
                (br_if $label$6
                    (i32.ne
                        (get_local $7)
                        (get_local $2)
                    )
                )
            )
            (set_local $7
                (i32.load
                    (i32.add
                        (get_local $0)
                        (i32.const 4)
                    )
                )
            )
            (set_local $6
                (i32.load
                    (get_local $0)
                )
            )
            (br $label$4)
        )
        (set_local $6
            (get_local $7)
        )
    )
    (i32.store
        (get_local $0)
        (get_local $1)
    )
    (i32.store
        (i32.add
            (get_local $0)
            (i32.const 4)
        )
        (get_local $5)
    )
    (i32.store
        (i32.add
            (get_local $0)
            (i32.const 8)
        )
        (get_local $4)
    )
    (block $label$7
        (br_if $label$7
            (i32.eq
                (get_local $7)
                (get_local $6)
            )
        )
        (loop $label$8
            (set_local $1
                (i32.load
                    (tee_local $7
                        (i32.add
                            (get_local $7)
                            (i32.const - 24)
                        )
                    )
                )
            )
            (i32.store
                (get_local $7)
                (i32.const 0)
            )
            (block $label$9
                (br_if $label$9
                    (i32.eqz
                        (get_local $1)
                    )
                )
                (block $label$10
                    (br_if $label$10
                        (i32.eqz
                            (i32.and
                                (i32.load8_u offset = 32
                                    (get_local $1)
                                )
                                (i32.const 1)
                            )
                        )
                    )
                    (call $_ZdlPv
                        (i32.load
                            (i32.add
                                (get_local $1)
                                (i32.const 40)
                            )
                        )
                    )
                )
                (block $label$11
                    (br_if $label$11
                        (i32.eqz
                            (i32.and
                                (i32.load8_u offset = 16
                                    (get_local $1)
                                )
                                (i32.const 1)
                            )
                        )
                    )
                    (call $_ZdlPv
                        (i32.load
                            (i32.add
                                (get_local $1)
                                (i32.const 24)
                            )
                        )
                    )
                )
                (call $_ZdlPv
                    (get_local $1)
                )
            )
            (br_if $label$8
                (i32.ne
                    (get_local $6)
                    (get_local $7)
                )
            )
        )
    )
    (block $label$12
        (br_if $label$12
            (i32.eqz
                (get_local $6)
            )
        )
        (call $_ZdlPv
            (get_local $6)
        )
    )
 )
(func $_ZZN5slant8castvoteEyNSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEhS6_ENKUlRT_E0_clINS_4voteEEEDaS8_(param $0 i32)(param $1 i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i64)
    (local $7 i32)
    (i32.store offset = 4
        (i32.const 0)
        (tee_local $7
            (i32.sub
                (i32.load offset = 4
                    (i32.const 0)
                )
                (i32.const 16)
            )
        )
    )
    (block $label$0
        (br_if $label$0
            (i64.ne
                (tee_local $6
                    (i64.load
                        (tee_local $5
                            (i32.add
                                (tee_local $2
                                    (i32.load
                                        (get_local $0)
                                    )
                                )
                                (i32.const 64)
                            )
                        )
                    )
                )
                (i64.const - 1)
            )
        )
        (set_local $6
            (i64.const 0)
        )
        (block $label$1
            (br_if $label$1
                (i32.lt_s
                    (tee_local $4
                        (call $db_lowerbound_i64
                            (i64.load
                                (tee_local $3
                                    (i32.add
                                        (get_local $2)
                                        (i32.const 48)
                                    )
                                )
                            )
                            (i64.load
                                (i32.add
                                    (get_local $2)
                                    (i32.const 56)
                                )
                            )
                            (i64.const - 2507766120631500800)
                            (i64.const 0)
                        )
                    )
                    (i32.const 0)
                )
            )
            (drop
                (call $_ZNK5eosio11multi_indexILy15938977953078050816EN5slant4voteEJEE31load_object_by_primary_iteratorEl
                    (get_local $3)
                    (get_local $4)
                )
            )
            (i32.store offset = 12
                (get_local $7)
                (i32.const 0)
            )
            (i32.store offset = 8
                (get_local $7)
                (get_local $3)
            )
            (set_local $6
                (select
                    (i64.const - 2)
                    (i64.add
                        (tee_local $6
                            (i64.load
                                (i32.load offset = 4
                                    (call $_ZN5eosio11multi_indexILy15938977953078050816EN5slant4voteEJEE14const_iteratormmEv
                                        (i32.add
                                            (get_local $7)
                                            (i32.const 8)
                                        )
                                    )
                                )
                            )
                        )
                        (i64.const 1)
                    )
                    (i64.gt_u
                        (get_local $6)
                        (i64.const - 3)
                    )
                )
            )
        )
        (i64.store
            (i32.add
                (get_local $2)
                (i32.const 64)
            )
            (get_local $6)
        )
    )
    (call $eosio_assert
        (i64.lt_u
            (get_local $6)
            (i64.const - 2)
        )
        (i32.const 272)
    )
    (i64.store
        (get_local $1)
        (i64.load
            (get_local $5)
        )
    )
    (i64.store offset = 8
        (get_local $1)
        (i64.load
            (i32.load offset = 4
                (get_local $0)
            )
        )
    )
    (drop
        (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_
            (i32.add
                (get_local $1)
                (i32.const 16)
            )
            (i32.load offset = 8
                (get_local $0)
            )
        )
    )
    (i32.store8 offset = 28
        (get_local $1)
        (i32.load8_u
            (i32.load offset = 12
                (get_local $0)
            )
        )
    )
    (drop
        (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_
            (i32.add
                (get_local $1)
                (i32.const 32)
            )
            (i32.load offset = 16
                (get_local $0)
            )
        )
    )
    (i32.store offset = 4
        (i32.const 0)
        (i32.add
            (get_local $7)
            (i32.const 16)
        )
    )
 )
(func $_ZlsIN5eosio10datastreamIPcEEERT_S5_RKN5slant4voteE(param $0 i32)(param $1 i32)(result i32)
    (local $2 i32)
    (call $eosio_assert
        (i32.gt_s
            (i32.sub
                (i32.load offset = 8
                    (get_local $0)
                )
                (i32.load offset = 4
                    (get_local $0)
                )
            )
            (i32.const 7)
        )
        (i32.const 256)
    )
    (drop
        (call $memcpy
            (i32.load offset = 4
                (get_local $0)
            )
            (get_local $1)
            (i32.const 8)
        )
    )
    (i32.store offset = 4
        (get_local $0)
        (tee_local $2
            (i32.add
                (i32.load offset = 4
                    (get_local $0)
                )
                (i32.const 8)
            )
        )
    )
    (call $eosio_assert
        (i32.gt_s
            (i32.sub
                (i32.load offset = 8
                    (get_local $0)
                )
                (get_local $2)
            )
            (i32.const 7)
        )
        (i32.const 256)
    )
    (drop
        (call $memcpy
            (i32.load offset = 4
                (get_local $0)
            )
            (i32.add
                (get_local $1)
                (i32.const 8)
            )
            (i32.const 8)
        )
    )
    (i32.store offset = 4
        (get_local $0)
        (i32.add
            (i32.load offset = 4
                (get_local $0)
            )
            (i32.const 8)
        )
    )
    (call $eosio_assert
        (i32.gt_s
            (i32.sub
                (i32.load offset = 8
                    (tee_local $0
                        (call $_ZN5eosiolsINS_10datastreamIPcEEEERT_S5_RKNSt3__112basic_stringIcNS6_11char_traitsIcEENS6_9allocatorIcEEEE
                            (get_local $0)
                            (i32.add
                                (get_local $1)
                                (i32.const 16)
                            )
                        )
                    )
                )
                (i32.load offset = 4
                    (get_local $0)
                )
            )
            (i32.const 0)
        )
        (i32.const 256)
    )
    (drop
        (call $memcpy
            (i32.load offset = 4
                (get_local $0)
            )
            (i32.add
                (get_local $1)
                (i32.const 28)
            )
            (i32.const 1)
        )
    )
    (i32.store offset = 4
        (get_local $0)
        (i32.add
            (i32.load offset = 4
                (get_local $0)
            )
            (i32.const 1)
        )
    )
    (call $_ZN5eosiolsINS_10datastreamIPcEEEERT_S5_RKNSt3__112basic_stringIcNS6_11char_traitsIcEENS6_9allocatorIcEEEE
        (get_local $0)
        (i32.add
            (get_local $1)
            (i32.const 32)
        )
    )
 )
(func $_ZN5eosiolsINS_10datastreamIPcEEEERT_S5_RKNSt3__112basic_stringIcNS6_11char_traitsIcEENS6_9allocatorIcEEEE(param $0 i32)(param $1 i32)(result i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i64)
    (local $8 i32)
    (i32.store offset = 4
        (i32.const 0)
        (tee_local $8
            (i32.sub
                (i32.load offset = 4
                    (i32.const 0)
                )
                (i32.const 16)
            )
        )
    )
    (set_local $7
        (i64.extend_u / i32
            (select
                (i32.load offset = 4
                    (get_local $1)
                )
                (i32.shr_u
                    (tee_local $5
                        (i32.load8_u
                            (get_local $1)
                        )
                    )
                    (i32.const 1)
                )
                (i32.and
                    (get_local $5)
                    (i32.const 1)
                )
            )
        )
    )
    (set_local $6
        (i32.load offset = 4
            (get_local $0)
        )
    )
    (set_local $4
        (i32.add
            (get_local $0)
            (i32.const 8)
        )
    )
    (set_local $5
        (i32.add
            (get_local $0)
            (i32.const 4)
        )
    )
    (loop $label$0
        (set_local $2
            (i32.wrap / i64
                (get_local $7)
            )
        )
        (i32.store8 offset = 15
            (get_local $8)
            (i32.or
                (i32.shl
                    (tee_local $3
                        (i64.ne
                            (tee_local $7
                                (i64.shr_u
                                    (get_local $7)
                                    (i64.const 7)
                                )
                            )
                            (i64.const 0)
                        )
                    )
                    (i32.const 7)
                )
                (i32.and
                    (get_local $2)
                    (i32.const 127)
                )
            )
        )
        (call $eosio_assert
            (i32.gt_s
                (i32.sub
                    (i32.load
                        (get_local $4)
                    )
                    (get_local $6)
                )
                (i32.const 0)
            )
            (i32.const 256)
        )
        (drop
            (call $memcpy
                (i32.load
                    (get_local $5)
                )
                (i32.add
                    (get_local $8)
                    (i32.const 15)
                )
                (i32.const 1)
            )
        )
        (i32.store
            (get_local $5)
            (tee_local $6
                (i32.add
                    (i32.load
                        (get_local $5)
                    )
                    (i32.const 1)
                )
            )
        )
        (br_if $label$0
            (get_local $3)
        )
    )
    (block $label$1
        (br_if $label$1
            (i32.eqz
                (tee_local $5
                    (select
                        (i32.load
                            (i32.add
                                (get_local $1)
                                (i32.const 4)
                            )
                        )
                        (i32.shr_u
                            (tee_local $5
                                (i32.load8_u
                                    (get_local $1)
                                )
                            )
                            (i32.const 1)
                        )
                        (tee_local $2
                            (i32.and
                                (get_local $5)
                                (i32.const 1)
                            )
                        )
                    )
                )
            )
        )
        (set_local $3
            (i32.load offset = 8
                (get_local $1)
            )
        )
        (call $eosio_assert
            (i32.ge_s
                (i32.sub
                    (i32.load
                        (i32.add
                            (get_local $0)
                            (i32.const 8)
                        )
                    )
                    (get_local $6)
                )
                (get_local $5)
            )
            (i32.const 256)
        )
        (drop
            (call $memcpy
                (i32.load
                    (tee_local $6
                        (i32.add
                            (get_local $0)
                            (i32.const 4)
                        )
                    )
                )
                (select
                    (get_local $3)
                    (i32.add
                        (get_local $1)
                        (i32.const 1)
                    )
                    (get_local $2)
                )
                (get_local $5)
            )
        )
        (i32.store
            (get_local $6)
            (i32.add
                (i32.load
                    (get_local $6)
                )
                (get_local $5)
            )
        )
    )
    (i32.store offset = 4
        (i32.const 0)
        (i32.add
            (get_local $8)
            (i32.const 16)
        )
    )
    (get_local $0)
 )
(func $_ZNK5eosio11multi_indexILy15938977953078050816EN5slant4voteEJEE31load_object_by_primary_iteratorEl(param $0 i32)(param $1 i32)(result i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i64)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (local $9 i32)
    (set_local $8
        (tee_local $9
            (i32.sub
                (i32.load offset = 4
                    (i32.const 0)
                )
                (i32.const 48)
            )
        )
    )
    (i32.store offset = 4
        (i32.const 0)
        (get_local $9)
    )
    (block $label$0
        (br_if $label$0
            (i32.eq
                (tee_local $7
                    (i32.load
                        (i32.add
                            (get_local $0)
                            (i32.const 28)
                        )
                    )
                )
                (tee_local $2
                    (i32.load offset = 24
                        (get_local $0)
                    )
                )
            )
        )
        (set_local $3
            (i32.sub
                (i32.const 0)
                (get_local $2)
            )
        )
        (set_local $6
            (i32.add
                (get_local $7)
                (i32.const - 24)
            )
        )
        (loop $label$1
            (br_if $label$0
                (i32.eq
                    (i32.load
                        (i32.add
                            (get_local $6)
                            (i32.const 16)
                        )
                    )
                    (get_local $1)
                )
            )
            (set_local $7
                (get_local $6)
            )
            (set_local $6
                (tee_local $4
                    (i32.add
                        (get_local $6)
                        (i32.const - 24)
                    )
                )
            )
            (br_if $label$1
                (i32.ne
                    (i32.add
                        (get_local $4)
                        (get_local $3)
                    )
                    (i32.const - 24)
                )
            )
        )
    )
    (block $label$2
        (block $label$3
            (br_if $label$3
                (i32.eq
                    (get_local $7)
                    (get_local $2)
                )
            )
            (set_local $6
                (i32.load
                    (i32.add
                        (get_local $7)
                        (i32.const - 24)
                    )
                )
            )
            (br $label$2)
        )
        (call $eosio_assert
            (i32.xor
                (i32.shr_u
                    (tee_local $6
                        (call $db_get_i64
                            (get_local $1)
                            (i32.const 0)
                            (i32.const 0)
                        )
                    )
                    (i32.const 31)
                )
                (i32.const 1)
            )
            (i32.const 448)
        )
        (block $label$4
            (block $label$5
                (br_if $label$5
                    (i32.lt_u
                        (get_local $6)
                        (i32.const 513)
                    )
                )
                (set_local $4
                    (call $malloc
                        (get_local $6)
                    )
                )
                (br $label$4)
            )
            (i32.store offset = 4
                (i32.const 0)
                (tee_local $4
                    (i32.sub
                        (get_local $9)
                        (i32.and
                            (i32.add
                                (get_local $6)
                                (i32.const 15)
                            )
                            (i32.const - 16)
                        )
                    )
                )
            )
        )
        (drop
            (call $db_get_i64
                (get_local $1)
                (get_local $4)
                (get_local $6)
            )
        )
        (i32.store offset = 36
            (get_local $8)
            (get_local $4)
        )
        (i32.store offset = 32
            (get_local $8)
            (get_local $4)
        )
        (i32.store offset = 40
            (get_local $8)
            (i32.add
                (get_local $4)
                (get_local $6)
            )
        )
        (block $label$6
            (br_if $label$6
                (i32.lt_u
                    (get_local $6)
                    (i32.const 513)
                )
            )
            (call $free
                (get_local $4)
            )
        )
        (i32.store offset = 24
            (tee_local $6
                (call $_Znwj
                    (i32.const 56)
                )
            )
            (i32.const 0)
        )
        (i64.store offset = 16 align = 4
            (get_local $6)
            (i64.const 0)
        )
        (i32.store offset = 32
            (get_local $6)
            (i32.const 0)
        )
        (i32.store offset = 36
            (get_local $6)
            (i32.const 0)
        )
        (i32.store offset = 40
            (get_local $6)
            (i32.const 0)
        )
        (i32.store offset = 44
            (get_local $6)
            (get_local $0)
        )
        (drop
            (call $_ZrsIN5eosio10datastreamIPKcEEERT_S6_RN5slant4voteE
                (i32.add
                    (get_local $8)
                    (i32.const 32)
                )
                (get_local $6)
            )
        )
        (i32.store offset = 48
            (get_local $6)
            (get_local $1)
        )
        (i32.store offset = 24
            (get_local $8)
            (get_local $6)
        )
        (i64.store offset = 16
            (get_local $8)
            (tee_local $5
                (i64.load
                    (get_local $6)
                )
            )
        )
        (i32.store offset = 12
            (get_local $8)
            (tee_local $7
                (i32.load offset = 48
                    (get_local $6)
                )
            )
        )
        (block $label$7
            (block $label$8
                (br_if $label$8
                    (i32.ge_u
                        (tee_local $4
                            (i32.load
                                (tee_local $1
                                    (i32.add
                                        (get_local $0)
                                        (i32.const 28)
                                    )
                                )
                            )
                        )
                        (i32.load
                            (i32.add
                                (get_local $0)
                                (i32.const 32)
                            )
                        )
                    )
                )
                (i64.store offset = 8
                    (get_local $4)
                    (get_local $5)
                )
                (i32.store offset = 16
                    (get_local $4)
                    (get_local $7)
                )
                (i32.store offset = 24
                    (get_local $8)
                    (i32.const 0)
                )
                (i32.store
                    (get_local $4)
                    (get_local $6)
                )
                (i32.store
                    (get_local $1)
                    (i32.add
                        (get_local $4)
                        (i32.const 24)
                    )
                )
                (br $label$7)
            )
            (call $_ZNSt3__16vectorIN5eosio11multi_indexILy15938977953078050816EN5slant4voteEJEE8item_ptrENS_9allocatorIS6_EEE24__emplace_back_slow_pathIJNS_10unique_ptrINS5_4itemENS_14default_deleteISC_EEEERyRlEEEvDpOT_
                (i32.add
                    (get_local $0)
                    (i32.const 24)
                )
                (i32.add
                    (get_local $8)
                    (i32.const 24)
                )
                (i32.add
                    (get_local $8)
                    (i32.const 16)
                )
                (i32.add
                    (get_local $8)
                    (i32.const 12)
                )
            )
        )
        (set_local $4
            (i32.load offset = 24
                (get_local $8)
            )
        )
        (i32.store offset = 24
            (get_local $8)
            (i32.const 0)
        )
        (br_if $label$2
            (i32.eqz
                (get_local $4)
            )
        )
        (block $label$9
            (br_if $label$9
                (i32.eqz
                    (i32.and
                        (i32.load8_u offset = 32
                            (get_local $4)
                        )
                        (i32.const 1)
                    )
                )
            )
            (call $_ZdlPv
                (i32.load
                    (i32.add
                        (get_local $4)
                        (i32.const 40)
                    )
                )
            )
        )
        (block $label$10
            (br_if $label$10
                (i32.eqz
                    (i32.and
                        (i32.load8_u offset = 16
                            (get_local $4)
                        )
                        (i32.const 1)
                    )
                )
            )
            (call $_ZdlPv
                (i32.load
                    (i32.add
                        (get_local $4)
                        (i32.const 24)
                    )
                )
            )
        )
        (call $_ZdlPv
            (get_local $4)
        )
    )
    (i32.store offset = 4
        (i32.const 0)
        (i32.add
            (get_local $8)
            (i32.const 48)
        )
    )
    (get_local $6)
 )
(func $_ZN5eosio11multi_indexILy15938977953078050816EN5slant4voteEJEE14const_iteratormmEv(param $0 i32)(result i32)
    (local $1 i32)
    (local $2 i32)
    (i32.store offset = 4
        (i32.const 0)
        (tee_local $2
            (i32.sub
                (i32.load offset = 4
                    (i32.const 0)
                )
                (i32.const 16)
            )
        )
    )
    (block $label$0
        (block $label$1
            (br_if $label$1
                (i32.eqz
                    (tee_local $1
                        (i32.load offset = 4
                            (get_local $0)
                        )
                    )
                )
            )
            (call $eosio_assert
                (i32.xor
                    (i32.shr_u
                        (tee_local $1
                            (call $db_previous_i64
                                (i32.load offset = 48
                                    (get_local $1)
                                )
                                (i32.add
                                    (get_local $2)
                                    (i32.const 8)
                                )
                            )
                        )
                        (i32.const 31)
                    )
                    (i32.const 1)
                )
                (i32.const 400)
            )
            (br $label$0)
        )
        (call $eosio_assert
            (i32.ne
                (tee_local $1
                    (call $db_end_i64
                        (i64.load
                            (tee_local $1
                                (i32.load
                                    (get_local $0)
                                )
                            )
                        )
                        (i64.load offset = 8
                            (get_local $1)
                        )
                        (i64.const - 2507766120631500800)
                    )
                )
                (i32.const - 1)
            )
            (i32.const 336)
        )
        (call $eosio_assert
            (i32.xor
                (i32.shr_u
                    (tee_local $1
                        (call $db_previous_i64
                            (get_local $1)
                            (i32.add
                                (get_local $2)
                                (i32.const 8)
                            )
                        )
                    )
                    (i32.const 31)
                )
                (i32.const 1)
            )
            (i32.const 336)
        )
    )
    (i32.store
        (i32.add
            (get_local $0)
            (i32.const 4)
        )
        (call $_ZNK5eosio11multi_indexILy15938977953078050816EN5slant4voteEJEE31load_object_by_primary_iteratorEl
            (i32.load
                (get_local $0)
            )
            (get_local $1)
        )
    )
    (i32.store offset = 4
        (i32.const 0)
        (i32.add
            (get_local $2)
            (i32.const 16)
        )
    )
    (get_local $0)
 )
(func $_ZrsIN5eosio10datastreamIPKcEEERT_S6_RN5slant4voteE(param $0 i32)(param $1 i32)(result i32)
    (local $2 i32)
    (call $eosio_assert
        (i32.gt_u
            (i32.sub
                (i32.load offset = 8
                    (get_local $0)
                )
                (i32.load offset = 4
                    (get_local $0)
                )
            )
            (i32.const 7)
        )
        (i32.const 16)
    )
    (drop
        (call $memcpy
            (get_local $1)
            (i32.load offset = 4
                (get_local $0)
            )
            (i32.const 8)
        )
    )
    (i32.store offset = 4
        (get_local $0)
        (tee_local $2
            (i32.add
                (i32.load offset = 4
                    (get_local $0)
                )
                (i32.const 8)
            )
        )
    )
    (call $eosio_assert
        (i32.gt_u
            (i32.sub
                (i32.load offset = 8
                    (get_local $0)
                )
                (get_local $2)
            )
            (i32.const 7)
        )
        (i32.const 16)
    )
    (drop
        (call $memcpy
            (i32.add
                (get_local $1)
                (i32.const 8)
            )
            (i32.load offset = 4
                (get_local $0)
            )
            (i32.const 8)
        )
    )
    (i32.store offset = 4
        (get_local $0)
        (i32.add
            (i32.load offset = 4
                (get_local $0)
            )
            (i32.const 8)
        )
    )
    (call $eosio_assert
        (i32.ne
            (i32.load offset = 8
                (tee_local $0
                    (call $_ZN5eosiorsINS_10datastreamIPKcEEEERT_S6_RNSt3__112basic_stringIcNS7_11char_traitsIcEENS7_9allocatorIcEEEE
                        (get_local $0)
                        (i32.add
                            (get_local $1)
                            (i32.const 16)
                        )
                    )
                )
            )
            (i32.load offset = 4
                (get_local $0)
            )
        )
        (i32.const 16)
    )
    (drop
        (call $memcpy
            (i32.add
                (get_local $1)
                (i32.const 28)
            )
            (i32.load offset = 4
                (get_local $0)
            )
            (i32.const 1)
        )
    )
    (i32.store offset = 4
        (get_local $0)
        (i32.add
            (i32.load offset = 4
                (get_local $0)
            )
            (i32.const 1)
        )
    )
    (call $_ZN5eosiorsINS_10datastreamIPKcEEEERT_S6_RNSt3__112basic_stringIcNS7_11char_traitsIcEENS7_9allocatorIcEEEE
        (get_local $0)
        (i32.add
            (get_local $1)
            (i32.const 32)
        )
    )
 )
(func $_ZlsIN5eosio10datastreamIPcEEERT_S5_RKN5slant5topicE(param $0 i32)(param $1 i32)(result i32)
    (local $2 i32)
    (call $eosio_assert
        (i32.gt_s
            (i32.sub
                (i32.load offset = 8
                    (get_local $0)
                )
                (i32.load offset = 4
                    (get_local $0)
                )
            )
            (i32.const 7)
        )
        (i32.const 256)
    )
    (drop
        (call $memcpy
            (i32.load offset = 4
                (get_local $0)
            )
            (get_local $1)
            (i32.const 8)
        )
    )
    (i32.store offset = 4
        (get_local $0)
        (i32.add
            (i32.load offset = 4
                (get_local $0)
            )
            (i32.const 8)
        )
    )
    (call $eosio_assert
        (i32.gt_s
            (i32.sub
                (i32.load offset = 8
                    (tee_local $0
                        (call $_ZN5eosiolsINS_10datastreamIPcEEEERT_S5_RKNSt3__112basic_stringIcNS6_11char_traitsIcEENS6_9allocatorIcEEEE
                            (get_local $0)
                            (i32.add
                                (get_local $1)
                                (i32.const 8)
                            )
                        )
                    )
                )
                (i32.load offset = 4
                    (get_local $0)
                )
            )
            (i32.const 7)
        )
        (i32.const 256)
    )
    (drop
        (call $memcpy
            (i32.load offset = 4
                (get_local $0)
            )
            (i32.add
                (get_local $1)
                (i32.const 24)
            )
            (i32.const 8)
        )
    )
    (i32.store offset = 4
        (get_local $0)
        (tee_local $2
            (i32.add
                (i32.load offset = 4
                    (get_local $0)
                )
                (i32.const 8)
            )
        )
    )
    (call $eosio_assert
        (i32.gt_s
            (i32.sub
                (i32.load offset = 8
                    (get_local $0)
                )
                (get_local $2)
            )
            (i32.const 7)
        )
        (i32.const 256)
    )
    (drop
        (call $memcpy
            (i32.load offset = 4
                (get_local $0)
            )
            (i32.add
                (get_local $1)
                (i32.const 32)
            )
            (i32.const 8)
        )
    )
    (i32.store offset = 4
        (get_local $0)
        (tee_local $2
            (i32.add
                (i32.load offset = 4
                    (get_local $0)
                )
                (i32.const 8)
            )
        )
    )
    (call $eosio_assert
        (i32.gt_s
            (i32.sub
                (i32.load offset = 8
                    (get_local $0)
                )
                (get_local $2)
            )
            (i32.const 0)
        )
        (i32.const 256)
    )
    (drop
        (call $memcpy
            (i32.load offset = 4
                (get_local $0)
            )
            (i32.add
                (get_local $1)
                (i32.const 40)
            )
            (i32.const 1)
        )
    )
    (i32.store offset = 4
        (get_local $0)
        (i32.add
            (i32.load offset = 4
                (get_local $0)
            )
            (i32.const 1)
        )
    )
    (get_local $0)
 )
(func $_ZrsIN5eosio10datastreamIPKcEEERT_S6_RN5slant5topicE(param $0 i32)(param $1 i32)(result i32)
    (local $2 i32)
    (call $eosio_assert
        (i32.gt_u
            (i32.sub
                (i32.load offset = 8
                    (get_local $0)
                )
                (i32.load offset = 4
                    (get_local $0)
                )
            )
            (i32.const 7)
        )
        (i32.const 16)
    )
    (drop
        (call $memcpy
            (get_local $1)
            (i32.load offset = 4
                (get_local $0)
            )
            (i32.const 8)
        )
    )
    (i32.store offset = 4
        (get_local $0)
        (i32.add
            (i32.load offset = 4
                (get_local $0)
            )
            (i32.const 8)
        )
    )
    (call $eosio_assert
        (i32.gt_u
            (i32.sub
                (i32.load offset = 8
                    (tee_local $0
                        (call $_ZN5eosiorsINS_10datastreamIPKcEEEERT_S6_RNSt3__112basic_stringIcNS7_11char_traitsIcEENS7_9allocatorIcEEEE
                            (get_local $0)
                            (i32.add
                                (get_local $1)
                                (i32.const 8)
                            )
                        )
                    )
                )
                (i32.load offset = 4
                    (get_local $0)
                )
            )
            (i32.const 7)
        )
        (i32.const 16)
    )
    (drop
        (call $memcpy
            (i32.add
                (get_local $1)
                (i32.const 24)
            )
            (i32.load offset = 4
                (get_local $0)
            )
            (i32.const 8)
        )
    )
    (i32.store offset = 4
        (get_local $0)
        (tee_local $2
            (i32.add
                (i32.load offset = 4
                    (get_local $0)
                )
                (i32.const 8)
            )
        )
    )
    (call $eosio_assert
        (i32.gt_u
            (i32.sub
                (i32.load offset = 8
                    (get_local $0)
                )
                (get_local $2)
            )
            (i32.const 7)
        )
        (i32.const 16)
    )
    (drop
        (call $memcpy
            (i32.add
                (get_local $1)
                (i32.const 32)
            )
            (i32.load offset = 4
                (get_local $0)
            )
            (i32.const 8)
        )
    )
    (i32.store offset = 4
        (get_local $0)
        (tee_local $2
            (i32.add
                (i32.load offset = 4
                    (get_local $0)
                )
                (i32.const 8)
            )
        )
    )
    (call $eosio_assert
        (i32.ne
            (i32.load offset = 8
                (get_local $0)
            )
            (get_local $2)
        )
        (i32.const 16)
    )
    (drop
        (call $memcpy
            (i32.add
                (get_local $1)
                (i32.const 40)
            )
            (i32.load offset = 4
                (get_local $0)
            )
            (i32.const 1)
        )
    )
    (i32.store offset = 4
        (get_local $0)
        (i32.add
            (i32.load offset = 4
                (get_local $0)
            )
            (i32.const 1)
        )
    )
    (get_local $0)
 )
(func $_ZNSt3__16vectorIN5eosio11multi_indexILy14783879415448207360EN5slant5topicEJEE8item_ptrENS_9allocatorIS6_EEE24__emplace_back_slow_pathIJNS_10unique_ptrINS5_4itemENS_14default_deleteISC_EEEERyRlEEEvDpOT_(param $0 i32)(param $1 i32)(param $2 i32)(param $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (block $label$0
        (block $label$1
            (br_if $label$1
                (i32.ge_u
                    (tee_local $5
                        (i32.add
                            (tee_local $4
                                (i32.div_s
                                    (i32.sub
                                        (i32.load offset = 4
                                            (get_local $0)
                                        )
                                        (tee_local $6
                                            (i32.load
                                                (get_local $0)
                                            )
                                        )
                                    )
                                    (i32.const 24)
                                )
                            )
                            (i32.const 1)
                        )
                    )
                    (i32.const 178956971)
                )
            )
            (set_local $7
                (i32.const 178956970)
            )
            (block $label$2
                (block $label$3
                    (br_if $label$3
                        (i32.gt_u
                            (tee_local $6
                                (i32.div_s
                                    (i32.sub
                                        (i32.load offset = 8
                                            (get_local $0)
                                        )
                                        (get_local $6)
                                    )
                                    (i32.const 24)
                                )
                            )
                            (i32.const 89478484)
                        )
                    )
                    (br_if $label$2
                        (i32.eqz
                            (tee_local $7
                                (select
                                    (get_local $5)
                                    (tee_local $7
                                        (i32.shl
                                            (get_local $6)
                                            (i32.const 1)
                                        )
                                    )
                                    (i32.lt_u
                                        (get_local $7)
                                        (get_local $5)
                                    )
                                )
                            )
                        )
                    )
                )
                (set_local $6
                    (call $_Znwj
                        (i32.mul
                            (get_local $7)
                            (i32.const 24)
                        )
                    )
                )
                (br $label$0)
            )
            (set_local $7
                (i32.const 0)
            )
            (set_local $6
                (i32.const 0)
            )
            (br $label$0)
        )
        (call $_ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv
            (get_local $0)
        )
        (unreachable)
    )
    (set_local $5
        (i32.load
            (get_local $1)
        )
    )
    (i32.store
        (get_local $1)
        (i32.const 0)
    )
    (i32.store
        (tee_local $1
            (i32.add
                (get_local $6)
                (i32.mul
                    (get_local $4)
                    (i32.const 24)
                )
            )
        )
        (get_local $5)
    )
    (i64.store offset = 8
        (get_local $1)
        (i64.load
            (get_local $2)
        )
    )
    (i32.store offset = 16
        (get_local $1)
        (i32.load
            (get_local $3)
        )
    )
    (set_local $4
        (i32.add
            (get_local $6)
            (i32.mul
                (get_local $7)
                (i32.const 24)
            )
        )
    )
    (set_local $5
        (i32.add
            (get_local $1)
            (i32.const 24)
        )
    )
    (block $label$4
        (block $label$5
            (br_if $label$5
                (i32.eq
                    (tee_local $6
                        (i32.load
                            (i32.add
                                (get_local $0)
                                (i32.const 4)
                            )
                        )
                    )
                    (tee_local $7
                        (i32.load
                            (get_local $0)
                        )
                    )
                )
            )
            (loop $label$6
                (set_local $3
                    (i32.load
                        (tee_local $2
                            (i32.add
                                (get_local $6)
                                (i32.const - 24)
                            )
                        )
                    )
                )
                (i32.store
                    (get_local $2)
                    (i32.const 0)
                )
                (i32.store
                    (i32.add
                        (get_local $1)
                        (i32.const - 24)
                    )
                    (get_local $3)
                )
                (i32.store
                    (i32.add
                        (get_local $1)
                        (i32.const - 8)
                    )
                    (i32.load
                        (i32.add
                            (get_local $6)
                            (i32.const - 8)
                        )
                    )
                )
                (i32.store
                    (i32.add
                        (get_local $1)
                        (i32.const - 12)
                    )
                    (i32.load
                        (i32.add
                            (get_local $6)
                            (i32.const - 12)
                        )
                    )
                )
                (i32.store
                    (i32.add
                        (get_local $1)
                        (i32.const - 16)
                    )
                    (i32.load
                        (i32.add
                            (get_local $6)
                            (i32.const - 16)
                        )
                    )
                )
                (set_local $1
                    (i32.add
                        (get_local $1)
                        (i32.const - 24)
                    )
                )
                (set_local $6
                    (get_local $2)
                )
                (br_if $label$6
                    (i32.ne
                        (get_local $7)
                        (get_local $2)
                    )
                )
            )
            (set_local $7
                (i32.load
                    (i32.add
                        (get_local $0)
                        (i32.const 4)
                    )
                )
            )
            (set_local $6
                (i32.load
                    (get_local $0)
                )
            )
            (br $label$4)
        )
        (set_local $6
            (get_local $7)
        )
    )
    (i32.store
        (get_local $0)
        (get_local $1)
    )
    (i32.store
        (i32.add
            (get_local $0)
            (i32.const 4)
        )
        (get_local $5)
    )
    (i32.store
        (i32.add
            (get_local $0)
            (i32.const 8)
        )
        (get_local $4)
    )
    (block $label$7
        (br_if $label$7
            (i32.eq
                (get_local $7)
                (get_local $6)
            )
        )
        (loop $label$8
            (set_local $1
                (i32.load
                    (tee_local $7
                        (i32.add
                            (get_local $7)
                            (i32.const - 24)
                        )
                    )
                )
            )
            (i32.store
                (get_local $7)
                (i32.const 0)
            )
            (block $label$9
                (br_if $label$9
                    (i32.eqz
                        (get_local $1)
                    )
                )
                (block $label$10
                    (br_if $label$10
                        (i32.eqz
                            (i32.and
                                (i32.load8_u offset = 8
                                    (get_local $1)
                                )
                                (i32.const 1)
                            )
                        )
                    )
                    (call $_ZdlPv
                        (i32.load
                            (i32.add
                                (get_local $1)
                                (i32.const 16)
                            )
                        )
                    )
                )
                (call $_ZdlPv
                    (get_local $1)
                )
            )
            (br_if $label$8
                (i32.ne
                    (get_local $6)
                    (get_local $7)
                )
            )
        )
    )
    (block $label$11
        (br_if $label$11
            (i32.eqz
                (get_local $6)
            )
        )
        (call $_ZdlPv
            (get_local $6)
        )
    )
 )
(func $_ZN5eosio11multi_indexILy14783879415448207360EN5slant5topicEJEE6modifyIZNS1_11removetopicENS_4nameEyEUlRT_E_EEvRKS2_yOS6_(param $0 i32)(param $1 i32)(param $2 i64)(param $3 i32)
    (local $4 i64)
    (local $5 i32)
    (local $6 i32)
    (local $7 i64)
    (local $8 i32)
    (local $9 i32)
    (set_local $9
        (tee_local $8
            (i32.sub
                (i32.load offset = 4
                    (i32.const 0)
                )
                (i32.const 16)
            )
        )
    )
    (i32.store offset = 4
        (i32.const 0)
        (get_local $8)
    )
    (call $eosio_assert
        (i32.eq
            (i32.load
                (i32.add
                    (get_local $1)
                    (i32.const 44)
                )
            )
            (get_local $0)
        )
        (i32.const 480)
    )
    (call $eosio_assert
        (i64.eq
            (i64.load
                (get_local $0)
            )
            (call $current_receiver)
        )
        (i32.const 528)
    )
    (i32.store8 offset = 40
        (get_local $1)
        (i32.const 0)
    )
    (set_local $4
        (i64.load
            (get_local $1)
        )
    )
    (call $eosio_assert
        (i32.const 1)
        (i32.const 592)
    )
    (set_local $6
        (i32.add
            (tee_local $5
                (select
                    (i32.load
                        (i32.add
                            (get_local $1)
                            (i32.const 12)
                        )
                    )
                    (i32.shr_u
                        (tee_local $6
                            (i32.load8_u offset = 8
                                (get_local $1)
                            )
                        )
                        (i32.const 1)
                    )
                    (i32.and
                        (get_local $6)
                        (i32.const 1)
                    )
                )
            )
            (i32.const 25)
        )
    )
    (set_local $7
        (i64.extend_u / i32
            (get_local $5)
        )
    )
    (loop $label$0
        (set_local $6
            (i32.add
                (get_local $6)
                (i32.const 1)
            )
        )
        (br_if $label$0
            (i64.ne
                (tee_local $7
                    (i64.shr_u
                        (get_local $7)
                        (i64.const 7)
                    )
                )
                (i64.const 0)
            )
        )
    )
    (block $label$1
        (block $label$2
            (br_if $label$2
                (i32.lt_u
                    (get_local $6)
                    (i32.const 513)
                )
            )
            (set_local $8
                (call $malloc
                    (get_local $6)
                )
            )
            (br $label$1)
        )
        (i32.store offset = 4
            (i32.const 0)
            (tee_local $8
                (i32.sub
                    (get_local $8)
                    (i32.and
                        (i32.add
                            (get_local $6)
                            (i32.const 15)
                        )
                        (i32.const - 16)
                    )
                )
            )
        )
    )
    (i32.store offset = 4
        (get_local $9)
        (get_local $8)
    )
    (i32.store
        (get_local $9)
        (get_local $8)
    )
    (i32.store offset = 8
        (get_local $9)
        (i32.add
            (get_local $8)
            (get_local $6)
        )
    )
    (drop
        (call $_ZlsIN5eosio10datastreamIPcEEERT_S5_RKN5slant5topicE
            (get_local $9)
            (get_local $1)
        )
    )
    (call $db_update_i64
        (i32.load offset = 48
            (get_local $1)
        )
        (get_local $2)
        (get_local $8)
        (get_local $6)
    )
    (block $label$3
        (br_if $label$3
            (i32.lt_u
                (get_local $6)
                (i32.const 513)
            )
        )
        (call $free
            (get_local $8)
        )
    )
    (block $label$4
        (br_if $label$4
            (i64.lt_u
                (get_local $4)
                (i64.load offset = 16
                    (get_local $0)
                )
            )
        )
        (i64.store
            (i32.add
                (get_local $0)
                (i32.const 16)
            )
            (select
                (i64.const - 2)
                (i64.add
                    (get_local $4)
                    (i64.const 1)
                )
                (i64.gt_u
                    (get_local $4)
                    (i64.const - 3)
                )
            )
        )
    )
    (i32.store offset = 4
        (i32.const 0)
        (i32.add
            (get_local $9)
            (i32.const 16)
        )
    )
 )
(func $_ZN5boost4mp116detail16tuple_apply_implIRZN5eosio14execute_actionI5slantS5_JNS3_4nameENSt3__112basic_stringIcNS7_11char_traitsIcEENS7_9allocatorIcEEEEEEEbPT_MT0_FvDpT1_EEUlDpT_E_RNS7_5tupleIJS6_SD_EEEJLj0ELj1EEEEDTclclsr3stdE7forwardISE_Efp_Espclsr3stdE3getIXT1_EEclsr3stdE7forwardISG_Efp0_EEEEOSE_OSG_NS0_16integer_sequenceIjJXspT1_EEEE(param $0 i32)(param $1 i32)
    (local $2 i64)
    (local $3 i32)
    (local $4 i32)
    (i32.store offset = 4
        (i32.const 0)
        (tee_local $4
            (i32.sub
                (i32.load offset = 4
                    (i32.const 0)
                )
                (i32.const 32)
            )
        )
    )
    (set_local $2
        (i64.load
            (get_local $1)
        )
    )
    (drop
        (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_
            (get_local $4)
            (i32.add
                (get_local $1)
                (i32.const 8)
            )
        )
    )
    (set_local $1
        (i32.add
            (i32.load
                (i32.load
                    (get_local $0)
                )
            )
            (i32.shr_s
                (tee_local $3
                    (i32.load offset = 4
                        (tee_local $0
                            (i32.load offset = 4
                                (get_local $0)
                            )
                        )
                    )
                )
                (i32.const 1)
            )
        )
    )
    (set_local $0
        (i32.load
            (get_local $0)
        )
    )
    (block $label$0
        (br_if $label$0
            (i32.eqz
                (i32.and
                    (get_local $3)
                    (i32.const 1)
                )
            )
        )
        (set_local $0
            (i32.load
                (i32.add
                    (i32.load
                        (get_local $1)
                    )
                    (get_local $0)
                )
            )
        )
    )
    (drop
        (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_
            (i32.add
                (get_local $4)
                (i32.const 16)
            )
            (get_local $4)
        )
    )
    (call_indirect $FUNCSIG$viji
        (get_local $1)
        (get_local $2)
        (i32.add
            (get_local $4)
            (i32.const 16)
        )
        (get_local $0)
    )
    (block $label$1
        (br_if $label$1
            (i32.eqz
                (i32.and
                    (i32.load8_u offset = 16
                        (get_local $4)
                    )
                    (i32.const 1)
                )
            )
        )
        (call $_ZdlPv
            (i32.load offset = 24
                (get_local $4)
            )
        )
    )
    (block $label$2
        (br_if $label$2
            (i32.eqz
                (i32.and
                    (i32.load8_u
                        (get_local $4)
                    )
                    (i32.const 1)
                )
            )
        )
        (call $_ZdlPv
            (i32.load offset = 8
                (get_local $4)
            )
        )
    )
    (i32.store offset = 4
        (i32.const 0)
        (i32.add
            (get_local $4)
            (i32.const 32)
        )
    )
 )
(func $_ZN5eosio11multi_indexILy14783879415448207360EN5slant5topicEJEE7emplaceIZNS1_8addtopicENS_4nameENSt3__112basic_stringIcNS6_11char_traitsIcEENS6_9allocatorIcEEEEEUlRT_E_EENS3_14const_iteratorEyOSD_(param $0 i32)(param $1 i32)(param $2 i64)(param $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (i32.store offset = 4
        (i32.const 0)
        (tee_local $7
            (i32.sub
                (i32.load offset = 4
                    (i32.const 0)
                )
                (i32.const 48)
            )
        )
    )
    (i64.store offset = 40
        (get_local $7)
        (get_local $2)
    )
    (call $eosio_assert
        (i64.eq
            (i64.load
                (get_local $1)
            )
            (call $current_receiver)
        )
        (i32.const 192)
    )
    (i32.store offset = 20
        (get_local $7)
        (get_local $3)
    )
    (i32.store offset = 16
        (get_local $7)
        (get_local $1)
    )
    (i32.store offset = 24
        (get_local $7)
        (i32.add
            (get_local $7)
            (i32.const 40)
        )
    )
    (i32.store offset = 16
        (tee_local $3
            (call $_Znwj
                (i32.const 56)
            )
        )
        (i32.const 0)
    )
    (i64.store offset = 8 align = 4
        (get_local $3)
        (i64.const 0)
    )
    (i32.store offset = 44
        (get_local $3)
        (get_local $1)
    )
    (call $_ZZN5eosio11multi_indexILy14783879415448207360EN5slant5topicEJEE7emplaceIZNS1_8addtopicENS_4nameENSt3__112basic_stringIcNS6_11char_traitsIcEENS6_9allocatorIcEEEEEUlRT_E_EENS3_14const_iteratorEyOSD_ENKUlSE_E_clINS3_4itemEEEDaSE_
        (i32.add
            (get_local $7)
            (i32.const 16)
        )
        (get_local $3)
    )
    (i32.store offset = 32
        (get_local $7)
        (get_local $3)
    )
    (i64.store offset = 16
        (get_local $7)
        (tee_local $2
            (i64.load
                (get_local $3)
            )
        )
    )
    (i32.store offset = 12
        (get_local $7)
        (tee_local $4
            (i32.load offset = 48
                (get_local $3)
            )
        )
    )
    (block $label$0
        (block $label$1
            (br_if $label$1
                (i32.ge_u
                    (tee_local $5
                        (i32.load
                            (tee_local $6
                                (i32.add
                                    (get_local $1)
                                    (i32.const 28)
                                )
                            )
                        )
                    )
                    (i32.load
                        (i32.add
                            (get_local $1)
                            (i32.const 32)
                        )
                    )
                )
            )
            (i64.store offset = 8
                (get_local $5)
                (get_local $2)
            )
            (i32.store offset = 16
                (get_local $5)
                (get_local $4)
            )
            (i32.store offset = 32
                (get_local $7)
                (i32.const 0)
            )
            (i32.store
                (get_local $5)
                (get_local $3)
            )
            (i32.store
                (get_local $6)
                (i32.add
                    (get_local $5)
                    (i32.const 24)
                )
            )
            (br $label$0)
        )
        (call $_ZNSt3__16vectorIN5eosio11multi_indexILy14783879415448207360EN5slant5topicEJEE8item_ptrENS_9allocatorIS6_EEE24__emplace_back_slow_pathIJNS_10unique_ptrINS5_4itemENS_14default_deleteISC_EEEERyRlEEEvDpOT_
            (i32.add
                (get_local $1)
                (i32.const 24)
            )
            (i32.add
                (get_local $7)
                (i32.const 32)
            )
            (i32.add
                (get_local $7)
                (i32.const 16)
            )
            (i32.add
                (get_local $7)
                (i32.const 12)
            )
        )
    )
    (i32.store offset = 4
        (get_local $0)
        (get_local $3)
    )
    (i32.store
        (get_local $0)
        (get_local $1)
    )
    (set_local $3
        (i32.load offset = 32
            (get_local $7)
        )
    )
    (i32.store offset = 32
        (get_local $7)
        (i32.const 0)
    )
    (block $label$2
        (br_if $label$2
            (i32.eqz
                (get_local $3)
            )
        )
        (block $label$3
            (br_if $label$3
                (i32.eqz
                    (i32.and
                        (i32.load8_u offset = 8
                            (get_local $3)
                        )
                        (i32.const 1)
                    )
                )
            )
            (call $_ZdlPv
                (i32.load
                    (i32.add
                        (get_local $3)
                        (i32.const 16)
                    )
                )
            )
        )
        (call $_ZdlPv
            (get_local $3)
        )
    )
    (i32.store offset = 4
        (i32.const 0)
        (i32.add
            (get_local $7)
            (i32.const 48)
        )
    )
 )
(func $_ZZN5eosio11multi_indexILy14783879415448207360EN5slant5topicEJEE7emplaceIZNS1_8addtopicENS_4nameENSt3__112basic_stringIcNS6_11char_traitsIcEENS6_9allocatorIcEEEEEUlRT_E_EENS3_14const_iteratorEyOSD_ENKUlSE_E_clINS3_4itemEEEDaSE_(param $0 i32)(param $1 i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i64)
    (local $9 i32)
    (local $10 i32)
    (set_local $10
        (tee_local $9
            (i32.sub
                (i32.load offset = 4
                    (i32.const 0)
                )
                (i32.const 16)
            )
        )
    )
    (i32.store offset = 4
        (i32.const 0)
        (get_local $9)
    )
    (set_local $2
        (i32.load
            (get_local $0)
        )
    )
    (block $label$0
        (br_if $label$0
            (i64.ne
                (tee_local $8
                    (i64.load
                        (tee_local $6
                            (i32.add
                                (tee_local $7
                                    (i32.load
                                        (tee_local $3
                                            (i32.load offset = 4
                                                (get_local $0)
                                            )
                                        )
                                    )
                                )
                                (i32.const 24)
                            )
                        )
                    )
                )
                (i64.const - 1)
            )
        )
        (set_local $8
            (i64.const 0)
        )
        (block $label$1
            (br_if $label$1
                (i32.lt_s
                    (tee_local $5
                        (call $db_lowerbound_i64
                            (i64.load
                                (tee_local $4
                                    (i32.add
                                        (get_local $7)
                                        (i32.const 8)
                                    )
                                )
                            )
                            (i64.load
                                (i32.add
                                    (get_local $7)
                                    (i32.const 16)
                                )
                            )
                            (i64.const - 3662864658261344256)
                            (i64.const 0)
                        )
                    )
                    (i32.const 0)
                )
            )
            (drop
                (call $_ZNK5eosio11multi_indexILy14783879415448207360EN5slant5topicEJEE31load_object_by_primary_iteratorEl
                    (get_local $4)
                    (get_local $5)
                )
            )
            (i32.store offset = 4
                (get_local $10)
                (i32.const 0)
            )
            (i32.store
                (get_local $10)
                (get_local $4)
            )
            (set_local $8
                (select
                    (i64.const - 2)
                    (i64.add
                        (tee_local $8
                            (i64.load
                                (i32.load offset = 4
                                    (call $_ZN5eosio11multi_indexILy14783879415448207360EN5slant5topicEJEE14const_iteratormmEv
                                        (get_local $10)
                                    )
                                )
                            )
                        )
                        (i64.const 1)
                    )
                    (i64.gt_u
                        (get_local $8)
                        (i64.const - 3)
                    )
                )
            )
        )
        (i64.store
            (i32.add
                (get_local $7)
                (i32.const 24)
            )
            (get_local $8)
        )
    )
    (call $eosio_assert
        (i64.lt_u
            (get_local $8)
            (i64.const - 2)
        )
        (i32.const 272)
    )
    (i64.store
        (get_local $1)
        (i64.load
            (get_local $6)
        )
    )
    (drop
        (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_
            (i32.add
                (get_local $1)
                (i32.const 8)
            )
            (i32.load offset = 4
                (get_local $3)
            )
        )
    )
    (i64.store offset = 32
        (get_local $1)
        (i64.const 0)
    )
    (i64.store offset = 24
        (get_local $1)
        (i64.const 0)
    )
    (i32.store8 offset = 40
        (get_local $1)
        (i32.const 1)
    )
    (set_local $7
        (i32.add
            (tee_local $3
                (select
                    (i32.load
                        (i32.add
                            (get_local $1)
                            (i32.const 12)
                        )
                    )
                    (i32.shr_u
                        (tee_local $7
                            (i32.load8_u offset = 8
                                (get_local $1)
                            )
                        )
                        (i32.const 1)
                    )
                    (i32.and
                        (get_local $7)
                        (i32.const 1)
                    )
                )
            )
            (i32.const 25)
        )
    )
    (set_local $8
        (i64.extend_u / i32
            (get_local $3)
        )
    )
    (loop $label$2
        (set_local $7
            (i32.add
                (get_local $7)
                (i32.const 1)
            )
        )
        (br_if $label$2
            (i64.ne
                (tee_local $8
                    (i64.shr_u
                        (get_local $8)
                        (i64.const 7)
                    )
                )
                (i64.const 0)
            )
        )
    )
    (block $label$3
        (block $label$4
            (br_if $label$4
                (i32.lt_u
                    (get_local $7)
                    (i32.const 513)
                )
            )
            (set_local $9
                (call $malloc
                    (get_local $7)
                )
            )
            (br $label$3)
        )
        (i32.store offset = 4
            (i32.const 0)
            (tee_local $9
                (i32.sub
                    (get_local $9)
                    (i32.and
                        (i32.add
                            (get_local $7)
                            (i32.const 15)
                        )
                        (i32.const - 16)
                    )
                )
            )
        )
    )
    (i32.store offset = 4
        (get_local $10)
        (get_local $9)
    )
    (i32.store
        (get_local $10)
        (get_local $9)
    )
    (i32.store offset = 8
        (get_local $10)
        (i32.add
            (get_local $9)
            (get_local $7)
        )
    )
    (drop
        (call $_ZlsIN5eosio10datastreamIPcEEERT_S5_RKN5slant5topicE
            (get_local $10)
            (get_local $1)
        )
    )
    (i32.store offset = 48
        (get_local $1)
        (call $db_store_i64
            (i64.load offset = 8
                (get_local $2)
            )
            (i64.const - 3662864658261344256)
            (i64.load
                (i32.load offset = 8
                    (get_local $0)
                )
            )
            (tee_local $8
                (i64.load
                    (get_local $1)
                )
            )
            (get_local $9)
            (get_local $7)
        )
    )
    (block $label$5
        (br_if $label$5
            (i32.lt_u
                (get_local $7)
                (i32.const 513)
            )
        )
        (call $free
            (get_local $9)
        )
    )
    (block $label$6
        (br_if $label$6
            (i64.lt_u
                (get_local $8)
                (i64.load offset = 16
                    (get_local $2)
                )
            )
        )
        (i64.store
            (i32.add
                (get_local $2)
                (i32.const 16)
            )
            (select
                (i64.const - 2)
                (i64.add
                    (get_local $8)
                    (i64.const 1)
                )
                (i64.gt_u
                    (get_local $8)
                    (i64.const - 3)
                )
            )
        )
    )
    (i32.store offset = 4
        (i32.const 0)
        (i32.add
            (get_local $10)
            (i32.const 16)
        )
    )
 )
(func $_ZN5eosio11multi_indexILy14783879415448207360EN5slant5topicEJEE14const_iteratormmEv(param $0 i32)(result i32)
    (local $1 i32)
    (local $2 i32)
    (i32.store offset = 4
        (i32.const 0)
        (tee_local $2
            (i32.sub
                (i32.load offset = 4
                    (i32.const 0)
                )
                (i32.const 16)
            )
        )
    )
    (block $label$0
        (block $label$1
            (br_if $label$1
                (i32.eqz
                    (tee_local $1
                        (i32.load offset = 4
                            (get_local $0)
                        )
                    )
                )
            )
            (call $eosio_assert
                (i32.xor
                    (i32.shr_u
                        (tee_local $1
                            (call $db_previous_i64
                                (i32.load offset = 48
                                    (get_local $1)
                                )
                                (i32.add
                                    (get_local $2)
                                    (i32.const 8)
                                )
                            )
                        )
                        (i32.const 31)
                    )
                    (i32.const 1)
                )
                (i32.const 400)
            )
            (br $label$0)
        )
        (call $eosio_assert
            (i32.ne
                (tee_local $1
                    (call $db_end_i64
                        (i64.load
                            (tee_local $1
                                (i32.load
                                    (get_local $0)
                                )
                            )
                        )
                        (i64.load offset = 8
                            (get_local $1)
                        )
                        (i64.const - 3662864658261344256)
                    )
                )
                (i32.const - 1)
            )
            (i32.const 336)
        )
        (call $eosio_assert
            (i32.xor
                (i32.shr_u
                    (tee_local $1
                        (call $db_previous_i64
                            (get_local $1)
                            (i32.add
                                (get_local $2)
                                (i32.const 8)
                            )
                        )
                    )
                    (i32.const 31)
                )
                (i32.const 1)
            )
            (i32.const 336)
        )
    )
    (i32.store
        (i32.add
            (get_local $0)
            (i32.const 4)
        )
        (call $_ZNK5eosio11multi_indexILy14783879415448207360EN5slant5topicEJEE31load_object_by_primary_iteratorEl
            (i32.load
                (get_local $0)
            )
            (get_local $1)
        )
    )
    (i32.store offset = 4
        (i32.const 0)
        (i32.add
            (get_local $2)
            (i32.const 16)
        )
    )
    (get_local $0)
 )
(func $memcmp(param $0 i32)(param $1 i32)(param $2 i32)(result i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (set_local $5
        (i32.const 0)
    )
    (block $label$0
        (br_if $label$0
            (i32.eqz
                (get_local $2)
            )
        )
        (block $label$1
            (loop $label$2
                (br_if $label$1
                    (i32.ne
                        (tee_local $3
                            (i32.load8_u
                                (get_local $0)
                            )
                        )
                        (tee_local $4
                            (i32.load8_u
                                (get_local $1)
                            )
                        )
                    )
                )
                (set_local $1
                    (i32.add
                        (get_local $1)
                        (i32.const 1)
                    )
                )
                (set_local $0
                    (i32.add
                        (get_local $0)
                        (i32.const 1)
                    )
                )
                (br_if $label$2
                    (tee_local $2
                        (i32.add
                            (get_local $2)
                            (i32.const - 1)
                        )
                    )
                )
                (br $label$0)
            )
        )
        (set_local $5
            (i32.sub
                (get_local $3)
                (get_local $4)
            )
        )
    )
    (get_local $5)
 )
(func $_Znwj(param $0 i32)(result i32)
    (local $1 i32)
    (local $2 i32)
    (block $label$0
        (br_if $label$0
            (tee_local $0
                (call $malloc
                    (tee_local $1
                        (select
                            (get_local $0)
                            (i32.const 1)
                            (get_local $0)
                        )
                    )
                )
            )
        )
        (loop $label$1
            (set_local $0
                (i32.const 0)
            )
            (br_if $label$0
                (i32.eqz
                    (tee_local $2
                        (i32.load offset = 652
                            (i32.const 0)
                        )
                    )
                )
            )
            (call_indirect $FUNCSIG$v
                (get_local $2)
            )
            (br_if $label$1
                (i32.eqz
                    (tee_local $0
                        (call $malloc
                            (get_local $1)
                        )
                    )
                )
            )
        )
    )
    (get_local $0)
 )
(func $_ZdlPv(param $0 i32)
    (block $label$0
        (br_if $label$0
            (i32.eqz
                (get_local $0)
            )
        )
        (call $free
            (get_local $0)
        )
    )
 )
(func $_ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(param $0 i32)
    (call $abort)
    (unreachable)
 )
(func $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_(param $0 i32)(param $1 i32)(result i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (block $label$0
        (block $label$1
            (block $label$2
                (block $label$3
                    (br_if $label$3
                        (i32.eq
                            (get_local $0)
                            (get_local $1)
                        )
                    )
                    (set_local $2
                        (select
                            (i32.load offset = 4
                                (get_local $1)
                            )
                            (i32.shr_u
                                (tee_local $2
                                    (i32.load8_u
                                        (get_local $1)
                                    )
                                )
                                (i32.const 1)
                            )
                            (tee_local $4
                                (i32.and
                                    (get_local $2)
                                    (i32.const 1)
                                )
                            )
                        )
                    )
                    (set_local $5
                        (i32.add
                            (get_local $1)
                            (i32.const 1)
                        )
                    )
                    (set_local $6
                        (i32.load offset = 8
                            (get_local $1)
                        )
                    )
                    (set_local $1
                        (i32.const 10)
                    )
                    (block $label$4
                        (br_if $label$4
                            (i32.eqz
                                (i32.and
                                    (tee_local $3
                                        (i32.load8_u
                                            (get_local $0)
                                        )
                                    )
                                    (i32.const 1)
                                )
                            )
                        )
                        (set_local $1
                            (i32.add
                                (i32.and
                                    (tee_local $3
                                        (i32.load
                                            (get_local $0)
                                        )
                                    )
                                    (i32.const - 2)
                                )
                                (i32.const - 1)
                            )
                        )
                    )
                    (set_local $5
                        (select
                            (get_local $6)
                            (get_local $5)
                            (get_local $4)
                        )
                    )
                    (set_local $4
                        (i32.and
                            (get_local $3)
                            (i32.const 1)
                        )
                    )
                    (block $label$5
                        (block $label$6
                            (block $label$7
                                (br_if $label$7
                                    (i32.le_u
                                        (get_local $2)
                                        (get_local $1)
                                    )
                                )
                                (br_if $label$6
                                    (get_local $4)
                                )
                                (set_local $3
                                    (i32.shr_u
                                        (i32.and
                                            (get_local $3)
                                            (i32.const 254)
                                        )
                                        (i32.const 1)
                                    )
                                )
                                (br $label$5)
                            )
                            (br_if $label$2
                                (get_local $4)
                            )
                            (set_local $1
                                (i32.add
                                    (get_local $0)
                                    (i32.const 1)
                                )
                            )
                            (br_if $label$1
                                (get_local $2)
                            )
                            (br $label$0)
                        )
                        (set_local $3
                            (i32.load offset = 4
                                (get_local $0)
                            )
                        )
                    )
                    (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc
                        (get_local $0)
                        (get_local $1)
                        (i32.sub
                            (get_local $2)
                            (get_local $1)
                        )
                        (get_local $3)
                        (i32.const 0)
                        (get_local $3)
                        (get_local $2)
                        (get_local $5)
                    )
                )
                (return
(get_local $0)
     )
    )
(set_local $1
    (i32.load offset = 8
        (get_local $0)
    )
    )
(br_if $label$0
    (i32.eqz
        (get_local $2)
    )
    )
   )
(drop
    (call $memmove
        (get_local $1)
        (get_local $5)
        (get_local $2)
    )
)
  )
(i32.store8
    (i32.add
        (get_local $1)
        (get_local $2)
    )
    (i32.const 0)
)
    (block $label$8
        (br_if $label$8
            (i32.and
                (i32.load8_u
                    (get_local $0)
                )
                (i32.const 1)
            )
        )
        (i32.store8
            (get_local $0)
            (i32.shl
                (get_local $2)
                (i32.const 1)
            )
        )
        (return
(get_local $0)
   )
  )
(i32.store offset = 4
    (get_local $0)
    (get_local $2)
  )
(get_local $0)
 )
(func $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc(param $0 i32)(param $1 i32)(param $2 i32)(param $3 i32)(param $4 i32)(param $5 i32)(param $6 i32)(param $7 i32)
    (local $8 i32)
    (local $9 i32)
    (local $10 i32)
    (block $label$0
        (br_if $label$0
            (i32.lt_u
                (i32.sub
                    (i32.const - 18)
                    (get_local $1)
                )
                (get_local $2)
            )
        )
        (block $label$1
            (block $label$2
                (br_if $label$2
                    (i32.and
                        (i32.load8_u
                            (get_local $0)
                        )
                        (i32.const 1)
                    )
                )
                (set_local $9
                    (i32.add
                        (get_local $0)
                        (i32.const 1)
                    )
                )
                (br $label$1)
            )
            (set_local $9
                (i32.load offset = 8
                    (get_local $0)
                )
            )
        )
        (set_local $10
            (i32.const - 17)
        )
        (block $label$3
            (br_if $label$3
                (i32.gt_u
                    (get_local $1)
                    (i32.const 2147483622)
                )
            )
            (set_local $10
                (i32.const 11)
            )
            (br_if $label$3
                (i32.lt_u
                    (tee_local $2
                        (select
                            (tee_local $8
                                (i32.shl
                                    (get_local $1)
                                    (i32.const 1)
                                )
                            )
                            (tee_local $2
                                (i32.add
                                    (get_local $2)
                                    (get_local $1)
                                )
                            )
                            (i32.lt_u
                                (get_local $2)
                                (get_local $8)
                            )
                        )
                    )
                    (i32.const 11)
                )
            )
            (set_local $10
                (i32.and
                    (i32.add
                        (get_local $2)
                        (i32.const 16)
                    )
                    (i32.const - 16)
                )
            )
        )
        (set_local $2
            (call $_Znwj
                (get_local $10)
            )
        )
        (block $label$4
            (br_if $label$4
                (i32.eqz
                    (get_local $4)
                )
            )
            (drop
                (call $memcpy
                    (get_local $2)
                    (get_local $9)
                    (get_local $4)
                )
            )
        )
        (block $label$5
            (br_if $label$5
                (i32.eqz
                    (get_local $6)
                )
            )
            (drop
                (call $memcpy
                    (i32.add
                        (get_local $2)
                        (get_local $4)
                    )
                    (get_local $7)
                    (get_local $6)
                )
            )
        )
        (block $label$6
            (br_if $label$6
                (i32.eqz
                    (tee_local $7
                        (i32.sub
                            (tee_local $3
                                (i32.sub
                                    (get_local $3)
                                    (get_local $5)
                                )
                            )
                            (get_local $4)
                        )
                    )
                )
            )
            (drop
                (call $memcpy
                    (i32.add
                        (i32.add
                            (get_local $2)
                            (get_local $4)
                        )
                        (get_local $6)
                    )
                    (i32.add
                        (i32.add
                            (get_local $9)
                            (get_local $4)
                        )
                        (get_local $5)
                    )
                    (get_local $7)
                )
            )
        )
        (block $label$7
            (br_if $label$7
                (i32.eq
                    (get_local $1)
                    (i32.const 10)
                )
            )
            (call $_ZdlPv
                (get_local $9)
            )
        )
        (i32.store offset = 8
            (get_local $0)
            (get_local $2)
        )
        (i32.store
            (get_local $0)
            (i32.or
                (get_local $10)
                (i32.const 1)
            )
        )
        (i32.store offset = 4
            (get_local $0)
            (tee_local $4
                (i32.add
                    (get_local $3)
                    (get_local $6)
                )
            )
        )
        (i32.store8
            (i32.add
                (get_local $2)
                (get_local $4)
            )
            (i32.const 0)
        )
        (return)
  )
(call $abort)
(unreachable)
 )
(func $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEj(param $0 i32)(param $1 i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (block $label$0
        (br_if $label$0
            (i32.ge_u
                (get_local $1)
                (i32.const - 16)
            )
        )
        (set_local $2
            (i32.const 10)
        )
        (block $label$1
            (br_if $label$1
                (i32.eqz
                    (i32.and
                        (tee_local $5
                            (i32.load8_u
                                (get_local $0)
                            )
                        )
                        (i32.const 1)
                    )
                )
            )
            (set_local $2
                (i32.add
                    (i32.and
                        (tee_local $5
                            (i32.load
                                (get_local $0)
                            )
                        )
                        (i32.const - 2)
                    )
                    (i32.const - 1)
                )
            )
        )
        (block $label$2
            (block $label$3
                (br_if $label$3
                    (i32.and
                        (get_local $5)
                        (i32.const 1)
                    )
                )
                (set_local $3
                    (i32.shr_u
                        (i32.and
                            (get_local $5)
                            (i32.const 254)
                        )
                        (i32.const 1)
                    )
                )
                (br $label$2)
            )
            (set_local $3
                (i32.load offset = 4
                    (get_local $0)
                )
            )
        )
        (set_local $4
            (i32.const 10)
        )
        (block $label$4
            (br_if $label$4
                (i32.lt_u
                    (tee_local $1
                        (select
                            (get_local $3)
                            (get_local $1)
                            (i32.gt_u
                                (get_local $3)
                                (get_local $1)
                            )
                        )
                    )
                    (i32.const 11)
                )
            )
            (set_local $4
                (i32.add
                    (i32.and
                        (i32.add
                            (get_local $1)
                            (i32.const 16)
                        )
                        (i32.const - 16)
                    )
                    (i32.const - 1)
                )
            )
        )
        (block $label$5
            (br_if $label$5
                (i32.eq
                    (get_local $4)
                    (get_local $2)
                )
            )
            (block $label$6
                (block $label$7
                    (br_if $label$7
                        (i32.ne
                            (get_local $4)
                            (i32.const 10)
                        )
                    )
                    (set_local $6
                        (i32.const 1)
                    )
                    (set_local $1
                        (i32.add
                            (get_local $0)
                            (i32.const 1)
                        )
                    )
                    (set_local $2
                        (i32.load offset = 8
                            (get_local $0)
                        )
                    )
                    (set_local $7
                        (i32.const 0)
                    )
                    (br $label$6)
                )
                (set_local $1
                    (call $_Znwj
                        (i32.add
                            (get_local $4)
                            (i32.const 1)
                        )
                    )
                )
                (block $label$8
                    (br_if $label$8
                        (i32.gt_u
                            (get_local $4)
                            (get_local $2)
                        )
                    )
                    (br_if $label$5
                        (i32.eqz
                            (get_local $1)
                        )
                    )
                )
                (block $label$9
                    (br_if $label$9
                        (i32.and
                            (tee_local $5
                                (i32.load8_u
                                    (get_local $0)
                                )
                            )
                            (i32.const 1)
                        )
                    )
                    (set_local $7
                        (i32.const 1)
                    )
                    (set_local $2
                        (i32.add
                            (get_local $0)
                            (i32.const 1)
                        )
                    )
                    (set_local $6
                        (i32.const 0)
                    )
                    (br $label$6)
                )
                (set_local $2
                    (i32.load offset = 8
                        (get_local $0)
                    )
                )
                (set_local $6
                    (i32.const 1)
                )
                (set_local $7
                    (i32.const 1)
                )
            )
            (block $label$10
                (block $label$11
                    (br_if $label$11
                        (i32.and
                            (get_local $5)
                            (i32.const 1)
                        )
                    )
                    (set_local $5
                        (i32.shr_u
                            (i32.and
                                (get_local $5)
                                (i32.const 254)
                            )
                            (i32.const 1)
                        )
                    )
                    (br $label$10)
                )
                (set_local $5
                    (i32.load offset = 4
                        (get_local $0)
                    )
                )
            )
            (block $label$12
                (br_if $label$12
                    (i32.eqz
                        (tee_local $5
                            (i32.add
                                (get_local $5)
                                (i32.const 1)
                            )
                        )
                    )
                )
                (drop
                    (call $memcpy
                        (get_local $1)
                        (get_local $2)
                        (get_local $5)
                    )
                )
            )
            (block $label$13
                (br_if $label$13
                    (i32.eqz
                        (get_local $6)
                    )
                )
                (call $_ZdlPv
                    (get_local $2)
                )
            )
            (block $label$14
                (br_if $label$14
                    (i32.eqz
                        (get_local $7)
                    )
                )
                (i32.store offset = 4
                    (get_local $0)
                    (get_local $3)
                )
                (i32.store offset = 8
                    (get_local $0)
                    (get_local $1)
                )
                (i32.store
                    (get_local $0)
                    (i32.or
                        (i32.add
                            (get_local $4)
                            (i32.const 1)
                        )
                        (i32.const 1)
                    )
                )
                (return)
    )
(i32.store8
    (get_local $0)
    (i32.shl
        (get_local $3)
        (i32.const 1)
    )
)
   )
(return)
  )
(call $abort)
(unreachable)
 )
(func $_ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv(param $0 i32)
    (call $abort)
    (unreachable)
 )
(func $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(param $0 i32)(param $1 i32)(result i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (i64.store align = 4
        (get_local $0)
        (i64.const 0)
    )
    (i32.store
        (tee_local $3
            (i32.add
                (get_local $0)
                (i32.const 8)
            )
        )
        (i32.const 0)
    )
    (block $label$0
        (br_if $label$0
            (i32.and
                (i32.load8_u
                    (get_local $1)
                )
                (i32.const 1)
            )
        )
        (i64.store align = 4
            (get_local $0)
            (i64.load align = 4
                (get_local $1)
            )
        )
        (i32.store
            (get_local $3)
            (i32.load
                (i32.add
                    (get_local $1)
                    (i32.const 8)
                )
            )
        )
        (return
(get_local $0)
   )
  )
(block $label$1
    (br_if $label$1
        (i32.ge_u
            (tee_local $3
                (i32.load offset = 4
                    (get_local $1)
                )
            )
            (i32.const - 16)
        )
    )
    (set_local $2
        (i32.load offset = 8
            (get_local $1)
        )
    )
    (block $label$2
        (block $label$3
            (block $label$4
                (br_if $label$4
                    (i32.ge_u
                        (get_local $3)
                        (i32.const 11)
                    )
                )
                (i32.store8
                    (get_local $0)
                    (i32.shl
                        (get_local $3)
                        (i32.const 1)
                    )
                )
                (set_local $1
                    (i32.add
                        (get_local $0)
                        (i32.const 1)
                    )
                )
                (br_if $label$3
                    (get_local $3)
                )
                (br $label$2)
            )
            (set_local $1
                (call $_Znwj
                    (tee_local $4
                        (i32.and
                            (i32.add
                                (get_local $3)
                                (i32.const 16)
                            )
                            (i32.const - 16)
                        )
                    )
                )
            )
            (i32.store
                (get_local $0)
                (i32.or
                    (get_local $4)
                    (i32.const 1)
                )
            )
            (i32.store offset = 8
                (get_local $0)
                (get_local $1)
            )
            (i32.store offset = 4
                (get_local $0)
                (get_local $3)
            )
        )
        (drop
            (call $memcpy
                (get_local $1)
                (get_local $2)
                (get_local $3)
            )
        )
    )
    (i32.store8
        (i32.add
            (get_local $1)
            (get_local $3)
        )
        (i32.const 0)
    )
    (return
(get_local $0)
   )
  )
(call $abort)
(unreachable)
 )
(func $malloc(param $0 i32)(result i32)
    (call $_ZN5eosio14memory_manager6mallocEm
        (i32.const 656)
        (get_local $0)
    )
 )
(func $_ZN5eosio14memory_manager6mallocEm(param $0 i32)(param $1 i32)(result i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (local $9 i32)
    (local $10 i32)
    (local $11 i32)
    (local $12 i32)
    (local $13 i32)
    (block $label$0
        (br_if $label$0
            (i32.eqz
                (get_local $1)
            )
        )
        (block $label$1
            (br_if $label$1
                (tee_local $13
                    (i32.load offset = 8384
                        (get_local $0)
                    )
                )
            )
            (set_local $13
                (i32.const 16)
            )
            (i32.store
                (i32.add
                    (get_local $0)
                    (i32.const 8384)
                )
                (i32.const 16)
            )
        )
        (set_local $2
            (select
                (i32.sub
                    (i32.add
                        (get_local $1)
                        (i32.const 8)
                    )
                    (tee_local $2
                        (i32.and
                            (i32.add
                                (get_local $1)
                                (i32.const 4)
                            )
                            (i32.const 7)
                        )
                    )
                )
                (get_local $1)
                (get_local $2)
            )
        )
        (block $label$2
            (block $label$3
                (block $label$4
                    (br_if $label$4
                        (i32.ge_u
                            (tee_local $10
                                (i32.load offset = 8388
                                    (get_local $0)
                                )
                            )
                            (get_local $13)
                        )
                    )
                    (set_local $1
                        (i32.add
                            (i32.add
                                (get_local $0)
                                (i32.mul
                                    (get_local $10)
                                    (i32.const 12)
                                )
                            )
                            (i32.const 8192)
                        )
                    )
                    (block $label$5
                        (br_if $label$5
                            (get_local $10)
                        )
                        (br_if $label$5
                            (i32.load
                                (tee_local $13
                                    (i32.add
                                        (get_local $0)
                                        (i32.const 8196)
                                    )
                                )
                            )
                        )
                        (i32.store
                            (get_local $1)
                            (i32.const 8192)
                        )
                        (i32.store
                            (get_local $13)
                            (get_local $0)
                        )
                    )
                    (set_local $10
                        (i32.add
                            (get_local $2)
                            (i32.const 4)
                        )
                    )
                    (loop $label$6
                        (block $label$7
                            (br_if $label$7
                                (i32.gt_u
                                    (i32.add
                                        (tee_local $13
                                            (i32.load offset = 8
                                                (get_local $1)
                                            )
                                        )
                                        (get_local $10)
                                    )
                                    (i32.load
                                        (get_local $1)
                                    )
                                )
                            )
                            (i32.store
                                (tee_local $13
                                    (i32.add
                                        (i32.load offset = 4
                                            (get_local $1)
                                        )
                                        (get_local $13)
                                    )
                                )
                                (i32.or
                                    (i32.and
                                        (i32.load
                                            (get_local $13)
                                        )
                                        (i32.const - 2147483648)
                                    )
                                    (get_local $2)
                                )
                            )
                            (i32.store
                                (tee_local $1
                                    (i32.add
                                        (get_local $1)
                                        (i32.const 8)
                                    )
                                )
                                (i32.add
                                    (i32.load
                                        (get_local $1)
                                    )
                                    (get_local $10)
                                )
                            )
                            (i32.store
                                (get_local $13)
                                (i32.or
                                    (i32.load
                                        (get_local $13)
                                    )
                                    (i32.const - 2147483648)
                                )
                            )
                            (br_if $label$3
                                (tee_local $1
                                    (i32.add
                                        (get_local $13)
                                        (i32.const 4)
                                    )
                                )
                            )
                        )
                        (br_if $label$6
                            (tee_local $1
                                (call $_ZN5eosio14memory_manager16next_active_heapEv
                                    (get_local $0)
                                )
                            )
                        )
                    )
                )
                (set_local $4
                    (i32.sub
                        (i32.const 2147483644)
                        (get_local $2)
                    )
                )
                (set_local $11
                    (i32.add
                        (get_local $0)
                        (i32.const 8392)
                    )
                )
                (set_local $12
                    (i32.add
                        (get_local $0)
                        (i32.const 8384)
                    )
                )
                (set_local $13
                    (tee_local $3
                        (i32.load offset = 8392
                            (get_local $0)
                        )
                    )
                )
                (loop $label$8
                    (call $eosio_assert
                        (i32.eq
                            (i32.load
                                (i32.add
                                    (tee_local $1
                                        (i32.add
                                            (get_local $0)
                                            (i32.mul
                                                (get_local $13)
                                                (i32.const 12)
                                            )
                                        )
                                    )
                                    (i32.const 8200)
                                )
                            )
                            (i32.load
                                (tee_local $5
                                    (i32.add
                                        (get_local $1)
                                        (i32.const 8192)
                                    )
                                )
                            )
                        )
                        (i32.const 9056)
                    )
                    (set_local $13
                        (i32.add
                            (tee_local $6
                                (i32.load
                                    (i32.add
                                        (get_local $1)
                                        (i32.const 8196)
                                    )
                                )
                            )
                            (i32.const 4)
                        )
                    )
                    (loop $label$9
                        (set_local $7
                            (i32.add
                                (get_local $6)
                                (i32.load
                                    (get_local $5)
                                )
                            )
                        )
                        (set_local $1
                            (i32.and
                                (tee_local $9
                                    (i32.load
                                        (tee_local $8
                                            (i32.add
                                                (get_local $13)
                                                (i32.const - 4)
                                            )
                                        )
                                    )
                                )
                                (i32.const 2147483647)
                            )
                        )
                        (block $label$10
                            (br_if $label$10
                                (i32.lt_s
                                    (get_local $9)
                                    (i32.const 0)
                                )
                            )
                            (block $label$11
                                (br_if $label$11
                                    (i32.ge_u
                                        (get_local $1)
                                        (get_local $2)
                                    )
                                )
                                (loop $label$12
                                    (br_if $label$11
                                        (i32.ge_u
                                            (tee_local $10
                                                (i32.add
                                                    (get_local $13)
                                                    (get_local $1)
                                                )
                                            )
                                            (get_local $7)
                                        )
                                    )
                                    (br_if $label$11
                                        (i32.lt_s
                                            (tee_local $10
                                                (i32.load
                                                    (get_local $10)
                                                )
                                            )
                                            (i32.const 0)
                                        )
                                    )
                                    (br_if $label$12
                                        (i32.lt_u
                                            (tee_local $1
                                                (i32.add
                                                    (i32.add
                                                        (get_local $1)
                                                        (i32.and
                                                            (get_local $10)
                                                            (i32.const 2147483647)
                                                        )
                                                    )
                                                    (i32.const 4)
                                                )
                                            )
                                            (get_local $2)
                                        )
                                    )
                                )
                            )
                            (i32.store
                                (get_local $8)
                                (i32.or
                                    (select
                                        (get_local $1)
                                        (get_local $2)
                                        (i32.lt_u
                                            (get_local $1)
                                            (get_local $2)
                                        )
                                    )
                                    (i32.and
                                        (get_local $9)
                                        (i32.const - 2147483648)
                                    )
                                )
                            )
                            (block $label$13
                                (br_if $label$13
                                    (i32.le_u
                                        (get_local $1)
                                        (get_local $2)
                                    )
                                )
                                (i32.store
                                    (i32.add
                                        (get_local $13)
                                        (get_local $2)
                                    )
                                    (i32.and
                                        (i32.add
                                            (get_local $4)
                                            (get_local $1)
                                        )
                                        (i32.const 2147483647)
                                    )
                                )
                            )
                            (br_if $label$2
                                (i32.ge_u
                                    (get_local $1)
                                    (get_local $2)
                                )
                            )
                        )
                        (br_if $label$9
                            (i32.lt_u
                                (tee_local $13
                                    (i32.add
                                        (i32.add
                                            (get_local $13)
                                            (get_local $1)
                                        )
                                        (i32.const 4)
                                    )
                                )
                                (get_local $7)
                            )
                        )
                    )
                    (set_local $1
                        (i32.const 0)
                    )
                    (i32.store
                        (get_local $11)
                        (tee_local $13
                            (select
                                (i32.const 0)
                                (tee_local $13
                                    (i32.add
                                        (i32.load
                                            (get_local $11)
                                        )
                                        (i32.const 1)
                                    )
                                )
                                (i32.eq
                                    (get_local $13)
                                    (i32.load
                                        (get_local $12)
                                    )
                                )
                            )
                        )
                    )
                    (br_if $label$8
                        (i32.ne
                            (get_local $13)
                            (get_local $3)
                        )
                    )
                )
            )
            (return
(get_local $1)
    )
   )
(i32.store
    (get_local $8)
    (i32.or
        (i32.load
            (get_local $8)
        )
        (i32.const - 2147483648)
    )
)
    (return
(get_local $13)
   )
  )
(i32.const 0)
 )
(func $_ZN5eosio14memory_manager16next_active_heapEv(param $0 i32)(result i32)
    (local $1 i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (set_local $1
        (i32.load offset = 8388
            (get_local $0)
        )
    )
    (block $label$0
        (block $label$1
            (br_if $label$1
                (i32.eqz
                    (i32.load8_u offset = 9142
                        (i32.const 0)
                    )
                )
            )
            (set_local $7
                (i32.load offset = 9144
                    (i32.const 0)
                )
            )
            (br $label$0)
        )
        (set_local $7
            (current_memory)
        )
        (i32.store8 offset = 9142
            (i32.const 0)
            (i32.const 1)
        )
        (i32.store offset = 9144
            (i32.const 0)
            (tee_local $7
                (i32.shl
                    (get_local $7)
                    (i32.const 16)
                )
            )
        )
    )
    (set_local $3
        (get_local $7)
    )
    (block $label$2
        (block $label$3
            (block $label$4
                (block $label$5
                    (br_if $label$5
                        (i32.le_u
                            (tee_local $2
                                (i32.shr_u
                                    (i32.add
                                        (get_local $7)
                                        (i32.const 65535)
                                    )
                                    (i32.const 16)
                                )
                            )
                            (tee_local $8
                                (current_memory)
                            )
                        )
                    )
                    (drop
                        (grow_memory
                            (i32.sub
                                (get_local $2)
                                (get_local $8)
                            )
                        )
                    )
                    (set_local $8
                        (i32.const 0)
                    )
                    (br_if $label$4
                        (i32.ne
                            (get_local $2)
                            (current_memory)
                        )
                    )
                    (set_local $3
                        (i32.load offset = 9144
                            (i32.const 0)
                        )
                    )
                )
                (set_local $8
                    (i32.const 0)
                )
                (i32.store offset = 9144
                    (i32.const 0)
                    (get_local $3)
                )
                (br_if $label$4
                    (i32.lt_s
                        (get_local $7)
                        (i32.const 0)
                    )
                )
                (set_local $2
                    (i32.add
                        (get_local $0)
                        (i32.mul
                            (get_local $1)
                            (i32.const 12)
                        )
                    )
                )
                (set_local $7
                    (i32.sub
                        (i32.sub
                            (i32.add
                                (get_local $7)
                                (select
                                    (i32.const 65536)
                                    (i32.const 131072)
                                    (tee_local $6
                                        (i32.lt_u
                                            (tee_local $8
                                                (i32.and
                                                    (get_local $7)
                                                    (i32.const 65535)
                                                )
                                            )
                                            (i32.const 64513)
                                        )
                                    )
                                )
                            )
                            (select
                                (get_local $8)
                                (i32.and
                                    (get_local $7)
                                    (i32.const 131071)
                                )
                                (get_local $6)
                            )
                        )
                        (get_local $7)
                    )
                )
                (block $label$6
                    (br_if $label$6
                        (i32.load8_u offset = 9142
                            (i32.const 0)
                        )
                    )
                    (set_local $3
                        (current_memory)
                    )
                    (i32.store8 offset = 9142
                        (i32.const 0)
                        (i32.const 1)
                    )
                    (i32.store offset = 9144
                        (i32.const 0)
                        (tee_local $3
                            (i32.shl
                                (get_local $3)
                                (i32.const 16)
                            )
                        )
                    )
                )
                (set_local $2
                    (i32.add
                        (get_local $2)
                        (i32.const 8192)
                    )
                )
                (br_if $label$3
                    (i32.lt_s
                        (get_local $7)
                        (i32.const 0)
                    )
                )
                (set_local $6
                    (get_local $3)
                )
                (block $label$7
                    (br_if $label$7
                        (i32.le_u
                            (tee_local $8
                                (i32.shr_u
                                    (i32.add
                                        (i32.add
                                            (tee_local $5
                                                (i32.and
                                                    (i32.add
                                                        (get_local $7)
                                                        (i32.const 7)
                                                    )
                                                    (i32.const - 8)
                                                )
                                            )
                                            (get_local $3)
                                        )
                                        (i32.const 65535)
                                    )
                                    (i32.const 16)
                                )
                            )
                            (tee_local $4
                                (current_memory)
                            )
                        )
                    )
                    (drop
                        (grow_memory
                            (i32.sub
                                (get_local $8)
                                (get_local $4)
                            )
                        )
                    )
                    (br_if $label$3
                        (i32.ne
                            (get_local $8)
                            (current_memory)
                        )
                    )
                    (set_local $6
                        (i32.load offset = 9144
                            (i32.const 0)
                        )
                    )
                )
                (i32.store offset = 9144
                    (i32.const 0)
                    (i32.add
                        (get_local $6)
                        (get_local $5)
                    )
                )
                (br_if $label$3
                    (i32.eq
                        (get_local $3)
                        (i32.const - 1)
                    )
                )
                (br_if $label$2
                    (i32.eq
                        (i32.add
                            (tee_local $6
                                (i32.load
                                    (i32.add
                                        (tee_local $1
                                            (i32.add
                                                (get_local $0)
                                                (i32.mul
                                                    (get_local $1)
                                                    (i32.const 12)
                                                )
                                            )
                                        )
                                        (i32.const 8196)
                                    )
                                )
                            )
                            (tee_local $8
                                (i32.load
                                    (get_local $2)
                                )
                            )
                        )
                        (get_local $3)
                    )
                )
                (block $label$8
                    (br_if $label$8
                        (i32.eq
                            (get_local $8)
                            (tee_local $1
                                (i32.load
                                    (tee_local $5
                                        (i32.add
                                            (get_local $1)
                                            (i32.const 8200)
                                        )
                                    )
                                )
                            )
                        )
                    )
                    (i32.store
                        (tee_local $6
                            (i32.add
                                (get_local $6)
                                (get_local $1)
                            )
                        )
                        (i32.or
                            (i32.and
                                (i32.load
                                    (get_local $6)
                                )
                                (i32.const - 2147483648)
                            )
                            (i32.add
                                (i32.sub
                                    (i32.const - 4)
                                    (get_local $1)
                                )
                                (get_local $8)
                            )
                        )
                    )
                    (i32.store
                        (get_local $5)
                        (i32.load
                            (get_local $2)
                        )
                    )
                    (i32.store
                        (get_local $6)
                        (i32.and
                            (i32.load
                                (get_local $6)
                            )
                            (i32.const 2147483647)
                        )
                    )
                )
                (i32.store
                    (tee_local $2
                        (i32.add
                            (get_local $0)
                            (i32.const 8388)
                        )
                    )
                    (tee_local $2
                        (i32.add
                            (i32.load
                                (get_local $2)
                            )
                            (i32.const 1)
                        )
                    )
                )
                (i32.store
                    (i32.add
                        (tee_local $0
                            (i32.add
                                (get_local $0)
                                (i32.mul
                                    (get_local $2)
                                    (i32.const 12)
                                )
                            )
                        )
                        (i32.const 8196)
                    )
                    (get_local $3)
                )
                (i32.store
                    (tee_local $8
                        (i32.add
                            (get_local $0)
                            (i32.const 8192)
                        )
                    )
                    (get_local $7)
                )
            )
            (return
(get_local $8)
    )
   )
(block $label$9
    (br_if $label$9
        (i32.eq
            (tee_local $8
                (i32.load
                    (get_local $2)
                )
            )
            (tee_local $7
                (i32.load
                    (tee_local $1
                        (i32.add
                            (tee_local $3
                                (i32.add
                                    (get_local $0)
                                    (i32.mul
                                        (get_local $1)
                                        (i32.const 12)
                                    )
                                )
                            )
                            (i32.const 8200)
                        )
                    )
                )
            )
        )
    )
    (i32.store
        (tee_local $3
            (i32.add
                (i32.load
                    (i32.add
                        (get_local $3)
                        (i32.const 8196)
                    )
                )
                (get_local $7)
            )
        )
        (i32.or
            (i32.and
                (i32.load
                    (get_local $3)
                )
                (i32.const - 2147483648)
            )
            (i32.add
                (i32.sub
                    (i32.const - 4)
                    (get_local $7)
                )
                (get_local $8)
            )
        )
    )
    (i32.store
        (get_local $1)
        (i32.load
            (get_local $2)
        )
    )
    (i32.store
        (get_local $3)
        (i32.and
            (i32.load
                (get_local $3)
            )
            (i32.const 2147483647)
        )
    )
   )
(i32.store offset = 8384
    (get_local $0)
    (tee_local $3
        (i32.add
            (i32.load
                (tee_local $7
                    (i32.add
                        (get_local $0)
                        (i32.const 8388)
                    )
                )
            )
            (i32.const 1)
        )
    )
   )
(i32.store
    (get_local $7)
    (get_local $3)
)
    (return
(i32.const 0)
   )
  )
(i32.store
    (get_local $2)
    (i32.add
        (get_local $8)
        (get_local $7)
    )
)
    (get_local $2)
 )
(func $free(param $0 i32)
    (local $1 i32)
    (local $2 i32)
    (local $3 i32)
    (block $label$0
        (block $label$1
            (br_if $label$1
                (i32.eqz
                    (get_local $0)
                )
            )
            (br_if $label$1
                (i32.lt_s
                    (tee_local $2
                        (i32.load offset = 9040
                            (i32.const 0)
                        )
                    )
                    (i32.const 1)
                )
            )
            (set_local $3
                (i32.const 8848)
            )
            (set_local $1
                (i32.add
                    (i32.mul
                        (get_local $2)
                        (i32.const 12)
                    )
                    (i32.const 8848)
                )
            )
            (loop $label$2
                (br_if $label$1
                    (i32.eqz
                        (tee_local $2
                            (i32.load
                                (i32.add
                                    (get_local $3)
                                    (i32.const 4)
                                )
                            )
                        )
                    )
                )
                (block $label$3
                    (br_if $label$3
                        (i32.gt_u
                            (i32.add
                                (get_local $2)
                                (i32.const 4)
                            )
                            (get_local $0)
                        )
                    )
                    (br_if $label$0
                        (i32.gt_u
                            (i32.add
                                (get_local $2)
                                (i32.load
                                    (get_local $3)
                                )
                            )
                            (get_local $0)
                        )
                    )
                )
                (br_if $label$2
                    (i32.lt_u
                        (tee_local $3
                            (i32.add
                                (get_local $3)
                                (i32.const 12)
                            )
                        )
                        (get_local $1)
                    )
                )
            )
        )
        (return)
  )
(i32.store
    (tee_local $3
        (i32.add
            (get_local $0)
            (i32.const - 4)
        )
    )
    (i32.and
        (i32.load
            (get_local $3)
        )
        (i32.const 2147483647)
    )
)
 )
(func $__wasm_nullptr(type $FUNCSIG$v)
    (unreachable)
 )
)
`;