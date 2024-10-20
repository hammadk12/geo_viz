import pandas as pd
import os

# File Path
file_path = 'src/app/data/retail_dataset.csv'

# Construct the absolute path
absolute_path = os.path.join(os.getcwd(), file_path)
print('Looking for file at:', absolute_path)

if os.path.isfile(absolute_path):
    data = pd.read_csv(absolute_path)
    print('Dataset loaded successfully.')
    print(data.head())
else:
    print(f'File not found at: {absolute_path}')