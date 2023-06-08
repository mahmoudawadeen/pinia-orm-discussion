export default {
    media: {
        audios: [
            {
                id: 1,
                name: 'Audio 1',
            }
        ]
    },
    todo: {
        id: 1,
        title: 'Super',
        user: {
            id: 1,
            name: 'JohnK',
            avatarImgUrl: 'https://i.pravatar.cc/300?img=57',
            firstName: 'John',
            lastName: 'K',
            mediaId: 1,
            mediaType: 'audios',
        }
    },
    users: [
        {
            id: 1,
            name: 'JohnK',
            avatarImgUrl: 'https://i.pravatar.cc/300?img=57',
            firstName: 'John',
            lastName: 'K',
            todos: [
                {
                    title: 'Super',
                },
                {
                    title: 'Cool',
                },
            ],
        },
        {
            id: 2,
            name: 'JaneD',
            avatarImgUrl: 'https://i.pravatar.cc/300?img=45',
            firstName: 'Jane',
            lastName: 'Doe',
            todos: [
                {
                    title: 'Vue 3 is done',
                },
                {
                    title: 'Release Nuxt 3',
                },
                {
                    title: 'Add stuff',
                },
            ],
        }
    ]
}