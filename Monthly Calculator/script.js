function calculateMonthlyPayment() {
    const principal = parseFloat(document.getElementById('principal').value);
    const annualInterest = parseFloat(document.getElementById('interest').value);
    const months = parseInt(document.getElementById('months').value);

    if (isNaN(principal) || isNaN(annualInterest) || isNaN(months)) {
        document.getElementById('result').textContent = 'Please enter valid numbers for all fields.';
        return;
    }

    const monthlyInterest = annualInterest / 100 / 12;
    const monthlyPayment = principal * monthlyInterest * Math.pow(1 + monthlyInterest, months) / (Math.pow(1 + monthlyInterest, months) - 1);

    document.getElementById('result').textContent = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
}