function toast({title='', message='',type='success', duration=1000}){
    const main = document.getElementById('toast')
    if(main){
        const toast = document.createElement('div');
 const clearRemoveId = setTimeout(function (){
      main.removeChild(toast);
    },duration+1000)
        toast.onclick = function (e){
            if(e.target.closest('.toast__close')){
                main.removeChild(toast);
                clearTimeout(clearRemoveId);
            }
        }
        const icons = {
            success:'fa-sharp fa-solid fa-circle-check',
            error:'fa-sharp fa-solid fa-triangle-exclamation',
            warning:"fa-sharp fa-solid fa-circle-exclamation",
        }
        const icon = icons[type];
        const delay = (duration/1000).toFixed(2);
        toast.style.animation = ` slide ease .3s, fadeOut linear .1s ${delay}s forwards`;
       toast.classList.add('toast',`toast--${type}`);
       toast.innerHTML = `
       <div class="toast__icon ">
       <i class="${icon}"></i>
   </div>
   <div class="toast__body">
       <h3 class="toast__title">${title}</h3>
       <p class="toast__msg">${message}</p>
   </div>
   <div class="toast__close">
       <i class="fa fa-xmark"></i>
   </div>
       `;
       main.appendChild(toast)
      
    };
};
function showSuccess(){
    toast({
        title:'success',
        message:'may vi tinh da ket noi wifi',
        type:'success',
        duration:1000
    });
};
function showError(){
    toast({
        title:'Error',
        message:'loi',
        type:'error',
        duration:3000
    });
}