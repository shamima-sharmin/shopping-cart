
document.getElementById('case-increase').addEventListener('click', function() {
    handleProductChange('case', true);
})

document.getElementById('case-decrease').addEventListener('click', function() {
    handleProductChange('case', false);
})

document.getElementById('phone-increase').addEventListener('click', function() {
    handleProductChange('phone', true);
})

document.getElementById('phone-decrease').addEventListener('click', function () {
    handleProductChange('phone', false);
})

function handleProductChange(product, isIncrease) {
    const productCount = getInputValue(product);
    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productCount + 1;
    } else if (isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }
    document.getElementById(product + '-count').value = productNewCount;
    let productTotal = 0;
    if (product == 'phone') {
        productTotal = productNewCount * 1219;
    }
    if (product == 'case') {
        productTotal = productNewCount * 59;
    }
    document.getElementById(product + '-total').innerText = '$ ' + productTotal;
    calculateTotal();
}

function calculateTotal() {
    const phoneCount = getInputValue('phone');
    const caseCount = getInputValue('case');

    const totalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById('total-price').innerText = '$ ' + totalPrice;

    const tax = parseFloat((totalPrice * .1).toFixed(0));
    document.getElementById('tax').innerText = '$ ' + tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('total').innerText = '$ ' + grandTotal;
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    return productCount;
}

document.getElementById('checkout').addEventListener('click', () => {
    document.getElementById('main-container').style.display = 'none';
    document.getElementById('purchase').style.display = 'block';
})

document.getElementById('cross-purchase').addEventListener('click', () => {
    document.getElementById('purchase').style.display = 'none';
    document.getElementById('main-container').style.display = 'block';
})