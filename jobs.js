function expandJob(card) {
    // Check if it's already expanded
    const isExpanded = card.classList.contains('expanded');
    
    // Close all other open cards first (High-end feel)
    document.querySelectorAll('.job-card').forEach(c => {
        c.classList.remove('expanded');
    });

    // If it wasn't expanded, open it
    if (!isExpanded) {
        card.classList.add('expanded');
    }
}

// Logic for the Filter button (Mockup)
document.querySelector('.filter-btn').addEventListener('click', () => {
    alert("Filtering jobs based on your SA location and criteria...");
});

// Function to show the modal
function showVerification() {
    document.getElementById('verificationModal').style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    document.getElementById('verificationModal').style.display = 'none';
}

// Attach this to your apply buttons
document.querySelectorAll('.apply-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevents the job card from collapsing/expanding
        showVerification();
    });
});

// Close modal if user clicks outside of the box
window.onclick = function(event) {
    let modal = document.getElementById('verificationModal');
    if (event.target == modal) {
        closeModal();
    }
}