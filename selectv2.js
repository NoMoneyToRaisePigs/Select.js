
var J = {
    multi: false,
    searchable: true,
    placeHolder:'Select an option',
    data: [
        {
        title:'Western',
        options:[
            {display:'Cake', value:'1', selected: true,disabled: false},
            {display:'Bread', value:'2', selected: false, disabled: true},
            {display:'Salad', value:'3', selected: false, disabled: false},
            {display:'Chicken', value:'4', selected: false, disabled: false},
            {display:'Beans', value:'5', selected: false, disabled: false},
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

function createSelect(id,source){

    var _selectedOption;
    var _groups = [];
    var _optionsCount = 0;

    var selectContainer;

    var selectBox; var selectBoxText; var placeHolder;
    var dropdownBox;

    var dropdownSearchBox;
    var dropdownNoneMatchingBox;
    var dropdownListBox;

    var groupWrappers = [];
    var groupTitles = [];
    var options = [];

    var groups = [{groupIndex:0, wrapperElement: null, options:[{optionIndex:0, optionElement: null}]}];

    function createSelectContainer(){
        selectContainer = document.getElementById(id)
        selectContainer.classList.add('select-box-container');
    }

    function createSelectBox(){
        //Create select box
        selectBox = document.createElement('div');
        selectBoxText = document.createElement('span');
        placeHolder = document.createTextNode(source.placeHolder);
        //Set select box class and append select box text
        selectBoxText.classList.add('select-box-text');
        selectBoxText.appendChild(placeHolder);
        selectBox.classList.add('collapsed');
        selectBox.classList.add('select-box');
        selectBox.appendChild(selectBoxText);
    }

    function createDropdownBox(){
            //Create dropdown box
        dropdownBox = document.createElement('div');
        dropdownBox.classList.add('dropdown-box');
        dropdownListBox = document.createElement('div');
        dropdownListBox.classList.add('dropdown-list-box');
    }

    function populateOptions(dropdownListBox){
        for(var i=0; i<source.data.length; i++){
            var _groupItem = source.data[i];

    
            //Create group wrapper and title
            var groupWrapper = document.createElement('ul');
            var groupTitle = document.createElement('li');
            var groupTitleText = document.createTextNode(_groupItem.title);
            //Set class for group wrapper and title
            groupWrapper.classList.add("group-wrapper");
            groupTitle.classList.add('group-title');
            //Append
            groupTitle.appendChild(groupTitleText);
            groupWrapper.appendChild(groupTitle);
    

            var _groupAggregation = {
                groupIndex: i, 
                wrapperElement:groupWrapper,
                options:[]
            };
            //Create options
            for(var j=0; j<_groupItem.options.length;j++){
                var _optionItem = _groupItem.options[j];
    
                var option = document.createElement('li');
                var optionText = document.createTextNode(_optionItem.display);
                option.classList.add('option'); 
                
                if(optItem.disabled){
                    option.classList.add('disabled');
                }
                else{
                    option.classList.add('available');
                }
    
                if(optItem.selected){
                    _selectedOption = option;
                    option.classList.add('selected');
                }
                option.appendChild(optionText);
                groupWrapper.appendChild(option);

                (function(optItem,option){
                    option.addEventListener('click',function(){ 
                        _selectedOption.classList.remove('selected');
                        option.classList.add('selected');
                        _selectedOption = option;
                        selectBoxText.innerText = optItem.display;
    
                        dropdownBox.classList.remove('show');
                        selectBox.classList.replace('expanded','collapsed');
                        console.log(optItem.value)
                    });
                })(optItem,option);
    
                _optionsCount++;
                _groupAggregation.options.push({optionIndex: j, optionElement:option});        
            }
    
            _groups.push(tempGroup);
            dropdownListBox.appendChild(groupWrapper);
        }
    }

    function toggleDropdownBox(){

    }









    selectBox.addEventListener('click',function(){
        setDropdownPosition();
        // dropdownBox.style.display = 'block';
        // dropdownBox.style.height = 'auto';
        selectBox.classList.replace('collapsed','expanded');
        dropdownBox.classList.add('show');
        event.stopPropagation();

        function closeDropdown(event){
            if(event.target != dropdownBox && !dropdownBox.contains(event.target)){
                //dropdownBox.style.display = 'none';
                selectBox.classList.replace('expanded','collapsed');
                dropdownBox.classList.remove('show');
                document.body.removeEventListener('click', closeDropdown);
            }
        }
        var dropBack = document.body.addEventListener('click', closeDropdown);
    });  

    
    if(source.searchable){
        var dropdownSearchBox = document.createElement('div');
        var dropdownSearchInput = document.createElement('input');
        dropdownSearchBox.classList.add('dropdown-search-box');
        dropdownSearchInput.setAttribute('type', 'text');
        dropdownSearchInput.setAttribute('placeholder','Type to search ...');

        var dropdownNoneMatchingBox = document.createElement('div');
        var dropdownNoneMatchingSpan = document.createElement('span');
        var dropdownNoneMatchingText = document.createTextNode('No matching options.');

        dropdownNoneMatchingBox.classList.add('dropdown-none-matching-box');
        dropdownNoneMatchingSpan.appendChild(dropdownNoneMatchingText);
        dropdownNoneMatchingBox.appendChild(dropdownNoneMatchingSpan);

        dropdownSearchInput.addEventListener('keyup',function(event){
            var searchString = this.value.toLowerCase();
            var allMatchingCounts = _optionsCount;

            _groups.forEach(function(groupItem){
                var groupMatchingCounts = groupItem.options.length;

                groupItem.options.forEach(function(optionItem){               
                    if(optionItem.innerText.toLowerCase().includes(searchString)){
                        optionItem.style.display = 'list-item';
                    }
                    else{
                        optionItem.style.display = 'none';
                        groupMatchingCounts--;
                        allMatchingCounts --;
                    }

                    if(!groupMatchingCounts){
                        groupItem.group.style.display = 'none'
                    }
                    else{
                        groupItem.group.style.display = 'list-item'
                    }

                    if(!allMatchingCounts){
                        dropdownNoneMatchingBox.style.display = 'block';
                        dropdownListBox.style.display = 'none';
                    }
                    else{
                        dropdownNoneMatchingBox.style.display = 'none';
                        dropdownListBox.style.display = 'block';
                    }
                });
            });   
        });

        dropdownSearchBox.appendChild(dropdownSearchInput);
        dropdownBox.appendChild(dropdownSearchBox);
        dropdownBox.appendChild(dropdownNoneMatchingBox);
    }

    dropdownBox.appendChild(dropdownListBox);
    select.appendChild(selectBox);
    select.appendChild(dropdownBox);

    function setDropdownPosition(){
        dropdownBox.style.top = 'auto';
        dropdownBox.style.bottom = 'auto';

        let selectBoxRect = selectBox.getBoundingClientRect();
        let offSetTop = selectBoxRect.top;
        let offSetBottom = window.innerHeight - selectBoxRect.top - (selectBoxRect.bottom - selectBoxRect.top);
    
        if(offSetTop > 300 && offSetBottom > 300){
            dropdownBox.style.top = '100%';
        }
        else if(offSetTop > 300){
            dropdownBox.style.bottom = '100%';
        }
        else if(offSetBottom > 300){
            dropdownBox.style.top = '100%';
        }
        if(offSetTop < 300 & offSetBottom < 300){
            // if(offSetTop > offSetBottom){
            //     dropdownListBox.style.maxHeight = (offSetTop - 10) + 'px';
            //     dropdownBox.style.top = '-' + (offSetTop - 10) + 'px';
            // }
            // else{
            //     dropdownListBox.style.maxHeight = (offSetBottom - 10) + 'px';
            //     dropdownBox.style.top = '100%';
            // }
            dropdownBox.style.top = '100%';
            dropdownListBox.style.maxHeight = (offSetBottom - 10) + 'px';
        }
    }
}



createSelect('gaofan',J);