# How to activate venv:
# 1. Navigate to correct directory (geo_viz\geo_viz\backend)
# 2. Run .venv\Scripts\Activate
# 3. Check for (.venv) at beginning of terminal
# 4. Use python scripts/load_data.py to run file

import pandas as pd
import os
import json

# File Path
file_path = './data/retail_dataset1.csv'

# Print current working directory for debugging
print('Current Directory:', os.getcwd())

# Check if the file exists
if os.path.exists(file_path):
    # Load the dataset
    data = pd.read_csv(file_path, encoding='ISO-8859-1')
    print(data)

     # Identifying Unique Users
    unique_users = data['CustomerID'].nunique()

    # Identifying Unique Locations
    unique_locations = data['Country'].unique().tolist()

    # Number of Unique Locations
    number_of_unique_locations = data['Country'].nunique()

    # Number of Orders Per Location
    order_counts = data['Country'].value_counts().to_dict()

    # Revenue Per Location
    data['TotalRevenue'] = data['UnitPrice'] * data['Quantity']
    revenue_per_location = data.groupby('Country')['TotalRevenue'].sum().reset_index().sort_values(by='TotalRevenue', ascending=False)
    revenue_per_location = revenue_per_location.to_dict(orient='records')

    # Total Revenue
    total_revenue = data['TotalRevenue'].sum()
    print(f"Total Revenue: {total_revenue}")

    # Revenue Per Item
    data['TotalRevenue'] = data['UnitPrice'] * data['Quantity']

    # Filter to remove rows where value is 0 or negative
    cleaned_data = data[data['TotalRevenue'] > 0]

    item_revenue = (
        cleaned_data.groupby(['StockCode', 'Description'])['TotalRevenue']
        .sum() # Sum revenue per item
        .reset_index() # Convert groupby object to DataFrame
        .sort_values(by='TotalRevenue', ascending=False) # Sort by revenue in descending order
    )

    # Convert DataFrame to dict (JSON-serializable)
    item_revenue = item_revenue.to_dict(orient='records')
    

    # Monthly Revenue + Orders
    # Convert InvoiceDate with format 'day-month-year hour:minute'
    data['InvoiceDate'] = pd.to_datetime(data['InvoiceDate'], format='%d-%m-%Y %H:%M', errors='coerce')

    # Extract month and year
    data['Month'] = data['InvoiceDate'].dt.to_period('M')

    # Calculate number of orders per month
    monthly_orders = data.groupby('Month').size()

    # Calculate total revenue per month
    monthly_revenue = (data['UnitPrice'] * data['Quantity']).groupby(data['Month']).sum()

    # Prepare summary DataFrame
    monthly_summary = pd.DataFrame({
        'Month': monthly_orders.index.astype(str),
        'Orders': monthly_orders.values,
        'Revenue': monthly_revenue.values
    })

    monthly_summary = monthly_summary.sort_values(by='Revenue', ascending=False)

    monthly_summary = monthly_summary.to_dict(orient='records')
    print(f"Monthly Stats: {monthly_summary}")


    # Save metric as JSON file
    metrics = {'total_unique_users': unique_users,
               'unique_locations': unique_locations,
               'number_of_locations': number_of_unique_locations,
               'order_count_per_location': order_counts,
               'revenue_per_location': revenue_per_location,
               'total_revenue': total_revenue,
               'item_revenue': item_revenue,
               'monthly_summary': monthly_summary
                                                        }

    # Path for JSON file
    json_file_path = '../public/data/raw.json'

    # Save metrics as a JSON file
    with open(json_file_path, 'w') as json_file: json.dump(metrics, json_file, indent=4)

    print(f"Metrics saved successfully at: {json_file_path}")
else:
    print(f'File not found at: {file_path}')


