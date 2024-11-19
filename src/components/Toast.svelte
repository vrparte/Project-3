<!-- Toast.svelte -->
<script>
    export let message = '';
    export let type = 'success';
    export let duration = 3000;
  
    let visible = true;
  
    setTimeout(() => {
      visible = false;
    }, duration);
  </script>
  
  {#if visible}
    <div class="fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg text-white transition-opacity duration-300"
         class:bg-green-500={type === 'success'}
         class:bg-red-500={type === 'error'}
         class:bg-blue-500={type === 'info'}>
      {message}
    </div>
  {/if}
  
  <style>
    .transition-opacity {
      transition: opacity 0.3s ease-in-out;
    }
  </style>