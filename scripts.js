document.getElementById('ticketForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const game = document.getElementById('game').value;
    const quantity = document.getElementById('quantity').value;
    const total = document.getElementById('total').textContent;

    alert(`Your order for ${quantity} tickets to the ${game} game has been submitted for $${total}. 
Please check your email for confirmation of ticket availability within 24 hours.`);

    // Optionally clear the form after submission
    e.target.reset();
    document.getElementById('total').textContent = "0.00";
});