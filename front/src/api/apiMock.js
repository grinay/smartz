export default function subscribeMockRequests(mockApi) {
    mockApi
        // .onGet('/constructors').reply(200, {
        //     const: ['rrr']
        // })
        // .onGet('/instances').reply(200, {
        //     inst: [1, 1]
        // })
        .onAny(/\/constructors\/........................\/construct/).reply(200, {
            result: 'error',
            error_descr: 'Some problem',
            //             errors: {
            //                 поле1: текст ошибки,
            //                 поле2: [текст ошибки1, текст ошибки2] - это еще никто не возвращает, но хотелось бы
            //    группа1: {
            //                 поле1: текст ошибки(в группе может быть такой же id, как и в другой группе или вне группы)
            //             }
            // } 
        })
        .onAny().passThrough();

}