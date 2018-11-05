var btn = document.getElementById('b');
var triangle = document.getElementById('triangle');
var selectbox = document.getElementsByClassName('select-box')[0];
btn.addEventListener('click',function(){
    triangle.classList.toggle('ani');
    selectbox.classList.toggle('expanded');
});
