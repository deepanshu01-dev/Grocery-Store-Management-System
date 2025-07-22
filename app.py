from flask import Flask, render_template, request, jsonify, redirect
import sql_connection as sc

app = Flask(__name__)

@app.route('/')
def gs():
    return render_template('index.html')


@app.route('/add_product', methods=['POST'])
def add_product():
    try:
        data = request.get_json()
        print("Received data:", data)

        cursor = sc.cnx.cursor()
        query = "INSERT INTO Products(name, category, price) VALUES (%s, %s, %s)"
        cursor.execute(query, (data['name'], data['category'], data['price']))

        sc.cnx.commit()
        cursor.close()

        return jsonify({"message": "Product added successfully!"})

    except Exception as e:
        print("Error:", e)
        return jsonify({"error": "Failed to add product."}), 500
    

@app.route('/get_products', methods=['GET'])
def get_products():
    cursor = sc.cnx.cursor()
    query = ("SELECT product_id, name, category, price FROM Products;")
    cursor.execute(query)
    products = cursor.fetchall()
    cursor.close()
    # print(products)

    return jsonify(products)


@app.route('/products_page')
def products_page():
    return render_template('products.html')


@app.route('/add_customers', methods=['POST'])    
def addcustomers():
    try:
        cursor = sc.cnx.cursor()
        query = "INSERT INTO Customers(name, email, city) VALUES (%s, %s, %s)"
        data = request.get_json()
        cursor.execute(query, (data['customerName'], data['customerEmail'], data['customerCity']))
        sc.cnx.commit()
        cursor.close()

        return jsonify({"message": 'Customer Details added Successfully!'}), 200

    except Exception as e:
        print("ERROR! ")


@app.route('/get_customers_data', methods=['GET'])
def get_customers():
    cursor = sc.cnx.cursor()
    cursor.execute("SELECT customer_id, name, email, city FROM Customers;")
    customers = cursor.fetchall()
    cursor.close()

    return jsonify(customers) 

@app.route('/customers_page')
def customers_page():
    return render_template('customer.html')


@app.route('/add_orders', methods=['POST'])
def add_orders():
    try:
        cursor = sc.cnx.cursor()
        query = 'INSERT INTO Orders(quantity, total_amount ) VALUES (%s, %s)'
        data = request.get_json()
        cursor.execute(query, (data['quantity'], data['total_amount']))
        sc.cnx.commit()
        cursor.close()

        return jsonify({"message": 'Orders Details added Successfully!'}), 200

    except Exception as e:
        print(e)

@app.route('/orders_page')
def orders_page():
    return render_template('orders.html')

@app.route('/get_order_details', methods=['GET'])
def get_order_details():
    cursor = sc.cnx.cursor()
    cursor.execute('SELECT * FROM Orders')

    orders = cursor.fetchall()
    cursor.close()

    return jsonify(orders)

if __name__ == '__main__':
    app.run(debug=True)


