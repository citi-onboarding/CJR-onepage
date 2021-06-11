const keystone = require('keystone');

const { Types } = keystone.Field;

const Banner = new keystone.List('Banner');

Banner.add({
  name: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
    initial: true,
  },
  description: {
    type: Types.Textarea,
    required: true,
    initial: true,
    label: 'Texto da seção',
    note: 'Faça a descrição do banner',
  },
});

Banner.register();