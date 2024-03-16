document.addEventListener('DOMContentLoaded', function() {
    const incrementBtn = document.getElementById('increment');
    const decrementBtn = document.getElementById('decrement');
    const clearBtn = document.getElementById('clear');
    const countSpan = document.getElementById('count');
    const errorDiv = document.getElementById('error');
    
    let count = 0;

    incrementBtn.addEventListener('click', function() {
      count++;
      countSpan.innerHTML = count;
      updateClearButton();
      hideError();
    });

    decrementBtn.addEventListener('click', function() {
      if (count > 0) {
        count--;
        countSpan.innerHTML = count;
        updateClearButton();
        hideError();
      } else {
        showError();
      }
    });

    clearBtn.addEventListener('click', function() {
      count = 0;
      countSpan.innerHTML = count;
      hideError();
    });

    function updateClearButton() {
      clearBtn.style.display = 'block';
    }

    function showError() {
      errorDiv.style.display = 'block';
    }

    function hideError() {
      errorDiv.style.display = 'none';
    }
  });