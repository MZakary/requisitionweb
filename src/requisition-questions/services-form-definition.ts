import { productionFields } from './shared/productionFields';
export const servicesFormFields = [
  { key: 'name', label: 'Name', type: 'text' },
  { key: 'email', label: 'Email', type: 'email' },
  { key: 'phone', label: 'Phone Number', type: 'text' },
  ...productionFields,
];
  