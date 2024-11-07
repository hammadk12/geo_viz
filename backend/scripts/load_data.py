import pandas as pd
import os

print('Hello World')
# File Path
file_path = './data/retail_dataset1.csv'

try:
    import chardet
    print(f"chardet version: {chardet.__version__}")
except ImportError as e:
    print(f"Import Error: {e}")

# Print current working directory for debugging
print('Current Directory:', os.getcwd())
# Check if the file exists
if os.path.exists(file_path):
    # Load the dataset
    data = pd.read_csv(file_path, encoding='ISO-8859-1')
    print('Dataset loaded successfully.')
    print(data.head())
else:
    print(f'File not found at: {file_path}')

# How to activate venv:
# 1. Navigate to correct directory (geo_viz\geo_viz\backend)
# 2. Run .venv\Scripts\Activate
# 3. Check for (.venv) at beginning of terminal
# 4. Use python scripts/load_data.py to run file