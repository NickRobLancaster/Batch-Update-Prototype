const app = Vue.createApp({
    data() {
        return {
            // Danger Alert Disclaimer
            bulk_edit_disclaimer: false,
            
            bulk_list_or_filter: '',
            bulk_type_selected: '',
            bulk_reassign_type_selected: '',
            campaign_is_hovered: false,
            action_is_hovered: false,
            reassign_is_hovered: false,
            // Bulk Type Checkboxes
            bulk_type_campaign_edit: false,
            bulk_type_action: false,
            bulk_type_reassignment: false,
            bulk_type_select_all: false
            
            
            
        };
    },
    watch: {
        testWatch(){
                       
        }
    },
    computed: {
        testComputed() {
            
        }
    },
    methods: {
        bulkTypeSelectAll(){
            let bool = this.bulk_type_select_all;
            this.bulk_type_campaign_edit = bool;
            this.bulk_type_action = bool;
            this.bulk_type_reassignment = bool;
            

        },
        
        wizard_cancel_all(){
            this.bulk_edit_disclaimer = false;
            
            this.bulk_list_or_filter = '';
            this.bulk_type_selected = '';
            this.bulk_reassign_type_selected = '';
            
            this.campaign_is_hovered = false;
            this.action_is_hovered = false;
            this.reassign_is_hovered = false;
            
            // Bulk Type Checkboxes
            this.bulk_type_campaign_edit = false;
            this.bulk_type_action = false;
            this.bulk_type_reassignment = false;
            this.bulk_type_select_all = false;
        }
    }

});

app.mount('#appBody');