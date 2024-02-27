import { FieldType } from "./field.types";

export let app_fields = [
    {
        formControlName: 'projectName',
        placeholder: 'Título',
        class: 'form_' + FieldType.TEXT,
        type: FieldType.TEXT,
    },
    {
        formControlName: 'responsible',
        placeholder: 'Responsável',
        class: 'form_' + FieldType.TEXT,
        type: FieldType.TEXT,
    },
    {
        formControlName: 'modality',
        placeholder: 'Modalidade',
        class: 'form_' + FieldType.SELECT,
        type: FieldType.SELECT,
        options: [
            {title: 'Sistema', value: 1},
            {title: 'Portal', value: 2},
        ]
    },
    {
        formControlName: 'step',
        placeholder: 'Etapa',
        class: 'form_' + FieldType.SELECT,
        type: FieldType.SELECT,
        options: [
            {title: 'Requisito', value: 1},
            {title: 'Implementação', value: 2},
            {title: 'Entrega', value: 3},
        ]
    },
    {
        formControlName: 'status',
        placeholder: 'Status',
        class: 'form_' + FieldType.SELECT,
        type: FieldType.SELECT,
        options: [
            {title: 'Em desenvolvimento', value: 1},
            {title: 'Concluído', value: 2},
        ]
    },
];
  