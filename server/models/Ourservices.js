const keystone = require('keystone');

const { Types } = keystone.Field;

const Ourservices = new keystone.List('Ourservices', {
  label: 'Nossos serviços '
});

Ourservices.add({
  name: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
    initial: true,
    label: 'Nome do Serviço',
    note:'Coloque o nome do serviço'
  },
  image: {
    type: Types.CloudinaryImages,
    require: true,
    initial: true,
    label: 'Imagem do Serviço'
  },
  description: {
      type: Types.Textarea,
      require: true,
      label:'Descrição sobre o Serviço',
  },
});

Ourservices.register();