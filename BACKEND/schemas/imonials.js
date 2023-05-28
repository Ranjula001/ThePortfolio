import countries from './countries'

export default {
    name: 'imonials',
    title: 'Imonials',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'profession',
            title: 'Profession',
            type: 'string'
        },
        {
            name: 'imgUrl',
            title: 'ImageUrl',
            type: 'image',
            option: {
                hotspot: true,
            }
        },
        {
            name: 'headline',
            title: 'Headline',
            type: 'string'
        },
        {
            name: 'location',
            title: 'Location',
            description: 'Country/Region',
            type: 'string',
            options:{
                list: [
                    ...countries
                ],
            }
        },
        {
            title: 'Link',
            name: 'href',
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
            })
        }
    ]
}