window.addEventListener('scroll', ()=>{
  const scrollTop = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const percent = (scrollTop / height) * 100;
  document.getElementById('progress').style.width = percent + '%';
});
