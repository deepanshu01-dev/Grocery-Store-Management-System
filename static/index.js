// products details
async function addProducts() {
  const product_name = document.getElementById('product_name').value;
  const product_category = document.getElementById('product_category').value;
  const product_price = document.getElementById('product_price').value;

  if (!product_name || !product_category || !product_price) {
    alert("Please fill all the Product details! ");
    return;
  }

  const productDetails = {
    name : product_name,
    category: product_category,
    price: product_price
  }

    const response = await fetch('/add_product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productDetails)
    });

    if (response.ok) {
      const result = await response.json();
      alert(`Success: ${result.message}`);
    }
    else {
      alert("failed to add products!");
    }
  
  document.getElementById('product_name').value = '';
  document.getElementById('product_category').value = '';
  document.getElementById('product_price').value = '';
};

// customer details
async function addCustomers() {
  const customer_name = document.getElementById('customer_name').value;
  const customer_email = document.getElementById('customer_email').value;
  const customer_city = document.getElementById('customer_city').value;

  if (!customer_name || !customer_email || !customer_city) {
    alert("Please fill all the customer Details!");
    return;
  }

  const customerDetails  = {
    customerName : customer_name,
    customerEmail : customer_email,
    customerCity : customer_city
  };

  const response = await fetch('/add_customers', {
    method : 'POST',
    headers : {'Content-Type' : 'application/json'},
    body : JSON.stringify(customerDetails)
  });

  if (response.ok) {
    const result = await response.json();
    alert(`Success: ${result.message}`);
  }

  else {
    alert("Failed to Add customer details! ");
  }

  product_name = document.getElementById('product_name').value = '';
  product_category = document.getElementById('product_category').value = '';
  product_price = document.getElementById('product_price').value = '';
};

// order details
async function add_orders() {
  const quantity = document.getElementById('quantity').value;
  const total_amount = document.getElementById('total_amount').value;

  if (!quantity || !total_amount) {
    alert("Please fill all the Orders Details!");
    return;
  }

  const orderDetails  = {
    quantity : quantity,
    total_amount : total_amount,
  };

  const response = await fetch('/add_orders', {
    method : 'POST',
    headers : {'Content-Type' : 'application/json'},
    body : JSON.stringify(orderDetails)
  });

  if (response.ok) {
    const result = await response.json();
    alert(`Success: ${result.message}`);
  }

  else {
    alert("Failed to Add Orders details! ");
  }

  document.getElementById('quantity').value = ' ';
  document.getElementById('total_amount').value = ' ';
  
}

function submitwork() {

  document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addProducts(); 
  });

  document.getElementById('customerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addCustomers();
  });

  document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    add_orders();
  });
};
submitwork();


