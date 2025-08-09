  const dock = document.querySelector('.dock');
        const toggleDock = document.getElementById('toggle-dock');
        const hiddenToggle = document.querySelector('.hidden-toggle');
        
        function toggleDockVisibility() {
            dock.classList.toggle('hidden');
            toggleDock.textContent = dock.classList.contains('hidden') ? '>' : '<';
        }
        
        toggleDock.addEventListener('click', toggleDockVisibility);
        hiddenToggle.addEventListener('click', toggleDockVisibility);