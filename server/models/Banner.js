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
      require: true,
      label:'Descrição do banner'
  },
});

Banner.register();