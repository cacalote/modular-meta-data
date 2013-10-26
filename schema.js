schema = {
    'schema': {
        'pages': [
            {
                'id': 'page1',
                'title': 'page1',
                'groups': [
                    {
                        'id': 'group0',
                        'canRepeat': false,
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
                        'maxRepeat': 3,
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
                    }
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
    }
};