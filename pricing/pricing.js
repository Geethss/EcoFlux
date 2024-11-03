function togglePricing() {
    const isYearly = document.getElementById("pricing-toggle").checked;
    
    document.getElementById("basic-price").textContent = isYearly ? "₹10000 / yr" : "₹1000 / mo";
    document.getElementById("pro-price").textContent = isYearly ? "₹20000 / yr" : "₹2000 / mo";
    document.getElementById("enterprise-price").textContent = isYearly ? "₹50000 / yr" : "₹5000 / mo";
}