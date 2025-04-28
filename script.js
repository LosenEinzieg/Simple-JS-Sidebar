const close = document.getElementById('closeSidebarBtn');

close.addEventListener('click', function() {
  document.getElementById('sidebar').style.right = '-250px';
});

const open = document.getElementById('openSidebarBtn');

open.addEventListener('click', function() {
  document.getElementById('sidebar').style.right = '0px';
});
