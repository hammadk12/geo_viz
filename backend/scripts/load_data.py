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
    print(data.head())

     # Identifying Unique Users
    unique_users = data['CustomerID'].nunique()
    print(f"Total Unique Users: {unique_users}")

    # Identifying Unique Locations
    unique_locations = data['Country'].unique().tolist()
    print(f"Unique Locations: {unique_locations}")

    # Number of Unique Locations
    number_of_unique_locations = data['Country'].nunique()
    print(f"Total Unique Locations: {number_of_unique_locations}")

    # Number of Orders Per Location
    order_counts = data['Country'].value_counts().to_dict()
    print(f"Order Count Per Location: {order_counts}")

    # Save metric as JSON file
    metrics = {'total_unique_users': unique_users,
               'unique_locations': unique_locations,
               'number_of_locations': number_of_unique_locations,
               'order_count_per_location': order_counts
                                                        }

    # Path for JSON file
    json_file_path = '../src/app/public/data/metrics.json'

    # Save metrics as a JSON file
    with open(json_file_path, 'w') as json_file: json.dump(metrics, json_file, indent=4)

    print(f"Metrics saved successfully at: {json_file_path}")
else:
    print(f'File not found at: {file_path}')


