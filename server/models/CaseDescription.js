const keystone = require('keystone');

const { Types } = keystone.Field;


const CaseDescription = new keystone.List('CaseDescription', {
    label: 'Descrição da seção de Cases de Sucesso'
  });

CaseDescription.add({
  description: {
    type: Types.Textarea,
    required: true,
    initial: true,
    label: 'Texto da seção',
    note: 'Faça uma breve descrição para a seção de Cases de Sucesso',
  },
});

CaseDescription.register();