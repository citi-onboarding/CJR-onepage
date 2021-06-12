const keystone = require('keystone');

const { Types } = keystone.Field;


const AboutUs = new keystone.List('AboutUs', {
    map: { name:'title' },
    label: 'Quem somos'
  });

AboutUs.add({
  title :{
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
    label: 'Título da seção',
    note:'Escreva o título da seção',
  },
  image: {
    type: Types.CloudinaryImages,
    required: true,
    initial: true,
    label: 'Coloque 3 imagens'
  },
  description: {
    type: Types.Textarea,
    required: true,
    initial: true,
    label: 'Quem somos',
    note: 'Fale um pouco sobre a cultura da empresa',
  },
});

AboutUs.register();