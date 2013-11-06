schema = {
    pages: [
        {
            id: 'page1',
            title: 'page1',
            contents: [
                {
                    id: 'section1',
                    title: 'section1',
                    contentType: 'section',
                    contents: [
                        {
                            id: 'question1',
                            type: 'textarea',
                            label: 'question1',
                            caption: 'question1',
                            contentType: 'question'
                        },
                        {
                            id: 'question2',
                            type: 'textfield',
                            label: 'question2',
                            caption: 'question2',
                            contentType: 'question',
                            canRepeat: true
                        },
                        {
                            id: 'questionx',
                            type: 'textfield',
                            label: 'questionx',
                            caption: 'questionx',
                            contentType: 'question',
                            displayRules: {
                                'question1': 'foo'
                            }
                        }
                    ],
                    canRepeat: true,
                    minRepeat: 1,
                    maxRepeat: 3
                }
            ]
        },
        {
            id: 'page2',
            title: 'page2',
            contents: [
                {
                    id: 'question4',
                    type: 'textfield',
                    label: 'question4',
                    caption: 'question4',
                    contentType: 'question',
                    canRepeat: true
                }
            ]
        }
    ]
};
