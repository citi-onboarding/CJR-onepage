const keystone = require('keystone');

const { Types } = keystone.Field;


const Cases = new keystone.List('Cases', {
    map: { name:'title' },
    label: 'Cases de Sucesso'
  });

Cases.add({
  title :{
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
    label: 'Casos de Sucesso',
    note:'Coloque o nome do Caso',
  },
  image: {
    type: Types.CloudinaryImages,
    require: true,
  },
  description: {
    type: Types.Textarea,
    required: true,
    initial: true,
    label: 'Descrição sobre o Caso',
    note: 'Fale um pouco sobre esse caso',
  },
});

Cases.register();