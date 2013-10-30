schema = {
    'pages': [
        {
            'id': 'page1',
            'title': 'page1',
            'groups': [
                {
                    'id': 'group0',
                    'canRepeat': false,
                    'displayRules': {
                        'age-1': 'foo'
                    },
                    'questions': [
                        {
                            'id': 'datacompletion',
                            'type': 'select',
                            'label': 'Is data collection for this project underway or complete?',
                            'caption': 'Please choose',
                            'options': ['No', 'Yes']
                        },
                        {
                            'id': 'looked',
                            'type': 'select',
                            'label': 'Have you looked at the data?',
                            'caption': 'Please choose',
                            'options': ['No', 'Yes']
                        },
                        {
                            'id': 'comments',
                            'type': 'textarea',
                            'label': 'Other Comments'
                        }
                    ]
                },
                {
                    'id': 'group1',
                    'canRepeat': true,
                    'minRepeat': 1,
                    'maxRepeat': 3,
                    'initRepeat': 1,
                    'questions': [
                        {
                            'id': 'age',
                            'type': 'textarea',
                            'label': 'Age'
                        },
                        {
                            'id': 'sex',
                            'type': 'textarea',
                            'label': 'Sex'
                        },
                        {
                            'id': 'location',
                            'type': 'textarea',
                            'label': 'Location'
                        }
                    ]
                },
                {
                    'id': 'group00',
                    'questions': [
                        {
                            'id': 'yesno',
                            'type': 'select',
                            'label': 'foo',
                            'caption': 'bar',
                            'options': ['No', 'Yes']
                        },
                        {
                            'id': 'file',
                            'type': 'file',
                            'label': 'Add file',
                            'caption': 'Please choose'
                        }
                    ]
                },
            ]
        },
        {
            'id': 'page1',
            'title': 'page1',
            'groups': [
                {
                    'id': 'group1',
                    'canRepeat': true,
                    'maxRepeat': 3,
                    'questions': [
                        {
                            'id': 'title',
                            'type': 'textarea',
                            'label': 'Job title'
                        },
                        {
                            'id': 'institution',
                            'type': 'textarea',
                            'label': 'Institution'
                        }
                    ]
                }
            ]
        }
    ]
};