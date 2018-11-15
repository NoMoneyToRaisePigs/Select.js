var J = {
    multi: true,
    searchable: true,
    selectPlaceholder:'Select options',
    data: [
        {
        title:'Western',
        options:[
            {display:'Cake', value:'1', selected: true,disabled: false},
            {display:'Bread', value:'2', selected: false, disabled: true},
            {display:'Salad', value:'3', selected: false, disabled: false},
            {display:'Chicken', value:'4', selected: false, disabled: false},
            {display:'Beans', value:'5', selected: true, disabled: false},
            {display:'Pasta', value:'6', selected: false, disabled: false},
            {display:'Steak', value:'7', selected: false,disabled: false}
        ]},
        {
        title:'Eastern',
        options:[
            {display:'Rice', value:'8', selected: false, disabled: false},
            {display:'Vege', value:'9', selected: false, disabled: false},
            {display:'Porridge', value:'10', selected: false, disabled: false},
            {display:'Juice', value:'11', selected: false, disabled: false}
        ]}
    ]
};

var J1 = {
    multi: false,
    searchable: true,
    selectPlaceholder:'Select an option',
    data: [
        {
        title:'Western',
        options:[
            {display:'Cake', value:'1', selected: false,disabled: false},
            {display:'Bread', value:'2', selected: false, disabled: true},
            {display:'Salad', value:'3', selected: false, disabled: false},
            {display:'Chicken', value:'4', selected: false, disabled: false},
            {display:'Beans', value:'5', selected: true, disabled: false},
            {display:'Pasta', value:'6', selected: false, disabled: false},
            {display:'Steak', value:'7', selected: false,disabled: false}
        ]},
        {
        title:'Eastern',
        options:[
            {display:'Rice', value:'8', selected: false, disabled: false},
            {display:'Vege', value:'9', selected: false, disabled: false},
            {display:'Porridge', value:'10', selected: false, disabled: false},
            {display:'Juice', value:'11', selected: false, disabled: false}
        ]}
    ]
};



initSelect('select1',J);
initSelect('select2',J1);
initSelect('select3',J);
initSelect('select4',J1);
initSelect('select5',J);
initSelect('select6',J1);


function expand(event){
    var x = 0;
    var code = event.target.nextElementSibling;
    code.style.display = 'block';
    //code.style.left = '480px'
    // code.style.right = '300px';
    event.target.classList.add('show');
}