import Address from './Address.vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Checkbox from 'primevue/checkbox';
import Column from 'primevue/column';
import ConfirmationService from 'primevue/confirmationservice';
import DataTable from 'primevue/datatable';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';
import Nav from './Nav.vue';
import Password from 'primevue/password';
import PrimeVue from 'primevue/config';
import Profile from './Profile.vue';
import Skeleton from 'primevue/skeleton';
import Tag from 'primevue/tag';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

export default {
  // eslint-disable-next-line
  install(Vue: any) {
    Vue.use(PrimeVue);
    Vue.use(ToastService);
    Vue.use(ConfirmationService);
    Vue.component('Button', Button);
    Vue.component('Card', Card);
    Vue.component('Column', Column);
    Vue.component('DataTable', DataTable);
    Vue.component('Dropdown', Dropdown);
    Vue.component('InputNumber', InputNumber);
    Vue.component('InputSwitch', InputSwitch);
    Vue.component('InputText', InputText);
    Vue.component('Message', Message);
    Vue.component('Password', Password);
    Vue.component('Checkbox', Checkbox);
    Vue.component('Tag', Tag);
    Vue.component('Toast', Toast);
    Vue.component('Skeleton', Skeleton);
  },
};

export { Nav, Address, Profile };
