

(function(){
    var gf_select_style = document.createElement('style');
    gf_select_style.innerHTML = '.select-box-container *{box-sizing:border-box;font-family:"Source Sans Pro","Segoe UI","Open Sans",Calibri,sans-serif;font-size:12px}.select-box-container{position:relative;width:250px;min-width:180px}.select-box{cursor:pointer;border:1px solid rgba(0,0,0,.3);border-radius:3px;padding:5px 24px 5px 10px;color:#707478;line-height:22px;background-color:#fff}.select-box:hover{border-color:#3C82E6;box-shadow:0 1px 2px 2px rgba(0,0,0,.06)}.select-box::after{position:absolute;right:10px;top:calc(50% - 2px);display:inline-block;content:"";height:0;width:0;background-color:transparent;border-top:6px solid #707478;border-left:6px solid transparent;border-right:6px solid transparent;transition:transform .2s ease-in-out}.expanded.select-box:after{transform:rotateZ(180deg)}.select-box .selected-number{padding-right:5px;font-weight:700;border-right:1px solid #707478}.select-box .select-box-text{padding-left:5px}.select-box:hover .select-box-text{color:rgba(0,0,0,.8)}.dropdown-box{position:absolute;left:0;width:100%;background-color:#fff;z-index:10000;visibility:hidden;max-height:0;overflow:hidden}.dropdown-box.show{max-height:1000px;border:1px solid rgba(0,0,0,.3);border-radius:3px;visibility:visible;transition:max-height .2s linear}.dropdown-box .dropdown-search-box{position:relative;width:100%;border-bottom:1px solid rgba(0,0,0,.2);box-shadow:0 1px 1px 0 rgba(0,0,0,.075);line-height:32px}.dropdown-box .dropdown-search-box::after,.dropdown-box .dropdown-search-box::before{position:absolute;display:inline-block;background-color:transparent;content:"";box-sizing:border-box}.dropdown-box .dropdown-search-box::before{top:calc(50% - 8px);left:8px;height:12px;width:12px;border:1.5px solid rgba(0,0,0,.2);border-radius:50%}.dropdown-box .dropdown-search-box::after{top:calc(50% + 4px);left:13px;height:6px;width:2px;border-bottom:6px solid rgba(0,0,0,.2);border-bottom-left-radius:1px;border-bottom-right-radius:1px;transform:translateX(5px) translateY(-1px) rotate(-30deg)}.dropdown-box .dropdown-search-box input{width:100%;line-height:20px;border:none;outline:0;margin:0;padding:5px 28px}.dropdown-box .dropdown-none-matching-box{display:none;width:100%;padding:20px;text-align:center;border-bottom:1px solid rgb(0,0,0,.3)}.dropdown-box .dropdown-none-matching-box span{color:#707478}.dropdown-box .dropdown-list-box{max-height:300px;overflow-y:scroll}.dropdown-box .dropdown-list-box::-webkit-scrollbar{width:5px}.dropdown-box .dropdown-list-box::-webkit-scrollbar-track{background:#f1f1f1}.dropdown-box .dropdown-list-box::-webkit-scrollbar-thumb{background:rgba(0,0,0,.3)}.dropdown-box .dropdown-list-box::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.4)}.dropdown-box .dropdown-list-box .group-wrapper{margin:0;padding:10px 0 0;list-style:none}.dropdown-box .dropdown-list-box .group-wrapper .group-title{position:relative;display:flex;justify-content:space-between;line-height:20px;padding:5px 10px 8px}.dropdown-box .dropdown-list-box .group-wrapper .group-title b{font-size:14px}.dropdown-box .dropdown-list-box .btn{background-color:transparent;border:1px solid #707478;border-radius:3px;cursor:pointer;color:#707478;line-height:normal}.dropdown-box .dropdown-list-box .all:hover{border-color:#28a745;color:#28a745}.dropdown-box .dropdown-list-box .none:hover{border-color:#dc3545;color:#dc3545}.dropdown-box .dropdown-list-box .dropdown-select-btn-wrapper{width:100%;text-align:center;line-height:38px;border-bottom:1px solid rgba(0,0,0,.2);box-shadow:0 1px 1px 0 rgba(0,0,0,.075)}.dropdown-box .dropdown-list-box .dropdown-select-btn-wrapper .dropdown-select-btn{margin:0 6px}.dropdown-box .dropdown-list-box .group-wrapper .group-select-btn{margin:0 4px;font-size:10px}.dropdown-box .dropdown-list-box .group-wrapper .option{padding:5px 5px 5px 30px;line-height:20px;position:relative;cursor:pointer}.dropdown-box .dropdown-list-box .group-wrapper .option:hover{background-color:#e0e0e0}.dropdown-box .dropdown-list-box .group-wrapper .option.disabled{cursor:not-allowed;background-color:rgba(0,0,0,.1);color:rgba(0,0,0,.4)}.dropdown-box .dropdown-list-box .group-wrapper .option::after,.dropdown-box .dropdown-list-box .group-wrapper .option::before{position:absolute;display:inline-block;left:12px;content:"";box-sizing:border-box}.dropdown-box .dropdown-list-box .group-wrapper .disabled.option::before{left:9px;top:calc(50% - 6px);width:11px;height:11px;border-radius:50%;border:1px solid rgba(0,0,0,.4);box-sizing:border-box}.dropdown-box .dropdown-list-box .group-wrapper .disabled.option::after{left:10px;top:calc(50% - 6px - 1px + 1px + 5px);width:9px;height:1px;background-color:rgba(0,0,0,.4);transform:rotateZ(-45deg)}.dropdown-box .dropdown-list-box .group-wrapper .available.single.option::before{display:none;left:10px;top:calc(50% - 4px);width:9px;height:6px;border-left:1.5px solid #707478;border-bottom:1.5px solid #707478;border-radius:.5px;transform:rotateZ(-45deg)}.dropdown-box .dropdown-list-box .group-wrapper .available.single.selected.option::before{display:inline-block;border-color:rgba(0,0,0,.8)}.dropdown-box .dropdown-list-box .group-wrapper .available.single.option:hover:before{display:inline-block}.dropdown-box .dropdown-list-box .group-wrapper .available.multi.option::after,.dropdown-box .dropdown-list-box .group-wrapper .available.multi.option::before{display:none;left:13px;top:calc(50% - 6px);width:2px;height:10px;background-color:#707478}.dropdown-box .dropdown-list-box .group-wrapper .available.multi.option::after{transform:rotateZ(90deg)}.dropdown-box .dropdown-list-box .group-wrapper .available.multi.option:hover:after,.dropdown-box .dropdown-list-box .group-wrapper .available.multi.option:hover:before{display:inline-block}.dropdown-box .dropdown-list-box .group-wrapper .available.multi.option.selected::before{display:inline-block;left:9px;top:calc(50% - 6px);width:12px;height:12px;border:1px solid rgba(0,0,0,.8);background-color:transparent}.dropdown-box .dropdown-list-box .group-wrapper .available.multi.option.selected::after{display:inline-block;left:12px;top:calc(50% - 6px + 3px);width:6px;height:6px;border-radius:50%;background-color:rgba(0,0,0,.8);transform:none}.dropdown-box .dropdown-list-box .group-wrapper .available.multi.option.selected:hover:after{left:11px;top:calc(50% - 6px + 5px);width:8px;height:2px;border:none;background-color:rgba(0,0,0,.8);transform:none}#triangle{display:inline-block;height:0;width:0;background-color:transparent;border-bottom:10px solid #663399;border-left:10px solid transparent;border-right:10px solid transparent;transition:transform 1s linear}#triangle.ani{transform:rotateZ(180deg)}';
    document.getElementsByTagName('head')[0].appendChild(gf_select_style);
})();

function initSelect(id,source,test){
    //variable start with "_" is global variable in this method
    //if you create a method, ensure they don't rely on any out scope variable, but "_" variables are allowed 
    this.x = 0 && test;

    var _dataSource
    var _optionsCount = 0;

    
    var _selectedOptionElement;
    var _selectedOption;

    var _dropdownGroups = [];
    var _selectedOptions = [];
    var _searchingResult = [];

    var _selectedNumberElement;
    var _dropdownSearchInput;

    var SelectContainer = document.getElementById(id);
    if(!SelectContainer) throw console.log('shit! no such element with id {' + id + '}.');
    SelectContainer.classList.add('select-box-container');
    _dataSource = getDatasource(source);

    

    var SelectBox = createSelectBox(_dataSource);
    var DropdownBox = createDropdownBox();
        var DropdownSearchBox;
        var DropdownNoneMatchingBox;
        if(_dataSource.searchable){
            DropdownSearchBox = createDropdownSearchBox();
            DropdownNoneMatchingBox = createDropdownNoneMatchingBox();
        }
        var DropdownListBox = createDropdownListBox();
            var DropdownSelectBtnWrapper;
            if(_dataSource.multi)
                DropdownSelectBtnWrapper = createDropdownSelectBtnWrapper();
            var DropdownGroups = createDropdownGroups(_dataSource);

    if(_dataSource.multi)  
        DropdownListBox.appendChild(DropdownSelectBtnWrapper);

    DropdownGroups.forEach(function(ulElement){
        DropdownListBox.appendChild(ulElement);
    });

    if(_dataSource.searchable){
        DropdownBox.appendChild(DropdownSearchBox);
        DropdownBox.appendChild(DropdownNoneMatchingBox);
    }
    DropdownBox.appendChild(DropdownListBox);

    SetEventsForSelectBox(SelectBox,DropdownBox);
    if(_dataSource.searchable)
        setEventsForDropdownSearchInput();
    setEventsForDropdownListBox(DropdownListBox, _dataSource);

    SelectContainer.appendChild(SelectBox);
    SelectContainer.appendChild(DropdownBox);

    function getDatasource(dataSource){
        var defaultDataSource = {
            multi: false,
            searchable: false,
            selectPlaceholder: 'Select an option...',
            searchPlaceholder: 'Type to search...',
            data: []
        };

        return dataSource;
    }

    function createSelectBox(dataSource){
        var selectBox = document.createElement('div');
        var selectBoxText = document.createElement('span');
        var placeHolder = document.createTextNode(dataSource.selectPlaceholder);
        selectBoxText.classList.add('select-box-text');
        selectBox.classList.add('collapsed');
        selectBox.classList.add('select-box');
        selectBoxText.appendChild(placeHolder);

        if(dataSource.multi)  
            selectBox.appendChild(createSelectedNumber());
        
        selectBox.appendChild(selectBoxText);   

        return selectBox;

        function createSelectedNumber(){
            var selectedNumber = document.createElement('span');
            var selectedNumberText = document.createTextNode('0');
            selectedNumber.classList.add('selected-number');
            selectedNumber.appendChild(selectedNumberText);
            _selectedNumberElement = selectedNumber;

            return selectedNumber;
        }
    }

    function createDropdownBox(){
        var dropdownBox = document.createElement('div');
        dropdownBox.classList.add('dropdown-box');

        return dropdownBox;
    }

    function createDropdownListBox(){
        var dropdownListBox = document.createElement('div');
        dropdownListBox.classList.add('dropdown-list-box');

        return dropdownListBox;
    }

    function createDropdownGroups(dataSource){
        var dropdownGroupsUl = [];

        for(var i=0; i<dataSource.data.length; i++){
            var groupIndex = i;
            var groupItem = dataSource.data[i];

            var groupWrapperUl = document.createElement('ul');
            groupWrapperUl.classList.add("group-wrapper");
            var groupTitleLi = createGroupTitle(dataSource, groupIndex);

            _dropdownGroups.push({groupIndex: groupIndex, group: groupTitleLi, options: []}); 

            var groupOptionsLi = createGroupOptions(groupItem, groupIndex, dataSource.multi);
            groupWrapperUl.appendChild(groupTitleLi);
            groupOptionsLi.forEach(function(groupOptionItem){
                groupWrapperUl.appendChild(groupOptionItem);
            });

            _optionsCount = _optionsCount + groupOptionsLi.length;
            dropdownGroupsUl.push(groupWrapperUl);
        }

        setSelectedNumber();
        return dropdownGroupsUl;

        function createGroupTitle(dataSource, groundIndex){
            function createGroupSelectBtn(){
                var groupSelectBtnWrapper = document.createElement('div');
                var groupSelectAllBtn = document.createElement('button');
                var groupSelectNoneBtn = document.createElement('button');
                var groupSelectAllBtnText = document.createTextNode('all');
                var groupSelectNoneBtnText = document.createTextNode('none');
    
                groupSelectAllBtn.setAttribute('data-name','group_'+groupIndex+'_all_btn');
                groupSelectNoneBtn.setAttribute('data-name','group_'+groupIndex+'_none_btn');
                //this change is for IE browser, seems it doesn't work with multi parametes.
                //groupSelectAllBtn.classList.add('group-select-btn','btn','all');
                groupSelectAllBtn.classList.add('group-select-btn');
                groupSelectAllBtn.classList.add('btn');
                groupSelectAllBtn.classList.add('all');
                //groupSelectNoneBtn.classList.add('group-select-btn','btn','none');
                groupSelectNoneBtn.classList.add('group-select-btn');
                groupSelectNoneBtn.classList.add('btn');
                groupSelectNoneBtn.classList.add('none');
                
                groupSelectAllBtn.appendChild(groupSelectAllBtnText);
                groupSelectNoneBtn.appendChild(groupSelectNoneBtnText);
                groupSelectBtnWrapper.appendChild(groupSelectAllBtn);
                groupSelectBtnWrapper.appendChild(groupSelectNoneBtn);
    
                return groupSelectBtnWrapper;
            }

            var groupTitleLi = document.createElement('li');
            var groupTitleB = document.createElement('b');
            var groupTitleText = document.createTextNode(dataSource.data[groundIndex].title);
            groupTitleLi.setAttribute('data-value',groupIndex+'_*');
            
            groupTitleLi.classList.add('group-title');
            groupTitleB.appendChild(groupTitleText);
            groupTitleLi.appendChild(groupTitleB);
            
            if(dataSource.multi){
                groupTitleLi.appendChild(createGroupSelectBtn());
            }

            return groupTitleLi;
        }

        function createGroupOptions(groupItem, groupIndex, isMulti){
            var groupOptionsLi = [];

            for(var j=0; j<groupItem.options.length;j++){
                var optionIndex = j;
                var optionItem = groupItem.options[optionIndex];
    
                var optionLi = document.createElement('li');
                var optionLiText = document.createTextNode(optionItem.display);
                optionLi.setAttribute('data-value', groupIndex + '_' + optionIndex);
                optionLi.classList.add('option'); 
                optionLi.appendChild(optionLiText);
    
                if(optionItem.disabled){
                    optionLi.classList.add('disabled');
                }
                else{
                    optionLi.classList.add('available');
                }
    
                if(isMulti){
                    optionLi.classList.add('multi');
                }
                else{
                    optionLi.classList.add('single');
                }
    
                if(optionItem.selected && !optionItem.disabled){
                    optionLi.classList.add('selected');
                    _selectedOption = optionItem;
                    _selectedOptionElement = optionLi;

                    _selectedOptions.push(optionItem.value);
                }

                _dropdownGroups[groupIndex].options.push({optionIndex: optionIndex, option: optionLi});
                groupOptionsLi.push(optionLi);
            }

            return groupOptionsLi;
        }
    }

    function createDropdownSelectBtnWrapper(){
        var dropdownSelectBtnWrapper = document.createElement('div');    
        var dropdownSelectAllBtn = document.createElement('button');
        var dropdownSelectNoneBtn = document.createElement('button');
        var dropdownSelectAllBtnText = document.createTextNode('select all');
        var dropdownSelectNoneBtnText = document.createTextNode('select none');

        dropdownSelectBtnWrapper.classList.add('dropdown-select-btn-wrapper');
        dropdownSelectAllBtn.classList.add('dropdown-select-btn');
        dropdownSelectAllBtn.classList.add('btn');
        dropdownSelectAllBtn.classList.add('all');

        dropdownSelectNoneBtn.classList.add('dropdown-select-btn');
        dropdownSelectNoneBtn.classList.add('btn');
        dropdownSelectNoneBtn.classList.add('none');

        dropdownSelectAllBtn.appendChild(dropdownSelectAllBtnText);
        dropdownSelectNoneBtn.appendChild(dropdownSelectNoneBtnText);
        dropdownSelectBtnWrapper.appendChild(dropdownSelectAllBtn);
        dropdownSelectBtnWrapper.appendChild(dropdownSelectNoneBtn);

        return dropdownSelectBtnWrapper;
    }

    function createDropdownSearchBox(){
        var dropdownSearchBox = document.createElement('div');
        var dropdownSearchInput = document.createElement('input');
        dropdownSearchBox.classList.add('dropdown-search-box');
        dropdownSearchInput.setAttribute('type', 'text');
        dropdownSearchInput.setAttribute('placeholder','Type to search ...');
        dropdownSearchBox.appendChild(dropdownSearchInput);

        _dropdownSearchInput = dropdownSearchInput;

        return dropdownSearchBox;
    }

    function createDropdownNoneMatchingBox(){
        var dropdownNoneMatchingBox = document.createElement('div');
        var dropdownNoneMatchingSpan = document.createElement('span');
        var dropdownNoneMatchingText = document.createTextNode('No matching options.');

        dropdownNoneMatchingBox.classList.add('dropdown-none-matching-box');
        dropdownNoneMatchingSpan.appendChild(dropdownNoneMatchingText);
        dropdownNoneMatchingBox.appendChild(dropdownNoneMatchingSpan);

        return dropdownNoneMatchingBox;
    }

    function SetEventsForSelectBox(selectBox, dropdownBox){
        selectBox.onclick = function(event){
            setDropdownPosition();

            selectBox.classList.remove('collapsed');
            selectBox.classList.add('expanded');
            dropdownBox.classList.add('show');
            event.stopPropagation();
            document.body.addEventListener('click', collapseDropdown);
    
            function collapseDropdown(event){
                if(event.target != dropdownBox && !dropdownBox.contains(event.target)){
                    selectBox.classList.remove('expanded');
                    selectBox.classList.add('collapsed');
                    dropdownBox.classList.remove('show');
                    document.body.removeEventListener('click', collapseDropdown);
                }
            }         
        };

        function setDropdownPosition(){
            dropdownBox.style.top = 'auto';
            dropdownBox.style.bottom = 'auto';
    
            var selectBoxRect = selectBox.getBoundingClientRect();
            var viewportHeight = window.innerHeight;
            var offSetTop = selectBoxRect.top;
            var offSetBottom = viewportHeight - selectBoxRect.top - (selectBoxRect.bottom - selectBoxRect.top);
            var marginViewportEdge = 10;

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
                dropdownBox.style.top = '100%';
                dropdownListBox.style.maxHeight = (offSetBottom - marginViewportEdge) + 'px';
            }
        }
    }

    function setEventsForDropdownListBox(dropdownListBox, dataSource){
        dropdownListBox.onclick = function(event){
            var targetClassList = event.target.classList;
                      
            if(targetClassList.contains('option') && !targetClassList.contains('disabled')){
                var targetValueAttribute = event.target.getAttribute('data-value').split('_');
                var targetGroupIndex = (Number)(targetValueAttribute[0]);
                var targetOptionIndex = (Number)(targetValueAttribute[1]);
                var optData = dataSource.data[targetGroupIndex].options[targetOptionIndex];

                if(source.multi){
                    toggleValue(optData);
                    setSelectedNumber();
                    targetClassList.toggle('selected'); 
                    optData.selected = !optData.selected; 

                    console.log(_selectedOptions);                               
                }
                else{             
                    _selectedOptionElement.classList.remove('selected');
                    _selectedOptionElement = event.target;
                    _selectedOptionElement.classList.add('selected');    
                    
                    _selectedOption.selected = false;
                    _selectedOption = optData;
                    _selectedOption.selected = true;
   

                    console.log(_selectedOption.value);
                }                                                          
            }

            if(dataSource.multi){
                if(targetClassList.contains('btn')){
                    if(targetClassList.contains('all')){
                        if(targetClassList.contains('dropdown-select-btn')){
                            // _dropdownGroups.forEach(function(groupItem, groupIndex){
                            //     groupItem.options.forEach(function(optionItem, optionIndex){
                            //         tryAddValue(dataSource.data[groupIndex].options[optionIndex]);
                            //         optionItem.classList.add('selected');
                            //     });      
                            // });
                            if(_searchingResult.length){
                                selectBtnAction(dataSource,_searchingResult,undefined, true)
                            }
                            else{
                                selectBtnAction(dataSource,_dropdownGroups,undefined, true)
                            }
                        }
                        else if(targetClassList.contains('group-select-btn')){
                            var btnGroupIndex = (Number)(event.target.getAttribute('data-name').split('_')[1]);
                            // _dropdownGroups[btnGroupIndex].options.forEach(function(optionItem,optionIndex){
                            //     tryAddValue(dataSource.data[btnGroupIndex].options[optionIndex]);
                            //     optionItem.classList.add('selected');
                            // });

                            if(_searchingResult.length){
                                selectBtnAction(dataSource,_searchingResult,btnGroupIndex, true)
                            }
                            else{
                                selectBtnAction(dataSource,_dropdownGroups,btnGroupIndex, true)
                            }
                        }
                    }
                    else if(targetClassList.contains('none')){
                        if(targetClassList.contains('dropdown-select-btn')){
                            // _dropdownGroups.forEach(function(groupItem, groupIndex){
                            //     groupItem.options.forEach(function(optionItem, optionIndex){
                            //         tryRemoveValue(dataSource.data[groupIndex].options[optionIndex]);
                            //         optionItem.classList.remove('selected');
                            //     });      
                            // });

                            if(_searchingResult.length){
                                selectBtnAction(dataSource,_searchingResult,undefined, false)
                            }
                            else{
                                selectBtnAction(dataSource,_dropdownGroups,undefined, false)
                            }
                        }
                        else if(targetClassList.contains('group-select-btn')){
                             var btnGroupIndex = (Number)(event.target.getAttribute('data-name').split('_')[1]);
                            // _dropdownGroups[btnGroupIndex].options.forEach(function(optionItem,optionIndex){
                            //     tryRemoveValue(dataSource.data[btnGroupIndex].options[optionIndex]);
                            //     optionItem.classList.remove('selected');
                            // });

                            if(_searchingResult.length){
                                selectBtnAction(dataSource,_searchingResult, btnGroupIndex, false)
                            }
                            else{
                                selectBtnAction(dataSource,_dropdownGroups, btnGroupIndex, false)
                            }
                        }
                    }
                    console.log(_selectedOptions); 
                }
            }
            
    
            event.stopPropagation();
        };

        function selectBtnAction(dataSource, groups, btnGroundIndex, isAdd){
            if(btnGroundIndex != undefined){
                var group;

                for(var i =0; i< groups.length; i++){
                    if(groups[i].groupIndex == btnGroundIndex){
                        group = groups[i];
                        break;
                    }
                }

                if(!group) throw console.log('selectBtnAction error');

                group.options.forEach(function(optionItem){
                    if(isAdd){
                        tryAddValue(dataSource.data[group.groupIndex].options[optionItem.optionIndex]);
                        optionItem.option.classList.add('selected');
                    }
                    else{
                        tryRemoveValue(dataSource.data[btnGroundIndex].options[optionItem.optionIndex]);
                        optionItem.option.classList.remove('selected');
                    }                 
                });
            }
            else{
                groups.forEach(function(groupItem){
                    groupItem.options.forEach(function(optionItem){
                        if(isAdd){
                            tryAddValue(dataSource.data[groupItem.groupIndex].options[optionItem.optionIndex]);
                            optionItem.option.classList.add('selected');
                        }
                        else{
                            tryRemoveValue(dataSource.data[groupItem.groupIndex].options[optionItem.optionIndex]);
                            optionItem.option.classList.remove('selected');
                        }                       
                    });      
                });
            }
        }

        function toggleValue(optData){
            if(optData.selected)
                _selectedOptions.splice(_selectedOptions.indexOf(optData.value),1);
            else
                _selectedOptions.push(optData.value);
        }

        function tryAddValue(optData){
            if(!optData.selected && !optData.disabled){
                _selectedOptions.push(optData.value);
                optData.selected = true;    
            }       
        }

        function tryRemoveValue(optData){
            if(optData.selected && !optData.disabled){
                _selectedOptions.splice(_selectedOptions.indexOf(optData.value),1);  
                optData.selected = false;
            }               
        }
    }

    function setEventsForDropdownSearchInput(){
        _dropdownSearchInput.onkeyup = function(event){
            _searchingResult = [];
            var searchingResultGroup;
            var searchString = this.value.toLowerCase();

            var allMatchingCounts = _optionsCount;
            
            _dropdownGroups.forEach(function(groupItem, groupIndex){
                var groupMatchingCounts = groupItem.options.length;
                searchingResultGroup = {groupIndex: groupIndex, group:groupItem.group, options:[]};

                groupItem.options.forEach(function(optionItem, optionIndex){               
                    if(optionItem.option.innerText.toLowerCase().indexOf(searchString) != -1){
                        optionItem.option.style.display = 'list-item';
                        searchingResultGroup.options.push({optionIndex: optionIndex, option: optionItem.option});
                    }
                    else{
                        optionItem.option.style.display = 'none';
                        groupMatchingCounts--;
                        allMatchingCounts --;
                    }                   
                });

                if(!groupMatchingCounts){
                    groupItem.group.style.display = 'none';
                }
                else{
                    groupItem.group.style.display = 'flex';
                }

                if(groupMatchingCounts)
                    _searchingResult.push(searchingResultGroup);
            });  



            if(!allMatchingCounts){
                DropdownNoneMatchingBox.style.display = 'block';
                DropdownListBox.style.display = 'none';
            }
            else{
                DropdownNoneMatchingBox.style.display = 'none';
                DropdownListBox.style.display = 'block';
            }
        };
    }

    function setSelectedNumber(){
        if(!_selectedNumberElement) return;
        _selectedNumberElement.innerText = _selectedOptions.length;
    }
}
