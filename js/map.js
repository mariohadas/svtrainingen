document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.legende-element > div');
    const textBlocks = document.querySelectorAll('.legende-text-block');

    textBlocks.forEach(block => {
        block.querySelector('h2').addEventListener('click', () => toggleBlock(block));
    });

    function expandBlock(block) {
        collapseAllBlocks();
        block.style.flex = '2.5';
        block.querySelector('p').style.display = 'block';
    }

    function collapseAllBlocks() {
        elements.forEach(element => {
            element.style.flex = '1';
            if (element.classList.contains('legende-text-block')) {
                element.querySelector('p').style.display = 'none';
            }
        });
    }

    function toggleBlock(block) {
        if (block.querySelector('p').style.display === 'block') {
            collapseAllBlocks();
        } else {
            expandBlock(block);
        }
    }
});
