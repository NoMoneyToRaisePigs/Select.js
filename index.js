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


initSelect('select_select',J);
initSelect('select_1',J);
initSelect('select_2',J1);
initSelect('select_3',J);
initSelect('select_4',J1);
initSelect('select_5',J);
initSelect('select_6',J1);
// initSelect('select_5',J);
// initSelect('select_6',J1);


function expand(event){
    var snippetLegth = 430;
    var btn = event.target;
    var oppBtn = GetOppBtn(btn);
    var snippet = btn.nextElementSibling;
    var distance = GetDistanceBetweenBtn(btn, oppBtn);
    btn.innerText = btn.classList.contains('show')? 'Show the source' : 'Hide the source';
    btn.classList.toggle('show');
    snippet.classList.toggle('show');

    if(distance < snippetLegth * 2){
        oppBtn.innerText = oppBtn.classList.contains('show')? 'Show the source' : 'Hide the source';
        oppBtn.classList.remove('show');
        oppBtn.nextElementSibling.classList.remove('show');
    }

    function GetOppBtn(btn){
        var btnId = btn.getAttribute('id');

        var oppBtnId;
        if(btnId.split('_')[3] == 'left')
            oppBtnId = btnId.replace('left','right');
        else 
            oppBtnId = btnId.replace('right','left');

        var oppositeBtn = document.getElementById(oppBtnId);
        return oppositeBtn;
    }

    function GetDistanceBetweenBtn(btn, oppBtn){
        var btnLength = 120;
        var btnRect = btn.getBoundingClientRect();
        var oppBtnRect = oppBtn.getBoundingClientRect();

        if(btn.classList.contains('left-btn')){
            return oppBtnRect.left - btnRect.left + btnLength;
        }
        else{
            return btnRect.left - oppBtnRect.left + btnLength;
        }
    }
}

