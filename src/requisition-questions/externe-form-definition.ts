
import { productionFields } from './shared/productionFields';

export const externeFormFields = [
    { key: 'name', label: 'Name', type: 'text' },
    { key: 'age', label: 'Age', type: 'number' },
    { key: 'agreeToTerms', label: 'Agree to Terms', type: 'checkbox' },
    {
      key: 'status',
      label: 'Status',
      type: 'select',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Approved', value: 'approved' },
        { label: 'Rejected', value: 'rejected' }
      ]
    },
    ...productionFields
  ];
  